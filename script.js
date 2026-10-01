/* ============ CONFIGURAÇÃO — edite aqui o nome do seu negócio ============ */
const CONFIG = { empresa: 'ATEJ' };
const LOGGED_USER = window.CURRENT_USER || { nome:'Usuário', role:'user' };
document.getElementById('brand-name').textContent = CONFIG.empresa;
document.getElementById('user-name').textContent = LOGGED_USER.nome;
document.getElementById('user-avatar').textContent = LOGGED_USER.nome.charAt(0).toUpperCase();
document.querySelector('.sidebar-user .user-meta span').textContent = LOGGED_USER.role === 'admin' ? 'Administrador' : 'Membro';
document.getElementById('topbar-date').textContent =
  new Date().toLocaleDateString('pt-BR',{weekday:'long', day:'2-digit', month:'long', year:'numeric'});
document.getElementById('btn-logout').addEventListener('click', () => { if(window.logout) window.logout(); });

/* ============ ÍCONES ============ */
const ICONS = {
  dashboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>',
  clientes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  servicos:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4l-6 6a2 2 0 0 0 2.8 2.8l6-6a4 4 0 0 1 5.4-5.4l-2.8 2.8-2-2z"/></svg>',
  financeiro:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 9.5c0-1.4 1.3-2.5 3-2.5s3 1 3 2.3c0 3-6 1.7-6 4.7 0 1.3 1.3 2.5 3 2.5s3-1.1 3-2.5"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>',
  people:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  kanban:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="6" height="16" rx="1.5"/><rect x="10.5" y="4" width="6" height="10" rx="1.5"/><rect x="18" y="4" width="3" height="7" rx="1.5"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  dots:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>',
  wrench:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4l-6 6a2 2 0 0 0 2.8 2.8l6-6a4 4 0 0 1 5.4-5.4l-2.8 2.8-2-2z"/></svg>',
  dollar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  equipe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="M14 10h4M14 14h4"/></svg>',
  spark:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z"/></svg>',
  swap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 3 4 7l4 4"/><path d="M4 7h11a4 4 0 0 1 4 4v1"/><path d="M16 21l4-4-4-4"/><path d="M20 17H9a4 4 0 0 1-4-4v-1"/></svg>',
  trend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7L22 6"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2.2z"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>',
  chevronLeft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m15 18-6-6 6-6"/></svg>',
  chevronRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m9 18 6-6-6-6"/></svg>',
  calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  folder:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z"/></svg>',
  alertTriangle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4"/><path d="M12 17h.01"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M5 21h14"/></svg>',
  upload:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21V9"/><path d="m7 13 5-5 5 5"/><path d="M5 21h14"/></svg>',
  activity:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  pie:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21.2 15a9 9 0 1 1-9.2-9v9z"/><path d="M12 3a9 9 0 0 1 9 9h-9z"/></svg>',
  barChart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>',
};
ICONS.documentos = ICONS.folder; // ícone do item de menu "Documentos"
ICONS.relatorios = ICONS.activity; // ícone do item de menu "Relatórios"
ICONS.agenda = ICONS.calendar; // ícone do item de menu "Agenda"
ICONS.usuarios = ICONS.shield; // ícone do item de menu "Usuários" (admin)
ICONS.demandas = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h6"/></svg>';

/* ============ ESTADO ============ */
const STATE = { clientes: [], servicos: [], financeiro: [], equipe: [], compromissos: [], documentos: [], usuarios: [], demandas: [], atividades: [], fornecedores: [], series: [] };
let currentModule = 'dashboard';
let modalEditId = null; // id do registro aberto no modal genérico (usado nas opções de vínculo Demanda↔Kanban)
let searchTerm = '';
let drawerToReopen = null; // id do cliente cuja gaveta deve reabrir ao fechar o modal (fluxo "novo/editar serviço" a partir do cliente)
let filterValue = 'todos';
let finMes = null; // {y, m} — mês selecionado na tela Financeiro (m é 0-indexado)
let finLista = 'receber'; // lista aberta no Financeiro: 'receber' (receitas) ou 'pagar' (despesas)
let finAdvOpen = false; // painel "Filtros avançados" aberto?
let finGruposAbertos = new Set(); // contas parceladas com as parcelas abertas na lista
let finAdv = { receber:{}, pagar:{} }; // critérios dos filtros avançados, um conjunto por lista
let finFormTipo = 'receita'; // tipo do lançamento aberto no modal ('receita' = a receber, 'despesa' = a pagar)
let dashMes = null; // {y, m} — mês selecionado na Visão Geral (m é 0-indexado)
let dashSelectedDay = null; // dia (número) selecionado no calendário da Visão Geral
let relatoriosMes = null; // {y, m} — mês selecionado na tela Relatórios

const KEYS = { clientes:'clientes_lista', servicos:'servicos_lista', financeiro:'financeiro_lancamentos', equipe:'equipe_colaboradores', compromissos:'compromissos_lista', documentos:'documentos_lista' };

const MODULES = [
  { id:'dashboard', label:'Visão geral' },
  { id:'kanban', label:'Kanban' },
  { id:'clientes', label:'Clientes' },
  { id:'equipe', label:'Equipe' },
  { id:'demandas', label:'Demandas' },
  { id:'agenda', label:'Agenda' },
  { id:'servicos', label:'Serviços' },
  { id:'financeiro', label:'Financeiro' },
];
if(window.CURRENT_USER && window.CURRENT_USER.role === 'admin'){
  MODULES.push({ id:'usuarios', label:'Usuários' });
}

const KANBAN_COLS = [
  { status:'aguardando', label:'Aguardando', dot:'gray' },
  { status:'andamento',  label:'Em Andamento', dot:'blue' },
  { status:'atrasado',   label:'Atrasado', dot:'red' },
  { status:'concluido',  label:'Concluído', dot:'green' },
];

/* ============ STORAGE (Supabase — compartilhado entre todos os aparelhos) ============ */
// Cada "mod" (clientes, servicos, etc.) corresponde a uma tabela igual no Supabase.
const TABLES = { clientes:'clientes', servicos:'servicos', financeiro:'financeiro', equipe:'equipe', compromissos:'compromissos', documentos:'documentos', demandas:'demandas', atividades:'atividades', fornecedores:'fornecedores' };
const EQUIPE_BUCKET = 'avatars'; // bucket do Supabase Storage onde ficam as fotos dos colaboradores
let equipeFotoFile = null; // arquivo de foto escolhido no modal de colaborador (temporário, até salvar)
let clienteFotoFile = null; // idem, para o modal de cliente

async function loadAll(){
  for(const mod of ['clientes','servicos','financeiro','equipe','compromissos','documentos','demandas','atividades','fornecedores']){
    try{
      const { data, error } = await window.sb.from(TABLES[mod]).select('*');
      if(error){ console.error('Erro ao carregar '+mod, error); STATE[mod] = []; }
      else STATE[mod] = data || [];
    }catch(e){ console.error('Falha ao carregar '+mod, e); STATE[mod] = []; }
    // a "conta principal" de uma venda parcelada guarda só os dados gerais da série;
    // fica fora de STATE.financeiro para não ser somada em dobro nas listas e totais
    if(mod==='financeiro'){
      STATE.series = STATE.financeiro.filter(x=>x.principal===true);
      STATE.financeiro = STATE.financeiro.filter(x=>x.principal!==true);
    }
  }
}
// Grava (cria ou atualiza) só os registros que estão em STATE[mod] agora — nunca
// apaga o resto da tabela. Isso é o que permite duas pessoas em dois aparelhos
// diferentes usarem o painel ao mesmo tempo sem uma sobrescrever a outra.
async function persist(mod){
  try{
    if(!STATE[mod].length) return true;
    const { error } = await window.sb.from(TABLES[mod]).upsert(STATE[mod], { onConflict: 'id' });
    if(error){ console.error('Erro ao salvar '+mod, error); toast('Erro ao salvar no banco: ' + error.message); return false; }
    return true;
  }catch(e){ console.error('Falha ao salvar '+mod, e); toast('Falha ao salvar no banco: ' + e.message); return false; }
}
// Remove só o registro indicado (usado ao excluir), sem tocar em mais nada da tabela.
async function persistDelete(mod, id){
  try{
    const { error } = await window.sb.from(TABLES[mod]).delete().eq('id', id);
    if(error){ console.error('Erro ao excluir de '+mod, error); toast('Erro ao excluir no banco: ' + error.message); return false; }
    return true;
  }catch(e){ console.error('Falha ao excluir de '+mod, e); toast('Falha ao excluir no banco: ' + e.message); return false; }
}

/* ============ COBRANÇA RECORRENTE (serviços marcados como "recorrente") ============
   O ciclo de cada serviço recorrente é ancorado no DIA do "Prazo de Entrega"
   cadastrado no serviço. Ex.: um serviço com prazo dia 20 continua "valendo"
   até o dia 20; a partir do dia 21 (um dia depois), o sistema entende que virou
   o ciclo e já mira a próxima entrega (dia 20 do mês seguinte).
   Toda vez que o painel é aberto, confere se cada serviço recorrente já tem um
   lançamento financeiro para o ciclo atual. Se não tiver, é sinal de que o ciclo
   virou e o sistema:
   1) Cria o lançamento financeiro do novo ciclo, com vencimento no dia do prazo,
      usando o valor do próprio serviço.
   2) Se o serviço estava "Concluído" (do ciclo anterior), volta o status para
      "Aguardando" — assim fica claro o que ainda precisa ser feito NESTE ciclo.
   Isso continua acontecendo ciclo a ciclo até a pessoa desmarcar "Serviço recorrente".
   Importante: o lançamento do ciclo corrente de um serviço recorrente é o MESMO
   lançamento "Serviço: {título}" que o salvamento do serviço já mantém em dia
   (ver saveForm) — aqui só criamos os lançamentos dos ciclos em que ninguém
   editou o serviço, evitando duplicar "Serviço" + "Mensalidade" para o mesmo ciclo. */
function mesReferenciaAtual(){
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
}
// (mantida por compatibilidade; a lógica de ciclo recorrente agora usa
// cicloAtualDoServico(), ancorada no Prazo de Entrega de cada serviço.)

// Dia do mês usado como referência do ciclo: o Prazo de Entrega do serviço.
// Sem prazo definido, cai para a Data de Início; sem nenhum dos dois, vira
// no dia 1º (comportamento antigo).
function diaAncoraDoServico(servico){
  const dataRef = servico.prazoEntrega || servico.dataInicio;
  if(dataRef){
    const dia = parseInt(dataRef.split('-')[2], 10);
    if(!isNaN(dia) && dia >= 1 && dia <= 31) return dia;
  }
  return 1;
}

// Identifica em qual "ciclo" (formato YYYY-MM, representando o mês da PRÓXIMA
// entrega mirada) a data de hoje está. Até o dia do prazo, o ciclo mirado ainda
// é o deste mês; a partir do dia seguinte ao prazo, já mira o mês que vem.
function cicloAtualDoServico(servico){
  const anchor = diaAncoraDoServico(servico);
  const hoje = new Date();
  let ano = hoje.getFullYear();
  let mes = hoje.getMonth(); // 0-indexado
  if(hoje.getDate() > anchor){
    mes += 1;
    if(mes > 11){ mes = 0; ano += 1; }
  }
  return `${ano}-${String(mes+1).padStart(2,'0')}`;
}

// Data de vencimento (YYYY-MM-DD) do ciclo, respeitando o dia âncora e ajustando
// para meses mais curtos (ex.: âncora dia 31 em fevereiro vira dia 28/29).
function vencimentoDoCiclo(servico, cicloKey){
  const anchor = diaAncoraDoServico(servico);
  const [ano, mes] = cicloKey.split('-').map(Number); // mes é 1-indexado
  const ultimoDiaDoMes = new Date(ano, mes, 0).getDate();
  const dia = Math.min(anchor, ultimoDiaDoMes);
  return `${cicloKey}-${String(dia).padStart(2,'0')}`;
}

async function gerarLancamentosRecorrentes(){
  let mudouFin = false;
  let mudouServ = false;

  STATE.servicos.filter(s => s.recorrente === 'sim').forEach(servico => {
    const valorNum = parseFloat(servico.valor) || 0;
    if(valorNum <= 0) return;

    // Prazo estipulado (3/6/12 meses): conta quantos ciclos deste serviço já
    // foram faturados no financeiro. Ao bater o número contratado, para de
    // gerar novas cobranças — o serviço continua existindo, só não "desce"
    // mais valor pro financeiro sozinho.
    const duracao = servico.duracaoRecorrencia;
    if(duracao && duracao !== 'indeterminado'){
      const limite = parseInt(duracao, 10);
      const ciclosFaturados = new Set(
        STATE.financeiro.filter(f => f.servicoId === servico.id && f.mesReferencia).map(f => f.mesReferencia)
      ).size;
      if(ciclosFaturados >= limite) return; // prazo contratado já foi cumprido
    }

    const cicloAtual = cicloAtualDoServico(servico);
    const jaExiste = STATE.financeiro.some(f => f.servicoId === servico.id && f.mesReferencia === cicloAtual);
    if(jaExiste) return;

    const novoPrazo = vencimentoDoCiclo(servico, cicloAtual);

    // Chegou um novo ciclo para este serviço recorrente (ou seja, já passou 1 dia
    // do prazo do ciclo anterior):
    // - se ele tinha ficado "Concluído", volta para "Aguardando" — fica claro
    //   o que ainda precisa ser feito NESTE ciclo.
    // - se ele NÃO tinha sido concluído a tempo (ficou "Aguardando" ou "Em
    //   Andamento"), marca como "Atrasado", já que o ciclo anterior venceu
    //   sem o trabalho ter sido finalizado.
    if(servico.status === 'concluido'){
      servico.status = 'aguardando';
      mudouServ = true;
    } else if(servico.status === 'aguardando' || servico.status === 'andamento'){
      servico.status = 'atrasado';
      mudouServ = true;
    }

    // Atualiza o Prazo de Entrega cadastrado no serviço para o do novo ciclo,
    // pra quem abrir o serviço já ver a próxima data, sem precisar editar na mão.
    if(servico.prazoEntrega !== novoPrazo){
      servico.prazoEntrega = novoPrazo;
      mudouServ = true;
    }

    STATE.financeiro.push({
      id: uid(),
      servicoId: servico.id,
      clienteId: servico.clienteId,
      clienteNome: servicoCliente(servico),
      tipo: 'receita',
      descricao: `Serviço: ${servico.titulo}`,
      valor: valorNum,
      vencimento: novoPrazo,
      status: 'pendente',
      dataPagamento: '',
      mesReferencia: cicloAtual,
    });
    mudouFin = true;
  });

  if(mudouFin) await persist('financeiro');
  if(mudouServ) await persist('servicos');
}

// Marca como "Atrasado" automaticamente o que passou 1 dia do vencimento sem
// ter sido concluído/pago — tanto serviços (não recorrentes; os recorrentes já
// são tratados ciclo a ciclo em gerarLancamentosRecorrentes) quanto lançamentos
// financeiros pendentes. Roda ao abrir o painel e sempre que o dia muda com o
// painel aberto.
async function verificarAtrasos(){
  let mudouServ = false, mudouFin = false;
  const hoje = todayISO();

  STATE.servicos.forEach(s => {
    if(s.recorrente === 'sim') return; // ciclo próprio, tratado à parte
    if(!s.prazoEntrega || s.prazoEntrega >= hoje) return;
    if(s.status === 'aguardando' || s.status === 'andamento'){
      s.status = 'atrasado';
      mudouServ = true;
    }
  });

  let mudouAtv = false;
  STATE.atividades.forEach(a => {
    if(!a.prazo || a.prazo >= hoje) return;
    if(a.status === 'aguardando' || a.status === 'andamento'){
      a.status = 'atrasado';
      mudouAtv = true;
      const sv = a.servicoId ? STATE.servicos.find(x=>x.id===a.servicoId) : null;
      if(sv && (sv.status==='aguardando' || sv.status==='andamento')){ sv.status = 'atrasado'; mudouServ = true; }
    }
  });

  STATE.financeiro.forEach(f => {
    if(f.status !== 'pendente' || !f.vencimento || f.vencimento >= hoje) return;
    f.status = 'atrasado';
    mudouFin = true;
  });

  if(mudouServ) await persist('servicos');
  if(mudouFin) await persist('financeiro');
}


const uid = () => Math.random().toString(36).slice(2,10);
const fmtBRL = n => 'R$ ' + Number(n||0).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
const fmtDate = iso => { if(!iso) return '—'; const [y,m,d]=iso.split('-'); return `${d}/${m}/${y}`; };
// Data de hoje no fuso do próprio aparelho de quem está usando (Brasil), no
// formato AAAA-MM-DD. Importante: NÃO usar toISOString() aqui — ele converte
// pra UTC e adianta a virada do dia em ~3h (a meia-noite de Brasília ainda é
// ~21h em UTC do dia anterior).
const todayISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
};
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toast._t); toast._t = setTimeout(()=>t.classList.remove('show'), 2400);
}
// Cliente de um serviço: o cadastrado (se o nome digitado bate com um) ou o texto digitado
function servicoCliente(s){ if(!s) return 'Sem cliente'; if(s.clienteId){ const c = STATE.clientes.find(x=>x.id===s.clienteId); if(c) return c.nome; } return (s.clienteNome && s.clienteNome!=='—' && s.clienteNome!=='Sem cliente') ? s.clienteNome : 'Sem cliente'; }
function clienteNome(id){ if(!id) return 'Sem cliente'; const c = STATE.clientes.find(x=>x.id===id); return c ? c.nome : '—'; }
// Código de referência exibido no recibo — derivado do próprio id do lançamento,
// então é estável mesmo sem existir um contador sequencial no banco.
function finReferencia(item){
  const base = (item.id || '').toUpperCase().replace(/[^0-9A-Z]/g,'');
  return 'FIN-' + (base.slice(-4) || '0000');
}
function equipeNome(id){ const p = STATE.equipe.find(x=>x.id===id); return p ? p.nome : 'Sem responsável'; }
function responsavelNome(id){ const c = STATE.equipe.find(x=>x.id===id); return c ? c.nome : ''; }
function teamAvatarHTML(x, extraStyle){
  const color = avatarColor(x.id);
  if(x.foto_url) return `<img src="${x.foto_url}" class="team-avatar" style="object-fit:cover;${extraStyle||''}" alt="${(x.nome||'').replace(/"/g,'&quot;')}">`;
  return `<div class="team-avatar" style="background:${color};${extraStyle||''}">${initials(x.nome||'')}</div>`;
}
function findItem(mod,id){ return STATE[mod].find(x=>x.id===id); }
function initials(nome){ return (nome||'?').trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase(); }
const AVATAR_COLORS = ['#4157F0','#0D9488','#DB2777','#16A34A','#F5A524','#7C3AED','#0EA5E9','#DC2626'];
function avatarColor(id){
  let hash = 0;
  for(let i=0;i<id.length;i++){ hash = (hash*31 + id.charCodeAt(i)) >>> 0; }
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
}
function equipeStatusLabel(s){ return {ativo:'Ativo', ferias:'Férias', inativo:'Inativo'}[s] || 'Ativo'; }
function compromissoTipoLabel(t){ return {reuniao:'Reunião', entrega:'Entrega', treinamento:'Treinamento', outro:'Outro'}[t] || 'Compromisso'; }

/* ============ NAV ============ */
function renderNav(){
  const nav = document.getElementById('nav');
  nav.innerHTML = MODULES.map(m=>`
    <button class="nav-item ${currentModule===m.id?'active':''}" data-mod="${m.id}">
      ${ICONS[m.id]}<span>${m.label}</span>
    </button>`).join('');
  nav.querySelectorAll('.nav-item').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      currentModule = btn.dataset.mod; searchTerm=''; filterValue='todos'; render();
    });
  });
}

/* ============ CONFIG DE TOPO POR MÓDULO ============ */
const SEARCH_PLACEHOLDER = { clientes:'Buscar cliente...', servicos:'Buscar serviço...', financeiro:'Buscar conta...', equipe:'Buscar por nome, função ou setor...', kanban:'Buscar atividades ou clientes...', demandas:'Buscar demanda...' };
const NEW_LABEL = { clientes:'Novo Cliente', servicos:'Novo Serviço', financeiro:'Novo Lançamento', equipe:'Novo Colaborador', kanban:'Nova Atividade', demandas:'Nova Demanda' };
const FILTER_OPTIONS = {
  servicos: [['todos','Todos os status'],['aguardando','Aguardando'],['andamento','Em Andamento'],['concluido','Concluído'],['atrasado','Atrasado']],
  equipe: [['todos','Todos os status'],['ativo','Ativo'],['ferias','Férias'],['inativo','Inativo']],
  demandas: [['todos','Todos os status'],['aguardando','Aguardando'],['andamento','Em Andamento'],['atrasado','Atrasado'],['concluido','Concluído']],
};

/* ============ RENDER PRINCIPAL ============ */
function render(){
  renderNav();
  document.getElementById('page-title').textContent = (currentModule==='equipe' || currentModule==='dashboard' || currentModule==='relatorios') ? '' : MODULES.find(m=>m.id===currentModule).label;

  const searchBox = document.getElementById('search-box');
  const searchInput = document.getElementById('search-input');
  const filterSelect = document.getElementById('filter-select');
  const dateEl = document.getElementById('topbar-date');
  const newBtn = document.getElementById('btn-new');

  if(currentModule==='dashboard'){
    searchBox.style.display='none';
    filterSelect.style.display='none';
    dateEl.style.display='none';
    newBtn.style.display='inline-flex';
    newBtn.innerHTML = ICONS.plus + '<span>Nova Atividade</span>';
    newBtn.onclick = () => openAtividadeModal();
  } else if(currentModule==='agenda'){
    searchBox.style.display='none';
    filterSelect.style.display='none';
    dateEl.style.display='none';
    newBtn.style.display='inline-flex';
    newBtn.innerHTML = ICONS.plus + '<span>Nova Demanda</span>';
    newBtn.onclick = () => openModal('demandas', null, agendaDia ? { prazo: agendaDia } : null);
  } else if(currentModule==='equipe' || currentModule==='clientes' || currentModule==='documentos' || currentModule==='relatorios' || currentModule==='usuarios'){
    searchBox.style.display='none';
    filterSelect.style.display='none';
    dateEl.style.display='none';
    newBtn.style.display='none';
  } else {
    dateEl.style.display='none';
    searchBox.style.display='flex';
    searchInput.placeholder = SEARCH_PLACEHOLDER[currentModule];
    searchInput.value = searchTerm;
    searchInput.oninput = (e)=>{ searchTerm = e.target.value; renderContent(); };

    if(FILTER_OPTIONS[currentModule]){
      filterSelect.style.display='inline-block';
      filterSelect.innerHTML = FILTER_OPTIONS[currentModule].map(([v,l])=>`<option value="${v}">${l}</option>`).join('');
      filterSelect.value = filterValue;
      filterSelect.onchange = (e)=>{ filterValue = e.target.value; renderContent(); };
    } else {
      filterSelect.style.display='none';
    }

    newBtn.style.display='inline-flex';
    newBtn.innerHTML = ICONS.plus + '<span>'+NEW_LABEL[currentModule]+'</span>';
    newBtn.onclick = () => currentModule==='kanban' ? openAtividadeModal() : openModal(currentModule);
    if(currentModule==='financeiro') newBtn.style.display='none'; // o Financeiro tem seus próprios botões "+ Nova conta..."
  }

  renderContent();
}

function renderContent(){
  const content = document.getElementById('content');
  if(currentModule==='dashboard') content.innerHTML = renderDashboard();
  else if(currentModule==='kanban'){ content.innerHTML = renderKanban(); attachKanbanEvents(); }
  else if(currentModule==='clientes'){ content.innerHTML = renderClientes(); attachClientesEvents(); }
  else if(currentModule==='equipe'){ content.innerHTML = renderEquipe(); attachEquipeEvents(); }
  else if(currentModule==='servicos') content.innerHTML = renderServicos();
  else if(currentModule==='demandas') content.innerHTML = renderDemandas();
  else if(currentModule==='agenda'){ content.innerHTML = renderAgenda(); attachAgendaEvents(); }
  else if(currentModule==='financeiro') content.innerHTML = renderFinanceiro();
  else if(currentModule==='documentos'){ content.innerHTML = renderDocumentos(); attachDocumentosEvents(); }
  else if(currentModule==='relatorios'){ content.innerHTML = renderRelatorios(); attachRelatoriosEvents(); }
  else if(currentModule==='usuarios'){ content.innerHTML = renderUsuarios(); attachUsuariosEvents(); carregarUsuarios(); }
  attachContentEvents();
}

/* ============ DASHBOARD (VISÃO GERAL) ============ */
function dashRecebidoMes(y, m){
  return STATE.financeiro.filter(f=>{
    if(f.tipo==='despesa' || f.status!=='pago' || !f.dataPagamento) return false;
    const [yy,mm] = f.dataPagamento.split('-').map(Number);
    return yy===y && (mm-1)===m;
  }).reduce((s,x)=>s+Number(x.valor||0),0);
}
function dashChartData(y, m){
  const months = [];
  for(let i=5;i>=0;i--){
    const d = new Date(y, m-i, 1);
    months.push({ y:d.getFullYear(), m:d.getMonth(), label:d.toLocaleDateString('pt-BR',{month:'short'}).replace('.','') });
  }
  return months.map(mo=>{
    const total = STATE.financeiro.filter(f=>{
      if(f.tipo==='despesa' || f.status!=='pago' || !f.dataPagamento) return false;
      const [yy,mm] = f.dataPagamento.split('-').map(Number);
      return yy===mo.y && (mm-1)===mo.m;
    }).reduce((s,x)=>s+Number(x.valor||0),0);
    return { ...mo, total, isSelected: mo.y===y && mo.m===m };
  });
}
function dashChartHTML(y, m){
  const data = dashChartData(y, m);
  const max = Math.max(1, ...data.map(d=>d.total));
  if(data.every(d=>d.total===0)) return `<div class="empty" style="padding:30px 0">Nenhum recebimento registrado ainda.</div>`;
  return `<div class="dash-chart">${data.map(d=>{
    const h = Math.max(2, Math.round((d.total/max)*100));
    return `<div class="dash-chart-bar-wrap"><div class="dash-chart-bar${d.isSelected?' selected':''}" style="height:${h}%" title="${fmtBRL(d.total)}"></div><span class="dash-chart-label${d.isSelected?' selected':''}">${d.label}</span></div>`;
  }).join('')}</div>`;
}
function dashFlowBoard(){
  const cols = KANBAN_COLS.filter(c=>c.status!=='concluido');
  if(kanbanBase().length===0) return `<div class="empty" style="padding:30px 0">Nenhuma atividade cadastrada ainda.</div>`;
  return `<div class="dash-flow-board">${cols.map(col=>{
    const all = kanbanBase().filter(s=>s.status===col.status);
    const items = all.slice(0,3);
    return `<div class="dash-flow-col">
      <div class="dash-flow-col-head"><span class="kanban-dot ${col.dot}"></span>${col.label}<span class="kanban-count">${all.length}</span></div>
      <div class="dash-flow-col-body">${items.map(x=>kanbanCardHTML(x,true)).join('') || '<div class="empty" style="padding:14px 0;font-size:12px">Nenhuma atividade</div>'}</div>
    </div>`;
  }).join('')}</div>`;
}
function dashEquipeHTML(){
  const items = [...STATE.equipe].sort((a,b)=>a.nome.localeCompare(b.nome)).slice(0,4);
  if(!items.length) return `<div class="empty" style="padding:20px 0">Nenhum colaborador cadastrado.</div>`;
  return items.map(x=>{
    return `<div class="dash-team-row" data-team-view="${x.id}">
      ${teamAvatarHTML(x,'width:34px;height:34px;font-size:12px')}
      <div class="dash-team-info"><strong>${x.nome}</strong><span>${x.cargo||'—'}</span></div>
    </div>`;
  }).join('');
}
function dashCompromissos(){
  const hoje = todayISO();
  const manuais = STATE.compromissos.filter(c=>c.data && c.data>=hoje).map(c=>({
    date:c.data, hora:c.hora||'',
    title:c.titulo,
    sub:[c.clienteId?clienteNome(c.clienteId):'', c.hora||''].filter(Boolean).join(' • ') || compromissoTipoLabel(c.tipo),
    mod:'compromissos', id:c.id, tipo:c.tipo
  }));
  const doServico = STATE.servicos.filter(s=>s.prazoEntrega && s.prazoEntrega>=hoje && s.status!=='concluido')
    .map(s=>({date:s.prazoEntrega, hora:'', title:'Entrega: '+s.titulo, sub:servicoCliente(s), mod:'servicos', id:s.id}));
  const doFinanceiro = STATE.financeiro.filter(f=>f.vencimento && f.vencimento>=hoje && f.status!=='pago')
    .map(f=>({date:f.vencimento, hora:'', title:'Vencimento: '+f.descricao, sub:f.clienteNome||'—', mod:'financeiro', id:f.id}));
  return [...manuais, ...doServico, ...doFinanceiro]
    .sort((a,b)=> a.date===b.date ? (a.hora||'').localeCompare(b.hora||'') : a.date.localeCompare(b.date))
    .slice(0,6);
}
function dashCompromissoAccent(item){
  if(item.mod==='servicos') return 'blue';
  if(item.mod==='financeiro') return 'amber';
  return {reuniao:'blue', entrega:'blue', treinamento:'violet', outro:'gray'}[item.tipo] || 'blue';
}
function dashCompromissosHTML(){
  const items = dashCompromissos();
  if(!items.length) return `<div class="empty" style="padding:20px 0">Nenhum compromisso agendado.</div>`;
  return items.map(c=>{
    const d = c.date.split('-')[2];
    const monthAbbr = new Date(c.date+'T00:00:00').toLocaleDateString('pt-BR',{month:'short'}).replace('.','').toUpperCase();
    const accent = dashCompromissoAccent(c);
    const delBtn = c.mod==='compromissos' ? `<button class="icon-btn danger kanban-mini-btn" data-del="${c.mod}" data-id="${c.id}" title="Excluir">${ICONS.trash}</button>` : '';
    return `<div class="dash-compromisso">
      <div class="dash-date-box ${accent}"><span>${d}</span><small>${monthAbbr}</small></div>
      <div class="dash-compromisso-info"><strong>${c.title}</strong><span>${c.sub||'—'}</span></div>
      <div class="row-actions dash-compromisso-actions">
        <button class="icon-btn kanban-mini-btn" data-edit="${c.mod}" data-id="${c.id}" title="Editar">${ICONS.edit}</button>
        ${delBtn}
      </div>
    </div>`;
  }).join('');
}

