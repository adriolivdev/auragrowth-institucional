/* =============================================
 AURA Growth Digital, script.js v3
 - Multipágina (header, menu, reveal, smooth scroll)
 - Mural de clientes REAIS (sem prova social fabricada)
 - Formulário de avaliação real (WhatsApp + localStorage)
 ============================================= */

document.addEventListener("DOMContentLoaded", function () {
  var AURA_WHATS = "5547991518157";

  /* === HEADER SCROLL === */
  var hdr = document.getElementById("hdr");
  if (hdr) {
    window.addEventListener(
      "scroll",
      function () {
        hdr.classList.toggle("sc", window.scrollY > 20);
      },
      { passive: true },
    );
  }

  /* === HAMBURGER === */
  var ham = document.getElementById("ham");
  var mob = document.getElementById("mob");
  if (ham && mob) {
    ham.addEventListener("click", function () {
      var open = mob.classList.toggle("op");
      ham.classList.toggle("op", open);
      ham.setAttribute("aria-expanded", open);
    });
    mob.querySelectorAll(".ml").forEach(function (link) {
      link.addEventListener("click", function () {
        mob.classList.remove("op");
        ham.classList.remove("op");
        ham.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* === BALÃO DO WHATSAPP FLUTUANTE === */
  var wafBubble = document.getElementById("wafBubble");
  var wafBubbleClose = document.getElementById("wafBubbleClose");
  if (wafBubbleClose && wafBubble) {
    wafBubbleClose.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      wafBubble.classList.add("hide");
    });
  }

  /* === FAQ ACCORDION === */
  document.querySelectorAll(".faq-i").forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    var ans = item.querySelector(".faq-a");
    if (!btn || !ans) return;
    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("op");
      document.querySelectorAll(".faq-i").forEach(function (i) {
        i.classList.remove("op");
        var q = i.querySelector(".faq-q");
        if (q) q.setAttribute("aria-expanded", "false");
        var a = i.querySelector(".faq-a");
        if (a) a.style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("op");
        btn.setAttribute("aria-expanded", "true");
        ans.style.maxHeight = ans.scrollHeight + "px";
      }
    });
  });

  /* === SERVIÇOS, FLIP DOS CARDS === */
  document.querySelectorAll(".srv-c").forEach(function (card) {
    card.querySelectorAll(".srv-toggle").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var isBack = btn.classList.contains("srv-toggle-back");
        if (isBack) {
          card.classList.add("flipping-out");
          setTimeout(function () {
            card.classList.remove("open");
            card.classList.remove("flipping-out");
          }, 200);
        } else {
          document.querySelectorAll(".srv-c").forEach(function (c) {
            if (c !== card) {
              c.classList.remove("open");
              c.classList.remove("flipping-in");
              c.classList.remove("flipping-out");
            }
          });
          card.classList.add("flipping-in");
          setTimeout(function () {
            card.classList.remove("flipping-in");
            card.classList.add("open");
          }, 200);
        }
      });
    });
  });

  /* === PORTFÓLIO, ABAS DE CATEGORIA === */
  var portTabs = document.querySelectorAll(".port-tab");
  var portGrids = {
    servicos: document.getElementById("portServicos"),
    empresas: document.getElementById("portEmpresas"),
  };
  portTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var cat = tab.getAttribute("data-cat");
      portTabs.forEach(function (t) {
        t.classList.remove("active");
      });
      tab.classList.add("active");
      Object.keys(portGrids).forEach(function (key) {
        if (portGrids[key]) portGrids[key].classList.toggle("hidden", key !== cat);
      });
      var newCards = (portGrids[cat] || document.createElement("div")).querySelectorAll(".rv");
      newCards.forEach(function (card) {
        card.classList.remove("on");
        setTimeout(function () {
          card.classList.add("on");
        }, 50);
      });
    });
  });

  /* === SLIDE REVEAL === */
  var allReveal = Array.from(document.querySelectorAll("section.rv"));
  var revObs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("on");
          revObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );
  allReveal.forEach(function (el) {
    revObs.observe(el);
  });

  /* === SMOOTH SCROLL (âncoras internas da mesma página) === */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var href = a.getAttribute("href");
      if (href === "#" || href.length < 2) return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var offset = hdr ? hdr.getBoundingClientRect().height : 0;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset - 8, behavior: "smooth" });
    });
  });

  /* === NAV ATIVO (âncoras dentro da home) === */
  document.querySelectorAll("section[id]").forEach(function (sec) {
    new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            document.querySelectorAll('nav a[href^="#"]').forEach(function (a) {
              a.classList.toggle("act", a.getAttribute("href") === "#" + e.target.id);
            });
          }
        });
      },
      { threshold: 0.35 },
    ).observe(sec);
  });

  /* ══════════════════════════════════════════
 CLIENTES REAIS, mural (sem prova social fabricada)
 Fatos verificáveis: são clientes que a AURA atende.
 Nada de citações inventadas.
 ══════════════════════════════════════════ */
  var AVATAR_COLORS = [
    "linear-gradient(135deg,#7C4DDB,#C4883F)",
    "linear-gradient(135deg,#E8602C,#C4883F)",
    "linear-gradient(135deg,#5B3FBA,#7C4DDB)",
    "linear-gradient(135deg,#C4883F,#E8602C)",
    "linear-gradient(135deg,#8B45CC,#E8602C)",
  ];

  var CLIENTES = [
    {
      nome: "Yuri SoundCar",
      local: "Araquari · SC",
      seg: "Automotivo",
      insta: "@yurisoundcar",
      txt: "Marca construída do zero. Presença digital, conteúdo e posicionamento, hoje com parceria de aplicação de películas para a BYD na região.",
      cor: 0,
    },
    {
      nome: "Leo Lauxen",
      local: "Joinville · SC",
      seg: "Estética",
      insta: "@leolauxen.sobrancelhas",
      txt: "Gestão de Instagram e identidade visual para profissional de sobrancelhas e estética. Conteúdo estratégico e crescimento orgânico.",
      cor: 1,
    },
    {
      nome: "CRC Acabamentos",
      local: "Blumenau · SC",
      seg: "Construção",
      insta: "@crc.acabamentos",
      txt: "Gestão de redes e conteúdo técnico para empresa de pisos, portas e acabamentos. Posicionamento de autoridade no segmento.",
      cor: 2,
    },
    {
      nome: "Doutor Refrigeração",
      local: "Itajaí · SC",
      seg: "Refrigeração",
      insta: "@doutorefrigeracaoitajai",
      txt: "Site + gestão de Instagram para conserto de geladeiras e freezers. Autoridade técnica em linguagem acessível.",
      cor: 3,
    },
    {
      nome: "Eco Descupim",
      local: "SC · PR · RS",
      seg: "Dedetização",
      insta: "eco-descupim.vercel.app",
      txt: "Landing page de alta conversão para controle de pragas, com Google Ads gerando orçamentos qualificados.",
      cor: 4,
    },
  ];

  function escHTML(str) {
    if (!str) return "";
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function getInitials(nome) {
    var parts = nome.trim().split(" ");
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return parts[0].slice(0, 2).toUpperCase();
  }
  function starsHTML(n) {
    return "★".repeat(n) + "☆".repeat(5 - n);
  }

  function buildClientCard(c) {
    var card = document.createElement("div");
    card.className = "dep-card";
    card.innerHTML =
      '<div class="dep-card-top">' +
      '<div class="dep-avatar" style="background:' +
      AVATAR_COLORS[c.cor] +
      '">' +
      getInitials(c.nome) +
      "</div>" +
      '<div class="dep-card-info">' +
      '<div class="dep-card-name">' +
      escHTML(c.nome) +
      "</div>" +
      '<div class="dep-card-meta">' +
      escHTML(c.local) +
      "</div>" +
      "</div>" +
      '<div class="dep-card-seg" style="align-self:flex-start">' +
      escHTML(c.seg) +
      "</div>" +
      "</div>" +
      '<p class="dep-card-txt">' +
      escHTML(c.txt) +
      "</p>" +
      '<div class="dep-card-foot">' +
      '<span class="dep-card-insta">' +
      escHTML(c.insta) +
      "</span>" +
      '<span class="dep-card-seg">Cliente AURA</span>' +
      "</div>";
    return card;
  }

  function fillTrack(trackEl, list) {
    var doubled = list.concat(list);
    doubled.forEach(function (c) {
      trackEl.appendChild(buildClientCard(c));
    });
  }
  var t1 = document.getElementById("depT1");
  var t2 = document.getElementById("depT2");
  if (t1) fillTrack(t1, CLIENTES);
  if (t2) fillTrack(t2, CLIENTES.slice().reverse());

  document.querySelectorAll(".dep-track-w").forEach(function (w) {
    w.addEventListener("mouseenter", function () {
      var track = w.querySelector(".dep-track");
      if (track) track.style.animationPlayState = "paused";
    });
    w.addEventListener("mouseleave", function () {
      var track = w.querySelector(".dep-track");
      if (track) track.style.animationPlayState = "running";
    });
  });

  /* ══════════════════════════════════════════
    CERTIFICAÇÕES (carrossel da página Sobre)
    ------------------------------------------------------------------
    >>> É AQUI QUE VOCÊ EDITA AS CERTIFICAÇÕES <<<
    Adicione, remova ou troque itens no array CERTIFICACOES abaixo.
    Cada item tem:
      nome  -> nome da certificação (ex: 'Certificação Google Ads')
      org   -> quem emitiu (ex: 'Google', 'Meta')
      ano   -> ano da certificação (ex: '2025')
      icone -> um emoji OU deixe '' e use 'img' para um logo/badge
      img   -> (opcional) caminho de uma imagem de badge, ex: 'cert-google.png'
               (coloque a imagem na mesma pasta dos HTML). Se preencher 'img',
               ele aparece no lugar do emoji.

    IMPORTANTE (princípio da AURA): coloque só certificações REAIS que
    vocês possuem. Nada de prova social fabricada. Os exemplos abaixo são
    MODELOS comuns, confirme quais vocês realmente têm e apague o resto.
    ══════════════════════════════════════════ */
  var CERTIFICACOES = [
    { nome: "Certificação Google Ads", org: "Google", ano: "2025", icone: "🎯", img: "" },
    { nome: "Google Analytics 4 (GA4)", org: "Google", ano: "2025", icone: "📊", img: "" },
    { nome: "Meta Certified (Ads)", org: "Meta", ano: "2025", icone: "📱", img: "" },
    { nome: "Marketing Digital", org: "Formação", ano: "2024", icone: "🚀", img: "" },
    { nome: "Engenharia de Software", org: "Formação Superior", ano: "2023", icone: "💻", img: "" },
    { nome: "Graduação em Marketing", org: "Formação Superior", ano: "2023", icone: "🎓", img: "" },
  ];

  function buildCertCard(c) {
    var card = document.createElement("div");
    card.className = "cert-card";
    var ic = c.img
      ? '<span class="cert-ic"><img src="' + escHTML(c.img) + '" alt="' + escHTML(c.org) + '"/></span>'
      : '<span class="cert-ic">' + escHTML(c.icone || "✦") + "</span>";
    card.innerHTML =
      ic +
      '<div class="cert-name">' +
      escHTML(c.nome) +
      "</div>" +
      '<div class="cert-org">' +
      escHTML(c.org) +
      "</div>" +
      '<div class="cert-year">' +
      escHTML(c.ano) +
      "</div>";
    return card;
  }
  var certTrack = document.getElementById("certsTrack");
  if (certTrack && CERTIFICACOES.length) {
    // duplica a lista para o loop do marquee ficar contínuo
    CERTIFICACOES.concat(CERTIFICACOES).forEach(function (c) {
      certTrack.appendChild(buildCertCard(c));
    });
  }

  /* ══════════════════════════════════════════
 FORMULÁRIO DE AVALIAÇÃO (real, cliente envia)
 ══════════════════════════════════════════ */
  var selectedStars = 0;
  var starBtns = document.querySelectorAll(".dep-star-btn");
  var starTxt = document.getElementById("depStarTxt");
  var starLabels = ["", "Ruim", "Regular", "Bom", "Muito bom", "Excelente!"];

  function updateStars(val, isHover) {
    starBtns.forEach(function (btn) {
      var v = parseInt(btn.getAttribute("data-val"));
      btn.classList.toggle("active", !isHover && v <= selectedStars);
      btn.classList.toggle("hover", isHover && v <= val);
    });
    if (starTxt) {
      if (isHover) {
        starTxt.textContent = starLabels[val] || "Toque para avaliar";
      } else {
        starTxt.textContent = selectedStars > 0 ? starLabels[selectedStars] : "Toque para avaliar";
        starTxt.style.color = selectedStars > 0 ? "#F5A623" : "";
      }
    }
  }
  starBtns.forEach(function (btn) {
    btn.addEventListener("mouseenter", function () {
      updateStars(parseInt(btn.getAttribute("data-val")), true);
    });
    btn.addEventListener("mouseleave", function () {
      updateStars(selectedStars, false);
    });
    btn.addEventListener("click", function () {
      selectedStars = parseInt(btn.getAttribute("data-val"));
      updateStars(selectedStars, false);
    });
  });

  var msgInp = document.getElementById("depMsg");
  var charsSpan = document.getElementById("depChars");
  if (msgInp && charsSpan) {
    msgInp.addEventListener("input", function () {
      charsSpan.textContent = msgInp.value.length;
    });
  }

  var LS_KEY = "aura_deps_v1";
  function loadSaved() {
    try {
      return JSON.parse(localStorage.getItem(LS_KEY)) || [];
    } catch (e) {
      return [];
    }
  }
  function saveDep(obj) {
    var arr = loadSaved();
    arr.unshift(obj);
    if (arr.length > 50) arr = arr.slice(0, 50);
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(arr));
    } catch (e) {}
  }
  function buildNovoCard(dep) {
    var card = document.createElement("div");
    card.className = "dep-novo-card";
    card.innerHTML =
      '<span class="dep-novo-badge">Novo depoimento</span>' +
      '<div class="dep-novo-stars">' +
      starsHTML(dep.stars || 5) +
      "</div>" +
      '<p class="dep-novo-txt">' +
      escHTML(dep.txt) +
      "</p>" +
      '<div class="dep-novo-foot"><div>' +
      '<div class="dep-novo-name">' +
      escHTML(dep.nome) +
      " · " +
      escHTML(dep.empresa) +
      "</div>" +
      '<div class="dep-novo-meta">' +
      escHTML(dep.seg || "") +
      (dep.data ? " · " + dep.data : "") +
      "</div>" +
      '</div><span class="dep-novo-insta">' +
      escHTML(dep.insta || "") +
      "</span></div>";
    return card;
  }
  function renderSaved() {
    var novos = document.getElementById("depNovos");
    if (!novos) return;
    var arr = loadSaved();
    novos.innerHTML = "";
    arr.forEach(function (dep) {
      novos.appendChild(buildNovoCard(dep));
    });
  }
  renderSaved();

  var submitBtn = document.getElementById("depSubmit");
  var toast = document.getElementById("depToast");
  var btnTxt = document.getElementById("depBtnTxt");
  function getVal(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", function () {
      var nome = getVal("depNome"),
        empresa = getVal("depEmpresa"),
        txt = getVal("depMsg");
      if (!nome) {
        shake(document.getElementById("depNome"));
        return;
      }
      if (!empresa) {
        shake(document.getElementById("depEmpresa"));
        return;
      }
      if (!txt) {
        shake(document.getElementById("depMsg"));
        return;
      }
      if (selectedStars === 0) {
        shake(document.getElementById("depStarRow"));
        return;
      }
      var insta = getVal("depInsta"),
        seg = getVal("depSeg");
      var waMsg =
        "Novo depoimento no site:\n⭐ " +
        selectedStars +
        "/5\nNome: " +
        nome +
        "\nEmpresa: " +
        empresa +
        "\n" +
        (seg ? "Segmento: " + seg + "\n" : "") +
        (insta ? "Instagram: " + insta + "\n" : "") +
        'Depoimento: "' +
        txt +
        '"';
      window.open("https://wa.me/" + AURA_WHATS + "?text=" + encodeURIComponent(waMsg), "_blank");
      submitBtn.disabled = true;
      submitBtn.style.opacity = ".7";
      if (btnTxt) btnTxt.textContent = "Enviando...";
      var dep = {
        nome: nome,
        empresa: empresa,
        insta: insta,
        seg: seg,
        txt: txt,
        stars: selectedStars,
        data: new Date().toLocaleDateString("pt-BR", { month: "short", year: "numeric" }),
      };
      setTimeout(function () {
        saveDep(dep);
        var novos = document.getElementById("depNovos");
        if (novos) novos.insertBefore(buildNovoCard(dep), novos.firstChild);
        ["depNome", "depEmpresa", "depInsta", "depSeg", "depMsg"].forEach(function (id) {
          var el = document.getElementById(id);
          if (el) el.value = "";
        });
        selectedStars = 0;
        updateStars(0, false);
        if (charsSpan) charsSpan.textContent = "0";
        submitBtn.disabled = false;
        submitBtn.style.opacity = "";
        if (btnTxt) btnTxt.textContent = "Enviar depoimento";
        if (toast) {
          toast.classList.add("show");
          setTimeout(function () {
            toast.classList.remove("show");
          }, 4000);
        }
      }, 800);
    });
  }

  function shake(el) {
    if (!el) return;
    el.style.animation = "none";
    el.offsetHeight;
    el.style.animation = "shakeX .4s ease";
    el.addEventListener(
      "animationend",
      function () {
        el.style.animation = "";
      },
      { once: true },
    );
    if (!document.getElementById("shakeStyle")) {
      var s = document.createElement("style");
      s.id = "shakeStyle";
      s.textContent =
        "@keyframes shakeX { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-6px)} 40%{transform:translateX(6px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }";
      document.head.appendChild(s);
    }
  }

  /* === Barras de avaliação animam ao entrar na viewport === */
  var bars = document.querySelectorAll(".dep-bar-fill");
  if (bars.length) {
    var barObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.style.animationDelay = Array.from(bars).indexOf(e.target) * 0.15 + "s";
            e.target.style.animationPlayState = "running";
            barObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    bars.forEach(function (b) {
      b.style.animationPlayState = "paused";
      barObs.observe(b);
    });
  }

  /* ══════════════════════════════════════════
     BOTÃO VOLTAR AO TOPO (todas as páginas)
     Aparece quando o usuário rola pra baixo e,
     ao clicar, sobe suavemente até o topo.
     ══════════════════════════════════════════ */
  var toTop = document.createElement("button");
  toTop.className = "to-top";
  toTop.setAttribute("aria-label", "Voltar ao topo");
  toTop.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(toTop);
  window.addEventListener(
    "scroll",
    function () {
      toTop.classList.toggle("show", window.scrollY > 600);
    },
    { passive: true },
  );
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ══════════════════════════════════════════
     BLOG (slider da página inicial)
     ------------------------------------------------------------------
     >>> É AQUI QUE VOCÊ PUBLICA/EDITA OS CONTEÚDOS DO BLOG <<<
     Cada post é um item do array POSTS abaixo. Campos:
       titulo  -> título do post
       cat     -> categoria (ex: 'SEO Local', 'Tráfego Pago')
       data    -> data (ex: 'Set 2026')
       resumo  -> 1 ou 2 frases de chamada
       icone   -> emoji que aparece na capa
       url     -> link do post. Enquanto não tiver a página do post,
                  deixe '#'. Quando criar o artigo (ex: blog-post.html),
                  troque pelo caminho do arquivo.
     Para ADICIONAR um post, copie uma linha e edite. Para REMOVER, apague.
     Os exemplos abaixo são MODELOS de pauta (troque pelos seus conteúdos reais).
     ══════════════════════════════════════════ */
  var POSTS = [
    {
      titulo: "Como aparecer no Google Maps da sua cidade",
      cat: "SEO Local",
      data: "Set 2026",
      resumo: "O passo a passo para o seu negócio ser encontrado por quem procura seu serviço na região.",
      icone: "📍",
      url: "#",
    },
    {
      titulo: "Quanto investir em tráfego pago para começar",
      cat: "Tráfego Pago",
      data: "Set 2026",
      resumo: "Entenda como definir um orçamento inicial de Google e Meta Ads sem desperdiçar dinheiro.",
      icone: "🎯",
      url: "#",
    },
    {
      titulo: "Site ou Instagram: por onde começar?",
      cat: "Estratégia",
      data: "Ago 2026",
      resumo: "Para prestador de serviço e comércio local, qual canal traz cliente mais rápido.",
      icone: "🤔",
      url: "#",
    },
    {
      titulo: "5 erros que fazem seu site não vender",
      cat: "Sites",
      data: "Ago 2026",
      resumo: "Do WhatsApp escondido ao site lento: o que corrigir para transformar visita em cliente.",
      icone: "🚀",
      url: "#",
    },
    {
      titulo: "Por que responder rápido no WhatsApp vende mais",
      cat: "Conversão",
      data: "Jul 2026",
      resumo: "O tempo de resposta é decisivo. Veja como não perder lead por demora.",
      icone: "💬",
      url: "#",
    },
  ];

  function buildPostCard(p) {
    var card = document.createElement(p.url && p.url !== "#" ? "a" : "div");
    card.className = "blog-card";
    if (p.url && p.url !== "#") {
      card.href = p.url;
    }
    card.innerHTML =
      '<div class="blog-card-img">' +
      escHTML(p.icone || "📝") +
      '<span class="blog-card-cat">' +
      escHTML(p.cat) +
      "</span></div>" +
      '<div class="blog-card-body">' +
      '<span class="blog-card-date">' +
      escHTML(p.data) +
      "</span>" +
      "<h3>" +
      escHTML(p.titulo) +
      "</h3>" +
      "<p>" +
      escHTML(p.resumo) +
      "</p>" +
      '<span class="blog-card-link">Ler artigo →</span>' +
      "</div>";
    return card;
  }
  var blogTrack = document.getElementById("blogTrack");
  if (blogTrack && POSTS.length) {
    // duplica para o loop do slider ficar contínuo
    POSTS.concat(POSTS).forEach(function (p) {
      blogTrack.appendChild(buildPostCard(p));
    });
  }
});
