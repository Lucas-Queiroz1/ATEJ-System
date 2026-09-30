# Como ativar o login e o cadastro de usuários

O painel passou a exigir login. Só quem você cadastrar consegue entrar.
Isso usa o **Supabase** (gratuito) para guardar os logins e liberar o acesso.

## Passo 1 — Criar o projeto (2 minutos)
1. Acesse https://supabase.com e crie uma conta grátis.
2. Clique em **New project**. Escolha um nome e uma senha de banco (guarde essa senha, é só para emergências, não é a senha de login do painel).
3. Espere o projeto terminar de ser criado (leva ~1 minuto).

## Passo 2 — Rodar o script do banco de dados
1. No menu lateral do Supabase, vá em **SQL Editor** → **New query**.
2. Abra o arquivo `supabase/schema.sql` (que te enviei), copie tudo e cole ali.
3. Clique em **Run**.

## Passo 3 — Pegar a URL e a chave pública do projeto
1. Vá em **Project Settings** → **API**.
2. Copie o **Project URL** e a **anon public key**.
3. Abra o arquivo `supabase-config.js` e substitua:
   ```js
   const SUPABASE_URL = 'https://SEU-PROJETO.supabase.co';
   const SUPABASE_ANON_KEY = 'SUA-CHAVE-ANON-PUBLICA-AQUI';
   ```

## Passo 4 — Criar o SEU usuário admin
1. No Supabase, vá em **Authentication** → **Users** → **Add user**.
2. Preencha seu e-mail e uma senha. Marque a opção para já confirmar o e-mail (Auto Confirm User), se aparecer.
3. Copie o **User UID** que aparece na lista.
4. Volte no **SQL Editor** e rode (trocando os valores):
   ```sql
   insert into public.profiles (id, nome, email, role)
   values ('COLE-O-UID-AQUI', 'Seu nome', 'seu@email.com', 'admin');
   ```

Pronto — esse é o único usuário criado "na mão". Todos os próximos você cadastra
direto pela tela **Usuários** dentro do painel (ela só aparece pra quem é admin).

## Passo 5 — Publicar a Edge Function (necessária para cadastrar usuários pelo painel)
Essa função roda no servidor do Supabase e é o que permite você criar novos
usuários com segurança (sem expor nenhuma chave sensível no navegador).

1. Instale a CLI do Supabase (uma vez só): https://supabase.com/docs/guides/cli
2. No terminal, dentro da pasta onde estão os arquivos que te enviei, rode:
   ```
   supabase login
   supabase link --project-ref SEU-PROJECT-REF
   supabase functions deploy admin-create-user
   ```
   (o "project-ref" fica na URL do seu projeto, ex: `abcdefgh` em `abcdefgh.supabase.co`)

Se preferir, posso te guiar por chamada/prints quando você chegar nessa parte —
é o único passo "técnico" de verdade.

## Passo 6 — Subir os arquivos do site
Coloque **todos** os arquivos na mesma pasta do seu site (onde já estão o
`index.html`, `script.js`, `style.css` etc.):

- `login.html` (tela de login)
- `auth.js` (protege o painel)
- `supabase-config.js` (com seus dados preenchidos)
- `index.html` e `script.js` (atualizados)
- pasta `supabase/` (só usada para configurar — não precisa subir pro site)

## Como funciona no dia a dia
- Quem acessar `index.html` sem estar logado é mandado direto pra `login.html`.
- Só admins veem o menu **Usuários** e podem cadastrar gente nova (nome, e-mail, senha temporária e papel: Membro ou Administrador).
- O ícone de sair (no rodapé do menu lateral) encerra a sessão.

## Dúvida comum
**"Posso trocar minha senha depois?"** — Por enquanto a troca de senha é feita
pelo painel do Supabase (Authentication → Users → selecionar a pessoa → Reset
password). Se quiser, depois posso adicionar uma tela de "trocar minha senha"
dentro do próprio painel.
