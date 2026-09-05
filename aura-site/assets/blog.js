/* ═══════════════════════════════════════════════════════════════════
   DADOS DO BLOG, AURA Growth
   ------------------------------------------------------------------
   >>> É AQUI QUE VOCÊ PUBLICA E EDITA OS ARTIGOS DO BLOG <<<

   Este arquivo é usado em DOIS lugares:
     1) no slider da página inicial (index) para montar os cards;
     2) na página do artigo (blog-post.html) para montar o conteúdo.

   Cada post é um objeto com:
     slug    -> identificador na URL (sem espaço/acento). Ex: "seo-local".
                É o que vai depois de ?post= no link (/blog-post?post=seo-local).
     titulo  -> título do artigo
     cat     -> categoria (ex: "SEO Local")
     data    -> data (ex: "Set 2026")
     icone   -> emoji da capa
     resumo  -> 1 ou 2 frases de chamada (aparece no card)
     leitura -> tempo de leitura (ex: "3 min")
     conteudo-> o texto do artigo, como uma LISTA de blocos. Cada bloco é
                um objeto com UMA destas chaves:
                  { p: "um parágrafo de texto" }
                  { h: "um subtítulo" }
                  { list: ["item 1", "item 2", "item 3"] }
                  { quote: "uma frase de destaque" }

   PARA ADICIONAR UM POST: copie um objeto inteiro, troque o slug (único!)
   e o conteúdo. PARA REMOVER: apague o objeto. O card e a página se
   atualizam sozinhos.
   ═══════════════════════════════════════════════════════════════════ */
