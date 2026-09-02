import { VideoCase, FeatureItem, SystemModule, BlogPost, FaqItem } from '../types';

export const COMPANY_INFO = {
  brandName: '4Sales',
  parentCompany: 'Fabritech',
  parentCompanyFullName: 'Fabritech Gestão em Tecnologia Ltda',
  tagline: 'Inteligência e automação para aumentar suas vendas.',
  heroEyebrow: 'CRM + SFA + Portal B2B em uma única plataforma',
  heroTitle: 'Transforme sua operação comercial em uma máquina de vendas mais inteligente.',
  heroSubtitle:
    'Centralize clientes, equipes, pedidos, metas e indicadores em uma plataforma integrada ao seu ERP. Mais controle para a gestão, mais produtividade para os vendedores e uma experiência B2B melhor para seus clientes.',
  confidencePills: [
    '100% na nuvem',
    'Acesso mobile e web',
    'Integração com ERP',
    'Dados em tempo real',
  ],
  address: 'Av. Ordem e Progresso, 157 – Várzea da Barra Funda, São Paulo – SP, 01141-030',
  addressMapsUrl: 'https://maps.google.com/?q=Av.+Ordem+e+Progresso,+157+-+V%C3%A1rzea+da+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01141-030',
  phone: '+55 (11) 94188-3913',
  phoneRaw: '+5511941883913',
  whatsappRaw: '+5511941883913',
  whatsappFormatted: '+55 (11) 94188-3913',
  whatsappUrl: 'https://wa.me/5511941883913?text=Ol%C3%A1%2C%20quero%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20do%204Sales.',
  email: 'marina.bonifacio@fabritech.com.br',
  social: {
    instagram: 'https://www.instagram.com/fabritech.tecnologia/',
    facebook: 'https://www.facebook.com/fabritech.tecnologia',
    linkedin: 'https://pt.linkedin.com/company/fabritech-gest%C3%A3o-em-tecnologia-ltda',
  },
  disclaimer:
    'Somos uma consultoria independente e não possuímos vínculo com a TOTVS® ou suas empresas afiliadas. As marcas mencionadas pertencem aos seus respectivos proprietários.',
};

export const VERIFIED_CLIENTS = [
  { name: 'Breton', segment: 'Mobiliário de Alto Padrão & Decoração', logoLabel: 'BRETON' },
  { name: 'Aços G3', segment: 'Indústria Siderúrgica & Distribuição', logoLabel: 'AÇOS G3' },
  { name: 'OPT Óculos', segment: 'Distribuição Óptica B2B', logoLabel: 'OPT ÓCULOS' },
  { name: 'Hidrodema', segment: 'Tubulações & Conexões Industriais', logoLabel: 'HIDRODEMA' },
  { name: 'Grupo Amade', segment: 'Limpeza & Descartáveis Corporativos', logoLabel: 'GRUPO AMADE' },
  { name: 'Ophthalmos', segment: 'Farmacêutica & Produtos Médicos', logoLabel: 'OPHTHALMOS' },
  { name: 'Ourolux', segment: 'Iluminação & Materiais Elétricos', logoLabel: 'OUROLUX' },
  { name: 'Polimold', segment: 'Moldes & Ferramentaria de Precisão', logoLabel: 'POLIMOLD' },
  { name: 'Pulmar', segment: 'Climatização & Ar Condicionado (37 anos)', logoLabel: 'PULMAR 37' },
  { name: 'Barentz', segment: 'Distribuição de Ingredientes & Químicos', logoLabel: 'BARENTZ' },
];

export const OFFICIAL_CERTIFICATIONS = [
  {
    id: 'pmp',
    title: 'PMP',
    subtitle: 'Project Management Professional',
    organization: 'PMI Institute',
    badgeText: 'Gestão de Projetos Certificada',
    desc: 'Metodologias globais de gerenciamento e governança de projetos corporativos.',
  },
  {
    id: 'microsoft',
    title: 'Microsoft',
    subtitle: 'Registered Partner',
    organization: 'Microsoft Corporation',
    badgeText: 'Parceiro Homologado',
    desc: 'Infraestrutura de alta disponibilidade, segurança de dados e interoperabilidade.',
  },
  {
    id: 'totvs',
    title: 'TOTVS®',
    subtitle: 'Certified Professional',
    organization: 'Especialistas Homologados',
    badgeText: 'Especialistas em ERP',
    desc: 'Sólido domínio de regras fiscais, faturamento e integração com sistemas TOTVS.',
  },
];