function monthAgendaItems(y, m){
  const inMonth = iso => { if(!iso) return false; const [yy,mm] = iso.split('-').map(Number); return yy===y && (mm-1)===m; };
  const manuais = STATE.compromissos.filter(c=>inMonth(c.data)).map(c=>({
    date:c.data, hora:c.hora||'',
    title:c.titulo,
    sub:[c.clienteId?clienteNome(c.clienteId):'', c.hora||''].filter(Boolean).join(' • ') || compromissoTipoLabel(c.tipo),
    mod:'compromissos', id:c.id, tipo:c.tipo
  }));
  const doServico = STATE.servicos.filter(s=>inMonth(s.prazoEntrega)).map(s=>({
    date:s.prazoEntrega, hora:'', title:'Entrega: '+s.titulo, sub:servicoCliente(s), mod:'servicos', id:s.id
  }));
  const doFinanceiro = STATE.financeiro.filter(f=>inMonth(f.vencimento)).map(f=>({
    date:f.vencimento, hora:'', title:(f.tipo==='despesa'?'Despesa: ':'Vencimento: ')+f.descricao, sub:f.clienteNome||'—', mod:'financeiro', id:f.id
  }));
  return [...manuais, ...doServico, ...doFinanceiro]
    .sort((a,b)=> a.date===b.date ? (a.hora||'').localeCompare(b.hora||'') : a.date.localeCompare(b.date));
}
const CAL_WEEKDAYS = ['D','S','T','Q','Q','S','S'];
function dashCalendarGridHTML(y, m, selectedDay, byDay){
  const first = new Date(y, m, 1);
  const startWeekday = first.getDay();
  const daysInMonth = new Date(y, m+1, 0).getDate();
  const hoje = new Date();
  const isCurrentMonth = hoje.getFullYear()===y && hoje.getMonth()===m;
  const todayDay = hoje.getDate();

  const headHTML = CAL_WEEKDAYS.map(w=>`<div class="cal-weekday">${w}</div>`).join('');
  let cells = '';
  for(let i=0;i<startWeekday;i++) cells += `<div class="cal-cell empty"></div>`;
  for(let d=1; d<=daysInMonth; d++){
    const events = byDay[d] || [];
    const accents = [...new Set(events.map(e=>dashCompromissoAccent(e)))].slice(0,3);
    const dots = accents.map(c=>`<span class="cal-dot ${c}"></span>`).join('');
    const isToday = isCurrentMonth && d===todayDay;
    const isSelected = selectedDay===d;
    cells += `<div class="cal-cell${isToday?' today':''}${isSelected&&!isToday?' selected':''}" data-cal-day="${d}">
      <span class="cal-daynum">${d}</span>
      <div class="cal-dots">${dots}</div>
    </div>`;
  }
  return `<div class="cal-weekdays">${headHTML}</div><div class="cal-grid">${cells}</div>`;
}
function dashCalendarSideHTML(y, m, selectedDay, byDay){
  const monthLabel = new Date(y,m,1).toLocaleDateString('pt-BR',{month:'long'});
  if(!selectedDay){
    return `<div class="cal-side-title">Selecione um dia</div><div class="empty" style="padding:16px 0;font-size:12.5px">Clique em um dia do calendário para ver os detalhes.</div>`;
  }
  const events = byDay[selectedDay] || [];
  const label = `${selectedDay} de ${monthLabel}`;
  if(!events.length){
    return `<div class="cal-side-title">${label}</div><div class="empty" style="padding:16px 0;font-size:12.5px">Nenhum evento neste dia.</div>`;
  }
  const monthAbbr = new Date(y,m,1).toLocaleDateString('pt-BR',{month:'short'}).replace('.','').toUpperCase();
  const rows = events.map(c=>{
    const accent = dashCompromissoAccent(c);
    return `<div class="dash-compromisso">
      <div class="dash-date-box ${accent}"><span>${selectedDay}</span><small>${monthAbbr}</small></div>
      <div class="dash-compromisso-info"><strong>${c.title}</strong><span>${c.sub||'—'}</span></div>
    </div>`;
  }).join('');
  return `<div class="cal-side-title">${label}</div>${rows}`;
}
function renderCalendarPanel(){
  if(!dashMes){ const now = new Date(); dashMes = { y: now.getFullYear(), m: now.getMonth() }; }
  const agenda = monthAgendaItems(dashMes.y, dashMes.m);
  const byDay = {};
  agenda.forEach(ev=>{ const d = Number(ev.date.split('-')[2]); (byDay[d] = byDay[d]||[]).push(ev); });

  if(dashSelectedDay===null){
    const hoje = new Date();
    if(hoje.getFullYear()===dashMes.y && hoje.getMonth()===dashMes.m) dashSelectedDay = hoje.getDate();
  }
  const daysInMonth = new Date(dashMes.y, dashMes.m+1, 0).getDate();
  if(dashSelectedDay!==null && dashSelectedDay>daysInMonth) dashSelectedDay = null;

  return `
  <div class="cal-body">
    <div class="cal-main">${dashCalendarGridHTML(dashMes.y, dashMes.m, dashSelectedDay, byDay)}</div>
    <div class="cal-side">${dashCalendarSideHTML(dashMes.y, dashMes.m, dashSelectedDay, byDay)}</div>
  </div>`;
}
function refreshCalendarPanel(){
  const el = document.getElementById('cal-panel-body');
  if(el){ el.innerHTML = renderCalendarPanel(); attachCalendarEvents(); }
}
function attachCalendarEvents(){
  document.querySelectorAll('[data-cal-day]').forEach(cell=>{
    cell.addEventListener('click', ()=>{
      dashSelectedDay = Number(cell.dataset.calDay);
      refreshCalendarPanel();
    });
  });
}