window.BLOG_POSTS = [
  {
    slug: "google-maps-local",
    titulo: "Como aparecer no Google Maps da sua cidade",
    cat: "SEO Local",
    data: "Set 2026",
    icone: "📍",
    leitura: "4 min",
    resumo: "O passo a passo para o seu negócio ser encontrado por quem procura seu serviço na região.",
    conteudo: [
      {
        p: "Quando alguém pesquisa um serviço no Google (por exemplo, dentista, vidraçaria ou dedetização) o que aparece primeiro é o mapa com três empresas em destaque. Estar nesse bloco é o que separa quem recebe ligação de quem passa despercebido.",
      },
      { h: "1. Crie e verifique seu Perfil da Empresa no Google" },
      {
        p: "O antigo Google Meu Negócio é gratuito e é a base de tudo. Sem ele, você simplesmente não existe no Maps. Depois de criar, verifique a empresa (por carta, telefone ou vídeo) para ganhar credibilidade aos olhos do Google.",
      },
      { h: "2. Preencha o perfil por completo" },
      {
        p: "Perfil pela metade rankeia pela metade. O Google premia quem entrega informação completa e útil para quem pesquisa. Não deixe campo em branco:",
      },
      {
        list: [
          "Categoria principal e categorias secundárias corretas",
          "Endereço, telefone e horário sempre atualizados",
          "Descrição clara do que você faz e para quem",
          "Lista de serviços e produtos com preços quando fizer sentido",
          "Fotos reais e recentes do trabalho, da equipe e do local",
        ],
      },
      { h: "3. Junte avaliações (e responda todas)" },
      {
        p: "Avaliação é o combustível do ranqueamento local. Peça para todo cliente satisfeito avaliar e responda cada uma, positiva ou negativa, com educação. Isso mostra ao Google e a quem lê que a empresa é ativa e confiável.",
      },
      { h: "4. Poste com frequência" },
      {
        p: "O perfil tem uma aba de posts parecida com uma rede social. Publicar novidades, promoções e dicas mantém o perfil vivo e sinaliza atividade constante, que também conta pontos.",
      },
      {
        quote: "Quem atende em local físico e ignora o Perfil do Google está entregando cliente para o concorrente que não ignora.",
      },
      { h: "Resumo" },
      {
        p: "Aparecer no Maps não é sorte, é configuração e constância. Perfil completo, avaliações reais e postagens regulares colocam o seu negócio na frente de quem já está procurando, no momento exato da decisão. Se quiser, a gente cuida disso pra você.",
      },
    ],
  },
  {
    slug: "quanto-investir-trafego",
    titulo: "Quanto investir em tráfego pago para começar",
    cat: "Tráfego Pago",
    data: "Set 2026",
    icone: "🎯",
    leitura: "4 min",
    resumo: "Entenda como definir um orçamento inicial de Google e Meta Ads sem desperdiçar dinheiro.",
    conteudo: [
      {
        p: "A pergunta mais comum de quem vai anunciar pela primeira vez é: quanto preciso colocar? A resposta honesta é que não existe número mágico, mas existe um jeito certo de começar sem queimar dinheiro.",
      },
      { h: "Comece pequeno e com objetivo claro" },
      {
        p: "Você não precisa de um orçamento grande para validar se o anúncio funciona. Precisa de um valor que gere dados suficientes para tomar decisão. Para a maioria dos negócios locais, um investimento inicial modesto por dia já traz aprendizado real nas primeiras semanas.",
      },
      { h: "Separe verba de mídia de verba de gestão" },
      {
        p: "São duas coisas diferentes. A verba de mídia é o que vai para o Google ou a Meta. A gestão é o trabalho de configurar, otimizar e ler os números. Anúncio sem gestão costuma gastar rápido e converter pouco.",
      },
      { h: "O que define o valor ideal" },
      {
        list: [
          "Ticket médio: quanto vale um cliente novo para você",
          "Concorrência do seu setor e da sua cidade",
          "Objetivo: gerar contato no WhatsApp, venda ou agendamento",
          "Margem: quanto pode pagar por lead e ainda ter lucro",
        ],
      },
      { quote: "Não é sobre gastar muito. É sobre gastar com estratégia e medir cada real." },
      { h: "Como saber se está funcionando" },
      {
        p: "Acompanhe o custo por lead e o que acontece depois do contato. Anúncio que gera muita mensagem, mas nenhuma vira cliente, é sinal de público errado ou de funil quebrado, não de falta de verba.",
      },
      { h: "Resumo" },
      {
        p: "Comece com um valor confortável, foque em um objetivo e otimize com base nos números. Crescer o investimento vem depois, quando os resultados já provaram que cada real volta. Quer um plano de tráfego sob medida para o seu orçamento? Chama a gente.",
      },
    ],
  },
  {
    slug: "site-ou-instagram",
    titulo: "Site ou Instagram: por onde começar?",
    cat: "Estratégia",
    data: "Ago 2026",
    icone: "🤔",
    leitura: "3 min",
    resumo: "Para prestador de serviço e comércio local, qual canal traz cliente mais rápido.",
    conteudo: [
      {
        p: "Quem está começando no digital quase sempre trava nessa dúvida. A boa notícia: não é escolha de um contra o outro, é questão de ordem e de momento do negócio.",
      },
      { h: "O que cada um faz melhor" },
      {
        p: "O Instagram constrói relacionamento e mostra o seu dia a dia. O site fecha negócio e aparece no Google quando alguém procura seu serviço. Um atrai pela presença, o outro converte pela intenção.",
      },
      { h: "Se o seu cliente já procura seu serviço no Google" },
      {
        p: "Casos como refrigeração, vidraçaria, dentista ou dedetização: a pessoa tem um problema e pesquisa a solução. Aqui o site (e o Perfil no Google) vem primeiro, porque captura quem já está pronto para contratar.",
      },
      { h: "Se o seu produto é de desejo ou impulso" },
      {
        p: "Estética, moda, gastronomia e afins vivem de descoberta e vontade. Nesses casos o Instagram costuma trazer resultado mais rápido, porque desperta o interesse antes de a pessoa ir procurar.",
      },
      { quote: "O ideal é ter os dois. A pergunta certa não é qual, e sim qual primeiro." },
      { h: "Resumo" },
      {
        p: "Comece pelo canal onde o seu cliente já está no momento da decisão e depois complete com o outro. Se ficar na dúvida sobre o seu caso, um diagnóstico rápido resolve: a gente olha o seu negócio e diz por onde começa.",
      },
    ],
  },
  {
    slug: "erros-site-nao-vende",
    titulo: "5 erros que fazem seu site não vender",
    cat: "Sites",
    data: "Ago 2026",
    icone: "🚀",
    leitura: "3 min",
    resumo: "Do WhatsApp escondido ao site lento: o que corrigir para transformar visita em cliente.",
    conteudo: [
      {
        p: "Ter site não é o suficiente. Muita empresa tem uma página bonita que não gera nenhum contato. Quase sempre o motivo está em um destes cinco erros.",
      },
      { h: "1. WhatsApp escondido" },
      {
        p: "Se o cliente precisa procurar como falar com você, ele desiste. O botão de WhatsApp tem que estar visível, fixo e levar direto para a conversa, de preferência com uma mensagem já preenchida.",
      },
      { h: "2. Site lento" },
      {
        p: "Cada segundo a mais de carregamento derruba conversão e posição no Google. Imagem pesada e código mal feito espantam cliente antes mesmo de ele ver a oferta.",
      },
      { h: "3. Não funcionar bem no celular" },
      {
        p: "A maioria dos acessos vem do telefone. Se o site quebra, aperta ou obriga a dar zoom no mobile, você está perdendo a maior parte das visitas.",
      },
      { h: "4. Falar de você, não do cliente" },
      {
        p: "Página que só diz quem a empresa é não convence. O visitante quer saber como você resolve o problema dele. Lidere com a dor e a solução, depois se apresente.",
      },
      { h: "5. Nenhuma chamada para ação clara" },
      {
        p: "Se não fica óbvio o que fazer em seguida (chamar no WhatsApp, pedir orçamento, agendar), o visitante sai sem agir. Cada seção precisa de um próximo passo claro.",
      },
      { quote: "Um site que converte não é o mais bonito, é o mais fácil de agir." },
      { h: "Resumo" },
      {
        p: "Corrigidos esses cinco pontos, a mesma quantidade de visitas passa a gerar muito mais contato. Quer que a gente revise o seu site e aponte o que está travando as vendas? É só chamar.",
      },
    ],
  },
  {
    slug: "responder-rapido-whatsapp",
    titulo: "Por que responder rápido no WhatsApp vende mais",
    cat: "Conversão",
    data: "Jul 2026",
    icone: "💬",
    leitura: "3 min",
    resumo: "O tempo de resposta é decisivo. Veja como não perder lead por demora.",
    conteudo: [
      {
        p: "Você investe em site e anúncio, o cliente manda mensagem e... a resposta demora horas. Nesse intervalo, ele já falou com o concorrente. Velocidade de resposta é uma das coisas que mais influenciam se um contato vira venda.",
      },
      { h: "A janela de decisão é curta" },
      {
        p: "Quem manda mensagem está com o interesse quente naquele momento. Quanto mais tempo passa, mais o interesse esfria e maior a chance de ele resolver de outro jeito. Responder nos primeiros minutos aumenta muito a taxa de fechamento.",
      },
      { h: "Como responder rápido sem viver grudado no celular" },
      {
        list: [
          "Tenha respostas prontas para as perguntas mais comuns",
          "Use uma mensagem automática de boas-vindas confirmando que viu o contato",
          "Concentre os canais em um só número de atendimento",
          "Considere um agente de IA para atender e qualificar 24 horas por dia",
        ],
      },
      { quote: "O cliente não espera. Quem responde primeiro costuma fechar o negócio." },
      { h: "Resumo" },
      {
        p: "Não adianta gerar contato e demorar para responder. Estruture o atendimento para ser rápido e consistente, e a mesma quantidade de mensagens passa a virar mais cliente. Quer automatizar o primeiro atendimento? A gente monta isso pra você.",
      },
    ],
  },
];
