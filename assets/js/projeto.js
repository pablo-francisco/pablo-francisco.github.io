/* Página de projeto: lê ?id= da URL e monta o resumo a partir de data.js */
(function () {
  "use strict";

  var D = window.PORTFOLIO;
  var U = window.U;
  var esc = U.esc;

  function naoEncontrado(alvo) {
    document.title = "Projeto não encontrado | " + D.perfil.nome;
    alvo.innerHTML =
      '<section class="container vazio">' +
      "<h1>Projeto não encontrado</h1>" +
      "<p>O endereço não corresponde a nenhum projeto publicado. Confira o link ou escolha um projeto na lista.</p>" +
      '<a class="botao botao--primario" href="index.html#projetos">Ver todos os projetos</a>' +
      "</section>";
  }

  function montar(alvo, p, indice) {
    var lista = D.projetos;
    var perfil = D.perfil;
    document.title = p.titulo + " | " + perfil.nome;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", p.resumo);

    var acoes = "";
    if (p.github) {
      acoes += '<a class="botao botao--primario" href="' + esc(p.github) + '" target="_blank" rel="noopener">' +
        U.icone("github") + "Ver código no GitHub</a>";
    }
    if (p.demo) {
      acoes += '<a class="botao botao--secundario" href="' + esc(p.demo) + '" target="_blank" rel="noopener">' +
        U.icone("externo") + "Abrir demonstração</a>";
    }
    if (!p.github) {
      acoes += '<p class="nota-privado">' + U.icone("cadeado") +
        "O código deste projeto está em repositório privado. Posso apresentá-lo em uma conversa.</p>";
    }

    var n = p.abordagem.length;
    var passos = p.abordagem.map(function (a, i) {
      var t = n > 1 ? i / (n - 1) : 0.5;
      // Nos tons claros da escala (verde e amarelo) o número fica escuro para manter o contraste
      return '<li style="--cor:' + U.viridis(t) + ";--cor-texto:" + (t > 0.55 ? "#17212B" : "#FFFFFF") + '">' +
        '<span class="passo__num" aria-hidden="true">' + (i + 1) + "</span>" +
        "<div><h3>" + esc(a.titulo) + "</h3><p>" + esc(a.texto) + "</p></div></li>";
    }).join("");

    var resultados = p.resultados.map(function (r) {
      return '<li><span class="resultado__valor">' + esc(r.valor) + '</span><span class="resultado__desc">' + esc(r.descricao) + "</span></li>";
    }).join("");

    var galeria = (p.galeria || []).map(function (g, i) {
      return '<figure class="galeria__item">' +
        '<button type="button" class="galeria__botao" data-indice="' + i + '" aria-label="Ampliar imagem: ' + esc(g.legenda) + '">' +
        '<img src="' + esc(g.src) + '" alt="' + esc(g.legenda) + '" loading="lazy"></button>' +
        "<figcaption>" + esc(g.legenda) + "</figcaption></figure>";
    }).join("");

    var aprendizados = (p.aprendizados || []).map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("");

    var anterior = lista[(indice - 1 + lista.length) % lista.length];
    var proximo = lista[(indice + 1) % lista.length];

    alvo.innerHTML =
      '<article class="projeto">' +
      '<header class="projeto-topo container">' +
      '<a class="voltar" href="index.html#projetos">' + U.icone("voltar") + "Todos os projetos</a>" +
      '<p class="categoria" style="--cor:' + U.corCategoria(p.categoria) + '">' + esc(p.categoria) + ", " + p.ano + "</p>" +
      "<h1>" + esc(p.titulo) + "</h1>" +
      '<p class="projeto-lead">' + esc(p.resumo) + "</p>" +
      '<div class="projeto-acoes">' + acoes + "</div>" +
      '<dl class="projeto-meta">' +
      "<div><dt>Período</dt><dd>" + esc(p.periodo) + "</dd></div>" +
      "<div><dt>Formato</dt><dd>" + esc(p.papel) + "</dd></div>" +
      "<div><dt>Área</dt><dd>" + esc(p.categoria) + "</dd></div>" +
      "<div><dt>Ferramentas principais</dt><dd>" + p.stack.slice(0, 3).map(esc).join(", ") + "</dd></div>" +
      "</dl></header>" +

      '<figure class="projeto-capa container"><img src="' + esc(p.capa) + '" alt="Imagem de capa do projeto ' + esc(p.titulo) + '" width="1200" height="750"></figure>' +

      '<div class="projeto-corpo container">' +
      '<div class="projeto-principal">' +
      '<section class="projeto-secao" aria-labelledby="t-contexto"><h2 id="t-contexto">Contexto e problema</h2><p class="texto-longo">' + esc(p.contexto) + "</p></section>" +
      '<section class="projeto-secao" aria-labelledby="t-abordagem"><h2 id="t-abordagem">Como foi feito</h2><ol class="passos">' + passos + "</ol></section>" +
      '<section class="projeto-secao" aria-labelledby="t-resultados"><h2 id="t-resultados">Resultados</h2><ul class="resultados">' + resultados + "</ul></section>" +
      (galeria ? '<section class="projeto-secao" aria-labelledby="t-galeria"><h2 id="t-galeria">Gráficos e imagens</h2><div class="galeria">' + galeria + "</div></section>" : "") +
      (aprendizados ? '<section class="projeto-secao" aria-labelledby="t-aprendizados"><h2 id="t-aprendizados">O que aprendi</h2><ul class="conquistas conquistas--grande">' + aprendizados + "</ul></section>" : "") +
      "</div>" +
      '<aside class="projeto-lateral" aria-label="Ferramentas e links">' +
      "<h2>Ferramentas</h2>" +
      '<ul class="etiquetas">' + p.stack.map(function (s) { return '<li class="etiqueta">' + esc(s) + "</li>"; }).join("") + "</ul>" +
      "<h2>Links</h2>" +
      '<ul class="lista-links">' +
      (p.github ? '<li><a href="' + esc(p.github) + '" target="_blank" rel="noopener">' + U.icone("github") + "Repositório</a></li>" : '<li class="texto-suave">' + U.icone("cadeado") + "Repositório privado</li>") +
      (p.demo ? '<li><a href="' + esc(p.demo) + '" target="_blank" rel="noopener">' + U.icone("externo") + "Demonstração</a></li>" : "") +
      (perfil.github ? '<li><a href="' + esc(perfil.github) + '" target="_blank" rel="noopener">' + U.icone("github") + "Outros repositórios</a></li>" : "") +
      "</ul></aside></div>" +

      '<nav class="navegacao-projetos container" aria-label="Outros projetos">' +
      '<a class="navegacao-projetos__link" href="' + U.urlProjeto(anterior.id) + '"><span class="navegacao-projetos__rotulo">Projeto anterior</span><span class="navegacao-projetos__titulo">' + esc(anterior.titulo) + "</span></a>" +
      '<a class="navegacao-projetos__link navegacao-projetos__link--proximo" href="' + U.urlProjeto(proximo.id) + '"><span class="navegacao-projetos__rotulo">Próximo projeto</span><span class="navegacao-projetos__titulo">' + esc(proximo.titulo) + "</span></a>" +
      "</nav></article>";

    ativarGaleria(p.galeria || []);
  }

  function ativarGaleria(imagens) {
    var dialogo = document.getElementById("ampliacao");
    if (!dialogo || !imagens.length || typeof dialogo.showModal !== "function") return;
    var img = dialogo.querySelector("img");
    var legenda = dialogo.querySelector("figcaption");
    var fechar = dialogo.querySelector(".ampliacao__fechar");
    var origem = null;
    fechar.innerHTML = U.icone("fechar");

    document.querySelectorAll(".galeria__botao").forEach(function (b) {
      b.addEventListener("click", function () {
        var g = imagens[Number(b.getAttribute("data-indice"))];
        img.src = g.src;
        img.alt = g.legenda;
        legenda.textContent = g.legenda;
        origem = b;
        dialogo.showModal();
      });
    });
    fechar.addEventListener("click", function () { dialogo.close(); });
    dialogo.addEventListener("click", function (e) { if (e.target === dialogo) dialogo.close(); });
    dialogo.addEventListener("close", function () { if (origem) origem.focus(); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var alvo = document.getElementById("conteudo");
    var id = new URLSearchParams(window.location.search).get("id");
    var indice = -1;
    D.projetos.some(function (p, i) { if (p.id === id) { indice = i; return true; } return false; });
    if (indice === -1) naoEncontrado(alvo);
    else montar(alvo, D.projetos[indice], indice);
  });
})();