function renderDashboard(){
  if(!dashMes){ const now = new Date(); dashMes = { y: now.getFullYear(), m: now.getMonth() }; }

  const totalServicos = STATE.servicos.length;
  const servicosAndamento = STATE.servicos.filter(s=>s.status==='andamento').length;
  const atrasados = STATE.servicos.filter(s=>s.status==='atrasado').length;
  const totalClientes = STATE.clientes.length;
  const clientesAtivos = STATE.clientes.filter(c=>(c.status||'ativo')==='ativo').length;
  const aReceber = STATE.financeiro.filter(f=>{
    if(f.tipo==='despesa' || (f.status!=='pendente' && f.status!=='atrasado') || !f.vencimento) return false;
    const [yy,mm] = f.vencimento.split('-').map(Number);
    return yy===dashMes.y && (mm-1)===dashMes.m;
  }).reduce((s,x)=>s+Number(x.valor||0),0);
  const recebidoMes = dashRecebidoMes(dashMes.y, dashMes.m);
  const monthOptions = finMonthOptions();
  const mesSelecionadoLabel = monthOptions.find(o=>o.y===dashMes.y && o.m===dashMes.m)?.label || equipeMesAtual();

  return `
  <div class="equipe-breadcrumb">${ICONS.spark||''}<span>Central de gestão</span></div>
  <div class="equipe-title-row">
    <div><h2>Visão geral</h2><p>Resumo da operação e dos resultados da empresa</p></div>
    <div class="date-badge date-select-wrap">
      ${ICONS.calendar}
      <select id="dash-month-select">
        ${monthOptions.map(o=>`<option value="${o.y}-${o.m}" ${o.y===dashMes.y && o.m===dashMes.m?'selected':''}>${o.label}</option>`).join('')}
      </select>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><path d="m6 9 6 6 6-6"/></svg>
    </div>
  </div>
  <div class="kpi-grid">
    <div class="kpi-card">
      <div class="kpi-card-top"><div class="kpi-icon blue">${ICONS.wrench}</div></div>
      <div class="kpi-value">${servicosAndamento}</div>
      <div class="kpi-label">Serviços em andamento</div>
      <div class="kpi-compare">de ${totalServicos} cadastrados no total</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-card-top"><div class="kpi-icon green">${ICONS.dollar}</div></div>
      <div class="kpi-value">${fmtBRL(recebidoMes)}</div>
      <div class="kpi-label">Faturamento em ${mesSelecionadoLabel}</div>
      <div class="kpi-compare">${fmtBRL(aReceber)} a receber no mês</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-card-top"><div class="kpi-icon violet">${ICONS.people}</div></div>
      <div class="kpi-value">${clientesAtivos}</div>
      <div class="kpi-label">Clientes ativos</div>
      <div class="kpi-compare">de ${totalClientes} cadastrados</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-card-top"><div class="kpi-icon red">${ICONS.clock}</div>
        ${atrasados>0 ? `<span class="stat-badge red">Requer atenção</span>` : `<span class="stat-badge green">Em dia</span>`}
      </div>
      <div class="kpi-value">${atrasados}</div>
      <div class="kpi-label">Atividades atrasadas</div>
      <div class="kpi-compare">${atrasados>0?'acompanhe no Kanban':'nenhum atraso no momento'}</div>
    </div>
  </div>
  <div class="dash-row">
    <div class="panel">
      <div class="panel-head"><div><h3>Fluxo de serviços</h3><div class="panel-sub">Acompanhamento das atividades prioritárias</div></div><a data-goto="kanban">Ver quadro completo →</a></div>
      ${dashFlowBoard()}
    </div>
    <div class="panel">
      <div class="panel-head"><div><h3>Resultado financeiro</h3><div class="panel-sub">Recebimentos dos últimos 6 meses até ${mesSelecionadoLabel}</div></div></div>
      ${dashChartHTML(dashMes.y, dashMes.m)}
    </div>
  </div>
  <div class="dash-row2">
    <div class="panel">
      <div class="panel-head"><div><h3>Equipe</h3><div class="panel-sub">Colaboradores da empresa</div></div><a data-goto="equipe">Ver equipe →</a></div>
      ${dashEquipeHTML()}
    </div>
    <div class="panel">
      <div class="panel-head"><div><h3>Próximos compromissos</h3><div class="panel-sub">Agenda operacional</div></div><button class="icon-btn" id="dash-add-compromisso" title="Novo compromisso">${ICONS.plus}</button></div>
      ${dashCompromissosHTML()}
    </div>
  </div>`;
}
function servicoStatusLabel(s){ return {aguardando:'Aguardando', andamento:'Em Andamento', concluido:'Concluído', atrasado:'Atrasado'}[s] || s; }
function duracaoRecorrenciaLabel(s){
  const d = s.duracaoRecorrencia;
  return (d && d!=='indeterminado') ? `Recorrente · ${d} meses` : 'Recorrente';
}
function demandaPrioridadeLabel(p){ return {baixa:'Baixa', media:'Média', alta:'Alta', urgente:'Urgente'}[p] || 'Média'; }
function financeiroStatusLabel(s){ return {pendente:'Pendente', pago:'Pago', atrasado:'Atrasado'}[s] || s; }
function clienteStatusLabel(s){ return {ativo:'Ativo', implantacao:'Implantação', pendente:'Pendente'}[s] || 'Ativo'; }
function fmtMonthYear(iso){
  if(!iso) return '—';
  const [y,m] = iso.split('-').map(Number);
  const s = new Date(y, (m||1)-1, 1).toLocaleDateString('pt-BR',{month:'long', year:'numeric'});
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function clienteServicos(id){ return STATE.servicos.filter(s=>s.clienteId===id); }
function clienteFinanceiro(id){ return STATE.financeiro.filter(f=>f.clienteId===id); }

/* ============ KANBAN ============ */
const escHTML = v => String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

// Itens do quadro = serviços "soltos" + atividades do Kanban.
// Serviço vinculado a uma atividade NÃO aparece duas vezes: quem aparece é a atividade.
function kanbanBase(){
  const vinculados = new Set(STATE.atividades.filter(a=>a.servicoId).map(a=>a.servicoId));
  return [
    ...STATE.servicos.filter(s=>!vinculados.has(s.id)).map(s=>({ ...s, _kind:'servico' })),
    ...STATE.atividades.map(a=>({ ...a, _kind:'atividade' })),
    // Demanda com "card no Kanban": a própria demanda é o card (nenhuma cópia é criada).
    ...STATE.demandas.filter(d=>d.kanbanVinculo==='card').map(d=>({ ...d, _kind:'demanda' })),
  ];
}
// Demanda ligada a uma atividade existente do Kanban (a atividade é o card exibido)
function demandaDaAtividade(atvId){ return STATE.demandas.find(d=>d.kanbanVinculo===atvId) || null; }
function kanbanItems(){
  let items = kanbanBase();
  if(searchTerm.trim()){
    const q = searchTerm.trim().toLowerCase();
    items = items.filter(x => (x.titulo||'').toLowerCase().includes(q) || (x.clienteId ? clienteNome(x.clienteId) : 'interna').toLowerCase().includes(q));
  }
  return items;
}

function renderKanban(){
  const items = kanbanItems();
  if(kanbanBase().length===0){
    return emptyState('Nenhuma atividade ainda','Crie uma atividade (interna ou de cliente) ou um serviço para vê-lo aparecer aqui como um card no quadro.');
  }
  const cols = KANBAN_COLS.map(col=>{
    const colItems = items.filter(x=>x.status===col.status);
    return `
    <div class="kanban-col">
      <div class="kanban-col-head">
        <div class="kanban-col-title"><span class="kanban-dot ${col.dot}"></span>${col.label}<span class="kanban-count">${colItems.length}</span></div>
        <button class="icon-btn kanban-col-add" data-kanban-add="${col.status}" title="Adicionar atividade">${ICONS.plus}</button>
      </div>
      <div class="kanban-col-body" data-kanban-col="${col.status}">
        ${colItems.map(kanbanCardHTML).join('') || ''}
        <button class="kanban-add-card" data-kanban-add="${col.status}">${ICONS.plus}<span>Adicionar atividade</span></button>
      </div>
    </div>`;
  }).join('');

  return `
  <div class="kanban-summary">${items.length} atividade${items.length===1?'':'s'} visíve${items.length===1?'l':'is'}</div>
  <div class="kanban-board">${cols}</div>`;
}

function kanbanCardHTML(x, compact){
  const isAtv = x._kind === 'atividade';
  const isDem = x._kind === 'demanda';
  const editMod = isAtv ? 'atividades' : (isDem ? 'demandas' : 'servicos');
  const dem = isDem ? x : (isAtv ? demandaDaAtividade(x.id) : null); // demanda ligada a este card (se houver)
  const respIds = isAtv ? (Array.isArray(x.responsaveisIds) ? x.responsaveisIds : []) : (x.responsavelId ? [x.responsavelId] : []);
  const avatarHTML = respIds.filter(id=>responsavelNome(id)).slice(0,3).map(id=>{
    const n = responsavelNome(id);
    return `<div class="kanban-avatar" style="background:${avatarColor(id)}" title="${escHTML(n)}">${initials(n)}</div>`;
  }).join('');
  const extraResp = respIds.length > 3 ? `<span class="kanban-date">+${respIds.length-3}</span>` : '';
  const atrasadoBadge = x.status==='atrasado' ? `<div class="kanban-late">${ICONS.clock}Atrasado</div>` : '';
  const dragAttr = compact ? '' : 'draggable="true"';
  const clickAttr = compact ? 'data-goto="kanban"' : '';
  const actionsHTML = compact ? '' : `
        <div class="row-actions">
          <button class="icon-btn kanban-mini-btn" data-edit="${editMod}" data-id="${x.id}" title="Editar">${ICONS.edit}</button>
          <button class="icon-btn danger kanban-mini-btn" data-del="${editMod}" data-id="${x.id}" title="Excluir">${ICONS.trash}</button>
        </div>`;
  const badgeTxt = x.clienteId ? clienteNome(x.clienteId) : (isAtv ? 'Interna' : (isDem ? 'Demanda' : '—'));
  const badgeCls = (isAtv && !x.clienteId) ? ' interna' : (isDem ? ' demanda' : '');
  const servTag = (isAtv && x.servicoId) ? `<span class="kanban-tag" title="Vinculada à aba Serviços">Serviço</span>` : '';
  const demTag = (dem && !isDem) ? `<span class="kanban-tag demanda" title="Vinculada à aba Demandas">Demanda</span>` : '';
  const prioHTML = dem ? `<div class="kanban-meta"><span class="pill ${dem.prioridade||'media'} kanban-prio">${demandaPrioridadeLabel(dem.prioridade)}</span>${dem.solicitanteId ? `<span class="kanban-date" title="Solicitante">Pedido por ${escHTML(equipeNome(dem.solicitanteId))}</span>` : ''}</div>` : '';
  const prazo = (isAtv || isDem) ? x.prazo : x.prazoEntrega;
  return `
    <div class="kanban-card${compact?' compact':''}" ${dragAttr} data-kanban-id="${x.id}" ${clickAttr}>
      <div class="kanban-card-top">
        <span class="kanban-badge${badgeCls}">${escHTML(badgeTxt)}</span>${actionsHTML}
      </div>
      <div class="kanban-card-title">${escHTML(x.titulo)}</div>
      ${prioHTML}
      ${atrasadoBadge}
      <div class="kanban-card-foot">
        <span class="kanban-date">${ICONS.clock}${fmtDate(prazo)}</span>
        <span style="display:flex;align-items:center;gap:4px">${servTag}${demTag}${avatarHTML}${extraResp}</span>
      </div>
    </div>`;
}

function refreshKanban(){
  document.getElementById('content').innerHTML = renderKanban();
  attachKanbanEvents();
  attachContentEvents();
}

function attachKanbanEvents(){
  document.querySelectorAll('.kanban-card').forEach(card=>{
    card.addEventListener('dragstart', e=>{
      card.classList.add('dragging');
      e.dataTransfer.setData('text/plain', card.dataset.kanbanId);
      e.dataTransfer.effectAllowed = 'move';
    });
    card.addEventListener('dragend', ()=> card.classList.remove('dragging'));
  });
  document.querySelectorAll('.kanban-col-body').forEach(col=>{
    col.addEventListener('dragover', e=>{ e.preventDefault(); col.classList.add('drag-over'); });
    col.addEventListener('dragleave', ()=> col.classList.remove('drag-over'));
    col.addEventListener('drop', e=>{
      e.preventDefault();
      col.classList.remove('drag-over');
      const id = e.dataTransfer.getData('text/plain');
      const atv = findItem('atividades', id);
      const dem = atv ? null : STATE.demandas.find(d=>d.id===id && d.kanbanVinculo==='card');
      const item = atv || dem || findItem('servicos', id);
      const newStatus = col.dataset.kanbanCol;
      if(item && item.status !== newStatus){
        if(newStatus==='concluido' && !dem) item.dataConclusao = todayISO();
        item.status = newStatus;
        if(atv){
          persist('atividades');
          // mantém o serviço vinculado com o mesmo status (sem mexer em valores/financeiro)
          const sv = atv.servicoId ? findItem('servicos', atv.servicoId) : null;
          if(sv){ sv.status = newStatus; if(newStatus==='concluido') sv.dataConclusao = todayISO(); persist('servicos'); }
          // e a demanda vinculada, se houver
          const dv = demandaDaAtividade(atv.id);
          if(dv){ dv.status = newStatus; persist('demandas'); }
        } else if(dem){
          persist('demandas');
        } else {
          persist('servicos');
        }
        toast('Atividade movida para "'+servicoStatusLabel(newStatus)+'".');
        refreshKanban();
      }
    });
  });
  document.querySelectorAll('[data-kanban-add]').forEach(btn=>{
    btn.addEventListener('click', ()=> openAtividadeModal(null, { status: btn.dataset.kanbanAdd }));
  });
}

/* ============ CLIENTES ============ */
function clientesFiltrados(){
  let items = [...STATE.clientes];
  if(searchTerm.trim()){
    const q = searchTerm.trim().toLowerCase();
    items = items.filter(x =>
      (x.nome||'').toLowerCase().includes(q) ||
      (x.cnpj||'').toLowerCase().includes(q) ||
      (x.contatoNome||'').toLowerCase().includes(q) ||
      (x.cidade||'').toLowerCase().includes(q));
  }
  if(filterValue && filterValue!=='todos') items = items.filter(x=>(x.status||'ativo')===filterValue);
  items.sort((a,b)=>a.nome.localeCompare(b.nome));
  return items;
}

function renderClientes(){
  const total = STATE.clientes.length;
  const ativos = STATE.clientes.filter(x=>(x.status||'ativo')==='ativo').length;
  const receitaTotal = STATE.clientes.reduce((s,x)=>s+Number(x.receitaMensal||0),0);
  const emImplantacao = STATE.clientes.filter(x=>x.status==='implantacao').length;
  const exigemAtencao = STATE.clientes.filter(x=>x.status==='pendente').length;

  return `
  <div class="clientes-page">
  <div class="equipe-breadcrumb">${ICONS.spark||''}<span>Central de gestão</span></div>
  <div class="equipe-title-row">
    <div><h2>Clientes</h2><p>Gestão centralizada da carteira de clientes</p></div>
    <div class="date-badge">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>
      <span>${equipeMesAtual()}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><path d="m6 9 6 6 6-6"/></svg>
    </div>
  </div>
  <div class="kpi-grid">
    <div class="kpi-card">
      <div class="kpi-card-top"><div class="kpi-icon blue">${ICONS.equipe}</div></div>
      <div class="kpi-value">${total}</div>
      <div class="kpi-label">Total de clientes</div>
      <div class="kpi-compare">${ativos} ativo${ativos===1?'':'s'}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-card-top"><div class="kpi-icon green">${ICONS.dollar}</div></div>
      <div class="kpi-value">${fmtBRL(receitaTotal)}</div>
      <div class="kpi-label">Receita mensal</div>
      <div class="kpi-compare">Receita contratada</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-card-top"><div class="kpi-icon violet">${ICONS.people}</div></div>
      <div class="kpi-value">${emImplantacao}</div>
      <div class="kpi-label">Em implantação</div>
      <div class="kpi-compare">Clientes em onboarding</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-card-top"><div class="kpi-icon amber">${ICONS.clock}</div></div>
      <div class="kpi-value">${exigemAtencao}</div>
      <div class="kpi-label">Exigem atenção</div>
      <div class="kpi-compare">Pendências ou retorno</div>
    </div>
  </div>
  <div class="team-panel">
    <div class="team-panel-head">
      <div><h3>Carteira de clientes</h3><div class="panel-sub">Consulte dados, contatos, contratos e pendências</div></div>
      <button class="btn" id="client-new-btn">${ICONS.plus}<span>Novo cliente</span></button>
    </div>
    <div class="client-toolbar">
      <div class="search-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        <input type="text" id="client-search-input" placeholder="Buscar por cliente, CNPJ, contato ou cidade" value="${searchTerm.replace(/"/g,'&quot;')}">
      </div>
      <select id="client-status-select">
        <option value="todos" ${filterValue==='todos'?'selected':''}>Todos os status</option>
        <option value="ativo" ${filterValue==='ativo'?'selected':''}>Ativo</option>
        <option value="implantacao" ${filterValue==='implantacao'?'selected':''}>Implantação</option>
        <option value="pendente" ${filterValue==='pendente'?'selected':''}>Pendente</option>
      </select>
      <div class="client-results" id="client-results"></div>
    </div>
    <div id="client-table">${renderClientesTable()}</div>
  </div>
  </div>`;
}

function renderClientesTable(){
  const items = clientesFiltrados();
  setTimeout(()=>{ const r=document.getElementById('client-results'); if(r) r.textContent = items.length+' resultado'+(items.length===1?'':'s'); },0);
  if(items.length===0) return `<div class="empty" style="padding:44px 20px"><strong>Nenhum cliente encontrado</strong>Adicione clientes para vincular serviços e pagamentos.</div>`;

  const rows = items.map(x=>{
    const color = avatarColor(x.id);
    const proxAtv = proximaAtividadeCliente(x.id);
    const acaoTitulo = proxAtv ? escHTML(proxAtv.titulo) : '';
    return `
    <tr>
      <td>
        <div class="client-name-cell">
          ${teamAvatarHTML(x)}
          <div class="client-name-info">
            <span class="link-name" data-view="clientes" data-id="${x.id}">${x.nome}</span>
            <small>${x.cnpj||'—'}</small>
          </div>
        </div>
      </td>
      <td class="client-contact-cell">
        <strong>${x.contatoNome||'—'}</strong>
        <small>${x.telefone||'—'}</small>
      </td>
      <td>${responsavelNome(x.responsavelId)||'—'}</td>
      <td><span class="pill ${x.status||'ativo'}">${clienteStatusLabel(x.status)}</span></td>
      <td class="client-action-cell ${acaoTitulo?'':'muted'}">${acaoTitulo || `<button class="link-btn" data-criar-atividade="${x.id}" type="button">+ Criar atividade</button>`}</td>
      <td class="val">${fmtBRL(x.receitaMensal)}</td>
      <td><div class="row-actions">
        <button class="icon-btn" data-view="clientes" data-id="${x.id}" title="Ver">${ICONS.eye}</button>
        <button class="icon-btn" data-edit="clientes" data-id="${x.id}" title="Editar">${ICONS.edit}</button>
        <button class="icon-btn danger" data-del="clientes" data-id="${x.id}" title="Excluir">${ICONS.trash}</button>
      </div></td>
    </tr>`;
  }).join('');

  return `<div class="table-wrap"><table>
    <thead><tr><th>Cliente</th><th>Contato Principal</th><th>Responsável Interno</th><th>Status</th><th>Próxima Ação</th><th>Receita Mensal</th><th>Ações</th></tr></thead>
    <tbody>${rows}</tbody></table></div>`;
}

function refreshClientesTable(){
  document.getElementById('client-table').innerHTML = renderClientesTable();
  attachContentEvents();
}

function attachClientesEvents(){
  const searchInput = document.getElementById('client-search-input');
  const statusSelect = document.getElementById('client-status-select');
  const newBtn = document.getElementById('client-new-btn');
  if(searchInput) searchInput.oninput = (e)=>{ searchTerm = e.target.value; refreshClientesTable(); };
  if(statusSelect) statusSelect.onchange = (e)=>{ filterValue = e.target.value; refreshClientesTable(); };
  if(newBtn) newBtn.onclick = () => openModal('clientes');
}

/* ---- Próxima ação = atividade do Kanban vinculada ao cliente ---- */
function clienteAtividadesAbertas(clienteId){
  return STATE.atividades
    .filter(a => a.clienteId === clienteId && a.status !== 'concluido')
    .sort((a,b) => (a.prazo||'9999-12-31').localeCompare(b.prazo||'9999-12-31'));
}
function proximaAtividadeCliente(clienteId){ return clienteAtividadesAbertas(clienteId)[0] || null; }

// Abre o cadastro de atividade (Kanban) já com o cliente selecionado.
// Se o cliente ainda tem o texto antigo de "próxima ação", ele é aproveitado como título/descrição.
function criarAtividadeDoCliente(clienteId, voltarParaGaveta){
  const x = findItem('clientes', clienteId);
  if(!x) return;
  const temAbertas = clienteAtividadesAbertas(clienteId).length > 0;
  const preset = { clienteId: x.id, clienteNome: x.nome, status: 'aguardando' };
  if(!temAbertas && x.proximaAcaoTitulo){
    preset.titulo = x.proximaAcaoTitulo;
    preset.descricao = x.proximaAcaoObs || '';
  }
  drawerToReopen = x.id;
  closeClienteDrawer();
  document.getElementById('overlay').classList.remove('open');
  openAtividadeModal(null, preset);
}

function proximaAcaoFormHTML(cliente){
  if(!cliente){
    return `<div class="next-action-form">
      <button type="button" class="btn ghost" id="cliente-form-criar-atividade" disabled>${ICONS.plus}<span>Criar atividade</span></button>
      <small>Salve o cliente primeiro; depois use este botão para registrar a próxima ação no Kanban.</small>
    </div>`;
  }
  const prox = proximaAtividadeCliente(cliente.id);
  return `<div class="next-action-form">
    ${prox ? `<div class="next-action-box" style="margin-bottom:10px"><div class="next-action-head"><span>Atividade em aberto</span></div>
      <div class="next-action-title">${escHTML(prox.titulo)}</div>
      ${prox.prazo ? `<div class="next-action-sub">Prazo: ${fmtDate(prox.prazo)}</div>` : ''}</div>` : ''}
    <button type="button" class="btn ghost" id="cliente-form-criar-atividade">${ICONS.plus}<span>Criar atividade</span></button>
    <small>Abre o cadastro da atividade no Kanban, já vinculada a este cliente.</small>
  </div>`;
}

/* ---- Painel lateral (drawer) de detalhes do cliente ---- */
function openClienteDrawer(id){
  const x = findItem('clientes', id);
  if(!x) return;
  const color = avatarColor(x.id);
  const servicos = clienteServicos(x.id);
  const lancamentos = clienteFinanceiro(x.id);

  const servicosHTML = servicos.length ? servicos.map(s=>`
    <div class="drawer-list-item drawer-list-item-clickable" data-drawer-edit-servico="${s.id}">
      <div class="drawer-list-icon">${ICONS.wrench}</div>
      <div class="drawer-list-info"><strong>${s.titulo}</strong><span class="pill ${s.status}" style="margin-top:3px">${servicoStatusLabel(s.status)}</span>${s.recorrente==='sim' ? ` <span class="pill recorrente" style="margin-top:3px">${duracaoRecorrenciaLabel(s)}</span>` : ''}</div>
      <div class="drawer-list-value">${fmtBRL(s.valor)}</div>
      <div class="drawer-list-edit">${ICONS.edit}</div>
    </div>`).join('') : `<div class="empty" style="padding:16px 0;font-size:12.5px">Nenhum serviço vinculado ainda.</div>`;

  const finHTML = lancamentos.length ? lancamentos.slice(0,4).map(f=>{
    const info = finStatusInfo(f);
    return `
    <div class="drawer-list-item">
      <div class="drawer-list-icon" style="background:var(--green-soft);color:var(--green)">${ICONS.dollar}</div>
      <div class="drawer-list-info"><strong>${f.descricao}</strong><span class="pill ${info.cls}" style="margin-top:3px">${info.label}</span></div>
      <div class="drawer-list-value">${fmtBRL(f.valor)}</div>
    </div>`;
  }).join('') : `<div class="empty" style="padding:16px 0;font-size:12.5px">Nenhum lançamento financeiro ainda.</div>`;

  const atvsAbertas = clienteAtividadesAbertas(x.id);
  const atvsHTML = atvsAbertas.length ? atvsAbertas.slice(0,5).map((a,i)=>`
      <div class="next-action-item" data-drawer-edit-atividade="${a.id}">
        <div class="next-action-title">${i===0?'':'· '}${escHTML(a.titulo)}</div>
        <div class="next-action-sub">${a.prazo ? 'Prazo: '+fmtDate(a.prazo)+' · ' : ''}${escHTML(({aguardando:'Aguardando',andamento:'Em andamento',atrasado:'Atrasado'})[a.status]||a.status||'')}</div>
      </div>`).join('') : `<div class="next-action-sub">Nenhuma atividade em aberto para este cliente.</div>`;
  const nextActionHTML = `
    <div class="next-action-box">
      <div class="next-action-head"><span>Próxima ação</span><a id="drawer-nova-atividade-2">Criar atividade</a></div>
      ${atvsHTML}
    </div>`;

  document.getElementById('client-drawer').innerHTML = `
    <div class="drawer-inner">
      <div class="drawer-head">
        <div class="drawer-head-left">
          ${teamAvatarHTML(x)}
          <div class="drawer-head-title"><strong>${x.nome}</strong><span>Cliente desde ${fmtMonthYear(x.clienteDesde)}</span></div>
        </div>
        <div class="drawer-head-right">
          <span class="pill ${x.status||'ativo'}">${clienteStatusLabel(x.status)}</span>
          <button class="drawer-close" id="drawer-close">&times;</button>
        </div>
      </div>
      <div class="drawer-actions">
        <button class="btn" id="drawer-nova-atividade">${ICONS.plus}<span>Nova atividade</span></button>
        <button class="btn ghost" id="drawer-editar">${ICONS.edit}<span>Editar</span></button>
      </div>
      <div class="drawer-card">
        <div class="drawer-card-title">Contato e cadastro</div>
        <div class="drawer-info-grid">
          <div class="drawer-info-item">${ICONS.mail}<div><label>E-mail</label><div>${x.email||'—'}</div></div></div>
          <div class="drawer-info-item">${ICONS.phone}<div><label>Telefone</label><div>${x.telefone||'—'}</div></div></div>
          <div class="drawer-info-item">${ICONS.pin}<div><label>Localização</label><div>${x.cidade||'—'}</div></div></div>
          <div class="drawer-info-item">${ICONS.doc}<div><label>CNPJ/CPF</label><div>${x.cnpj||'—'}</div></div></div>
        </div>
      </div>
      <div class="client-mini-stats">
        <div class="client-mini-stat"><label>Receita mensal</label><div>${fmtBRL(x.receitaMensal)}</div></div>
        <div class="client-mini-stat"><label>Serviços</label><div>${servicos.length}</div></div>
        <div class="client-mini-stat"><label>Responsável</label><div style="font-size:13px">${responsavelNome(x.responsavelId)||'—'}</div></div>
      </div>
      ${nextActionHTML}
      <div class="drawer-card">
        <div class="panel-head" style="margin-bottom:8px">
          <div class="drawer-card-title" style="margin:0">Serviços e contratos <span style="color:var(--slate);font-weight:600;font-size:12px">(${servicos.length})</span></div>
          <a id="drawer-novo-servico" title="Novo serviço para este cliente" style="cursor:pointer">+ Novo serviço</a>
        </div>
        <div class="drawer-scroll-list">${servicosHTML}</div>
      </div>
      <div class="drawer-card">
        <div class="panel-head" style="margin-bottom:8px"><div class="drawer-card-title" style="margin:0">Financeiro</div><a data-goto="financeiro">Ver todos →</a></div>
        ${finHTML}
      </div>
      ${x.observacoes ? `<div class="field"><label>Observações</label><div class="view-value">${x.observacoes}</div></div>` : ''}
    </div>`;

  document.getElementById('drawer-overlay').classList.add('open');
  document.getElementById('drawer-close').addEventListener('click', closeClienteDrawer);
  const openNovoServico = () => { drawerToReopen = x.id; closeClienteDrawer(); openModal('servicos', null, { clienteId: x.id }); };
  const criarAtv = () => criarAtividadeDoCliente(x.id);
  document.getElementById('drawer-nova-atividade').addEventListener('click', criarAtv);
  const novoServicoLink = document.getElementById('drawer-novo-servico');
  if(novoServicoLink) novoServicoLink.addEventListener('click', openNovoServico);
  const link2 = document.getElementById('drawer-nova-atividade-2');
  if(link2) link2.addEventListener('click', criarAtv);
  document.querySelectorAll('#client-drawer [data-drawer-edit-atividade]').forEach(el=>{
    el.addEventListener('click', ()=>{ drawerToReopen = x.id; closeClienteDrawer(); openAtividadeModal(el.dataset.drawerEditAtividade); });
  });
  document.getElementById('drawer-editar').addEventListener('click', ()=>{ drawerToReopen = x.id; closeClienteDrawer(); openModal('clientes', x.id); });
  document.querySelectorAll('#client-drawer [data-drawer-edit-servico]').forEach(el=>{
    el.addEventListener('click', ()=>{ drawerToReopen = x.id; closeClienteDrawer(); openModal('servicos', el.dataset.drawerEditServico); });
  });
  document.querySelectorAll('#client-drawer [data-goto]').forEach(a=>{
    a.addEventListener('click', ()=>{
      closeClienteDrawer();
      currentModule = a.dataset.goto; searchTerm = x.nome; filterValue='todos'; render();
    });
  });
}
function closeClienteDrawer(){ document.getElementById('drawer-overlay').classList.remove('open'); }

/* ============ EQUIPE ============ */
function equipeMesAtual(){
  const s = new Date().toLocaleDateString('pt-BR',{month:'long', year:'numeric'});
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function equipeSetores(){
  return [...new Set(STATE.equipe.map(x=>x.setor).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
}
function renderEquipe(){
  const total = STATE.equipe.length;
  const ativos = STATE.equipe.filter(x=>(x.status||'ativo')==='ativo').length;
  const setoresCount = equipeSetores().length;
  const setorOptions = [['todos','Todos os setores'], ...equipeSetores().map(s=>[s,s])];

  return `
  <div class="equipe-breadcrumb">${ICONS.spark || ''}<span>Central de gestão</span></div>
  <div class="equipe-title-row">
    <div>
      <h2>Equipe</h2>
      <p>Pessoas, funções e desempenho operacional</p>
    </div>
    <div class="date-badge">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>
      <span>${equipeMesAtual()}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><path d="m6 9 6 6 6-6"/></svg>
    </div>
  </div>
  <div class="mini-stats">
    <div class="mini-stat-card">
      <div class="mini-label">${ICONS.people}<span>Colaboradores</span></div>
      <div class="mini-value">${total}</div>
    </div>
    <div class="mini-stat-card">
      <div class="mini-label">${ICONS.check}<span>Ativos agora</span></div>
      <div class="mini-value">${ativos}</div>
    </div>
    <div class="mini-stat-card">
      <div class="mini-label">${ICONS.dollar}<span>Setores</span></div>
      <div class="mini-value">${setoresCount}</div>
    </div>
  </div>
  <div class="team-panel">
    <div class="team-panel-head">
      <div><h3>Equipe e funções</h3><div class="panel-sub">Distribuição e disponibilidade</div></div>
      ${LOGGED_USER.role==='admin' ? `<button class="btn" id="equipe-new-btn">${ICONS.plus}<span>Novo colaborador</span></button>` : ''}
    </div>
    <div class="team-toolbar">
      <div class="search-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        <input type="text" id="equipe-search-input" placeholder="Buscar por nome, função ou setor" value="${searchTerm.replace(/"/g,'&quot;')}">
      </div>
      <select id="equipe-setor-select">${setorOptions.map(([v,l])=>`<option value="${v}" ${filterValue===v?'selected':''}>${l}</option>`).join('')}</select>
    </div>
    <div id="equipe-grid">${renderEquipeGrid()}</div>
  </div>`;
}

function renderEquipeGrid(){
  let items = [...STATE.equipe];
  if(searchTerm.trim()){
    const q = searchTerm.trim().toLowerCase();
    items = items.filter(x => (x.nome||'').toLowerCase().includes(q) || (x.cargo||'').toLowerCase().includes(q) || (x.setor||'').toLowerCase().includes(q));
  }
  if(filterValue && filterValue!=='todos') items = items.filter(x=>x.setor===filterValue);
  items.sort((a,b)=>a.nome.localeCompare(b.nome));
  if(items.length===0) return `<div class="empty"><strong>Nenhum colaborador encontrado</strong>Cadastre os membros da equipe da sua empresa.</div>`;

  return `<div class="team-grid">${items.map(x=>{
    return `
    <div class="team-card" data-team-view="${x.id}">
      <div class="team-card-top">
        ${teamAvatarHTML(x)}
        <span class="pill ${x.status||'ativo'}">${equipeStatusLabel(x.status)}</span>
      </div>
      <div>
        <div class="team-name">${x.nome}</div>
        <div class="team-role">${x.cargo||'—'}</div>
        ${x.setor?`<div class="team-setor">${x.setor}</div>`:''}
      </div>
      <div class="team-card-foot">
        <div class="team-card-actions">
          <button class="icon-btn" data-edit="equipe" data-id="${x.id}" title="Editar">${ICONS.edit}</button>
          ${LOGGED_USER.role==='admin' ? `<button class="icon-btn danger" data-del="equipe" data-id="${x.id}" title="Excluir">${ICONS.trash}</button>` : ''}
        </div>
        <span class="team-open-link">Abrir ficha →</span>
      </div>
    </div>`;
  }).join('')}</div>`;
}

function refreshEquipeGrid(){
  document.getElementById('equipe-grid').innerHTML = renderEquipeGrid();
  attachContentEvents();
}

function attachEquipeEvents(){
  const searchInput = document.getElementById('equipe-search-input');
  const setorSelect = document.getElementById('equipe-setor-select');
  const newBtn = document.getElementById('equipe-new-btn');
  if(searchInput) searchInput.oninput = (e)=>{ searchTerm = e.target.value; refreshEquipeGrid(); };
  if(setorSelect) setorSelect.onchange = (e)=>{ filterValue = e.target.value; refreshEquipeGrid(); };
  if(newBtn) newBtn.onclick = () => openModal('equipe');
}

/* ============ SERVIÇOS ============ */
function renderServicos(){
  let items = [...STATE.servicos];
  if(searchTerm.trim()){
    const q = searchTerm.trim().toLowerCase();
    items = items.filter(x => (x.titulo||'').toLowerCase().includes(q) || servicoCliente(x).toLowerCase().includes(q));
  }
  if(filterValue && filterValue!=='todos') items = items.filter(x=>x.status===filterValue);
  items.sort((a,b)=>(b.dataInicio||'').localeCompare(a.dataInicio||''));

  const total = STATE.servicos.length;
  const andamento = STATE.servicos.filter(s=>s.status==='andamento').length;
  const concluidos = STATE.servicos.filter(s=>s.status==='concluido').length;
  const valorTotal = STATE.servicos.reduce((s,x)=>s+Number(x.valor||0),0);

  const statsHTML = `
  <div class="mini-stats">
    <div class="mini-stat-card">
      <div class="mini-label">${ICONS.wrench}<span>Serviços cadastrados</span></div>
      <div class="mini-value">${total}</div>
    </div>
    <div class="mini-stat-card">
      <div class="mini-label">${ICONS.clock}<span>Em andamento</span></div>
      <div class="mini-value">${andamento}</div>
    </div>
    <div class="mini-stat-card">
      <div class="mini-label">${ICONS.check}<span>Concluídos</span></div>
      <div class="mini-value">${concluidos}</div>
    </div>
    <div class="mini-stat-card">
      <div class="mini-label">${ICONS.dollar}<span>Valor contratado</span></div>
      <div class="mini-value">${fmtBRL(valorTotal)}</div>
    </div>
  </div>`;

  if(items.length===0){
    return statsHTML + `<div class="empty" style="margin-top:16px"><strong>Nenhum serviço encontrado</strong>Registre os serviços prestados a cada cliente.</div>`;
  }

  const cardsHTML = `<div class="servicos-grid">${items.map(x=>{
    const color = avatarColor(x.clienteId || x.id);
    return `
    <div class="servico-card">
      <div class="servico-card-top">
        <div class="servico-icon ${x.status}">${ICONS.wrench}</div>
        <div style="display:flex;gap:6px">
          ${x.recorrente==='sim' ? `<span class="pill recorrente">${duracaoRecorrenciaLabel(x)}</span>` : ''}
          <span class="pill ${x.status}">${servicoStatusLabel(x.status)}</span>
        </div>
      </div>
      <div>
        <div class="servico-title">${x.titulo}</div>
        <div class="servico-client">
          <span class="mini-avatar" style="background:${servicoCliente(x)!=='Sem cliente' ? color : 'var(--gray-soft)'};${servicoCliente(x)!=='Sem cliente' ? '' : 'color:var(--slate)'}">${servicoCliente(x)!=='Sem cliente' ? initials(servicoCliente(x)) : '—'}</span>
          <span>${escHTML(servicoCliente(x))}</span>
        </div>
      </div>
      <div class="servico-value-row">
        <div class="servico-value">${fmtBRL(x.valor)}</div>
        <div class="servico-deadline">${x.prazoEntrega ? 'Entrega '+fmtDate(x.prazoEntrega) : 'Sem prazo definido'}</div>
      </div>
      <div class="servico-client" style="margin-top:2px">
        ${x.responsavelId ? `<span class="mini-avatar" style="background:${avatarColor(x.responsavelId)}">${initials(equipeNome(x.responsavelId))}</span><span>${equipeNome(x.responsavelId)}</span>` : `<span style="color:var(--slate);font-size:12.5px">Sem responsável</span>`}
      </div>
      <div class="servico-card-foot">
        <button class="icon-btn" data-edit="servicos" data-id="${x.id}" title="Editar">${ICONS.edit}</button>
        <button class="icon-btn danger" data-del="servicos" data-id="${x.id}" title="Excluir">${ICONS.trash}</button>
      </div>
    </div>`;
  }).join('')}</div>`;

  return statsHTML + cardsHTML;
}

/* ============ DEMANDAS ============ */
function renderDemandas(){
  let items = [...STATE.demandas];
  if(searchTerm.trim()){
    const q = searchTerm.trim().toLowerCase();
    items = items.filter(x => (x.titulo||'').toLowerCase().includes(q) || equipeNome(x.solicitanteId).toLowerCase().includes(q) || equipeNome(x.responsavelId).toLowerCase().includes(q));
  }
  if(filterValue && filterValue!=='todos') items = items.filter(x=>x.status===filterValue);
  const prioridadeOrdem = {urgente:0, alta:1, media:2, baixa:3};
  items.sort((a,b)=> (prioridadeOrdem[a.prioridade]??2) - (prioridadeOrdem[b.prioridade]??2) || (b.dataAbertura||'').localeCompare(a.dataAbertura||''));

  const total = STATE.demandas.length;
  const abertas = STATE.demandas.filter(d=>d.status==='aguardando').length;
  const andamento = STATE.demandas.filter(d=>d.status==='andamento').length;
  const concluidas = STATE.demandas.filter(d=>d.status==='concluido').length;

  const statsHTML = `
  <div class="mini-stats">
    <div class="mini-stat-card">
      <div class="mini-label">${ICONS.demandas}<span>Demandas no total</span></div>
      <div class="mini-value">${total}</div>
    </div>
    <div class="mini-stat-card">
      <div class="mini-label">${ICONS.alertTriangle}<span>Aguardando</span></div>
      <div class="mini-value">${abertas}</div>
    </div>
    <div class="mini-stat-card">
      <div class="mini-label">${ICONS.clock}<span>Em andamento</span></div>
      <div class="mini-value">${andamento}</div>
    </div>
    <div class="mini-stat-card">
      <div class="mini-label">${ICONS.check}<span>Concluídas</span></div>
      <div class="mini-value">${concluidas}</div>
    </div>
  </div>`;

  if(items.length===0){
    return statsHTML + `<div class="empty" style="margin-top:16px"><strong>Nenhuma demanda encontrada</strong>Cadastre aqui as demandas da equipe para acompanhar o que precisa ser feito.</div>`;
  }

  const cardsHTML = `<div class="servicos-grid">${items.map(x=>{
    const color = avatarColor(x.solicitanteId || x.id);
    return `
    <div class="servico-card">
      <div class="servico-card-top">
        <div class="servico-icon ${x.status}">${ICONS.demandas}</div>
        <div style="display:flex;gap:6px">
          ${x.kanbanVinculo ? '<span class="pill recorrente" title="Aparece no quadro Kanban">No Kanban</span>' : ''}
          <span class="pill ${x.prioridade||'media'}">${demandaPrioridadeLabel(x.prioridade)}</span>
          <span class="pill ${x.status}">${servicoStatusLabel(x.status)}</span>
        </div>
      </div>
      <div>
        <div class="servico-title">${x.titulo}</div>
        <div class="servico-client">
          <span class="mini-avatar" style="background:${color}">${initials(equipeNome(x.solicitanteId))}</span>
          <span>Pedido por ${equipeNome(x.solicitanteId)}</span>
        </div>
      </div>
      <div class="servico-value-row">
        <div class="servico-value" style="font-size:13px;font-weight:600;">${x.responsavelId ? equipeNome(x.responsavelId) : 'Sem responsável'}</div>
        <div class="servico-deadline">${x.prazo ? 'Prazo '+fmtDate(x.prazo) : 'Sem prazo'}</div>
      </div>
      <div class="servico-card-foot">
        <button class="icon-btn" data-edit="demandas" data-id="${x.id}" title="Editar">${ICONS.edit}</button>
        <button class="icon-btn danger" data-del="demandas" data-id="${x.id}" title="Excluir">${ICONS.trash}</button>
      </div>
    </div>`;
  }).join('')}</div>`;

  return statsHTML + cardsHTML;
}

/* ============ AGENDA (prazos e demandas próximas) ============ */
let agendaMes = null;   // {y, m} — mês exibido (m é 0-indexado)
let agendaDia = null;   // 'AAAA-MM-DD' — dia selecionado no calendário
let agendaTipos = new Set(['demanda','atividade','servico','compromisso']); // o que aparece (Vencimentos financeiros ficam desligados por padrão)
const AGENDA_TIPOS = {
  demanda:     { label:'Demandas',              accent:'blue' },
  atividade:   { label:'Atividades',            accent:'violet' },
  servico:     { label:'Entregas de serviços',  accent:'green' },
  compromisso: { label:'Compromissos',          accent:'gray' },
  financeiro:  { label:'Vencimentos',           accent:'amber' },
};
function isoAddDays(iso, n){
  const [y,m,d] = iso.split('-').map(Number);
  const dt = new Date(y, m-1, d+n);
  return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`;
}
function isoDiffDays(a, b){ // b - a, em dias
  return Math.round((new Date(b+'T00:00:00') - new Date(a+'T00:00:00')) / 86400000);
}
// Junta tudo que tem data em uma lista só (já respeitando os filtros escolhidos)
function agendaItens(){
  const itens = [];
  STATE.demandas.forEach(d=>{
    if(!d.prazo) return;
    itens.push({ tipo:'demanda', date:d.prazo, hora:'', title:d.titulo, status:d.status, done:d.status==='concluido',
      sub:[d.responsavelId ? equipeNome(d.responsavelId) : 'Sem responsável', d.prioridade ? 'Prioridade '+demandaPrioridadeLabel(d.prioridade).toLowerCase() : ''].filter(Boolean).join(' · '),
      mod:'demandas', id:d.id });
  });
  // atividade que já tem demanda vinculada (ou que veio de um serviço) não entra de novo: já aparece como demanda/serviço
  const atvComDemanda = new Set(STATE.demandas.filter(d=>d.kanbanVinculo && d.kanbanVinculo!=='card').map(d=>d.kanbanVinculo));
  STATE.atividades.forEach(a=>{
    if(!a.prazo || a.servicoId || atvComDemanda.has(a.id)) return;
    const resp = (a.responsaveisIds||[]).map(equipeNome).join(', ');
    itens.push({ tipo:'atividade', date:a.prazo, hora:'', title:a.titulo, status:a.status, done:a.status==='concluido',
      sub:[a.clienteId ? clienteNome(a.clienteId) : 'Interna', resp].filter(Boolean).join(' · '),
      mod:'atividades', id:a.id });
  });
  STATE.servicos.forEach(s=>{
    if(!s.prazoEntrega) return;
    itens.push({ tipo:'servico', date:s.prazoEntrega, hora:'', title:'Entrega: '+s.titulo, status:s.status, done:s.status==='concluido',
      sub:[servicoCliente(s), s.responsavelId ? equipeNome(s.responsavelId) : ''].filter(Boolean).join(' · '),
      mod:'servicos', id:s.id });
  });
  STATE.compromissos.forEach(c=>{
    if(!c.data) return;
    itens.push({ tipo:'compromisso', date:c.data, hora:c.hora||'', title:c.titulo, status:'', done:false,
      sub:[c.hora||'', c.clienteId ? clienteNome(c.clienteId) : '', compromissoTipoLabel(c.tipo)].filter(Boolean).join(' · '),
      mod:'compromissos', id:c.id });
  });
  STATE.financeiro.forEach(f=>{
    if(!f.vencimento) return;
    itens.push({ tipo:'financeiro', date:f.vencimento, hora:'', title:(f.tipo==='despesa'?'Pagar: ':'Receber: ')+f.descricao, status:f.status, done:f.status==='pago',
      sub:f.clienteNome || '—', mod:'financeiro', id:f.id });
  });
  return itens
    .filter(it=>agendaTipos.has(it.tipo))
    .sort((a,b)=> a.date===b.date ? (a.hora||'').localeCompare(b.hora||'') : a.date.localeCompare(b.date));
}
function agendaWhenHTML(it, hoje){
  if(it.done) return `<span class="ag-when">Concluído</span>`;
  const diff = isoDiffDays(hoje, it.date);
  if(diff<0)  return `<span class="ag-when late">Atrasada há ${-diff} ${-diff===1?'dia':'dias'}</span>`;
  if(diff===0) return `<span class="ag-when today">Hoje</span>`;
  if(diff===1) return `<span class="ag-when soon">Amanhã</span>`;
  if(diff<=3)  return `<span class="ag-when soon">Em ${diff} dias</span>`;
  return `<span class="ag-when">Em ${diff} dias</span>`;
}
function agendaRowHTML(it, hoje){
  const accent = AGENDA_TIPOS[it.tipo].accent;
  const late = !it.done && it.date < hoje;
  const dia = it.date.split('-')[2];
  const mes = new Date(it.date+'T00:00:00').toLocaleDateString('pt-BR',{month:'short'}).replace('.','').toUpperCase();
  return `<div class="dash-compromisso ag-row${it.done?' ag-done':''}">
    <div class="dash-date-box ${late?'red':accent}"><span>${dia}</span><small>${mes}</small></div>
    <div class="dash-compromisso-info"><strong>${escHTML(it.title||'')}</strong><span>${AGENDA_TIPOS[it.tipo].label.replace(/s$/,'')}${it.sub?' · '+escHTML(it.sub):''}</span></div>
    ${agendaWhenHTML(it, hoje)}
    <div class="row-actions dash-compromisso-actions">
      <button class="icon-btn kanban-mini-btn" data-edit="${it.mod}" data-id="${it.id}" title="Abrir / editar">${ICONS.edit}</button>
    </div>
  </div>`;
}
function agendaCalendarHTML(y, m, porDia, hoje){
  const startWeekday = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m+1, 0).getDate();
  const head = CAL_WEEKDAYS.map(w=>`<div class="cal-weekday">${w}</div>`).join('');
  let cells = '';
  for(let i=0;i<startWeekday;i++) cells += `<div class="cal-cell empty"></div>`;
  for(let d=1; d<=daysInMonth; d++){
    const iso = `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const evs = porDia[iso] || [];
    const accents = [...new Set(evs.map(e => (!e.done && e.date<hoje) ? 'red' : AGENDA_TIPOS[e.tipo].accent))].slice(0,4);
    const dots = accents.map(c=>`<span class="cal-dot ${c}"></span>`).join('');
    const isToday = iso===hoje, isSel = iso===agendaDia;
    cells += `<div class="cal-cell${isToday?' today':''}${isSel&&!isToday?' selected':''}" data-ag-day="${iso}" title="${evs.length?evs.length+' item(ns)':''}">
      <span class="cal-daynum">${d}</span><div class="cal-dots">${dots}</div></div>`;
  }
  return `<div class="cal-weekdays">${head}</div><div class="cal-grid">${cells}</div>`;
}
function renderAgenda(){
  const hoje = todayISO();
  if(!agendaMes){ const n = new Date(); agendaMes = { y:n.getFullYear(), m:n.getMonth() }; }
  const mesKey = `${agendaMes.y}-${String(agendaMes.m+1).padStart(2,'0')}`;
  if(agendaDia && agendaDia.slice(0,7)!==mesKey) agendaDia = null;
  if(!agendaDia && hoje.slice(0,7)===mesKey) agendaDia = hoje;

  const itens = agendaItens();
  const porDia = {};
  itens.forEach(it=>{ (porDia[it.date] = porDia[it.date]||[]).push(it); });

  // ---- cartões de resumo ----
  const abertos = itens.filter(it=>!it.done);
  const atrasados = abertos.filter(it=>it.date<hoje);
  const deHoje = abertos.filter(it=>it.date===hoje);
  const prox7 = abertos.filter(it=>it.date>hoje && it.date<=isoAddDays(hoje,7));
  const statsHTML = `<div class="mini-stats">
    <div class="mini-stat-card"><div class="mini-label">${ICONS.alertTriangle}<span>Atrasados</span></div><div class="mini-value"${atrasados.length?' style="color:var(--red)"':''}>${atrasados.length}</div></div>
    <div class="mini-stat-card"><div class="mini-label">${ICONS.clock}<span>Para hoje</span></div><div class="mini-value">${deHoje.length}</div></div>
    <div class="mini-stat-card"><div class="mini-label">${ICONS.calendar}<span>Próximos 7 dias</span></div><div class="mini-value">${prox7.length}</div></div>
  </div>`;

  // ---- filtros por tipo ----
  const chipsHTML = `<div class="ag-chips">${Object.entries(AGENDA_TIPOS).map(([k,t])=>
    `<button type="button" class="ag-chip${agendaTipos.has(k)?' on':''}" data-ag-tipo="${k}"><span class="ag-chip-dot ${t.accent}"></span>${t.label}</button>`).join('')}</div>`;

  // ---- calendário do mês ----
  const tituloMes = new Date(agendaMes.y, agendaMes.m, 1).toLocaleDateString('pt-BR',{month:'long', year:'numeric'});
  const calHTML = `<div class="panel ag-cal">
    <div class="ag-cal-head">
      <div class="ag-cal-title">${tituloMes.charAt(0).toUpperCase()+tituloMes.slice(1)}</div>
      <div class="ag-cal-nav">
        <button type="button" class="btn ghost ag-today-btn" id="ag-today">Hoje</button>
        <button type="button" class="icon-btn" id="ag-prev" title="Mês anterior">${ICONS.chevronLeft}</button>
        <button type="button" class="icon-btn" id="ag-next" title="Próximo mês">${ICONS.chevronRight}</button>
      </div>
    </div>
    ${agendaCalendarHTML(agendaMes.y, agendaMes.m, porDia, hoje)}
  </div>`;

  // ---- detalhe do dia selecionado ----
  let diaHTML;
  if(!agendaDia){
    diaHTML = `<div class="empty" style="padding:16px 0;font-size:12.5px">Clique em um dia do calendário para ver o que vence nele.</div>`;
  } else {
    const doDia = porDia[agendaDia] || [];
    diaHTML = doDia.length
      ? doDia.map(it=>agendaRowHTML(it, hoje)).join('')
      : `<div class="empty" style="padding:16px 0;font-size:12.5px">Nada marcado para este dia.</div>`;
  }
  const diaTitulo = agendaDia ? fmtDate(agendaDia) + (agendaDia===hoje ? ' · hoje' : '') : 'Dia selecionado';
  const diaPanel = `<div class="panel">
    <div class="panel-head"><div><h3>${diaTitulo}</h3><div class="panel-sub">Detalhes do dia</div></div></div>${diaHTML}</div>`;

  // ---- lista "próximos prazos" (todos os meses, em ordem) ----
  const limite7 = isoAddDays(hoje, 7);
  const grupos = [
    { cls:'late',  titulo:'Atrasados',        lista: atrasados },
    { cls:'',      titulo:'Hoje',             lista: deHoje },
    { cls:'',      titulo:'Próximos 7 dias',  lista: prox7 },
    { cls:'',      titulo:'Mais adiante',     lista: abertos.filter(it=>it.date>limite7).slice(0,15) },
  ].filter(g=>g.lista.length);
  const proxHTML = grupos.length
    ? grupos.map(g=>`<div class="ag-group-title ${g.cls}">${g.titulo}<span class="ag-count">${g.lista.length}</span></div>${g.lista.map(it=>agendaRowHTML(it, hoje)).join('')}`).join('')
    : `<div class="empty" style="padding:24px 0;font-size:12.5px">Nenhum prazo em aberto com os filtros escolhidos.</div>`;
  const semPrazo = agendaTipos.has('demanda') ? STATE.demandas.filter(d=>!d.prazo && d.status!=='concluido').length : 0;
  const notaHTML = semPrazo ? `<div class="ag-note">${semPrazo} ${semPrazo===1?'demanda aberta está':'demandas abertas estão'} sem prazo e não ${semPrazo===1?'aparece':'aparecem'} aqui. <a class="ag-link" data-goto="demandas">Definir prazos →</a></div>` : '';
  const proxPanel = `<div class="panel">
    <div class="panel-head"><div><h3>Próximos prazos</h3><div class="panel-sub">O que precisa de atenção, em ordem de data</div></div></div>
    ${proxHTML}${notaHTML}</div>`;

  return statsHTML + chipsHTML + `<div class="ag-layout">
    <div class="ag-col">${calHTML}${diaPanel}</div>
    <div class="ag-col">${proxPanel}</div>
  </div>`;
}
function attachAgendaEvents(){
  document.querySelectorAll('[data-ag-day]').forEach(c=>{
    c.addEventListener('click', ()=>{ agendaDia = c.dataset.agDay; renderContent(); });
  });
  document.querySelectorAll('[data-ag-tipo]').forEach(b=>{
    b.addEventListener('click', ()=>{
      const k = b.dataset.agTipo;
      if(agendaTipos.has(k)) agendaTipos.delete(k); else agendaTipos.add(k);
      renderContent();
    });
  });
  const mover = (delta)=>{
    const d = new Date(agendaMes.y, agendaMes.m + delta, 1);
    agendaMes = { y:d.getFullYear(), m:d.getMonth() };
    agendaDia = null;
    renderContent();
  };
  const prev = document.getElementById('ag-prev'); if(prev) prev.onclick = ()=>mover(-1);
  const next = document.getElementById('ag-next'); if(next) next.onclick = ()=>mover(1);
  const hojeBtn = document.getElementById('ag-today');
  if(hojeBtn) hojeBtn.onclick = ()=>{ const n = new Date(); agendaMes = { y:n.getFullYear(), m:n.getMonth() }; agendaDia = todayISO(); renderContent(); };
}

/* ============ FINANCEIRO ============ */
function finMonthOptions(){
  const now = new Date();
  const opts = [];
  for(let i=12;i>=-6;i--){
    const d = new Date(now.getFullYear(), now.getMonth()-i, 1);
    const label = d.toLocaleDateString('pt-BR',{month:'long', year:'numeric'});
    opts.push({ y:d.getFullYear(), m:d.getMonth(), label: label.charAt(0).toUpperCase()+label.slice(1) });
  }
  return opts;
}
function finItemsForMonth(items, y, m){
  return items.filter(f=>{
    if(!f.vencimento) return false;
    const [fy,fm] = f.vencimento.split('-').map(Number);
    return fy===y && (fm-1)===m;
  });
}
function finTrendPct(curr, prev){
  if(!prev) return null;
  return ((curr-prev)/prev)*100;
}
function finBadgeHTML(pct){
  if(pct===null || !isFinite(pct)) return '';
  const up = pct>=0;
  return `<span class="fin-trend ${up?'up':'down'}">${up?'↗':'↘'} ${up?'+':''}${pct.toFixed(1)}%</span>`;
}
function finStatusInfo(x){
  if(x.status==='pago') return { label: x.tipo==='despesa' ? 'Pago' : 'Recebido', cls:'pago' };
  if(x.status==='atrasado') return { label:'Atrasado', cls:'atrasado' };
  return { label: x.tipo==='despesa' ? 'Agendado' : 'Pendente', cls: x.tipo==='despesa' ? 'agendado' : 'pendente' };
}

function renderFinanceiro(){
  if(!finMes){ const now = new Date(); finMes = { y: now.getFullYear(), m: now.getMonth() }; }

  const monthItems = finItemsForMonth(STATE.financeiro, finMes.y, finMes.m);
  const monthReceitas = monthItems.filter(f=>f.tipo!=='despesa');
  // "Total a receber" é o que ainda falta entrar (pendente + atrasado) — não conta
  // o que já foi recebido, senão o card fica somando com o que já está pago.
  const receitasEmAberto = monthReceitas.filter(f=>f.status!=='pago');
  const totalReceber = receitasEmAberto.reduce((s,x)=>s+finSaldo(x),0);
  const pendentes = monthReceitas.filter(f=>f.status==='pendente');
  const totalPendente = pendentes.reduce((s,x)=>s+Number(x.valor||0),0);
  const recebidos = monthReceitas.filter(f=>f.status==='pago');
  const totalRecebido = recebidos.reduce((s,x)=>s+Number(x.valor||0),0);

  const monthDespesas = monthItems.filter(f=>f.tipo==='despesa');
  const totalDespesas = monthDespesas.reduce((s,x)=>s+Number(x.valor||0),0);
  const despesasPagas = monthDespesas.filter(f=>f.status==='pago');
  const totalDespesasPago = despesasPagas.reduce((s,x)=>s+Number(x.valor||0),0);

  const saldo = totalRecebido - totalDespesasPago;

  const prevD = new Date(finMes.y, finMes.m-1, 1);
  const prevMonthItems = finItemsForMonth(STATE.financeiro, prevD.getFullYear(), prevD.getMonth());
  const prevReceitas = prevMonthItems.filter(f=>f.tipo!=='despesa');
  const prevTotalReceber = prevReceitas.filter(f=>f.status!=='pago').reduce((s,x)=>s+Number(x.valor||0),0);
  const prevTotalRecebido = prevReceitas.filter(f=>f.status==='pago').reduce((s,x)=>s+Number(x.valor||0),0);
  const prevDespesas = prevMonthItems.filter(f=>f.tipo==='despesa');
  const prevTotalDespesas = prevDespesas.reduce((s,x)=>s+Number(x.valor||0),0);
  const prevTotalDespesasPago = prevDespesas.filter(f=>f.status==='pago').reduce((s,x)=>s+Number(x.valor||0),0);
  const prevSaldo = prevTotalRecebido - prevTotalDespesasPago;
  const pctReceber = finTrendPct(totalReceber, prevTotalReceber);
  const pctDespesas = finTrendPct(totalDespesas, prevTotalDespesas);
  const pctSaldo = finTrendPct(saldo, prevSaldo);

  const monthOptions = finMonthOptions();

  const headerHTML = `
  <div class="equipe-breadcrumb">${ICONS.spark||''}<span>Central de gestão</span></div>
  <div class="equipe-title-row">
    <div><h2>Financeiro</h2><p>Receitas, despesas e fluxo de caixa</p></div>
    <div class="date-badge date-select-wrap">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>
      <select id="fin-month-select">
        ${monthOptions.map(o=>`<option value="${o.y}-${o.m}" ${o.y===finMes.y && o.m===finMes.m?'selected':''}>${o.label}</option>`).join('')}
      </select>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><path d="m6 9 6 6 6-6"/></svg>
    </div>
  </div>`;

  const cardsHTML = `
  <div class="fin-cards">
    <div class="fin-card">
      <div class="fin-card-top"><div class="fin-card-icon green">${ICONS.swap}</div>${finBadgeHTML(pctReceber)}</div>
      <div class="fin-card-label">Total a receber</div>
      <div class="fin-card-value">${fmtBRL(totalReceber)}</div>
      <div class="fin-card-sub">${receitasEmAberto.length} lançamento${receitasEmAberto.length===1?'':'s'} em aberto no mês</div>
    </div>
    <div class="fin-card">
      <div class="fin-card-top"><div class="fin-card-icon red">${ICONS.trend}</div>${finBadgeHTML(pctDespesas)}</div>
      <div class="fin-card-label">Total de despesas</div>
      <div class="fin-card-value">${fmtBRL(totalDespesas)}</div>
      <div class="fin-card-sub">${monthDespesas.length} despesa${monthDespesas.length===1?'':'s'} no mês · ${fmtBRL(totalDespesasPago)} já pago</div>
    </div>
    ${pendentes.length>0 ? `
    <div class="fin-card">
      <div class="fin-card-top"><div class="fin-card-icon amber">${ICONS.clock}</div></div>
      <div class="fin-card-label">Valores pendentes</div>
      <div class="fin-card-value">${fmtBRL(totalPendente)}</div>
      <div class="fin-card-sub">${pendentes.length} lançamento${pendentes.length===1?'':'s'} pendente${pendentes.length===1?'':'s'}</div>
    </div>` : ''}
    <div class="fin-card">
      <div class="fin-card-top"><div class="fin-card-icon blue">${ICONS.check}</div>${finBadgeHTML(pctSaldo)}</div>
      <div class="fin-card-label">Saldo</div>
      <div class="fin-card-value">${fmtBRL(saldo)}</div>
      <div class="fin-card-sub">Recebido (${fmtBRL(totalRecebido)}) − pago (${fmtBRL(totalDespesasPago)})</div>
    </div>
  </div>`;

  const isPagar = finLista === 'pagar';
  const ehDaLista = f => isPagar ? f.tipo==='despesa' : f.tipo!=='despesa';
  const adv = finAdv[finLista] || {};
  const nFiltros = Object.values(adv).filter(v=>v!=null && v!=='').length;

  // Com filtros avançados preenchidos, a pesquisa vale para todos os meses;
  // sem filtros, a lista segue o mês escolhido no topo.
  let items = (nFiltros ? STATE.financeiro : monthItems).filter(ehDaLista);
  if(searchTerm.trim()){
    const q = finNorm(searchTerm);
    items = items.filter(x => finNorm([x.descricao, x.clienteNome, x.fornecedor, x.numeroDocumento, x.identificador].join(' ')).includes(q));
  }
  items = items.filter(x => finCasaFiltros(x, adv, isPagar));
  items.sort((a,b)=>(b.vencimento||'').localeCompare(a.vencimento||''));

  // contas parceladas viram uma linha-resumo (com as parcelas ao abrir); o resto é uma linha por conta
  const linhas = [], porGrupo = new Map();
  items.forEach(x=>{
    if(x.grupoId && x.ocorrencia==='parcelada'){
      if(!porGrupo.has(x.grupoId)){ const g = { id:x.grupoId, match:new Set() }; porGrupo.set(x.grupoId, g); linhas.push({ grupo:g }); }
      porGrupo.get(x.grupoId).match.add(x.id);
    } else linhas.push({ item:x });
  });

  const saldoLista = items.reduce((s,x)=>s+finSaldo(x),0);
  const mesLabel = monthOptions.find(o=>o.y===finMes.y&&o.m===finMes.m).label;
  const qtdReceber = monthItems.filter(f=>f.tipo!=='despesa').length;
  const qtdPagar = monthItems.filter(f=>f.tipo==='despesa').length;

  const headerPainel = `
  <div class="fin-tabs">
    <button type="button" class="fin-tab ${!isPagar?'active':''}" data-fin-lista="receber">Contas a receber <span class="fin-tab-count">${qtdReceber}</span></button>
    <button type="button" class="fin-tab ${isPagar?'active':''}" data-fin-lista="pagar">Contas a pagar <span class="fin-tab-count">${qtdPagar}</span></button>
  </div>
  <div class="panel fin-panel">
    <div class="panel-head">
      <div>
        <h3>${isPagar ? 'Contas a pagar' : 'Contas a receber'}</h3>
        <div class="panel-sub">${nFiltros ? 'Resultado dos filtros (todos os meses)' : 'Vencimentos em '+mesLabel} · ${linhas.length} conta${linhas.length===1?'':'s'} · saldo em aberto ${fmtBRL(saldoLista)}</div>
      </div>
      <div class="fin-actions">
        <button class="btn" id="fin-new-receber" type="button">${ICONS.plus}<span>Nova conta a receber</span></button>
        <button class="btn" id="fin-new-pagar" type="button">${ICONS.plus}<span>Nova conta a pagar</span></button>
        <button class="btn ghost" id="fin-adv-toggle" type="button">Filtros avançados${nFiltros ? ' ('+nFiltros+')' : ''}</button>
      </div>
    </div>
    ${finAdvOpen ? finAdvancedHTML(adv, isPagar) : ''}`;

  if(linhas.length===0){
    const filtrando = nFiltros || searchTerm.trim();
    return headerHTML + cardsHTML + headerPainel + `<div class="empty"><strong>${filtrando ? 'Nenhuma conta encontrada' : (isPagar ? 'Nenhuma conta a pagar neste mês' : 'Nenhuma conta a receber neste mês')}</strong>${filtrando ? 'Ajuste a busca ou limpe os filtros avançados.' : (isPagar ? 'Clique em "Nova conta a pagar" para cadastrar.' : 'Clique em "Nova conta a receber" para cadastrar.')}</div></div>`;
  }

  const rows = linhas.map(l => {
    if(l.item) return finLinhaHTML(l.item, isPagar);
    const todas = finParcelasDoGrupo(l.grupo.id);
    let html = finGrupoHTML(l.grupo.id, todas, isPagar);
    if(finGruposAbertos.has(l.grupo.id)) html += todas.map(p => finLinhaHTML(p, isPagar, { filho:true, fora:!l.grupo.match.has(p.id) })).join('');
    return html;
  }).join('');

  return headerHTML + cardsHTML + headerPainel + `
    <div class="fin-table-wrap">
      <table class="fin-datatable">
        <thead><tr>
          <th>${isPagar?'Fornecedor':'Cliente'}</th><th>Descrição</th><th class="hide-m">Documento / Identificador</th>
          <th class="hide-m">Emissão</th><th>Vencimento</th><th class="hide-m">Competência</th>
          <th class="num">Valor total</th><th class="num hide-m">${isPagar?'Pago':'Recebido'}</th><th class="num">Saldo em aberto</th>
          <th>Situação</th><th>Ações</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  </div>`;
}

/* ---------- situação, saldo e baixas (calculados) ---------- */
const finNorm = t => String(t==null?'':t).trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ');
const fmtComp = c => { if(!c) return '—'; const [y,m] = String(c).split('-'); return m ? `${m}/${y}` : c; };

// Baixas da conta. Contas antigas já marcadas como pagas (sem lista de baixas) ganham uma baixa "de registro anterior".
function finBaixas(x){
  if(Array.isArray(x.baixas) && x.baixas.length) return x.baixas;
  if(x.status==='pago'){
    return [{ id:x.id+'-legado', data:x.dataPagamento||x.vencimento||'', forma:x.formaRecebimento||'', conta:x.contaFinanceira||'',
      multa:Number(x.multa)||0, juros:Number(x.juros)||0, desconto:Number(x.desconto)||0,
      valorRecebido:Number(x.valorRecebido!=null ? x.valorRecebido : x.valor)||0, abatido:Number(x.valor)||0, obs:'', legado:true }];
  }
  return [];
}
function finSaldo(x){
  if(x.status==='pago') return 0;
  if(x.saldo!=null && x.saldo!=='') return Math.max(0, Number(x.saldo)||0);
  return Number(x.valor)||0;
}
function finRecebido(x){ return Math.max(0, (Number(x.valor)||0) - finSaldo(x)); }

// Pendente: sem baixa e não venceu · Parcial: baixa parcial e não venceu ·
// Vencida: venceu com saldo (indica baixa parcial, se houver) · Recebida/Paga: saldo zero
function finSituacao(x){
  const pagar = x.tipo==='despesa';
  if(_cent(finSaldo(x)) <= 0) return { chave:'quitada', label: pagar?'Paga':'Recebida', cls:'pago' };
  const parcial = finBaixas(x).length > 0;
  const vencida = !!x.vencimento && x.vencimento < todayISO();
  if(vencida) return { chave:'vencida', label: parcial ? 'Vencida · baixa parcial' : 'Vencida', cls:'atrasado' };
  if(parcial) return { chave:'parcial', label:'Parcial', cls:'parcial' };
  return { chave:'pendente', label:'Pendente', cls:'pendente' };
}
function finSituacaoGrupo(parcelas){
  const pagar = parcelas[0] && parcelas[0].tipo==='despesa';
  const sits = parcelas.map(finSituacao);
  if(sits.every(x=>x.chave==='quitada')) return { chave:'quitada', label: pagar?'Paga':'Recebida', cls:'pago' };
  const algumaBaixa = parcelas.some(p=>finBaixas(p).length>0);
  if(sits.some(x=>x.chave==='vencida')) return { chave:'vencida', label: algumaBaixa ? 'Vencida · baixa parcial' : 'Vencida', cls:'atrasado' };
  if(algumaBaixa) return { chave:'parcial', label:'Parcial', cls:'parcial' };
  return { chave:'pendente', label:'Pendente', cls:'pendente' };
}
function finParcelasDoGrupo(gid){
  return STATE.financeiro.filter(f=>f.grupoId===gid).sort((a,b)=>(a.vencimento||'').localeCompare(b.vencimento||'') || (parseInt(a.parcela)||0)-(parseInt(b.parcela)||0));
}
const finBaseDescricao = d => String(d||'').replace(/\s*\(\d+\/\d+\)\s*$/,'');

// Filtros cumulativos: campo vazio não restringe; tudo que está preenchido precisa ser atendido
function finCasaFiltros(x, adv, isPagar){
  const noPeriodo = (v, de, ate) => { if(!de && !ate) return true; if(!v) return false; return (!de || v>=de) && (!ate || v<=ate); };
  if(!noPeriodo(x.dataEmissao, adv.emDe, adv.emAte)) return false;
  if(!noPeriodo(x.vencimento, adv.vcDe, adv.vcAte)) return false;
  if((adv.bxDe || adv.bxAte) && !finBaixas(x).some(b=>noPeriodo(b.data, adv.bxDe, adv.bxAte))) return false;
  if(adv.competencia && x.competencia !== adv.competencia) return false;
  if(adv.plano && x.planoContas !== adv.plano) return false;
  if(adv.identificador && !finNorm(x.identificador).includes(finNorm(adv.identificador))) return false;
  if(adv.documento && !finNorm(x.numeroDocumento).includes(finNorm(adv.documento))) return false;
  if(adv.situacao && finSituacao(x).chave !== adv.situacao) return false;
  if(adv.descricao && !finNorm([x.descricao, ...finBaixas(x).map(b=>b.obs)].join(' ')).includes(finNorm(adv.descricao))) return false;
  if(adv.pessoa){
    if(isPagar){
      const f = STATE.fornecedores.find(z=>z.id===adv.pessoa);
      if(!(x.fornecedorId===adv.pessoa || (f && finNorm(x.fornecedor||x.clienteNome)===finNorm(f.nome)))) return false;
    } else if(x.clienteId !== adv.pessoa) return false;
  }
  if(adv.formaPrevista && x.formaRecebimento !== adv.formaPrevista) return false;
  if(adv.formaBaixa && !finBaixas(x).some(b=>b.forma===adv.formaBaixa)) return false;
  return true;
}

const finAcoesHTML = (x, opts={}) => {
  const saldo = finSaldo(x);
  return `<div class="row-actions">
    ${!opts.grupo && saldo > 0.004 ? `<button class="icon-btn success" data-pay="financeiro" data-id="${x.id}" title="Baixar conta" aria-label="Baixar conta">${ICONS.check}</button>` : ''}
    <button class="icon-btn" data-fin-det="${x.id}" ${opts.grupo?'data-grupo="1"':''} title="Ver detalhes" aria-label="Ver detalhes">${ICONS.eye}</button>
    <button class="icon-btn" data-fin-hist="${x.id}" ${opts.grupo?'data-grupo="1"':''} title="Ver histórico" aria-label="Ver histórico">${ICONS.clock}</button>
    ${opts.grupo ? '' : `<button class="icon-btn" data-edit="financeiro" data-id="${x.id}" title="Editar">${ICONS.edit}</button>
    <button class="icon-btn danger" data-del="financeiro" data-id="${x.id}" title="Excluir">${ICONS.trash}</button>`}
  </div>`;
};

function finLinhaHTML(x, isPagar, o={}){
  const sit = finSituacao(x);
  const nome = isPagar ? (x.fornecedor || x.clienteNome || '—') : (x.clienteNome || clienteNome(x.clienteId));
  const doc = [x.numeroDocumento, x.identificador].filter(Boolean).map(escHTML).join(' · ') || '—';
  return `
    <tr class="${o.filho?'fin-filho':''} ${o.fora?'fin-fora':''}">
      <td>${o.filho ? '<span class="fin-ident">↳</span>' : ''}${escHTML(nome)}</td>
      <td><span class="link-name" data-fin-det="${x.id}">${escHTML(x.descricao)}</span></td>
      <td class="hide-m">${doc}</td>
      <td class="hide-m">${fmtDate(x.dataEmissao)}</td>
      <td>${fmtDate(x.vencimento)}</td>
      <td class="hide-m">${fmtComp(x.competencia)}</td>
      <td class="num">${fmtBRL(x.valor)}</td>
      <td class="num hide-m">${fmtBRL(finRecebido(x))}</td>
      <td class="num"><strong>${fmtBRL(finSaldo(x))}</strong></td>
      <td><span class="pill ${sit.cls}">${sit.label}</span></td>
      <td>${finAcoesHTML(x)}</td>
    </tr>`;
}

// Linha-resumo de uma conta parcelada (o conjunto); as parcelas abrem logo abaixo
function finGrupoHTML(gid, todas, isPagar){
  if(!todas.length) return '';
  const first = todas[0], last = todas[todas.length-1];
  const totalC = todas.reduce((a,p)=>a+_cent(p.valor),0);
  const saldoC = todas.reduce((a,p)=>a+_cent(finSaldo(p)),0);
  const abertas = todas.filter(p=>_cent(finSaldo(p))>0);
  const prox = abertas.length ? abertas[0].vencimento : last.vencimento;
  const sit = finSituacaoGrupo(todas);
  const nome = isPagar ? (first.fornecedor || first.clienteNome || '—') : (first.clienteNome || clienteNome(first.clienteId));
  const doc = [first.numeroDocumento, first.identificador].filter(Boolean).map(escHTML).join(' · ') || '—';
  const aberto = finGruposAbertos.has(gid);
  const comp = first.competencia && last.competencia && first.competencia!==last.competencia ? `${fmtComp(first.competencia)} a ${fmtComp(last.competencia)}` : fmtComp(first.competencia);
  return `
    <tr class="fin-grupo">
      <td>${escHTML(nome)}</td>
      <td><button type="button" class="fin-toggle" data-fin-grupo="${gid}" aria-expanded="${aberto}" title="${aberto?'Ocultar':'Ver'} parcelas">${aberto?'▾':'▸'}</button>
        <span class="link-name" data-fin-det="${first.id}" data-grupo="1">${escHTML(finBaseDescricao(first.descricao))}</span>
        <span class="fin-parc-tag">${todas.length} parcelas · ${todas.length-abertas.length} quitada${todas.length-abertas.length===1?'':'s'}</span></td>
      <td class="hide-m">${doc}</td>
      <td class="hide-m">${fmtDate(first.dataEmissao)}</td>
      <td>${fmtDate(prox)}</td>
      <td class="hide-m">${comp}</td>
      <td class="num">${fmtBRL(totalC/100)}</td>
      <td class="num hide-m">${fmtBRL((totalC-saldoC)/100)}</td>
      <td class="num"><strong>${fmtBRL(saldoC/100)}</strong></td>
      <td><span class="pill ${sit.cls}">${sit.label}</span></td>
      <td>${finAcoesHTML(first, { grupo:true })}</td>
    </tr>`;
}

// Painel "Filtros avançados": critérios cumulativos, comuns às duas listas + os de cada tipo
function finAdvancedHTML(adv, isPagar){
  const opt = (arr, sel) => arr.map(([v,l])=>`<option value="${v}" ${String(sel||'')===String(v)?'selected':''}>${l}</option>`).join('');
  const txt = (id, label, ph) => `<div class="field"><label>${label}</label><input type="text" id="${id}" value="${escHTML(adv[id.slice(3)]||'')}" placeholder="${ph||''}"></div>`;
  const dt = (id, label) => `<div class="field"><label>${label}</label><input type="date" id="fa_${id}" value="${adv[id]||''}"></div>`;
  const baixaTxt = isPagar ? 'pagamento' : 'recebimento';
  const pessoa = isPagar
    ? `<div class="field"><label>Fornecedor</label><select id="fa_pessoa">${opt([['','Todos'], ...fornecedorOptions()], adv.pessoa)}</select></div>`
    : `<div class="field"><label>Cliente</label><select id="fa_pessoa">${opt([['','Todos'], ...clienteOptions()], adv.pessoa)}</select></div>`;
  const situacoes = [['','Todas'],['pendente','Pendente'],['parcial','Parcial'],['vencida','Vencida'],['quitada', isPagar?'Paga':'Recebida']];
  return `
  <div class="fin-adv">
    <div class="fin-adv-grid">
      ${dt('emDe','Emissão — de')}${dt('emAte','Emissão — até')}
      ${dt('vcDe','Vencimento — de')}${dt('vcAte','Vencimento — até')}
      ${dt('bxDe','Baixa ('+baixaTxt+') — de')}${dt('bxAte','Baixa ('+baixaTxt+') — até')}
      <div class="field"><label>Competência (mês/ano)</label><input type="month" id="fa_competencia" value="${adv.competencia||''}"></div>
      <div class="field"><label>Plano de contas</label><select id="fa_plano">${opt([['','Todos'], ...planoContasOptions(isPagar)], adv.plano)}</select></div>
      ${txt('fa_identificador','Identificador','Código interno')}
      ${txt('fa_documento','Nº do documento','Ex: NF 1234')}
      <div class="field"><label>Situação</label><select id="fa_situacao">${opt(situacoes, adv.situacao)}</select></div>
      ${txt('fa_descricao','Descrição ou histórico','Parte do texto')}
      ${pessoa}
      <div class="field"><label>${isPagar?'Forma prevista de pagamento':'Forma prevista de recebimento'}</label><select id="fa_formaPrevista">${opt([['','Todas'], ...FORMA_RECEBIMENTO_OPTIONS], adv.formaPrevista)}</select></div>
      <div class="field"><label>Forma registrada na baixa</label><select id="fa_formaBaixa">${opt([['','Todas'], ...FORMA_RECEBIMENTO_OPTIONS], adv.formaBaixa)}</select></div>
    </div>
    <div class="fin-adv-actions">
      <button class="btn ghost" id="fin-adv-back" type="button">Voltar</button>
      <button class="btn ghost" id="fin-adv-clear" type="button">Limpar filtros</button>
      <button class="btn" id="fin-adv-apply" type="button">Pesquisar</button>
    </div>
  </div>`;
}

function emptyState(title, sub){ return `<div class="table-wrap"><div class="empty"><strong>${title}</strong>${sub}</div></div>`; }

/* ============ DOCUMENTOS ============ */
const DOC_CATEGORIA_OPTIONS = [['contrato','Contrato'],['proposta','Proposta'],['relatorio','Relatório'],['financeiro','Financeiro'],['outro','Outro']];
const DOC_STATUS_OPTIONS = [['vigente','Vigente'],['a_vencer','A vencer'],['vencido','Vencido']];
const DOC_MAX_SIZE = 3 * 1024 * 1024; // 3MB — limite para não estourar o localStorage

function documentoStatusLabel(s){ return {vigente:'Vigente', a_vencer:'A vencer', vencido:'Vencido'}[s] || 'Vigente'; }
function categoriaLabel(c){ return {contrato:'Contrato', proposta:'Proposta', relatorio:'Relatório', financeiro:'Financeiro', outro:'Outro'}[c] || 'Outro'; }
function formatBytes(bytes){
  if(bytes==null) return '';
  if(bytes < 1024) return bytes + ' B';
  if(bytes < 1024*1024) return Math.round(bytes/1024) + ' KB';
  return (bytes/(1024*1024)).toFixed(1) + ' MB';
}
function fileExtension(filename){
  const m = /\.([a-zA-Z0-9]+)$/.exec(filename||'');
  return m ? m[1].toUpperCase() : 'ARQ';
}
function documentosFiltrados(){
  let items = [...STATE.documentos];
  if(searchTerm.trim()){
    const q = searchTerm.trim().toLowerCase();
    items = items.filter(x =>
      (x.nome||'').toLowerCase().includes(q) ||
      (x.clienteNome||'').toLowerCase().includes(q) ||
      (responsavelNome(x.responsavelId)||'').toLowerCase().includes(q)
    );
  }
  if(filterValue && filterValue!=='todos') items = items.filter(x=>x.categoria===filterValue);
  items.sort((a,b)=> (b.atualizadoEm||'').localeCompare(a.atualizadoEm||''));
  return items;
}

function renderDocumentos(){
  const total = STATE.documentos.length;
  const vigentes = STATE.documentos.filter(x=>(x.status||'vigente')==='vigente').length;
  const exigemAtencao = STATE.documentos.filter(x=>x.status==='a_vencer' || x.status==='vencido').length;
  const categoriaFiltro = [['todos','Todas as categorias'], ...DOC_CATEGORIA_OPTIONS];

  return `
  <div class="documentos-page">
  <div class="equipe-breadcrumb">${ICONS.spark||''}<span>Central de gestão</span></div>
  <div class="equipe-title-row">
    <div><h2>Documentos</h2><p>Arquivos, contratos e documentos centralizados</p></div>
  </div>
  <div class="mini-stats">
    <div class="mini-stat-card">
      <div class="mini-label">${ICONS.folder}<span>Total de documentos</span></div>
      <div class="mini-value">${total}</div>
    </div>
    <div class="mini-stat-card">
      <div class="mini-label">${ICONS.shield}<span>Vigentes</span></div>
      <div class="mini-value">${vigentes}</div>
    </div>
    <div class="mini-stat-card">
      <div class="mini-label">${ICONS.alertTriangle}<span>Exigem atenção</span></div>
      <div class="mini-value">${exigemAtencao}</div>
    </div>
  </div>
  <div class="team-panel">
    <div class="team-panel-head">
      <div><h3>Central de documentos</h3><div class="panel-sub">Contratos, propostas, relatórios e arquivos internos</div></div>
      <button class="btn" id="doc-new-btn">${ICONS.upload}<span>Adicionar documento</span></button>
    </div>
    <div class="client-toolbar">
      <div class="search-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        <input type="text" id="doc-search-input" placeholder="Buscar documento, cliente ou responsável" value="${searchTerm.replace(/"/g,'&quot;')}">
      </div>
      <select id="doc-categoria-select">${categoriaFiltro.map(([v,l])=>`<option value="${v}" ${filterValue===v?'selected':''}>${l}</option>`).join('')}</select>
      <div class="client-results" id="doc-results"></div>
    </div>
    <div id="doc-table">${renderDocumentosTable()}</div>
  </div>
  </div>`;
}

function renderDocumentosTable(){
  const items = documentosFiltrados();
  setTimeout(()=>{ const r=document.getElementById('doc-results'); if(r) r.textContent = items.length+' resultado'+(items.length===1?'':'s'); },0);
  if(items.length===0) return `<div class="empty" style="padding:44px 20px"><strong>Nenhum documento encontrado</strong>Adicione contratos, propostas e arquivos para manter tudo centralizado.</div>`;

  const rows = items.map(x=>{
    const tamanho = x.arquivoTamanho ? ` • ${x.arquivoTamanho}` : '';
    const tipo = x.arquivoTipo || 'ARQ';
    return `
    <tr>
      <td>
        <div class="doc-name-cell">
          <div class="doc-icon">${ICONS.doc}</div>
          <div class="doc-name-info">
            <strong>${x.nome}</strong>
            <small>${tipo}${tamanho}</small>
          </div>
        </div>
      </td>
      <td>${categoriaLabel(x.categoria)}</td>
      <td>${fmtDate(x.data)}</td>
      <td>${x.clienteNome || '—'}</td>
      <td>${responsavelNome(x.responsavelId) || '—'}</td>
      <td><span class="pill ${x.status||'vigente'}">${documentoStatusLabel(x.status)}</span></td>
      <td><div class="row-actions">
        <button class="icon-btn" data-download="documentos" data-id="${x.id}" title="Baixar">${ICONS.download}</button>
        <button class="icon-btn" data-edit="documentos" data-id="${x.id}" title="Editar">${ICONS.edit}</button>
        <button class="icon-btn danger" data-del="documentos" data-id="${x.id}" title="Excluir">${ICONS.trash}</button>
      </div></td>
    </tr>`;
  }).join('');

  return `<div class="table-wrap"><table>
    <thead><tr><th>Documento</th><th>Categoria</th><th>Data</th><th>Cliente</th><th>Responsável</th><th>Status</th><th>Ações</th></tr></thead>
    <tbody>${rows}</tbody></table></div>`;
}

function refreshDocumentosTable(){
  document.getElementById('doc-table').innerHTML = renderDocumentosTable();
  attachContentEvents();
}

function attachDocumentosEvents(){
  const searchInput = document.getElementById('doc-search-input');
  const catSelect = document.getElementById('doc-categoria-select');
  const newBtn = document.getElementById('doc-new-btn');
  if(searchInput) searchInput.oninput = (e)=>{ searchTerm = e.target.value; refreshDocumentosTable(); };
  if(catSelect) catSelect.onchange = (e)=>{ filterValue = e.target.value; refreshDocumentosTable(); };
  if(newBtn) newBtn.onclick = () => openDocumentoModal();
}

/* ============ RELATÓRIOS ============ */
function relServicosConcluidosMes(y, m){
  return STATE.servicos.filter(s=>{
    if(s.status!=='concluido') return false;
    const ref = s.dataConclusao || s.prazoEntrega;
    if(!ref) return false;
    const [yy,mm] = ref.split('-').map(Number);
    return yy===y && (mm-1)===m;
  });
}
function relClientesAtendidosMes(y, m){
  const idsServicos = new Set(relServicosConcluidosMes(y, m).map(s=>s.clienteId).filter(Boolean));
  return idsServicos.size;
}
function relColaboradoresAtivos(){
  return STATE.equipe.filter(x=>(x.status||'ativo')==='ativo').length;
}
function relRecebidoMes(y, m){
  return STATE.financeiro.filter(f=>{
    if(f.tipo==='despesa' || f.status!=='pago' || !f.dataPagamento) return false;
    const [yy,mm] = f.dataPagamento.split('-').map(Number);
    return yy===y && (mm-1)===m;
  }).reduce((s,x)=>s+Number(x.valorRecebido ?? x.valor ?? 0),0);
}
function relKPIs(y, m){
  const receita = relRecebidoMes(y, m);
  const dPrev = new Date(y, m-1, 1);
  const receitaPrev = relRecebidoMes(dPrev.getFullYear(), dPrev.getMonth());
  const concluidosLista = relServicosConcluidosMes(y, m);
  const concluidos = concluidosLista.length;
  const noPrazoCount = concluidosLista.filter(s=>!s.prazoEntrega || !s.dataConclusao || s.dataConclusao<=s.prazoEntrega).length;
  const pctNoPrazo = concluidos ? Math.round((noPrazoCount/concluidos)*100) : 0;
  const concluidosPrevLista = relServicosConcluidosMes(dPrev.getFullYear(), dPrev.getMonth());
  const colaboradoresAtivos = relColaboradoresAtivos();
  const clientesAtendidos = relClientesAtendidosMes(y, m);
  const totalClientes = STATE.clientes.length;
  const pctCarteira = totalClientes ? Math.round((clientesAtendidos/totalClientes)*100) : 0;
  return {
    receita, receitaPct: finTrendPct(receita, receitaPrev),
    concluidos, pctNoPrazo, concluidosPct: finTrendPct(concluidos, concluidosPrevLista.length),
    colaboradoresAtivos,
    clientesAtendidos, pctCarteira, totalClientes
  };
}
function relChartData(y, m){
  const months = [];
  for(let i=5;i>=0;i--){
    const d = new Date(y, m-i, 1);
    months.push({ y:d.getFullYear(), m:d.getMonth(), label:d.toLocaleDateString('pt-BR',{month:'short'}).replace('.','') });
  }
  return months.map(mo=>({
    ...mo,
    receita: relRecebidoMes(mo.y, mo.m),
    servicos: relServicosConcluidosMes(mo.y, mo.m).length,
  }));
}
function relChartHTML(y, m){
  const data = relChartData(y, m);
  const maxReceita = Math.max(1, ...data.map(d=>d.receita));
  const maxServicos = Math.max(1, ...data.map(d=>d.servicos));
  const semDados = data.every(d=>d.receita===0 && d.servicos===0);
  if(semDados) return `<div class="empty" style="padding:30px 0">Nenhum dado registrado nos últimos 6 meses.</div>`;
  return `
  <div class="rel-chart">${data.map(d=>{
    const h1 = Math.max(2, Math.round((d.receita/maxReceita)*100));
    const h2 = Math.max(2, Math.round((d.servicos/maxServicos)*100));
    return `<div class="rel-chart-bar-wrap">
      <div class="rel-chart-bars">
        <div class="rel-chart-bar blue" style="height:${h1}%" title="Receita: ${fmtBRL(d.receita)}"></div>
        <div class="rel-chart-bar green" style="height:${h2}%" title="Serviços concluídos: ${d.servicos}"></div>
      </div>
      <span class="dash-chart-label">${d.label}</span>
    </div>`;
  }).join('')}</div>
  <div class="rel-chart-legend"><span><i class="dot blue"></i>Receita</span><span><i class="dot green"></i>Serviços</span></div>`;
}
function relSetorData(){
  const setores = {};
  STATE.equipe.forEach(x=>{
    const s = x.setor || 'Outros';
    setores[s] = (setores[s]||0) + 1;
  });
  const entries = Object.entries(setores).filter(([,v])=>v>0);
  const total = entries.reduce((s,[,v])=>s+v,0);
  const cores = ['#4157F0','#7C3AED','#16A34A','#F5A524','#0EA5E9','#DB2777'];
  return { total, items: entries.map(([nome,v],i)=>({ nome, v, pct: total ? Math.round((v/total)*100) : 0, cor: cores[i%cores.length] })) };
}
function relDonutHTML(){
  const { total, items } = relSetorData();
  if(!total) return `<div class="empty" style="padding:30px 0">Cadastre colaboradores para ver a distribuição por setor.</div>`;
  let acc = 0;
  const stops = items.map(it=>{
    const start = acc/total*360; acc += it.v; const end = acc/total*360;
    return `${it.cor} ${start}deg ${end}deg`;
  }).join(', ');
  return `
  <div class="rel-donut-row">
    <div class="rel-donut" style="background:conic-gradient(${stops})">
      <div class="rel-donut-center"><strong>${total}</strong><span>colaboradores</span></div>
    </div>
    <div class="rel-legend">${items.map(it=>`
      <div class="rel-legend-row"><i class="dot" style="background:${it.cor}"></i><span>${it.nome}</span><b>${it.pct}%</b></div>
    `).join('')}</div>
  </div>`;
}
const RELATORIOS_DISPONIVEIS = [
  { id:'gerencial', icon:'trend', cor:'blue', titulo:'Relatório gerencial mensal', sub:'Resultados operacionais, financeiros e da equipe' },
  { id:'equipe', icon:'people', cor:'violet', titulo:'Desempenho da equipe', sub:'Colaboradores, cargos e setores' },
  { id:'clientes', icon:'folder', cor:'amber', titulo:'Carteira de clientes', sub:'Receita, status, serviços e pendências' },
  { id:'financeiro', icon:'mail', cor:'green', titulo:'Financeiro detalhado', sub:'Fluxo de caixa, despesas e rentabilidade' },
];
function renderRelatorios(){
  if(!relatoriosMes){ const now = new Date(); relatoriosMes = { y: now.getFullYear(), m: now.getMonth() }; }
  const { y, m } = relatoriosMes;
  const monthOptions = finMonthOptions();
  const mesLabel = monthOptions.find(o=>o.y===y && o.m===m)?.label || equipeMesAtual();
  const k = relKPIs(y, m);

  return `
  <div class="documentos-page">
  <div class="equipe-breadcrumb">${ICONS.spark||''}<span>Central de gestão</span></div>
  <div class="equipe-title-row">
    <div><h2>Relatórios</h2><p>Análises gerenciais para apoiar decisões</p></div>
    <div class="date-badge date-select-wrap">
      ${ICONS.calendar}
      <select id="rel-month-select">
        ${monthOptions.map(o=>`<option value="${o.y}-${o.m}" ${o.y===y && o.m===m?'selected':''}>${o.label}</option>`).join('')}
      </select>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><path d="m6 9 6 6 6-6"/></svg>
    </div>
  </div>

  <div class="team-panel">
    <div class="team-panel-head">
      <div><h3>Painel de relatórios</h3><div class="panel-sub">Indicadores consolidados para decisões gerenciais</div></div>
      <div class="rel-panel-actions">
        <select id="rel-month-select-2" class="rel-select">
          ${monthOptions.map(o=>`<option value="${o.y}-${o.m}" ${o.y===y && o.m===m?'selected':''}>${o.label}</option>`).join('')}
        </select>
        <button class="btn" id="rel-export-btn">${ICONS.download}<span>Exportar</span></button>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-card-top"><div class="kpi-icon green">${ICONS.dollar}</div>${finBadgeHTML(k.receitaPct)}</div>
        <div class="kpi-value">${fmtBRL(k.receita)}</div>
        <div class="kpi-label">Receita no período</div>
        <div class="kpi-compare">${mesLabel}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-card-top"><div class="kpi-icon blue">${ICONS.wrench}</div>${finBadgeHTML(k.concluidosPct)}</div>
        <div class="kpi-value">${k.concluidos}</div>
        <div class="kpi-label">Serviços concluídos</div>
        <div class="kpi-compare">${k.concluidos ? k.pctNoPrazo+'% dentro do prazo' : 'nenhum concluído no período'}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-card-top"><div class="kpi-icon violet">${ICONS.people}</div></div>
        <div class="kpi-value">${k.colaboradoresAtivos}</div>
        <div class="kpi-label">Colaboradores ativos</div>
        <div class="kpi-compare">membros da equipe</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-card-top"><div class="kpi-icon amber">${ICONS.equipe}</div></div>
        <div class="kpi-value">${k.clientesAtendidos}</div>
        <div class="kpi-label">Clientes atendidos</div>
        <div class="kpi-compare">${k.pctCarteira}% da carteira ativa</div>
      </div>
    </div>

    <div class="dash-row">
      <div class="panel">
        <div class="panel-head"><div><h3>Desempenho mensal</h3><div class="panel-sub">Receita e serviços concluídos nos últimos seis meses</div></div><span class="panel-head-icon">${ICONS.barChart}</span></div>
        ${relChartHTML(y, m)}
      </div>
      <div class="panel">
        <div class="panel-head"><div><h3>Distribuição por setor</h3><div class="panel-sub">Colaboradores por setor</div></div><span class="panel-head-icon violet">${ICONS.pie}</span></div>
        ${relDonutHTML()}
      </div>
    </div>

    <div class="panel" style="margin-top:20px">
      <div class="panel-head"><div><h3>Relatórios disponíveis</h3><div class="panel-sub">Gere análises específicas conforme a necessidade</div></div><span class="panel-head-icon">${ICONS.doc}</span></div>
      <div class="rel-report-grid">
        ${RELATORIOS_DISPONIVEIS.map(r=>`
        <div class="rel-report-card">
          <div class="kpi-icon ${r.cor}">${ICONS[r.icon]}</div>
          <div class="rel-report-info"><strong>${r.titulo}</strong><span>${r.sub}</span></div>
          <button class="icon-btn" data-rel-export="${r.id}" title="Baixar">${ICONS.download}</button>
        </div>`).join('')}
      </div>
    </div>
  </div>
  </div>`;
}
function relCSV(rows){
  return rows.map(r=>r.map(c=>{
    const s = String(c===undefined||c===null?'':c).replace(/"/g,'""');
    return /[;",\n]/.test(s) ? `"${s}"` : s;
  }).join(';')).join('\n');
}
function relDownload(filename, content){
  const blob = new Blob(['\uFEFF'+content], { type:'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
function relExport(tipo, y, m){
  const mesLabel = finMonthOptions().find(o=>o.y===y && o.m===m)?.label || '';
  if(tipo==='gerencial'){
    const k = relKPIs(y, m);
    relDownload(`relatorio-gerencial-${y}-${m+1}.csv`, relCSV([
      ['Relatório gerencial mensal', mesLabel],
      ['Receita no período', k.receita],
      ['Serviços concluídos', k.concluidos],
      ['% dentro do prazo', k.pctNoPrazo],
      ['Colaboradores ativos', k.colaboradoresAtivos],
      ['Clientes atendidos', k.clientesAtendidos],
    ]));
  } else if(tipo==='equipe'){
    relDownload('desempenho-equipe.csv', relCSV([
      ['Nome','Cargo','Setor','Status'],
      ...STATE.equipe.map(x=>[x.nome,x.cargo,x.setor,equipeStatusLabel(x.status)])
    ]));
  } else if(tipo==='clientes'){
    relDownload('carteira-clientes.csv', relCSV([
      ['Nome','Status','Email','Telefone'],
      ...STATE.clientes.map(x=>[x.nome,clienteStatusLabel(x.status),x.email,x.telefone])
    ]));
  } else if(tipo==='financeiro'){
    relDownload('financeiro-detalhado.csv', relCSV([
      ['Descrição','Tipo','Valor','Status','Vencimento','Pagamento'],
      ...STATE.financeiro.map(x=>[x.descricao,x.tipo,x.valor,financeiroStatusLabel(x.status),fmtDate(x.vencimento),fmtDate(x.dataPagamento)])
    ]));
  }
  toast('Relatório exportado.');
}
function attachRelatoriosEvents(){
  const sync = (val)=>{ const [y,m]=val.split('-').map(Number); relatoriosMes = { y, m }; renderContent(); };
  const sel1 = document.getElementById('rel-month-select');
  const sel2 = document.getElementById('rel-month-select-2');
  if(sel1) sel1.onchange = (e)=> sync(e.target.value);
  if(sel2) sel2.onchange = (e)=> sync(e.target.value);
  const exportBtn = document.getElementById('rel-export-btn');
  if(exportBtn) exportBtn.onclick = () => relExport('gerencial', relatoriosMes.y, relatoriosMes.m);
  document.querySelectorAll('[data-rel-export]').forEach(btn=>{
    btn.addEventListener('click', ()=> relExport(btn.dataset.relExport, relatoriosMes.y, relatoriosMes.m));
  });
}

/* ============ USUÁRIOS (somente admin) ============
   Diferente dos outros módulos, estes dados não ficam no localStorage:
   vêm direto do Supabase (tabela profiles), pois são os logins de acesso
   ao painel. A criação de usuário passa pela Edge Function admin-create-user. */
function renderUsuarios(){
  return `
  <div class="clientes-page">
  <div class="equipe-breadcrumb">${ICONS.shield}<span>Controle de acesso</span></div>
  <div class="equipe-title-row">
    <div><h2>Usuários</h2><p>Pessoas com acesso ao painel</p></div>
  </div>
  <div class="team-panel">
    <div class="team-panel-head">
      <div><h3>Usuários cadastrados</h3><div class="panel-sub">Somente administradores podem cadastrar novos acessos</div></div>
      <button class="btn" id="usuario-new-btn">${ICONS.plus}<span>Novo usuário</span></button>
    </div>
    <div class="team-toolbar">
      <div class="search-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        <input type="text" id="usuario-search-input" placeholder="Buscar por nome ou e-mail" value="${searchTerm.replace(/"/g,'&quot;')}">
      </div>
    </div>
    <div id="usuarios-table">${renderUsuariosTable()}</div>
  </div>
  </div>`;
}

function renderUsuariosTable(){
  if(STATE.usuariosLoading){
    return emptyState('Carregando...', 'Buscando usuários cadastrados.');
  }
  if(!STATE.usuarios.length){
    return emptyState('Nenhum usuário cadastrado', 'Clique em "Novo usuário" para dar o primeiro acesso.');
  }
  let items = [...STATE.usuarios];
  if(searchTerm.trim()){
    const q = searchTerm.trim().toLowerCase();
    items = items.filter(u => (u.nome||'').toLowerCase().includes(q) || (u.email||'').toLowerCase().includes(q));
  }
  if(items.length===0) return emptyState('Nenhum usuário encontrado', 'Tente buscar por outro nome ou e-mail.');
  const rows = items.map(u=>{
    const color = avatarColor(u.id);
    const voceMesmo = LOGGED_USER && u.id === LOGGED_USER.id;
    return `
    <tr>
      <td>
        <div style="display:flex;align-items:center;gap:10px">
          <div class="team-avatar" style="width:32px;height:32px;font-size:12.5px;background:${color}">${initials(u.nome)}</div>
          <div>
            <strong style="display:block">${u.nome}${voceMesmo ? ' <span style="color:var(--slate);font-weight:500">(você)</span>' : ''}</strong>
            <span style="font-size:12.5px;color:var(--slate)">${u.email||''}</span>
          </div>
        </div>
      </td>
      <td><span class="pill ${u.role==='admin'?'ativo':''}">${u.role==='admin'?'Administrador':'Membro'}</span></td>
      <td>${fmtDate((u.created_at||'').slice(0,10))}</td>
      <td>
        <div class="row-actions">
          <button class="icon-btn" data-edit-usuario="${u.id}" title="Editar">${ICONS.edit}</button>
          ${voceMesmo ? '' : `<button class="icon-btn danger" data-del-usuario="${u.id}" data-nome="${(u.nome||'').replace(/"/g,'&quot;')}" title="Excluir acesso">${ICONS.trash}</button>`}
        </div>
      </td>
    </tr>`;
  }).join('');
  return `
  <div class="table-wrap"><table>
    <thead><tr><th>Nome</th><th>Papel</th><th>Cadastrado em</th><th></th></tr></thead>
    <tbody>${rows}</tbody>
  </table></div>`;
}

async function carregarUsuarios(){
  if(!window.sb) return;
  STATE.usuariosLoading = true;
  const { data, error } = await window.sb
    .from('profiles')
    .select('id, nome, email, role, created_at')
    .order('created_at', { ascending:false });
  STATE.usuariosLoading = false;
  if(error){ toast('Não foi possível carregar os usuários.'); return; }
  STATE.usuarios = data || [];
  if(currentModule==='usuarios'){
    const el = document.getElementById('usuarios-table');
    if(el) el.innerHTML = renderUsuariosTable();
    bindUsuariosRowEvents();
  }
}

function attachUsuariosEvents(){
  const newBtn = document.getElementById('usuario-new-btn');
  if(newBtn) newBtn.onclick = openUsuarioModal;
  const searchInput = document.getElementById('usuario-search-input');
  if(searchInput) searchInput.oninput = (e) => {
    searchTerm = e.target.value;
    const el = document.getElementById('usuarios-table');
    if(el) el.innerHTML = renderUsuariosTable();
    bindUsuariosRowEvents();
  };
  bindUsuariosRowEvents();
}

function bindUsuariosRowEvents(){
  document.querySelectorAll('[data-del-usuario]').forEach(btn=>{
    btn.onclick = () => excluirUsuario(btn.getAttribute('data-del-usuario'), btn.getAttribute('data-nome'));
  });
  document.querySelectorAll('[data-edit-usuario]').forEach(btn=>{
    btn.onclick = () => {
      const u = STATE.usuarios.find(x=>x.id===btn.getAttribute('data-edit-usuario'));
      if(u) openEditarUsuarioModal(u);
    };
  });
}

async function excluirUsuario(id, nome){
  if(!confirm(`Excluir o acesso de "${nome}"? A pessoa não vai mais conseguir entrar no painel.`)) return;

  const { data, error } = await window.sb.functions.invoke('admin-create-user', {
    body: { acao: 'excluir', id },
  });

  if(error || (data && data.error)){
    toast((data && data.error) || 'Não foi possível excluir o usuário.');
    return;
  }

  toast('Usuário excluído.');
  carregarUsuarios();
}

function openEditarUsuarioModal(u){
  document.getElementById('modal-title').textContent = 'Editar usuário';
  document.getElementById('modal-foot').innerHTML = `<button class="btn ghost" id="modal-cancel" type="button">Cancelar</button><button class="btn" id="modal-save" type="submit" form="modal-body">Salvar</button>`;
  document.getElementById('modal-cancel').addEventListener('click', closeModal);
  const modalEl = document.querySelector('.modal');
  if(modalEl) modalEl.classList.remove('modal-lg');

  document.getElementById('modal-body').innerHTML = `
    <div class="field">
      <label>Nome completo *</label>
      <input id="f_usr_nome" name="nome" autocomplete="name" type="text" value="${(u.nome||'').replace(/"/g,'&quot;')}">
    </div>
    <div class="field">
      <label>E-mail de acesso</label>
      <input type="email" value="${(u.email||'').replace(/"/g,'&quot;')}" disabled style="opacity:.6">
    </div>
    <div class="field">
      <label>Nova senha</label>
      <input id="f_usr_senha" name="new-password" autocomplete="new-password" type="text" placeholder="Deixe em branco para manter a senha atual">
    </div>
    <div class="field">
      <label>Papel</label>
      <select id="f_usr_role" name="role">
        <option value="user" ${u.role!=='admin'?'selected':''}>Membro</option>
        <option value="admin" ${u.role==='admin'?'selected':''}>Administrador</option>
      </select>
    </div>
    <div class="field" style="font-size:12.5px;color:var(--slate)">
      O e-mail de acesso não pode ser alterado por aqui.
    </div>
  `;
  document.getElementById('overlay').classList.add('open');
  document.getElementById('modal-save').onclick = () => salvarEdicaoUsuario(u.id);
}

async function salvarEdicaoUsuario(id){
  const nome = document.getElementById('f_usr_nome').value.trim();
  const novaSenha = document.getElementById('f_usr_senha').value;
  const role = document.getElementById('f_usr_role').value;

  if(!nome){ toast('Preencha o nome.'); return; }
  if(novaSenha && novaSenha.length < 6){ toast('A nova senha precisa ter pelo menos 6 caracteres.'); return; }

  const saveBtn = document.getElementById('modal-save');
  saveBtn.disabled = true; saveBtn.textContent = 'Salvando...';

  const { data, error } = await window.sb.functions.invoke('admin-create-user', {
    body: { acao: 'editar', id, nome, role, novaSenha: novaSenha || undefined },
  });

  saveBtn.disabled = false; saveBtn.textContent = 'Salvar';

  if(error || (data && data.error)){
    toast((data && data.error) || 'Não foi possível salvar as alterações.');
    return;
  }

  toast('Usuário atualizado.');
  closeModal();
  carregarUsuarios();
}

function openUsuarioModal(){
  document.getElementById('modal-title').textContent = 'Novo usuário';
  document.getElementById('modal-foot').innerHTML = `<button class="btn ghost" id="modal-cancel" type="button">Cancelar</button><button class="btn" id="modal-save" type="submit" form="modal-body">Salvar</button>`;
  document.getElementById('modal-cancel').addEventListener('click', closeModal);
  const modalEl = document.querySelector('.modal');
  if(modalEl) modalEl.classList.remove('modal-lg');

  document.getElementById('modal-body').innerHTML = `
    <div class="field">
      <label>Nome completo *</label>
      <input id="f_usr_nome" name="nome" autocomplete="name" type="text" placeholder="Nome da pessoa">
    </div>
    <div class="field">
      <label>E-mail de acesso *</label>
      <input id="f_usr_email" name="email" autocomplete="username" type="email" placeholder="pessoa@email.com">
    </div>
    <div class="field">
      <label>Senha temporária *</label>
      <input id="f_usr_senha" name="new-password" autocomplete="new-password" type="text" placeholder="Mínimo 6 caracteres">
    </div>
    <div class="field">
      <label>Papel</label>
      <select id="f_usr_role" name="role">
        <option value="user">Membro</option>
        <option value="admin">Administrador</option>
      </select>
    </div>
    <div class="field" style="font-size:12.5px;color:var(--slate)">
      A pessoa poderá trocar essa senha depois de entrar. Compartilhe o acesso por um canal seguro.
    </div>
  `;
  document.getElementById('overlay').classList.add('open');
  document.getElementById('modal-save').onclick = salvarNovoUsuario;
}

async function salvarNovoUsuario(){
  const nome = document.getElementById('f_usr_nome').value.trim();
  const email = document.getElementById('f_usr_email').value.trim();
  const senha = document.getElementById('f_usr_senha').value;
  const role = document.getElementById('f_usr_role').value;

  if(!nome || !email || !senha){ toast('Preencha nome, e-mail e senha.'); return; }
  if(senha.length < 6){ toast('A senha precisa ter pelo menos 6 caracteres.'); return; }

  const saveBtn = document.getElementById('modal-save');
  saveBtn.disabled = true; saveBtn.textContent = 'Salvando...';

  const { data, error } = await window.sb.functions.invoke('admin-create-user', {
    body: { nome, email, senha, role },
  });

  saveBtn.disabled = false; saveBtn.textContent = 'Salvar';

  if(error || (data && data.error)){
    toast((data && data.error) || 'Não foi possível criar o usuário.');
    return;
  }

  toast('Usuário criado com sucesso.');
  closeModal();
  carregarUsuarios();
}

function openDocumentoModal(id){
  const editing = !!id;
  const current = editing ? findItem('documentos', id) : null;
  let pendingFile = null; // preenchido quando o usuário escolhe um novo arquivo

  document.getElementById('modal-title').textContent = editing ? 'Editar documento' : 'Novo documento';
  document.getElementById('modal-foot').innerHTML = `<button class="btn ghost" id="modal-cancel" type="button">Cancelar</button><button class="btn" id="modal-save" type="submit" form="modal-body">Salvar</button>`;
  document.getElementById('modal-cancel').addEventListener('click', closeModal);
  const modalEl = document.querySelector('.modal');
  if(modalEl) modalEl.classList.remove('modal-lg');

  const clienteOpts = [['', 'Nenhum'], ...clienteOptions()];
  const respOpts = equipeOptions();
  const nomeAtual = current ? String(current.nome||'').replace(/"/g,'&quot;') : '';
  const arquivoAtualLabel = current && current.arquivoNome ? `${current.arquivoNome}${current.arquivoTamanho ? ' • '+current.arquivoTamanho : ''}` : 'Nenhum arquivo selecionado';

  document.getElementById('modal-body').innerHTML = `
    <div class="field">
      <label>Nome do documento *</label>
      <input id="f_doc_nome" name="doc_nome" autocomplete="on" type="text" placeholder="Ex: Contrato anual — Grupo Horizonte" value="${nomeAtual}">
    </div>
    <div class="row-2">
      <div class="field">
        <label>Categoria</label>
        <select id="f_doc_categoria" name="doc_categoria">${DOC_CATEGORIA_OPTIONS.map(([v,l])=>`<option value="${v}" ${current&&current.categoria===v?'selected':''}>${l}</option>`).join('')}</select>
      </div>
      <div class="field">
        <label>Status</label>
        <select id="f_doc_status" name="doc_status">${DOC_STATUS_OPTIONS.map(([v,l])=>`<option value="${v}" ${current&&current.status===v?'selected':''}>${l}</option>`).join('')}</select>
      </div>
    </div>
    <div class="row-2">
      <div class="field">
        <label>Data do documento</label>
        <input id="f_doc_data" name="doc_data" type="date" value="${current&&current.data ? current.data : todayISO()}">
      </div>
      <div class="field">
        <label>Cliente vinculado</label>
        <select id="f_doc_cliente" name="doc_cliente">${clienteOpts.map(([v,l])=>`<option value="${v}" ${current&&current.clienteId===v?'selected':''}>${l}</option>`).join('')}</select>
      </div>
    </div>
    <div class="field">
      <label>Responsável</label>
      <select id="f_doc_responsavel" name="doc_responsavel">${respOpts.map(([v,l])=>`<option value="${v}" ${current&&current.responsavelId===v?'selected':''}>${l}</option>`).join('')}</select>
    </div>
    <div class="field">
      <label>Arquivo</label>
      <div class="file-input-wrap">
        <input type="file" id="f_doc_arquivo">
        <label class="file-input-label" for="f_doc_arquivo">${ICONS.upload}<span>Escolher arquivo</span></label>
        <div class="file-selected-name" id="f_doc_arquivo_nome">${arquivoAtualLabel}</div>
      </div>
    </div>
  `;

  document.getElementById('f_doc_arquivo').addEventListener('change', (e)=>{
    const file = e.target.files[0];
    const nomeEl = document.getElementById('f_doc_arquivo_nome');
    if(!file) return;
    if(file.size > DOC_MAX_SIZE){
      toast('Arquivo muito grande (máx. 3 MB). Selecione outro arquivo.');
      e.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      pendingFile = {
        arquivoNome: file.name,
        arquivoTipo: fileExtension(file.name),
        arquivoTamanho: formatBytes(file.size),
        arquivoDataUrl: reader.result,
      };
      nomeEl.textContent = `${file.name} • ${formatBytes(file.size)}`;
    };
    reader.readAsDataURL(file);
  });

  document.getElementById('overlay').classList.add('open');
  document.getElementById('modal-save').onclick = () => {
    const nome = document.getElementById('f_doc_nome').value.trim();
    if(!nome){ toast('Informe o nome do documento.'); return; }
    const clienteId = document.getElementById('f_doc_cliente').value;

    const obj = editing ? { ...current } : { id: uid() };
    obj.nome = nome;
    obj.categoria = document.getElementById('f_doc_categoria').value;
    obj.status = document.getElementById('f_doc_status').value;
    obj.data = document.getElementById('f_doc_data').value || todayISO();
    obj.clienteId = clienteId;
    obj.clienteNome = clienteId ? clienteNome(clienteId) : '';
    obj.responsavelId = document.getElementById('f_doc_responsavel').value;
    obj.atualizadoEm = todayISO();
    if(pendingFile){
      obj.arquivoNome = pendingFile.arquivoNome;
      obj.arquivoTipo = pendingFile.arquivoTipo;
      obj.arquivoTamanho = pendingFile.arquivoTamanho;
      obj.arquivoDataUrl = pendingFile.arquivoDataUrl;
    }

    if(editing){
      const idx = STATE.documentos.findIndex(x=>x.id===id);
      if(idx>-1) STATE.documentos[idx] = obj;
      toast('Documento atualizado com sucesso.');
    } else {
      STATE.documentos.push(obj);
      toast('Documento salvo com sucesso.');
    }
    persist('documentos');
    closeModal();
    renderContent();
  };
}

/* ============ EVENTOS DE CONTEÚDO ============ */
function attachContentEvents(){
  document.querySelectorAll('[data-del]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const mod = btn.dataset.del, id = btn.dataset.id;
      if(mod==='atividades'){ excluirAtividade(id); return; }
      if(mod==='servicos') desvincularAtividadeDoServico(id);
      STATE[mod] = STATE[mod].filter(x=>x.id!==id);
      persistDelete(mod, id);
      toast('Registro removido.');
      renderContent();
    });
  });
  document.querySelectorAll('[data-edit]').forEach(btn=>{
    btn.addEventListener('click', ()=> {
      if(btn.dataset.edit==='documentos') openDocumentoModal(btn.dataset.id);
      else if(btn.dataset.edit==='atividades') openAtividadeModal(btn.dataset.id);
      else openModal(btn.dataset.edit, btn.dataset.id);
    });
  });
  document.querySelectorAll('[data-download]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item = findItem(btn.dataset.download, btn.dataset.id);
      if(!item) return;
      if(!item.arquivoDataUrl){ toast('Nenhum arquivo anexado a este documento.'); return; }
      const a = document.createElement('a');
      a.href = item.arquivoDataUrl;
      a.download = item.arquivoNome || item.nome;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  });
  document.querySelectorAll('[data-criar-atividade]').forEach(btn=>{
    btn.addEventListener('click', e=>{ e.stopPropagation(); criarAtividadeDoCliente(btn.dataset.criarAtividade); });
  });
  document.querySelectorAll('[data-view]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if(btn.dataset.view==='clientes') openClienteDrawer(btn.dataset.id);
      else openViewModal(btn.dataset.view, btn.dataset.id);
    });
  });
  document.querySelectorAll('[data-fin-lista]').forEach(b=>{
    b.onclick = () => { finLista = b.dataset.finLista; renderContent(); };
  });
  const finNewReceber = document.getElementById('fin-new-receber');
  if(finNewReceber) finNewReceber.onclick = () => openModal('financeiro', null, { tipo:'receita' });
  const finNewPagar = document.getElementById('fin-new-pagar');
  if(finNewPagar) finNewPagar.onclick = () => openModal('financeiro', null, { tipo:'despesa' });
  const finAdvToggle = document.getElementById('fin-adv-toggle');
  if(finAdvToggle) finAdvToggle.onclick = () => { finAdvOpen = !finAdvOpen; renderContent(); };
  const FA_KEYS = { emDe:'fa_emDe', emAte:'fa_emAte', vcDe:'fa_vcDe', vcAte:'fa_vcAte', bxDe:'fa_bxDe', bxAte:'fa_bxAte', competencia:'fa_competencia',
    plano:'fa_plano', identificador:'fa_identificador', documento:'fa_documento', situacao:'fa_situacao', descricao:'fa_descricao',
    pessoa:'fa_pessoa', formaPrevista:'fa_formaPrevista', formaBaixa:'fa_formaBaixa' };
  const finAdvApply = document.getElementById('fin-adv-apply');
  if(finAdvApply) finAdvApply.onclick = () => {
    const novo = {};
    for(const [k, id] of Object.entries(FA_KEYS)) novo[k] = ((document.getElementById(id)||{}).value || '').trim();
    // período invertido (início depois do fim): corrige sozinho
    [['emDe','emAte'],['vcDe','vcAte'],['bxDe','bxAte']].forEach(([i,f]) => { if(novo[i] && novo[f] && novo[i] > novo[f]) [novo[i], novo[f]] = [novo[f], novo[i]]; });
    finAdv[finLista] = novo;
    renderContent();
  };
  document.querySelectorAll('.fin-adv input').forEach(i => i.addEventListener('keydown', e => { if(e.key==='Enter'){ e.preventDefault(); if(finAdvApply) finAdvApply.click(); } }));
  const finAdvClear = document.getElementById('fin-adv-clear');
  if(finAdvClear) finAdvClear.onclick = () => { finAdv[finLista] = {}; renderContent(); };
  const finAdvBack = document.getElementById('fin-adv-back');
  if(finAdvBack) finAdvBack.onclick = () => { finAdvOpen = false; renderContent(); }; // fecha sem aplicar o que foi digitado
  document.querySelectorAll('[data-fin-det]').forEach(b => b.addEventListener('click', () => openFinDetalhes(b.dataset.finDet, !!b.dataset.grupo)));
  document.querySelectorAll('[data-fin-hist]').forEach(b => b.addEventListener('click', () => openFinHistorico(b.dataset.finHist, !!b.dataset.grupo)));
  document.querySelectorAll('[data-fin-grupo]').forEach(b => b.addEventListener('click', () => {
    const g = b.dataset.finGrupo;
    if(finGruposAbertos.has(g)) finGruposAbertos.delete(g); else finGruposAbertos.add(g);
    renderContent();
  }));
  const finMonthSelect = document.getElementById('fin-month-select');
  if(finMonthSelect) finMonthSelect.onchange = (e)=>{
    const [y,m] = e.target.value.split('-').map(Number);
    finMes = { y, m };
    renderContent();
  };
  const dashMonthSelect = document.getElementById('dash-month-select');
  if(dashMonthSelect) dashMonthSelect.onchange = (e)=>{
    const [y,m] = e.target.value.split('-').map(Number);
    dashMes = { y, m };
    dashSelectedDay = null;
    renderContent();
  };
  document.querySelectorAll('[data-pay]').forEach(btn=>{
    btn.addEventListener('click', ()=>{ const it = findItem('financeiro', btn.dataset.id); if(it && it.tipo==='despesa') openPagarModal(it.id); else openReceberModal(btn.dataset.id); });
  });
  document.querySelectorAll('[data-goto]').forEach(a=>{
    a.addEventListener('click', ()=>{ currentModule = a.dataset.goto; searchTerm=''; filterValue='todos'; render(); });
  });
  document.querySelectorAll('[data-team-view]').forEach(card=>{
    card.addEventListener('click', (e)=>{
      if(e.target.closest('[data-edit]') || e.target.closest('[data-del]')) return;
      openEquipeProfile(card.dataset.teamView);
    });
  });
  const addCompromissoBtn = document.getElementById('dash-add-compromisso');
  if(addCompromissoBtn) addCompromissoBtn.onclick = () => openModal('compromissos', null, { data: todayISO() });
}

/* ============ MODAL / FORMULÁRIOS ============ */
function clienteOptions(){ return STATE.clientes.map(c=>[c.id, c.nome]); }
function equipeOptions(){ return [['', 'Sem responsável'], ...STATE.equipe.map(c=>[c.id, c.nome])]; }

const FORM_FIELDS = {
  clientes: () => [
    {k:'nome', label:'Nome do cliente/empresa', type:'text', required:true, placeholder:'Ex: Grupo Horizonte'},
    {k:'cnpj', label:'CNPJ/CPF', type:'text', placeholder:'00.000.000/0000-00'},
    {k:'contatoNome', label:'Contato principal', type:'text', placeholder:'Nome do contato'},
    {k:'telefone', label:'Telefone', type:'text', placeholder:'(00) 99999-9999'},
    {k:'email', label:'E-mail', type:'text', placeholder:'email@exemplo.com'},
    {k:'cidade', label:'Localização', type:'text', placeholder:'Cidade, UF'},
    {k:'status', label:'Status', type:'select', options:[['ativo','Ativo'],['implantacao','Implantação'],['pendente','Pendente']]},
    {k:'responsavelId', label:'Responsável interno', type:'select', options: equipeOptions()},
    {k:'clienteDesde', label:'Cliente desde', type:'date'},
    {k:'receitaMensal', label:'Receita mensal (R$)', type:'number'},
    {k:'observacoes', label:'Observações', type:'textarea'},
  ],
  servicos: () => [
    {k:'clienteNome', label:'Cliente (opcional)', type:'text', list:'dl-clientes', placeholder:'Digite o nome do cliente'},
    {k:'titulo', label:'Título', type:'text', required:true, placeholder:'Ex: Desenvolvimento de Site'},
    {k:'descricao', label:'Descrição', type:'textarea'},
    {k:'valor', label:'Valor (R$)', type:'number'},
    {k:'recorrente', label:'Serviço recorrente', type:'select', options:[['nao','Não'],['sim','Sim — gerar cobrança todo mês']]},
    {k:'duracaoRecorrencia', label:'Duração da recorrência', type:'select', options:[['indeterminado','Mensal, sem prazo definido'],['3','Por 3 meses'],['6','Por 6 meses'],['12','Por 12 meses']]},
    {k:'status', label:'Status', type:'select', options:[['aguardando','Aguardando'],['andamento','Em Andamento'],['concluido','Concluído'],['atrasado','Atrasado']]},
    {k:'dataInicio', label:'Data de Início', type:'date'},
    {k:'prazoEntrega', label:'Prazo de Entrega', type:'date'},
    {k:'responsavelId', label:'Quem vai fazer', type:'select', options: equipeOptions()},
  ],
  financeiro: () => {
    const pagar = finFormTipo === 'despesa';
    return [
      ...(pagar
        ? [{k:'fornecedorId', label:'Fornecedor', type:'select', required:true, options:[['','Selecione o fornecedor'], ...fornecedorOptions()]}]
        : [{k:'clienteId', label:'Cliente', type:'select', required:true, options: clienteOptions()}]),
      {k:'planoContas', label:'Plano de contas', type:'select', options:[['','Selecione'], ...planoContasOptions(pagar)]},
      {k:'descricao', label:'Descrição', type:'text', required:true, placeholder: pagar ? 'Ex: Impressão de material – Projeto X' : 'Ex: Parcela 1 – Projeto X'},
      {k:'numeroDocumento', label:'Nº do documento', type:'text', placeholder:'Ex: NF 1234'},
      {k:'identificador', label:'Identificador', type:'text', placeholder:'Código interno, se houver'},
      {k:'valor', label:'Valor total (R$)', type:'number', required:true},
      {k:'dataEmissao', label:'Data de emissão', type:'date'},
      {k:'vencimento', label:'Data de vencimento', type:'date', required:true},
      {k:'competencia', label:'Competência (mês/ano)', type:'month'},
      {k:'formaRecebimento', label: pagar ? 'Forma prevista de pagamento' : 'Forma prevista de recebimento', type:'select', options:[['','Ainda não definida'], ...FORMA_RECEBIMENTO_OPTIONS]},
      {k:'ocorrencia', label:'Ocorrência', type:'select', options:[['unica','Única'],['parcelada','Parcelada'],['recorrente','Recorrente']]},
      {k:'qtdParcelas', label:'Nº de parcelas', type:'number'},
    ];
  },
  equipe: () => [
    {k:'nome', label:'Nome completo', type:'text', required:true, placeholder:'Nome completo'},
    {k:'cargo', label:'Cargo/Função', type:'text', placeholder:'Ex: Analista de processos'},
    {k:'setor', label:'Setor', type:'text', placeholder:'Ex: Operações'},
    {k:'email', label:'E-mail', type:'text', placeholder:'email@atej.com.br'},
    {k:'telefone', label:'Telefone', type:'text', placeholder:'(00) 99999-9999'},
    {k:'dataEntrada', label:'Na empresa desde', type:'date'},
    {k:'status', label:'Status', type:'select', options:[['ativo','Ativo'],['ferias','Férias'],['inativo','Inativo']]},
    {k:'observacoes', label:'Observações', type:'textarea'},
  ],
  compromissos: () => [
    {k:'titulo', label:'Título', type:'text', required:true, placeholder:'Ex: Reunião de acompanhamento'},
    {k:'data', label:'Data', type:'date', required:true},
    {k:'hora', label:'Horário', type:'time'},
    {k:'clienteId', label:'Cliente (opcional)', type:'select', options:[['','Nenhum'], ...clienteOptions()]},
    {k:'tipo', label:'Tipo', type:'select', options:[['reuniao','Reunião'],['entrega','Entrega'],['treinamento','Treinamento'],['outro','Outro']]},
    {k:'observacoes', label:'Observações', type:'textarea'},
  ],
  demandas: () => [
    {k:'titulo', label:'Título da demanda', type:'text', required:true, placeholder:'Ex: Preciso de material para o post de amanhã'},
    {k:'descricao', label:'Descrição', type:'textarea', placeholder:'Detalhe o que precisa ser feito'},
    {k:'solicitanteId', label:'Solicitante', type:'select', options: equipeOptions()},
    {k:'responsavelId', label:'Responsável (opcional)', type:'select', options: equipeOptions()},
    {k:'prioridade', label:'Prioridade', type:'select', options:[['baixa','Baixa'],['media','Média'],['alta','Alta'],['urgente','Urgente']]},
    {k:'status', label:'Status', type:'select', options:[['aguardando','Aguardando'],['andamento','Em Andamento'],['atrasado','Atrasado'],['concluido','Concluído']]},
    {k:'prazo', label:'Prazo (opcional)', type:'date'},
    {k:'kanbanVinculo', label:'Kanban', type:'select', options: demandaKanbanOptions()},
  ],
};
// Opções do campo "Kanban" da demanda: sem Kanban, virar card, ou vincular a uma atividade que
// ainda não tem demanda (cada atividade só pode ter uma demanda).
function demandaKanbanOptions(){
  const usadas = new Set(STATE.demandas.filter(d=>d.id!==modalEditId && d.kanbanVinculo && d.kanbanVinculo!=='card').map(d=>d.kanbanVinculo));
  return [
    ['', 'Não mostrar no Kanban'],
    ['card', 'Criar card no Kanban (esta demanda vira o card)'],
    ...STATE.atividades.filter(a=>!usadas.has(a.id)).map(a=>[a.id, 'Vincular à atividade: '+escHTML(a.titulo)]),
  ];
}
const CLIENTE_FORM_SECTIONS = [
  { title:'Dados da empresa', icon:ICONS.people, rows:[['nome'],['cnpj','cidade']] },
  { title:'Contato', icon:ICONS.mail, rows:[['contatoNome','telefone'],['email']] },
  { title:'Relacionamento comercial', icon:ICONS.dollar, rows:[['status','responsavelId'],['clienteDesde','receitaMensal']] },
  { title:'Próxima ação', icon:ICONS.clock, custom:'proxima-acao' },
  { title:'Observações', icon:ICONS.doc, rows:[['observacoes']] },
];
const FORM_LAYOUT = {
  clientes: [['nome','cnpj'],['contatoNome','telefone'],['email','cidade'],['status','responsavelId'],['clienteDesde','receitaMensal'],['observacoes']],
  servicos: [['clienteId'],['titulo'],['descricao'],['valor','recorrente'],['duracaoRecorrencia'],['status'],['dataInicio','prazoEntrega'],['responsavelId']],
  financeiro: [['clienteId'],['fornecedorId'],['planoContas'],['descricao'],['numeroDocumento','identificador'],['valor','vencimento'],['dataEmissao','competencia'],['formaRecebimento'],['ocorrencia','qtdParcelas']],
  equipe: [['nome'],['cargo','setor'],['email','telefone'],['dataEntrada','status'],['observacoes']],
  compromissos: [['titulo'],['data','hora'],['clienteId','tipo'],['observacoes']],
  demandas: [['titulo'],['descricao'],['solicitanteId','responsavelId'],['prioridade','status'],['prazo'],['kanbanVinculo']],
};
const MODAL_TITLES_NEW = { clientes:'Novo cliente', servicos:'Novo serviço', financeiro:'Novo lançamento', equipe:'Novo colaborador', compromissos:'Novo compromisso', demandas:'Nova demanda' };
const MODAL_TITLES_EDIT = { clientes:'Editar cliente', servicos:'Editar serviço', financeiro:'Editar lançamento', equipe:'Editar colaborador', compromissos:'Editar compromisso', demandas:'Editar demanda' };
const VIEW_TITLES = { clientes:'Detalhes do cliente' };

/* Mapeia cada campo para o token padrão de autocomplete do navegador (quando existe um
   equivalente conhecido); os demais caem no "on" genérico, e textos longos ficam "off". */
const AUTOCOMPLETE_MAP = {
  nome:'name', contatoNome:'name', telefone:'tel', email:'email',
  cidade:'address-level2', cargo:'organization-title', setor:'organization',
};
function autocompleteFor(f){
  if(f.type==='textarea') return 'off';
  return AUTOCOMPLETE_MAP[f.k] || 'on';
}

function openModal(mod, id, preset){
  const editing = !!id;
  modalEditId = id || null;
  const current = editing ? findItem(mod, id) : (preset || null);
  if(mod==='financeiro') finFormTipo = (current && current.tipo==='despesa') ? 'despesa' : 'receita';
  let modalTitle = editing ? MODAL_TITLES_EDIT[mod] : MODAL_TITLES_NEW[mod];
  if(mod==='financeiro') modalTitle = (editing ? 'Editar ' : 'Nova ') + (finFormTipo==='despesa' ? 'conta a pagar' : 'conta a receber');
  document.getElementById('modal-title').textContent = modalTitle;
  document.getElementById('modal-foot').innerHTML = `<button class="btn ghost" id="modal-cancel" type="button">Cancelar</button><button class="btn" id="modal-save" type="submit" form="modal-body">Salvar</button>`;
  document.getElementById('modal-cancel').addEventListener('click', closeModal);

  const fields = FORM_FIELDS[mod]();
  const body = document.getElementById('modal-body');

  if(mod==='financeiro' && finFormTipo!=='despesa' && fields.find(f=>f.k==='clienteId').options.length===0){
    body.innerHTML = `<div class="empty" style="padding:10px 0">Cadastre um cliente antes de criar uma conta a receber.</div>`;
    document.getElementById('modal-save').onclick = closeModal;
    document.getElementById('overlay').classList.add('open');
    return;
  }

  const modalEl = document.querySelector('.modal');
  if(modalEl) modalEl.classList.toggle('modal-lg', mod==='clientes');

  const byKey = {}; fields.forEach(f=>byKey[f.k]=f);
  const renderField = (f) => {
    const id = 'f_'+f.k;
    let existing = current ? current[f.k] : undefined;
    if(mod==='servicos' && f.k==='clienteNome' && current) existing = servicoCliente(current)==='Sem cliente' ? '' : servicoCliente(current);
    let control;
    if(f.type==='select'){
      control = `<select id="${id}" name="${f.k}">${f.options.map(([v,l])=>`<option value="${v}" ${existing===v?'selected':''}>${l}</option>`).join('')}</select>`;
    } else if(f.type==='textarea'){
      const ph = f.k==='observacoes' ? 'Informações adicionais...' : 'Detalhes do serviço...';
      control = `<textarea placeholder="${ph}" id="${id}" name="${f.k}" autocomplete="off">${existing!=null?existing:''}</textarea>`;
    } else {
      let val = existing!=null ? existing : '';
      const ph = f.placeholder || (f.type==='number' ? '0.00' : '');
      control = `<input id="${id}" name="${f.k}" autocomplete="${f.list ? 'off' : autocompleteFor(f)}" type="${f.type}" value="${escHTML(val)}" placeholder="${ph}" ${f.list ? `list="${f.list}"` : ''} ${f.type==='number'?'step="0.01"':''}>${f.list==='dl-clientes' ? `<datalist id="dl-clientes">${STATE.clientes.map(c=>`<option value="${escHTML(c.nome)}"></option>`).join('')}</datalist>` : ''}`;
    }
    return `<div class="field"><label>${f.label}${f.required?' *':''}</label>${control}</div>`;
  };

  if(mod==='clientes'){
    clienteFotoFile = null;
    const podeEditarFoto = LOGGED_USER.role === 'admin';
    const nomeAtual = current ? current.nome : '';
    const fotoAtual = current ? current.foto_url : '';
    const avColor = avatarColor(current ? current.id : 'novo-cliente');
    const headerHTML = `
    <div class="form-header">
      <div class="form-header-icon" id="cliente-form-avatar" style="overflow:hidden;${podeEditarFoto?'cursor:pointer;':''}${fotoAtual?'':(nomeAtual?`background:${avColor};color:#fff;`:'')}" title="${podeEditarFoto?'Clique para escolher uma foto':''}">${fotoAtual ? `<img src="${fotoAtual}" style="width:100%;height:100%;object-fit:cover">` : (nomeAtual ? initials(nomeAtual) : ICONS.people)}</div>
      <div class="form-header-text">
        <b>${editing ? 'Editar cadastro' : 'Novo cliente'}</b>
        <span>${podeEditarFoto ? 'Clique na foto para adicionar ou trocar a imagem' : 'Preencha os dados abaixo para manter o cadastro completo'}</span>
      </div>
      ${podeEditarFoto ? `<input type="file" id="f_foto_cliente" accept="image/*" style="display:none">` : ''}
    </div>`;
    const sectionsHTML = CLIENTE_FORM_SECTIONS.map(sec => `
    <div class="form-section">
      <div class="form-section-title">${sec.icon}<span>${sec.title}</span></div>
      ${sec.custom==='proxima-acao' ? proximaAcaoFormHTML(current) : sec.rows.map(group=>{
        const cells = group.map(k=>renderField(byKey[k])).join('');
        return group.length>1 ? `<div class="row-2">${cells}</div>` : cells;
      }).join('')}
    </div>`).join('');
    body.innerHTML = headerHTML + sectionsHTML;
    const btnCriarAtv = document.getElementById('cliente-form-criar-atividade');
    if(btnCriarAtv && editing){
      let sujo = false;
      body.addEventListener('input', ()=>{ sujo = true; });
      btnCriarAtv.addEventListener('click', ()=>{
        if(sujo && !confirm('Há alterações não salvas neste cadastro. Se continuar, elas serão descartadas. Criar a atividade mesmo assim?')) return;
        criarAtividadeDoCliente(id);
      });
    }
    const nomeInput = document.getElementById('f_nome');
    const avatarEl = document.getElementById('cliente-form-avatar');
    if(nomeInput && avatarEl){
      nomeInput.addEventListener('input', ()=>{
        if(clienteFotoFile) return; // já escolheu uma foto — não sobrescreve com as iniciais
        const v = nomeInput.value.trim();
        if(v){ const c = avatarColor(current ? current.id : v); avatarEl.style.background = c; avatarEl.style.color = '#fff'; avatarEl.textContent = initials(v); }
        else { avatarEl.style.background = ''; avatarEl.style.color = ''; avatarEl.innerHTML = ICONS.people; }
      });
    }
    if(podeEditarFoto && avatarEl){
      const fileInput = document.getElementById('f_foto_cliente');
      avatarEl.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if(!file) return;
        if(file.size > 3*1024*1024){ toast('Escolha uma imagem de até 3MB.'); fileInput.value=''; return; }
        clienteFotoFile = file;
        const reader = new FileReader();
        reader.onload = () => {
          avatarEl.style.background = '';
          avatarEl.style.color = '';
          avatarEl.innerHTML = `<img src="${reader.result}" style="width:100%;height:100%;object-fit:cover">`;
        };
        reader.readAsDataURL(file);
      });
    }
    document.getElementById('overlay').classList.add('open');
    document.getElementById('modal-save').onclick = () => saveForm(mod, editing ? id : null);
    return;
  }

  if(mod==='equipe'){
    equipeFotoFile = null;
    const podeEditarFoto = LOGGED_USER.role === 'admin';
    if(!editing && !podeEditarFoto){
      toast('Somente administradores podem cadastrar novos colaboradores.');
      return;
    }
    const fotoAtual = current ? current.foto_url : '';
    const nomeAtual = current ? current.nome : '';
    const avColor = avatarColor(current ? current.id : 'novo-colaborador');
    const headerHTML = `
    <div class="form-header">
      <div class="form-header-icon" id="equipe-form-avatar" style="width:56px;height:56px;border-radius:50%;overflow:hidden;${podeEditarFoto?'cursor:pointer;':''}${fotoAtual?'':`background:${avColor};color:#fff;`}" title="${podeEditarFoto?'Clique para escolher uma foto':'Somente administradores podem alterar a foto'}">
        ${fotoAtual ? `<img src="${fotoAtual}" style="width:100%;height:100%;object-fit:cover">` : (nomeAtual ? initials(nomeAtual) : ICONS.people)}
      </div>
      <div class="form-header-text">
        <b>${editing ? 'Editar cadastro' : 'Novo colaborador'}</b>
        <span>${podeEditarFoto ? 'Clique na foto para adicionar ou trocar a imagem' : 'Somente administradores podem alterar a foto do colaborador'}</span>
      </div>
      ${podeEditarFoto ? `<input type="file" id="f_foto" accept="image/*" style="display:none">` : ''}
    </div>`;
    const layoutEquipe = FORM_LAYOUT.equipe;
    const sectionsHTML = layoutEquipe.map(group=>{
      const cells = group.map(k=>renderField(byKey[k])).join('');
      return group.length>1 ? `<div class="row-2">${cells}</div>` : cells;
    }).join('');
    const avisoRestricaoHTML = (!podeEditarFoto && editing) ? `<div class="field" style="font-size:12.5px;color:var(--slate)">Somente um administrador pode alterar os dados deste colaborador.</div>` : '';
    body.innerHTML = headerHTML + avisoRestricaoHTML + sectionsHTML;

    if(!podeEditarFoto){
      layoutEquipe.flat().forEach(k=>{
        const el = document.getElementById('f_'+k);
        if(el){ el.disabled = true; el.style.opacity = '.6'; el.style.cursor = 'not-allowed'; }
      });
    }

    if(podeEditarFoto){
      const fileInput = document.getElementById('f_foto');
      const avatarEl = document.getElementById('equipe-form-avatar');
      avatarEl.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if(!file) return;
        if(file.size > 3*1024*1024){ toast('Escolha uma imagem de até 3MB.'); fileInput.value=''; return; }
        equipeFotoFile = file;
        const reader = new FileReader();
        reader.onload = () => {
          avatarEl.style.background = '';
          avatarEl.style.color = '';
          avatarEl.innerHTML = `<img src="${reader.result}" style="width:100%;height:100%;object-fit:cover">`;
        };
        reader.readAsDataURL(file);
      });
    }

    document.getElementById('overlay').classList.add('open');
    document.getElementById('modal-save').onclick = () => saveForm(mod, editing ? id : null);
    return;
  }

  const layout = (FORM_LAYOUT[mod] || fields.map(f=>[f.k])).map(g=>g.filter(k=>byKey[k])).filter(g=>g.length);
  body.innerHTML = layout.map(group=>{
    const cells = group.map(k=>renderField(byKey[k])).join('');
    return group.length>1 ? `<div class="row-2">${cells}</div>` : cells;
  }).join('');
  document.getElementById('overlay').classList.add('open');
  document.getElementById('modal-save').onclick = () => saveForm(mod, editing ? id : null);

  // Serviços: "Duração da recorrência" só faz sentido (e só é usada) quando o
  // serviço é recorrente — escondida quando "Serviço recorrente" = Não, pra não
  // parecer que ela está fazendo algo que não faz.
  if(mod==='servicos'){
    const recorrenteSel = document.getElementById('f_recorrente');
    const duracaoField = document.getElementById('f_duracaoRecorrencia')?.closest('.field');
    if(recorrenteSel && duracaoField){
      const sync = () => { duracaoField.style.display = recorrenteSel.value==='sim' ? '' : 'none'; };
      recorrenteSel.addEventListener('change', sync);
      sync();
    }
  }
  if(mod==='financeiro'){ document.getElementById('modal-save').textContent = 'Salvar conta'; setupContaForm(editing, current); }
}


/* ============ CADASTRO DE CONTA (a receber / a pagar) ============ */
// Plano de contas: lista fixa por enquanto (ainda não existe tabela) — ajuste os nomes à vontade.
function planoContasOptions(pagar){
  const l = pagar
    ? ['Pessoal e encargos','Serviços de terceiros','Aluguel e condomínio','Impostos e taxas','Marketing e publicidade','Software e assinaturas','Outras despesas']
    : ['Receita de serviços','Receita recorrente','Outras receitas'];
  return l.map(x=>[x,x]);
}
function fornecedorOptions(){
  return [...STATE.fornecedores].sort((a,b)=>String(a.nome).localeCompare(String(b.nome),'pt-BR')).map(f=>[f.id, escHTML(f.nome)]);
}
// soma k meses a uma data ISO (AAAA-MM-DD), respeitando o último dia do mês
function addMesesISO(iso, k){
  const [y,m,d] = iso.split('-').map(Number);
  const dt = new Date(y, m-1+k, 1);
  const last = new Date(dt.getFullYear(), dt.getMonth()+1, 0).getDate();
  return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(Math.min(d,last)).padStart(2,'0')}`;
}

function setupContaForm(editing, current){
  const mb = document.getElementById('modal-body'); if(mb) mb.classList.remove('oc-modo-previa');
  const ocSel = document.getElementById('f_ocorrencia');
  const qtdEl = document.getElementById('f_qtdParcelas');
  const qtdField = qtdEl.closest('.field');
  const qtdLabel = qtdField.querySelector('label');
  qtdEl.step = '1'; qtdEl.min = '2'; qtdEl.placeholder = '2';
  if(editing){
    // editar mexe numa conta só; a ocorrência é definida apenas no cadastro
    ocSel.closest('.row-2').style.display = 'none';
  } else {
    contaPrevia = null;
    const row = ocSel.closest('.row-2');
    const vencEl = document.getElementById('f_vencimento');
    const valEl = document.getElementById('f_valor');
    const vencLabel = vencEl.closest('.field').querySelector('label');
    const valLabel = valEl.closest('.field').querySelector('label');
    qtdEl.step = '1'; qtdEl.min = '2';
    row.insertAdjacentHTML('afterend', `
      <div class="oc-box" id="oc-box" style="display:none">
        <div id="oc-config">
          <div class="field" id="oc-intervalo-field">
            <label>Intervalo entre os vencimentos</label>
            <select id="f_intervalo">${Object.entries(INTERVALOS).map(([k,v])=>`<option value="${k}" ${k==='mensal'?'selected':''}>${v.label}</option>`).join('')}</select>
          </div>
          <div class="oc-hint" id="oc-hint"></div>
          <button type="button" class="btn ghost" id="oc-gerar">Gerar prévia</button>
        </div>
        <div id="oc-previa-area" style="display:none">
          <div class="oc-previa-head">
            <div><b id="oc-previa-titulo"></b><span>Prévia — nada foi gravado ainda. Revise e clique em "Salvar conta".</span></div>
            <button type="button" class="btn ghost" id="oc-voltar">← Voltar ao cadastro</button>
          </div>
          <div id="oc-previa"></div>
        </div>
      </div>`);
    const box = document.getElementById('oc-box');
    const intEl = document.getElementById('f_intervalo');
    const invalidar = () => { contaPrevia = null; document.getElementById('oc-previa').innerHTML = ''; setModoPrevia(false); };
    const sync = () => {
      const v = ocSel.value;
      qtdField.style.display = v==='unica' ? 'none' : '';
      box.style.display = v==='unica' ? 'none' : '';
      document.getElementById('oc-intervalo-field').style.display = v==='parcelada' ? '' : 'none';
      qtdLabel.textContent = v==='parcelada' ? 'Quantidade de parcelas' : 'Por quantos meses';
      vencLabel.textContent = (v==='parcelada' ? 'Vencimento da 1ª parcela' : v==='recorrente' ? 'Vencimento do 1º mês' : 'Data de vencimento') + ' *';
      valLabel.textContent = (v==='recorrente' ? 'Valor de cada mês (R$)' : 'Valor total (R$)') + ' *';
      document.getElementById('oc-hint').textContent = v==='parcelada'
        ? 'A soma das parcelas deve ser igual ao valor total; diferenças de centavos vão para a última parcela.'
        : 'Cada mês gera uma conta individual, ligada à mesma série.';
      if(v!=='unica' && !qtdEl.value) qtdEl.value = v==='parcelada' ? '2' : '12';
      invalidar();
    };
    ocSel.addEventListener('change', sync);
    [qtdEl, intEl, vencEl, valEl].forEach(el => { el.addEventListener('input', invalidar); el.addEventListener('change', invalidar); });
    document.getElementById('oc-gerar').onclick = gerarPreviaConta;
    document.getElementById('oc-voltar').onclick = () => setModoPrevia(false);
    sync();
  }

  const fornSel = document.getElementById('f_fornecedorId');
  if(!fornSel) return; // conta a receber: sem fornecedor
  if(editing && current && !current.fornecedorId && current.fornecedor){
    const m = STATE.fornecedores.find(f=>normTxt(f.nome)===normTxt(current.fornecedor));
    if(m) fornSel.value = m.id;
  }
  fornSel.closest('.field').insertAdjacentHTML('beforeend', `
    <a class="fn-link" id="fn-add" role="button" tabindex="0">+ Cadastrar fornecedor</a>
    <div class="fn-panel" id="fn-panel" style="display:none">
      <div class="fn-panel-title">Novo fornecedor</div>
      <div class="field"><label>Nome *</label><input id="fn_nome" type="text" autocomplete="organization" placeholder="Ex: Gráfica Rápida"></div>
      <div class="row-2">
        <div class="field"><label>CNPJ/CPF</label><input id="fn_doc" type="text" autocomplete="off" placeholder="00.000.000/0000-00"></div>
        <div class="field"><label>Telefone</label><input id="fn_tel" type="text" autocomplete="tel" placeholder="(00) 99999-9999"></div>
      </div>
      <div class="field"><label>E-mail</label><input id="fn_email" type="text" autocomplete="email" placeholder="email@exemplo.com"></div>
      <div class="fn-panel-actions">
        <button type="button" class="btn ghost" id="fn-cancel">Cancelar</button>
        <button type="button" class="btn" id="fn-save">Salvar fornecedor</button>
      </div>
    </div>`);
  const painel = document.getElementById('fn-panel');
  const abrir = v => { painel.style.display = v ? '' : 'none'; if(v) document.getElementById('fn_nome').focus(); };
  const linkAdd = document.getElementById('fn-add');
  const syncLink = () => { linkAdd.style.display = fornSel.value ? 'none' : ''; if(fornSel.value) abrir(false); };
  fornSel.addEventListener('change', syncLink);
  linkAdd.onclick = () => abrir(true);
  document.getElementById('fn-cancel').onclick = () => abrir(false);
  painel.querySelectorAll('input').forEach(i => i.addEventListener('keydown', e => {
    if(e.key==='Enter'){ e.preventDefault(); document.getElementById('fn-save').click(); }
  }));
  document.getElementById('fn-save').onclick = async () => {
    const nome = document.getElementById('fn_nome').value.trim();
    if(!nome){ toast('Informe o nome do fornecedor.'); return; }
    const igual = STATE.fornecedores.find(f=>normTxt(f.nome)===normTxt(nome));
    if(igual){ fornSel.value = igual.id; syncLink(); abrir(false); toast('Esse fornecedor já estava cadastrado — ele foi selecionado.'); return; }
    const novo = { id: uid(), nome,
      documento: document.getElementById('fn_doc').value.trim(),
      telefone: document.getElementById('fn_tel').value.trim(),
      email: document.getElementById('fn_email').value.trim() };
    STATE.fornecedores.push(novo);
    if(!(await persist('fornecedores'))){ STATE.fornecedores = STATE.fornecedores.filter(f=>f.id!==novo.id); return; }
    fornSel.add(new Option(novo.nome, novo.id));
    fornSel.value = novo.id; // volta ao lançamento com tudo que já estava preenchido
    syncLink();
    ['fn_nome','fn_doc','fn_tel','fn_email'].forEach(i=>document.getElementById(i).value='');
    abrir(false);
    toast('Fornecedor cadastrado e selecionado.');
  };
  syncLink();
  if(!editing && !STATE.fornecedores.length) abrir(true);
}

// Intervalos possíveis entre vencimentos de uma conta parcelada
const INTERVALOS = {
  semanal:   { label:'Semanal (7 dias)',   dias:7 },
  quinzenal: { label:'Quinzenal (15 dias)', dias:15 },
  mensal:    { label:'Mensal',     meses:1 },
  bimestral: { label:'Bimestral',  meses:2 },
  trimestral:{ label:'Trimestral', meses:3 },
};
let contaPrevia = null; // {ocorrencia, n, intervalo, linhas:[{venc, valor}]} — prévia revisada antes de salvar

function addIntervaloISO(iso, i, chave){
  const it = INTERVALOS[chave] || INTERVALOS.mensal;
  if(it.dias){
    const [y,m,d] = iso.split('-').map(Number);
    const dt = new Date(y, m-1, d + it.dias*i);
    return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`;
  }
  return addMesesISO(iso, it.meses*i);
}
const _cent = n => Math.round((Number(n)||0)*100);

// Alterna entre a tela de cadastro e a tela de prévia (só a prévia fica visível; os dados do cadastro são mantidos)
function setModoPrevia(on){
  const mb = document.getElementById('modal-body'); if(!mb) return;
  mb.classList.toggle('oc-modo-previa', !!on);
  const cfg = document.getElementById('oc-config'), area = document.getElementById('oc-previa-area');
  if(cfg) cfg.style.display = on ? 'none' : '';
  if(area) area.style.display = on ? '' : 'none';
  const m = document.querySelector('#overlay .modal'); if(m) m.scrollTop = 0;
}

function gerarPreviaConta(){
  const oc = document.getElementById('f_ocorrencia').value;
  const total = parseFloat(document.getElementById('f_valor').value) || 0;
  const venc = document.getElementById('f_vencimento').value;
  const n = Math.floor(Number(document.getElementById('f_qtdParcelas').value) || 0);
  const intervalo = oc==='parcelada' ? document.getElementById('f_intervalo').value : 'mensal';
  if(!(total > 0)){ toast('Informe o valor antes de gerar a prévia.'); return; }
  if(!venc){ toast(oc==='parcelada' ? 'Informe o vencimento da 1ª parcela.' : 'Informe o vencimento do 1º mês.'); return; }
  if(n < 2 || n > 120){ toast('Informe de 2 a 120 ' + (oc==='parcelada' ? 'parcelas.' : 'meses.')); return; }
  const totalCent = _cent(total), parte = Math.floor(totalCent / n);
  const linhas = [];
  for(let i=0;i<n;i++){
    const valor = oc==='parcelada' ? (i===n-1 ? totalCent - parte*(n-1) : parte) / 100 : total;
    linhas.push({ venc: addIntervaloISO(venc, i, intervalo), valor });
  }
  contaPrevia = { ocorrencia: oc, n, intervalo, linhas };
  const parc = oc==='parcelada';
  document.getElementById('oc-previa').innerHTML = `
    <table class="oc-tab">
      <thead><tr><th>${parc?'Parcela':'Mês'}</th><th>Vencimento</th><th>Valor (R$)</th></tr></thead>
      <tbody>${linhas.map((l,i)=>`<tr>
        <td>${i+1}/${n}</td>
        <td><input type="date" data-oc-venc="${i}" value="${l.venc}"></td>
        <td>${parc ? `<input type="number" step="0.01" min="0" data-oc-valor="${i}" value="${l.valor.toFixed(2)}">` : fmtBRL(l.valor)}</td>
      </tr>`).join('')}</tbody>
    </table>
    <div class="oc-soma" id="oc-soma"></div>`;
  document.querySelectorAll('#oc-previa [data-oc-venc]').forEach(el => el.addEventListener('input', () => { contaPrevia.linhas[+el.dataset.ocVenc].venc = el.value; }));
  document.querySelectorAll('#oc-previa [data-oc-valor]').forEach(el => el.addEventListener('input', () => {
    contaPrevia.linhas[+el.dataset.ocValor].valor = parseFloat(el.value) || 0; atualizarSomaPrevia();
  }));
  atualizarSomaPrevia();
  const desc = document.getElementById('f_descricao').value.trim();
  document.getElementById('oc-previa-titulo').textContent = (parc ? `${n} parcelas` : `${n} cobranças mensais`) + (desc ? ' — ' + desc : '');
  setModoPrevia(true);
}
function atualizarSomaPrevia(){
  const el = document.getElementById('oc-soma'); if(!el || !contaPrevia) return;
  const soma = contaPrevia.linhas.reduce((a,l)=>a+_cent(l.valor),0);
  if(contaPrevia.ocorrencia==='parcelada'){
    const total = _cent(document.getElementById('f_valor').value);
    const ok = soma === total;
    el.className = 'oc-soma ' + (ok ? 'ok' : 'erro');
    el.textContent = ok ? `Soma das parcelas: ${fmtBRL(soma/100)} — confere com o valor total.`
      : `Soma das parcelas: ${fmtBRL(soma/100)} — difere do valor total (${fmtBRL(total/100)}) em ${fmtBRL(Math.abs(total-soma)/100)}.`;
  } else {
    el.className = 'oc-soma ok';
    el.textContent = `Total do período: ${fmtBRL(soma/100)} (${contaPrevia.n} cobranças mensais).`;
  }
}

// Grava uma conta nova. Única = 1 conta. Parcelada = conta principal + parcelas vinculadas.
// Recorrente = uma conta por mês, todas na mesma série (grupoId). Cada conta tem vencimento,
// saldo e situação próprios (vencida = Atrasado, senão Pendente).
async function salvarNovaConta(base){
  const hoje = todayISO();
  const serie = base.ocorrencia !== 'unica';
  const parcelada = base.ocorrencia === 'parcelada';
  const statusDe = venc => venc < hoje ? 'atrasado' : 'pendente';
  let lista = [], principal = null;

  if(!serie){
    const it = { ...base };
    delete it.qtdParcelas; delete it.intervalo;
    it.saldo = Number(it.valor) || 0;
    it.status = statusDe(it.vencimento);
    lista = [it];
  } else {
    const p = contaPrevia;
    if(!p || p.ocorrencia !== base.ocorrencia){ toast('Clique em "Gerar prévia" para revisar as ' + (parcelada ? 'parcelas' : 'cobranças') + ' antes de salvar.'); return; }
    if(p.linhas.some(l=>!l.venc)){ toast('Preencha o vencimento de todas as linhas da prévia.'); return; }
    if(p.linhas.some(l=>!(Number(l.valor) > 0))){ toast('Todas as parcelas precisam ter valor maior que zero.'); return; }
    if(parcelada){
      const soma = p.linhas.reduce((a,l)=>a+_cent(l.valor),0), total = _cent(base.valor);
      if(soma !== total){ toast(`A soma das parcelas (${fmtBRL(soma/100)}) precisa ser igual ao valor total (${fmtBRL(total/100)}).`); return; }
      principal = { ...base, principal:true, qtdParcelas: p.n, intervalo: p.intervalo, saldo: Number(base.valor)||0, status:'pendente' };
    }
    const m0 = (iso => { const [y,m] = iso.split('-').map(Number); return y*12+m; })(p.linhas[0].venc);
    p.linhas.forEach((l,i)=>{
      const it = { ...base, id: uid() };
      delete it.qtdParcelas;
      it.grupoId = base.id;
      it.parcela = `${i+1}/${p.n}`;
      it.descricao = `${base.descricao} (${i+1}/${p.n})`;
      it.vencimento = l.venc;
      it.valor = l.valor;
      it.saldo = l.valor;
      if(parcelada) it.intervalo = p.intervalo; else delete it.intervalo;
      if(base.competencia){
        const [y,m] = l.venc.split('-').map(Number);
        it.competencia = addMesesISO(base.competencia+'-01', (y*12+m) - m0).slice(0,7);
      }
      it.status = statusDe(l.venc);
      lista.push(it);
    });
  }

  STATE.financeiro.push(...lista);
  if(principal) STATE.series.push(principal);
  const desfazer = () => {
    const ids = new Set(lista.map(x=>x.id));
    STATE.financeiro = STATE.financeiro.filter(x=>!ids.has(x.id));
    if(principal) STATE.series = STATE.series.filter(x=>x.id!==principal.id);
  };
  if(!(await persist('financeiro'))){ desfazer(); return; }
  if(principal){
    try{
      const { error } = await window.sb.from(TABLES.financeiro).upsert([principal], { onConflict:'id' });
      if(error) throw error;
    }catch(e){
      console.error('Erro ao salvar conta principal', e);
      toast('Erro ao salvar a conta principal: ' + (e.message||e));
      for(const x of lista) await persistDelete('financeiro', x.id);
      desfazer(); return;
    }
  }
  const [yy, mm] = lista[0].vencimento.split('-').map(Number);
  finMes = { y: yy, m: mm-1 }; // mostra o mês em que a primeira conta cai
  contaPrevia = null;
  toast(lista.length>1 ? `${lista.length} contas criadas.` : 'Conta cadastrada.');
  closeModal();
  renderContent();
}

/* ============ REGISTRAR RECEBIMENTO (financeiro) ============
   Modal específico aberto ao clicar em "Marcar como pago" num lançamento
   de receita: permite lançar multa/juros/desconto, escolher forma e conta
   de recebimento, e só então grava o lançamento como pago. */
const FORMA_RECEBIMENTO_OPTIONS = [
  ['pix','PIX'], ['dinheiro','Dinheiro'], ['transferencia','Transferência bancária'],
  ['cartao_credito','Cartão de crédito'], ['cartao_debito','Cartão de débito'], ['boleto','Boleto'],
];
// Sem um cadastro de contas financeiras ainda no painel — por ora é uma lista fixa,
// fácil de trocar por um select alimentado por uma futura tabela "contas".
const CONTA_FINANCEIRA_OPTIONS = [
  ['conta_bancaria','Conta bancária'], ['caixa','Caixa (dinheiro)'], ['conta_pix','Conta PIX'],
];

function openReceberModal(id){ openBaixaModal(id); }
function openPagarModal(id){ openBaixaModal(id); }

/* ============ BAIXA DE CONTA (recebimento ou pagamento) ============
   "Baixar" = registrar o dinheiro que entrou (conta a receber) ou saiu (conta a pagar).
   Vale só para a conta/parcela escolhida. Cada baixa é guardada separadamente no histórico
   (data, forma, valor e ajustes), então uma baixa parcial nunca apaga o que já aconteceu.
     saldo atualizado = saldo em aberto + multa + juros − desconto
     novo saldo       = saldo atualizado − valor desta baixa
   Valor zero ou maior que o saldo atualizado não é aceito (não existe rotina de crédito excedente). */
let baixaRascunho = null; // o que foi digitado, para não perder ao consultar o histórico e voltar

function openBaixaModal(id){
  const item = findItem('financeiro', id);
  if(!item) return;
  const pagar = item.tipo==='despesa';
  const saldo = finSaldo(item);
  if(_cent(saldo) <= 0){ toast('Esta conta já está ' + (pagar?'paga':'recebida') + '.'); return; }
  const V = pagar ? { rec:'pagamento', pessoa:'Fornecedor', pago:'Já pago', valor:'Valor pago nesta baixa', conta:'Conta de saída', ok:'Pagamento registrado. Conta paga.', title:'Baixar conta a pagar' }
                  : { rec:'recebimento', pessoa:'Cliente', pago:'Já recebido', valor:'Valor recebido nesta baixa', conta:'Conta financeira', ok:'Recebimento registrado. Conta recebida.', title:'Baixar conta a receber' };
  const rasc = (baixaRascunho && baixaRascunho.id===id) ? baixaRascunho.v : null;
  baixaRascunho = null;

  document.getElementById('modal-title').textContent = V.title + (item.parcela ? ' — parcela ' + item.parcela : '');
  const modalEl = document.querySelector('.modal');
  if(modalEl) modalEl.classList.toggle('modal-lg', true);
  const nome = pagar ? (item.fornecedor || item.clienteNome || '—') : (item.clienteNome || clienteNome(item.clienteId));
  const val = (k, def) => rasc && rasc[k]!=null ? rasc[k] : def;

  document.getElementById('modal-body').innerHTML = `
    <div class="receipt-info-card">
      <div class="receipt-info-item"><span>${V.pessoa}</span><strong>${escHTML(nome)}</strong></div>
      <div class="receipt-info-item"><span>Descrição</span><strong>${escHTML(item.descricao || '—')}</strong></div>
      <div class="receipt-info-item"><span>Valor da ${item.parcela?'parcela':'conta'}</span><strong>${fmtBRL(item.valor)}</strong></div>
      <div class="receipt-info-item"><span>Vencimento</span><strong>${fmtDate(item.vencimento)}</strong></div>
      <div class="receipt-info-item"><span>${V.pago}</span><strong>${fmtBRL(finRecebido(item))}</strong></div>
      <div class="receipt-info-item bx-destaque"><span>Saldo em aberto</span><strong>${fmtBRL(saldo)}</strong></div>
    </div>
    <div class="form-section" style="border-top:none;padding-top:2px;margin-top:2px">
      <div class="form-section-title">${ICONS.dollar || ''}<span>Dados do ${V.rec}</span></div>
      <div class="row-2">
        <div class="field"><label>Data do ${V.rec} *</label><input id="bx_data" type="date" value="${val('bx_data', todayISO())}"></div>
        <div class="field"><label>Forma de ${V.rec} *</label><select id="bx_forma">${FORMA_RECEBIMENTO_OPTIONS.map(([v,l])=>`<option value="${v}" ${val('bx_forma', item.formaRecebimento)===v?'selected':''}>${l}</option>`).join('')}</select></div>
      </div>
      <div class="row-2">
        <div class="field"><label>${V.conta}</label><select id="bx_conta">${CONTA_FINANCEIRA_OPTIONS.map(([v,l])=>`<option value="${v}" ${val('bx_conta','')===v?'selected':''}>${l}</option>`).join('')}</select></div>
        <div class="field"><label>${V.valor} *</label><input id="bx_valor" type="number" step="0.01" min="0" value="${val('bx_valor', Number(saldo).toFixed(2))}"></div>
      </div>
    </div>
    <div class="form-section">
      <div class="form-section-title">${ICONS.dollar || ''}<span>Ajustes (quando houver)</span></div>
      <div class="row-3">
        <div class="field"><label>Multa</label><input id="bx_multa" type="number" step="0.01" min="0" value="${val('bx_multa', 0)}"></div>
        <div class="field"><label>Juros</label><input id="bx_juros" type="number" step="0.01" min="0" value="${val('bx_juros', 0)}"></div>
        <div class="field"><label>Desconto</label><input id="bx_desconto" type="number" step="0.01" min="0" value="${val('bx_desconto', 0)}"></div>
      </div>
      <div class="field"><label>Observação (opcional)</label><input id="bx_obs" type="text" autocomplete="off" placeholder="Fica registrada no histórico" value="${escHTML(val('bx_obs',''))}"></div>
    </div>
    <div class="bx-resumo">
      <div><span>Saldo em aberto</span><strong>${fmtBRL(saldo)}</strong></div>
      <div><span>Saldo atualizado <small>(+ multa + juros − desconto)</small></span><strong id="bx_atualizado"></strong></div>
      <div><span>${V.valor.replace(' nesta baixa','')}</span><strong id="bx_pago"></strong></div>
      <div class="bx-final"><span>Novo saldo</span><strong id="bx_novo"></strong></div>
    </div>
    <div class="bx-aviso" id="bx_aviso"></div>`;

  const q = k => document.getElementById(k);
  const num = k => parseFloat(q(k).value) || 0;
  // lê os campos e calcula tudo em centavos; devolve também o erro que impede confirmar (se houver)
  const calcular = () => {
    const multaC = _cent(num('bx_multa')), jurosC = _cent(num('bx_juros')), descC = _cent(num('bx_desconto')), valC = _cent(num('bx_valor'));
    const atualC = _cent(saldo) + multaC + jurosC - descC;
    const novoC = atualC - valC;
    let erro = '';
    if(multaC < 0 || jurosC < 0 || descC < 0 || valC < 0) erro = 'Os valores não podem ser negativos.';
    else if(atualC <= 0) erro = 'O desconto zera o saldo — reduza o desconto para registrar uma baixa.';
    else if(valC === 0) erro = 'Informe um valor maior que zero.';
    else if(valC > atualC) erro = `O valor é maior que o saldo atualizado (${fmtBRL(atualC/100)}). Não é possível registrar crédito excedente.`;
    else if(!q('bx_data').value) erro = 'Informe a data do ' + V.rec + '.';
    return { multaC, jurosC, descC, valC, atualC, novoC, erro };
  };
  const btn = () => q('bx-confirmar');
  const atualizar = () => {
    const c = calcular();
    q('bx_atualizado').textContent = fmtBRL(c.atualC/100);
    q('bx_pago').textContent = fmtBRL(c.valC/100);
    q('bx_novo').textContent = fmtBRL(Math.max(0,c.novoC)/100);
    const av = q('bx_aviso');
    av.className = 'bx-aviso ' + (c.erro ? 'erro' : 'ok');
    av.textContent = c.erro || (c.novoC === 0 ? 'A conta será quitada com esta baixa.' : `Baixa parcial: a conta continua aberta com saldo de ${fmtBRL(c.novoC/100)} e permite outra baixa.`);
    if(btn()) btn().disabled = !!c.erro;
  };
  let manual = !!(rasc && rasc.manual);
  const sugerir = () => { if(!manual) q('bx_valor').value = (Math.max(0, calcular().atualC)/100).toFixed(2); };
  ['bx_multa','bx_juros','bx_desconto'].forEach(k=>q(k).addEventListener('input', () => { sugerir(); atualizar(); }));
  q('bx_valor').addEventListener('input', () => { manual = true; atualizar(); });
  q('bx_data').addEventListener('input', atualizar);

  document.getElementById('modal-foot').innerHTML = `
    <div class="modal-foot-split">
      <button type="button" class="link-btn" id="bx-historico">Ver histórico</button>
      <div style="display:flex;gap:10px">
        <button class="btn ghost" id="modal-cancel" type="button">Cancelar</button>
        <button class="btn" id="bx-confirmar" type="button">Confirmar baixa</button>
      </div>
    </div>`;
  document.getElementById('modal-cancel').addEventListener('click', closeModal);
  document.getElementById('bx-historico').addEventListener('click', () => {
    const v = { manual }; ['bx_data','bx_forma','bx_conta','bx_valor','bx_multa','bx_juros','bx_desconto','bx_obs'].forEach(k=>v[k]=q(k).value);
    baixaRascunho = { id, v };
    openFinHistorico(id, false, true);
  });
  atualizar();

  btn().addEventListener('click', async () => {
    const c = calcular();
    if(c.erro){ toast(c.erro); return; }
    btn().disabled = true; // evita duas baixas por clique duplo
    const registro = { id: uid(), data: q('bx_data').value, forma: q('bx_forma').value, conta: q('bx_conta').value,
      multa: c.multaC/100, juros: c.jurosC/100, desconto: c.descC/100,
      valorRecebido: c.valC/100,                 // dinheiro que entrou/saiu nesta baixa
      abatido: (c.valC - c.multaC - c.jurosC + c.descC)/100, // quanto reduziu o saldo original
      saldoAntes: _cent(saldo)/100, saldoAtualizado: c.atualC/100, saldoApos: c.novoC/100,
      obs: q('bx_obs').value.trim() };

    const antes = JSON.parse(JSON.stringify(item));
    item.baixas = [...(Array.isArray(item.baixas) ? item.baixas : []), registro]; // acrescenta; nunca sobrescreve as anteriores
    item.saldo = c.novoC/100;
    if(c.novoC === 0){
      item.status = 'pago';
      item.dataPagamento = registro.data;
      item.valorRecebido = item.baixas.reduce((a,b)=>a+_cent(b.valorRecebido),0)/100;
      item.multa = item.baixas.reduce((a,b)=>a+_cent(b.multa),0)/100;
      item.juros = item.baixas.reduce((a,b)=>a+_cent(b.juros),0)/100;
      item.desconto = item.baixas.reduce((a,b)=>a+_cent(b.desconto),0)/100;
    } else {
      item.status = item.vencimento && item.vencimento < todayISO() ? 'atrasado' : 'pendente';
    }
    if(!(await persist('financeiro'))){ Object.keys(item).forEach(k=>delete item[k]); Object.assign(item, antes); btn().disabled = false; return; }
    toast(c.novoC === 0 ? V.ok : `Baixa registrada. Saldo em aberto: ${fmtBRL(c.novoC/100)}.`);
    closeModal(); renderContent();
  });
  document.getElementById('overlay').classList.add('open');
}

/* ============ VER DETALHES / VER HISTÓRICO (financeiro) ============ */
const _forma = v => (FORMA_RECEBIMENTO_OPTIONS.find(([k])=>k===v)||[])[1] || '—';
const _contaFin = v => (CONTA_FINANCEIRA_OPTIONS.find(([k])=>k===v)||[])[1] || '—';
const INTERVALO_LABEL = k => (INTERVALOS[k] || INTERVALOS.mensal).label;

function openFinDetalhes(id, grupo){
  const item = findItem('financeiro', id);
  if(!item) return;
  const pagar = item.tipo==='despesa';
  const serie = item.grupoId ? finParcelasDoGrupo(item.grupoId) : [];
  const parcelada = serie.length > 0 && item.ocorrencia==='parcelada';
  const principal = parcelada ? STATE.series.find(z=>z.id===item.grupoId) : null;
  const orig = parcelada
    ? { ...item, descricao: finBaseDescricao(item.descricao), valor: serie.reduce((a,p)=>a+_cent(p.valor),0)/100, vencimento: serie[0].vencimento, ...(principal||{}) , id:item.id, tipo:item.tipo }
    : item;
  const nome = pagar ? (item.fornecedor || item.clienteNome || '—') : (item.clienteNome || clienteNome(item.clienteId));
  const kv = (l, v) => `<div class="field"><label>${l}</label><div class="view-value">${(v===''||v==null)?'—':v}</div></div>`;
  const ocTxt = parcelada ? `Parcelada em ${serie.length}x · ${INTERVALO_LABEL(item.intervalo || (principal||{}).intervalo)}`
    : (serie.length ? `Recorrente · ${serie.length} meses` : 'Única');
  const sit = finSituacao(item);

  document.getElementById('modal-title').textContent = (pagar ? 'Detalhes da conta a pagar' : 'Detalhes da conta a receber');
  const modalEl = document.querySelector('.modal'); if(modalEl) modalEl.classList.toggle('modal-lg', serie.length>0);

  const tabela = serie.length ? `
    <div class="form-section">
      <div class="form-section-title">${ICONS.dollar||''}<span>${parcelada ? 'Parcelas' : 'Cobranças da série'}</span></div>
      <div class="oc-scroll"><table class="oc-tab">
        <thead><tr><th>${parcelada?'Parcela':'Mês'}</th><th>Vencimento</th><th>Valor</th><th>${pagar?'Pago':'Recebido'}</th><th>Saldo</th><th>Situação</th><th></th></tr></thead>
        <tbody>${serie.map(p=>{ const sp = finSituacao(p); return `<tr class="${(!grupo && p.id===item.id)?'fin-sel':''}">
          <td>${escHTML(p.parcela||'—')}</td><td>${fmtDate(p.vencimento)}</td><td>${fmtBRL(p.valor)}</td><td>${fmtBRL(finRecebido(p))}</td><td>${fmtBRL(finSaldo(p))}</td>
          <td><span class="pill ${sp.cls}">${sp.label}</span></td>
          <td>${finSaldo(p)>0.004 ? `<button type="button" class="btn ghost fin-mini" data-baixar-parc="${p.id}">Baixar</button>` : ''}</td></tr>`; }).join('')}</tbody>
      </table></div>
    </div>` : '';

  const estaConta = (!grupo && serie.length) ? `
    <div class="form-section">
      <div class="form-section-title">${ICONS.dollar||''}<span>Esta ${parcelada?'parcela':'cobrança'} (${escHTML(item.parcela||'')})</span></div>
      <div class="row-2">${kv('Vencimento', fmtDate(item.vencimento))}${kv('Valor', fmtBRL(item.valor))}</div>
      <div class="row-2">${kv(pagar?'Valor pago':'Valor recebido', fmtBRL(finRecebido(item)))}${kv('Saldo em aberto', fmtBRL(finSaldo(item)))}</div>
      ${kv('Situação', `<span class="pill ${sit.cls}">${sit.label}</span>`)}
    </div>` : '';

  const proprios = !serie.length ? `
    <div class="row-2">${kv('Data de vencimento', fmtDate(item.vencimento))}${kv('Valor total', fmtBRL(item.valor))}</div>
    <div class="row-2">${kv(pagar?'Valor já pago':'Valor já recebido', fmtBRL(finRecebido(item)))}${kv('Saldo em aberto', fmtBRL(finSaldo(item)))}</div>
    ${kv('Situação', `<span class="pill ${sit.cls}">${sit.label}</span>`)}` : '';

  document.getElementById('modal-body').innerHTML = `
    <div class="form-section" style="border-top:none;padding-top:2px;margin-top:2px">
      <div class="form-section-title">${ICONS.doc||''}<span>Dados originais da conta</span></div>
      ${kv(pagar?'Fornecedor':'Cliente', escHTML(nome))}
      ${kv('Descrição', escHTML(orig.descricao))}
      <div class="row-2">${kv('Plano de contas', escHTML(orig.planoContas))}${kv('Ocorrência', ocTxt)}</div>
      <div class="row-2">${kv('Nº do documento', escHTML(orig.numeroDocumento))}${kv('Identificador', escHTML(orig.identificador))}</div>
      <div class="row-2">${kv('Data de emissão', fmtDate(orig.dataEmissao))}${kv('Competência', fmtComp(orig.competencia))}</div>
      <div class="row-2">${kv(serie.length ? (parcelada?'Valor total (soma das parcelas)':'Valor de cada mês') : 'Valor total', fmtBRL(serie.length && !parcelada ? item.valor : orig.valor))}${kv(pagar?'Forma prevista de pagamento':'Forma prevista de recebimento', _forma(orig.formaRecebimento))}</div>
      ${proprios}
    </div>
    ${estaConta}${tabela}`;

  document.getElementById('modal-foot').innerHTML = `<button class="btn ghost" id="modal-cancel" type="button">Fechar</button><button class="btn ghost" id="fin-det-hist" type="button">Ver histórico</button>`;
  document.getElementById('modal-cancel').addEventListener('click', closeModal);
  document.getElementById('fin-det-hist').addEventListener('click', () => openFinHistorico(id, grupo));
  document.querySelectorAll('[data-baixar-parc]').forEach(b => b.addEventListener('click', () => openBaixaModal(b.dataset.baixarParc)));
  document.getElementById('overlay').classList.add('open');
}

function openFinHistorico(id, grupo, deBaixa){
  const item = findItem('financeiro', id);
  if(!item) return;
  const pagar = item.tipo==='despesa';
  const alvos = (grupo && item.grupoId) ? finParcelasDoGrupo(item.grupoId) : [item];
  const baixas = [];
  alvos.forEach(a => finBaixas(a).forEach(b => baixas.push({ ...b, _parcela: a.parcela || '' })));
  baixas.sort((a,b)=>String(a.data||'').localeCompare(String(b.data||'')));
  const totalC = baixas.reduce((a,b)=>a+_cent(b.valorRecebido),0);
  const saldoC = alvos.reduce((a,p)=>a+_cent(finSaldo(p)),0);
  const comParcela = alvos.length > 1;
  const titulo = (grupo && item.grupoId) ? finBaseDescricao(item.descricao) : item.descricao;

  document.getElementById('modal-title').textContent = 'Histórico de baixas';
  const modalEl = document.querySelector('.modal'); if(modalEl) modalEl.classList.add('modal-lg');
  document.getElementById('modal-body').innerHTML = `
    <div class="receipt-info-card">
      <div class="receipt-info-item"><span>Conta</span><strong>${escHTML(titulo)}${(!grupo && item.parcela)?' — parcela '+escHTML(item.parcela):''}</strong></div>
      <div class="receipt-info-item"><span>Baixas registradas</span><strong>${baixas.length}</strong></div>
      <div class="receipt-info-item"><span>Total ${pagar?'pago':'recebido'}</span><strong>${fmtBRL(totalC/100)}</strong></div>
      <div class="receipt-info-item"><span>Saldo em aberto</span><strong>${fmtBRL(saldoC/100)}</strong></div>
    </div>
    ${baixas.length ? `<div class="oc-scroll"><table class="oc-tab">
      <thead><tr>${comParcela?'<th>Parcela</th>':''}<th>Data</th><th>${pagar?'Valor pago':'Valor recebido'}</th><th>Multa</th><th>Juros</th><th>Desconto</th><th>Forma</th><th>${pagar?'Conta de saída':'Conta'}</th><th>Saldo após</th><th>Observação</th></tr></thead>
      <tbody>${baixas.map(b=>`<tr>${comParcela?`<td>${escHTML(b._parcela||'—')}</td>`:''}<td>${fmtDate(b.data)}</td><td>${fmtBRL(b.valorRecebido)}</td><td>${fmtBRL(b.multa)}</td><td>${fmtBRL(b.juros)}</td><td>${fmtBRL(b.desconto)}</td><td>${_forma(b.forma)}</td><td>${_contaFin(b.conta)}</td><td>${b.saldoApos!=null ? fmtBRL(b.saldoApos) : '—'}</td><td>${escHTML(b.obs || (b.legado?'Registro anterior ao histórico de baixas':''))}</td></tr>`).join('')}</tbody>
    </table></div>` : `<div class="empty" style="padding:14px 0"><strong>Nenhuma baixa registrada</strong>Quando houver ${pagar?'pagamento':'recebimento'}, ele aparece aqui.</div>`}`;
  document.getElementById('modal-foot').innerHTML = deBaixa
    ? `<button class="btn ghost" id="modal-cancel" type="button">Fechar</button><button class="btn" id="fin-voltar-baixa" type="button">← Voltar à baixa</button>`
    : `<button class="btn ghost" id="modal-cancel" type="button">Fechar</button>`;
  document.getElementById('modal-cancel').addEventListener('click', () => { baixaRascunho = null; closeModal(); });
  const vb = document.getElementById('fin-voltar-baixa'); if(vb) vb.addEventListener('click', () => openBaixaModal(id));
  document.getElementById('overlay').classList.add('open');
}

function openViewModal(mod, id){
  const item = findItem(mod, id);
  if(!item) return;
  if(mod==='financeiro'){ openFinDetalhes(id, false); return; }
  const modalElView = document.querySelector('.modal');
  if(modalElView) modalElView.classList.remove('modal-lg');
  document.getElementById('modal-title').textContent = VIEW_TITLES[mod] || 'Detalhes';
  document.getElementById('modal-foot').innerHTML = `<button class="btn ghost" id="modal-cancel" type="button">Fechar</button>`;
  document.getElementById('modal-cancel').addEventListener('click', closeModal);

  if(mod==='financeiro') finFormTipo = item.tipo==='despesa' ? 'despesa' : 'receita';
  if(mod==='financeiro') document.getElementById('modal-title').textContent = item.tipo==='despesa' ? 'Detalhes da conta a pagar' : 'Detalhes da conta a receber';
  const fields = FORM_FIELDS[mod]();
  const body = document.getElementById('modal-body');
  body.innerHTML = fields.map(f=>{
    let display = item[f.k];
    if(f.k==='clienteId') display = clienteNome(item.clienteId);
    else if(f.k==='clienteNome' && mod==='servicos') display = escHTML(servicoCliente(item));
    else if(f.k==='status') display = mod==='clientes' ? clienteStatusLabel(display) : (mod==='servicos' ? servicoStatusLabel(display) : financeiroStatusLabel(display));
    else if(f.k==='tipo') display = display==='despesa' ? 'Despesa' : 'Receita';
    else if(f.k==='duracaoRecorrencia') display = ({indeterminado:'Mensal, sem prazo definido', '3':'Por 3 meses', '6':'Por 6 meses', '12':'Por 12 meses'})[display];
    else if(f.k==='formaRecebimento') display = (FORMA_RECEBIMENTO_OPTIONS.find(([v])=>v===display)||[])[1];
    else if(f.k==='contaFinanceira') display = (CONTA_FINANCEIRA_OPTIONS.find(([v])=>v===display)||[])[1];
    else if(f.type==='date') display = fmtDate(display);
    else if(f.type==='number') display = fmtBRL(display);
    if(!display) display = '—';
    return `<div class="field"><label>${f.label}</label><div class="view-value">${display}</div></div>`;
  }).join('');
  document.getElementById('overlay').classList.add('open');
}

function openEquipeProfile(id){
  const x = findItem('equipe', id);
  if(!x) return;
  const modalElPerfil = document.querySelector('.modal');
  if(modalElPerfil) modalElPerfil.classList.remove('modal-lg');
  document.getElementById('modal-title').textContent = 'Perfil do colaborador';
  document.getElementById('modal-foot').innerHTML = `<button class="btn ghost" id="modal-cancel" type="button">Fechar</button>`;
  document.getElementById('modal-cancel').addEventListener('click', closeModal);

  const body = document.getElementById('modal-body');
  body.innerHTML = `
    <div class="profile-head">
      ${teamAvatarHTML(x)}
      <div class="profile-head-info">
        <strong>${x.nome}</strong>
        <span>${x.cargo||'—'}${x.setor?' • '+x.setor:''} · <span class="pill ${x.status||'ativo'}" style="vertical-align:middle">${equipeStatusLabel(x.status)}</span></span>
      </div>
    </div>
    <div class="profile-grid">
      <div class="profile-field"><label>E-mail</label><div>${x.email||'—'}</div></div>
      <div class="profile-field"><label>Telefone</label><div>${x.telefone||'—'}</div></div>
      <div class="profile-field"><label>Setor</label><div>${x.setor||'—'}</div></div>
      <div class="profile-field"><label>Na empresa desde</label><div>${fmtDate(x.dataEntrada)}</div></div>
    </div>
    ${x.observacoes ? `<div class="field"><label>Observações</label><div class="view-value">${x.observacoes}</div></div>` : ''}
    <button class="btn" style="width:100%;justify-content:center;margin-top:4px" id="profile-edit-btn">Editar cadastro</button>
  `;
  document.getElementById('overlay').classList.add('open');
  document.getElementById('profile-edit-btn').addEventListener('click', ()=>{ closeModal(); openModal('equipe', x.id); });
}

function closeModal(){
  document.getElementById('overlay').classList.remove('open');
  if(drawerToReopen){
    const id = drawerToReopen;
    drawerToReopen = null;
    if(findItem('clientes', id)) openClienteDrawer(id);
  }
}

async function saveForm(mod, editId){
  modalEditId = editId || null;
  const fields = FORM_FIELDS[mod]();
  const prevStatus = (mod==='servicos' && editId) ? (findItem(mod, editId)||{}).status : null;
  const obj = editId ? { ...findItem(mod, editId) } : { id: uid() };
  for(const f of fields){
    const el = document.getElementById('f_'+f.k);
    let val = el.value;
    if(f.type==='number') val = parseFloat(val)||0;
    else if((f.type==='date' || f.type==='month') && val==='') val = null;
    obj[f.k] = val;
  }
  if(mod==='financeiro' && finFormTipo==='despesa'){
    const forn = STATE.fornecedores.find(x=>x.id===obj.fornecedorId);
    if(!forn){ toast('Selecione o fornecedor antes de salvar (ou use "+ Cadastrar fornecedor").'); return; }
    obj.fornecedor = forn.nome;
  }
  const requiredMissing = fields.some(f=>f.required && !String(obj[f.k]||'').trim());
  if(requiredMissing){ toast('Preencha os campos obrigatórios.'); return; }
  if(mod==='servicos'){
    const t = String(obj.clienteNome||'').trim();
    const m = t ? STATE.clientes.find(c=>normTxt(c.nome)===normTxt(t)) : null;
    obj.clienteId = m ? m.id : '';          // bate com um cliente cadastrado: mantém o vínculo
    obj.clienteNome = m ? m.nome : t;       // senão fica só o texto digitado
  }
  if(mod==='financeiro'){ obj.clienteNome = (finFormTipo==='despesa') ? obj.fornecedor : clienteNome(obj.clienteId); }
  if(mod==='financeiro'){
    obj.tipo = finFormTipo; finLista = finFormTipo==='despesa' ? 'pagar' : 'receber';
    if(!(Number(obj.valor) > 0)){ toast('Informe um valor total maior que zero.'); return; }
    if(!editId){ await salvarNovaConta(obj); return; }
    delete obj.qtdParcelas; delete obj.intervalo;
    if(obj.status!=='pago'){ const ab = (obj.baixas||[]).reduce((a,b)=>a+_cent(b.abatido),0); obj.saldo = Math.max(0, _cent(obj.valor)-ab)/100; }
  }
  if(mod==='servicos' && obj.status==='concluido' && prevStatus!=='concluido'){ obj.dataConclusao = todayISO(); }
  if(mod==='demandas' && !editId){ obj.dataAbertura = todayISO(); }

  if(mod==='equipe' && equipeFotoFile && LOGGED_USER.role === 'admin'){
    const ext = (equipeFotoFile.name.split('.').pop() || 'jpg').toLowerCase();
    const path = `${obj.id}-${Date.now()}.${ext}`;
    const btnSave = document.getElementById('modal-save');
    if(btnSave){ btnSave.disabled = true; btnSave.textContent = 'Enviando foto...'; }
    const { error: upErr } = await window.sb.storage.from(EQUIPE_BUCKET).upload(path, equipeFotoFile, { upsert:true });
    if(btnSave){ btnSave.disabled = false; btnSave.textContent = 'Salvar'; }
    if(upErr){
      toast('Erro ao enviar a foto: ' + upErr.message);
    } else {
      const { data: pub } = window.sb.storage.from(EQUIPE_BUCKET).getPublicUrl(path);
      obj.foto_url = pub.publicUrl;
    }
    equipeFotoFile = null;
  }

  if(mod==='clientes' && clienteFotoFile && LOGGED_USER.role === 'admin'){
    const ext = (clienteFotoFile.name.split('.').pop() || 'jpg').toLowerCase();
    const path = `cliente-${obj.id}-${Date.now()}.${ext}`;
    const btnSave = document.getElementById('modal-save');
    if(btnSave){ btnSave.disabled = true; btnSave.textContent = 'Enviando foto...'; }
    const { error: upErr } = await window.sb.storage.from(EQUIPE_BUCKET).upload(path, clienteFotoFile, { upsert:true });
    if(btnSave){ btnSave.disabled = false; btnSave.textContent = 'Salvar'; }
    if(upErr){
      toast('Erro ao enviar a foto: ' + upErr.message);
    } else {
      const { data: pub } = window.sb.storage.from(EQUIPE_BUCKET).getPublicUrl(path);
      obj.foto_url = pub.publicUrl;
    }
    clienteFotoFile = null;
  }

  if(mod==='servicos'){
    const valorNum = parseFloat(obj.valor) || 0;
    const cicloAtual = cicloAtualDoServico(obj);
    // Serviço recorrente: mantém 1 lançamento por CICLO (não mexe nos ciclos anteriores).
    // Serviço não-recorrente: mantém sempre 1 único lançamento (comportamento antigo).
    const existingFin = obj.recorrente === 'sim'
      ? STATE.financeiro.find(f=>f.servicoId===obj.id && f.mesReferencia===cicloAtual)
      : STATE.financeiro.find(f=>f.servicoId===obj.id);
    if(valorNum > 0){
      const finObj = existingFin ? { ...existingFin } : { id: uid(), servicoId: obj.id, tipo:'receita' };
      finObj.clienteId = obj.clienteId;
      finObj.clienteNome = servicoCliente(obj);
      finObj.descricao = `Serviço: ${obj.titulo}`;
      finObj.valor = valorNum;
      finObj.vencimento = obj.recorrente === 'sim' ? vencimentoDoCiclo(obj, cicloAtual) : (obj.prazoEntrega || obj.dataInicio || todayISO());
      if(obj.recorrente === 'sim') finObj.mesReferencia = cicloAtual;
      else delete finObj.mesReferencia;
      if(obj.status === 'concluido'){
        finObj.status = 'pago';
        finObj.dataPagamento = (existingFin && existingFin.status==='pago') ? existingFin.dataPagamento : todayISO();
      } else {
        finObj.status = 'pendente';
        finObj.dataPagamento = '';
        const abat = (finObj.baixas||[]).reduce((a,b)=>a+_cent(b.abatido),0);
        finObj.saldo = Math.max(0, _cent(valorNum)-abat)/100;
        if(finObj.saldo === 0 && abat > 0){ finObj.status = 'pago'; finObj.dataPagamento = finObj.baixas[finObj.baixas.length-1].data; }
      }
      if(existingFin){
        const idxFin = STATE.financeiro.findIndex(f=>f.id===existingFin.id);
        if(idxFin>-1) STATE.financeiro[idxFin] = finObj;
      } else {
        STATE.financeiro.push(finObj);
      }
      persist('financeiro');
    } else if(existingFin){
      STATE.financeiro = STATE.financeiro.filter(f=>f.id!==existingFin.id);
      persistDelete('financeiro', existingFin.id);
    }
  }

  const isNew = !editId;
  const previousSnapshot = editId ? { ...findItem(mod, editId) } : null;
  if(editId){
    const idx = STATE[mod].findIndex(x=>x.id===editId);
    if(idx>-1) STATE[mod][idx] = obj;
  } else {
    STATE[mod].push(obj);
  }
  const salvouOk = await persist(mod);
  if(!salvouOk){
    // O banco recusou/falhou: desfaz a mudança local (o aviso de erro já apareceu
    // dentro de persist()) e mantém o modal aberto pra pessoa tentar de novo.
    if(isNew){ STATE[mod] = STATE[mod].filter(x=>x.id!==obj.id); }
    else if(previousSnapshot){ const idx = STATE[mod].findIndex(x=>x.id===editId); if(idx>-1) STATE[mod][idx] = previousSnapshot; }
    return;
  }
  if(mod==='servicos' && obj.atividadeId){ await sincronizarAtividadeDoServico(obj); }
  if(mod==='demandas'){ await sincronizarAtividadeDaDemanda(obj); }
  toast(isNew ? 'Registro salvo com sucesso.' : 'Registro atualizado com sucesso.');
  closeModal();
  renderContent();

  if(mod==='clientes' && isNew){
    setTimeout(() => {
      openModal('servicos', null, { clienteId: obj.id });
      toast('Cliente cadastrado! Agora cadastre o serviço dele.');
    }, 200);
  }
}

/* ============ ATIVIDADES DO KANBAN (internas ou de cliente) ============
   - Tabela própria "atividades" (não aparece em Serviços, a menos que seja vinculada).
   - Cliente é opcional; não existe campo de valor → nunca gera cobrança.
   - "Vincular como serviço": cria (ou reaproveita) UM registro em Serviços, ligado por
     atividade.servicoId <-> servico.atividadeId. O serviço criado nasce com valor 0. */
const ATV_NOVO = '__novo__';
const normTxt = t => String(t||'').trim().toLowerCase().replace(/\s+/g,' ');

// serviços que ainda não pertencem a nenhuma atividade (ou que já são desta)
function servicosLivresParaVinculo(atvId){
  return STATE.servicos.filter(s => !s.atividadeId || s.atividadeId === atvId);
}
// procura serviço "igual" (mesmo título + mesmo cliente) para evitar duplicar
function servicoEquivalente(titulo, clienteId, atvId){
  const t = normTxt(titulo);
  if(!t) return null;
  return servicosLivresParaVinculo(atvId).find(s => normTxt(s.titulo)===t && (s.clienteId||'')===(clienteId||'')) || null;
}

function openAtividadeModal(id, preset){
  const editing = !!id;
  const current = editing ? findItem('atividades', id) : (preset || {});
  if(editing && !current) return;

  document.getElementById('modal-title').textContent = editing ? 'Editar atividade' : 'Nova atividade';
  document.getElementById('modal-foot').innerHTML = `<button class="btn ghost" id="modal-cancel" type="button">Cancelar</button><button class="btn" id="modal-save" type="submit" form="modal-body">Salvar</button>`;
  document.getElementById('modal-cancel').addEventListener('click', closeModal);
  const modalEl = document.querySelector('.modal');
  if(modalEl) modalEl.classList.remove('modal-lg');

  const resp = Array.isArray(current.responsaveisIds) ? current.responsaveisIds : [];
  const statusOpts = [['aguardando','Aguardando'],['andamento','Em Andamento'],['concluido','Concluído'],['atrasado','Atrasado']];
  const st = current.status || 'aguardando';
  const clienteOpts = [['', 'Sem cliente (atividade interna)'], ...clienteOptions()];
  const equipeChecks = STATE.equipe.length
    ? STATE.equipe.map(p => `<label style="display:inline-flex;align-items:center;gap:6px;margin:0 12px 6px 0;font-weight:500;cursor:pointer">
        <input type="checkbox" class="atv-resp" value="${p.id}" ${resp.includes(p.id)?'checked':''}> ${escHTML(p.nome)}</label>`).join('')
    : '<span style="font-size:12.5px;color:var(--slate)">Nenhum colaborador cadastrado na aba Equipe.</span>';

  document.getElementById('modal-body').innerHTML = `
    <div class="field"><label>Título / descrição *</label>
      <input id="f_atv_titulo" type="text" autocomplete="off" placeholder="Ex: Entrega do projeto à Defensoria" value="${escHTML(current.titulo||'')}"></div>
    <div class="field"><label>Detalhes</label>
      <textarea id="f_atv_descricao" autocomplete="off" placeholder="Detalhes da atividade...">${escHTML(current.descricao||'')}</textarea></div>
    <div class="row-2">
      <div class="field"><label>Prazo</label><input id="f_atv_prazo" type="date" value="${current.prazo||''}"></div>
      <div class="field"><label>Status</label>
        <select id="f_atv_status">${statusOpts.map(([v,l])=>`<option value="${v}" ${st===v?'selected':''}>${l}</option>`).join('')}</select></div>
    </div>
    <div class="field"><label>Responsáveis</label><div>${equipeChecks}</div></div>
    <div class="field"><label>Cliente (opcional)</label>
      <select id="f_atv_cliente">${clienteOpts.map(([v,l])=>`<option value="${v}" ${(current.clienteId||'')===v?'selected':''}>${escHTML(l)}</option>`).join('')}</select>
      <small id="atv-interna-hint" style="color:var(--slate);font-size:12px">Atividade interna da ATEJ: não gera cobrança nem valor financeiro.</small></div>
    <div class="field">
      <label style="display:flex;align-items:center;gap:10px;cursor:pointer">
        <input type="checkbox" id="f_atv_vincular" ${current.servicoId?'checked':''}> Vincular como serviço
      </label>
      <small style="color:var(--slate);font-size:12px">Ativado: a atividade passa a existir também na aba Serviços (sem valor e sem cobrança automática). Desativado: fica somente no Kanban.</small>
    </div>
    <div class="field" id="atv-servico-wrap" style="display:none"><label>Serviço</label>
      <select id="f_atv_servico"></select>
      <small id="atv-servico-hint" style="color:var(--slate);font-size:12px"></small></div>`;

  const elTit = document.getElementById('f_atv_titulo');
  const elCli = document.getElementById('f_atv_cliente');
  const elVinc = document.getElementById('f_atv_vincular');
  const elWrap = document.getElementById('atv-servico-wrap');
  const elSel = document.getElementById('f_atv_servico');
  const elHint = document.getElementById('atv-servico-hint');
  const elHintInterna = document.getElementById('atv-interna-hint');
  let escolhaManual = false;

  const montarServicos = () => {
    // Cliente é opcional: atividade interna também pode ser vinculada a Serviços (nasce com valor 0).
    elHintInterna.style.display = !elCli.value ? '' : 'none';
    elWrap.style.display = elVinc.checked ? '' : 'none';
    if(!elVinc.checked) return;
    const atual = current.servicoId || null;
    const equiv = servicoEquivalente(elTit.value, elCli.value || null, id);
    const livres = servicosLivresParaVinculo(id);
    elSel.innerHTML = `<option value="${ATV_NOVO}">+ Criar novo serviço a partir desta atividade</option>` +
      livres.map(s=>`<option value="${s.id}">${escHTML(s.titulo)} — ${escHTML(servicoCliente(s).toLowerCase()==='sem cliente' ? 'sem cliente' : servicoCliente(s))}</option>`).join('');
    if(!escolhaManual){
      if(atual && livres.some(s=>s.id===atual)) elSel.value = atual;
      else if(equiv) elSel.value = equiv.id;
      else elSel.value = ATV_NOVO;
    }
    elHint.textContent = (!atual && equiv && elSel.value===equiv.id) ? 'Já existe um serviço igual — ele será reaproveitado (nada será duplicado).' : '';
  };
  elSel.addEventListener('change', ()=>{ escolhaManual = true; });
  [elTit, elCli].forEach(el => el.addEventListener('input', montarServicos));
  elCli.addEventListener('change', montarServicos);
  elVinc.addEventListener('change', montarServicos);
  montarServicos();

  document.getElementById('overlay').classList.add('open');
  document.getElementById('modal-save').onclick = () => saveAtividade(editing ? id : null, current);
}

let salvandoAtividade = false;
async function saveAtividade(editId, current){
  if(salvandoAtividade) return; // evita clique duplo → registro duplicado
  const titulo = document.getElementById('f_atv_titulo').value.trim();
  if(!titulo){ toast('Informe o título ou a descrição da atividade.'); return; }
  const vincular = document.getElementById('f_atv_vincular').checked;
  const escolha = document.getElementById('f_atv_servico').value;
  const clienteId = document.getElementById('f_atv_cliente').value || null;

  const prev = editId ? findItem('atividades', editId) : null;
  const obj = prev ? { ...prev } : { id: uid(), dataAbertura: todayISO() };
  obj.titulo = titulo;
  obj.descricao = document.getElementById('f_atv_descricao').value;
  obj.prazo = document.getElementById('f_atv_prazo').value || null;
  obj.status = document.getElementById('f_atv_status').value;
  obj.clienteId = clienteId;
  obj.clienteNome = clienteId ? clienteNome(clienteId) : null;
  obj.responsaveisIds = [...document.querySelectorAll('.atv-resp:checked')].map(c=>c.value);
  if(obj.status==='concluido' && (!prev || prev.status!=='concluido')) obj.dataConclusao = todayISO();
  if(obj.status!=='concluido') obj.dataConclusao = null;

  salvandoAtividade = true;
  const btn = document.getElementById('modal-save'); if(btn) btn.disabled = true;
  try{
    // ----- vínculo com Serviços -----
    const servicoAnterior = obj.servicoId ? findItem('servicos', obj.servicoId) : null;

    if(!vincular){
      if(servicoAnterior){
        const temDinheiro = Number(servicoAnterior.valor||0) > 0 || STATE.financeiro.some(f=>f.servicoId===servicoAnterior.id);
        if(obj.servicoCriadoAqui){
          if(temDinheiro){ toast('Este serviço já tem valor/lançamentos financeiros. Ajuste-o na aba Serviços antes de desvincular.'); return; }
          if(!confirm('Desvincular vai remover o serviço "'+servicoAnterior.titulo+'" da aba Serviços (ele não tem valores). A atividade continua no Kanban. Continuar?')) return;
          STATE.servicos = STATE.servicos.filter(s=>s.id!==servicoAnterior.id);
          await persistDelete('servicos', servicoAnterior.id);
        } else {
          if(!confirm('Desvincular mantém o serviço "'+servicoAnterior.titulo+'" na aba Serviços (ele já existia). Continuar?')) return;
          servicoAnterior.atividadeId = null;
          await persist('servicos');
        }
      }
      obj.servicoId = null; obj.vinculadaServico = false; obj.servicoCriadoAqui = false;
    } else {
      let alvo = null;
      if(escolha && escolha!==ATV_NOVO){ alvo = findItem('servicos', escolha); }
      if(!alvo){
        // quer criar novo: confere se já não existe um igual antes de duplicar
        const equiv = servicoEquivalente(titulo, clienteId, obj.id);
        if(equiv && confirm('Já existe o serviço "'+equiv.titulo+'" para este cliente. Usar o existente em vez de criar outro?')) alvo = equiv;
      }
      if(!alvo){
        alvo = { id: uid(), valor: 0, recorrente:'nao', duracaoRecorrencia:'indeterminado', dataInicio: todayISO(), atividadeId: obj.id };
        STATE.servicos.push(alvo);
        obj.servicoCriadoAqui = true;
      } else if(alvo.id !== obj.servicoId){
        obj.servicoCriadoAqui = false; // vinculou a um serviço que já existia
      }
      // se trocou de serviço, solta o antigo
      if(servicoAnterior && servicoAnterior.id !== alvo.id){ servicoAnterior.atividadeId = null; }
      // copia os dados da atividade (NUNCA mexe em valor/recorrência/financeiro)
      alvo.atividadeId = obj.id;
      alvo.titulo = obj.titulo;
      alvo.descricao = obj.descricao;
      alvo.clienteId = obj.clienteId;
      alvo.clienteNome = obj.clienteNome;
      alvo.status = obj.status;
      alvo.prazoEntrega = obj.prazo;
      alvo.responsavelId = obj.responsaveisIds[0] || '';
      if(obj.status==='concluido') alvo.dataConclusao = obj.dataConclusao || todayISO();
      obj.servicoId = alvo.id; obj.vinculadaServico = true;
      if(!(await persist('servicos'))){ return; }
    }

    // ----- grava a atividade -----
    const eraNova = !prev;
    if(prev){ const i = STATE.atividades.findIndex(x=>x.id===prev.id); if(i>-1) STATE.atividades[i] = obj; }
    else STATE.atividades.push(obj);
    if(!(await persist('atividades'))){
      if(eraNova) STATE.atividades = STATE.atividades.filter(x=>x.id!==obj.id);
      else { const i = STATE.atividades.findIndex(x=>x.id===prev.id); if(i>-1) STATE.atividades[i] = prev; }
      return;
    }
    await sincronizarDemandaDaAtividade(obj);
    toast(eraNova ? 'Atividade criada.' : 'Atividade atualizada.');
    closeModal();
    renderContent();
  } finally {
    salvandoAtividade = false;
    const b = document.getElementById('modal-save'); if(b) b.disabled = false;
  }
}

// Serviço editado na aba Serviços → reflete na atividade ligada a ele
async function sincronizarAtividadeDoServico(sv){
  const a = STATE.atividades.find(x=>x.id===sv.atividadeId);
  if(!a) return;
  a.titulo = sv.titulo;
  a.descricao = sv.descricao;
  a.clienteId = sv.clienteId || null;
  a.clienteNome = servicoCliente(sv)!=='Sem cliente' ? servicoCliente(sv) : null;
  a.status = sv.status;
  a.prazo = sv.prazoEntrega || null;
  a.dataConclusao = sv.status==='concluido' ? (sv.dataConclusao || todayISO()) : null;
  if(sv.responsavelId && !(a.responsaveisIds||[]).includes(sv.responsavelId)){
    a.responsaveisIds = [...(a.responsaveisIds||[]), sv.responsavelId];
  }
  await persist('atividades');
  await sincronizarDemandaDaAtividade(a);
}

/* ---- Demandas ↔ Kanban ----
   demanda.kanbanVinculo: '' (fora do Kanban) | 'card' (a própria demanda é o card) | id de uma
   atividade existente (a atividade é o card; título/descrição/status/prazo/responsável ficam
   espelhados nos dois sentidos). Em qualquer caso, só UM card aparece no quadro. */
async function sincronizarAtividadeDaDemanda(d){
  if(!d.kanbanVinculo || d.kanbanVinculo==='card') return;
  const a = findItem('atividades', d.kanbanVinculo);
  if(!a) return;
  a.titulo = d.titulo;
  a.descricao = d.descricao || '';
  a.status = d.status;
  a.prazo = d.prazo || null;
  a.dataConclusao = d.status==='concluido' ? (a.dataConclusao || todayISO()) : null;
  if(d.responsavelId && !(a.responsaveisIds||[]).includes(d.responsavelId)){
    a.responsaveisIds = [...(a.responsaveisIds||[]), d.responsavelId];
  }
  await persist('atividades');
  // mantém o serviço ligado à atividade em dia (sem mexer em valores/financeiro)
  const sv = a.servicoId ? findItem('servicos', a.servicoId) : null;
  if(sv){
    sv.titulo = a.titulo; sv.descricao = a.descricao; sv.status = a.status; sv.prazoEntrega = a.prazo;
    if(a.status==='concluido') sv.dataConclusao = a.dataConclusao;
    await persist('servicos');
  }
}
async function sincronizarDemandaDaAtividade(a){
  const d = demandaDaAtividade(a.id);
  if(!d) return;
  d.titulo = a.titulo;
  d.descricao = a.descricao || '';
  d.status = a.status;
  d.prazo = a.prazo || null;
  if(!d.responsavelId && a.responsaveisIds && a.responsaveisIds[0]) d.responsavelId = a.responsaveisIds[0];
  await persist('demandas');
}

// Serviço excluído na aba Serviços → a atividade continua, só perde o vínculo
function desvincularAtividadeDoServico(servicoId){
  const a = STATE.atividades.find(x=>x.servicoId===servicoId);
  if(!a) return;
  a.servicoId = null; a.vinculadaServico = false; a.servicoCriadoAqui = false;
  persist('atividades');
}

// Excluir atividade: o serviço vinculado (se houver) é MANTIDO em Serviços
// e volta a aparecer no Kanban como card de serviço.
function excluirAtividade(id){
  const a = findItem('atividades', id);
  if(!a) return;
  const sv = a.servicoId ? findItem('servicos', a.servicoId) : null;
  const dv = demandaDaAtividade(id);
  let msg = sv ? 'Excluir esta atividade? O serviço vinculado continua na aba Serviços.' : 'Excluir esta atividade?';
  if(dv) msg += ' A demanda vinculada continua na aba Demandas (sem card no Kanban).';
  if(!confirm(msg)) return;
  if(dv){ dv.kanbanVinculo = ''; persist('demandas'); }
  if(sv){ sv.atividadeId = null; persist('servicos'); }
  STATE.atividades = STATE.atividades.filter(x=>x.id!==id);
  persistDelete('atividades', id);
  toast('Atividade removida.');
  renderContent();
}

/* ============ APARÊNCIA (modo escuro + cores do menu) ============ */
const DEFAULT_MENU_COLORS = { bg:'#141B3C', accent:'#4157F0' };

function initAparencia(){
  const wrap = document.getElementById('settings-wrap');
  const btn = document.getElementById('btn-settings');
  const panel = document.getElementById('settings-panel');
  const themeToggle = document.getElementById('theme-toggle');
  const menuBgInput = document.getElementById('menu-bg-color');
  const menuAccentInput = document.getElementById('menu-accent-color');
  const resetBtn = document.getElementById('settings-reset');

  // Carrega tema salvo
  const savedTheme = localStorage.getItem('tema') || 'claro';
  document.documentElement.setAttribute('data-theme', savedTheme === 'escuro' ? 'dark' : 'light');
  themeToggle.checked = savedTheme === 'escuro';

  // Carrega cores do menu salvas
  let menuColors = {};
  try{ menuColors = JSON.parse(localStorage.getItem('cores_menu') || '{}'); }catch(e){ menuColors = {}; }
  const bg = menuColors.bg || DEFAULT_MENU_COLORS.bg;
  const accent = menuColors.accent || DEFAULT_MENU_COLORS.accent;
  document.documentElement.style.setProperty('--menu-bg', bg);
  document.documentElement.style.setProperty('--menu-accent', accent);
  menuBgInput.value = bg;
  menuAccentInput.value = accent;

  // Abrir/fechar painel
  btn.addEventListener('click', (e)=>{
    e.stopPropagation();
    panel.classList.toggle('open');
  });
  document.addEventListener('click', (e)=>{
    if(panel.classList.contains('open') && !wrap.contains(e.target)){
      panel.classList.remove('open');
    }
  });

  // Alternar modo escuro
  themeToggle.addEventListener('change', ()=>{
    const isDark = themeToggle.checked;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('tema', isDark ? 'escuro' : 'claro');
  });

  // Alterar cores do menu manualmente
  function salvarCoresMenu(){
    localStorage.setItem('cores_menu', JSON.stringify({ bg: menuBgInput.value, accent: menuAccentInput.value }));
  }
  menuBgInput.addEventListener('input', ()=>{
    document.documentElement.style.setProperty('--menu-bg', menuBgInput.value);
    salvarCoresMenu();
  });
  menuAccentInput.addEventListener('input', ()=>{
    document.documentElement.style.setProperty('--menu-accent', menuAccentInput.value);
    salvarCoresMenu();
  });

  // Restaurar padrão
  resetBtn.addEventListener('click', ()=>{
    document.documentElement.style.setProperty('--menu-bg', DEFAULT_MENU_COLORS.bg);
    document.documentElement.style.setProperty('--menu-accent', DEFAULT_MENU_COLORS.accent);
    menuBgInput.value = DEFAULT_MENU_COLORS.bg;
    menuAccentInput.value = DEFAULT_MENU_COLORS.accent;
    localStorage.removeItem('cores_menu');
    toast('Cores do menu restauradas');
  });
}

/* ============ MENU MOBILE (hambúrguer) ============ */
function initMobileMenu(){
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const btn = document.getElementById('btn-hamburger');
  if(!sidebar || !overlay || !btn) return;
  const open = () => { sidebar.classList.add('open'); overlay.classList.add('open'); };
  const close = () => { sidebar.classList.remove('open'); overlay.classList.remove('open'); };
  btn.addEventListener('click', open);
  overlay.addEventListener('click', close);
  sidebar.addEventListener('click', (e)=>{ if(e.target.closest('.nav-item')) close(); });
}

/* ============ INIT ============ */
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-body').addEventListener('submit', e => e.preventDefault());
initAparencia();
initMobileMenu();
document.getElementById('overlay').addEventListener('click', e=>{ if(e.target.id==='overlay') closeModal(); });
document.getElementById('drawer-overlay').addEventListener('click', e=>{ if(e.target.id==='drawer-overlay') closeClienteDrawer(); });

(async function iniciarPainel(){
  await loadAll();
  await verificarAtrasos();
  await gerarLancamentosRecorrentes();

  // Os dados de exemplo (Grupo Horizonte, Arielle Rocha, etc.) só são criados
  // UMA VEZ, na primeira vez que alguém usa o painel — depois disso, mesmo que
  // a lista fique vazia (porque alguém apagou tudo), não volta a criar de novo.
  const jaSemeado = localStorage.getItem('atej_dados_exemplo_criados');
  if(!jaSemeado && STATE.equipe.length===0 && STATE.clientes.length===0){
    STATE.equipe = [
      { id:uid(), nome:'Arielle Rocha', cargo:'Gestora de operações', setor:'Operações', email:'arielle@atej.com.br', telefone:'(85) 99110-2040', dataEntrada:'2024-02-01', status:'ativo' },
      { id:uid(), nome:'Lucas Costa', cargo:'Analista de processos', setor:'Operações', email:'lucas@atej.com.br', telefone:'', dataEntrada:'', status:'ativo' },
      { id:uid(), nome:'Breno Viana', cargo:'Analista financeiro', setor:'Financeiro', email:'breno@atej.com.br', telefone:'', dataEntrada:'', status:'ativo' },
      { id:uid(), nome:'João Silva', cargo:'Consultor de serviços', setor:'Comercial', email:'joao@atej.com.br', telefone:'', dataEntrada:'', status:'ferias' },
    ];
    await persist('equipe');

    const respId = nome => { const e = STATE.equipe.find(x=>x.nome===nome); return e ? e.id : ''; };
    STATE.clientes = [
      { id:uid(), nome:'Grupo Horizonte', cnpj:'12.345.678/0001-90', contatoNome:'Mariana Lopes', telefone:'(85) 98842-2100', email:'mariana@grupohorizonte.com.br', cidade:'Fortaleza, CE', status:'ativo', responsavelId:respId('Arielle Rocha'), clienteDesde:'2025-03-01', receitaMensal:8450, proximaAcaoTitulo:'Revisar contrato anual hoje, às 16h', proximaAcaoObs:'Acompanhamento operacional do cliente', observacoes:'' },
      { id:uid(), nome:'Clínica Serene', cnpj:'23.456.789/0001-12', contatoNome:'Felipe Martins', telefone:'(85) 99128-4530', email:'felipe@clinicaserene.com.br', cidade:'Fortaleza, CE', status:'implantacao', responsavelId:respId('Lucas Costa'), clienteDesde:'2026-07-01', receitaMensal:6800, proximaAcaoTitulo:'Entrega da implantação em 29 de agosto', proximaAcaoObs:'Finalizar onboarding e configuração inicial', observacoes:'' },
      { id:uid(), nome:'Mercado Central', cnpj:'34.567.890/0001-45', contatoNome:'Roberto Lima', telefone:'(88) 99774-1182', email:'roberto@mercadocentral.com.br', cidade:'Sobral, CE', status:'pendente', responsavelId:respId('Arielle Rocha'), clienteDesde:'2025-11-01', receitaMensal:4200, proximaAcaoTitulo:'Cobrar documentos fiscais pendentes', proximaAcaoObs:'Aguardando retorno do cliente', observacoes:'' },
      { id:uid(), nome:'Aurea Consultoria', cnpj:'45.678.901/0001-78', contatoNome:'Lívia Rocha', telefone:'(85) 98561-9023', email:'livia@aureaconsultoria.com.br', cidade:'Fortaleza, CE', status:'ativo', responsavelId:respId('João Silva'), clienteDesde:'2025-05-01', receitaMensal:5900, proximaAcaoTitulo:'Reunião de resultado em 3 de setembro', proximaAcaoObs:'Apresentação de indicadores mensais', observacoes:'' },
      { id:uid(), nome:'Bela Vista Hotel', cnpj:'56.789.012/0001-34', contatoNome:'Camila Alves', telefone:'(85) 99402-6630', email:'camila@belavistahotel.com.br', cidade:'Fortaleza, CE', status:'pendente', responsavelId:respId('João Silva'), clienteDesde:'2026-08-01', receitaMensal:0, proximaAcaoTitulo:'Aguardar aprovação da proposta comercial', proximaAcaoObs:'Proposta enviada, sem retorno ainda', observacoes:'' },
    ];
    await persist('clientes');

    const grupoHorizonte = STATE.clientes.find(c=>c.nome==='Grupo Horizonte').id;
    const clinicaSerene = STATE.clientes.find(c=>c.nome==='Clínica Serene').id;
    const aurea = STATE.clientes.find(c=>c.nome==='Aurea Consultoria').id;
    STATE.servicos = [
      { id:uid(), clienteId:grupoHorizonte, clienteNome:'Grupo Horizonte', titulo:'Gestão e acompanhamento', descricao:'Acompanhamento mensal de indicadores e resultados.', valor:8450, status:'andamento', dataInicio:'2025-03-01', prazoEntrega:'', responsavelId:respId('Arielle Rocha') },
      { id:uid(), clienteId:clinicaSerene, clienteNome:'Clínica Serene', titulo:'Implantação do sistema', descricao:'Configuração inicial e treinamento da equipe.', valor:6800, status:'andamento', dataInicio:'2026-07-01', prazoEntrega:'2026-08-29', responsavelId:respId('Lucas Costa') },
    ];
    await persist('servicos');

    STATE.financeiro = [
      { id:uid(), clienteId:grupoHorizonte, clienteNome:'Grupo Horizonte', tipo:'receita', descricao:'Mensalidade – Grupo Horizonte', valor:8450, vencimento:'2026-08-05', status:'pago', dataPagamento:'2026-08-05' },
      { id:uid(), clienteId:aurea, clienteNome:'Aurea Consultoria', tipo:'receita', descricao:'Mensalidade – Aurea Consultoria', valor:5900, vencimento:'2026-09-05', status:'pendente', dataPagamento:'' },
    ];
    await persist('financeiro');

    localStorage.setItem('atej_dados_exemplo_criados', '1');
  }

  render();
})();

/* ============ ATUALIZAÇÃO AUTOMÁTICA DE DATA ============ */
// Mantém a data do topo, o "hoje" dos calendários e os status (atrasado/pago etc.)
// sempre corretos, mesmo se o painel ficar aberto passando da meia-noite ou de mês.
let lastKnownDate = todayISO();

function atualizarDataTopo(){
  document.getElementById('topbar-date').textContent =
    new Date().toLocaleDateString('pt-BR',{weekday:'long', day:'2-digit', month:'long', year:'numeric'});
}

function verificarMudancaDeData(){
  const agora = todayISO();
  if(agora !== lastKnownDate){
    lastKnownDate = agora;
    atualizarDataTopo();
    (async () => {
      await verificarAtrasos();
      await gerarLancamentosRecorrentes();
      render(); // reprocessa tudo (hoje no calendário, atrasos, opções de mês, etc.)
    })();
  }
}

// Verifica a cada minuto...
setInterval(verificarMudancaDeData, 60000);
// ...e também assim que a aba volta a ficar visível (ex.: usuário deixou aberta a noite toda)
document.addEventListener('visibilitychange', ()=>{
  if(!document.hidden) verificarMudancaDeData();
});