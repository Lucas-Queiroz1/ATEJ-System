// ============================================================
// ATEJ · Painel de Gestão — criação e exclusão de usuários (somente admin)
//
// Esta função roda no servidor do Supabase, nunca no navegador.
// Por isso ela pode usar a "service role key" com segurança —
// essa chave JAMAIS deve ir para o index.html/script.js.
//
// Deploy (uma vez, veja instruções completas no README enviado):
//   supabase functions deploy admin-create-user
// ============================================================

import { createClient } from "npm:@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

Deno.serve(async (req) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  try {
    // 1) Identifica quem está chamando, usando o token que o navegador enviou
    const authHeader = req.headers.get("Authorization") || "";
    const callerToken = authHeader.replace("Bearer ", "");
    if (!callerToken) {
      return new Response(JSON.stringify({ error: "Não autenticado." }), { status: 401, headers: cors });
    }

    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    const { data: callerData, error: callerErr } = await admin.auth.getUser(callerToken);
    if (callerErr || !callerData?.user) {
      return new Response(JSON.stringify({ error: "Sessão inválida." }), { status: 401, headers: cors });
    }

    // 2) Confere se quem está chamando é realmente admin
    const { data: callerProfile } = await admin
      .from("profiles")
      .select("role")
      .eq("id", callerData.user.id)
      .single();

    if (!callerProfile || callerProfile.role !== "admin") {
      return new Response(JSON.stringify({ error: "Apenas administradores podem cadastrar usuários." }), {
        status: 403,
        headers: cors,
      });
    }

    // 3) Lê os dados enviados e decide se é para criar ou excluir um usuário
    const body = await req.json();
    const acao = body.acao === "excluir" ? "excluir" : (body.acao === "editar" ? "editar" : "criar");

    if (acao === "excluir") {
      const { id } = body;
      if (!id) {
        return new Response(JSON.stringify({ error: "Informe o usuário a excluir." }), { status: 400, headers: cors });
      }
      if (id === callerData.user.id) {
        return new Response(JSON.stringify({ error: "Você não pode excluir o seu próprio acesso." }), { status: 400, headers: cors });
      }

      const { error: delProfileErr } = await admin.from("profiles").delete().eq("id", id);
      if (delProfileErr) {
        return new Response(JSON.stringify({ error: delProfileErr.message }), { status: 400, headers: cors });
      }

      const { error: delAuthErr } = await admin.auth.admin.deleteUser(id);
      if (delAuthErr) {
        return new Response(JSON.stringify({ error: delAuthErr.message }), { status: 400, headers: cors });
      }

      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    if (acao === "editar") {
      const { id, nome, role, novaSenha } = body;
      if (!id || !nome) {
        return new Response(JSON.stringify({ error: "Informe o usuário e o nome." }), { status: 400, headers: cors });
      }
      if (novaSenha && String(novaSenha).length < 6) {
        return new Response(JSON.stringify({ error: "A nova senha precisa ter pelo menos 6 caracteres." }), {
          status: 400,
          headers: cors,
        });
      }

      const { error: updProfileErr } = await admin
        .from("profiles")
        .update({ nome, role: role === "admin" ? "admin" : "user" })
        .eq("id", id);
      if (updProfileErr) {
        return new Response(JSON.stringify({ error: updProfileErr.message }), { status: 400, headers: cors });
      }

      if (novaSenha) {
        const { error: updPassErr } = await admin.auth.admin.updateUserById(id, { password: novaSenha });
        if (updPassErr) {
          return new Response(JSON.stringify({ error: updPassErr.message }), { status: 400, headers: cors });
        }
      }

      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const { email, senha, nome, role } = body;
    if (!email || !senha || !nome) {
      return new Response(JSON.stringify({ error: "Preencha e-mail, senha e nome." }), { status: 400, headers: cors });
    }
    if (String(senha).length < 6) {
      return new Response(JSON.stringify({ error: "A senha precisa ter pelo menos 6 caracteres." }), {
        status: 400,
        headers: cors,
      });
    }

    // 4) Cria o usuário de fato (login) já confirmado, sem precisar de e-mail
    const { data: created, error: createErr } = await admin.auth.admin.createUser({
      email,
      password: senha,
      email_confirm: true,
    });
    if (createErr) {
      return new Response(JSON.stringify({ error: createErr.message }), { status: 400, headers: cors });
    }

    // 5) Salva nome, e-mail e papel na tabela profiles
    const { error: profileErr } = await admin.from("profiles").insert({
      id: created.user.id,
      nome,
      email,
      role: role === "admin" ? "admin" : "user",
    });
    if (profileErr) {
      // se falhar em salvar o perfil, desfaz a criação do login para não ficar usuário "fantasma"
      await admin.auth.admin.deleteUser(created.user.id);
      return new Response(JSON.stringify({ error: profileErr.message }), { status: 400, headers: cors });
    }

    return new Response(JSON.stringify({ ok: true, id: created.user.id }), {
      status: 200,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), { status: 500, headers: cors });
  }
});
