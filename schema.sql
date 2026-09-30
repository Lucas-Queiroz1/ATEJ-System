-- ============================================================
-- ATEJ · Painel de Gestão — configuração de login e usuários
-- Rode este script uma vez em: Supabase → SQL Editor → New query
-- ============================================================

-- Tabela com os dados de cada usuário (o login/senha em si já fica
-- guardado com segurança pelo Supabase Auth; esta tabela só guarda
-- nome e papel de cada pessoa)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nome text not null,
  email text not null,
  role text not null default 'user' check (role in ('admin','user')),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Qualquer usuário logado pode ver a lista de usuários (nome/papel)
create policy "usuarios podem ver perfis"
  on public.profiles for select
  to authenticated
  using (true);

-- Ninguém edita perfis diretamente pelo navegador — isso é feito
-- apenas pela função segura (Edge Function) com a chave de serviço.
-- (nenhuma policy de insert/update/delete = bloqueado por padrão)

-- ------------------------------------------------------------
-- Depois de rodar este script, cadastre o SEU usuário admin:
--
-- 1. Vá em Authentication → Users → Add user (email + senha sua)
-- 2. Copie o "User UID" que aparecer
-- 3. Rode o comando abaixo, trocando o UID e o nome:
--
-- insert into public.profiles (id, nome, email, role)
-- values ('COLE-O-UID-AQUI', 'Seu nome', 'seu@email.com', 'admin');
-- ------------------------------------------------------------
