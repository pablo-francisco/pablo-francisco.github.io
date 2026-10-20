# Portfólio de Ciência de Dados

Site pessoal estático (HTML, CSS e JavaScript puro), pronto para ser hospedado gratuitamente no GitHub Pages. Não precisa de build, framework nem servidor.

## Estrutura

```
index.html                 Página inicial com todas as seções
projeto.html               Modelo único das páginas de projeto (projeto.html?id=...)
assets/
  css/style.css            Estilos, cores e tema claro/escuro
  js/data.js               TODO O CONTEÚDO DO SITE (edite aqui)
  js/common.js             Funções compartilhadas, tema e menu
  js/main.js               Monta a página inicial
  js/projeto.js            Monta a página de cada projeto
  img/favicon.svg          Ícone da aba do navegador
  img/projetos/<id>/       Capa e imagens de cada projeto
.nojekyll                  Faz o GitHub Pages servir os arquivos como estão
```

## Como personalizar

Todo o texto fica em `assets/js/data.js`. Você não precisa mexer no HTML para trocar conteúdo.

1. **Perfil**: nome, iniciais, cargo, resumo, e-mail, LinkedIn, GitHub e Kaggle. Deixe um campo vazio (`""`) para escondê-lo.
2. **Currículo**: coloque o PDF em `assets/` (ex.: `assets/curriculo.pdf`) e preencha `curriculo: "assets/curriculo.pdf"`. Com o campo vazio, o botão não aparece.
3. **Experiências e formação**: datas no formato `"AAAA-MM"`. Use `fim: null` para "atual". A duração é calculada sozinha.
4. **Certificações e publicações**: preencha `link` com a URL da credencial ou use `null`. Se a lista de publicações ficar vazia, a seção some.

### Adicionar um projeto

1. Crie a pasta `assets/img/projetos/meu-projeto/` com as imagens (PNG, JPG, WebP ou SVG). A capa fica melhor na proporção 16:10, por exemplo 1200 × 750 px.
2. Copie um bloco de projeto em `data.js` e troque os campos. O `id` precisa ser único, sem espaços nem acentos, pois vira o endereço: `projeto.html?id=meu-projeto`.
3. Em `github`, coloque o link do repositório. Use `null` para repositório privado: o card mostra "Repositório privado" e a página explica que o código pode ser apresentado em conversa.
4. Em `demo`, coloque o link de um app publicado (Streamlit, Hugging Face Spaces etc.) ou `null`.

A cor de cada área de projeto é atribuída automaticamente a partir da escala viridis, na ordem em que as categorias aparecem.

> As imagens atuais são ilustrações geradas para o modelo e os números dos projetos são exemplos. Substitua pelos gráficos e resultados reais dos seus notebooks (no Matplotlib: `plt.savefig("grafico-1.png", dpi=150, bbox_inches="tight")`).

## Publicar no GitHub Pages

1. Crie um repositório público chamado **`seu-usuario.github.io`** (troque `seu-usuario` pelo seu nome de usuário do GitHub).
2. Envie todos os arquivos desta pasta para a raiz do repositório, pelo botão **Add file > Upload files** ou pelo terminal:
   ```bash
   git init
   git add .
   git commit -m "Primeira versão do portfólio"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/seu-usuario.github.io.git
   git push -u origin main
   ```
3. No repositório, abra **Settings > Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
4. Em alguns minutos o site estará em `https://seu-usuario.github.io`.

Se preferir outro nome de repositório (ex.: `portfolio`), o endereço será `https://seu-usuario.github.io/portfolio/`. Todos os caminhos do site são relativos, então funciona nos dois casos.

## Testar no computador

Basta abrir o `index.html` no navegador. Para simular o servidor do GitHub, rode na pasta do projeto:

```bash
python -m http.server 8000
```

e acesse `http://localhost:8000`.

## Recursos incluídos

- Tema claro e escuro (segue o sistema e pode ser alternado pelo botão no topo; a escolha fica salva no navegador)
- Filtro de projetos por área
- Cards de projeto inteiramente clicáveis, com link separado para o repositório
- Página de projeto com contexto, etapas, resultados, galeria com ampliação de imagens e navegação entre projetos
- Layout responsivo, navegação por teclado, contraste adequado e respeito à preferência de movimento reduzido
- Estilos de impressão (a página inicial imprime como currículo resumido)
