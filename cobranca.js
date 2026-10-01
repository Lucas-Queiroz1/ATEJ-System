/* ============================================================
   ATEJ · Painel de Gestão — "Cobrar no WhatsApp"
   Botão nas contas a receber em aberto: abre o WhatsApp (wa.me) já com
   a mensagem pronta para o telefone do cliente. Nada é enviado sozinho:
   a pessoa confere o texto e aperta "enviar" no próprio WhatsApp.
   Para mudar o texto, edite mensagemCobranca() e ASSINATURA abaixo.
   ============================================================ */
(function(){
  const ASSINATURA = 'ATEJ';

  // Deixa só dígitos e garante o código do Brasil (55) em números de 10/11 dígitos.
  function telefoneWA(t){
    const d = String(t||'').replace(/\D/g,'').replace(/^0+/,'');
    if(d.length === 10 || d.length === 11) return '55' + d;
    return (d.length >= 12 && d.length <= 15) ? d : '';
  }
  const primeiroNome = n => String(n||'').trim().split(/\s+/)[0] || '';

  function mensagemCobranca(x, cli){
    const saldo = fmtBRL(finSaldo(x)), venc = x.vencimento, hoje = todayISO();
    const nome = primeiroNome((cli && cli.contatoNome) || '');
    const abertura = nome ? `Olá, ${nome}! Tudo bem?` : 'Olá! Tudo bem?';
    let corpo;
    if(venc && venc < hoje){
      const dias = Math.round((Date.parse(hoje) - Date.parse(venc)) / 86400000);
      corpo = `Estou passando para lembrar da cobrança "${x.descricao}", no valor de ${saldo}, que venceu em ${fmtDate(venc)} (${dias} dia${dias===1?'':'s'} em atraso).`;
    } else if(venc === hoje){
      corpo = `Estou passando para lembrar que a cobrança "${x.descricao}", no valor de ${saldo}, vence hoje.`;
    } else {
      corpo = `Estou passando para lembrar da cobrança "${x.descricao}", no valor de ${saldo}, com vencimento em ${fmtDate(venc)}.`;
    }
    return `${abertura}\n\n${corpo}\n\nSe você já fez o pagamento, pode desconsiderar esta mensagem e me enviar o comprovante. Qualquer dúvida, é só responder por aqui.\n\n${ASSINATURA}`;
  }

  // um único listener no documento: continua valendo depois de cada renderContent()
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-wa]');
    if(!btn) return;
    const x = findItem('financeiro', btn.dataset.wa);
    if(!x) return;
    const cli = STATE.clientes.find(c => c.id === x.clienteId);
    if(!cli){ toast('Esta conta não está ligada a um cliente cadastrado.'); return; }
    const fone = telefoneWA(cli.telefone);
    if(!fone){ toast(`${cli.nome} não tem um telefone válido cadastrado. Edite o cliente e informe o WhatsApp com DDD.`); return; }
    window.open(`https://wa.me/${fone}?text=${encodeURIComponent(mensagemCobranca(x, cli))}`, '_blank', 'noopener');
  });
})();
