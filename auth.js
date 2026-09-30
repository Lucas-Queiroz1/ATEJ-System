/* ============================================================
   ATEJ · Painel de Gestão — proteção de login
   Este arquivo roda ANTES do script.js. Ele:
   1) Confere se existe uma sessão válida (usuário logado)
   2) Se não existir, manda a pessoa direto para login.html
   3) Se existir, busca nome/papel do usuário e só então libera
      o carregamento do resto do painel (script.js)
   ============================================================ */
(async () => {
  const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  window.sb = sb;

  const { data: { session } } = await sb.auth.getSession();

  if (!session) {
    window.location.replace('login.html');
    return;
  }

  const { data: profile } = await sb
    .from('profiles')
    .select('nome, role')
    .eq('id', session.user.id)
    .single();

  window.CURRENT_USER = {
    id: session.user.id,
    email: session.user.email,
    nome: (profile && profile.nome) || session.user.email,
    role: (profile && profile.role) || 'user',
  };

  // libera a exibição da página (estava escondida via CSS até aqui)
  document.documentElement.classList.remove('auth-checking');

  // só agora carrega o restante do painel
  const s = document.createElement('script');
  s.src = 'script.js';
  document.body.appendChild(s);

  // desloga se a sessão expirar/for encerrada em outra aba
  sb.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_OUT') window.location.replace('login.html');
  });
})();

async function logout() {
  await window.sb.auth.signOut();
  window.location.replace('login.html');
}
