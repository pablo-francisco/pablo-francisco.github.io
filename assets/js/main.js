/* Página inicial: monta todas as seções a partir de data.js */
(function () {
  "use strict";

  var D = window.PORTFOLIO;
  var U = window.U;
  var esc = U.esc;

  function $(sel) { return document.querySelector(sel); }

  /* ---------- Apresentação ---------- */
  function montarApresentacao() {
    var p = D.perfil;
    document.title = p.nome + " | " + p.cargo;
    $("#hero-cargo").textContent = p.cargo;
    $("#hero-nome").textContent = p.nome;
    $("#hero-resumo").textContent = p.resumoCurto;

    var acoes = '<a class="botao botao--primario" href="#projetos">Ver projetos</a>';
    if (p.curriculo) {
      acoes += '<a class="botao botao--secundario" href="' + esc(p.curriculo) + '" download>' +
        U.icone("documento") + "Baixar currículo</a>";
    }
    var redes = [["GitHub", p.github, "github"], ["LinkedIn", p.linkedin, "linkedin"]];
    redes.forEach(function (r) {
      if (!r[1]) return;
      acoes += '<a class="icone-link icone-link--grande" href="' + esc(r[1]) +
        '" target="_blank" rel="noopener" aria-label="' + r[0] + '">' + U.icone(r[2]) + "</a>";
    });
    $("#hero-acoes").innerHTML = acoes;
  }

  /* ---------- Perfil profissional ---------- */
  function montarPerfil() {
    var p = D.perfil;
    var html = '<div class="sobre">' + p.sobre.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") + "</div>";

    html += '<dl class="fatos">' +
      "<div><dt>Localização</dt><dd>" + esc(p.localizacao) + "</dd></div>" +
      "<div><dt>Disponibilidade</dt><dd>" + esc(p.disponibilidade) + "</dd></div>" +
      "<div><dt>Idiomas</dt><dd>" + p.idiomas.map(esc).join("<br>") + "</dd></div>" +
      "</dl>";

    html += '<h3 class="subtitulo">Áreas de atuação</h3><ul class="areas">' +
      p.areas.map(function (a) {
        return "<li><h4>" + esc(a.titulo) + "</h4><p>" + esc(a.descricao) + "</p></li>";
      }).join("") + "</ul>";

    $("#perfil-conteudo").innerHTML = html;
  }

  /* ---------- Competências ---------- */
  function montarCompetencias() {
    $("#competencias-conteudo").innerHTML = D.competencias.map(function (g) {
      return '<div class="grupo"><h3>' + esc(g.grupo) + '</h3><ul class="etiquetas">' +
        g.itens.map(function (i) { return '<li class="etiqueta">' + esc(i) + "</li>"; }).join("") +
        "</ul></div>";
    }).join("");
  }

  /* ---------- Experiência profissional ---------- */
  function montarExperiencias() {
    var lista = D.experiencias;
    $("#experiencia-conteudo").innerHTML = lista.map(function (e, i) {
      // A cor do marcador acompanha o tempo: mais recente em amarelo, mais antiga em roxo
      var cor = U.viridis(lista.length > 1 ? 1 - i / (lista.length - 1) : 1);
      var idDet = "exp-detalhes-" + i;
      return '<li class="marco" style="--cor:' + cor + '">' +
        '<article class="cartao-exp">' +
        '<p class="cartao-exp__periodo">' + esc(U.periodo(e.inicio, e.fim)) +
        ' <span class="cartao-exp__duracao">(' + esc(U.duracao(e.inicio, e.fim)) + ")</span></p>" +
        "<h3>" + esc(e.cargo) + "</h3>" +
        '<p class="cartao-exp__org">' + esc(e.empresa) + ", " + esc(e.local.toLowerCase()) + "</p>" +
        '<p class="cartao-exp__resumo">' + esc(e.resumo) + "</p>" +
        '<button class="botao-texto" type="button" aria-expanded="false" aria-controls="' + idDet + '">Ver resultados e ferramentas</button>' +
        '<div class="cartao-exp__detalhes" id="' + idDet + '" hidden>' +
        '<ul class="conquistas">' + e.conquistas.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ul>" +
        '<ul class="etiquetas">' + e.stack.map(function (s) { return '<li class="etiqueta">' + esc(s) + "</li>"; }).join("") + "</ul>" +
        "</div></article></li>";
    }).join("");

    document.querySelectorAll("#experiencia-conteudo .botao-texto").forEach(function (b) {
      b.addEventListener("click", function () {
        var aberto = b.getAttribute("aria-expanded") === "true";
        b.setAttribute("aria-expanded", String(!aberto));
        b.textContent = aberto ? "Ver resultados e ferramentas" : "Ocultar resultados e ferramentas";
        document.getElementById(b.getAttribute("aria-controls")).hidden = aberto;
      });
    });
  }

  /* ---------- Projetos ---------- */
  function cartaoProjeto(p) {
    var repo = p.github
      ? '<a class="card-repo" href="' + esc(p.github) + '" target="_blank" rel="noopener">' + U.icone("github") + "Repositório</a>"
      : '<span class="card-repo card-repo--privado">' + U.icone("cadeado") + "Repositório privado</span>";

    return '<article class="projeto-card" data-categoria="' + esc(p.categoria) + '">' +
      '<img class="projeto-card__img" src="' + esc(p.capa) + '" alt="" loading="lazy" width="1200" height="750">' +
      '<div class="projeto-card__corpo">' +
      '<p class="categoria" style="--cor:' + U.corCategoria(p.categoria) + '">' + esc(p.categoria) + ", " + p.ano + "</p>" +
      '<h3><a href="' + U.urlProjeto(p.id) + '">' + esc(p.titulo) + "</a></h3>" +
      '<p class="projeto-card__resumo">' + esc(p.resumo) + "</p>" +
      '<ul class="etiquetas etiquetas--compactas">' + p.stack.slice(0, 4).map(function (s) {
        return '<li class="etiqueta">' + esc(s) + "</li>";
      }).join("") + "</ul>" +
      '<div class="projeto-card__rodape"><span class="card-abrir">Ler resumo do projeto</span>' + repo + "</div>" +
      "</div></article>";
  }

  function montarProjetos() {
    var grade = $("#grade-projetos");
    grade.innerHTML = D.projetos.map(cartaoProjeto).join("");

    var cats = U.categorias();
    var filtros = $("#filtros");
    filtros.innerHTML = '<button type="button" class="filtro" aria-pressed="true" data-filtro="">Todos</button>' +
      cats.map(function (c) {
        return '<button type="button" class="filtro" aria-pressed="false" data-filtro="' + esc(c) + '">' +
          '<span class="filtro__cor" style="--cor:' + U.corCategoria(c) + '"></span>' + esc(c) + "</button>";
      }).join("");

    var contagem = $("#contagem-projetos");
    function aplicar(cat) {
      var n = 0;
      grade.querySelectorAll(".projeto-card").forEach(function (card) {
        var mostra = !cat || card.getAttribute("data-categoria") === cat;
        card.hidden = !mostra;
        if (mostra) n++;
      });
      contagem.textContent = n === 1 ? "1 projeto" : n + " projetos";
    }

    filtros.addEventListener("click", function (e) {
      var b = e.target.closest(".filtro");
      if (!b) return;
      filtros.querySelectorAll(".filtro").forEach(function (f) {
        f.setAttribute("aria-pressed", String(f === b));
      });
      aplicar(b.getAttribute("data-filtro"));
    });
    aplicar("");
  }

  /* ---------- Formação acadêmica ---------- */
  function montarFormacao() {
    $("#formacao-conteudo").innerHTML = D.formacao.map(function (f) {
      return '<li class="item-formacao">' +
        '<p class="item-formacao__periodo">' + esc(U.periodo(f.inicio, f.fim)) + "</p>" +
        "<div><h3>" + esc(f.curso) + "</h3>" +
        '<p class="item-formacao__inst">' + esc(f.instituicao) + "</p>" +
        "<p>" + esc(f.descricao) + "</p>" +
        (f.destaques && f.destaques.length
          ? '<ul class="conquistas">' + f.destaques.map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") + "</ul>"
          : "") +
        "</div></li>";
    }).join("");
  }

  /* ---------- Certificações e publicações ---------- */
  function linhaLista(titulo, detalhe, ano, link, rotuloLink) {
    return '<li class="linha-lista">' +
      '<div><p class="linha-lista__titulo">' + esc(titulo) + "</p>" +
      '<p class="linha-lista__detalhe">' + esc(detalhe) + "</p></div>" +
      '<p class="linha-lista__ano">' + esc(ano) + "</p>" +
      (link
        ? '<a class="linha-lista__link" href="' + esc(link) + '" target="_blank" rel="noopener">' + rotuloLink + U.icone("externo") + "</a>"
        : '<span class="linha-lista__link" aria-hidden="true"></span>') +
      "</li>";
  }

  function montarCertificacoes() {
    $("#certificacoes-conteudo").innerHTML = D.certificacoes.map(function (c) {
      return linhaLista(c.nome, c.emissor, c.ano, c.link, "Ver credencial");
    }).join("");
  }

  function montarPublicacoes() {
    var sec = $("#publicacoes");
    if (!D.publicacoes || !D.publicacoes.length) { sec.hidden = true; return; }
    $("#publicacoes-conteudo").innerHTML = D.publicacoes.map(function (p) {
      return linhaLista(p.titulo, p.tipo + " em " + p.veiculo, p.ano, p.link, "Abrir");
    }).join("");
  }

  /* ---------- Contato ---------- */
  function montarContato() {
    var p = D.perfil;
    $("#contato-convite").textContent = p.convite || "";
    var itens = [];
    if (p.email) itens.push({ rotulo: "E-mail", valor: p.email, href: "mailto:" + p.email, icone: "email", copiar: true });
    if (p.linkedin) itens.push({ rotulo: "LinkedIn", valor: U.urlLimpa(p.linkedin), href: p.linkedin, icone: "linkedin" });
    if (p.github) itens.push({ rotulo: "GitHub", valor: U.urlLimpa(p.github), href: p.github, icone: "github" });
    if (p.kaggle) itens.push({ rotulo: "Kaggle", valor: U.urlLimpa(p.kaggle), href: p.kaggle, icone: "kaggle" });

    $("#contato-links").innerHTML = itens.map(function (i) {
      var externo = i.href.indexOf("mailto:") === 0 ? "" : ' target="_blank" rel="noopener"';
      return '<li class="contato-item">' +
        '<a href="' + esc(i.href) + '"' + externo + ">" +
        '<span class="contato-item__icone">' + U.icone(i.icone) + "</span>" +
        '<span><span class="contato-item__rotulo">' + i.rotulo + '</span><span class="contato-item__valor">' + esc(i.valor) + "</span></span></a>" +
        (i.copiar ? '<button class="botao-texto" type="button" data-copiar="' + esc(i.valor) + '">Copiar e-mail</button>' : "") +
        "</li>";
    }).join("");

    var botao = document.querySelector("[data-copiar]");
    var aviso = $("#aviso-copia");
    if (botao) {
      botao.addEventListener("click", function () {
        var texto = botao.getAttribute("data-copiar");
        var ok = function () {
          aviso.textContent = "E-mail copiado para a área de transferência.";
          botao.textContent = "E-mail copiado";
          setTimeout(function () { botao.textContent = "Copiar e-mail"; aviso.textContent = ""; }, 2500);
        };
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(texto).then(ok, function () { aviso.textContent = "Não foi possível copiar. Selecione o endereço e copie manualmente."; });
        } else {
          aviso.textContent = "Selecione o endereço e copie manualmente.";
        }
      });
    }
  }

  /* ---------- Destaque do item de menu da seção visível ---------- */
  function observarSecoes() {
    if (!("IntersectionObserver" in window)) return;
    var links = document.querySelectorAll(".nav__lista a[href^='#']");
    var mapa = {};
    links.forEach(function (a) { mapa[a.getAttribute("href").slice(1)] = a; });
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting && mapa[en.target.id]) {
          links.forEach(function (a) { a.removeAttribute("aria-current"); });
          mapa[en.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(mapa).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) obs.observe(s);
    });
  }

  /* ---------- Gráfico do topo: pontos que se organizam em torno de um modelo ---------- */
  function graficoTopo() {
    var canvas = document.getElementById("grafico-hero");
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var semente = 11;
    function aleatorio() { semente = (semente * 16807) % 2147483647; return (semente - 1) / 2147483646; }
    function curva(x) { return 0.08 + 0.84 / (1 + Math.exp(-(x - 0.48) * 9)); }

    var pontos = [];
    for (var i = 0; i < 96; i++) {
      var x = 0.03 + aleatorio() * 0.94;
      var ruido = (aleatorio() + aleatorio() + aleatorio() - 1.5) * 0.14;
      pontos.push({
        x: x,
        y: Math.min(0.97, Math.max(0.03, curva(x) + ruido)),
        x0: aleatorio(), y0: aleatorio(),
        atraso: aleatorio() * 0.35,
        r: 2.6 + aleatorio() * 2.6
      });
    }

    var progresso = reduzir ? 1 : 0;
    var DURACAO = 2400;

    function suavizar(t) { return 1 - Math.pow(1 - t, 3); }
    function limitar(v) { return Math.min(1, Math.max(0, v)); }

    function desenhar() {
      var css = getComputedStyle(document.documentElement);
      var corGrade = css.getPropertyValue("--grade").trim();
      var corEixo = css.getPropertyValue("--tinta-3").trim();
      var corCurva = css.getPropertyValue("--tinta").trim();
      var fonte = css.getPropertyValue("--fonte-texto").trim();

      var dpr = window.devicePixelRatio || 1;
      var w = canvas.clientWidth, h = canvas.clientHeight;
      if (!w || !h) return;
      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      var m = { e: 44, d: 20, t: 22, b: 42 };
      var aw = w - m.e - m.d, ah = h - m.t - m.b;
      function px(v) { return m.e + v * aw; }
      function py(v) { return m.t + (1 - v) * ah; }

      ctx.strokeStyle = corGrade;
      ctx.lineWidth = 1;
      for (var g = 0; g <= 5; g++) {
        ctx.beginPath(); ctx.moveTo(px(g / 5), py(0)); ctx.lineTo(px(g / 5), py(1)); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px(0), py(g / 5)); ctx.lineTo(px(1), py(g / 5)); ctx.stroke();
      }
      ctx.strokeStyle = corEixo;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(px(0), py(1)); ctx.lineTo(px(0), py(0)); ctx.lineTo(px(1), py(0)); ctx.stroke();

      ctx.fillStyle = corEixo;
      ctx.font = "12px " + fonte;
      ctx.textAlign = "right";
      ctx.fillText("dados disponíveis", px(1), py(0) + 26);
      ctx.save();
      ctx.translate(px(0) - 18, py(1));
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = "right";
      ctx.fillText("qualidade da decisão", 0, 0);
      ctx.restore();

      var tp = limitar(progresso / 0.8);
      pontos.forEach(function (p) {
        var k = suavizar(limitar((tp - p.atraso) / 0.65));
        var x = p.x0 + (p.x - p.x0) * k;
        var y = p.y0 + (p.y - p.y0) * k;
        ctx.globalAlpha = 0.35 + 0.55 * k;
        ctx.fillStyle = U.viridis(p.x);
        ctx.beginPath(); ctx.arc(px(x), py(y), p.r, 0, Math.PI * 2); ctx.fill();
      });
      ctx.globalAlpha = 1;

      var c = suavizar(limitar((progresso - 0.68) / 0.32));
      if (c > 0) {
        ctx.strokeStyle = corCurva;
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.beginPath();
        var passos = 120, fim = Math.round(passos * c);
        for (var s = 0; s <= fim; s++) {
          var xv = s / passos;
          if (s === 0) ctx.moveTo(px(xv), py(curva(xv))); else ctx.lineTo(px(xv), py(curva(xv)));
        }
        ctx.stroke();
      }
    }

    if (reduzir) {
      desenhar();
    } else {
      var inicio = null;
      var quadro = function (t) {
        if (inicio === null) inicio = t;
        progresso = limitar((t - inicio) / DURACAO);
        desenhar();
        if (progresso < 1) requestAnimationFrame(quadro);
      };
      requestAnimationFrame(quadro);
    }

    if ("ResizeObserver" in window) new ResizeObserver(desenhar).observe(canvas);
    else window.addEventListener("resize", desenhar);
    document.addEventListener("temamudou", desenhar);
  }

  document.addEventListener("DOMContentLoaded", function () {
    montarApresentacao();
    montarPerfil();
    montarCompetencias();
    montarExperiencias();
    montarProjetos();
    montarFormacao();
    montarCertificacoes();
    montarPublicacoes();
    montarContato();
    observarSecoes();
    graficoTopo();
  });
})();
