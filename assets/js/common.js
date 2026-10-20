/* Funções compartilhadas pelas duas páginas */
(function () {
  "use strict";

  var MESES = ["jan.", "fev.", "mar.", "abr.", "maio", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."];

  // Paleta viridis: ordem e intensidade, a mesma escala usada em gráficos científicos
  var VIRIDIS = [
    [68, 1, 84], [72, 40, 120], [62, 74, 137], [49, 104, 142], [38, 130, 142],
    [31, 158, 137], [53, 183, 121], [109, 205, 89], [180, 222, 44], [253, 231, 37]
  ];

  var ICONES = {
    github: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 .5C5.73.5.5 5.74.5 12.03c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.72 0-1.26.45-2.3 1.19-3.1-.12-.3-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.06.74.8 1.19 1.84 1.19 3.1 0 4.45-2.7 5.42-5.27 5.71.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12.03C23.5 5.74 18.27.5 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M4.98 3.5a2.49 2.49 0 1 1-4.98 0 2.49 2.49 0 0 1 4.98 0zM.5 8h4v16h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.84-2.2 3.8-2.2 4.07 0 4.82 2.68 4.82 6.16V24h-4v-7.1c0-1.7-.03-3.88-2.36-3.88-2.37 0-2.73 1.85-2.73 3.76V24H8V8z"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M3 5.5h18v13H3z"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="m3.5 6 8.5 7 8.5-7"/></svg>',
    kaggle: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M18.8 23.4c-.02.23-.14.35-.37.35h-3.07a.52.52 0 0 1-.45-.24l-5.1-6.5-1.43 1.36v5.02c0 .24-.12.36-.36.36H5.62c-.24 0-.36-.12-.36-.36V.6c0-.24.12-.36.36-.36h2.4c.24 0 .36.12.36.36v14.3l6.13-6.2a.6.6 0 0 1 .45-.22h3.2c.14 0 .23.06.27.17a.4.4 0 0 1-.03.35l-6.48 6.27 6.77 8.4c.1.1.13.23.1.35z"/></svg>',
    externo: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    documento: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M6 2.5h8l4 4v15H6z"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M9 12h6M9 16h6"/></svg>',
    cadeado: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="5" y="10.5" width="14" height="10" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path fill="none" stroke="currentColor" stroke-width="1.8" d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/></svg>',
    sol: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></svg>',
    lua: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>',
    voltar: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M15 5l-7 7 7 7"/></svg>',
    fechar: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M6 6l12 12M18 6 6 18"/></svg>'
  };

  var U = {
    esc: function (s) {
      return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
    },

    // "2023-08" -> "ago. 2023"; null -> "atual"
    mes: function (str) {
      if (!str) return "atual";
      var p = str.split("-").map(Number);
      return MESES[p[1] - 1] + " " + p[0];
    },

    periodo: function (inicio, fim) {
      return U.mes(inicio) + " a " + U.mes(fim);
    },

    duracao: function (inicio, fim) {
      var a = inicio.split("-").map(Number), b;
      if (fim) {
        b = fim.split("-").map(Number);
      } else {
        var d = new Date();
        b = [d.getFullYear(), d.getMonth() + 1];
      }
      var total = (b[0] - a[0]) * 12 + (b[1] - a[1]) + 1;
      var anos = Math.floor(total / 12), meses = total % 12, partes = [];
      if (anos) partes.push(anos + (anos > 1 ? " anos" : " ano"));
      if (meses) partes.push(meses + (meses > 1 ? " meses" : " mês"));
      return partes.join(" e ");
    },

    // Cor viridis para uma posição t entre 0 e 1
    viridis: function (t) {
      t = Math.min(1, Math.max(0, t));
      var pos = t * (VIRIDIS.length - 1), i = Math.floor(pos), f = pos - i;
      var a = VIRIDIS[i], b = VIRIDIS[Math.min(i + 1, VIRIDIS.length - 1)];
      var c = a.map(function (v, k) { return Math.round(v + (b[k] - v) * f); });
      return "rgb(" + c.join(",") + ")";
    },

    // Cada categoria de projeto recebe uma cor fixa da escala viridis
    categorias: function () {
      var vistas = [];
      window.PORTFOLIO.projetos.forEach(function (p) {
        if (vistas.indexOf(p.categoria) === -1) vistas.push(p.categoria);
      });
      return vistas;
    },

    corCategoria: function (cat) {
      var cats = U.categorias();
      var i = cats.indexOf(cat);
      return U.viridis(cats.length > 1 ? i / (cats.length - 1) : 0.5);
    },

    icone: function (nome) { return ICONES[nome] || ""; },

    urlProjeto: function (id) { return "projeto.html?id=" + encodeURIComponent(id); },

    urlLimpa: function (url) { return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""); }
  };

  window.U = U;

  /* ---------- Tema claro/escuro ---------- */
  var raiz = document.documentElement;
  var escuroSistema = window.matchMedia("(prefers-color-scheme: dark)");

  function temaAtual() {
    return raiz.getAttribute("data-theme") || (escuroSistema.matches ? "dark" : "light");
  }

  function atualizarBotaoTema() {
    var botao = document.getElementById("botao-tema");
    if (!botao) return;
    var escuro = temaAtual() === "dark";
    botao.innerHTML = escuro ? ICONES.sol : ICONES.lua;
    botao.setAttribute("aria-label", escuro ? "Ativar tema claro" : "Ativar tema escuro");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var botao = document.getElementById("botao-tema");
    if (botao) {
      atualizarBotaoTema();
      botao.addEventListener("click", function () {
        var novo = temaAtual() === "dark" ? "light" : "dark";
        raiz.setAttribute("data-theme", novo);
        try { localStorage.setItem("tema", novo); } catch (e) { /* armazenamento indisponível */ }
        atualizarBotaoTema();
        document.dispatchEvent(new CustomEvent("temamudou"));
      });
    }
    escuroSistema.addEventListener("change", function () {
      atualizarBotaoTema();
      document.dispatchEvent(new CustomEvent("temamudou"));
    });

    /* ---------- Menu no celular ---------- */
    var toggle = document.getElementById("menu-toggle");
    var lista = document.getElementById("nav-lista");
    if (toggle && lista) {
      toggle.addEventListener("click", function () {
        var aberto = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!aberto));
        lista.classList.toggle("aberta", !aberto);
      });
      lista.addEventListener("click", function (e) {
        if (e.target.closest("a")) {
          toggle.setAttribute("aria-expanded", "false");
          lista.classList.remove("aberta");
        }
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && lista.classList.contains("aberta")) {
          toggle.setAttribute("aria-expanded", "false");
          lista.classList.remove("aberta");
          toggle.focus();
        }
      });
    }

    /* ---------- Marca e rodapé ---------- */
    var perfil = window.PORTFOLIO.perfil;
    var marca = document.getElementById("marca");
    if (marca) {
      marca.textContent = perfil.iniciais;
      marca.setAttribute("aria-label", perfil.nome + ", página inicial");
    }
    var rodape = document.getElementById("rodape-texto");
    if (rodape) {
      rodape.innerHTML = "© " + new Date().getFullYear() + " " + U.esc(perfil.nome) +
        ". Site estático publicado com GitHub Pages.";
    }
    var redes = document.getElementById("rodape-redes");
    if (redes) {
      var links = [
        ["GitHub", perfil.github, "github"],
        ["LinkedIn", perfil.linkedin, "linkedin"],
        ["Kaggle", perfil.kaggle, "kaggle"]
      ].filter(function (l) { return l[1]; });
      redes.innerHTML = links.map(function (l) {
        return '<a class="icone-link" href="' + U.esc(l[1]) + '" target="_blank" rel="noopener" aria-label="' + l[0] + '">' + ICONES[l[2]] + "</a>";
      }).join("");
    }
  });
})();