export const TECHNOLOGY_FRAMEWORK = {
  headline: 'Framework de Alta Disponibilidade, Segurança e Escalabilidade',
  description:
    'O 4Sales foi arquitetado para proporcionar ao seu negócio uma infraestrutura robusta, segura e escalável, utilizando as tecnologias que suportam os maiores ecossistemas globais: Node.js, AWS Cloud, APIs RESTful, barramentos de mensageria e firewalls corporativos.',
  pillars: [
    { name: 'AWS Cloud', desc: 'Infraestrutura de nuvem com redundância e disponibilidade contínua' },
    { name: 'Node.js & TypeScript', desc: 'Performance extrema e baixa latência para sincronização de pedidos' },
    { name: 'Segurança & WAF', desc: 'Proteção de ponta a ponta contra ameaças e isolamento de banco de dados' },
    { name: 'APIs & Conectores ERP', desc: 'Conexão nativa e padronizada com qualquer banco de dados de retaguarda' },
  ],
};

export const THREE_CORE_PILLARS = [
  {
    title: 'GESTÃO',
    tag: 'Controle Estratégico',
    color: 'from-blue-600 to-indigo-700',
    badgeColor: 'bg-blue-100 text-blue-800',
    items: [
      'Pipeline e funil de vendas',
      'CRM de relacionamento com clientes',
      'KPIs e Dashboards em tempo real',
      'Gestão de metas e positivação',
      'Controle de ruptura e estoques',
      'Acompanhamento de novos clientes',
      'Campanhas e promoções ativas',
      'Colaboração e visibilidade da equipe',
    ],
  },
  {
    title: 'INTELIGÊNCIA',
    tag: 'Automação & Processos',
    color: 'from-emerald-600 to-teal-700',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    items: [
      'Venda orientada a processo',
      'Redução de custo operacional',
      'Meta personalizada por cliente',
      'Mix sugerido e recompra ativa',
      'Venda cruzada (Cross-selling)',
      'Venda de kits e combos comerciais',
      'Histórico completo de vendas e faturamento',
      'Histórico financeiro e limites de crédito',
      'Consulta aos últimos pedidos/produtos',
    ],
  },
  {
    title: 'OPERAÇÃO / INCLUSÃO',
    tag: 'Agilidade de Ponta',
    color: 'from-cyan-600 to-blue-700',
    badgeColor: 'bg-cyan-100 text-cyan-800',
    items: [
      'Cadastro centralizado de Clientes',
      'Gestão de Prospects e Leads',
      'Emissão ágil de Orçamentos e Pedidos',
      'Aplicação instantânea de Promoções',
      'Roteiro de visitas e geolocalização',
      'Catálogo interativo de produtos com fotos',
      'Busca otimizada por múltiplos códigos',
      'Portal B2B de autosserviço 24/7',
    ],
  },
];

export const PROBLEMS_SOLVED = [
  {
    id: 'problem-1',
    title: 'Pedidos com erros ou informações incompletas',
    description:
      'Pedidos inseridos manualmente em papel ou planilhas geram divergências de preços, produtos incorretos e retrabalho contínuo no faturamento.',
    solution:
      'Validação automática de tabelas de preços, estoques e políticas comerciais no momento da digitação do pedido.',
  },
  {
    id: 'problem-2',
    title: 'Falta de visibilidade sobre vendedores e negociações',
    description:
      'Gestores sem acesso a pipelines atualizados dependem de reuniões demoradas e planilhas defasadas para entender o andamento das vendas.',
    solution:
      'Dashboards em tempo real com acompanhamento de metas, visitas realizadas, positivação de carteira e propostas abertas.',
  },
  {
    id: 'problem-3',
    title: 'Dados comerciais dispersos e desconectados',
    description:
      'Informações de clientes, históricos de compra e negociações divididos entre mensagens de WhatsApp, e-mails e anotações pessoais.',
    solution:
      'Histórico comercial unificado com linha do tempo de interações, últimos pedidos e situação financeira do cliente em um só lugar.',
  },
  {
    id: 'problem-4',
    title: 'Dificuldade para aplicar regras e políticas comerciais',
    description:
      'Descontos indevidos, prazos de pagamento não autorizados e estouro de limites de crédito aprovados sem controle rigoroso.',
    solution:
      'Motor de regras comerciais com alçadas de aprovação automática e travas de segurança integradas.',
  },
  {
    id: 'problem-5',
    title: 'Clientes B2B dependentes do vendedor para recompra',
    description:
      'Compradores de atacado e distribuição precisam esperar a visita ou ligação do representante para repor itens recorrentes.',
    solution:
      'Portal de autosserviço B2B personalizado onde o próprio cliente consulta catálogo, saldo de estoque e emite pedidos 24/7.',
  },
];

