/* ============================================================
   SCRIPT DO SITE NAUSICAÄ: BIBLIOTECA DOS CONFLITOS
   Cada função só roda na página em que o elemento existe.
   ============================================================ */
(() => {
'use strict';

const D = window.DADOS;
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm = s => String(s ?? '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
const pagina = document.body.dataset.pagina || '';
const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;

const NOME = (D.SITE && D.SITE.nome) || 'Nausicaä: Biblioteca dos Conflitos';
const T = D.TEXTOS || {};
const lista = v => Array.isArray(v) ? v : (v ? [v] : []);
const ESPIRAL = '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 20 c0-4 5-4 5 0 c0 7-10 7-10 0 c0-10 15-10 15 0 c0 13-20 13-20 0" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></svg>';
const CORACAO = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.7-9.4-9.6C1.5 8 3.2 5 6.4 5c2 0 3.600 1.100 5.600 3.200C14 6.100 15.600 5 17.600 5c3.200 0 4.900 3 3.800 5.900C19.500 15.800 12 20.500 12 20.500z"/></svg>';

const achar = (tipo, id) => (tipo === 'obra' ? D.OBRAS : D.ACERVO).find(x => x.id === id);

/* ============================================================
   FAVORITOS — salvos no navegador (localStorage)
   Formato salvo: [{ tipo: 'acervo' | 'obra', id: 'a1', em: 1700000000000 }]
   ============================================================ */
const CHAVE = 'nausicaa:favoritos:v1';
let memoria = []; // reserva caso o navegador bloqueie o localStorage
const Fav = {
  ler() {
    try {
      const v = JSON.parse(localStorage.getItem(CHAVE));
      return Array.isArray(v) ? v : memoria;
    } catch (e) { return memoria; }
  },
  gravar(lista) {
    memoria = lista;
    try { localStorage.setItem(CHAVE, JSON.stringify(lista)); } catch (e) { /* segue só na memória */ }
  },
  tem(tipo, id) { return this.ler().some(f => f.tipo === tipo && f.id === id); },
  alternar(tipo, id) {
    const l = this.ler().slice();
    const i = l.findIndex(f => f.tipo === tipo && f.id === id);
    if (i >= 0) l.splice(i, 1); else l.push({ tipo, id, em: Date.now() });
    this.gravar(l);
    return i < 0;
  },
  limpar() { this.gravar([]); }
};

function btnFav(tipo, id, titulo, icone) {
  const on = Fav.tem(tipo, id);
  return `<button type="button" class="btn-fav${icone ? ' icone' : ''}" data-tipo="${tipo}" data-id="${esc(id)}" data-titulo="${esc(titulo)}" aria-pressed="${on}" aria-label="${on ? 'Remover dos favoritos' : 'Favoritar'}: ${esc(titulo)}">${CORACAO}<span class="rot">${on ? 'Favoritado' : 'Favoritar'}</span></button>`;
}

function atualizarFavs() {
  $$('.btn-fav').forEach(b => {
    const on = Fav.tem(b.dataset.tipo, b.dataset.id);
    b.setAttribute('aria-pressed', on);
    b.setAttribute('aria-label', (on ? 'Remover dos favoritos' : 'Favoritar') + ': ' + b.dataset.titulo);
    const r = $('.rot', b);
    if (r) r.textContent = on ? 'Favoritado' : 'Favoritar';
  });
  const n = Fav.ler().length;
  $$('[data-contagem-fav]').forEach(el => {
    el.textContent = n;
    el.dataset.zero = n === 0;
    el.setAttribute('aria-label', n + (n === 1 ? ' favorito' : ' favoritos'));
  });
  document.dispatchEvent(new CustomEvent('favs'));
}
document.addEventListener('click', e => {
  const b = e.target.closest('.btn-fav');
  if (!b) return;
  Fav.alternar(b.dataset.tipo, b.dataset.id);
  atualizarFavs();
});
window.addEventListener('storage', e => { if (e.key === CHAVE) atualizarFavs(); });

/* ============================================================
   Partes comuns: topo, rodapé, busca
   ============================================================ */
function midia(item, rotulo) {
  return item.imagem
    ? `<img class="midia" src="${esc(item.imagem)}" alt="${esc(item.titulo)}" loading="lazy">`
    : `<div class="ph" role="img" aria-label="${esc(rotulo)}">${esc(rotulo)}</div>`;
}

function montarTopo() {
  const el = $('#topo');
  if (!el) return;
  const itens = [['index', 'index.html', 'Nausicaä'], ['obras', 'obras.html', 'Obras'], ['solucoes', 'solucoes.html', 'Soluções'], ['sobre', 'sobre.html', 'Sobre']];
  el.innerHTML = `
    <div class="wrap topo-in">
      <a class="marca" href="index.html">${ESPIRAL}<span>${NOME}</span></a>
      <button class="burger" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="topo-dir"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 8h16M4 16h16"/></svg></button>
      <div class="topo-dir" id="topo-dir">
        <nav aria-label="Principal"><ul class="menu">
          ${itens.map(([id, href, t]) => `<li><a href="${href}"${pagina === id ? ' aria-current="page"' : ''}>${t}</a></li>`).join('')}
          <li><a href="favoritos.html"${pagina === 'favoritos' ? ' aria-current="page"' : ''}>Favoritos<span class="num" data-contagem-fav data-zero="true">0</span></a></li>
        </ul></nav>
        <div class="busca">
          <form role="search" id="busca-form" autocomplete="off">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>
            <label class="sr" for="busca">Pesquisar na biblioteca</label>
            <input id="busca" type="search" placeholder="Pesquisar na biblioteca" aria-controls="busca-res" aria-expanded="false">
          </form>
          <div class="busca-res" id="busca-res" aria-live="polite"></div>
        </div>
      </div>
    </div>`;
  const burger = $('.burger', el), caixa = $('#topo-dir', el);
  burger.addEventListener('click', () => {
    const a = caixa.classList.toggle('aberto');
    burger.setAttribute('aria-expanded', a);
    burger.setAttribute('aria-label', a ? 'Fechar menu' : 'Abrir menu');
  });
}

function montarRodape() {
  const el = $('#rodape');
  if (!el) return;
  const R = T.rodape || {};
  el.innerHTML = `
    <div class="wrap rodape-in">
      <div class="r1"><p class="nome">${esc(NOME.toUpperCase())}</p><p class="mute" style="margin:0;max-width:340px">${esc(R.descricao)}</p></div>
      <nav class="r2" aria-label="Rodapé"><span class="tit-r">SEÇÕES</span>
        <a href="index.html">Nausicaä</a><a href="obras.html">Obras</a><a href="solucoes.html">Soluções</a><a href="sobre.html">Sobre</a><a href="favoritos.html">Favoritos</a></nav>
      <div class="r3"><span class="tit-r">CRÉDITOS E REFERÊNCIAS</span><span class="mute">${esc(R.creditos)}</span></div>
      <div class="r4"><span class="tit-r">PROJETO</span><span class="mute">${esc(R.responsaveis)}</span></div>
    </div>`;
}

/* Preenche os textos marcados com data-txt="grupo.campo" a partir de DADOS.TEXTOS / DADOS.BANNER */
function textos() {
  $$('[data-txt]').forEach(el => {
    const [g, c] = el.dataset.txt.split('.');
    const v = g === 'banner' ? (D.BANNER || {})[c] : (T[g] || {})[c];
    if (typeof v === 'string' && v.trim()) el.textContent = v;
    else el.hidden = true;
  });
}

function paginaSobre() {
  const box = $('#sobre-secoes');
  if (!box) return;
  box.innerHTML = ((T.sobre || {}).secoes || []).map(x =>
    `<h2>${esc(x.titulo)}</h2>${lista(x.texto).map(p => `<p>${esc(p)}</p>`).join('')}`).join('');
}

function busca(idInp = 'busca', idRes = 'busca-res', idForm = 'busca-form') {
  const inp = $('#' + idInp), res = $('#' + idRes), form = $('#' + idForm);
  if (!inp) return;
  const indice = [
    ...D.ACERVO.map(a => ({ tipo: 'Tema', titulo: a.titulo, sub: a.nome, href: `conteudo.html?id=${a.id}`, texto: [a.titulo, a.nome, a.periodo, a.descricao, ...(a.corpo || [])].join(' ') })),
    ...D.OBRAS.map(o => ({ tipo: 'Obra', titulo: o.titulo, sub: [o.autor, o.ano].filter(Boolean).join(' · '), href: `obras.html#${o.id}`, texto: [o.titulo, o.autor, o.ano, o.descricao].join(' ') }))
  ];
  const fechar = () => { res.classList.remove('aberto'); inp.setAttribute('aria-expanded', 'false'); };
  function mostrar() {
    const q = norm(inp.value.trim());
    if (!q) { fechar(); return; }
    const achados = indice.filter(i => norm(i.texto).includes(q)).slice(0, 6);
    res.innerHTML = achados.length
      ? achados.map(i => `<a href="${i.href}"><strong>${esc(i.titulo)}</strong><small>${i.tipo} · ${esc(i.sub)}</small></a>`).join('')
      : '<p class="vazio">Nada encontrado para essa busca.</p>';
    res.classList.add('aberto');
    inp.setAttribute('aria-expanded', 'true');
  }
  inp.addEventListener('input', mostrar);
  inp.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { const a = $('a', res); if (a) { e.preventDefault(); a.focus(); } }
    if (e.key === 'Escape') fechar();
  });
  res.addEventListener('keydown', e => {
    const links = $$('a', res), i = links.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' && i < links.length - 1) { e.preventDefault(); links[i + 1].focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); (i > 0 ? links[i - 1] : inp).focus(); }
    if (e.key === 'Escape') { fechar(); inp.focus(); }
  });
  document.addEventListener('click', e => { if (!e.target.closest('#' + idForm) && !e.target.closest('#' + idRes) && !e.target.closest('.busca')) fechar(); });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = inp.value.trim();
    if (q) location.href = 'obras.html?q=' + encodeURIComponent(q);
  });
}

