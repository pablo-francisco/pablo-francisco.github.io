/*
  CONTEÚDO DO PORTFÓLIO
  ---------------------
  Edite apenas este arquivo para trocar textos, links e projetos.
  Todo o site (página inicial e páginas de projeto) é montado a partir daqui.

  Datas de experiência e formação usam o formato "AAAA-MM".
  Use fim: null para indicar "atual".
  Em projetos, deixe github: null quando o repositório for privado,
  e demo: null quando não houver demonstração online.
*/

window.PORTFOLIO = {
  perfil: {
    nome: "Pablo Francisco",
    iniciais: "PF",
    cargo: "Cientista de Dados",
    resumoCurto:
      "Transformo dados brutos em modelos e análises que ajudam empresas a decidir com mais segurança.",
    localizacao: "Brasil, aberto a trabalho remoto",
    disponibilidade: "Aberto a novas oportunidades",
    // Texto exibido na seção de contato
    convite: "Estou aberto a vagas, projetos e troca de experiências sobre dados.",
    email: "pablo.data.ml@gmail.com",
    linkedin: "https://www.linkedin.com/in/pablo-francisco-a07443239/",
    github: "https://github.com/pablo-francisco",
    // kaggle: "https://www.kaggle.com/seu-usuario",
    // Coloque o PDF em assets/ e informe o caminho, ex.: "assets/curriculo.pdf".
    // Deixe vazio ("") para esconder o botão.
    // curriculo: "",
    sobre: [
      "Sou cientista de dados com 2+ anos de experiência em serviços financeiros, pesquisa aplicada e automação, com graduação na área de exatas, e +8 projetos entregues com sucesso para clientes nacionais e internacionais.",
      "Meu trabalho vai da conversa com a área de negócio até o modelo em produção: entender o problema, preparar os dados, modelar, validar e acompanhar o resultado depois da entrega.",
      "Tenho preferência por soluções simples e explicáveis. Um modelo só gera valor quando as pessoas confiam nele, por isso dou atenção especial à comunicação de resultados, à documentação e ao monitoramento."
    ],
    areas: [
      {
        titulo: "Modelagem preditiva",
        descricao: "Classificação, regressão e séries temporais com validação rigorosa e foco em métricas de negócio."
      },
      {
        titulo: "Análise e comunicação",
        descricao: "Análises exploratórias, testes A/B e painéis que respondem perguntas concretas de quem decide."
      },
      // {
      //   titulo: "Dados em produção",
      //   descricao: "Pipelines reprodutíveis, versionamento de modelos e monitoramento de desempenho ao longo do tempo."
      // }
    ],
    idiomas: ["Português (nativo)", "Inglês (avançado)", "Espanhol (intermediário)"]
  },

  competencias: [
    { grupo: "Linguagens", itens: ["Python", "SQL", "Bash"] },
    { grupo: "Machine learning", itens: ["scikit-learn", "XGBoost", "LightGBM", "PyTorch", "Hugging Face", "SHAP"] },
    { grupo: "Dados", itens: ["pandas", "Polars", "Spark", "DuckDB", "PostgreSQL"] },
    { grupo: "Visualização", itens: ["Matplotlib", "Plotly", "Streamlit", "Power BI", "Looker Studio"] },
    // { grupo: "MLOps e nuvem", itens: ["MLflow", "Airflow", "Docker", "AWS SageMaker", "GitHub Actions"] },
    { grupo: "Métodos", itens: ["Testes A/B", "Séries temporais", "Otimização de hiperparâmetros"] }
  ],

  experiencias: [
    {
      cargo: "Cientista de Dados",
      empresa: "Confidencial",
      local: "Remoto",
      inicio: "2026-05",
      fim: "2026-10",
      resumo:
        "Responsável pelo sistema de previsão de demanda energética para um ecossistema de 100+ unidades e recomendação de mudanças no sistema de distribuição de energia gerando economia de R$ 300 mil mensais.",
      conquistas: [
        "Desenvolvi a previsão (forecasting) de demanda e consumo para 160 unidades consumidoras, alinhando e estimando o budget necessário ao longo do semestre.",
        "Implantei um sistema de extração tratamento e validação de dados, em um ambiente com 1000+ PDFs, substituindo planilhas manuais e reduzindo o tempo de conferência de dados em 80%.",
        "Substituí o MVP de extração de dados baseados sistemas RAG por uma pipeline de dados em Python, eliminando o uso de tokens e reduzindo os custos em 70%.",
        "Desenvolvi um modelo de recomendação de mudanças no sistema de distribuição de energia, gerando uma economia de R$ 300 mil mensais.",
        "Contato direto com o time técnico (Engenharia e Tecnologia) e stakeholders para alinhamento de expectativas e validação de resultados."
      ],
      stack: ["Python", "XGboost", "MLflow", "Metabase","SQL"]
    },
    {
      cargo: "Cientista de Dados",
      empresa: "DS DRONES LTDA",
      local: "Híbrido",
      inicio: "2025-06",
      fim: null,
      resumo:
        "Atuando na área de visão computacional analisei imagens captadas por drones em mais de 10.000 hectares, apoiando decisões de gestão, logística e operações mensurando a qualidade das plantações utilizando técnicas de processamento de imagens em conjunto com inteligência artificial permitindo que os clientes possam programar o faturamento das próximas safras e as medidas tomadas para evitar prejuízos milionários.",
      conquistas: [
        "Criei um modelo de detecção de solo exposto, em que analisa a área onde há baixa concentração vegetal fornecendo insights para as diretorias das Usinas tomarem descisões em relação as áreas afetadas.",
        "Desenvolvi uma pipeline de processamento de imagens para análise de saúde das plantações com base em índices de vegetação, permitindo que os clientes possam analisar a qualidade antes e após os serviços de pulverização e adubação.",
        "Implementei uma interface para revisões e alterações em parâmetros do modelo de acordo com o tipo de vegetação e condições climáticas."
      ],
      stack: ["SQL", "Python", "scikit-learn", "OpenCV","PyTorch"]
    },
    {
      cargo: "Estagiário em Análise de Dados",
      empresa: "DS TECH",
      local: "Presencial",
      inicio: "2024-12",
      fim: "2025-05",
      resumo:
        "Estruturei projetos de coleta e análise de dados para suporte a tomada de descisões e definições de KPIs baseados em dados concretos.",
      conquistas: [
        "Integrei bases de dados de diferentes origens (SQL,Excel,Google Sheets) em um data warehouse.",
        "Produzi visualizações usadas em dois relatórios: Executivo e operacional aumentando a eficiência na comunicação de resultados.",
        "A partir das análises, identifiquei oportunidades de melhoria em processos internos, resultando em uma redução de 30% em despesas operacionais.",
      ],
      stack: ["SQL","Python", "Looker Studio", "pandas","Excel","Word","Google Sheets","Power Point"]
    }
  ],

  projetos: [
    {
      id: "epidemias-sird",
      titulo: "Modelagem híbrida de propagação de epidemias ao longo do tempo",
      categoria: "Machine learning",
      ano: 2025,
      periodo: "Jan. a Out. 2025",
      papel: "TCC de graduação",
      resumo:
        "Modelo de preivsão de séries temporais que identifica padrões de comportamento da doença com base em equações matemáticas consolidadas em relação a epidemias.",
      capa: "assets/img/projetos/epidemias-sird/capa.svg",
      github: null,
      demo: null,
      stack: ["Python", "pandas", "ARIMA", "LSTM", "Deep Learning","BeatifoulSoup"],
      contexto:
        "Durante a época de pandemia do COVID-19, observou-se um aumento significativo na incidência de doenças transmissíveis, o que levou à necessidade de desenvolver modelos de previsão mais robustos. Com base em dados históricos de casos, hospitalizações e medidas de contenção, o objetivo foi criar um modelo híbrido que combinasse abordagens estatísticas e de aprendizado profundo para prever a propagação da doença ao longo do tempo e validar se a abordagem é mais eficiente que os métodos tradicionais estimando com segurança e eficácia a incidência da doença.",
      abordagem: [
        { titulo: "Coleta e preparação dos dados", texto: "Realizei a coleta de dados de forma automatizada vindo de fontes oficiais (Secretaria de Saúde) e filtrei apenas os dados relevantes para a pesquisa." },
        { titulo: "Exploração e limpeza", texto: "Tratei valores ausentes em dias onde não havia dados disponíveis, padronizei as escalas e analisei a distribuição dos dados." },
        { titulo: "Engenharia de atributos", texto: "Criei e adaptei variáveis como taxa de infecção, taxa de recuperação e mortalidade para se adaptarem ao contexto dos modelos matemáticos usados na pesquisa." },
        { titulo: "Modelagem e divisão dos dados", texto: "Adaptei os modelos de previsão para utilizarem as Equações Diferenciais da pesquisa como uma etapa de pré-processamento, após isso dividi os dados em conjuntos de séries temporais em 3 períodos, separando-os também em dados in-sample e out-sample, para validar a eficácia em diferentes períodos de crescimento da doença." },
        { titulo: "Validação", texto: "Comparei as abordagens de previsão utilizando o modelo matemático como pré-processamento para validar se a implementação de fato oferece resultados satisfatórios para o escopo da pesquisa, usando métricas de erro e o desvio padrão em diferentes conjuntos de dados para avaliar a performance do modelo e levantar hipóteses." }
      ],
      resultados: [
        { valor: "16%", descricao: "de erro RMSE reduzido no conjunto de teste" },
        { valor: "Horizonte de 14 dias", descricao: "de previsão out-samples sem perca na qualidade de previsão." },
      ],
      aprendizados: [
        "Modelagem matemática avançada com Equações Diferenciais e modelos de Deep Learning.",
        "Utilizando os resultados para justificar decisões de implementação de abordagens não tradicionais."
      ],
      galeria: [
        { src: "assets/img/projetos/epidemias-sird/grafico-1.svg", legenda: "Importância média dos atributos (SHAP)" },
        { src: "assets/img/projetos/epidemias-sird/grafico-2.svg", legenda: "Curva ROC do modelo final" }
      ]
    },
    {
      id: "alagamentos-municipal",
      titulo: "Análise de incidência de pontos de alagamento em áreas urbanas",
      categoria: "NLP",
      ano: 2025,
      periodo: "Ago. a Dez. 2025",
      papel: "Projeto individual",
      resumo: "Classificador de probabilidade de alagamentos em determinados pontos da cidade com base em dados meteorológicos e portais de notícias relatando acontecimentos.",      capa: "assets/img/projetos/alagamentos-municipal/capa.svg",
      // github: "https://github.com/seu-usuario/alagamentos-municipal",
      // demo: "https://seu-usuario-alagamentos.streamlit.app",
      stack: ["LangChain", "ChromaDB", "LlamaIndex", "scikit-learn", "pandas", "XGBoost", "SHAP"],
      contexto:
        "Durante as temporadas de chuvas na região é comum a ocorrência de alagamentos devido a infraestrutura urbana, com isso foram levantados dados em conjunto com a defesa civil municipal para mapear os pontos de risco e entender os fatores que contribuem para esses eventos.",
      abordagem: [
    {
      titulo: "Coleta de dados via Web Scraping",
      texto: "Coletamos dados meteorológicos históricos a partir de apenas 3 estações de monitoramento no município e realizamos web scraping em portais de notícias locais para construir a base de ocorrências reais."
    },
    {
      titulo: "Filtragem e Extração com RAG",
      texto: "Utilizei uma arquitetura RAG (Retrieval-Augmented Generation) para processar o volume de notícias raspadas da web, filtrando falsos positivos e extraindo menções exatas aos locais críticos de alagamento."
    },
    {
      titulo: "Modelagem Preditiva",
      texto: "Cruzei os locais de alagamento extraídos pelo RAG com os dados de precipitação dos 3 pontos meteorológicos e treinei modelos baseados em árvores (Tree-based models) para tentar classificar o risco de novos eventos."
    },
    {
      titulo: "Análise de Explicabilidade",
      texto: "Apliquei métodos de Tree Explainer (SHAP) na tentativa de interpretar o peso de cada estação meteorológica nas decisões, buscando padrões lógicos entre o volume de chuva e as regiões afetadas."
    }
  ],
  resultados: [
    {
      valor: "Baixo",
      descricao: "Desempenho de métricas como o Precision e AUC-ROC, diretamente prejudicado pela baixa resolução espacial de ter apenas 3 estações para cobrir todo o município."
    },
    {
      valor: "Inconclusivo",
      descricao: "Grau de explicabilidade no Tree Explainer (SHAP), que gerou relações ruidosas e sem padrão claro devido à falta de microdados climáticos por bairro."
    }
  ],
  aprendizados: [
    "A baixa resolução espacial (apenas 3 sensores meteorológicos no município) criou um gargalo insuperável: tempestades hiperlocais não eram registradas pelas estações distantes.",
    "A falta de convergência entre os 3 pontos de chuva e os locais exatos de alagamento afetou a precisão do modelo e inviabilizou a explicabilidade (SHAP) das árvores de decisão.",
    "O pipeline de NLP/RAG provou ser altamente eficaz para estruturar notícias de web scraping, demonstrando que o problema do projeto foi a falta de variáveis topográficas, e não o tratamento do texto."
  ],
  aprendizados: [
    "O pipeline de NLP com RAG foi eficiente para limpar dados de web scraping, mas a modelagem final esbarrou na ausência de microdados de drenagem (infraestrutura).",
    "Cruzamentos de dados meteorológicos muito abrangentes com eventos hiperlocais não geram poder preditivo suficiente, resultando em precisão baixa.",
    "Projetos de dados também geram valor ao documentar falhas: entender que os dados atuais não permitem inferências confiáveis evitou a implantação de um sistema impreciso na Defesa Civil."
  ]
,
      galeria: [
        // { src: "assets/img/projetos/sentimento-ecommerce/grafico-1.svg", legenda: "Matriz de confusão normalizada" },
        // { src: "assets/img/projetos/sentimento-ecommerce/grafico-2.svg", legenda: "Distribuição das notas de avaliação" }
      ]
    },
    {
      id: "margem-corporativa",
      titulo: "Queda de margem em restaurantes corporativos",
      categoria: "Análise de causa raiz",
      ano: 2026,
      periodo: "out. 2026",
      papel: "Projeto individual",
      resumo:
        "Investigação de por que a margem de contribuição dos restaurantes corporativos de uma operadora de refeições coletivas caiu de 29,4% para 21,6% em um ano, mesmo com reajuste anual de preço.",
      capa: "assets/img/projetos/margem-corporativa/capa.svg",
      github: "https://github.com/pablo-francisco/NUTRIA-ANALYSIS",
      demo: "https://nutria-analysis-teste-pablo.streamlit.app",
      stack: ["Python", "SQL (SQLite)", "pandas", "matplotlib", "Streamlit"],
      contexto:
        "Empresas de refeições coletivas cobram por refeição servida, mas pagam pela comida produzida, então qualquer descompasso entre as duas vira prejuízo. Montei um banco relacional com 22 tabelas de uma empresa fictícia (produção diária, faturamento, compras, folha, CRM, catraca dos prédios dos clientes e clima), de jan/2024 a set/2026, com dados gerados por simulação.",
      abordagem: [
        { titulo: "Grupo de controle", texto: "Usei os outros segmentos (hospitalar, industrial e educacional) para testar e descartar a hipótese de inflação dos alimentos." },
        { titulo: "Custo por refeição produzida × servida", texto: "Separei o custo do que foi produzido do custo do que foi servido, o que mostrou que o problema era desperdício, não preço do quilo." },
        { titulo: "Perfil da semana e detecção da quebra", texto: "Medi o volume de cada dia da semana em relação a terça–quinta e escrevi uma regra em SQL para datar a mudança de padrão em cada unidade." },
        { titulo: "Confirmação em fontes externas", texto: "Cruzei a data detectada com anotações em texto livre do CRM e estimei vendas perdidas com a catraca dos prédios dos clientes." },
        { titulo: "Simulação da correção", texto: "Testei no histórico uma regra de planejamento por dia da semana, em SQL e em Python, e publiquei um simulador em Streamlit." }
      ],
      resultados: [
        { valor: "R$ 9,0 mi", descricao: "de economia anual em insumos com planejamento por dia da semana" },
        { valor: "15 de 15", descricao: "unidades em que a quebra detectada nos dados coincide com a semana anunciada no CRM" },
        { valor: "452 t", descricao: "de comida pronta descartada em 12 meses nas unidades com trabalho híbrido" }
      ],
      aprendizados: [
        "O erro médio de previsão escondia o problema: a sobra de segunda e sexta compensava a falta de terça a quinta.",
        "A confirmação da causa estava num dado que ninguém consultava: o texto livre do CRM.",
        "Um detalhe no cálculo da semana em SQL deslocava a detecção em 7 dias justamente onde ela importava."
      ],
      galeria: [
        { src: "assets/img/projetos/margem-corporativa/c1_margem_por_segmento.png", legenda: "Margem de contribuição por segmento: só o Corporativo caiu" },
        // { src: "assets/img/projetos/margem-corporativa/c1_perfil_semana_heatmap.png", legenda: "Segunda e sexta esvaziaram nas unidades com sobra alta" },
        // { src: "assets/img/projetos/margem-corporativa/c1_quebra_vs_crm.png", legenda: "Quebra detectada nos dados × aviso registrado no CRM" },
        { src: "assets/img/projetos/margem-corporativa/c1_dia_da_semana.png", legenda: "Sobra na segunda e na sexta, falta de terça a quinta" },
        { src: "assets/img/projetos/margem-corporativa/c1_simulacao_mensal.png", legenda: "Custo mensal do excedente com e sem o plano por dia da semana" }
      ]
    },
   
  ],

  formacao: [

    {
      curso: "Bacharelado em Engenharia Elétrica",
      instituicao: "Instituto Federal de Educação, Ciência e Tecnologia do Maranhão (IFMA)",
      inicio: "2019-06",
      fim: "2025-10",
      descricao: "Ênfase em inteligência artificial, análise de dados e simulações utilizando python.",
      destaques: [
        "Iniciação científica com bolsa do FAPEMA.",
      ]
    }
  ],

  certificacoes: [
    // { nome: "AWS Certified Machine Learning – Specialty", emissor: "Amazon Web Services", ano: 2024, link: null },
  ],

  publicacoes: [
    { titulo: "Introdução a Python para alunos de Engenharia Elétrica", tipo: "Palestra", veiculo: "Semana da Engenharia", ano: 2024, link: null },
  ]
};
