/* =============================================
   AURA Growth Digital — script.js
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* === HEADER SCROLL === */
  var hdr = document.getElementById('hdr');
  window.addEventListener('scroll', function () {
    hdr.classList.toggle('sc', window.scrollY > 20);
  }, { passive: true });

  /* === HAMBURGER === */
  var ham = document.getElementById('ham');
  var mob = document.getElementById('mob');
  ham.addEventListener('click', function () {
    var open = mob.classList.toggle('op');
    ham.classList.toggle('op', open);
    ham.setAttribute('aria-expanded', open);
  });
  mob.querySelectorAll('.ml').forEach(function (link) {
    link.addEventListener('click', function () {
      mob.classList.remove('op');
      ham.classList.remove('op');
      ham.setAttribute('aria-expanded', 'false');
    });
  });

  /* === FAQ ACCORDION === */
  document.querySelectorAll('.faq-i').forEach(function (item) {
    item.querySelector('.faq-q').addEventListener('click', function () {
      var isOpen = item.classList.contains('op');
      document.querySelectorAll('.faq-i').forEach(function (i) {
        i.classList.remove('op');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('op');
        item.querySelector('.faq-q').setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* === SLIDE REVEAL === */
  var allReveal = Array.from(document.querySelectorAll('section, .rv'));
  var revObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('on');
        revObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  allReveal.forEach(function (el) { revObs.observe(el); });

  /* === SMOOTH SCROLL === */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var offset = hdr.getBoundingClientRect().height;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset - 8,
        behavior: 'smooth'
      });
    });
  });

  /* === NAV ATIVO === */
  document.querySelectorAll('section[id]').forEach(function (sec) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          document.querySelectorAll('nav a').forEach(function (a) {
            a.classList.toggle('act', a.getAttribute('href') === '#' + e.target.id);
          });
        }
      });
    }, { threshold: 0.35 }).observe(sec);
  });

  /* ══════════════════════════════════════════
     DEPOIMENTOS — Prova Social
  ══════════════════════════════════════════ */

  /* Paleta de cores para avatares */
  var AVATAR_COLORS = [
    'linear-gradient(135deg,#7C4DDB,#C4883F)',
    'linear-gradient(135deg,#E8602C,#C4883F)',
    'linear-gradient(135deg,#5B3FBA,#7C4DDB)',
    'linear-gradient(135deg,#C4883F,#E8602C)',
    'linear-gradient(135deg,#8B45CC,#E8602C)',
    'linear-gradient(135deg,#3F7CC4,#7C4DDB)',
    'linear-gradient(135deg,#DB4D7C,#C4883F)',
    'linear-gradient(135deg,#4DDB8F,#3F7CC4)',
  ];

  /* Reviews fictícias pré-carregadas */
  var REVIEWS_1 = [
    {
      nome: 'Camila Ferreira',
      empresa: 'Studio Beleza Pura',
      insta: '@studiobezapura',
      seg: 'Estética · SC',
      stars: 5,
      txt: 'Em 2 meses saímos do zero para 800 seguidores reais e minha agenda lotou. A Dri entende do negócio como se fosse dela mesma.',
      cor: 0
    },
    {
      nome: 'Pedro Almeida',
      empresa: 'Almeida Advocacia',
      insta: '@almeidaadv',
      seg: 'Jurídico · SP',
      stars: 5,
      txt: 'Profissionalismo impecável. O site que criaram para o escritório virou referência entre os colegas. Recomendo sem hesitar.',
      cor: 1
    },
    {
      nome: 'Ana Sequeira',
      empresa: 'Tasca do Largo',
      insta: '@tascadolargo',
      seg: 'Alimentação · PT',
      stars: 5,
      txt: 'Em três meses estávamos no Top 3 do Google Maps em Lisboa. O fluxo de clientes novos aumentou muito. Excelente trabalho!',
      cor: 2
    },
    {
      nome: 'Rafael Costa',
      empresa: 'AutoCenter RC',
      insta: '@autocenterrc',
      seg: 'Automotivo · MG',
      stars: 5,
      txt: 'Os anúncios no Meta trouxeram leads qualificados desde a primeira semana. ROI excelente, gestão muito profissional.',
      cor: 3
    },
    {
      nome: 'Juliana Mendes',
      empresa: 'Clínica Sorriso Pleno',
      insta: '@sorrisopleno.sc',
      seg: 'Odontologia · RS',
      stars: 5,
      txt: 'Minha clínica cresceu 40% em consultas em 4 meses. O trabalho no Instagram e no Google Meu Negócio foi transformador.',
      cor: 4
    },
    {
      nome: 'Marcos Vieira',
      empresa: 'Academia FitLife',
      insta: '@fitlifegym',
      seg: 'Fitness · RJ',
      stars: 5,
      txt: 'As matrículas dispararam depois que a AURA assumiu nossas redes e o tráfego pago. Melhor investimento que fiz.',
      cor: 5
    },
    {
      nome: 'Fernanda Rocha',
      empresa: 'Boutique Elegance',
      insta: '@boutiqueelegance',
      seg: 'Moda · SP',
      stars: 5,
      txt: 'A equipe é atenciosa, criativa e entrega com qualidade. Meu Instagram nunca esteve tão bonito e as vendas cresceram muito.',
      cor: 6
    },
    {
      nome: 'Carlos Neves',
      empresa: 'TecAssist Portugal',
      insta: '@tecassistpt',
      seg: 'TI · Portugal',
      stars: 5,
      txt: 'Estratégia digital completa e sempre bem alinhada com o nosso mercado em Portugal. Recomendo a qualquer empresa.',
      cor: 7
    },
    {
      nome: 'Bianca Santos',
      empresa: 'Espaço Lotus',
      insta: '@espacolotus.ba',
      seg: 'Bem-estar · BA',
      stars: 5,
      txt: 'Seriedade, criatividade e resultados reais. A AURA transformou minha presença digital em algo que eu me orgulho muito.',
      cor: 0
    },
    {
      nome: 'Diego Martins',
      empresa: 'Construtora Martins',
      insta: '@construtoramartins',
      seg: 'Construção · PR',
      stars: 5,
      txt: 'Em 90 dias estávamos recebendo orçamentos via Instagram todos os dias. Trabalho de altíssimo nível.',
      cor: 1
    }
  ];

  var REVIEWS_2 = [
    {
      nome: 'Priya Oliveira',
      empresa: 'Café Raiz',
      insta: '@caferaiz.sp',
      seg: 'Cafeteria · SP',
      stars: 5,
      txt: 'O conteúdo que a AURA cria para o nosso Instagram tem personalidade e converte. Aumentamos o movimento em 60%.',
      cor: 2
    },
    {
      nome: 'Lucas Pires',
      empresa: 'Pizzaria Fornalha',
      insta: '@fornalha.pizza',
      seg: 'Alimentação · SP',
      stars: 5,
      txt: 'Nunca imaginei que investir em marketing digital traria tanto resultado. Hoje estou no Top 1 da minha região no Google.',
      cor: 3
    },
    {
      nome: 'Isabela Cunha',
      empresa: 'Clínica Luminar',
      insta: '@clunimar.sc',
      seg: 'Estética · SC',
      stars: 5,
      txt: 'A landing page que criaram converte muito bem. As campanhas de tráfego pago trouxeram leads de qualidade real.',
      cor: 4
    },
    {
      nome: 'Roberto Faria',
      empresa: 'Ótica Visão Clara',
      insta: '@visaoclara.mg',
      seg: 'Varejo · MG',
      stars: 5,
      txt: 'Atendimento próximo e personalizado. A AURA não some depois de fechar o contrato, cuida mesmo do negócio.',
      cor: 5
    },
    {
      nome: 'Tatiana Lima',
      empresa: 'Pet Shop Amigo Fiel',
      insta: '@amigofiel.pet',
      seg: 'Pet · RS',
      stars: 5,
      txt: 'Em poucos meses aumentei seguidores, avaliações no Google e clientes. Resultado real e equipe comprometida.',
      cor: 6
    },
    {
      nome: 'Henrique Sousa',
      empresa: 'The Barber Shop',
      insta: '@thebarbershopsc',
      seg: 'Barbearia · RJ',
      stars: 5,
      txt: 'A gestão de redes e os anúncios trouxeram fila de espera na barbearia. Nunca faltou cliente desde que contratei.',
      cor: 7
    },
    {
      nome: 'Mariana Abreu',
      empresa: 'Imobiliária Abreu',
      insta: '@abreuimoveis.pt',
      seg: 'Imobiliária · PT',
      stars: 5,
      txt: 'Trabalho impecável, relatórios claros e equipe sempre disponível. A AURA é nossa parceira de confiança em Portugal.',
      cor: 0
    },
    {
      nome: 'André Silveira',
      empresa: 'Buffet Silveira',
      insta: '@buffetsilveira',
      seg: 'Eventos · SC',
      stars: 5,
      txt: 'Nossa agenda de eventos lotou depois de 3 meses com a AURA. O site novo passou profissionalismo que convenceu muita gente.',
      cor: 1
    },
    {
      nome: 'Patrícia Gomes',
      empresa: 'Studio Pilates Core',
      insta: '@corepilatess',
      seg: 'Saúde · PR',
      stars: 5,
      txt: 'Profissionais incríveis que entendem de marketing e de gente. Me sinto apoiada em cada decisão do meu negócio.',
      cor: 2
    },
    {
      nome: 'Yuri Araújo',
      empresa: 'Yuri Soundcar',
      insta: '@yurisoundcar',
      seg: 'Automotivo · SC',
      stars: 5,
      txt: 'Parceria incrível desde o início. A AURA construiu minha marca do zero e hoje tenho parceria exclusiva com a BYD.',
      cor: 3
    }
  ];

  /* Gerar iniciais para avatar */
  function getInitials(nome) {
    var parts = nome.trim().split(' ');
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0].slice(0, 2).toUpperCase();
  }

  /* Gerar estrelas HTML */
  function starsHTML(n) {
    return '★'.repeat(n) + '☆'.repeat(5 - n);
  }

  /* Criar card de review */
  function buildCard(review) {
    var card = document.createElement('div');
    card.className = 'dep-card';
    card.innerHTML =
      '<div class="dep-card-top">' +
        '<div class="dep-avatar" style="background:' + AVATAR_COLORS[review.cor] + '">' + getInitials(review.nome) + '</div>' +
        '<div class="dep-card-info">' +
          '<div class="dep-card-name">' + escHTML(review.nome) + '</div>' +
          '<div class="dep-card-meta">' + escHTML(review.empresa) + '</div>' +
        '</div>' +
        '<div class="dep-card-stars">' + starsHTML(review.stars) + '</div>' +
      '</div>' +
      '<p class="dep-card-txt">' + escHTML(review.txt) + '</p>' +
      '<div class="dep-card-foot">' +
        '<span class="dep-card-insta">' + escHTML(review.insta) + '</span>' +
        '<span class="dep-card-seg">' + escHTML(review.seg) + '</span>' +
      '</div>';
    return card;
  }

  /* Preencher trilhos com loop infinito (duplicar para seamless) */
  function fillTrack(trackEl, reviews) {
    // Embaralhar levemente para variedade
    var shuffled = reviews.slice().sort(function () { return Math.random() - 0.5; });
    var doubled = shuffled.concat(shuffled); // duplicar para loop
    doubled.forEach(function (r) {
      trackEl.appendChild(buildCard(r));
    });
  }

  var t1 = document.getElementById('depT1');
  var t2 = document.getElementById('depT2');
  if (t1) fillTrack(t1, REVIEWS_1);
  if (t2) fillTrack(t2, REVIEWS_2);

  /* ── Star Rating Interactivo ── */
  var selectedStars = 0;
  var starBtns = document.querySelectorAll('.dep-star-btn');
  var starTxt = document.getElementById('depStarTxt');
  var starLabels = ['', 'Ruim', 'Regular', 'Bom', 'Muito bom', 'Excelente!'];

  function updateStars(val, isHover) {
    starBtns.forEach(function (btn) {
      var v = parseInt(btn.getAttribute('data-val'));
      btn.classList.toggle('active', !isHover && v <= selectedStars);
      btn.classList.toggle('hover', isHover && v <= val);
    });
    if (starTxt) {
      if (isHover) {
        starTxt.textContent = starLabels[val] || 'Toque para avaliar';
      } else {
        starTxt.textContent = selectedStars > 0 ? starLabels[selectedStars] : 'Toque para avaliar';
        starTxt.style.color = selectedStars > 0 ? '#F5A623' : '';
      }
    }
  }

  starBtns.forEach(function (btn) {
    btn.addEventListener('mouseenter', function () {
      updateStars(parseInt(btn.getAttribute('data-val')), true);
    });
    btn.addEventListener('mouseleave', function () {
      updateStars(selectedStars, false);
    });
    btn.addEventListener('click', function () {
      selectedStars = parseInt(btn.getAttribute('data-val'));
      updateStars(selectedStars, false);
    });
  });

  /* ── Contador de caracteres ── */
  var msgInp = document.getElementById('depMsg');
  var charsSpan = document.getElementById('depChars');
  if (msgInp && charsSpan) {
    msgInp.addEventListener('input', function () {
      charsSpan.textContent = msgInp.value.length;
    });
  }

  /* ── Persistência com localStorage ── */
  var LS_KEY = 'aura_deps_v1';

  function loadSaved() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; }
    catch (e) { return []; }
  }

  function saveDep(obj) {
    var arr = loadSaved();
    arr.unshift(obj);
    if (arr.length > 50) arr = arr.slice(0, 50);
    try { localStorage.setItem(LS_KEY, JSON.stringify(arr)); } catch (e) {}
  }

  /* Renderizar depoimentos salvos */
  function renderSaved() {
    var novos = document.getElementById('depNovos');
    if (!novos) return;
    var arr = loadSaved();
    novos.innerHTML = '';
    if (arr.length === 0) return;
    arr.forEach(function (dep) { novos.appendChild(buildNovoCard(dep)); });
  }

  function buildNovoCard(dep) {
    var card = document.createElement('div');
    card.className = 'dep-novo-card';
    card.innerHTML =
      '<span class="dep-novo-badge">Novo depoimento</span>' +
      '<div class="dep-novo-stars">' + starsHTML(dep.stars || 5) + '</div>' +
      '<p class="dep-novo-txt">' + escHTML(dep.txt) + '</p>' +
      '<div class="dep-novo-foot">' +
        '<div>' +
          '<div class="dep-novo-name">' + escHTML(dep.nome) + ' · ' + escHTML(dep.empresa) + '</div>' +
          '<div class="dep-novo-meta">' + escHTML(dep.seg || '') + (dep.data ? ' · ' + dep.data : '') + '</div>' +
        '</div>' +
        '<span class="dep-novo-insta">' + escHTML(dep.insta || '') + '</span>' +
      '</div>';
    return card;
  }

  renderSaved();

  /* ── Submissão do formulário ── */
  var submitBtn = document.getElementById('depSubmit');
  var toast = document.getElementById('depToast');
  var btnTxt = document.getElementById('depBtnTxt');

  function getVal(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', function () {
      var nome = getVal('depNome');
      var empresa = getVal('depEmpresa');
      var txt = getVal('depMsg');

      // Validação básica
      if (!nome) { shake(document.getElementById('depNome')); return; }
      if (!empresa) { shake(document.getElementById('depEmpresa')); return; }
      if (!txt) { shake(document.getElementById('depMsg')); return; }
      if (selectedStars === 0) { shake(document.getElementById('depStarRow')); return; }

      // Loading state
      submitBtn.disabled = true;
      submitBtn.style.opacity = '.7';
      if (btnTxt) btnTxt.textContent = 'Publicando...';

      var dep = {
        nome: nome,
        empresa: empresa,
        insta: getVal('depInsta'),
        seg: getVal('depSeg'),
        txt: txt,
        stars: selectedStars,
        data: new Date().toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })
      };

      setTimeout(function () {
        // Salvar e renderizar
        saveDep(dep);
        var novos = document.getElementById('depNovos');
        if (novos) {
          var card = buildNovoCard(dep);
          novos.insertBefore(card, novos.firstChild);
        }

        // Reset form
        ['depNome','depEmpresa','depInsta','depSeg','depMsg'].forEach(function (id) {
          var el = document.getElementById(id);
          if (el) el.value = '';
        });
        selectedStars = 0;
        updateStars(0, false);
        if (charsSpan) charsSpan.textContent = '0';

        // Restore button
        submitBtn.disabled = false;
        submitBtn.style.opacity = '';
        if (btnTxt) btnTxt.textContent = 'Publicar depoimento';

        // Toast
        if (toast) {
          toast.classList.add('show');
          setTimeout(function () { toast.classList.remove('show'); }, 4000);
        }

        // Scroll suave para o novo card
        if (novos && novos.firstChild) {
          novos.firstChild.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 800);
    });
  }

  /* ── Utilitários ── */
  function escHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function shake(el) {
    if (!el) return;
    el.style.animation = 'none';
    el.offsetHeight; // reflow
    el.style.animation = 'shakeX .4s ease';
    el.addEventListener('animationend', function () { el.style.animation = ''; }, { once: true });
    // Add shake keyframes inline if not already
    if (!document.getElementById('shakeStyle')) {
      var s = document.createElement('style');
      s.id = 'shakeStyle';
      s.textContent = '@keyframes shakeX { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-6px)} 40%{transform:translateX(6px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }';
      document.head.appendChild(s);
    }
  }

  /* ── Pausar animação ao hover nos trilhos ── */
  document.querySelectorAll('.dep-track-w').forEach(function (w) {
    w.addEventListener('mouseenter', function () {
      var track = w.querySelector('.dep-track');
      if (track) track.style.animationPlayState = 'paused';
    });
    w.addEventListener('mouseleave', function () {
      var track = w.querySelector('.dep-track');
      if (track) track.style.animationPlayState = 'running';
    });
  });

  /* ── Animar barras de avaliação ao entrar na viewport ── */
  var bars = document.querySelectorAll('.dep-bar-fill');
  if (bars.length) {
    var barObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.animationDelay = (Array.from(bars).indexOf(e.target) * 0.15) + 's';
          e.target.style.animationPlayState = 'running';
          barObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    bars.forEach(function (b) {
      b.style.animationPlayState = 'paused';
      barObs.observe(b);
    });
  }

});