/* ============================================================
   Abertura (só na primeira visita da sessão)
   ============================================================ */
function abertura() {
  const el = $('#intro');
  if (!el) return;
  const html = document.documentElement;
  if (!html.classList.contains('intro-ativa')) { el.remove(); return; }
  const h = $('.intro-titulo h1', el);
  if (h) { const [a, ...r] = NOME.toUpperCase().split(/:\s*/); h.innerHTML = r.length ? `${esc(a)}:<br>${esc(r.join(': '))}` : esc(a); }
  let feito = false;
  function fim() {
    if (feito) return;
    feito = true;
    try { sessionStorage.setItem('nausicaa:intro', '1'); } catch (e) {}
    el.classList.add('saindo');
    setTimeout(() => { html.classList.remove('intro-ativa'); el.remove(); }, 700);
  }
  $('.intro-pular', el).addEventListener('click', fim);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') fim(); });
  setTimeout(fim, 3300);
}

/* ============================================================
   Início: carrossel
   ============================================================ */
function carrossel() {
  const el = $('#carrossel');
  if (!el) return;
  const itens = D.CARROSSEL, n = itens.length;
  if (!n) { el.hidden = true; return; }
  const INTERVALO = 5000; // troca automática a cada 5 segundos
  const track = $('#car-track'), pontos = $('#car-pontos');
  track.innerHTML = itens.map((c, i) => `<div class="car-slide c${i % 5}" role="group" aria-roledescription="slide" aria-label="${i + 1} de ${n}">${midia(c, '[ IMAGEM DO CONFLITO ]')}</div>`).join('');
  pontos.innerHTML = itens.map((_, i) => `<button type="button" aria-label="Ir para o slide ${i + 1}"></button>`).join('');
  const slides = $$('.car-slide', track), bolas = $$('button', pontos);
  const pos = $('#car-pos');
  let i = 0, timer = null, preso = false;
  const rodando = !reduz; // com movimento reduzido não troca sozinho

  function barra() { // reinicia a barrinha de progresso do indicador ativo
    bolas.forEach(b => b.classList.remove('corre'));
    if (timer) { void el.offsetWidth; bolas[i].classList.add('corre'); }
  }
  function ir(k, manual) {
    i = (k + n) % n;
    track.style.setProperty('--i', i);
    slides.forEach((s, j) => { s.classList.toggle('ativo', j === i); s.setAttribute('aria-hidden', j !== i); });
    bolas.forEach((b, j) => b.setAttribute('aria-current', j === i));
    const c = itens[i], a = D.ACERVO.find(x => x.id === c.acervo);
    $('#car-periodo').textContent = c.periodo;
    $('#car-titulo').textContent = c.titulo;
    $('#car-link').href = a ? `conteudo.html?id=${a.id}` : '#acervo';
    pos.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0');
    el.setAttribute('aria-live', manual ? 'polite' : 'off');
    barra();
  }
  const parar = () => { clearInterval(timer); timer = null; barra(); };
  const iniciar = () => {
    clearInterval(timer); timer = null;
    if (rodando && !preso) timer = setInterval(() => ir(i + 1), INTERVALO);
    barra();
  };
  $('#car-ant').addEventListener('click', () => { ir(i - 1, true); iniciar(); });
  $('#car-prox').addEventListener('click', () => { ir(i + 1, true); iniciar(); });
  bolas.forEach((b, k) => b.addEventListener('click', () => { ir(k, true); iniciar(); }));
  el.addEventListener('mouseenter', () => { preso = true; parar(); });
  el.addEventListener('mouseleave', () => { preso = false; iniciar(); });
  el.addEventListener('focusin', () => { preso = true; parar(); });
  el.addEventListener('focusout', () => { preso = false; iniciar(); });
  el.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { ir(i - 1, true); iniciar(); }
    if (e.key === 'ArrowRight') { ir(i + 1, true); iniciar(); }
  });
  let x0 = null;
  el.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  el.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) { ir(i + (dx < 0 ? 1 : -1), true); iniciar(); }
    x0 = null;
  });
  ir(0); iniciar();
}

