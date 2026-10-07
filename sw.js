/* ATEJ · service worker mínimo
   Só existe para o painel poder ser instalado como app. NÃO guarda dados:
   tudo o que vem do Supabase (login, tarefas, financeiro) sempre vai direto à rede,
   então ninguém vê informação velha nem dado de outra sessão. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* deixa o navegador buscar tudo normalmente */ });
