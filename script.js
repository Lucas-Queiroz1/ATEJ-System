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
ICONS.usuarios = ICONS.shield; // ícone do item de menu "Usuários" (admin)

/* ============ ESTADO ============ */
const STATE = { clientes: [], servicos: [], financeiro: [], equipe: [], compromissos: [], documentos: [], usuarios: [] };
let currentModule = 'dashboard';
let searchTerm = '';
let filterValue = 'todos';
let finMes = null; // {y, m} — mês selecionado na tela Financeiro (m é 0-indexado)
let dashMes = null; // {y, m} — mês selecionado na Visão Geral (m é 0-indexado)
let dashSelectedDay = null; // dia (número) selecionado no calendário da Visão Geral
let relatoriosMes = null; // {y, m} — mês selecionado na tela Relatórios

const KEYS = { clientes:'clientes_lista', servicos:'servicos_lista', financeiro:'financeiro_lancamentos', equipe:'equipe_colaboradores', compromissos:'compromissos_lista', documentos:'documentos_lista' };

const MODULES = [
  { id:'dashboard', label:'Visão geral' },
  { id:'kanban', label:'Kanban' },
  { id:'clientes', label:'Clientes' },
  { id:'equipe', label:'Equipe' },
  { id:'servicos', label:'Serviços' },
  { id:'financeiro', label:'Financeiro' },
  { id:'documentos', label:'Documentos' },
  { id:'relatorios', label:'Relatórios' },
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
const TABLES = { clientes:'clientes', servicos:'servicos', financeiro:'financeiro', equipe:'equipe', compromissos:'compromissos', documentos:'documentos' };
const EQUIPE_BUCKET = 'avatars'; // bucket do Supabase Storage onde ficam as fotos dos colaboradores
let equipeFotoFile = null; // arquivo de foto escolhido no modal de colaborador (temporário, até salvar)

async function loadAll(){
  for(const mod of ['clientes','servicos','financeiro','equipe','compromissos','documentos']){
    try{
      const { data, error } = await window.sb.from(TABLES[mod]).select('*');
      if(error){ console.error('Erro ao carregar '+mod, error); STATE[mod] = []; }
      else STATE[mod] = data || [];
    }catch(e){ console.error('Falha ao carregar '+mod, e); STATE[mod] = []; }
  }
}
// Estratégia simples: sempre que algo muda, regravamos a tabela inteira daquele
// tipo com o que está em STATE agora. Funciona bem para o tamanho de dados de
// uma pequena/média empresa e evita ter que reescrever cada tela uma por uma.
async function persist(mod){
  try{
    const { error: delError } = await window.sb.from(TABLES[mod]).delete().neq('id', '__nunca__');
    if(delError){ console.error('Erro ao limpar '+mod, delError); return; }
    if(STATE[mod].length){
      const { error: insError } = await window.sb.from(TABLES[mod]).insert(STATE[mod]);
      if(insError) console.error('Erro ao salvar '+mod, insError);
    }
  }catch(e){ console.error('Falha ao salvar '+mod, e); }
}

/* ============ HELPERS ============ */
const uid = () => Math.random().toString(36).slice(2,10);
const fmtBRL = n => 'R$ ' + Number(n||0).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
const fmtDate = iso => { if(!iso) return '—'; const [y,m,d]=iso.split('-'); return `${d}/${m}/${y}`; };
const todayISO = () => new Date().toISOString().slice(0,10);
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toast._t); toast._t = setTimeout(()=>t.classList.remove('show'), 2400);
}
function clienteNome(id){ const c = STATE.clientes.find(x=>x.id===id); return c ? c.nome : '—'; }
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
const SEARCH_PLACEHOLDER = { clientes:'Buscar cliente...', servicos:'Buscar serviço...', financeiro:'Buscar lançamento...', equipe:'Buscar por nome, função ou setor...', kanban:'Buscar atividades ou clientes...' };
const NEW_LABEL = { clientes:'Novo Cliente', servicos:'Novo Serviço', financeiro:'Novo Lançamento', equipe:'Novo Colaborador', kanban:'Nova Atividade' };
const FILTER_OPTIONS = {
  servicos: [['todos','Todos os status'],['aguardando','Aguardando'],['andamento','Em Andamento'],['concluido','Concluído'],['atrasado','Atrasado']],
  financeiro: [['todos','Todos'],['pendente','Pendente'],['pago','Pago'],['atrasado','Atrasado']],
  equipe: [['todos','Todos os status'],['ativo','Ativo'],['ferias','Férias'],['inativo','Inativo']],
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
    newBtn.onclick = () => openModal('servicos');
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
    newBtn.onclick = () => openModal(currentModule==='kanban' ? 'servicos' : currentModule);
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
  if(STATE.servicos.length===0) return `<div class="empty" style="padding:30px 0">Nenhuma atividade cadastrada ainda.</div>`;
  return `<div class="dash-flow-board">${cols.map(col=>{
    const all = STATE.servicos.filter(s=>s.status===col.status);
    const items = all.slice(0,3);
    return `<div class="dash-flow-col">
      <div class="dash-flow-col-head"><span class="kanban-dot ${col.dot}"></span>${col.label}<span class="kanban-count">${all.length}</span></div>
      <div class="dash-flow-col-body">${items.map(x=>kanbanCardHTML(x,true)).join('') || '<div class="empty" style="padding:14px 0;font-size:12px">Nenhuma atividade</div>'}</div>
    </div>`;
  }).join('')}</div>`;
}
function dashEquipeHTML(){
  const items = [...STATE.equipe].sort((a,b)=>(b.atividades||0)-(a.atividades||0)).slice(0,4);
  if(!items.length) return `<div class="empty" style="padding:20px 0">Nenhum colaborador cadastrado.</div>`;
  return items.map(x=>{
    const prazo = Number(x.noPrazo)||0;
    const prazoColor = prazo>=90 ? 'green' : (prazo>=75 ? 'amber' : 'red');
    return `<div class="dash-team-row" data-team-view="${x.id}">
      ${teamAvatarHTML(x,'width:34px;height:34px;font-size:12px')}
      <div class="dash-team-info"><strong>${x.nome}</strong><span>${x.cargo||'—'}</span></div>
      <div class="dash-team-meta"><b>${x.atividades||0} atividades</b><span class="dash-team-prazo ${prazoColor}">${prazo}% no prazo</span></div>
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
    .map(s=>({date:s.prazoEntrega, hora:'', title:'Entrega: '+s.titulo, sub:clienteNome(s.clienteId), mod:'servicos', id:s.id}));
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
    date:s.prazoEntrega, hora:'', title:'Entrega: '+s.titulo, sub:clienteNome(s.clienteId), mod:'servicos', id:s.id
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
      <div class="panel-head"><div><h3>Equipe</h3><div class="panel-sub">Desempenho e carga atual</div></div><a data-goto="equipe">Ver equipe →</a></div>
      ${dashEquipeHTML()}
    </div>
    <div class="panel">
      <div class="panel-head"><div><h3>Próximos compromissos</h3><div class="panel-sub">Agenda operacional</div></div><button class="icon-btn" id="dash-add-compromisso" title="Novo compromisso">${ICONS.plus}</button></div>
      ${dashCompromissosHTML()}
    </div>
  </div>`;
}
function servicoStatusLabel(s){ return {aguardando:'Aguardando', andamento:'Em Andamento', concluido:'Concluído', atrasado:'Atrasado'}[s] || s; }
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
function kanbanItems(){
  let items = [...STATE.servicos];
  if(searchTerm.trim()){
    const q = searchTerm.trim().toLowerCase();
    items = items.filter(x => (x.titulo||'').toLowerCase().includes(q) || clienteNome(x.clienteId).toLowerCase().includes(q));
  }
  return items;
}

function renderKanban(){
  const items = kanbanItems();
  if(STATE.servicos.length===0){
    return emptyState('Nenhuma atividade ainda','Crie um serviço para vê-lo aparecer aqui como um card no quadro.');
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
  const progresso = x.status==='concluido' ? 100 : Math.max(0, Math.min(100, Number(x.progresso)||0));
  const respId = x.responsavelId;
  const respNome = respId ? responsavelNome(respId) : '';
  const avatarHTML = respId && respNome
    ? `<div class="kanban-avatar" style="background:${avatarColor(respId)}" title="${respNome}">${initials(respNome)}</div>`
    : '';
  const atrasadoBadge = x.status==='atrasado' ? `<div class="kanban-late">${ICONS.clock}Atrasado</div>` : '';
  const dragAttr = compact ? '' : 'draggable="true"';
  const clickAttr = compact ? 'data-goto="kanban"' : '';
  const actionsHTML = compact ? '' : `
        <div class="row-actions">
          <button class="icon-btn kanban-mini-btn" data-edit="servicos" data-id="${x.id}" title="Editar">${ICONS.edit}</button>
          <button class="icon-btn danger kanban-mini-btn" data-del="servicos" data-id="${x.id}" title="Excluir">${ICONS.trash}</button>
        </div>`;
  return `
    <div class="kanban-card${compact?' compact':''}" ${dragAttr} data-kanban-id="${x.id}" ${clickAttr}>
      <div class="kanban-card-top">
        <span class="kanban-badge">${clienteNome(x.clienteId)}</span>${actionsHTML}
      </div>
      <div class="kanban-card-title">${x.titulo}</div>
      <div class="team-progress-track"><div class="team-progress-fill" style="width:${progresso}%;background:var(--blue)"></div></div>
      ${atrasadoBadge}
      <div class="kanban-card-foot">
        <span class="kanban-date">${ICONS.clock}${fmtDate(x.prazoEntrega)}</span>
        ${avatarHTML}
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
      const item = findItem('servicos', id);
      const newStatus = col.dataset.kanbanCol;
      if(item && item.status !== newStatus){
        item.status = newStatus;
        persist('servicos');
        toast('Atividade movida para "'+servicoStatusLabel(newStatus)+'".');
        refreshKanban();
      }
    });
  });
  document.querySelectorAll('[data-kanban-add]').forEach(btn=>{
    btn.addEventListener('click', ()=> openModal('servicos', null, { status: btn.dataset.kanbanAdd }));
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
    const acaoTitulo = x.proximaAcaoTitulo || '';
    return `
    <tr>
      <td>
        <div class="client-name-cell">
          <div class="team-avatar" style="background:${color}">${initials(x.nome)}</div>
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
      <td class="client-action-cell ${acaoTitulo?'':'muted'}">${acaoTitulo || '—'}</td>
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

/* ---- Painel lateral (drawer) de detalhes do cliente ---- */
function openClienteDrawer(id){
  const x = findItem('clientes', id);
  if(!x) return;
  const color = avatarColor(x.id);
  const servicos = clienteServicos(x.id);
  const lancamentos = clienteFinanceiro(x.id);

  const servicosHTML = servicos.length ? servicos.slice(0,4).map(s=>`
    <div class="drawer-list-item">
      <div class="drawer-list-icon">${ICONS.wrench}</div>
      <div class="drawer-list-info"><strong>${s.titulo}</strong><span class="pill ${s.status}" style="margin-top:3px">${servicoStatusLabel(s.status)}</span></div>
      <div class="drawer-list-value">${fmtBRL(s.valor)}</div>
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

  const nextActionHTML = x.proximaAcaoTitulo ? `
    <div class="next-action-box">
      <div class="next-action-head"><span>Próxima ação</span><a id="drawer-nova-atividade-2">Criar atividade</a></div>
      <div class="next-action-title">${x.proximaAcaoTitulo}</div>
      ${x.proximaAcaoObs ? `<div class="next-action-sub">${x.proximaAcaoObs}</div>` : ''}
    </div>` : '';

  document.getElementById('client-drawer').innerHTML = `
    <div class="drawer-inner">
      <div class="drawer-head">
        <div class="drawer-head-left">
          <div class="team-avatar" style="background:${color}">${initials(x.nome)}</div>
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
        <div class="panel-head" style="margin-bottom:8px"><div class="drawer-card-title" style="margin:0">Serviços e contratos</div><a data-goto="servicos">Ver todos →</a></div>
        ${servicosHTML}
      </div>
      <div class="drawer-card">
        <div class="panel-head" style="margin-bottom:8px"><div class="drawer-card-title" style="margin:0">Financeiro</div><a data-goto="financeiro">Ver todos →</a></div>
        ${finHTML}
      </div>
      ${x.observacoes ? `<div class="field"><label>Observações</label><div class="view-value">${x.observacoes}</div></div>` : ''}
    </div>`;

  document.getElementById('drawer-overlay').classList.add('open');
  document.getElementById('drawer-close').addEventListener('click', closeClienteDrawer);
  const openNovaAtividade = () => { closeClienteDrawer(); openModal('servicos', null, { clienteId: x.id }); };
  document.getElementById('drawer-nova-atividade').addEventListener('click', openNovaAtividade);
  const link2 = document.getElementById('drawer-nova-atividade-2');
  if(link2) link2.addEventListener('click', openNovaAtividade);
  document.getElementById('drawer-editar').addEventListener('click', ()=>{ closeClienteDrawer(); openModal('clientes', x.id); });
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
  const media = total ? Math.round(STATE.equipe.reduce((s,x)=>s+(Number(x.noPrazo)||0),0)/total) : 0;
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
      <div class="mini-label">${ICONS.dollar}<span>Média no prazo</span></div>
      <div class="mini-value">${media}%</div>
    </div>
  </div>
  <div class="team-panel">
    <div class="team-panel-head">
      <div><h3>Equipe e funções</h3><div class="panel-sub">Distribuição, desempenho e disponibilidade</div></div>
      <button class="btn" id="equipe-new-btn">${ICONS.plus}<span>Novo colaborador</span></button>
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
  if(items.length===0) return `<div class="empty"><strong>Nenhum colaborador encontrado</strong>Cadastre os membros da equipe para acompanhar atividades e carga de trabalho.</div>`;

  return `<div class="team-grid">${items.map(x=>{
    const color = avatarColor(x.id);
    const carga = Math.max(0, Math.min(100, Number(x.carga)||0));
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
      <div class="team-stats">
        <div class="team-stat"><b>${x.atividades||0}</b><span>Atividades</span></div>
        <div class="team-stat"><b>${x.noPrazo||0}%</b><span>No prazo</span></div>
      </div>
      <div>
        <div class="team-progress-label"><span>Carga de trabalho</span><span>${carga}%</span></div>
        <div class="team-progress-track"><div class="team-progress-fill" style="width:${carga}%;background:${color}"></div></div>
      </div>
      <div class="team-card-foot">
        <div class="team-card-actions">
          <button class="icon-btn" data-edit="equipe" data-id="${x.id}" title="Editar">${ICONS.edit}</button>
          <button class="icon-btn danger" data-del="equipe" data-id="${x.id}" title="Excluir">${ICONS.trash}</button>
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
    items = items.filter(x => (x.titulo||'').toLowerCase().includes(q) || clienteNome(x.clienteId).toLowerCase().includes(q));
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
    const progresso = Math.max(0, Math.min(100, Number(x.progresso)||0));
    const color = avatarColor(x.clienteId || x.id);
    return `
    <div class="servico-card">
      <div class="servico-card-top">
        <div class="servico-icon ${x.status}">${ICONS.wrench}</div>
        <span class="pill ${x.status}">${servicoStatusLabel(x.status)}</span>
      </div>
      <div>
        <div class="servico-title">${x.titulo}</div>
        <div class="servico-client">
          <span class="mini-avatar" style="background:${color}">${initials(clienteNome(x.clienteId))}</span>
          <span>${clienteNome(x.clienteId)}</span>
        </div>
      </div>
      <div class="servico-value-row">
        <div class="servico-value">${fmtBRL(x.valor)}</div>
        <div class="servico-deadline">${x.prazoEntrega ? 'Entrega '+fmtDate(x.prazoEntrega) : 'Sem prazo definido'}</div>
      </div>
      <div>
        <div class="servico-progress-label"><span>Progresso</span><span>${progresso}%</span></div>
        <div class="team-progress-track"><div class="team-progress-fill" style="width:${progresso}%;background:${color}"></div></div>
      </div>
      <div class="servico-card-foot">
        <button class="icon-btn" data-edit="servicos" data-id="${x.id}" title="Editar">${ICONS.edit}</button>
        <button class="icon-btn danger" data-del="servicos" data-id="${x.id}" title="Excluir">${ICONS.trash}</button>
      </div>
    </div>`;
  }).join('')}</div>`;

  return statsHTML + cardsHTML;
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
  const totalReceber = monthReceitas.reduce((s,x)=>s+Number(x.valor||0),0);
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
  const prevTotalReceber = prevReceitas.reduce((s,x)=>s+Number(x.valor||0),0);
  const prevTotalRecebido = prevReceitas.filter(f=>f.status==='pago').reduce((s,x)=>s+Number(x.valor||0),0);
  const prevDespesas = prevMonthItems.filter(f=>f.tipo==='despesa');
  const prevTotalDespesas = prevDespesas.reduce((s,x)=>s+Number(x.valor||0),0);
  const prevTotalDespesasPago = prevDespesas.filter(f=>f.status==='pago').reduce((s,x)=>s+Number(x.valor||0),0);
  const prevSaldo = prevTotalRecebido - prevTotalDespesasPago;
  const pctReceber = finTrendPct(totalReceber, prevTotalReceber);
  const pctDespesas = finTrendPct(totalDespesas, prevTotalDespesas);
  const pctSaldo = finTrendPct(saldo, prevSaldo);

  let items = [...monthItems];
  if(searchTerm.trim()){
    const q = searchTerm.trim().toLowerCase();
    items = items.filter(x => (x.descricao||'').toLowerCase().includes(q) || (x.clienteNome||'').toLowerCase().includes(q));
  }
  if(filterValue && filterValue!=='todos') items = items.filter(x=>x.status===filterValue);
  items.sort((a,b)=>(b.vencimento||'').localeCompare(a.vencimento||''));

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
      <div class="fin-card-sub">${monthReceitas.length} lançamento${monthReceitas.length===1?'':'s'} no mês</div>
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

  const panelOpen = `
  <div class="panel fin-panel">
    <div class="panel-head">
      <div><h3>Movimentações financeiras</h3><div class="panel-sub">Lançamentos com vencimento em ${monthOptions.find(o=>o.y===finMes.y&&o.m===finMes.m).label}</div></div>
      <button class="btn" id="fin-new-btn">${ICONS.plus}<span>Novo lançamento</span></button>
    </div>`;

  if(items.length===0){
    return headerHTML + cardsHTML + panelOpen + `<div class="empty"><strong>Nenhum lançamento neste mês</strong>Registre valores recebidos e pagamentos a receber.</div></div>`;
  }

  const rows = items.map(x=>{
    const info = finStatusInfo(x);
    const isDespesa = x.tipo==='despesa';
    return `
    <tr>
      <td><span class="link-name" data-view="financeiro" data-id="${x.id}">${x.descricao}</span></td>
      <td><span class="fin-tipo">${isDespesa?'Despesa':'Receita'}</span></td>
      <td>${fmtDate(x.vencimento)}</td>
      <td><span class="pill ${info.cls}">${info.label}</span></td>
      <td class="val ${isDespesa?'neg':'pos'}">${isDespesa?'- ':'+ '}${fmtBRL(Math.abs(x.valor))}</td>
      <td><div class="row-actions">
        ${x.status!=='pago' ? `<button class="icon-btn success" data-pay="financeiro" data-id="${x.id}" title="Marcar como pago">${ICONS.check}</button>` : ''}
        <button class="icon-btn" data-edit="financeiro" data-id="${x.id}" title="Editar">${ICONS.edit}</button>
        <button class="icon-btn danger" data-del="financeiro" data-id="${x.id}" title="Excluir">${ICONS.trash}</button>
      </div></td>
    </tr>`;
  }).join('');

  return headerHTML + cardsHTML + panelOpen + `
    <div class="fin-table-wrap">
      <table class="fin-datatable">
        <thead><tr><th>Descrição</th><th>Tipo</th><th>Vencimento</th><th>Status</th><th>Valor</th><th>Ações</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
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
  const idsServicos = new Set(STATE.servicos.filter(s=>{
    if(!s.prazoEntrega) return false;
    const [yy,mm] = s.prazoEntrega.split('-').map(Number);
    return yy===y && (mm-1)===m;
  }).map(s=>s.clienteId).filter(Boolean));
  return idsServicos.size;
}
function relProdutividadeMedia(){
  if(!STATE.equipe.length) return 0;
  const soma = STATE.equipe.reduce((s,x)=>s+Number(x.noPrazo||0),0);
  return Math.round((soma/STATE.equipe.length)*10)/10;
}
function relKPIs(y, m){
  const receita = dashRecebidoMes(y, m);
  const dPrev = new Date(y, m-1, 1);
  const receitaPrev = dashRecebidoMes(dPrev.getFullYear(), dPrev.getMonth());
  const concluidosLista = relServicosConcluidosMes(y, m);
  const concluidos = concluidosLista.length;
  const noPrazoCount = concluidosLista.filter(s=>!s.prazoEntrega || !s.dataConclusao || s.dataConclusao<=s.prazoEntrega).length;
  const pctNoPrazo = concluidos ? Math.round((noPrazoCount/concluidos)*100) : 0;
  const concluidosPrevLista = relServicosConcluidosMes(dPrev.getFullYear(), dPrev.getMonth());
  const produtividade = relProdutividadeMedia();
  const clientesAtendidos = relClientesAtendidosMes(y, m);
  const totalClientes = STATE.clientes.length;
  const pctCarteira = totalClientes ? Math.round((clientesAtendidos/totalClientes)*100) : 0;
  return {
    receita, receitaPct: finTrendPct(receita, receitaPrev),
    concluidos, pctNoPrazo, concluidosPct: finTrendPct(concluidos, concluidosPrevLista.length),
    produtividade,
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
    receita: dashRecebidoMes(mo.y, mo.m),
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
    setores[s] = (setores[s]||0) + Number(x.atividades||0);
  });
  const entries = Object.entries(setores).filter(([,v])=>v>0);
  const total = entries.reduce((s,[,v])=>s+v,0);
  const cores = ['#4157F0','#7C3AED','#16A34A','#F5A524','#0EA5E9','#DB2777'];
  return { total, items: entries.map(([nome,v],i)=>({ nome, v, pct: total ? Math.round((v/total)*100) : 0, cor: cores[i%cores.length] })) };
}
function relDonutHTML(){
  const { total, items } = relSetorData();
  if(!total) return `<div class="empty" style="padding:30px 0">Cadastre atividades da equipe para ver a distribuição.</div>`;
  let acc = 0;
  const stops = items.map(it=>{
    const start = acc/total*360; acc += it.v; const end = acc/total*360;
    return `${it.cor} ${start}deg ${end}deg`;
  }).join(', ');
  return `
  <div class="rel-donut-row">
    <div class="rel-donut" style="background:conic-gradient(${stops})">
      <div class="rel-donut-center"><strong>${total}</strong><span>atividades</span></div>
    </div>
    <div class="rel-legend">${items.map(it=>`
      <div class="rel-legend-row"><i class="dot" style="background:${it.cor}"></i><span>${it.nome}</span><b>${it.pct}%</b></div>
    `).join('')}</div>
  </div>`;
}
const RELATORIOS_DISPONIVEIS = [
  { id:'gerencial', icon:'trend', cor:'blue', titulo:'Relatório gerencial mensal', sub:'Resultados operacionais, financeiros e da equipe' },
  { id:'equipe', icon:'people', cor:'violet', titulo:'Desempenho da equipe', sub:'Produtividade, prazos, carga e retrabalho' },
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
        <div class="kpi-value">${k.produtividade}%</div>
        <div class="kpi-label">Produtividade média</div>
        <div class="kpi-compare">considerando toda a equipe</div>
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
        <div class="panel-head"><div><h3>Distribuição por setor</h3><div class="panel-sub">Participação nas atividades</div></div><span class="panel-head-icon violet">${ICONS.pie}</span></div>
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
      ['Produtividade média', k.produtividade],
      ['Clientes atendidos', k.clientesAtendidos],
    ]));
  } else if(tipo==='equipe'){
    relDownload('desempenho-equipe.csv', relCSV([
      ['Nome','Cargo','Setor','Atividades','% no prazo','Carga'],
      ...STATE.equipe.map(x=>[x.nome,x.cargo,x.setor,x.atividades||0,x.noPrazo||0,x.carga||0])
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
  const rows = STATE.usuarios.map(u=>{
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
    </tr>`;
  }).join('');
  return `
  <div class="table-wrap"><table>
    <thead><tr><th>Nome</th><th>Papel</th><th>Cadastrado em</th></tr></thead>
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
  }
}

function attachUsuariosEvents(){
  const newBtn = document.getElementById('usuario-new-btn');
  if(newBtn) newBtn.onclick = openUsuarioModal;
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
      STATE[mod] = STATE[mod].filter(x=>x.id!==id);
      persist(mod);
      toast('Registro removido.');
      renderContent();
    });
  });
  document.querySelectorAll('[data-edit]').forEach(btn=>{
    btn.addEventListener('click', ()=> {
      if(btn.dataset.edit==='documentos') openDocumentoModal(btn.dataset.id);
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
  document.querySelectorAll('[data-view]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if(btn.dataset.view==='clientes') openClienteDrawer(btn.dataset.id);
      else openViewModal(btn.dataset.view, btn.dataset.id);
    });
  });
  const finNewBtn = document.getElementById('fin-new-btn');
  if(finNewBtn) finNewBtn.onclick = () => openModal('financeiro');
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
    btn.addEventListener('click', ()=>{
      const item = findItem('financeiro', btn.dataset.id);
      if(item){ item.status='pago'; item.dataPagamento = todayISO(); persist('financeiro'); toast('Pagamento marcado como pago.'); renderContent(); }
    });
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
    {k:'proximaAcaoTitulo', label:'Próxima ação', type:'text', placeholder:'Ex: Revisar contrato anual hoje, às 16h'},
    {k:'proximaAcaoObs', label:'Detalhe da próxima ação', type:'text', placeholder:'Ex: Acompanhamento operacional do cliente'},
    {k:'observacoes', label:'Observações', type:'textarea'},
  ],
  servicos: () => [
    {k:'clienteId', label:'Cliente', type:'select', options: clienteOptions()},
    {k:'titulo', label:'Título', type:'text', required:true, placeholder:'Ex: Desenvolvimento de Site'},
    {k:'descricao', label:'Descrição', type:'textarea'},
    {k:'valor', label:'Valor (R$)', type:'number'},
    {k:'status', label:'Status', type:'select', options:[['aguardando','Aguardando'],['andamento','Em Andamento'],['concluido','Concluído'],['atrasado','Atrasado']]},
    {k:'dataInicio', label:'Data de Início', type:'date'},
    {k:'prazoEntrega', label:'Prazo de Entrega', type:'date'},
    {k:'responsavelId', label:'Responsável', type:'select', options: equipeOptions()},
    {k:'progresso', label:'Progresso (%)', type:'number', placeholder:'0'},
  ],
  financeiro: () => [
    {k:'clienteId', label:'Cliente', type:'select', options: clienteOptions()},
    {k:'tipo', label:'Tipo', type:'select', options:[['receita','Receita'],['despesa','Despesa']]},
    {k:'descricao', label:'Descrição', type:'text', required:true, placeholder:'Ex: Parcela 1 – Projeto X'},
    {k:'valor', label:'Valor (R$)', type:'number', required:true},
    {k:'vencimento', label:'Vencimento', type:'date', required:true},
    {k:'status', label:'Status', type:'select', options:[['pendente','Pendente'],['pago','Pago'],['atrasado','Atrasado']]},
    {k:'dataPagamento', label:'Data do Pagamento', type:'date'},
  ],
  equipe: () => [
    {k:'nome', label:'Nome completo', type:'text', required:true, placeholder:'Nome completo'},
    {k:'cargo', label:'Cargo/Função', type:'text', placeholder:'Ex: Analista de processos'},
    {k:'setor', label:'Setor', type:'text', placeholder:'Ex: Operações'},
    {k:'email', label:'E-mail', type:'text', placeholder:'email@atej.com.br'},
    {k:'telefone', label:'Telefone', type:'text', placeholder:'(00) 99999-9999'},
    {k:'dataEntrada', label:'Na empresa desde', type:'date'},
    {k:'status', label:'Status', type:'select', options:[['ativo','Ativo'],['ferias','Férias'],['inativo','Inativo']]},
    {k:'atividades', label:'Atividades (quantidade)', type:'number'},
    {k:'noPrazo', label:'No prazo (%)', type:'number'},
    {k:'carga', label:'Carga de trabalho (%)', type:'number'},
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
};
const CLIENTE_FORM_SECTIONS = [
  { title:'Dados da empresa', icon:ICONS.people, rows:[['nome'],['cnpj','cidade']] },
  { title:'Contato', icon:ICONS.mail, rows:[['contatoNome','telefone'],['email']] },
  { title:'Relacionamento comercial', icon:ICONS.dollar, rows:[['status','responsavelId'],['clienteDesde','receitaMensal']] },
  { title:'Próxima ação', icon:ICONS.clock, rows:[['proximaAcaoTitulo'],['proximaAcaoObs']] },
  { title:'Observações', icon:ICONS.doc, rows:[['observacoes']] },
];
const FORM_LAYOUT = {
  clientes: [['nome','cnpj'],['contatoNome','telefone'],['email','cidade'],['status','responsavelId'],['clienteDesde','receitaMensal'],['proximaAcaoTitulo'],['proximaAcaoObs'],['observacoes']],
  servicos: [['clienteId'],['titulo'],['descricao'],['valor','status'],['dataInicio','prazoEntrega'],['responsavelId','progresso']],
  financeiro: [['clienteId','tipo'],['descricao'],['valor','vencimento'],['status','dataPagamento']],
  equipe: [['nome'],['cargo','setor'],['email','telefone'],['dataEntrada','status'],['atividades','noPrazo'],['carga'],['observacoes']],
  compromissos: [['titulo'],['data','hora'],['clienteId','tipo'],['observacoes']],
};
const MODAL_TITLES_NEW = { clientes:'Novo cliente', servicos:'Novo serviço', financeiro:'Novo lançamento', equipe:'Novo colaborador', compromissos:'Novo compromisso' };
const MODAL_TITLES_EDIT = { clientes:'Editar cliente', servicos:'Editar serviço', financeiro:'Editar lançamento', equipe:'Editar colaborador', compromissos:'Editar compromisso' };
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
  const current = editing ? findItem(mod, id) : (preset || null);
  document.getElementById('modal-title').textContent = editing ? MODAL_TITLES_EDIT[mod] : MODAL_TITLES_NEW[mod];
  document.getElementById('modal-foot').innerHTML = `<button class="btn ghost" id="modal-cancel" type="button">Cancelar</button><button class="btn" id="modal-save" type="submit" form="modal-body">Salvar</button>`;
  document.getElementById('modal-cancel').addEventListener('click', closeModal);

  const fields = FORM_FIELDS[mod]();
  const body = document.getElementById('modal-body');

  if(mod==='servicos' && fields.find(f=>f.k==='clienteId').options.length===0){
    body.innerHTML = `<div class="empty" style="padding:10px 0">Cadastre um cliente antes de criar um serviço.</div>`;
    document.getElementById('modal-save').onclick = closeModal;
    document.getElementById('overlay').classList.add('open');
    return;
  }
  if(mod==='financeiro' && fields.find(f=>f.k==='clienteId').options.length===0){
    body.innerHTML = `<div class="empty" style="padding:10px 0">Cadastre um cliente antes de criar um pagamento.</div>`;
    document.getElementById('modal-save').onclick = closeModal;
    document.getElementById('overlay').classList.add('open');
    return;
  }

  const modalEl = document.querySelector('.modal');
  if(modalEl) modalEl.classList.toggle('modal-lg', mod==='clientes');

  const byKey = {}; fields.forEach(f=>byKey[f.k]=f);
  const renderField = (f) => {
    const id = 'f_'+f.k;
    const existing = current ? current[f.k] : undefined;
    let control;
    if(f.type==='select'){
      control = `<select id="${id}" name="${f.k}">${f.options.map(([v,l])=>`<option value="${v}" ${existing===v?'selected':''}>${l}</option>`).join('')}</select>`;
    } else if(f.type==='textarea'){
      const ph = f.k==='observacoes' ? 'Informações adicionais...' : 'Detalhes do serviço...';
      control = `<textarea placeholder="${ph}" id="${id}" name="${f.k}" autocomplete="off">${existing!=null?existing:''}</textarea>`;
    } else {
      let val = existing!=null ? existing : '';
      const ph = f.placeholder || (f.type==='number' ? '0.00' : '');
      control = `<input id="${id}" name="${f.k}" autocomplete="${autocompleteFor(f)}" type="${f.type}" value="${val}" placeholder="${ph}" ${f.type==='number'?'step="0.01"':''}>`;
    }
    return `<div class="field"><label>${f.label}${f.required?' *':''}</label>${control}</div>`;
  };

  if(mod==='clientes'){
    const nomeAtual = current ? current.nome : '';
    const avColor = avatarColor(current ? current.id : 'novo-cliente');
    const headerHTML = `
    <div class="form-header">
      <div class="form-header-icon" id="cliente-form-avatar" style="${nomeAtual ? `background:${avColor};color:#fff;` : ''}">${nomeAtual ? initials(nomeAtual) : ICONS.people}</div>
      <div class="form-header-text">
        <b>${editing ? 'Editar cadastro' : 'Novo cliente'}</b>
        <span>Preencha os dados abaixo para manter o cadastro completo</span>
      </div>
    </div>`;
    const sectionsHTML = CLIENTE_FORM_SECTIONS.map(sec => `
    <div class="form-section">
      <div class="form-section-title">${sec.icon}<span>${sec.title}</span></div>
      ${sec.rows.map(group=>{
        const cells = group.map(k=>renderField(byKey[k])).join('');
        return group.length>1 ? `<div class="row-2">${cells}</div>` : cells;
      }).join('')}
    </div>`).join('');
    body.innerHTML = headerHTML + sectionsHTML;
    const nomeInput = document.getElementById('f_nome');
    const avatarEl = document.getElementById('cliente-form-avatar');
    if(nomeInput && avatarEl){
      nomeInput.addEventListener('input', ()=>{
        const v = nomeInput.value.trim();
        if(v){ const c = avatarColor(current ? current.id : v); avatarEl.style.background = c; avatarEl.style.color = '#fff'; avatarEl.textContent = initials(v); }
        else { avatarEl.style.background = ''; avatarEl.style.color = ''; avatarEl.innerHTML = ICONS.people; }
      });
    }
    document.getElementById('overlay').classList.add('open');
    document.getElementById('modal-save').onclick = () => saveForm(mod, editing ? id : null);
    return;
  }

  if(mod==='equipe'){
    equipeFotoFile = null;
    const fotoAtual = current ? current.foto_url : '';
    const nomeAtual = current ? current.nome : '';
    const avColor = avatarColor(current ? current.id : 'novo-colaborador');
    const headerHTML = `
    <div class="form-header">
      <div class="form-header-icon" id="equipe-form-avatar" style="width:56px;height:56px;border-radius:50%;overflow:hidden;cursor:pointer;${fotoAtual?'':`background:${avColor};color:#fff;`}" title="Clique para escolher uma foto">
        ${fotoAtual ? `<img src="${fotoAtual}" style="width:100%;height:100%;object-fit:cover">` : (nomeAtual ? initials(nomeAtual) : ICONS.people)}
      </div>
      <div class="form-header-text">
        <b>${editing ? 'Editar cadastro' : 'Novo colaborador'}</b>
        <span>Clique na foto para adicionar ou trocar a imagem</span>
      </div>
      <input type="file" id="f_foto" accept="image/*" style="display:none">
    </div>`;
    const layoutEquipe = FORM_LAYOUT.equipe;
    const sectionsHTML = layoutEquipe.map(group=>{
      const cells = group.map(k=>renderField(byKey[k])).join('');
      return group.length>1 ? `<div class="row-2">${cells}</div>` : cells;
    }).join('');
    body.innerHTML = headerHTML + sectionsHTML;

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

    document.getElementById('overlay').classList.add('open');
    document.getElementById('modal-save').onclick = () => saveForm(mod, editing ? id : null);
    return;
  }

  const layout = FORM_LAYOUT[mod] || fields.map(f=>[f.k]);
  body.innerHTML = layout.map(group=>{
    const cells = group.map(k=>renderField(byKey[k])).join('');
    return group.length>1 ? `<div class="row-2">${cells}</div>` : cells;
  }).join('');
  document.getElementById('overlay').classList.add('open');
  document.getElementById('modal-save').onclick = () => saveForm(mod, editing ? id : null);
}

function openViewModal(mod, id){
  const item = findItem(mod, id);
  if(!item) return;
  document.getElementById('modal-title').textContent = VIEW_TITLES[mod] || 'Detalhes';
  document.getElementById('modal-foot').innerHTML = `<button class="btn ghost" id="modal-cancel" type="button">Fechar</button>`;
  document.getElementById('modal-cancel').addEventListener('click', closeModal);

  const fields = FORM_FIELDS[mod]();
  const body = document.getElementById('modal-body');
  body.innerHTML = fields.map(f=>{
    let display = item[f.k];
    if(f.k==='clienteId') display = clienteNome(item.clienteId);
    else if(f.k==='status') display = mod==='clientes' ? clienteStatusLabel(display) : (mod==='servicos' ? servicoStatusLabel(display) : financeiroStatusLabel(display));
    else if(f.k==='tipo') display = display==='despesa' ? 'Despesa' : 'Receita';
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
  const color = avatarColor(x.id);
  document.getElementById('modal-title').textContent = 'Perfil do colaborador';
  document.getElementById('modal-foot').innerHTML = `<button class="btn ghost" id="modal-cancel" type="button">Fechar</button>`;
  document.getElementById('modal-cancel').addEventListener('click', closeModal);

  const carga = Math.max(0, Math.min(100, Number(x.carga)||0));
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
    <div class="team-stats">
      <div class="team-stat"><b>${x.atividades||0}</b><span>Atividades</span></div>
      <div class="team-stat"><b>${x.noPrazo||0}%</b><span>No prazo</span></div>
    </div>
    <div>
      <div class="team-progress-label"><span>Carga de trabalho</span><span>${carga}%</span></div>
      <div class="team-progress-track"><div class="team-progress-fill" style="width:${carga}%;background:${color}"></div></div>
    </div>
    ${x.observacoes ? `<div class="field"><label>Observações</label><div class="view-value">${x.observacoes}</div></div>` : ''}
    <button class="btn" style="width:100%;justify-content:center;margin-top:4px" id="profile-edit-btn">Editar cadastro</button>
  `;
  document.getElementById('overlay').classList.add('open');
  document.getElementById('profile-edit-btn').addEventListener('click', ()=>{ closeModal(); openModal('equipe', x.id); });
}

function closeModal(){ document.getElementById('overlay').classList.remove('open'); }

async function saveForm(mod, editId){
  const fields = FORM_FIELDS[mod]();
  const obj = editId ? { ...findItem(mod, editId) } : { id: uid() };
  for(const f of fields){
    const el = document.getElementById('f_'+f.k);
    let val = el.value;
    if(f.type==='number') val = parseFloat(val)||0;
    obj[f.k] = val;
  }
  const requiredMissing = fields.some(f=>f.required && !String(obj[f.k]||'').trim());
  if(requiredMissing){ toast('Preencha os campos obrigatórios.'); return; }
  if(mod==='servicos' || mod==='financeiro'){ obj.clienteNome = clienteNome(obj.clienteId); }

  if(mod==='equipe' && equipeFotoFile){
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

  if(editId){
    const idx = STATE[mod].findIndex(x=>x.id===editId);
    if(idx>-1) STATE[mod][idx] = obj;
    toast('Registro atualizado com sucesso.');
  } else {
    STATE[mod].push(obj);
    toast('Registro salvo com sucesso.');
  }
  persist(mod);
  closeModal();
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

  // Os dados de exemplo (Grupo Horizonte, Arielle Rocha, etc.) só são criados
  // UMA VEZ, na primeira vez que alguém usa o painel — depois disso, mesmo que
  // a lista fique vazia (porque alguém apagou tudo), não volta a criar de novo.
  const jaSemeado = localStorage.getItem('atej_dados_exemplo_criados');
  if(!jaSemeado && STATE.equipe.length===0 && STATE.clientes.length===0){
    STATE.equipe = [
      { id:uid(), nome:'Arielle Rocha', cargo:'Gestora de operações', setor:'Operações', email:'arielle@atej.com.br', telefone:'(85) 99110-2040', dataEntrada:'2024-02-01', status:'ativo', atividades:12, noPrazo:94, carga:84 },
      { id:uid(), nome:'Lucas Costa', cargo:'Analista de processos', setor:'Operações', email:'lucas@atej.com.br', telefone:'', dataEntrada:'', status:'ativo', atividades:9, noPrazo:88, carga:63 },
      { id:uid(), nome:'Breno Viana', cargo:'Analista financeiro', setor:'Financeiro', email:'breno@atej.com.br', telefone:'', dataEntrada:'', status:'ativo', atividades:7, noPrazo:91, carga:49 },
      { id:uid(), nome:'João Silva', cargo:'Consultor de serviços', setor:'Comercial', email:'joao@atej.com.br', telefone:'', dataEntrada:'', status:'ferias', atividades:11, noPrazo:86, carga:77 },
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
      { id:uid(), clienteId:grupoHorizonte, clienteNome:'Grupo Horizonte', titulo:'Gestão e acompanhamento', descricao:'Acompanhamento mensal de indicadores e resultados.', valor:8450, status:'andamento', dataInicio:'2025-03-01', prazoEntrega:'', responsavelId:respId('Arielle Rocha'), progresso:70 },
      { id:uid(), clienteId:clinicaSerene, clienteNome:'Clínica Serene', titulo:'Implantação do sistema', descricao:'Configuração inicial e treinamento da equipe.', valor:6800, status:'andamento', dataInicio:'2026-07-01', prazoEntrega:'2026-08-29', responsavelId:respId('Lucas Costa'), progresso:85 },
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
    render(); // reprocessa tudo (hoje no calendário, atrasos, opções de mês, etc.)
  }
}

// Verifica a cada minuto...
setInterval(verificarMudancaDeData, 60000);
// ...e também assim que a aba volta a ficar visível (ex.: usuário deixou aberta a noite toda)
document.addEventListener('visibilitychange', ()=>{
  if(!document.hidden) verificarMudancaDeData();
});
