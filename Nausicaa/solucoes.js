/* ============================================================
   PÁGINA SOLUÇÕES — guia interativo
   Todo o conteúdo vem de dados.js (TEXTOS.solucoes).
   ============================================================ */
(() => {
'use strict';
const D = window.DADOS || {};
const S = (D.TEXTOS || {}).solucoes;
if (!S) return;

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const ico = d => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ICONES_EDU = [
  ico('<path d="M5 8h22v13H15l-6 5v-5H5z"/><path d="M11 13h10M11 17h6"/>'),                 // comunicação
  ico('<circle cx="12" cy="11" r="4"/><circle cx="21" cy="12" r="3"/><path d="M4 26c0-5 4-8 8-8s8 3 8 8M19 20c4-1 9 1 9 6"/>'), // empatia
  ico('<path d="M16 4l10 4v8c0 6-4 10-10 12C10 26 6 22 6 16V8z"/><path d="M12 16l3 3 5-6"/>'),  // responsabilidade
  ico('<path d="M4 22c4-8 8-8 12 0s8 8 12 0"/><circle cx="8" cy="10" r="3"/><circle cx="24" cy="10" r="3"/>') // mediação
];
const ICONES_MET = [
  ico('<path d="M4 8h14v9H10l-4 4v-4H4z"/><path d="M14 14h14v9h-2v4l-4-4h-8z"/>'),            // diálogo
  ico('<circle cx="6" cy="22" r="3"/><circle cx="26" cy="22" r="3"/><circle cx="16" cy="8" r="3"/><path d="M8 20l6-9M24 20l-6-9M9 22h14"/>'), // mediação
  ico('<path d="M16 27S5 20 5 12a6 6 0 0 1 11-3 6 6 0 0 1 11 3c0 8-11 15-11 15z"/>'),         // restaurativas
  ico('<path d="M4 16h8l4-6 4 12 4-6h4"/>'),                                                   // conciliação
  ico('<path d="M16 4l11 5v7c0 6-5 10-11 12C10 26 5 22 5 16V9z"/><path d="M16 11v7M16 22v.5"/>') // intervenção
];

/* Cabeçalho padrão das seções */
function cab(id, d) {
  return `<div class="sol-cab">
    <p class="rot-sec">${esc(d.rotulo)}</p>
    <h2 id="t-${id}">${esc(d.titulo)}</h2>
    ${d.texto ? `<p class="sec-lead">${esc(d.texto)}</p>` : ''}
  </div>`;
}

/* ---------- 1. Educação digital ---------- */
function educacao(el) {
  const d = S.educacao; if (!d) return;
  el.innerHTML = cab('educacao', d) + `
    <ul class="sol-cards quatro">${(d.cards || []).map((c, i) => `
      <li class="sol-card">
        <span class="sol-ico">${ICONES_EDU[i % ICONES_EDU.length]}</span>
        <h3>${esc(c.titulo)}</h3>
        <ul>${c.itens.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      </li>`).join('')}</ul>
    <div class="sol-exemplo" id="exemplo">
      <div class="sol-exemplo-cab">
        <h3>${esc(d.exemplosTitulo)}</h3>
        ${d.exemplosTexto ? `<p>${esc(d.exemplosTexto)}</p>` : ''}
        ${(d.exemplos || []).length > 1 ? `<div class="filtros" role="group" aria-label="Escolher situação" id="ex-sit">
          ${d.exemplos.map((x, i) => `<button type="button" class="chip" data-i="${i}" aria-pressed="${i === 0}">${esc(x.titulo)}</button>`).join('')}
        </div>` : ''}
      </div>
      <div class="sol-exemplo-corpo">
        <p class="sol-situacao" id="ex-situacao"></p>
        <div class="sol-escolhas" role="group" aria-label="Escolher a reação">
          <button type="button" class="sol-btn imp" data-k="impulsiva" aria-pressed="false">Reagir sem pensar</button>
          <button type="button" class="sol-btn con" data-k="construtiva" aria-pressed="false">Responder com calma</button>
        </div>
        <div class="sol-resposta" id="ex-resposta" aria-live="polite"><p class="mute">Escolha uma das duas atitudes para ver o que tende a acontecer.</p></div>
      </div>
    </div>`;
  let atual = 0;
  const mostrar = k => {
    const x = d.exemplos[atual];
    $$('.sol-escolhas .sol-btn', el).forEach(b => b.setAttribute('aria-pressed', b.dataset.k === k));
    const r = $('#ex-resposta', el);
    if (!k) { r.innerHTML = '<p class="mute">Escolha uma das duas atitudes para ver o que tende a acontecer.</p>'; return; }
    const o = x[k];
    r.className = 'sol-resposta ' + (k === 'impulsiva' ? 'imp' : 'con');
    r.innerHTML = `<p class="fala">${esc(o.fala)}</p><p>${esc(o.efeito)}</p>`;
  };
  const sit = () => { $('#ex-situacao', el).textContent = d.exemplos[atual].situacao; mostrar(null); };
  $$('#ex-sit .chip', el).forEach(b => b.addEventListener('click', () => {
    atual = Number(b.dataset.i);
    $$('#ex-sit .chip', el).forEach(x => x.setAttribute('aria-pressed', x === b));
    sit();
  }));
  $$('.sol-escolhas .sol-btn', el).forEach(b => b.addEventListener('click', () => mostrar(b.dataset.k)));
  sit();
}

/* ---------- 2. Seis etapas ---------- */
function etapas(el) {
  const d = S.etapas; if (!d) return;
  const L = d.lista || [];
  el.innerHTML = cab('etapas', d) + `
    <div class="sol-passos">
      <div class="sol-trilha" role="tablist" aria-label="Etapas da resolução de conflitos">
        ${L.map((e, i) => `<button type="button" role="tab" id="aba-${i}" aria-controls="painel-etapa" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}"><span class="n">${i + 1}</span><span class="t">${esc(e.titulo)}</span></button>`).join('')}
      </div>
      <div class="sol-painel" id="painel-etapa" role="tabpanel" tabindex="0"></div>
      <div class="sol-nav-etapa">
        <button type="button" class="btn claro" id="et-ant">← Etapa anterior</button>
        <span class="contagem" id="et-pos" aria-live="polite"></span>
        <button type="button" class="btn" id="et-prox">Próxima etapa →</button>
      </div>
      ${d.aviso ? `<aside class="sol-aviso"><strong>${esc(d.avisoTitulo || 'Atenção')}</strong><p>${esc(d.aviso)}</p></aside>` : ''}
    </div>`;
  const abas = $$('[role="tab"]', el), painel = $('#painel-etapa', el);
  let i = 0;
  function ir(k, foco) {
    i = Math.max(0, Math.min(L.length - 1, k));
    const e = L[i];
    abas.forEach((a, j) => { a.setAttribute('aria-selected', j === i); a.tabIndex = j === i ? 0 : -1; a.classList.toggle('feita', j < i); });
    painel.setAttribute('aria-labelledby', 'aba-' + i);
    painel.innerHTML = `
      <p class="sol-etapa-n">Etapa ${i + 1} de ${L.length}</p>
      <h3>${esc(e.titulo)}</h3>
      <p class="expl">${esc(e.explicacao)}</p>
      ${(e.guia || []).length ? `<ul class="sol-guia">${e.guia.map(q => `<li>${esc(q)}</li>`).join('')}</ul>` : ''}
      <div class="sol-tres">
        ${e.exemplo ? `<div><span class="rot">Exemplo prático</span><p>${esc(e.exemplo)}</p></div>` : ''}
        ${e.pergunta ? `<div><span class="rot">Para refletir</span><p>${esc(e.pergunta)}</p></div>` : ''}
        ${e.acao ? `<div><span class="rot">Aplique na vida real</span><p>${esc(e.acao)}</p></div>` : ''}
      </div>`;
    $('#et-pos', el).textContent = `${i + 1} / ${L.length}`;
    $('#et-ant', el).disabled = i === 0;
    $('#et-prox', el).disabled = i === L.length - 1;
    el.style.setProperty('--prog', ((i + 1) / L.length * 100) + '%');
    if (foco) abas[i].focus();
  }
  abas.forEach((a, k) => a.addEventListener('click', () => ir(k)));
  $('.sol-trilha', el).addEventListener('keydown', ev => {
    const m = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: L.length - 1 }[ev.key];
    if (m !== undefined) { ev.preventDefault(); ir(m, true); }
  });
  $('#et-ant', el).addEventListener('click', () => ir(i - 1));
  $('#et-prox', el).addEventListener('click', () => ir(i + 1));
  ir(0);
}

/* ---------- 3. Métodos ---------- */
function metodos(el) {
  const d = S.metodos; if (!d) return;
  el.innerHTML = cab('metodos', d) + `
    <ul class="sol-cards metodos">${(d.lista || []).map((m, i) => `
      <li class="sol-card m${i + 1}">
        <span class="sol-ico">${ICONES_MET[i % ICONES_MET.length]}</span>
        <h3>${esc(m.titulo)}</h3>
        <p>${esc(m.texto)}</p>
        ${m.quando ? `<p class="quando"><strong>Quando usar:</strong> ${esc(m.quando)}</p>` : ''}
      </li>`).join('')}</ul>
    ${d.nota ? `<p class="sol-nota">${esc(d.nota)}</p>` : ''}`;
}

/* ---------- 4. Simulador ---------- */
function simulador(el) {
  const d = S.simulador; if (!d) return;
  const C = d.cenarios || [];
  const ROT = { constroi: 'Tende a construir', seguranca: 'Prioriza a segurança', adia: 'Adia, mas não resolve', agrava: 'Tende a agravar', risco: 'Aumenta o risco' };
  el.innerHTML = cab('simulador', d) + `
    <div class="sol-sim">
      <div class="filtros" role="group" aria-label="Escolher cenário" id="sim-cen">
        ${C.map((c, i) => `<button type="button" class="chip" data-i="${i}" aria-pressed="${i === 0}">Cenário ${esc(c.id)} · ${esc(c.titulo)}</button>`).join('')}
      </div>
      <div class="sol-sim-corpo" id="sim-corpo"></div>
    </div>`;
  let ci = 0;
  function cenario() {
    const c = C[ci];
    const box = $('#sim-corpo', el);
    box.innerHTML = `
      <p class="sol-situacao">${esc(c.situacao)}</p>
      ${c.alerta ? `<p class="sol-alerta" role="note">${esc(c.alerta)}</p>` : ''}
      <p class="rot">O que você faria?</p>
      <ul class="sol-opcoes">${c.opcoes.map((o, k) => `<li><button type="button" data-k="${k}" aria-pressed="false">${esc(o.texto)}</button></li>`).join('')}</ul>
      <div class="sol-retorno" id="sim-ret" aria-live="polite"></div>`;
    $$('.sol-opcoes button', box).forEach(b => b.addEventListener('click', () => {
      const o = c.opcoes[Number(b.dataset.k)];
      $$('.sol-opcoes button', box).forEach(x => x.setAttribute('aria-pressed', x === b));
      $('#sim-ret', box).className = 'sol-retorno t-' + o.tendencia;
      $('#sim-ret', box).innerHTML = `<span class="tag">${esc(ROT[o.tendencia] || '')}</span><p>${esc(o.feedback)}</p>${c.aprendizado ? `<p class="apr"><strong>Para levar:</strong> ${esc(c.aprendizado)}</p>` : ''}<p class="mute">Experimente as outras opções para comparar.</p>`;
    }));
  }
  $$('#sim-cen .chip', el).forEach(b => b.addEventListener('click', () => {
    ci = Number(b.dataset.i);
    $$('#sim-cen .chip', el).forEach(x => x.setAttribute('aria-pressed', x === b));
    cenario();
  }));
  cenario();
}

/* ---------- 5. Caso ---------- */
function caso(el) {
  const d = S.caso; if (!d) return;
  el.innerHTML = cab('caso', d) + `
    <div class="sol-caso">
      <ul class="sol-pontos">${(d.pontos || []).map((p, i) => `<li><span class="n">${String(i + 1).padStart(2, '0')}</span><div><strong>${esc(p.titulo)}</strong>${p.texto ? `<span>${esc(p.texto)}</span>` : ''}</div></li>`).join('')}</ul>
      <div class="sol-caso-lado">
        ${d.reflexao ? `<p class="grande">${esc(d.reflexao)}</p>` : ''}
        <aside class="sol-aviso"><p>${esc(d.aviso)}</p>${d.fonte ? `<p class="fonte"><strong>Fonte:</strong> ${esc(d.fonte)}</p>` : ''}</aside>
      </div>
    </div>`;
}

/* ---------- 6. Mundo ---------- */
function mundo(el) {
  const d = S.mundo; if (!d) return;
  const nomes = {}; (D.ACERVO || []).forEach(a => { nomes[a.id] = a.titulo; });
  el.innerHTML = cab('mundo', d) + `
    ${(d.estrategias || []).length ? `<div class="sol-estr">
      <h3>${esc(d.estrategiasTitulo)}</h3>
      <ul class="sol-tags">${d.estrategias.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
    </div>` : ''}
    ${d.exemplosTitulo ? `<h3 class="sol-sub">${esc(d.exemplosTitulo)}</h3>` : ''}
    <ol class="caminhos sol-caminhos">${(S.caminhos || []).map((c, i) => `
      <li><span class="n">${String(i + 1).padStart(2, '0')}</span>
        <div><strong>${esc(c.titulo)}</strong><span class="t">${esc(c.texto)}</span>
          ${(c.acervo || []).filter(id => nomes[id]).length ? `<span class="sol-links"><span class="rot">Veja também:</span> ${c.acervo.filter(id => nomes[id]).map(id => `<a class="chip" href="conteudo.html?id=${esc(id)}">${esc(nomes[id])} →</a>`).join('')}</span>` : ''}
        </div></li>`).join('')}</ol>
    ${d.limites ? `<aside class="sol-aviso limites"><strong>${esc(d.limitesTitulo)}</strong><p>${esc(d.limites)}</p></aside>` : ''}`;
}

/* ---------- 7. Cultura de paz ---------- */
function paz(el) {
  const d = S.paz; if (!d) return;
  el.innerHTML = cab('paz', d) + `
    <ul class="sol-cards tres pilares">${(d.pilares || []).map((p, i) => `
      <li class="sol-card"><span class="sol-pilar-n">${i + 1}</span><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p></li>`).join('')}</ul>
    ${d.frase ? `<blockquote class="sol-frase"><p>${esc(d.frase)}</p></blockquote>` : ''}`;
}

/* ---------- montagem ---------- */
const MAPA = { educacao, etapas, metodos, simulador, caso, mundo, paz };
const menu = [];
$$('[data-sol]').forEach(el => {
  const k = el.dataset.sol;
  if (!MAPA[k] || !S[k]) { el.hidden = true; return; }
  MAPA[k](el);
  menu.push([k, S[k].menu || S[k].rotulo]);
});
const nav = $('#sol-nav .wrap');
if (nav) nav.innerHTML = '<ul>' + menu.map(([k, t]) => `<li><a href="#${k}">${esc(t)}</a></li>`).join('') + '</ul>';

/* destaca no menu a seção visível */
if ('IntersectionObserver' in window && nav) {
  const links = Object.fromEntries($$('a', nav).map(a => [a.getAttribute('href').slice(1), a]));
  const obs = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting && links[e.target.id]) {
      Object.values(links).forEach(a => a.removeAttribute('aria-current'));
      links[e.target.id].setAttribute('aria-current', 'true');
      const bx = nav.parentElement, l = links[e.target.id];
      bx.scrollLeft = l.offsetLeft - (bx.clientWidth - l.offsetWidth) / 2;
    }
  }), { rootMargin: '-35% 0px -55% 0px' });
  $$('[data-sol]').forEach(el => { if (!el.hidden) obs.observe(el); });
}
})();