export const ECOSYSTEM_PILLARS = [
  {
    id: 'crm',
    title: 'CRM Comercial',
    tagline: 'Gestão de Relacionamento e Oportunidades',
    summary:
      'Organize relacionamentos, leads, prospects, clientes, atividades e oportunidades em uma visão centralizada e orientada ao processo.',
    features: [
      'Pipeline de vendas e funil de oportunidades',
      'Gestão de leads e qualificação de prospects',
      'Histórico completo de interações e contatos',
      'Agenda de atividades comerciais e follow-ups',
      'Segmentação e positivação de carteira',
      'Acompanhamento de negociações em tempo real',
    ],
    highlight: 'Visibilidade total de ponta a ponta do ciclo comercial',
  },
  {
    id: 'sfa',
    title: 'Força de Vendas (SFA)',
    tagline: 'Mobilidade e Agilidade Operacional',
    summary:
      'Dê mobilidade, informação e inteligência para vendedores internos, externos e representantes em campo.',
    features: [
      'Roteirização inteligente de visitas em campo',
      'Catálogo digital com fotos, especificações e filtros',
      'Emissão de orçamentos e pedidos online e offline',
      'Consulta de estoque, tabelas de preço e crédito',
      'Histórico comercial e financeiro do cliente',
      'Acompanhamento individual de metas e comissões',
    ],
    highlight: 'Aplicativo mobile e web com funcionamento rápido e intuitivo',
  },
  {
    id: 'b2b',
    title: 'Portal B2B',
    tagline: 'Canal Digital de Autosserviço',
    summary:
      'Permita que seus clientes consultem produtos, condições negociadas e realizem pedidos por um canal digital conectado à operação.',
    features: [
      'Catálogo de produtos com preços e condições personalizadas',
      'Emissão e acompanhamento de pedidos online 24/7',
      'Campanhas promocionais e mix sugerido para recompra',
      'Consulta de extrato de duplicatas e limites de crédito',
      'Histórico de pedidos anteriores para recompra em 1 clique',
      'Acesso seguro por CNPJ e perfis de comprador',
    ],
    highlight: 'Aumente a frequência de compras sem inflar a equipe de suporte',
  },
];

export const FEATURES_LIST: FeatureItem[] = [
  // Gestão
  {
    id: 'feat-1',
    title: 'Pipeline Comercial & Funil',
    category: 'gestao',
    description:
      'Acompanhe todas as etapas de negociação com visão clara das oportunidades em aberto, valores e previsão de fechamento.',
    iconName: 'GitCommit',
    tags: ['Funil', 'Previsibilidade', 'Etapas'],
  },
  {
    id: 'feat-2',
    title: 'KPIs e Dashboards Executivos',
    category: 'gestao',
    description:
      'Indicadores comerciais estratégicos em tempo real: faturamento, ticket médio, margem de contribuição e atingimento de metas.',
    iconName: 'BarChart3',
    tags: ['Indicadores', 'Gestão', 'Relatórios'],
  },
  {
    id: 'feat-3',
    title: 'Gestão de Metas e Positivação',
    category: 'gestao',
    description:
      'Defina e acompanhe metas por vendedor, equipe, linha de produtos, região e acompanhe a taxa de clientes positivados no mês.',
    iconName: 'Target',
    tags: ['Metas', 'Positivação', 'Desempenho'],
  },
  {
    id: 'feat-4',
    title: 'Controle de Ruptura de Estoque',
    category: 'gestao',
    description:
      'Identifique rapidamente produtos sem giro ou com risco de falta para direcionar ações comerciais e campanhas preventivas.',
    iconName: 'AlertTriangle',
    tags: ['Estoque', 'Giro', 'Prevenção'],
  },
  {
    id: 'feat-5',
    title: 'Campanhas & Promoções Comerciais',
    category: 'gestao',
    description:
      'Crie políticas de bonificação, descontos progressivos, combos e campanhas sazonais com aplicação automática nos pedidos.',
    iconName: 'Tag',
    tags: ['Campanhas', 'Bonificação', 'Descontos'],
  },
  {
    id: 'feat-6',
    title: 'Colaboração e Supervisão de Equipe',
    category: 'gestao',
    description:
      'Comunicação direta entre gestores e representantes, aprovação de alçadas em tempo real e distribuição balanceada de carteiras.',
    iconName: 'Users',
    tags: ['Supervisão', 'Aprovações', 'Equipe'],
  },

  // Inteligência Comercial
  {
    id: 'feat-7',
    title: 'Mix Sugerido & Venda Cruzada',
    category: 'inteligencia',
    description:
      'Sugestões inteligentes de itens complementares e produtos habitualmente comprados juntos para elevar o ticket médio por pedido.',
    iconName: 'Sparkles',
    tags: ['Cross-selling', 'Mix de Produtos', 'Ticket Médio'],
  },
  {
    id: 'feat-8',
    title: 'Meta por Cliente & Histórico de Compras',
    category: 'inteligencia',
    description:
      'Análise preditiva do ciclo de reposição de cada cliente, alertando o vendedor sobre clientes inativos ou em queda de volume.',
    iconName: 'LineChart',
    tags: ['Churn', 'Recompra', 'Frequência'],
  },
  {
    id: 'feat-9',
    title: 'Venda de Kits e Combos Estruturados',
    category: 'inteligencia',
    description:
      'Agrupamento inteligente de produtos com regras específicas de precificação, desconto em lote e controle de itens obrigatórios.',
    iconName: 'Layers',
    tags: ['Kits', 'Combos', 'Flexibilidade'],
  },
  {
    id: 'feat-10',
    title: 'Histórico Comercial & Financeiro Centralizado',
    category: 'inteligencia',
    description:
      'Visão consolidada de títulos a vencer, duplicatas pagas, limites de crédito disponíveis e histórico completo de pedidos passados.',
    iconName: 'CreditCard',
    tags: ['Crédito', 'Financeiro', 'Segurança'],
  },

  // Operação
  {
    id: 'feat-11',
    title: 'Catálogo Digital Interativo',
    category: 'operacao',
    description:
      'Apresentação profissional de produtos com imagens em alta definição, especificações técnicas, grades e disponibilidade de estoque.',
    iconName: 'BookOpen',
    tags: ['Catálogo', 'Visual', 'Mobilidade'],
  },
  {
    id: 'feat-12',
    title: 'Emissão Rápida de Orçamentos e Pedidos',
    category: 'operacao',
    description:
      'Digitação ágil de pedidos com cálculo instantâneo de impostos, frete, descontos e envio automático de cópia por e-mail ou WhatsApp.',
    iconName: 'ShoppingCart',
    tags: ['Pedidos', 'Orçamentos', 'Agilidade'],
  },
  {
    id: 'feat-13',
    title: 'Roteiros de Visitas e Geolocalização',
    category: 'operacao',
    description:
      'Planejamento de rotas de visitas para equipes de campo, registro de check-in/check-out e relatório de visitas realizadas.',
    iconName: 'MapPin',
    tags: ['Rotas', 'Field Sales', 'Produtividade'],
  },
  {
    id: 'feat-14',
    title: 'Busca Otimizada e Otimização de Busca',
    category: 'operacao',
    description:
      'Localização instantânea de produtos por código, referência, código de barras, fabricante, aplicação técnica ou descrição parcial.',
    iconName: 'Search',
    tags: ['Busca Rápida', 'Filtros', 'Códigos'],
  },
  {
    id: 'feat-15',
    title: 'Gestão Rígida de Políticas Comerciais',
    category: 'operacao',
    description:
      'Aplicação automática de tabelas por UF, canal, prazo de pagamento, quantidade mínima e regras tributárias específicas.',
    iconName: 'ShieldCheck',
    tags: ['Políticas', 'Tabelas', 'Conformidade'],
  },
  {
    id: 'feat-16',
    title: 'Integração Bidirecional com ERP',
    category: 'operacao',
    description:
      'Sincronização contínua de cadastros de clientes, produtos, preços, estoques e envio automático de pedidos aprovados para faturamento.',
    iconName: 'RefreshCw',
    tags: ['ERP Sync', 'Automação', 'Sem Retrabalho'],
  },
];