/* ============================================================
   Início: vídeo (só mostra o player se houver um vídeo real)
   ============================================================ */
function video() {
  const caixa = $('#video-caixa');
  if (!caixa) return;
  const v = D.VIDEO || {};
  const src = String(v.src || '').trim();
  $('#video-legenda').textContent = v.legenda || '';
  if (!src) return; // mantém o espaço reservado do HTML
  const yt = src.match(/(?:youtube\.com\/(?:watch\?(?:[^#]*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/)
          || (/^[\w-]{11}$/.test(src) ? [null, src] : null);
  const vim = src.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  const drive = src.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  if (yt) {
    caixa.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${esc(yt[1])}?rel=0" title="Vídeo de apresentação do projeto" allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>`;
  } else if (drive) {
    caixa.innerHTML = `<iframe src="https://drive.google.com/file/d/${esc(drive[1])}/preview" title="Vídeo de apresentação do projeto" allow="autoplay; fullscreen" allowfullscreen loading="lazy"></iframe>`;
  } else if (vim) {
    caixa.innerHTML = `<iframe src="https://player.vimeo.com/video/${esc(vim[1])}" title="Vídeo de apresentação do projeto" allow="fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
  } else {
    caixa.innerHTML = `<video controls preload="metadata" src="${esc(src)}"></video>`;
  }
}

/* ============================================================
   Início: quiz
   ============================================================ */
function quiz() {
  const box = $('#quiz-caixa');
  const Q = D.QUIZ || [];
  if (!box) return;
  if (!Q.length) { const sec = $('#quiz'); if (sec) sec.hidden = true; return; }
  let i = 0, pts = 0, respondeu = false;
  const letra = k => String.fromCharCode(65 + k);
  function pergunta() {
    const q = Q[i];
    respondeu = false;
    box.innerHTML = `
      <div class="quiz-topo"><span>Pergunta ${i + 1} de ${Q.length}</span><span class="quiz-barra" aria-hidden="true"><i style="width:${(i / Q.length) * 100}%"></i></span></div>
      <h3 id="quiz-p" tabindex="-1">${esc(q.pergunta)}</h3>
      <ul class="quiz-op" role="group" aria-labelledby="quiz-p">${q.opcoes.map((o, k) => `<li><button type="button" data-k="${k}"><span class="l">${letra(k)}</span><span>${esc(o)}</span></button></li>`).join('')}</ul>
      <div class="quiz-ret" id="quiz-ret" aria-live="polite"></div>`;
    $$('.quiz-op button', box).forEach(b => b.addEventListener('click', () => responder(Number(b.dataset.k))));
  }
  function responder(k) {
    if (respondeu) return;
    respondeu = true;
    const q = Q[i], ok = k === q.correta;
    if (ok) pts++;
    $$('.quiz-op button', box).forEach((b, j) => {
      b.disabled = true;
      if (j === q.correta) b.classList.add('certa');
      else if (j === k) b.classList.add('errada');
    });
    const tema = q.tema && D.ACERVO.find(a => a.id === q.tema);
    const ult = i === Q.length - 1;
    $('#quiz-ret', box).innerHTML = `
      <p class="quiz-res ${ok ? 'ok' : 'no'}"><strong>${ok ? 'Correto!' : 'Não foi dessa vez.'}</strong> ${esc(q.explicacao)}</p>
      <div class="acoes">
        <button type="button" class="btn" id="quiz-prox">${ult ? 'Ver resultado' : 'Próxima pergunta →'}</button>
        ${tema ? `<a class="link-forte" href="conteudo.html?id=${esc(tema.id)}">Saiba mais: ${esc(tema.titulo)}</a>` : ''}
      </div>`;
    const prox = $('#quiz-prox', box);
    prox.addEventListener('click', () => { if (ult) fim(); else { i++; pergunta(); $('#quiz-p', box).focus(); } });
    prox.focus();
  }
  function fim() {
    const n = Q.length, frac = pts / n;
    const msg = frac === 1 ? 'Excelente! Você acertou tudo.' : frac >= .6 ? 'Muito bem! Você já conhece boa parte da história.' : 'Bom começo! Explore a biblioteca e tente de novo.';
    box.innerHTML = `
      <div class="quiz-fim">
        <p class="quiz-nota"><strong>${pts}</strong> / ${n}</p>
        <h3>${esc(msg)}</h3>
        <div class="acoes"><button type="button" class="btn" id="quiz-de-novo">Refazer o quiz</button><a class="link-forte" href="#acervo">Explorar a biblioteca</a></div>
      </div>`;
    $('#quiz-de-novo', box).addEventListener('click', () => { i = 0; pts = 0; pergunta(); $('#quiz-p', box).focus(); });
  }
  box.addEventListener('keydown', e => {
    const k = { a: 0, b: 1, c: 2, d: 3 }[e.key.toLowerCase()];
    if (k !== undefined && !respondeu && !e.ctrlKey && !e.metaKey && !e.altKey && e.target.closest('.quiz-op')) { if (k < Q[i].opcoes.length) responder(k); }
  });
  pergunta();
}

/* ============================================================
   Início: faixa que leva às Obras (imagem PNG sem fundo)
   ============================================================ */
function banner() {
  const el = $('#banner');
  if (!el) return;
  const B = D.BANNER || {};
  if (B.fundo) el.style.setProperty('--banner-fundo', B.fundo);
  $('#banner-img').innerHTML = B.imagem
    ? `<img src="${esc(B.imagem)}" alt="" loading="lazy">`
    : '<div class="banner-ph" role="img" aria-label="Espaço para imagem em PNG sem fundo">[ IMAGEM EM PNG SEM FUNDO ]</div>';
}

/* ============================================================
   Início: acervo (lista editorial, com filtro por século)
   ============================================================ */
function acervo() {
  const lista = $('#acervo-lista');
  if (!lista) return;
  let sec = 'todos';
  function desenhar() {
    const itens = D.ACERVO.filter(a => sec === 'todos' || a.secs.includes(Number(sec)));
    $('#acervo-conta').textContent = `${itens.length} ${itens.length === 1 ? 'tema' : 'temas'}`;
    const secTxt = a => a.secs.length > 1 ? 'XX e XXI' : (a.secs[0] === 20 ? 'XX' : 'XXI');
    lista.innerHTML = itens.map((a, k) => `
      <article class="entrada c${k % 5}" id="${esc(a.id)}">
        <div class="img">${midia(a, '[ IMAGEM HISTÓRICA ]')}</div>
        <div class="info">
          <p class="nucleo">${esc(a.nome)}</p>
          <h3>${esc(a.titulo)}</h3>
          <p class="desc">${esc(a.descricao)}</p>
          <dl class="ficha">
            <div><dt>Período</dt><dd>${esc(a.periodo)}</dd></div>
            <div><dt>Século</dt><dd>${secTxt(a)}</dd></div>
            <div><dt>Materiais</dt><dd>${(a.materiais || []).length || '—'}</dd></div>
          </dl>
          <div class="acoes">
            <a class="btn" href="conteudo.html?id=${esc(a.id)}">Acessar conteúdo</a>
            ${(a.materiais || []).length ? `<a class="link-forte" href="conteudo.html?id=${esc(a.id)}#materiais">Baixar materiais</a>` : ''}
            ${btnFav('acervo', a.id, a.titulo)}
          </div>
        </div>
      </article>`).join('') || '<p class="vazio-msg">Nenhum tema neste filtro.</p>';
  }
  $$('#acervo-filtros [data-sec]').forEach(b => b.addEventListener('click', () => {
    sec = b.dataset.sec;
    $$('#acervo-filtros [data-sec]').forEach(x => x.setAttribute('aria-pressed', x === b));
    desenhar();
  }));
  desenhar();
}

/* ============================================================
   Grade de obras (usada no início e na página Obras)
   ============================================================ */
function gradeObras(ul, lista) {
  ul.innerHTML = lista.map((o, k) => `
    <li class="obra" id="${esc(o.id)}">
      <div class="obra-img c${k % 5}">${midia(o, '[ CAPA ]')}${btnFav('obra', o.id, o.titulo, true)}</div>
      <p class="obra-tit">${esc(o.titulo)}</p>
      <p class="obra-aut">${esc(o.autor)}${o.ano ? ' · ' + esc(o.ano) : ''}</p>
      ${o.link ? `<a class="obra-link" href="${esc(o.link)}" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>` : ''}
    </li>`).join('') || '<li class="vazio-msg" style="grid-column:1/-1">Nenhuma obra encontrada.</li>';
}
function filtrosObras(box, onChange) {
  box.innerHTML = '<span class="rot">Filtrar</span><button type="button" class="chip" data-cat="" aria-pressed="true">Todas</button>' +
    D.CATEGORIAS.map(c => `<button type="button" class="chip" data-cat="${esc(c.id)}" aria-pressed="false">${esc(c.nome)}</button>`).join('');
  $$('[data-cat]', box).forEach(b => b.addEventListener('click', () => {
    $$('[data-cat]', box).forEach(x => x.setAttribute('aria-pressed', x === b));
    onChange(b.dataset.cat);
  }));
}

function paginaObras() {
  const ul = $('#lista-obras');
  if (!ul) return;
  let cat = new URLSearchParams(location.search).get('cat') || '', primeira = true;
  if (!D.CATEGORIAS.some(c => c.id === cat)) cat = '';
  let q = new URLSearchParams(location.search).get('q') || '';
  const campo = $('#f-busca'), conta = $('#obras-conta');
  campo.value = q;
  function desenhar() {
    const nq = norm(q.trim());
    const itens = D.OBRAS.filter(o => (!cat || o.categoria === cat) &&
      (!nq || norm([o.titulo, o.autor, o.ano, o.descricao].join(' ')).includes(nq)));
    gradeObras(ul, itens);
    conta.textContent = `${itens.length} ${itens.length === 1 ? 'obra' : 'obras'}`;
    if (primeira && location.hash) {
      const a = document.getElementById(location.hash.slice(1));
      if (a) { a.classList.add('destaque'); a.scrollIntoView({ block: 'center' }); }
    }
    primeira = false;
  }
  filtrosObras($('#obras-filtros'), c => { cat = c; desenhar(); });
  $$('#obras-filtros [data-cat]').forEach(x => x.setAttribute('aria-pressed', x.dataset.cat === cat));
  campo.addEventListener('input', () => { q = campo.value; desenhar(); });
  desenhar();
}

/* ============================================================
   Conteúdo de um item do acervo (conteudo.html?id=a1)
   ============================================================ */
function paginaConteudo() {
  const box = $('#conteudo-item');
  if (!box) return;
  const id = new URLSearchParams(location.search).get('id');
  const a = D.ACERVO.find(x => x.id === id);
  if (!a) {
    box.innerHTML = '<h1>Conteúdo não encontrado</h1><p class="lead">Esse tema não existe ou foi removido. <a class="link-forte" href="index.html#acervo">Voltar à biblioteca</a></p>';
    document.title = 'Conteúdo não encontrado · ' + NOME;
    return;
  }
  document.title = `${a.titulo} · ${NOME}`;
  box.innerHTML = `
    <p class="migalha"><a href="index.html">Nausicaä</a> &nbsp;/&nbsp; <a href="index.html#acervo">Biblioteca</a> &nbsp;/&nbsp; ${esc(a.nucleo)}</p>
    <p class="rot-sec">${esc(a.nucleo)} · ${esc(a.nome)}</p>
    <h1 style="margin-top:12px">${esc(a.titulo)}</h1>
    <div class="meta-linha"><span>${esc(a.periodo)}</span></div>
    <div class="acoes" style="margin-bottom:32px">${btnFav('acervo', a.id, a.titulo)}<button class="btn claro" type="button" onclick="window.print()">Imprimir / salvar em PDF</button></div>
    ${a.imagem ? `<div style="max-width:960px;border-radius:8px;overflow:hidden;margin-bottom:32px"><img class="midia" src="${esc(a.imagem)}" alt="${esc(a.titulo)}"></div>` : ''}
    <div class="artigo">
      <p class="lead" style="font-size:19px">${esc(a.descricao)}</p>
      ${(a.corpo || []).map(p => `<p>${esc(p)}</p>`).join('')}
      ${(a.fontes || []).length ? `<h2>Fontes e referências</h2><ul>${a.fontes.map(f => `<li>${f.url ? `<a class="link-forte" style="min-height:0;text-transform:none;letter-spacing:0;font-size:16px;font-weight:500" href="${esc(f.url)}" target="_blank" rel="noopener noreferrer">${esc(f.titulo)} ↗</a>` : esc(f.titulo)}</li>`).join('')}</ul>` : ''}
      ${(a.materiais || []).length ? `<h2 id="materiais">Materiais para baixar</h2><ul class="bloco-lista">${a.materiais.map(m => `<li><a class="link-forte" href="${esc(m.arquivo)}" download>${esc(m.nome)} ↓</a></li>`).join('')}</ul>` : ''}
    </div>`;
}

/* ============================================================
   Página de favoritos
   ============================================================ */
function paginaFavoritos() {
  const box = $('#fav-box');
  if (!box) return;
  function desenhar() {
    const favs = Fav.ler().map(f => ({ f, item: achar(f.tipo, f.id) })).filter(x => x.item);
    $('#fav-conta').textContent = `${favs.length} ${favs.length === 1 ? 'item salvo' : 'itens salvos'}`;
    $('#fav-acoes').hidden = !favs.length;
    if (!favs.length) {
      box.innerHTML = `<div class="fav-vazio"><p style="margin:0 0 16px">Você ainda não favoritou nada. Use o botão com o coração nos temas da biblioteca e nas obras.</p><a class="btn" href="index.html#acervo">Explorar a biblioteca</a></div>`;
      return;
    }
    const grupo = (rot, tipo) => {
      const l = favs.filter(x => x.f.tipo === tipo);
      if (!l.length) return '';
      return `<h2 class="titulo-secao" style="font-size:22px;margin:40px 0 16px">${rot} <span class="contagem">(${l.length})</span></h2>
        <ul class="fav-lista">${l.map(({ item }, k) => `
          <li class="fav-item">
            <div class="mini c${k % 5}">${midia(item, '[ IMG ]')}</div>
            <div><h3>${esc(item.titulo)}</h3><p>${tipo === 'obra' ? esc(item.autor) + (item.ano ? ' · ' + esc(item.ano) : '') : esc(item.nome) + ' · ' + esc(item.periodo)}</p></div>
            <div class="acoes">
              ${tipo === 'acervo' ? `<a class="btn claro" href="conteudo.html?id=${esc(item.id)}">Acessar</a>` : (item.link ? `<a class="btn claro" href="${esc(item.link)}" target="_blank" rel="noopener noreferrer">Ver fonte</a>` : '')}
              ${btnFav(tipo, item.id, item.titulo)}
            </div>
          </li>`).join('')}</ul>`;
    };
    box.innerHTML = grupo('Temas', 'acervo') + grupo('Obras', 'obra');
  }
  document.addEventListener('favs', desenhar);
  $('#fav-limpar').addEventListener('click', () => {
    if (confirm('Remover todos os favoritos deste navegador?')) { Fav.limpar(); atualizarFavs(); }
  });
  $('#fav-baixar').addEventListener('click', () => {
    const L = ['MEUS FAVORITOS · ' + NOME.toUpperCase(), ''];
    Fav.ler().forEach(f => {
      const it = achar(f.tipo, f.id);
      if (!it) return;
      L.push(`- [${f.tipo === 'obra' ? 'Obra' : 'Tema'}] ${it.titulo}${f.tipo === 'obra' ? ' — ' + it.autor : ' — ' + it.periodo}`);
    });
    const blob = new Blob([L.join('\n')], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'nausicaa-favoritos.txt';
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 500);
  });
  desenhar();
}

/* ============================================================
   Revelar ao rolar (discreto; some com movimento reduzido)
   ============================================================ */
function revelar() {
  const els = $$('.revelar');
  if (!els.length) return;
  if (reduz || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('visivel')); return; }
  const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); } }), { threshold: .12 });
  els.forEach(e => obs.observe(e));
}

/* ---------- inicialização ---------- */
textos();
montarTopo();
montarRodape();
busca();
banner();
quiz();
paginaSobre();
abertura();
carrossel();
video();
acervo();
paginaObras();
paginaConteudo();
paginaFavoritos();
atualizarFavs();
revelar();
})();
