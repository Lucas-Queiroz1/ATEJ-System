/* ============================================================
   ATEJ · Painel de Gestão — Importar planilha
   Importa CLIENTES e CONTAS (a receber / a pagar) de Excel (.xlsx/.xls),
   Google Sheets (baixado como .xlsx ou .csv) e CSV.

   Fluxo: 1) escolher arquivo  2) conferir o mapeamento das colunas
          3) ver a prévia (erros e duplicados) e confirmar.

   Uso: abrirImportacao('clientes' | 'receber' | 'pagar')
   Depende do script.js (STATE, TABLES, uid, toast, escHTML, todayISO,
   fmtBRL, fmtDate, renderContent, finLista, finMes).
   A biblioteca de leitura (SheetJS) só é baixada na primeira vez que
   alguém abre a importação.
   ============================================================ */
(function(){
  const SHEETJS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
  let _xlsx = null;
  function carregarXLSX(){
    if(window.XLSX) return Promise.resolve();
    if(!_xlsx) _xlsx = new Promise((ok, err) => {
      const s = document.createElement('script');
      s.src = SHEETJS_URL; s.onload = ok;
      s.onerror = () => { _xlsx = null; err(new Error('Não foi possível carregar o leitor de planilhas. Confira a conexão e tente de novo.')); };
      document.head.appendChild(s);
    });
    return _xlsx;
  }

  /* ---------- campos importáveis (syn = nomes de coluna reconhecidos sozinhos) ---------- */
  const PESSOA_SYN = ['cliente','nome do cliente','fornecedor','nome do fornecedor','sacado','favorecido','pessoa','nome','empresa'];
  const CONTA_COMUM = [
    {k:'descricao', label:'Descrição', req:true, syn:['descricao','historico','referencia','titulo','conta','servico']},
    {k:'valor', label:'Valor (R$)', req:true, syn:['valor','valor total','total','valor da parcela','valor original','montante']},
    {k:'vencimento', label:'Vencimento', req:true, syn:['vencimento','data de vencimento','data vencimento','venc','vence em']},
    {k:'planoContas', label:'Plano de contas', syn:['plano de contas','categoria','plano','classificacao']},
    {k:'numeroDocumento', label:'Nº do documento', syn:['numero do documento','n documento','documento','nf','nota fiscal','n da nota','num documento','nº do documento']},
    {k:'identificador', label:'Identificador', syn:['identificador','codigo','id','cod']},
    {k:'dataEmissao', label:'Data de emissão', syn:['data de emissao','emissao','data emissao']},
    {k:'competencia', label:'Competência (mês/ano)', syn:['competencia','mes de competencia','mes/ano','mes referencia']},
    {k:'formaRecebimento', label:'Forma de pagamento', syn:['forma de pagamento','forma de recebimento','forma','pagamento','meio de pagamento']},
    {k:'situacao', label:'Situação (pago / em aberto)', syn:['situacao','status','pago']},
    {k:'dataPagamento', label:'Data do pagamento', syn:['data do pagamento','data de pagamento','data da baixa','pago em','recebido em','data do recebimento']},
  ];
  const CAMPOS = {
    clientes: [
      {k:'nome', label:'Nome do cliente/empresa', req:true, syn:['nome','cliente','razao social','empresa','nome fantasia','nome do cliente']},
      {k:'cnpj', label:'CNPJ/CPF', syn:['cnpj','cpf','cnpj/cpf','cpf/cnpj','documento']},
      {k:'contatoNome', label:'Contato principal', syn:['contato','contato principal','nome do contato','responsavel']},
      {k:'telefone', label:'Telefone', syn:['telefone','celular','fone','whatsapp','tel']},
      {k:'email', label:'E-mail', syn:['email','e-mail','e mail']},
      {k:'cidade', label:'Localização (cidade/UF)', syn:['cidade','localizacao','municipio','cidade/uf']},
      {k:'status', label:'Status', syn:['status','situacao']},
      {k:'clienteDesde', label:'Cliente desde', syn:['cliente desde','desde','data de inicio','inicio','data de cadastro','cadastro']},
      {k:'receitaMensal', label:'Receita mensal (R$)', syn:['receita mensal','mensalidade','valor mensal','honorario','honorarios','valor']},
      {k:'observacoes', label:'Observações', syn:['observacoes','observacao','obs','notas','anotacoes']},
    ],
    receber: [{k:'pessoa', label:'Cliente', req:true, syn:PESSOA_SYN}, ...CONTA_COMUM],
    pagar:   [{k:'pessoa', label:'Fornecedor', req:true, syn:PESSOA_SYN}, ...CONTA_COMUM],
  };
  const TITULO = { clientes:'Importar clientes', receber:'Importar contas a receber', pagar:'Importar contas a pagar' };
  const MODELO = {
    clientes: [['Nome','CNPJ/CPF','Contato','Telefone','E-mail','Cidade/UF','Status','Cliente desde','Receita mensal','Observações'],
               ['Padaria Bom Pão','12.345.678/0001-90','Maria Souza','(88) 99999-0000','maria@bompao.com','Quixadá/CE','Ativo','15/03/2024',1500,'Pagamento todo dia 10']],
    receber:  [['Cliente','Descrição','Valor','Vencimento','Plano de contas','Nº do documento','Forma de pagamento','Situação','Data do pagamento'],
               ['Padaria Bom Pão','Mensalidade outubro',1500,'10/10/2026','Receita recorrente','NF 1234','PIX','Em aberto','']],
    pagar:    [['Fornecedor','Descrição','Valor','Vencimento','Plano de contas','Nº do documento','Forma de pagamento','Situação','Data do pagamento'],
               ['Gráfica Rápida','Impressão de material',480.5,'20/10/2026','Serviços de terceiros','NF 88','Boleto','Em aberto','']],
  };
  const FORMAS = [['pix','pix'],['dinheiro','dinheiro'],['transfer','transferencia'],['credito','cartao_credito'],['debito','cartao_debito'],['boleto','boleto']];

  /* ---------- utilidades ---------- */
  const nn = t => String(t==null?'':t).trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[_]+/g,' ').replace(/\s+/g,' ');
  const txt = v => (v==null ? '' : (v instanceof Date ? '' : String(v))).trim();
  const dig = v => String(v==null?'':v).replace(/\D/g,'');
  const cent = n => Math.round((Number(n)||0)*100);
  const pad = n => String(n).padStart(2,'0');

  function parseMoney(v){
    if(v===''||v==null) return null;
    if(typeof v==='number') return isFinite(v) ? Math.round(v*100)/100 : NaN;
    let s = String(v).replace(/R\$|\s/g,'');
    if(!s) return null;
    let neg = false;
    if(/^\(.*\)$/.test(s)){ neg = true; s = s.slice(1,-1); }
    if(s.startsWith('-')){ neg = true; s = s.slice(1); }
    if(s.includes(',') && s.includes('.')){
      s = s.lastIndexOf(',') > s.lastIndexOf('.') ? s.replace(/\./g,'').replace(',','.') : s.replace(/,/g,'');
    } else if(s.includes(',')){
      s = s.replace(',','.');
    } else if(/^\d{1,3}(\.\d{3})+$/.test(s)){
      s = s.replace(/\./g,'');
    }
    const n = Number(s);
    if(!isFinite(n) || !/^\d+(\.\d+)?$/.test(s)) return NaN;
    return Math.round((neg?-n:n)*100)/100;
  }
  const dataValida = (y,m,d) => { const dt = new Date(y,m-1,d); return dt.getFullYear()===y && dt.getMonth()===m-1 && dt.getDate()===d; };
  // devolve 'AAAA-MM-DD', null (vazio) ou undefined (inválido)
  function parseDate(v){
    if(v===''||v==null) return null;
    if(v instanceof Date){
      if(isNaN(v)) return undefined;
      const d = new Date(v.getTime() + 12*3600*1000); // tolera o desvio de fuso do Excel
      return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
    }
    if(typeof v==='number'){
      if(v < 20000 || v > 80000) return undefined;
      const d = new Date(Math.round((v-25569)*86400*1000));
      return `${d.getUTCFullYear()}-${pad(d.getUTCMonth()+1)}-${pad(d.getUTCDate())}`;
    }
    const s = String(v).trim();
    let m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
    if(m) return dataValida(+m[1],+m[2],+m[3]) ? `${m[1]}-${pad(m[2])}-${pad(m[3])}` : undefined;
    m = s.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{2,4})/);
    if(m){
      let y = +m[3]; if(y < 100) y += 2000;
      return dataValida(y,+m[2],+m[1]) ? `${y}-${pad(m[2])}-${pad(m[1])}` : undefined;
    }
    return undefined;
  }
  function parseCompetencia(v){
    if(v===''||v==null) return null;
    if(v instanceof Date || typeof v==='number'){ const d = parseDate(v); return d ? d.slice(0,7) : undefined; }
    const s = String(v).trim();
    let m = s.match(/^(\d{4})-(\d{1,2})(-\d{1,2})?$/);
    if(m && +m[2]>=1 && +m[2]<=12) return `${m[1]}-${pad(m[2])}`;
    m = s.match(/^(\d{1,2})[\/.\-](\d{2,4})$/);
    if(m){ let y = +m[2]; if(y<100) y += 2000; if(+m[1]>=1 && +m[1]<=12) return `${y}-${pad(m[1])}`; }
    const d = parseDate(s); return d ? d.slice(0,7) : undefined;
  }
  const parseForma = v => { const s = nn(v); if(!s) return ''; const f = FORMAS.find(([k])=>s.includes(k)); return f ? f[1] : ''; };
  const ehPago = v => ['pago','paga','recebido','recebida','quitado','quitada','liquidado','liquidada','baixado','baixada','sim'].includes(nn(v));

  /* ---------- estado do assistente ---------- */
  let S = null;

  function raiz(){
    let el = document.getElementById('imp-overlay');
    if(!el){
      el = document.createElement('div');
      el.id = 'imp-overlay'; el.className = 'overlay';
      el.innerHTML = `<div class="modal imp-modal">
        <div class="modal-head"><h3 id="imp-title"></h3><button type="button" id="imp-close" title="Fechar">&times;</button></div>
        <div class="imp-body" id="imp-body"></div>
        <div class="modal-foot" id="imp-foot"></div></div>`;
      document.body.appendChild(el);
      el.querySelector('#imp-close').onclick = fechar;
    }
    return el;
  }
  function fechar(){ const el = document.getElementById('imp-overlay'); if(el) el.classList.remove('open'); S = null; }
  const body = () => document.getElementById('imp-body');
  const foot = (html) => { document.getElementById('imp-foot').innerHTML = html; };

  window.abrirImportacao = function(mode){
    S = { mode, rows:[], header:[], map:{}, opts:{ ignorarDup:true, criarPessoas:true }, res:null, wb:null, sheet:'' };
    raiz().classList.add('open');
    document.getElementById('imp-title').textContent = TITULO[mode];
    passoArquivo();
  };

  /* ---------- passo 1: arquivo ---------- */
  function passoArquivo(msg){
    const nomeLista = S.mode==='clientes' ? 'clientes' : (S.mode==='receber' ? 'contas a receber' : 'contas a pagar');
    body().innerHTML = `
      <p class="imp-help">Envie a planilha com os seus ${nomeLista} (.xlsx, .xls ou .csv). A <strong>primeira linha</strong> deve ter os títulos das colunas — na próxima etapa você confere qual coluna vai para qual campo.</p>
      <p class="imp-help imp-sub">No Google Sheets: <em>Arquivo → Fazer download → Microsoft Excel (.xlsx)</em>.</p>
      <label class="imp-drop" id="imp-drop">
        <input type="file" id="imp-file" accept=".xlsx,.xls,.csv,.ods" hidden>
        <strong>Escolher arquivo</strong><span>ou arraste a planilha para cá</span>
      </label>
      <div class="imp-msg ${msg?'erro':''}" id="imp-msg">${msg ? escHTML(msg) : ''}</div>
      <button type="button" class="btn ghost imp-modelo" id="imp-modelo">Baixar planilha modelo</button>`;
    foot(`<button type="button" class="btn ghost" id="imp-cancel">Cancelar</button>`);
    document.getElementById('imp-cancel').onclick = fechar;
    const inp = document.getElementById('imp-file'), drop = document.getElementById('imp-drop');
    inp.onchange = () => { if(inp.files[0]) lerArquivo(inp.files[0]); };
    ['dragenter','dragover'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('over'); }));
    ['dragleave','drop'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove('over'); }));
    drop.addEventListener('drop', e => { const f = e.dataTransfer.files[0]; if(f) lerArquivo(f); });
    document.getElementById('imp-modelo').onclick = baixarModelo;
  }
  async function baixarModelo(){
    try{
      await carregarXLSX();
      const ws = XLSX.utils.aoa_to_sheet(MODELO[S.mode]);
      ws['!cols'] = MODELO[S.mode][0].map(() => ({ wch: 22 }));
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Modelo');
      XLSX.writeFile(wb, `modelo-importacao-${S.mode}.xlsx`);
    }catch(e){ toast(e.message); }
  }

  async function lerArquivo(file){
    const msg = document.getElementById('imp-msg');
    msg.className = 'imp-msg'; msg.textContent = 'Lendo a planilha...';
    try{
      if(file.size > 15*1024*1024) throw new Error('Arquivo muito grande (limite de 15 MB).');
      await carregarXLSX();
      const buf = await file.arrayBuffer();
      let wb;
      if(/\.csv$/i.test(file.name)){
        let texto;
        try{ texto = new TextDecoder('utf-8', { fatal:true }).decode(buf); }
        catch(e){ texto = new TextDecoder('windows-1252').decode(buf); } // CSV "ANSI" do Excel brasileiro
        wb = XLSX.read(texto, { type:'string', raw:true });
      } else {
        wb = XLSX.read(buf, { type:'array', cellDates:true });
      }
      S.wb = wb; S.arquivo = file.name;
      S.sheet = wb.SheetNames[0];
      if(!carregarAba()) throw new Error('Não encontrei linhas com dados nessa planilha. Confira se a primeira linha tem os títulos das colunas.');
      automapear();
      passoMapa();
    }catch(e){
      console.error('Erro ao ler planilha', e);
      passoArquivo(e.message && e.message.length < 200 ? e.message : 'Não consegui ler esse arquivo. Tente salvar como .xlsx ou .csv e enviar de novo.');
    }
  }
  function carregarAba(){
    const ws = S.wb.Sheets[S.sheet];
    const todas = XLSX.utils.sheet_to_json(ws, { header:1, raw:true, defval:'', blankrows:true });
    const vazia = r => r.every(c => String(c==null?'':c).trim()==='');
    let h = todas.findIndex(r => !vazia(r));
    if(h < 0) return false;
    const largura = Math.max(...todas.slice(h).map(r => r.length));
    S.header = Array.from({ length: largura }, (_, i) => {
      const t = String(todas[h][i]==null ? '' : todas[h][i]).trim();
      return t || `Coluna ${i+1}`;
    });
    S.rows = [];
    for(let i=h+1; i<todas.length; i++){
      if(vazia(todas[i])) continue;
      S.rows.push({ n: i+1, v: Array.from({ length: largura }, (_, c) => todas[i][c]==null ? '' : todas[i][c]) });
    }
    return S.rows.length > 0;
  }
  function automapear(){
    const defs = CAMPOS[S.mode], usadas = new Set(), heads = S.header.map(nn);
    S.map = {};
    defs.forEach(d => { // 1ª passada: título igual a um nome conhecido
      const i = heads.findIndex((h, ix) => !usadas.has(ix) && d.syn.includes(h));
      if(i >= 0){ S.map[d.k] = String(i); usadas.add(i); }
    });
    defs.forEach(d => { // 2ª passada: título que contém um nome conhecido
      if(S.map[d.k] != null) return;
      const i = heads.findIndex((h, ix) => !usadas.has(ix) && d.syn.some(s => s.length >= 4 && h.includes(s)));
      if(i >= 0){ S.map[d.k] = String(i); usadas.add(i); }
    });
  }

  /* ---------- passo 2: mapear colunas ---------- */
  function passoMapa(){
    const defs = CAMPOS[S.mode];
    const abas = S.wb.SheetNames.length > 1
      ? `<div class="imp-row"><label>Aba da planilha</label><select id="imp-aba">${S.wb.SheetNames.map(a=>`<option ${a===S.sheet?'selected':''}>${escHTML(a)}</option>`).join('')}</select></div>` : '';
    const exemplo = i => { const r = S.rows.find(r => String(r.v[i]).trim() !== ''); if(!r) return '—'; const v = r.v[i]; return escHTML(v instanceof Date ? (parseDate(v)||'') : String(v)).slice(0,40); };
    body().innerHTML = `
      <p class="imp-help"><strong>${S.rows.length}</strong> linha${S.rows.length===1?'':'s'} encontrada${S.rows.length===1?'':'s'} em “${escHTML(S.arquivo)}”. Confira qual coluna da planilha vai para cada campo; o que ficar em “não importar” é ignorado.</p>
      ${abas}
      <div class="imp-scroll"><table class="imp-tab">
        <thead><tr><th>Campo do painel</th><th>Coluna da planilha</th><th>Exemplo</th></tr></thead>
        <tbody>${defs.map(d => `<tr>
          <td>${escHTML(d.label)}${d.req?' <span class="imp-req">*</span>':''}</td>
          <td><select data-map="${d.k}"><option value="">— não importar —</option>${S.header.map((h,i)=>`<option value="${i}" ${S.map[d.k]===String(i)?'selected':''}>${escHTML(h)}</option>`).join('')}</select></td>
          <td class="imp-ex" data-ex="${d.k}">${S.map[d.k]!=null ? exemplo(+S.map[d.k]) : '—'}</td></tr>`).join('')}
        </tbody></table></div>
      <div class="imp-aviso">${S.mode==='clientes'
        ? 'Dica: o status aceita Ativo, Implantação ou Pendente (vazio vira Ativo).'
        : 'Dica: na coluna Situação, “Pago”, “Paga” ou “Recebido” já entram como baixadas; qualquer outra coisa (ou vazio) entra em aberto — e vira “Atrasado” se o vencimento já passou.'}</div>`;
    foot(`<button type="button" class="btn ghost" id="imp-voltar">Trocar arquivo</button><button type="button" class="btn" id="imp-seguir">Ver prévia</button>`);
    document.getElementById('imp-voltar').onclick = () => passoArquivo();
    const aba = document.getElementById('imp-aba');
    if(aba) aba.onchange = () => { S.sheet = aba.value; if(!carregarAba()){ toast('Essa aba está vazia.'); return; } automapear(); passoMapa(); };
    body().querySelectorAll('[data-map]').forEach(sel => sel.onchange = () => {
      S.map[sel.dataset.map] = sel.value === '' ? undefined : sel.value;
      body().querySelector(`[data-ex="${sel.dataset.map}"]`).innerHTML = sel.value === '' ? '—' : exemplo(+sel.value);
    });
    document.getElementById('imp-seguir').onclick = () => {
      const falta = defs.filter(d => d.req && (S.map[d.k]==null || S.map[d.k]==='')).map(d => d.label);
      if(falta.length){ toast('Escolha a coluna de: ' + falta.join(', ') + '.'); return; }
      const cols = defs.map(d => S.map[d.k]).filter(v => v!=null && v!=='');
      if(new Set(cols).size !== cols.length){ toast('A mesma coluna foi usada em dois campos. Confira o mapeamento.'); return; }
      passoPrevia();
    };
  }

  /* ---------- validação e montagem dos registros ---------- */
  function construir(){
    return S.mode === 'clientes' ? construirClientes() : construirContas();
  }
  function lerCampo(row, k){ const i = S.map[k]; return (i==null || i==='') ? '' : row.v[+i]; }

  function construirClientes(){
    const cnpjs = new Set(), nomes = new Set();
    STATE.clientes.forEach(c => { const d = dig(c.cnpj); if(d.length >= 11) cnpjs.add(d); nomes.add(nn(c.nome)); });
    const linhas = S.rows.map(row => {
      const L = { n: row.n, erros: [], avisos: [], dup: false, obj: null };
      const g = k => lerCampo(row, k);
      const nome = txt(g('nome'));
      if(!nome){ L.erros.push('Nome em branco'); return L; }
      const st = nn(g('status'));
      let status = 'ativo';
      if(st.includes('implant')) status = 'implantacao';
      else if(st.includes('pend')) status = 'pendente';
      else if(st && !['ativo','ativa','sim'].includes(st)) L.avisos.push(`status “${txt(g('status'))}” não existe no painel — entrou como Ativo`);
      const desde = parseDate(g('clienteDesde'));
      if(desde === undefined) L.avisos.push('“Cliente desde” inválido — ignorado');
      const rec = parseMoney(g('receitaMensal'));
      if(Number.isNaN(rec)) L.avisos.push('Receita mensal inválida — ficou 0');
      L.obj = { id: uid(), nome, cnpj: txt(g('cnpj')), contatoNome: txt(g('contatoNome')), telefone: txt(g('telefone')),
        email: txt(g('email')), cidade: txt(g('cidade')), status, clienteDesde: desde || null,
        receitaMensal: (rec && rec > 0) ? rec : 0, observacoes: txt(g('observacoes')) };
      const d = dig(L.obj.cnpj);
      if((d.length >= 11 && cnpjs.has(d)) || nomes.has(nn(nome))) L.dup = true;
      else { if(d.length >= 11) cnpjs.add(d); nomes.add(nn(nome)); }
      return L;
    });
    return { linhas };
  }

  function construirContas(){
    const receber = S.mode === 'receber', hoje = todayISO();
    const base = receber ? STATE.clientes : STATE.fornecedores;
    const existentes = new Map(); base.forEach(p => existentes.set(nn(p.nome), p));
    const novas = new Map(); // pessoas que seriam cadastradas junto
    const chaves = new Set();
    STATE.financeiro.filter(f => receber ? f.tipo!=='despesa' : f.tipo==='despesa')
      .forEach(f => chaves.add([nn(f.clienteNome||f.fornecedor), nn(f.descricao), f.vencimento, cent(f.valor)].join('|')));
    const linhas = S.rows.map(row => {
      const L = { n: row.n, erros: [], avisos: [], dup: false, obj: null, pessoaNova: null };
      const g = k => lerCampo(row, k);
      const nomeP = txt(g('pessoa'));
      const desc = txt(g('descricao'));
      const valor = parseMoney(g('valor'));
      const venc = parseDate(g('vencimento'));
      if(!nomeP) L.erros.push(receber ? 'Cliente em branco' : 'Fornecedor em branco');
      if(!desc) L.erros.push('Descrição em branco');
      if(valor==null || Number.isNaN(valor) || valor <= 0) L.erros.push(valor==null ? 'Valor em branco' : 'Valor inválido ou zero');
      if(!venc) L.erros.push(venc===undefined ? 'Vencimento inválido (use dd/mm/aaaa)' : 'Vencimento em branco');
      let pessoa = null;
      if(nomeP){
        pessoa = existentes.get(nn(nomeP)) || novas.get(nn(nomeP));
        if(!pessoa){
          if(S.opts.criarPessoas){
            pessoa = receber ? { id: uid(), nome: nomeP, cnpj:'', contatoNome:'', telefone:'', email:'', cidade:'', status:'ativo', clienteDesde:null, receitaMensal:0, observacoes:'Cadastrado pela importação de planilha' }
                             : { id: uid(), nome: nomeP, documento:'', telefone:'', email:'' };
            novas.set(nn(nomeP), pessoa);
            L.pessoaNova = pessoa;
          } else L.erros.push(`${receber?'Cliente':'Fornecedor'} “${nomeP}” não está cadastrado`);
        } else if(novas.get(nn(nomeP)) === pessoa) L.pessoaNova = pessoa;
      }
      if(L.erros.length) return L;
      const emissao = parseDate(g('dataEmissao')); if(emissao === undefined) L.avisos.push('Data de emissão inválida — ignorada');
      const comp = parseCompetencia(g('competencia')); if(comp === undefined) L.avisos.push('Competência inválida — ignorada');
      const pago = ehPago(g('situacao'));
      let dpg = parseDate(g('dataPagamento')); if(dpg === undefined){ L.avisos.push('Data do pagamento inválida — usei o vencimento'); dpg = null; }
      const obj = { id: uid(), tipo: receber ? 'receita' : 'despesa', planoContas: txt(g('planoContas')), descricao: desc,
        numeroDocumento: txt(g('numeroDocumento')), identificador: txt(g('identificador')), valor,
        dataEmissao: emissao || null, vencimento: venc, competencia: comp || null,
        formaRecebimento: parseForma(g('formaRecebimento')), ocorrencia: 'unica', clienteNome: pessoa.nome };
      if(receber) obj.clienteId = pessoa.id; else { obj.fornecedorId = pessoa.id; obj.fornecedor = pessoa.nome; }
      if(pago){ obj.status = 'pago'; obj.saldo = 0; obj.dataPagamento = dpg || venc; obj.valorRecebido = valor; }
      else { obj.status = venc < hoje ? 'atrasado' : 'pendente'; obj.saldo = valor; }
      L.obj = obj;
      const chave = [nn(pessoa.nome), nn(desc), venc, cent(valor)].join('|');
      if(chaves.has(chave)) L.dup = true; else chaves.add(chave);
      return L;
    });
    return { linhas };
  }

  /* ---------- passo 3: prévia ---------- */
  function passoPrevia(){
    S.res = construir();
    const L = S.res.linhas;
    const ok = L.filter(l => l.obj && (!l.dup || !S.opts.ignorarDup));
    const dups = L.filter(l => l.obj && l.dup).length;
    const erros = L.filter(l => !l.obj);
    const novas = new Set(ok.filter(l => l.pessoaNova).map(l => l.pessoaNova.id)).size;
    const clientes = S.mode === 'clientes';
    const cab = clientes ? ['Linha','Nome','CNPJ/CPF','Contato','Status'] : ['Linha', S.mode==='receber'?'Cliente':'Fornecedor','Descrição','Vencimento','Valor','Situação'];
    const cel = l => clientes
      ? [l.n, l.obj.nome, l.obj.cnpj||'—', l.obj.contatoNome||'—', l.obj.status]
      : [l.n, l.obj.clienteNome, l.obj.descricao, fmtDate(l.obj.vencimento), fmtBRL(l.obj.valor), l.obj.status==='pago' ? 'Pago' : (l.obj.status==='atrasado' ? 'Atrasado' : 'Pendente')];
    const problemas = [
      ...erros.map(l => `<li><strong>Linha ${l.n}:</strong> ${escHTML(l.erros.join('; '))} <em>(não será importada)</em></li>`),
      ...ok.filter(l => l.avisos.length).map(l => `<li><strong>Linha ${l.n}:</strong> ${escHTML(l.avisos.join('; '))}</li>`),
    ];
    const totalValor = clientes ? 0 : ok.reduce((s,l)=>s+cent(l.obj.valor),0)/100;
    body().innerHTML = `
      <div class="imp-chips">
        <div class="imp-chip good"><strong>${ok.length}</strong><span>${clientes?'cliente':'conta'}${ok.length===1?'':'s'} a importar</span></div>
        ${dups ? `<div class="imp-chip warn"><strong>${dups}</strong><span>já existe${dups===1?'':'m'}</span></div>` : ''}
        ${erros.length ? `<div class="imp-chip bad"><strong>${erros.length}</strong><span>com erro</span></div>` : ''}
        ${!clientes ? `<div class="imp-chip"><strong>${fmtBRL(totalValor)}</strong><span>valor total</span></div>` : ''}
      </div>
      <div class="imp-opts">
        ${dups ? `<label><input type="checkbox" id="imp-dup" ${S.opts.ignorarDup?'checked':''}> Ignorar ${clientes?'clientes':'contas'} que já existem no painel (${clientes?'mesmo CNPJ/CPF ou nome':'mesmo nome, descrição, vencimento e valor'})</label>` : ''}
        ${!clientes ? `<label><input type="checkbox" id="imp-pes" ${S.opts.criarPessoas?'checked':''}> Cadastrar automaticamente ${S.mode==='receber'?'clientes':'fornecedores'} que ainda não existem${novas?` (${novas} novo${novas===1?'':'s'})`:''}</label>` : ''}
      </div>
      ${ok.length ? `<div class="imp-scroll"><table class="imp-tab imp-prev"><thead><tr>${cab.map(c=>`<th>${c}</th>`).join('')}</tr></thead>
        <tbody>${ok.slice(0,30).map(l => `<tr>${cel(l).map(c=>`<td>${escHTML(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
        ${ok.length>30 ? `<div class="imp-more">Mostrando 30 de ${ok.length}.</div>` : ''}` : `<div class="empty" style="padding:18px 0"><strong>Nada para importar</strong>Confira o mapeamento das colunas.</div>`}
      ${problemas.length ? `<details class="imp-problemas" ${erros.length?'open':''}><summary>${problemas.length} aviso${problemas.length===1?'':'s'} / erro${problemas.length===1?'':'s'}</summary><ul>${problemas.slice(0,40).join('')}${problemas.length>40?`<li>… e mais ${problemas.length-40}.</li>`:''}</ul></details>` : ''}`;
    foot(`<button type="button" class="btn ghost" id="imp-voltar">Voltar</button><button type="button" class="btn" id="imp-confirmar" ${ok.length?'':'disabled'}>Importar ${ok.length} ${clientes?'cliente':'conta'}${ok.length===1?'':'s'}</button>`);
    document.getElementById('imp-voltar').onclick = passoMapa;
    const d = document.getElementById('imp-dup'); if(d) d.onchange = () => { S.opts.ignorarDup = d.checked; passoPrevia(); };
    const p = document.getElementById('imp-pes'); if(p) p.onchange = () => { S.opts.criarPessoas = p.checked; passoPrevia(); };
    document.getElementById('imp-confirmar').onclick = () => confirmar(ok);
  }

  /* ---------- gravação ---------- */
  // Grava só os registros novos, em blocos (nunca mexe no resto da tabela).
  async function gravar(mod, lista){
    const feitos = [];
    for(let i=0; i<lista.length; i+=200){
      const bloco = lista.slice(i, i+200);
      const { error } = await window.sb.from(TABLES[mod]).upsert(bloco, { onConflict:'id' });
      if(error){
        console.error('Erro ao importar para '+mod, error);
        if(feitos.length) await window.sb.from(TABLES[mod]).delete().in('id', feitos); // desfaz os blocos já gravados
        throw new Error(error.message);
      }
      feitos.push(...bloco.map(x => x.id));
    }
  }
  async function confirmar(ok){
    const btn = document.getElementById('imp-confirmar');
    btn.disabled = true; btn.textContent = 'Importando...';
    const lista = ok.map(l => l.obj);
    const pessoas = [...new Map(ok.filter(l => l.pessoaNova).map(l => [l.pessoaNova.id, l.pessoaNova])).values()];
    const clientes = S.mode === 'clientes', receber = S.mode === 'receber';
    const modPessoa = receber ? 'clientes' : 'fornecedores';
    let pessoasGravadas = false;
    try{
      if(clientes){
        await gravar('clientes', lista);
        STATE.clientes.push(...lista);
      } else {
        if(pessoas.length){ await gravar(modPessoa, pessoas); pessoasGravadas = true; }
        await gravar('financeiro', lista);
        if(pessoas.length) STATE[modPessoa].push(...pessoas);
        STATE.financeiro.push(...lista);
        finLista = receber ? 'receber' : 'pagar';
        const hoje = todayISO().slice(0,7), ms = lista.map(x => x.vencimento.slice(0,7)).sort();
        const alvo = ms.includes(hoje) ? hoje : ms[ms.length-1];
        const [y, m] = alvo.split('-').map(Number); finMes = { y, m: m-1 };
      }
    }catch(e){
      if(pessoasGravadas){ try{ await window.sb.from(TABLES[modPessoa]).delete().in('id', pessoas.map(p=>p.id)); }catch(_){} }
      toast('Erro ao importar: ' + e.message);
      btn.disabled = false; btn.textContent = 'Tentar de novo';
      return;
    }
    const msg = clientes ? `${lista.length} cliente${lista.length===1?'':'s'} importado${lista.length===1?'':'s'}.`
      : `${lista.length} conta${lista.length===1?'':'s'} importada${lista.length===1?'':'s'}` + (pessoas.length ? ` e ${pessoas.length} ${receber?'cliente':'fornecedor'}${pessoas.length===1?'':'s'} novo${pessoas.length===1?'':'s'} cadastrado${pessoas.length===1?'':'s'}.` : '.');
    fechar();
    renderContent();
    toast(msg);
  }
})();