export const SYSTEM_MODULES: SystemModule[] = [
  {
    id: 'vendas',
    title: 'Vendas & Mobilidade',
    shortDesc: 'Acompanhamento completo do ciclo comercial em web e mobile.',
    fullDesc:
      'O 4Sales integra inteligência e automação ao processo comercial, permitindo acompanhar todo o ciclo de vendas com informações atualizadas. Com acesso mobile e web, a equipe trabalha de qualquer lugar, enquanto gestores mantêm visibilidade sobre clientes, atividades, pedidos e resultados.',
    benefits: [
      'Acesso pleno em smartphones, tablets e notebooks',
      'Operação contínua mesmo com instabilidades de conexão',
      'Padronização no preenchimento de pedidos comerciais',
      'Redução do tempo de digitação de propostas em até 70%',
    ],
    features: [
      'Emissão ágil de pedidos com validação de regras',
      'Consulta em tempo real de limites de crédito e duplicatas',
      'Roteirização de visitas e acompanhamento de equipe externa',
      'Envio imediato de espelho de pedido em PDF aos clientes',
    ],
    mockupType: 'vendas',
  },
  {
    id: 'analytics',
    title: 'Analytics & Indicadores',
    shortDesc: 'Dashboards gerenciais com métricas de desempenho em tempo real.',
    fullDesc:
      'Transforme dados dispersos em decisões estratégicas. O módulo de Analytics do 4Sales fornece gráficos de fácil interpretação sobre evolução do faturamento, positivação de clientes, metas por vendedor e acompanhamento de produtos líderes de venda.',
    benefits: [
      'Visão consolidada da saúde comercial da empresa',
      'Identificação proativa de gargalos no funil de vendas',
      'Acompanhamento de metas diárias, semanais e mensais',
      'Exportação de relatórios gerenciais estruturados',
    ],
    features: [
      'Curva ABC de clientes e produtos',
      'Monitor de positivação de carteiras',
      'Gráficos de evolução temporal de vendas',
      'Alertas de clientes inativos e em risco de churn',
    ],
    mockupType: 'analytics',
  },
  {
    id: 'busca',
    title: 'Busca Otimizada',
    shortDesc: 'Localização imediata de produtos em catálogos com milhares de SKUs.',
    fullDesc:
      'Projetado para distribuidores e indústrias com grandes volumes de produtos. O mecanismo de busca inteligente do 4Sales permite filtros avançados por código original, código do fabricante, grupo, aplicação técnica e termos sinônimos sem travamentos.',
    benefits: [
      'Agilidade extrema para vendedores encontrarem o item exato',
      'Eliminação de erros na seleção de códigos similares',
      'Filtros combinados de estoque, marca e faixa de preço',
      'Suporte a múltiplos critérios de classificação',
    ],
    features: [
      'Busca fonética e por similaridade textual',
      'Filtro dinâmico por saldo em estoque disponível',
      'Exibição de fotos, códigos alternativos e similares',
      'Ordenação por mais vendidos e maior margem',
    ],
    mockupType: 'busca',
  },
  {
    id: 'pedidos',
    title: 'Orçamentos e Pedidos',
    shortDesc: 'Fluxo padronizado desde a cotação inicial até a liberação para faturamento.',
    fullDesc:
      'Gerencie propostas com controle de validade, múltiplos status de negociação, conversão direta de orçamentos em pedidos firmes e fluxo estruturado de alçadas de desconto com aprovação via sistema.',
    benefits: [
      'Fim dos orçamentos esquecidos ou sem acompanhamento',
      'Controle rígido de margens mínimas e descontos autorizados',
      'Histórico de alterações e auditoria de cada proposta',
      'Integração direta com a fila de pedidos do ERP',
    ],
    features: [
      'Cálculo automático de impostos e encargos por estado',
      'Conversão em 1 clique de orçamento em pedido',
      'Notificação em tempo real de aprovação de alçada',
      'Rastreamento do status de faturamento e entrega',
    ],
    mockupType: 'pedidos',
  },
  {
    id: 'layout',
    title: 'Layout Personalizado',
    shortDesc: 'Apresentação com a identidade visual e organização da sua marca.',
    fullDesc:
      'A plataforma permite a customização de cores, logotipos e organização visual para que tanto a equipe comercial quanto os clientes no Portal B2B tenham uma experiência alinhada com a identidade institucional da empresa.',
    benefits: [
      'Fortalecimento da marca no canal de vendas B2B',
      'Interface limpa, moderna e focada em produtividade',
      'Adaptação a regras específicas de visualização por canal',
      'Ambiente corporativo seguro e confiável',
    ],
    features: [
      'Aplicação de logotipo e paleta de cores corporativa',
      'Banners promocionais personalizados no Portal B2B',
      'Configuração de campos visíveis por perfil de usuário',
      'Personalização de relatórios e espelhos de pedidos',
    ],
    mockupType: 'layout',
  },
  {
    id: 'multi',
    title: 'Multi-idioma & Moedas',
    shortDesc: 'Estrutura preparada para operações multilíngues e transações internacionais.',
    fullDesc:
      'Para empresas com atuação internacional ou clientes no exterior, o 4Sales oferece suporte a múltiplos idiomas e tabelas em diferentes moedas com conversão precisa.',
    benefits: [
      'Atendimento a clientes e representantes internacionais',
      'Flexibilidade para negociações em diferentes moedas',
      'Interface adaptável ao idioma do usuário',
      'Padronização de processos comerciais globais',
    ],
    features: [
      'Suporte a Português, Inglês e Espanhol',
      'Precificação em BRL, USD e EUR',
      'Configuração de impostos e tributação internacional',
      'Emissão de espelhos de pedidos no idioma correspondente',
    ],
    mockupType: 'multi',
  },
];

