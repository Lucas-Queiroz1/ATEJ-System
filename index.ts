// ============================================================
// ATEJ · Painel de Gestão — criação de usuários (somente admin)
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
    "Access-Control-Allow-Headers": "authorization, content-type",
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

    // 3) Lê os dados do novo usuário
    const { email, senha, nome, role } = await req.json();
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
