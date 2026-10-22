/* ============================================================
   DADOS DO SITE — É AQUI QUE VOCÊ PREENCHE O CONTEÚDO.
   Tudo o que está entre [colchetes] é um espaço para você trocar.


   - imagem: caminho de um arquivo da pasta img/ (ex.: 'img/ww1.jpg').
             Deixe '' para mostrar o bloco cinza de reserva.
   - Para ADICIONAR um item, copie um bloco { ... } e troque o "id"
     por um nome único (ex.: 'a9', 'o13').
   - Para REMOVER, apague o bloco inteiro.
   - Os favoritos usam o "id" para lembrar o que a pessoa salvou:
     não mude o id de itens que já foram publicados.
   ============================================================ */
window.DADOS = {


/* Nome do site (aparece na abertura, no menu, no rodapé e nas abas do navegador).
   Use ': ' para separar a primeira parte da segunda na animação de abertura. */
SITE: { nome: 'Nausicaä: Biblioteca dos Conflitos' },


/* TEXTOS DO SITE — tudo o que aparece escrito nas páginas.
   Para esconder um texto, deixe ''. Parágrafos ficam em listas: ['parágrafo 1', 'parágrafo 2']. */
TEXTOS: {
  acervo: {
    titulo: 'Biblioteca digital de conflitos históricos',
    texto:  'Textos, datas e fontes sobre conflitos que marcaram os séculos XX e XXI, para conhecer o passado e compreender o presente.'
  },
  quiz: {
    rotulo: 'Quiz',
    titulo: 'Teste seus conhecimentos',
    texto:  'Oito perguntas rápidas sobre os conflitos da biblioteca e sobre como resolvê-los.'
  },
  video: {
    rotulo: 'Aprender é a chave',
    titulo: 'CONHECER O PASSADO PARA TRANSFORMAR O FUTURO',
    texto:  ' "Um povo sem memória é um povo sem história, fadado a repetir erros" - Emilia Viotti Da Costa '
  },
  obras: {
    rotulo: 'Biblioteca · Obras',
    titulo: 'Obras',
    texto: 'Obras recomendadas para compreender o processo histórico.'
  },
  solucoes: {
    rotulo: 'Biblioteca · Soluções',
    titulo: 'Nem todo conflito precisa terminar em confronto.',
    texto: 'Conflitos fazem parte da convivência humana. Eles surgem de diferenças de interesses, valores e interpretações. Compreender suas causas é o primeiro passo para construir soluções mais justas.',
    cta: 'Explorar caminhos de solução',

    /* Educação digital */
    educacao: {
      menu: 'Educação digital',
      rotulo: 'Educação digital',
      titulo: 'Conviver também é aprender',
      texto: 'Nas redes valem as mesmas regras de uma boa conversa: respeito, empatia e responsabilidade.',
      cards: [
        { titulo: 'Comunicação consciente', itens: [
          'Discordar de ideias sem atacar pessoas.',
          'Evitar respostas impulsivas.' ] },
        { titulo: 'Empatia e respeito', itens: [
          'Considerar outras perspectivas.',
          'Lembrar que palavras afetam pessoas.' ] },
        { titulo: 'Responsabilidade nas redes', itens: [
          'Não compartilhar boatos sem verificar.',
          'Não participar de humilhação ou perseguição.' ] },
        { titulo: 'Mediação on-line', itens: [
          'Não aumentar a discussão; usar a denúncia da plataforma.',
          'Em situações graves, procurar um adulto responsável.' ] }
      ],
      exemplosTitulo: 'Na prática: reagir ou responder?',
      exemplosTexto: '',
      exemplos: [
        { titulo: 'Um comentário ofensivo',
          situacao: 'No grupo da turma, um colega comenta que o trabalho que você postou “ficou horrível”.',
          impulsiva: { fala: '“Horrível é o seu!”',
                       efeito: 'A conversa vira troca de ofensas e ninguém aprende com a crítica.' },
          construtiva: { fala: '“Se você tem sugestões sobre o trabalho, pode dizer o que ficou fraco? Prefiro conversar sem ofensas.”',
                         efeito: 'Você separa a crítica da agressão e abre espaço para uma conversa útil.' } }
      ]
    },

    /* Seis etapas */
    etapas: {
      menu: 'Seis etapas',
      rotulo: 'Guia prático',
      titulo: 'Seis etapas para resolver um conflito',
      texto: 'Toque em cada etapa para ver a ideia, uma pergunta e uma ação.',
      avisoTitulo: 'Atenção',
      aviso: 'Este caminho serve para conversas seguras. Se houver ameaça, violência ou muita diferença de poder, procure um adulto responsável ou a equipe da escola.',
      lista: [
        { titulo: 'Identificar o problema',
          explicacao: 'Separe o que aconteceu, como cada pessoa interpretou e o que cada uma precisa.',
          pergunta: 'Se eu contasse só os fatos, o que diria?',
          acao: 'Anote fatos, interpretações e necessidades antes de conversar.' },
        { titulo: 'Levantar possibilidades',
          explicacao: 'Faça um brainstorming: liste ideias de todos, sem julgar cedo demais.',
          pergunta: 'Que ideia ainda não consideramos?',
          acao: 'Dê 10 minutos para anotar tudo antes de avaliar.' },
        { titulo: 'Avaliar as alternativas',
          explicacao: 'Compare consequências, riscos, viabilidade e justiça para todos os envolvidos.',
          pergunta: 'Quem seria prejudicado por esta alternativa?',
          acao: 'Monte uma tabela simples com esses critérios.' },
        { titulo: 'Construir uma solução',
          explicacao: 'Impor, votar e construir um acordo são coisas diferentes. Se houver coerção ou risco, ninguém deve ser pressionado a aceitar.',
          pergunta: 'Todos aceitam por vontade própria?',
          acao: 'Peça que cada pessoa repita o acordo com suas palavras.' },
        { titulo: 'Colocar em prática',
          explicacao: 'Um acordo deixa claro o que será feito, por quem e até quando.',
          pergunta: 'Está claro o quê, quem e quando?',
          acao: 'Registre o acordo por escrito.' },
        { titulo: 'Avaliar os resultados',
          explicacao: 'Verifique se deu certo. Se o problema persistir, revise as alternativas ou busque ajuda.',
          pergunta: 'O que aprendemos para a próxima vez?',
          acao: 'Marque uma data para revisar o combinado.' }
      ]
    },

    /* Métodos */
    metodos: {
      menu: 'Métodos',
      rotulo: 'Métodos',
      titulo: 'Métodos de resolução',
      texto: '',
      nota: 'Os métodos não servem para tudo: a escolha depende do tipo de conflito e das condições de segurança.',
      lista: [
        { titulo: 'Diálogo e negociação', texto: 'As pessoas envolvidas conversam para entender seus interesses e chegar a um acordo.' },
        { titulo: 'Mediação', texto: 'Uma terceira pessoa imparcial facilita a conversa, sem impor uma decisão.' },
        { titulo: 'Práticas restaurativas', texto: 'Buscam entender os danos, reconhecer responsabilidades e, quando seguro, reparar.' },
        { titulo: 'Conciliação', texto: 'Uma terceira pessoa aproxima as partes e sugere alternativas de acordo.' },
        { titulo: 'Intervenção responsável', texto: 'Com violência, ameaça ou grande desequilíbrio de poder, é preciso envolver responsáveis, profissionais ou autoridades.' }
      ]
    },

    /* Simulador */
    simulador: {
      menu: 'Simulador',
      rotulo: 'Simulador',
      titulo: 'O que você faria?',
      texto: 'Escolha uma situação e uma atitude para ver as consequências prováveis.',
      cenarios: [
        { id: 'A', titulo: 'Colegas',
          situacao: 'Dois estudantes discordam sobre a divisão de tarefas de um trabalho.',
          opcoes: [
            { texto: 'Acusar o colega de não colaborar.', tendencia: 'agrava',
              feedback: 'Acusações deixam a outra pessoa na defensiva, e a divisão do trabalho continua sem solução.' },
            { texto: 'Evitar o assunto.', tendencia: 'adia',
              feedback: 'O incômodo acumula e costuma reaparecer maior, perto do prazo.' },
            { texto: 'Conversar sobre as responsabilidades e combinar uma divisão mais clara.', tendencia: 'constroi',
              feedback: 'Falar de fatos e necessidades, com tarefas e prazos definidos, previne novos atritos.' }
          ] },
        { id: 'B', titulo: 'Redes sociais',
          situacao: 'Uma publicação gera comentários ofensivos e a discussão começa a se intensificar.',
          opcoes: [
            { texto: 'Responder no mesmo tom.', tendencia: 'agrava',
              feedback: 'Responder com agressão alimenta a escalada e atrai mais gente para a briga.' },
            { texto: 'Compartilhar prints para expor quem ofendeu.', tendencia: 'agrava',
              feedback: 'Expor alguém pode virar nova campanha de humilhação. Prints servem de prova para quem pode agir, não para divulgar.' },
            { texto: 'Parar de alimentar a discussão, denunciar e, se for grave, falar com um adulto.', tendencia: 'constroi',
              feedback: 'Interromper a escalada e usar os canais de denúncia protege você e os outros.' }
          ] },
        { id: 'C', titulo: 'Violência',
          situacao: 'Um estudante presencia uma agressão ou intimidação persistente contra um colega.',
          alerta: 'Em situações de violência, a prioridade é a segurança. Ninguém deve confrontar sozinho quem agride.',
          opcoes: [
            { texto: 'Confrontar sozinho quem está agredindo.', tendencia: 'risco',
              feedback: 'Pode aumentar o risco para você e para quem já está sendo atingido.' },
            { texto: 'Fingir que não viu.', tendencia: 'adia',
              feedback: 'O silêncio tende a deixar a situação continuar. Avisar um adulto não é “dedurar”: é ajudar a interromper um dano.' },
            { texto: 'Procurar um adulto responsável ou a equipe da escola e depois apoiar o colega.', tendencia: 'seguranca',
              feedback: 'Acionar quem pode intervir protege a vítima e você.' }
          ] }
      ]
    },

    /* Caso */
    caso: {
      menu: 'Mediadores mirins',
      rotulo: 'Mediação na prática',
      titulo: 'O caso dos mediadores mirins',
      texto: 'Em Araçatuba (SP), um projeto de mediação escolar descrito em material didático formou estudantes para ajudar a resolver conflitos na própria escola.',
      pontos: [
        { titulo: 'Capacitação de estudantes' },
        { titulo: 'Prática do diálogo' },
        { titulo: 'Justiça restaurativa' },
        { titulo: 'Aconselhamento individual e coletivo' },
        { titulo: 'Círculos restaurativos' },
        { titulo: 'Participação da comunidade' }
      ],
      reflexao: '',
      aviso: 'Exemplo documentado em material didático. Aqui aparecem só as linhas gerais, sem números ou resultados.',
      fonte: '[Indicar título, autor e ano do material didático usado]'
    },

    /* Do cotidiano ao mundo */
    mundo: {
      menu: 'Conflitos mundiais',
      rotulo: 'Do cotidiano ao mundo',
      titulo: 'Dos conflitos cotidianos aos mundiais',
      texto: 'A violência em grande escala raramente surge do nada: costuma ser alimentada por rivalidades não resolvidas, discriminação e propaganda. Prevenir exige acordos entre países e atitudes do dia a dia.',
      estrategiasTitulo: '',
      estrategias: [],
      exemplosTitulo: '',
      limitesTitulo: 'Limites',
      limites: 'Nem todo conflito se resolve só pelo diálogo: desigualdades de poder, violações de direitos e a dificuldade de cumprir acordos limitam qualquer método. A Liga das Nações não impediu a Segunda Guerra, e em 2022 o veto russo paralisou o Conselho de Segurança da ONU.'
    },
    caminhos: [
      { titulo: 'Diálogo e negociação', acervo: ['a4'],
        texto: 'A Crise dos Mísseis (1962) terminou sem guerra nuclear porque houve negociação: os soviéticos desistiram dos mísseis em Cuba e os Estados Unidos retiraram os seus da Turquia.' },
      { titulo: 'Educação histórica e pensamento crítico', acervo: ['a3'],
        texto: 'Museus e memoriais, como os dedicados ao Holocausto, ensinam o que aconteceu para que não se repita e ajudam a reconhecer sinais que antecedem a violência.' },
      { titulo: 'Direitos humanos e proteção de civis', acervo: ['a8'],
        texto: 'A Declaração Universal dos Direitos Humanos (1948) nasceu para evitar novas guerras. Hoje, a ONU pede que os beligerantes na Ucrânia poupem a população civil.' },
      { titulo: 'Combate à discriminação e à desinformação', acervo: ['a3', 'a5'],
        texto: 'O Holocausto começou com acusações falsas contra os judeus. Em 2003, a invasão do Iraque foi justificada por alegações que se mostraram falsas. Checar fontes enfraquece o caminho para a violência.' },
      { titulo: 'Cooperação e participação cidadã', acervo: ['a6'],
        texto: 'A Primavera Árabe mostrou o poder da participação popular por justiça e direitos. Na ONU, a Assembleia Geral condenou a invasão da Ucrânia com 141 votos a favor.' }
    ],

    /* Cultura de paz */
    paz: {
      menu: 'Cultura de paz',
      rotulo: 'Cultura de paz',
      titulo: 'Construir uma cultura de paz',
      texto: '',
      pilares: [
        { titulo: 'Diálogo construtivo', texto: 'Expressar opiniões, ouvir e negociar.' },
        { titulo: 'Intervenção preventiva', texto: 'Reconhecer conflitos e buscar ajuda antes que se agravem.' },
        { titulo: 'Cultura de respeito', texto: 'Valorizar a diversidade e rejeitar a humilhação.' }
      ],
      frase: 'Resolver um conflito não significa apagar as diferenças, mas encontrar maneiras de conviver com elas sem transformar divergências em violência.'
    }
  },
  sobre: {
    rotulo: 'Biblioteca · Sobre',
    titulo: 'Sobre',
    texto: 'Um projeto educativo para aprender com os conflitos do passado e construir a paz no presente.',
    secoes: [
      { titulo: 'Por que Nausicaä?',
        texto: ['O nome vem de “Nausicaä do Vale do Vento” (1984), filme de Hayao Miyazaki. Em um mundo devastado por uma guerra, a jovem princesa Nausicaä procura compreender em vez de destruir e busca a convivência entre humanos e natureza, enquanto reinos disputam o território pelas armas.',
                'Esse olhar pacifista inspirou o projeto: uma biblioteca para estudar conflitos reais sem perder de vista a possibilidade de superá-los.'] },
      { titulo: 'Educação digital como método',
        texto: ['O site usa recursos digitais para aprender de forma ativa: textos curtos com fontes indicadas, busca e filtros, quiz, simulador de situações e favoritos para montar uma lista própria de estudo. Em vez de apenas ler, a pessoa compara fontes, testa o que aprendeu e treina como agir diante de situações simuladas, inclusive nas redes.'] },
      { titulo: 'Do macro ao micro',
        texto: ['Estudar os grandes conflitos ajuda a entender os pequenos. Nas guerras e crises aparecem os mesmos ingredientes das brigas do dia a dia: interesses diferentes, interpretações tratadas como fatos, discriminação, desinformação e falta de diálogo.',
                'Ao reconhecer esses padrões na história, aprendemos a identificá-los em casa, na escola e nas redes, e a usar ferramentas parecidas: negociar, checar fontes, ouvir o outro e pedir ajuda quando há risco. O macro nos dá exemplos e alertas; o micro é onde podemos agir.'] },
      { titulo: 'Fontes',
        texto: ['Os textos são resumos escolares feitos a partir de fontes acadêmicas, institucionais e jornalísticas, indicadas ao final de cada conteúdo. Números de vítimas variam conforme a fonte e devem ser lidos como estimativas. Referência geral: HOBSBAWM, Eric. A era dos extremos: o breve século XX. São Paulo: Companhia das Letras, 1995.'] },
      { titulo: 'Créditos das imagens',
        texto: ['[Preencher com o autor, a fonte e a licença de cada imagem usada no site]'] },
      { titulo: 'Responsáveis',
        texto: ['Grupo 4 de Projeto Integrador: Intervenção Cidadã — Arthur Barbosa, João Gabriel, Kaio Henrique, Mariana Prates e Victoria.'] }
    ]
  },
  rodape: {
    descricao:    'Trabalho realizado pelo grupo 4 de Projeto Integrador: Intervenção Cidadã',
    creditos:     '',
    responsaveis: 'Arthur Barbosa, João Gabriel, Kaio Henrique, Mariana Prates, Victoria'
  }
},


/* Faixa que leva às Obras (início da página, depois da biblioteca).
   imagem: PNG sem fundo, ex.: 'img/banner.png' (deixe '' para ver o espaço reservado).
   fundo:  cor de fundo da faixa (qualquer cor CSS) — o padrão é um azul bem escuro. */
BANNER: {
  rotulo: 'Obras recomendadas',
  titulo: 'O CONHECIMENTO COMO SEMEADURA DA PAZ',
  texto:  'Filmes, livros, animações e relatos que ajudam a entender os conflitos do passado e a imaginar caminhos para a paz.',
  botao:  'Ver obras recomendadas',
  imagem: 'https://i.imgur.com/5NU5L1w.jpg',
  fundo:  '#628ab7de'
},


/* Vídeo "Como funciona o site".
   src: cole o link do YouTube (de preferência como "Não listado"), do Vimeo ou do Google Drive
        — ex.: 'https://www.youtube.com/watch?v=XXXXXXXXXXX'
        — ou o caminho de um arquivo pequeno seu, ex.: 'video/apresentacao.mp4'.
   O tipo é reconhecido sozinho. Deixe src vazio para mostrar o espaço reservado.
   Vídeo grande NÃO vai para o GitHub: suba no YouTube e cole só o link aqui (veja o LEIA-ME). */
VIDEO: { src: 'https://youtu.be/rE_g1rjFdRQ?si=UX54lAxAXnN9Qoky', legenda: '' },


/* Quiz da página inicial. correta = posição da resposta certa (0 = primeira).
   tema (opcional) = id de um tema da biblioteca, para o botão "Saiba mais". */
QUIZ: [
  { pergunta: 'Qual acontecimento foi o estopim da Primeira Guerra Mundial?',
    opcoes: ['A invasão da Polônia', 'O assassinato do arquiduque Francisco Ferdinando', 'A queda do Muro de Berlim', 'O ataque a Pearl Harbor'],
    correta: 1, tema: 'a1',
    explicacao: 'O assassinato do arquiduque, em 28 de junho de 1914, levou à declaração de guerra da Áustria-Hungria à Sérvia, mas as causas eram mais profundas: rivalidades entre as potências europeias.' },
  { pergunta: 'O Holocausto também é chamado de…',
    opcoes: ['Nakba', 'Holodomor', 'Shoah', 'Kominform'],
    correta: 2, tema: 'a3',
    explicacao: 'Shoah é a palavra hebraica para “catástrofe”. Nakba se refere ao êxodo palestino de 1948, e Holodomor à grande fome na Ucrânia soviética.' },
  { pergunta: 'Como a Crise dos Mísseis (1962) foi resolvida?',
    opcoes: ['Por uma guerra nuclear limitada', 'Por negociação entre soviéticos e americanos', 'Pela invasão de Cuba', 'Pela intervenção da OTAN'],
    correta: 1, tema: 'a4',
    explicacao: 'Os soviéticos desistiram de instalar mísseis em Cuba e, meses depois, os Estados Unidos retiraram os seus da Turquia.' },
  { pergunta: 'Em qual país começaram os protestos da Primavera Árabe?',
    opcoes: ['Egito', 'Síria', 'Líbia', 'Tunísia'],
    correta: 3, tema: 'a6',
    explicacao: 'Os protestos começaram na Tunísia, em dezembro de 2010, após a morte de Mohamed Bouazizi, e depois se espalharam por outros países.' },
  { pergunta: 'O que significa “Nakba”?',
    opcoes: ['Catástrofe', 'Resistência', 'Acordo', 'Fronteira'],
    correta: 0, tema: 'a7',
    explicacao: 'Nakba, palavra árabe para “catástrofe”, designa o êxodo palestino durante e depois da guerra de 1948.' },
  { pergunta: 'Quantos votos a favor teve, na Assembleia Geral da ONU, a resolução de março de 2022 que condenou a invasão da Ucrânia?',
    opcoes: ['41', '93', '141', '193'],
    correta: 2, tema: 'a8',
    explicacao: 'A resolução teve 141 votos a favor, 5 contra e 35 abstenções.' },
  { pergunta: 'Na primeira etapa para resolver um conflito, o que devemos fazer?',
    opcoes: ['Escolher um culpado', 'Separar fatos, interpretações e necessidades', 'Votar rapidamente', 'Evitar o assunto'],
    correta: 1,
    explicacao: 'Entender o que aconteceu e o que cada pessoa precisa evita que interpretações sejam tratadas como fatos. Veja o guia completo na aba Soluções.' },
  { pergunta: 'Ao presenciar uma agressão persistente contra um colega, qual é a prioridade?',
    opcoes: ['Confrontar sozinho quem agride', 'Gravar e publicar nas redes', 'Garantir a segurança e procurar um adulto responsável', 'Esperar que passe'],
    correta: 2,
    explicacao: 'Em situações de violência, a segurança vem primeiro. Acionar a equipe da escola ou um adulto responsável protege a vítima e você.' }
],

/* Categorias da página Obras */
CATEGORIAS: [
  { id: 'filmes',    nome: 'Filmes e documentários' },
  { id: 'animacao',  nome: 'Animação' },
  { id: 'livros',    nome: 'Livros de história' },
  { id: 'relatos',   nome: 'Relatos e memória' },
  { id: 'paz',       nome: 'Paz e direitos humanos' },
  { id: 'filosofia', nome: 'Filosofia' },
  { id: 'sociedade', nome: 'Política, economia e sociedade' }
],



/* Carrossel da página inicial. "acervo" liga o slide a um item do ACERVO (id). */
CARROSSEL: [
  { id: 'c1', titulo: 'Primeira Guerra Mundial', periodo: '1914-1918', imagem: 'img/worldwar1.webp', acervo: 'a1' },
  { id: 'c2', titulo: 'Segunda Guerra Mundial', periodo: '1939-1945', imagem: 'img/worldwar2.webp', acervo: 'a2' },
  { id: 'c3', titulo: 'Holocausto', periodo: '1933-1945', imagem: 'img/holocaust.webp', acervo: 'a3' },
  { id: 'c4', titulo: 'Guerra Fria', periodo: '1947-1991', imagem: 'img/coldwar.webp', acervo: 'a4' },
  { id: 'c5', titulo: '11 de setembro', periodo: '2001', imagem: 'img/setembro.webp', acervo: 'a5' },
  { id: 'c6', titulo: 'Primavera Árabe', periodo: '2010-2012', imagem: 'img/primavera.webp', acervo: 'a6' },
  { id: 'c7', titulo: 'Questão Palestina', periodo: 'Final do século XIX – atualidade', imagem: 'img/palestina.webp', acervo: 'a7' },
  { id: 'c8', titulo: 'Guerra na Ucrânia', periodo: '2014–atualidade', imagem: 'img/ucrania.webp', acervo: 'a8' },
],


/* Arquivo digital. secs: [20] = século XX, [21] = século XXI, [20,21] = ambos.
   corpo: parágrafos da página "Acessar conteúdo".
   fontes: lista de { titulo, url }.
   materiais: lista de { nome, arquivo } — só aparece o botão "Baixar materiais" se houver itens.
              Coloque o arquivo na pasta materiais/ e escreva 'materiais/nome.pdf'. */
ACERVO: [
  { id: 'a1', nucleo: 'A', nome: 'Primeira Guerra Mundial', secs: [20],
    titulo: 'Primeira Guerra Mundial', periodo: '1914-1918',
    descricao: 'Conflito global entre a Tríplice Aliança e a Tríplice Entente que redesenhou o mapa político da Europa e do Oriente Médio.', imagem: 'img/worldwar1.webp',
    corpo: [
      'A Primeira Guerra Mundial opôs a Tríplice Aliança (Alemanha, Áustria-Hungria e Itália) à Tríplice Entente (França, Inglaterra e Rússia). O estopim foi o assassinato do arquiduque Francisco Ferdinando, da Áustria, em 28 de junho de 1914, e a declaração de guerra da Áustria-Hungria à Sérvia, em 28 de julho. As causas, porém, eram mais profundas: rivalidades e choques de interesses entre as potências europeias no início do século XX. O conflito se ampliou com a entrada de novos países; a Itália, por exemplo, mudou de lado em 1915.',
      'Depois de uma fase inicial de movimentos rápidos, em 1914, a guerra se transformou em guerra de trincheiras, com batalhas longas e muito sangrentas. A de Verdun, em 1916, terminou com cerca de 550 mil baixas francesas e 450 mil alemãs, e a ofensiva do Somme começou em 1º de julho do mesmo ano. Em 1917, os Estados Unidos declararam guerra à Alemanha; a Rússia, abalada pela revolução, assinou um armistício e, em março de 1918, o Tratado de Brest-Litovsk com os alemães.',
      'A Alemanha assinou o armistício em 11 de novembro de 1918. O Tratado de Versalhes, de 28 de junho de 1919, responsabilizou os alemães pela guerra e lhes impôs severas punições, o que gerou ressentimento e é apontado como um dos fatores que contribuíram para a ascensão do nazismo. Também foi criada a Liga das Nações, para que os países resolvessem seus conflitos pela diplomacia. As estimativas de mortos variam conforme a fonte, de 10 a 20 milhões de pessoas, incluindo milhões de civis.'
    ],
    fontes: [
      { titulo: 'Library of Congress — Timeline (1914–1921), Stars and Stripes', url: 'https://www.loc.gov/collections/stars-and-stripes/articles-and-essays/a-world-at-war/timeline-1914-1921/' },
      { titulo: 'Toda Matéria — Primeira Guerra Mundial (1914-1918): o que foi, as causas e consequências', url: 'https://www.todamateria.com.br/primeira-guerra-mundial/' },
      { titulo: 'Toda Matéria — Consequências da Primeira Guerra Mundial', url: 'https://www.todamateria.com.br/consequencias-da-primeira-guerra-mundial/' },
      { titulo: 'Brasil Escola/PreparaENEM — Primeira Guerra Mundial', url: 'https://www.preparaenem.com/amp/historia/primeira-guerra-mundial.htm' }
    ],
    materiais: [] },


  { id: 'a2', nucleo: 'B', nome: 'Segunda Guerra Mundial', secs: [20],
    titulo: 'Segunda Guerra Mundial', periodo: '1939-1945',
    descricao: 'A guerra mais letal e destrutiva da história, travada entre as potências Aliadas e as do Eixo.', imagem: 'img/worldwar2.webp',
    corpo: [
      'A Segunda Guerra Mundial começou em 1939 e terminou em 1945, e é considerada a guerra mais letal e destrutiva da história. Mais de cinquenta nações participaram, com mais de 100 milhões de soldados mobilizados. De um lado estavam as potências Aliadas, como Estados Unidos e Grã-Bretanha; do outro, as do Eixo, como Alemanha e Japão.',
      'Antes da guerra, o mundo atravessava a Grande Depressão, com crise econômica, desemprego muito alto e inflação. Nesse cenário, Adolf Hitler foi nomeado chanceler da Alemanha em 1933, após vitórias eleitorais do Partido Nazista, e governou de forma absoluta até a sua morte, em abril de 1945.',
      'Contra o Eixo formou-se a Grande Aliança entre Grã-Bretanha, Estados Unidos e União Soviética, decisiva para a vitória, embora os três países não compartilhassem os mesmos objetivos políticos nem concordassem sempre sobre como conduzir a guerra. A guerra também afetou civis longe dos campos de batalha: nos Estados Unidos, por exemplo, famílias de origem japonesa foram forçadas a deixar suas casas na costa oeste e a viver em centros de relocação cercados por arame farpado.'
    ],
    fontes: [
      { titulo: 'The National WWII Museum — Explore WWII History', url: 'https://www.nationalww2museum.org/students-teachers/student-resources/explore-wwii-history' },
      { titulo: 'The National WWII Museum — The Big Three', url: 'https://www.nationalww2museum.org/war/articles/big-three' },
      { titulo: 'The National WWII Museum — How Did Adolf Hitler Happen?', url: 'https://www.nationalww2museum.org/war/articles/how-did-adolf-hitler-happen' },
      { titulo: 'The National WWII Museum — High School Life at Rohwer War Relocation Center', url: 'https://www.nationalww2museum.org/war/articles/high-school-life-rohwer-war-relocation-center' }
    ],
    materiais: [] },


  { id: 'a3', nucleo: 'C', nome: 'Holocausto', secs: [20],
    titulo: 'Holocausto', periodo: '1933–1945',
    descricao: 'Perseguição e assassinato sistemáticos de cerca de seis milhões de judeus europeus pelo regime nazista e seus colaboradores.', imagem: 'img/holocaust.webp',
    corpo: [
      'Segundo a Enciclopédia do Holocausto, do Museu Memorial do Holocausto dos Estados Unidos (USHMM), o Holocausto foi a perseguição e o assassinato sistemáticos de aproximadamente seis milhões de judeus europeus, patrocinados pelo regime nazista alemão e seus colaboradores. O fato também é chamado de Shoah, palavra hebraica que significa “catástrofe”. Ele começou em 1933, quando Adolf Hitler e o Partido Nazista chegaram ao poder na Alemanha.',
      'Os nazistas acusaram falsamente os judeus de causar os problemas sociais, econômicos, políticos e culturais da Alemanha e de serem responsáveis pela derrota do país na Primeira Guerra Mundial. A perseguição avançou por etapas: em 1935, os judeus alemães perderam a cidadania; na noite de 9 para 10 de novembro de 1938, multidões atacaram propriedades de judeus em toda a Alemanha e milhares de pessoas foram presas. Depois vieram os guetos, os campos de concentração e, na chamada “solução final”, os campos de extermínio, como Auschwitz, Birkenau, Treblinka, Sobibor e Majdanek.',
      'Os nazistas também perseguiram e mataram ciganos, homossexuais, pessoas com deficiência e opositores do regime. Não há um número exato de vítimas judias: pesquisas do Yad Vashem, o Centro Mundial de Memória do Holocausto, indicam entre cinco e seis milhões. Hoje, museus e datas de memória ensinam o que aconteceu com a esperança de ajudar a impedir que algo semelhante se repita.'
    ],
    fontes: [
      { titulo: 'National Geographic Brasil — O que foi o Holocausto e por que existe uma data para lembrar o que aconteceu?', url: 'https://www.nationalgeographicbrasil.com/historia/2024/01/o-que-foi-o-holocausto-e-por-que-existe-uma-data-para-lembrar-o-que-aconteceu' },
      { titulo: 'USHMM — Enciclopédia do Holocausto: O que foi o Holocausto?', url: 'https://encyclopedia.ushmm.org/content/pt-br/article/introduction-to-the-holocaust' },
      { titulo: 'Secretaria de Educação de Santo Antônio de Pádua (RJ) — O Holocausto (adaptado da Britannica Escola)', url: 'https://seceducacao.padua.rj.gov.br/wp-content/uploads/2021/08/Historia.9ano.pdf' },
      { titulo: 'Vestibulando Web — Holocausto: o que foi?', url: 'https://www.vestibulandoweb.com.br/historia/holocausto/amp/' }
    ],
    materiais: [] },


  { id: 'a4', nucleo: 'D', nome: 'Guerra Fria', secs: [20],
    titulo: 'Guerra Fria', periodo: '1947-1991',
    descricao: 'Disputa política, econômica e ideológica entre Estados Unidos e União Soviética, sem confronto militar direto entre as duas potências.', imagem: 'img/coldwar.webp',
    corpo: [
      'A Guerra Fria foi um período de disputa política, econômica e ideológica entre dois blocos de países: os capitalistas, liderados pelos Estados Unidos, e os socialistas, liderados pela União Soviética. Começou após a Segunda Guerra Mundial, em 1947, quando o presidente Harry Truman afirmou que os EUA poderiam intervir para proteger a “liberdade dos povos” ameaçada em qualquer parte do mundo. Recebeu esse nome porque as duas potências nunca se enfrentaram diretamente em uma guerra. No mesmo ano, o Plano Marshall ofereceu ajuda econômica à Europa Ocidental, e os soviéticos responderam com o Kominform e, em 1949, com o Comecon. A divisão da Europa entre os dois blocos ficou conhecida como “cortina de ferro”.',
      'Duas alianças militares foram formadas: a OTAN, em 1949, e o Pacto de Varsóvia, em 1955. As tensões aumentaram com a construção do Muro de Berlim, em 1961, que dividiu a cidade e se tornou o grande símbolo da época, e com a Crise dos Mísseis, em 1962, quando a tentativa soviética de instalar mísseis em Cuba levou os EUA a bloquear a ilha pelo mar. A crise foi resolvida por negociação: os soviéticos desistiram dos mísseis e, meses depois, os americanos retiraram os seus da Turquia. A disputa também marcou a Corrida Espacial, com o satélite soviético Sputnik, em 1957, e a chegada do homem à Lua pelos americanos, em 1969.',
      'A queda do Muro de Berlim, em 1989, simbolizou o enfraquecimento dos regimes socialistas do Leste Europeu; as duas Alemanhas foram unificadas em outubro de 1990. O fim da Guerra Fria costuma ser marcado pela dissolução da União Soviética, em 1991, da qual surgiram quinze novos países. Entre os resquícios do período estão a separação entre as Coreias do Norte e do Sul e a tensão nas relações entre Rússia e Estados Unidos.'
    ],
    fontes: [
      { titulo: 'Toda Matéria — Guerra Fria: o que foi, suas causas e consequências (resumo)', url: 'https://www.todamateria.com.br/guerra-fria/' }
    ],
    materiais: [] },


  { id: 'a5', nucleo: 'E', nome: '11 de Setembro', secs: [21],
    titulo: 'Atentados de 11 de Setembro', periodo: '2001',
    descricao: 'Série de atentados da Al-Qaeda em território norte-americano que deixou 2.996 mortos e deu origem à chamada “guerra ao terror”.', imagem: 'img/setembro.webp',
    corpo: [
      'Em 11 de setembro de 2001, a organização Al-Qaeda realizou um grande atentado dentro do território dos Estados Unidos, que deixou 2.996 mortos. O episódio marcou profundamente o início do século XXI e mudou a política externa e de segurança de vários países.',
      'O governo de George W. Bush respondeu com a chamada “guerra ao terror”. Em outubro de 2001, tropas lideradas pelos Estados Unidos invadiram o Afeganistão, onde o regime do Talibã havia dado abrigo à Al-Qaeda. A guerra durou cerca de 20 anos e terminou em 2021, com a retirada das tropas norte-americanas e o rápido retorno do Talibã ao poder.',
      'Em 2003, os Estados Unidos também invadiram o Iraque. As justificativas apresentadas, como supostas ligações de Saddam Hussein com os atentados e a existência de armas de destruição em massa, mostraram-se falsas. Segundo o projeto Cost of War, citado em reportagem da DW, os vinte anos de “guerra ao terror” custaram apenas aos Estados Unidos cerca de oito trilhões de dólares.'
    ],
    fontes: [
      { titulo: 'História do Mundo — Guerra do Afeganistão de 2001', url: 'https://www.historiadomundo.com.br/idade-contemporanea/guerra-do-afeganistao-de-2001.htm' },
      { titulo: 'Vestibulando Web — Guerra do Afeganistão (2001–2021)', url: 'https://www.vestibulandoweb.com.br/historia/guerra-do-afeganistao-2001-2021/amp/' },
      { titulo: 'DW (reproduzido pelo Jornal Grande Bahia) — 11 de Setembro de 2001: a “guerra ao terror” e as consequências para o mundo', url: 'https://jornalgrandebahia.com.br/?p=925153' },
      { titulo: 'Faculdade Damas — Guerra global ao terror: as mudanças no fenômeno da guerra e no sistema internacional pós 11 de Setembro', url: 'https://revistas.faculdadedamas.edu.br/index.php/academico/article/download/885/710/3031' }
    ],
    materiais: [] },


  { id: 'a6', nucleo: 'F', nome: 'Primavera Árabe', secs: [21],
    titulo: 'Primavera Árabe', periodo: '2010–2012',
    descricao: 'Uma onda de protestos e revoltas políticas em países árabes.',
    imagem: 'img/primavera.webp',
    corpo: [
      'A Primavera Árabe foi uma série de protestos de rua nos países árabes do norte da África e do Oriente Médio, a partir de 2010. O cenário era de repressão, descontentamento popular, perda de direitos fundamentais, altos níveis de desemprego, corrupção e pobreza. Os protestos começaram na Tunísia, após a morte de Mohamed Bouazizi, um vendedor ambulante que ateou fogo ao próprio corpo em 17 de dezembro de 2010 para protestar contra o confisco de seus bens de trabalho pelas autoridades. O ditador Zine El Abidin Ben Ali deixou o poder depois de mais de duas décadas.',
      'A revolta influenciou outros países, como Argélia, Líbia, Jordânia, Iêmen, Egito, Síria, Iraque e Bahrein. No Egito, jovens usaram as redes sociais para pedir o fim do regime de Hosni Mubarak, que governava havia cerca de 30 anos, e cerca de um milhão de pessoas se concentraram na Praça Tahrir, no Cairo. Os movimentos reivindicavam justiça, democracia, direitos humanos, dignidade e liberdade em relação aos abusos policiais.',
      'Como os meios de comunicação tradicionais eram censurados e controlados pelos governos, as redes sociais se tornaram o principal canal para divulgar informações e mobilizar pessoas, com protagonismo dos jovens. Os desdobramentos foram diferentes em cada país, e o tema segue sendo estudado por pesquisadores.'
    ],
    fontes: [
      { titulo: 'FFLCH-USP — Primavera Árabe (entrevista com Denise Bazzan, Hoje na História, 2023)', url: 'https://www.fflch.usp.br/50927' },
      { titulo: 'BAZZAN, Denise. Primavera árabe: a força da disseminação da informação pelo meio digital e sua forma de construção de sentido (dissertação, USP)', url: 'https://teses.usp.br/teses/disponiveis/8/8159/tde-18052015-170048/pt-br.php' }
    ],
    materiais: [] },


  { id: 'a7', nucleo: 'G', nome: 'Questão Palestina', secs: [20, 21],
    titulo: 'Questão Palestina', periodo: 'Final do século XIX–atualidade',
    descricao: 'Um conflito histórico envolvendo território, autodeterminação e direitos nacionais.',
    imagem: 'img/palestina.webp',
    corpo: [
      'A questão palestina possui raízes no final do século XIX e envolve disputas territoriais e nacionais. Entre 1920 e 1948, a Palestina esteve sob o Mandato Britânico. Em 1947, após o Holocausto, a Assembleia Geral da ONU aprovou um plano de partilha que previa dois Estados, um judeu e um árabe, com Jerusalém sob controle internacional. A Agência Judaica aceitou o plano; a Liga Árabe o rejeitou. Estudiosos lembram ainda que os palestinos não foram consultados.',
      'Em 14 de maio de 1948, David Ben-Gurion proclamou o Estado de Israel, e começou a guerra árabe-israelense. Ao fim dela, Israel controlava cerca de 40% da área que o plano da ONU havia destinado ao Estado árabe. O êxodo palestino durante e depois da guerra é chamado de Nakba, palavra árabe que significa “catástrofe”: estima-se que cerca de 700 mil palestinos tenham sido deslocados. Em dezembro de 1948, a ONU aprovou a Resolução 194, que reconhece aos refugiados o direito de retornar, e criou depois a UNRWA para assistir essa população.',
      'Nas décadas seguintes, a causa palestina foi tratada sobretudo por países árabes vizinhos, até a criação da Organização para a Libertação da Palestina (OLP), na década de 1960. Hoje, a maioria dos moradores da Faixa de Gaza é formada por refugiados ou descendentes de refugiados de 1948. A criação de Israel e a Nakba redefiniram o mapa político, étnico, religioso e nacional da região e continuam a influenciar a geopolítica do Oriente Médio.'
    ],
    fontes: [
      { titulo: 'BBC News Brasil (republicado pela IstoÉ) — O que foi a Nakba palestina e por que ela é importante', url: 'https://istoe.com.br/o-que-foi-a-nakba-palestina-e-por-que-ela-e-importante' },
      { titulo: 'Poder360 — Entenda o que foi a Nakba, a “catástrofe” palestina', url: 'https://www.poder360.com.br/historia/entenda-o-que-foi-a-nakba-a-catastrofe-palestina/' },
      { titulo: 'Brasil de Fato — O que foi a Nakba palestina e por que ela é importante', url: 'https://www.brasildefato.com.br/2023/05/15/o-que-foi-a-nakba-palestina-e-por-que-ela-e-importante' },
      { titulo: 'IHU Unisinos — Entenda o que foi a Nakba, a catástrofe do povo palestino', url: 'https://ihu.unisinos.br/634202' },
      { titulo: 'Vestibulando Web — Partilha da Palestina: contexto e resumo', url: 'https://www.vestibulandoweb.com.br/geografia/partilha-da-palestina/amp/' }
    ],
    materiais: [] },


  { id: 'a8', nucleo: 'H', nome: 'Guerra na Ucrânia', secs: [21],
    titulo: 'Guerra na Ucrânia', periodo: '2014–atualidade',
    descricao: 'Conflito iniciado em 2014 e ampliado com a invasão russa em grande escala em 2022.',
    imagem: 'img/ucrania.webp',
    corpo: [
      'Rússia e Ucrânia têm uma herança comum de mais de mil anos, que remonta à Rússia de Kiev, considerada o berço dos dois países. Ao longo dos séculos, porém, a Ucrânia foi invadida e dividida por potências rivais. Parte do território passou ao Império Russo e, depois, houve políticas de russificação que proibiram o uso e o estudo da língua ucraniana. Após a revolução de 1917 e uma guerra civil, o país foi absorvido pela União Soviética em 1922. No início da década de 1930, a coletivização das fazendas promovida por Stalin causou uma grande fome, o Holodomor, que matou milhões de ucranianos. A Ucrânia tornou-se independente em 1991, com o fim da URSS, mas permaneceu dividida entre quem tem laços mais fortes com a Rússia, sobretudo no leste, e quem se volta ao Ocidente.',
      'A fase contemporânea do conflito começou em 2014. Depois que o governo ucraniano, sob pressão de Moscou, abandonou um acordo para fortalecer os laços com a União Europeia, a violência tomou conta da Praça Maidan, em Kiev. A Rússia ocupou e anexou a Crimeia e uma revolta separatista no Donbass levou à declaração das Repúblicas Populares de Donetsk e Lugansk, apoiadas e depois reconhecidas pela Rússia.',
      'Em 24 de fevereiro de 2022, a Rússia iniciou uma invasão em grande escala, que chamou de “operação militar especial”. A ONU considerou o ataque uma violação da integridade territorial e da soberania da Ucrânia, e a Assembleia Geral aprovou, em 2 de março de 2022, uma resolução de condenação por 141 votos a favor, 5 contra e 35 abstenções. Até fevereiro de 2023, a ONU registrava mais de 14 milhões de pessoas em fuga, na pior crise de refugiados na Europa desde a Segunda Guerra Mundial. Os números de vítimas e deslocados mudam com o tempo; consulte as fontes para dados atualizados.'
    ],
    fontes: [
      { titulo: 'National Geographic Brasil — Rússia e Ucrânia: a complicada história que conecta (e divide) os dois países', url: 'https://www.nationalgeographicbrasil.com/historia/2022/02/russia-e-ucrania-a-complicada-historia-que-conecta-e-divide-os-dois-paises' },
      { titulo: 'UNRIC — A ONU e a guerra na Ucrânia', url: 'https://unric.org/pt/a-onu-e-a-guerra-na-ucrania/' },
      { titulo: 'UNRIC — Assembleia Geral repudia ofensiva militar da Rússia à Ucrânia', url: 'https://unric.org/pt/assembleia-geral-repudia-ofensiva-militar-da-russia-a-ucrania/' },
      { titulo: 'Notícias ao Minuto — AG da ONU terá sessão especial para assinalar 1 ano de guerra na Ucrânia', url: 'https://www.noticiasaominuto.com/mundo/2196958/ag-da-onu-tera-sessao-especial-para-assinalar-1-ano-de-guerra-na-ucrania' }
    ],
    materiais: [] }
],

OBRAS: [
  /* ---------- Filmes e documentários ---------- */
  { id: 'o1',  categoria: 'filmes',   titulo: 'A Lista de Schindler', autor: 'Steven Spielberg', ano: '1993', descricao: 'Drama sobre um empresário alemão que salva mais de mil judeus durante o Holocausto.', imagem: 'https://m.media-amazon.com/images/S/pv-target-images/ab9a8756916104bb3da395304e048a7dabc53cdb4982c4e609377e1018d482aa.jpg', link: '' },
  { id: 'o2',  categoria: 'filmes',   titulo: 'Dr. Fantástico', autor: 'Stanley Kubrick', ano: '1964', descricao: 'Sátira sobre o medo de uma guerra nuclear no auge da Guerra Fria.', imagem: 'https://m.media-amazon.com/images/S/pv-target-images/fa7366cdc3b192d86c0e1b2dc91d02f742af068e8625cb2d9d06b9eac175cacb.jpg', link: '' },
  { id: 'o11', categoria: 'filmes',   titulo: 'Nada de Novo no Front', autor: 'Edward Berger', ano: '2022', descricao: 'Adaptação do romance de Erich Maria Remarque sobre jovens soldados alemães nas trincheiras da Primeira Guerra Mundial.', imagem: 'https://br.web.img3.acsta.net/pictures/22/10/20/16/25/1413867.jpg', link: '' },
  { id: 'o13', categoria: 'filmes',   titulo: 'Um Homem com uma Câmera', autor: 'Dziga Vertov', ano: '1929', descricao: 'Documentário experimental soviético, sem atores nem roteiro, que registra a vida urbana e reflete sobre o próprio cinema.', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDDZMvLvrfeyvIoKCnMYxhkQRDsQopQ5FxJlh0BF5LFx0nHa0oz3Cx7Y&s=10', link: '' },
  { id: 'o14', categoria: 'filmes',   titulo: 'Cabra Marcado para Morrer', autor: 'Eduardo Coutinho', ano: '1984', descricao: 'Documentário que retoma um filme interrompido pelo golpe de 1964 e reencontra, anos depois, camponeses e familiares de uma liderança assassinada.', imagem: 'https://upload.wikimedia.org/wikipedia/pt/9/9c/Cabra-marcado-para-morrer-poster03.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original', link: '' },
  { id: 'o15', categoria: 'filmes',   titulo: 'O Agente Secreto', autor: 'Kleber Mendonça Filho', ano: '2025', descricao: 'Thriller ambientado no Brasil de 1977, durante a ditadura militar.', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQwOwDP6kUqpogZIPHS86aa9hGFmq0TBeldhx_N-XHyhKKSsj2TbqLrdY&s=10', link: '' },
  { id: 'o16', categoria: 'filmes',   titulo: 'Terra em Transe', autor: 'Glauber Rocha', ano: '1967', descricao: 'Filme do Cinema Novo sobre intelectuais, poder e política em um país imaginário, feito logo após o golpe de 1964.', imagem: 'https://upload.wikimedia.org/wikipedia/pt/e/e8/Terra_em_Transe_cartaz.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original', link: '' },
  { id: 'o17', categoria: 'filmes',   titulo: 'Ainda Estou Aqui', autor: 'Walter Salles', ano: '2024', descricao: 'Drama sobre a família de Rubens Paiva, desaparecido durante a ditadura militar, e a luta de sua esposa, Eunice, por respostas.', imagem: 'https://thumb.wikimedia.org/wikipedia/pt/thumb/5/57/Ainda_Estou_Aqui_2024_poster.jpg/250px-Ainda_Estou_Aqui_2024_poster.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail', link: '' },
  { id: 'o18', categoria: 'filmes',   titulo: 'O Espelho (Zerkalo)', autor: 'Andrei Tarkovski', ano: '1975', descricao: 'Filme soviético de estrutura poética que mistura memória, infância e a história da União Soviética, incluindo a Segunda Guerra.', imagem: 'https://a.ltrbxd.com/resized/film-poster/5/1/0/6/4/51064-mirror-0-600-0-900-crop.jpg?v=88898b6c6e', link: '' },
  { id: 'o19', categoria: 'filmes',   titulo: 'Deus e o Diabo na Terra do Sol', autor: 'Glauber Rocha', ano: '1964', descricao: 'Clássico do Cinema Novo sobre fé, miséria e violência no sertão nordestino.', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Ik56G2volx1Cvb9V34MQSCH1_DgV0eDufUG3w8zUXD9nXGtFvf64PJGC&s=10', link: '' },

  /* ---------- Animação ---------- */
  { id: 'o3',  categoria: 'animacao', titulo: 'Túmulo dos Vagalumes', autor: 'Isao Takahata', ano: '1988', descricao: 'Animação do Studio Ghibli sobre dois irmãos que tentam sobreviver no Japão, no fim da Segunda Guerra Mundial.', imagem: 'https://www.papodecinema.com.br/wp-content/uploads/2015/11/20260728-tumulo-dos-vagalumes.webp', link: '' },
  { id: 'o4',  categoria: 'animacao', titulo: 'Nausicaä do Vale do Vento', autor: 'Hayao Miyazaki', ano: '1984', descricao: 'Fábula sobre um mundo devastado por uma guerra, em que uma jovem princesa busca a convivência entre humanos e natureza.', imagem: 'https://upload.wikimedia.org/wikipedia/pt/1/19/Kaze_no_Tani_no_Naushika_p%C3%B4ster.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original', link: '' },

  /* ---------- Livros de história ---------- */
  { id: 'o5',  categoria: 'livros',   titulo: 'A Era dos Extremos: o breve século XX', autor: 'Eric Hobsbawm', ano: '1994', descricao: 'Panorama do século XX, de 1914 a 1991, das guerras mundiais ao fim da União Soviética.', imagem: 'https://m.media-amazon.com/images/I/91o3JzC8hnL._AC_UF1000,1000_QL80_.jpg', link: '' },
  { id: 'o6',  categoria: 'livros',   titulo: 'Os Canhões de Agosto', autor: 'Barbara W. Tuchman', ano: '1962', descricao: 'Relato dos primeiros dias da Primeira Guerra Mundial e das decisões que levaram ao conflito.', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xffEnvQIOVk9wXo6spYkLxer9qlhiUugwdSkgGpDot35QlkoKRJnfDk&s=10', link: '' },
  { id: 'o12', categoria: 'livros',   titulo: 'Origens do Totalitarismo', autor: 'Hannah Arendt', ano: '1951', descricao: 'Estudo sobre o antissemitismo, o imperialismo e os regimes totalitários do século XX, como o nazismo e o stalinismo.', imagem: 'https://http2.mlstatic.com/D_NQ_NP_823305-MLA111707391058_062026-O.webp', link: '' },
  { id: 'o20', categoria: 'livros',   titulo: 'Eichmann em Jerusalém', autor: 'Hannah Arendt', ano: '1963', descricao: 'Reportagem e reflexão sobre o julgamento de um dos organizadores do Holocausto e sobre a ideia de “banalidade do mal”.', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG47E57EFS9vVm06OkjSeNgfKASctq3u0CdsW8eqQt9fj297bafFk0V8k&s=10', link: '' },
  { id: 'o21', categoria: 'livros',   titulo: 'Utopia Autoritária Brasileira: como os militares ameaçam a democracia brasileira desde o nascimento da República até hoje', autor: 'Carlos Fico', ano: '2025', descricao: 'Historiador examina as intervenções militares na política brasileira, da Proclamação da República aos dias atuais.', imagem: 'https://m.media-amazon.com/images/I/91H+fKP-NkL.jpg', link: '' },
  { id: 'o22', categoria: 'livros',   titulo: 'O Povo Brasileiro: a formação e o sentido do Brasil', autor: 'Darcy Ribeiro', ano: '1995', descricao: 'Interpretação da formação da sociedade brasileira a partir do encontro entre indígenas, europeus e africanos.', imagem: 'https://m.media-amazon.com/images/I/A1lPmAv2hEL._AC_UF1000,1000_QL80_.jpg', link: '' },
  { id: 'o23', categoria: 'sociedade',   titulo: 'O Suícidio', autor: 'Émile Durkheim', ano: '1897', descricao: 'Estudo sociológico pioneiro que analisa como fatores sociais e graus de integração (como egoísta, anômico e altruísta) influenciam uma taxa individual.', imagem: 'https://www.edipro.com.br/wp-content/uploads/2020/07/o-suicidio.jpg', link: '' },

  /* ---------- Relatos e memória ---------- */
  { id: 'o7',  categoria: 'relatos',  titulo: 'O Diário de Anne Frank', autor: 'Anne Frank', ano: '1947', descricao: 'Diário de uma menina judia que se escondeu dos nazistas na Holanda durante a Segunda Guerra Mundial.', imagem: 'https://m.media-amazon.com/images/I/81yKgdRQqHL._AC_UF1000,1000_QL80_.jpg', link: '' },
  { id: 'o8',  categoria: 'relatos',  titulo: 'É Isto um Homem?', autor: 'Primo Levi', ano: '1947', descricao: 'Testemunho de um sobrevivente sobre os dias no campo de concentração de Auschwitz.', imagem: 'https://m.media-amazon.com/images/I/71RG+XAvsgL._AC_UF1000,1000_QL80_.jpg', link: '' },

  /* ---------- Paz e direitos humanos ---------- */
  { id: 'o9',  categoria: 'paz',      titulo: 'Declaração Universal dos Direitos Humanos', autor: 'Organização das Nações Unidas', ano: '1948', descricao: 'Documento adotado pela Assembleia Geral da ONU que reúne 30 artigos sobre direitos de todas as pessoas.', imagem: 'https://brasil.un.org/sites/default/files/styles/publication_cover/public/2025-03/ONU_DeclaracaoUniversalDosDireitosHumanos_20250311_Capa.png?itok=jXv9a1BO', link: '' },
  { id: 'o10', categoria: 'paz',      titulo: 'Declaração e Plano de Ação Integrado sobre Educação para a Paz, os Direitos Humanos e a Democracia', autor: 'UNESCO', ano: '1995', descricao: 'Documento da UNESCO que defende a educação como caminho para a cultura de paz, a democracia e o respeito aos direitos humanos.', imagem: 'https://unesdoc.unesco.org/in/rest/Thumb/image?id=p%3A%3Ausmarcdef_0000388330_por&author=UNESCO&title=Recomenda%C3%A7%C3%A3o+sobre+a+Educa%C3%A7%C3%A3o+para+a+Paz%2C+os+Direitos+Humanos+e+o+Desenvolvimento+Sustent%C3%A1vel%3A+nota+explicativa&year=2026&publisher=UNESCO&TypeOfDocument=UnescoPhysicalDocument&mat=PGD&ct=true&size=512&isPhysical=1', link: 'https://prceu.usp.br/wp-content/uploads/2020/12/112874por.pdf' },
  { id: 'o24', categoria: 'paz',      titulo: 'Por que a Guerra? (cartas entre Einstein e Freud)', autor: 'Albert Einstein e Sigmund Freud', ano: '1933', descricao: 'Troca de cartas de 1932 em que os dois pensadores discutem se é possível evitar a guerra e por que os seres humanos a fazem.', imagem: 'https://m.media-amazon.com/images/I/81eQk8Vy1JL._UF1000,1000_QL80_.jpg', link: '' },

  /* ---------- Filosofia ---------- */
  { id: 'o25', categoria: 'filosofia', titulo: 'A República', autor: 'Platão', ano: 'c. 380 a.C.', descricao: 'Diálogo sobre justiça, o Estado ideal e a educação dos governantes.', imagem: 'https://m.media-amazon.com/images/I/81KkahDyzgL.jpg', link: '' },
  { id: 'o26', categoria: 'filosofia', titulo: 'Apologia de Sócrates', autor: 'Platão', ano: 'séc. IV a.C.', descricao: 'Relato da defesa de Sócrates no julgamento em que foi acusado de corromper os jovens e desrespeitar os deuses de Atenas.', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-l6IiWMJBUfqL456mrE7usz46WZVIfRFS7Iu0OcN9tZ_JO6Odc2L1Dw&s=10', link: '' },
  { id: 'o27', categoria: 'filosofia', titulo: 'Ética a Nicômaco', autor: 'Aristóteles', ano: 'séc. IV a.C.', descricao: 'Obra sobre a virtude, a felicidade e a vida boa, base da ética ocidental.', imagem: 'https://m.media-amazon.com/images/I/61XlfMWYClL.jpg', link: '' },
  { id: 'o28', categoria: 'filosofia', titulo: 'Meditações Metafísicas', autor: 'René Descartes', ano: '1641', descricao: 'Obra em que Descartes duvida de tudo o que pode ser posto em dúvida para buscar uma base segura para o conhecimento.', imagem: 'https://m.media-amazon.com/images/I/61RLystKLcL.jpg', link: '' },
  { id: 'o29', categoria: 'filosofia', titulo: 'Crítica da Razão Pura', autor: 'Immanuel Kant', ano: '1781', descricao: 'Investiga os limites e as possibilidades do conhecimento humano.', imagem: 'https://m.media-amazon.com/images/I/51r6-SlCZbL._AC_UF1000,1000_QL80_.jpg', link: '' },
  { id: 'o30', categoria: 'filosofia', titulo: 'Fundamentação da Metafísica dos Costumes', autor: 'Immanuel Kant', ano: '1785', descricao: 'Obra em que Kant formula os princípios da moral, incluindo o imperativo categórico.', imagem: 'https://m.media-amazon.com/images/I/61hYkIHipRL._UF1000,1000_QL80_.jpg', link: '' },
  { id: 'o31', categoria: 'filosofia', titulo: 'Assim Falou Zaratustra', autor: 'Friedrich Nietzsche', ano: '1883–1885', descricao: 'Livro em forma de narrativa poética em que Nietzsche expõe ideias como a morte de Deus e o além-do-homem.', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwQ0-d8_n9p1hhSNCikJ5JoSdLXg7jmi0Hh1JY2dBNsUhAjQeeboeZMS5&s=10', link: '' },
  { id: 'o32', categoria: 'filosofia', titulo: 'Dialética do Esclarecimento', autor: 'Theodor Adorno e Max Horkheimer', ano: '1947', descricao: 'Crítica à razão instrumental e à indústria cultural, escrita por filósofos da Escola de Frankfurt após a experiência do nazismo.', imagem: 'https://m.media-amazon.com/images/I/81KsgyyRXnL._AC_UF1000,1000_QL80_.jpg', link: '' },
  { id: 'o33', categoria: 'filosofia', titulo: 'O Mundo de Sofia', autor: 'Jostein Gaarder', ano: '1991', descricao: 'Romance que apresenta a história da filosofia a uma adolescente, de forma acessível.', imagem: 'https://m.media-amazon.com/images/I/91U9VjiT-xL._AC_UF1000,1000_QL80_.jpg', link: '' },
  { id: 'o34', categoria: 'filosofia', titulo: 'A Sociedade do Cansaço', autor: 'Byung-Chul Han', ano: '2010', descricao: 'Ensaio que argumenta que a sociedade atual, baseada no desempenho e na autoexploração, produz esgotamento.', imagem: 'https://m.media-amazon.com/images/I/615xknuR6CL.jpg', link: '' },
  { id: 'o35', categoria: 'filosofia', titulo: 'Infocracia: digitalização e a crise da democracia', autor: 'Byung-Chul Han', ano: '2021', descricao: 'Ensaio sobre como o excesso de informação e os meios digitais afetam o debate público e a democracia.', imagem: 'https://m.media-amazon.com/images/I/61TwzjRQ0TL.jpg', link: '' },

  /* ---------- Política, economia e sociedade ---------- */
  { id: 'o36', categoria: 'sociedade', titulo: 'O Príncipe', autor: 'Nicolau Maquiavel', ano: '1532', descricao: 'Tratado político sobre como conquistar e manter o poder, escrito em 1513 e publicado postumamente.', imagem: 'https://m.media-amazon.com/images/I/81h4CdNxdgL.jpg', link: '' },
  { id: 'o37', categoria: 'sociedade', titulo: 'Do Contrato Social', autor: 'Jean-Jacques Rousseau', ano: '1762', descricao: 'Obra que defende que a autoridade legítima nasce de um pacto entre os cidadãos e da vontade geral.', imagem: 'https://m.media-amazon.com/images/I/61fhwr5-QuL._AC_UF1000,1000_QL80_.jpg', link: '' },
  { id: 'o38', categoria: 'sociedade', titulo: 'A Riqueza das Nações', autor: 'Adam Smith', ano: '1776', descricao: 'Obra fundadora da economia política clássica, sobre divisão do trabalho, mercado e riqueza.', imagem: 'https://m.media-amazon.com/images/I/A1gOjYoF-+L._AC_UF1000,1000_QL80_.jpg', link: '' },
  { id: 'o39', categoria: 'sociedade', titulo: 'A Ideologia Alemã', autor: 'Karl Marx e Friedrich Engels', ano: '1846', descricao: 'Texto em que Marx e Engels expõem a concepção materialista da história. Escrito em 1846, só foi publicado integralmente no século XX.', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EdoJI_QA0SOsXmC-QeWda8kZqFDNq5niLBVcoLaSOuWzPYJ5TYoQernU&s=10', link: '' },
  { id: 'o40', categoria: 'sociedade', titulo: 'O Capital', autor: 'Karl Marx', ano: '1867', descricao: 'Análise crítica do capitalismo, do valor, do trabalho e da exploração.', imagem: 'https://m.media-amazon.com/images/I/71FXP9ye6xL.jpg', link: '' },
  { id: 'o41', categoria: 'sociedade', titulo: 'A Ética Protestante e o Espírito do Capitalismo', autor: 'Max Weber', ano: '1904–1905', descricao: 'Estudo sobre a relação entre valores religiosos protestantes e o surgimento do capitalismo moderno.', imagem: 'https://m.media-amazon.com/images/I/71VmPTU32FL.jpg', link: '' },
  { id: 'o42', categoria: 'sociedade', titulo: 'Economia e Sociedade', autor: 'Max Weber', ano: '1922', descricao: 'Obra central da sociologia de Weber, com conceitos como ação social, dominação e burocracia.', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoQ2WVAz1ZK69fML-ZQ8MYQ3aEGla7W-fOKvWx_oZTaOmDL_Leg83gk4&s=10', link: '' },
  { id: 'o43', categoria: 'sociedade', titulo: 'Mudança Estrutural da Esfera Pública', autor: 'Jürgen Habermas', ano: '1962', descricao: 'Estudo histórico sobre o surgimento da esfera pública burguesa e sua transformação com a mídia de massa.', imagem: 'https://m.media-amazon.com/images/I/71t8EGFLUzL.jpg', link: '' },
  { id: 'o44', categoria: 'sociedade', titulo: 'Direita e Esquerda: razões e significados de uma distinção política', autor: 'Norberto Bobbio', ano: '1994', descricao: 'Ensaio sobre o que distingue a direita da esquerda, com a igualdade como critério central.', imagem: 'https://m.media-amazon.com/images/I/81iG2jrXFWL._AC_UF1000,1000_QL80_.jpg', link: '' },
  { id: 'o45', categoria: 'filmes', titulo: 'Alma no Olho', autor: 'Zózimo Bulbul', ano: '1973', descricao: '', imagem: 'https://a.ltrbxd.com/resized/film-poster/2/5/4/3/4/3/254343-soul-in-the-eye-0-2000-0-3000-crop.jpg?v=9dc6cfca1a', link: '' },
  { id: 'o46', categoria: 'filmes', titulo: 'Tempos Modernos', autor: 'Charlie Chaplin', ano: '1936', descricao: '', imagem: 'https://a.ltrbxd.com/resized/film-poster/4/9/8/8/9/49889-modern-times-0-2000-0-3000-crop.jpg?v=4f248e6b54', link: '' },
  { id: 'o46', categoria: 'filmes', titulo: 'A Idade da Terra', autor: 'Glauber Rocha ', ano: '1980', descricao: '', imagem: 'https://a.ltrbxd.com/resized/film-poster/6/3/2/6/9/63269-the-age-of-the-earth-0-2000-0-3000-crop.jpg?v=e2b38324fc', link: '' },
  { id: 'o46', categoria: 'filmes', titulo: 'Plataforma', autor: 'Jia Zhangke', ano: '2000', descricao: '', imagem: 'https://a.ltrbxd.com/resized/film-poster/6/6/8/9/1/66891-platform-0-2000-0-3000-crop.jpg?v=ac5c78420d', link: '' }
]
};