export const ERP_INTEGRATION_DATA = {
  title: 'Conecte o 4Sales ao ERP e mantenha toda a operação sincronizada.',
  subtitle:
    'O 4Sales pode ser integrado a diferentes sistemas ERP conforme o ambiente e as necessidades da empresa, garantindo fluidez e consistência de dados.',
  entities: [
    {
      name: 'Clientes & Cadastros',
      direction: 'Bidirecional',
      desc: 'Dados cadastrais, limites de crédito, contatos e condições de pagamento sincronizados.',
    },
    {
      name: 'Catálogo de Produtos',
      direction: 'ERP → 4Sales',
      desc: 'Códigos, descrições, grupos, unidades de medida e dados fiscais sempre atualizados.',
    },
    {
      name: 'Posição de Estoque',
      direction: 'ERP → 4Sales',
      desc: 'Saldos disponíveis por filial ou centro de distribuição para consulta em tempo real.',
    },
    {
      name: 'Tabelas de Preço & Políticas',
      direction: 'ERP → 4Sales',
      desc: 'Tabelas por estado, canal de venda, descontos máximos e regras de comissão.',
    },
    {
      name: 'Pedidos de Venda',
      direction: '4Sales → ERP',
      desc: 'Envio automático de pedidos aprovados diretamente para a esteira de faturamento.',
    },
    {
      name: 'Histórico Financeiro & NFe',
      direction: 'ERP → 4Sales',
      desc: 'Status de faturamento, número de NFe emitida e situação de títulos a receber.',
    },
  ],
};

export const VIDEO_CASES: VideoCase[] = [
  {
    id: 'case-breton',
    company: 'Breton',
    segment: 'Mobiliário de Alto Padrão & Decoração',
    title: 'Como a Breton estruturou sua força de vendas e atendimento consultivo',
    summary:
      'Referência nacional em móveis de alto padrão, a Breton utiliza a tecnologia para centralizar atendimentos, agilizar especificações de projetos e dar total suporte aos consultores comerciais.',
    youtubeId: 'hMISPSZht2U',
    highlights: [
      'Agilidade no atendimento a arquitetos e clientes finais',
      'Catálogo interativo com acabamentos e especificações',
      'Padronização rigorosa do fluxo de orçamentos e pedidos',
    ],
  },
  {
    id: 'case-acos-g3',
    company: 'Aços G3',
    segment: 'Indústria Siderúrgica & Distribuição de Aço',
    title: 'Transformação da rotina comercial e agilidade na distribuição siderúrgica',
    summary:
      'A Aços G3 aprimorou a velocidade de cotações e emissão de pedidos complexos de produtos siderúrgicos, conectando a equipe comercial ao estoque em tempo real.',
    youtubeId: 'o6Kc0SHfg9o',
    highlights: [
      'Cotações rápidas com regras de precificação por peso e medida',
      'Consulta instantânea da posição de estoque e corte',
      'Visibilidade gerencial sobre toda a equipe de vendas',
    ],
  },
  {
    id: 'case-opt-oculos',
    company: 'OPT Óculos',
    segment: 'Moda Óptica & Distribuição B2B',
    title: 'Agilidade na representação comercial e reposição para óticas em todo o país',
    summary:
      'Com representantes visitando óticas em diversas regiões, a OPT Óculos digitalizou o catálogo de armações e garantiu pedidos instantâneos sem erros de código ou grade.',
    youtubeId: 'xtYWL0Usr9M',
    highlights: [
      'Catálogo visual completo com alta definição das coleções',
      'Digitação ágil de pedidos durante as visitas presenciais',
      'Redução drástica no tempo entre o pedido e o despacho',
    ],
  },
  {
    id: 'case-hidrodema',
    company: 'Hidrodema',
    segment: 'Tubulações Industriais & Conexões Hidráulicas',
    title: 'Controle de milhares de itens técnicos e precisão em projetos industriais',
    summary:
      'Com um portfólio extenso de itens técnicos industriais, a Hidrodema acelerou a localização de peças e o envio de propostas comerciais detalhadas aos clientes.',
    youtubeId: 'a1FxOP3YFAw',
    highlights: [
      'Busca técnica rápida por normas e especificações industriais',
      'Conexão com regras comerciais e políticas de faturamento',
      'Mais velocidade no retorno de orçamentos a grandes indústrias',
    ],
  },
];

export const INSTITUTIONAL_METRICS = [
  {
    value: '+15',
    label: 'Anos de experiência da Fabritech',
    detail: 'Tradição sólida no desenvolvimento e implantação de soluções corporativas de gestão.',
  },
  {
    value: '100%',
    label: 'Nuvem e Alta Disponibilidade',
    detail: 'Infraestrutura moderna e segura com acesso contínuo por navegador e aplicativos móveis.',
  },
  {
    value: 'Brasil',
    label: 'Atendimento e Cobertura Nacional',
    detail: 'Soluções desenhadas para as particularidades tributárias e comerciais de todos os estados.',
  },
  {
    value: '3 em 1',
    label: 'CRM, Força de Vendas e Portal B2B',
    detail: 'Plataforma unificada eliminando a necessidade de múltiplos softwares desconectados.',
  },
];

export const IMPLEMENTATION_STEPS = [
  {
    number: '01',
    title: 'Diagnóstico Comercial',
    description:
      'Entendimento aprofundado dos canais de venda, processos existentes, regras e políticas comerciais, perfil da equipe e ecossistema tecnológico atual.',
  },
  {
    number: '02',
    title: 'Planejamento da Solução',
    description:
      'Definição estratégica dos módulos a serem habilitados, fluxos de trabalho, regras de alçada de desconto e prioridades de implantação.',
  },
  {
    number: '03',
    title: 'Configuração e Integração',
    description:
      'Parametrização da plataforma conforme as políticas da empresa e estabelecimento da comunicação com o sistema ERP.',
  },
  {
    number: '04',
    title: 'Treinamento e Entrada em Operação',
    description:
      'Capacitação prática das equipes comerciais, gestores e backoffice, com acompanhamento próximo na fase inicial de adoção.',
  },
  {
    number: '05',
    title: 'Suporte e Evolução Contínua',
    description:
      'Atendimento dedicado, monitoramento de performance e evolução contínua da ferramenta conforme novos objetivos do negócio.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'crm-e-forca-de-vendas-por-que-integrar',
    title: 'CRM e força de vendas: por que integrar as duas operações?',
    category: 'Estratégia Comercial',
    summary:
      'Descubra como a união entre a gestão do relacionamento com clientes e a rotina operacional da equipe de campo elimina gargalos e acelera o ciclo de vendas.',
    readingTimeMinutes: 5,
    publishedDate: 'Guia Estratégico',
    keyTakeaways: [
      'A desconexão entre CRM e força de vendas gera dados duplicados e perda de oportunidades.',
      'Vendedores em campo precisam de histórico comercial imediato para conduzir reuniões assertivas.',
      'A gestão ganha visibilidade real do pipeline quando o registro de visitas e pedidos ocorre no mesmo ambiente.',
    ],
    content: [
      'Em muitas empresas comerciais, é comum encontrar uma divisão prejudicial: a equipe de marketing e pré-vendas utiliza um sistema de CRM para gerenciar contatos iniciais, enquanto a equipe de campo ou representantes utilizam um aplicativo isolado apenas para emitir pedidos.',
      'Essa fragmentação cria pontos cegos na operação. O vendedor externo raramente consulta o histórico de contatos registrado no CRM, e a diretoria comercial não consegue correlacionar as etapas de prospecção com o faturamento efetivo no ERP.',
      'Quando CRM e Força de Vendas (SFA) operam na mesma plataforma, cada interação alimenta o mesmo cadastro único. O vendedor em campo visualiza as últimas conversas, motivos de recusa anteriores, notas de visitas e status financeiro antes de entrar na reunião.',
      'Além disso, a conversão de uma oportunidade qualificada em pedido formal torna-se imediata, sem necessidade de redigitar dados ou revalidar políticas comerciais que já haviam sido acordadas na fase de negociação.',
    ],
  },
  {
    slug: 'como-reduzir-erros-e-retrabalho-pedidos-b2b',
    title: 'Como reduzir erros e retrabalho no processo de pedidos B2B',
    category: 'Gestão de Processos',
    summary:
      'Análise dos principais gargalos que causam divergências em pedidos de indústrias e distribuidores e métodos práticos para automatizar a validação de regras.',
    readingTimeMinutes: 6,
    publishedDate: 'Artigo Técnico',
    keyTakeaways: [
      'Erros na digitação de pedidos geram custos ocultos com devoluções, reemissão de notas e atritos com clientes.',
      'A validação em tempo real de tabelas de preço e alíquotas fiscais previne propostas inexequíveis.',
      'O Portal B2B de autosserviço reduz a carga de digitação manual de itens recorrentes pela equipe interna.',
    ],
    content: [
      'No comércio entre empresas (B2B), a emissão de um pedido envolve múltiplos fatores complexos: tabelas de preços regionalizadas, alíquotas de ICMS e substituição tributária, prazos médios de pagamento, volumes mínimos por embalagem e limites de crédito aprovados.',
      'Quando esse processo depende de anotações manuais, mensagens de aplicativos ou planilhas locais, o risco de erro humano se multiplica. O faturamento recebe pedidos com preços defasados ou prazos não condizentes com a política da empresa, iniciando um ciclo de retrabalho que atrasa a entrega e desgasta o relacionamento.',
      'A solução consiste em implementar uma camada de inteligência e validação no momento exato em que o pedido está sendo montado, seja pelo vendedor ou pelo próprio cliente no Portal B2B.',
      'Com regras parametrizadas, o sistema não permite a inclusão de itens com valores abaixo da margem mínima sem a devida aprovação de alçada do gestor, garantindo conformidade comercial e velocidade na liberação para faturamento.',
    ],
  },
  {
    slug: 'o-que-avaliar-antes-de-integrar-plataforma-comercial-ao-erp',
    title: 'O que avaliar antes de integrar uma plataforma comercial ao ERP',
    category: 'Tecnologia & Integração',
    summary:
      'Um checklist objetivo para diretores e gerentes de TI e operações garantirem uma integração segura, consistente e eficiente entre vendas e retaguarda.',
    readingTimeMinutes: 7,
    publishedDate: 'Guia de TI',
    keyTakeaways: [
      'A definição clara do sistema de custódia (master data) para cada entidade é fundamental para evitar conflitos.',
      'A sincronização de estoques e preços deve ser estruturada para suportar oscilações de conexão sem travar a venda.',
      'Mecanismos de auditoria e logs claros facilitam a identificação rápida de eventuais divergências cadastrais.',
    ],
    content: [
      'A integração entre a plataforma de vendas e o sistema ERP da empresa é o coração de uma operação comercial moderna. No entanto, muitas implantações enfrentam dificuldades por falta de alinhamento prévio sobre as regras de negócio e a arquitetura de dados.',
      'Antes de iniciar a conexão técnica, é essencial mapear quais informações serão geridas pelo ERP e quais terão o 4Sales como fonte primária. Como padrão recomendável, o ERP costuma ser o guardião mestre de dados fiscais, saldos contábeis de estoque e limites de crédito aprovados, enquanto o 4Sales atua como gerador de pedidos, coletas de visitas e propostas comerciais.',
      'Outro ponto crítico é o tratamento da disponibilidade: a equipe externa não pode ficar impedida de emitir um orçamento caso ocorra uma oscilação temporária no link de comunicação do ERP. A plataforma comercial deve permitir a operação contínua com enfileiramento inteligente de sincronização.',
      'Por fim, deve-se priorizar soluções que trabalhem com APIs seguras, padrões modernos de autenticação e logs detalhados de transações para assegurar rastreabilidade total.',
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'O que é o 4Sales?',
    answer:
      'O 4Sales é uma plataforma completa desenvolvida pela Fabritech que reúne CRM, força de vendas (SFA), gestão comercial, automação de pedidos e portal de compras B2B em um único ambiente 100% na nuvem, integrado ao ERP da sua empresa.',
  },
  {
    id: 'faq-2',
    question: 'Para quais empresas a plataforma é indicada?',
    answer:
      'A plataforma foi desenvolvida especialmente para indústrias, distribuidores e atacadistas que contam com equipes de vendas internas ou externas, representantes comerciais e que necessitam de controle rigoroso sobre regras comerciais, catálogos extensos e sincronização com ERP.',
  },
  {
    id: 'faq-3',
    question: 'O 4Sales funciona em dispositivos móveis?',
    answer:
      'Sim. O 4Sales oferece uma experiência completa e responsiva tanto no navegador web (para computadores e notebooks) quanto em aplicativo para smartphones e tablets, permitindo que vendedores e representantes trabalhem com agilidade durante as visitas a campo.',
  },
  {
    id: 'faq-4',
    question: 'A plataforma funciona 100% na nuvem?',
    answer:
      'Sim. O 4Sales opera inteiramente em infraestrutura de nuvem segura e de alta disponibilidade, eliminando custos com servidores locais dedicados e garantindo atualizações contínuas e acesso de qualquer localidade.',
  },
  {
    id: 'faq-5',
    question: 'O 4Sales pode ser integrado ao meu ERP?',
    answer:
      'Sim. O 4Sales pode ser integrado a diferentes sistemas ERP conforme o ambiente tecnológico e as necessidades da sua empresa. A sincronização abrange cadastros de clientes, produtos, estoques, tabelas de preço, condições de pagamento e pedidos para faturamento.',
  },
  {
    id: 'faq-6',
    question: 'A solução possui CRM e gestão de pipeline?',
    answer:
      'Sim. O módulo de CRM permite gerenciar oportunidades em formato de funil (pipeline), organizar contatos e leads, agendar atividades e tarefas comerciais, e registrar todo o histórico de interações com cada cliente.',
  },
  {
    id: 'faq-7',
    question: 'É possível criar orçamentos e pedidos pelo sistema?',
    answer:
      'Sim. O sistema permite emitir orçamentos formais com cálculo automático de impostos e condições, convertê-los em pedidos com um clique e enviá-los diretamente para a esteira de aprovação e faturamento no ERP.',
  },
  {
    id: 'faq-8',
    question: 'O portal B2B permite que clientes realizem pedidos diretamente?',
    answer:
      'Sim. O Portal B2B funciona como um canal digital de autosserviço onde os próprios clientes cadastrados acessam o catálogo com suas condições comerciais negociadas, consultam estoque, visualizam histórico e emitem pedidos 24 horas por dia.',
  },
  {
    id: 'faq-9',
    question: 'As políticas comerciais da minha empresa podem ser personalizadas?',
    answer:
      'Sim. A plataforma conta com um motor flexível de regras que permite configurar tabelas de preço por estado ou canal, limites de desconto, exigência de aprovação de alçada, quantidades mínimas e regras tributárias específicas da sua operação.',
  },
  {
    id: 'faq-10',
    question: 'Como solicitar uma demonstração da plataforma?',
    answer:
      'Basta preencher o formulário disponível nesta página ou clicar no botão de contato direto pelo WhatsApp (+55 11 94188-3913). Nossos especialistas agendarão uma apresentação personalizada baseada no segmento e porte da sua empresa.',
  },
  {
    id: 'faq-11',
    question: 'Como funciona o processo de implantação?',
    answer:
      'A implantação é conduzida pela equipe da Fabritech em 5 etapas estruturadas: Diagnóstico Comercial, Planejamento da Solução, Configuração e Integração com ERP, Treinamento dos Usuários e Acompanhamento Contínuo pós-go-live.',
  },
  {
    id: 'faq-12',
    question: 'O 4Sales atende equipes de representantes externos e autônomos?',
    answer:
      'Sim. A plataforma possui controle flexível de perfis de acesso, permitindo que representantes visualizem apenas a sua carteira de clientes designada, suas metas e seus respectivos relatórios de comissão.',
  },
];
