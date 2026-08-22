export type Lang = 'pt' | 'en'

export type Copy = {
  nav: { about: string; work: string; method: string; experience: string; contact: string; cv: string }
  hero: {
    line1: string
    line2: string
    description: string
    primary: string
    secondary: string
    location: string
    availability: string
  }
  intro: {
    title: string
    body: string
    pillars: Array<{ title: string; body: string; meta: string }>
  }
  method: {
    title: string
    subtitle: string
    steps: Array<{ n: string; title: string; body: string }>
  }
  work: {
    title: string
    subtitle: string
    stockhub: {
      label: string
      title: string
      body: string
      bullets: string[]
      stack: string
    }
    demandhub: {
      label: string
      title: string
      body: string
      bullets: string[]
      stack: string
    }
  }
  analytics: {
    title: string
    body: string
    items: Array<{ title: string; body: string; tags: string[] }>
    note: string
  }
  experience: {
    title: string
    items: Array<{ period: string; company: string; role: string; body: string }>
  }
  skills: {
    title: string
    groups: Array<{ title: string; items: string[] }>
  }
  contact: {
    title: string
    body: string
    email: string
    linkedin: string
    github: string
  }
  footer: string
}

export const copy: Record<Lang, Copy> = {
  pt: {
    nav: {
      about: 'Atuação',
      work: 'Projetos',
      method: 'Como construo',
      experience: 'Experiência',
      contact: 'Contato',
      cv: 'Baixar CV',
    },
    hero: {
      line1: 'Supply Chain, dados',
      line2: 'e produtos digitais.',
      description:
        'Transformo problemas de planejamento, demanda e estoque em indicadores, modelos analíticos e soluções digitais — conectando conhecimento de negócio, dados e tecnologia.',
      primary: 'Ver projetos',
      secondary: 'Conhecer minha atuação',
      location: 'Brasil',
      availability: 'Supply Chain × Analytics × Digital Solutions',
    },
    intro: {
      title: 'Eu atuo na interseção entre operação, decisão e tecnologia.',
      body:
        'Minha base é Supply Chain. A partir dela, uso analytics, automação e desenvolvimento de produtos para tornar processos de planejamento mais claros, rastreáveis e acionáveis.',
      pillars: [
        {
          title: 'Planejamento',
          body: 'S&OP, S&OE, DDMRP, demanda, estoques, ressuprimento e PCP com foco em decisões de curto, médio e longo prazo.',
          meta: 'BUSINESS',
        },
        {
          title: 'Analytics',
          body: 'Modelagem de dados, indicadores, dashboards e automações para transformar dados operacionais em contexto para decisão.',
          meta: 'DATA',
        },
        {
          title: 'Soluções digitais',
          body: 'Da definição do problema à especificação, construção, teste e evolução de produtos voltados a processos reais de Supply Chain.',
          meta: 'PRODUCT',
        },
      ],
    },
    method: {
      title: 'Como eu transformo uma necessidade operacional em produto.',
      subtitle:
        'Um fluxo orientado por problema, especificação e validação — com IA como acelerador do processo, não como substituto da decisão.',
      steps: [
        { n: '01', title: 'Entender o problema', body: 'Contexto, processo, usuário, restrições e decisão que precisa melhorar.' },
        { n: '02', title: 'Modelar as regras', body: 'Regras de negócio, dados, exceções, responsabilidades e critérios de sucesso.' },
        { n: '03', title: 'Especificar', body: 'Specs, tickets e critérios de aceite que conectam negócio e implementação.' },
        { n: '04', title: 'Construir', body: 'Desenvolvimento assistido por IA, versionamento, revisão e iteração em Git/GitHub.' },
        { n: '05', title: 'Validar', body: 'Quality gates, testes automatizados e validação do comportamento antes de evoluir o produto.' },
      ],
    },
    work: {
      title: 'Projetos selecionados',
      subtitle: 'Produtos privados desenvolvidos a partir de problemas reais de planejamento e gestão.',
      stockhub: {
        label: 'INVENTORY PLANNING · DDMRP',
        title: 'StockHub',
        body:
          'Plataforma de planejamento, gestão e análise de estoques que integra demanda, estoque, ordens, custos, BOM, SKUs e estruturas organizacionais para apoiar decisões de planejamento.',
        bullets: [
          'Políticas de estoque e ressuprimento baseadas em DDMRP',
          'Modelagem e governança de dados para planejamento',
          'Indicadores, cenários e fluxos de apoio à decisão',
          'Produto construído com abordagem orientada por especificações e validação automatizada',
        ],
        stack: 'Next.js · React · TypeScript · PostgreSQL/Supabase · Docker · GitHub Actions',
      },
      demandhub: {
        label: 'DEMAND PLANNING · S&OP',
        title: 'DemandHub',
        body:
          'Plataforma de planejamento colaborativo de demanda e S&OP, estruturada para organizar hierarquias, dados de planejamento, responsabilidades e jornadas de colaboração com governança.',
        bullets: [
          'Fluxos de planejamento colaborativo e estrutura comercial',
          'Importações, permissões, auditoria e internacionalização',
          'Processamento em background e integração entre aplicação e banco',
          'Testes unitários, banco real, E2E e quality gate self-hosted',
        ],
        stack: 'Next.js · TypeScript · Python · PostgreSQL/Supabase · Docker · Playwright',
      },
    },
    analytics: {
      title: 'Analytics para decisões de Supply Chain',
      body:
        'Ao longo da minha atuação, desenvolvi painéis, indicadores e ferramentas para diferentes níveis de decisão — do acompanhamento operacional às discussões executivas de S&OP.',
      items: [
        {
          title: 'Torre de Controle S&OP',
          body: 'Visão integrada de demanda, estoques, atendimento e exceções para apoiar ciclos táticos e executivos.',
          tags: ['Power BI', 'S&OP', 'Storytelling'],
        },
        {
          title: 'Nível de serviço e OTIF',
          body: 'Indicadores para acompanhar atendimento, disponibilidade, atraso e desempenho operacional.',
          tags: ['OTIF', 'SQL', 'Power BI'],
        },
        {
          title: 'Forecast & planejamento',
          body: 'MAPE, BIAS, cobertura, estoque de virada, Shelf Life, Back Order e cenários para apoiar decisões de planejamento.',
          tags: ['Forecast', 'DDMRP', 'DAX'],
        },
      ],
      note:
        'Os exemplos públicos usam descrições e visualizações demonstrativas. Dados corporativos e informações sensíveis não são publicados.',
    },
    experience: {
      title: 'Experiência',
      items: [
        {
          period: '2025 — atual',
          company: 'Projetos independentes',
          role: 'Desenvolvimento de soluções digitais para Supply Chain',
          body: 'Concepção de produtos, regras de negócio, modelagem de dados, especificações, desenvolvimento assistido por IA, testes e ciclos de evolução para problemas de estoque, demanda e S&OP.',
        },
        {
          period: '2022 — atual',
          company: 'Ourofino Saúde Animal',
          role: 'Data Analytics · S&OP · Supply Chain',
          body: 'Planejamento e gestão dos estoques dos centros de distribuição no Brasil, DDMRP, S&OP/S&OE, forecast, analytics, Power BI, automações e governança de dados.',
        },
        {
          period: '2021 — 2022',
          company: 'Grupo Serquímica',
          role: 'PCP · Análise de Dados',
          body: 'Planejamento da produção, integração entre áreas, ETL, dashboards e automações. Contribuição para aumento médio de 16% na produtividade da fábrica.',
        },
        {
          period: '2019 — 2021',
          company: 'Pesquisa e Qualidade',
          role: 'Engenharia Química',
          body: 'Iniciação científica e experiência em controle de qualidade, consolidando base analítica, método experimental e visão de processos industriais.',
        },
      ],
    },
    skills: {
      title: 'Ferramentas e competências',
      groups: [
        { title: 'Supply Chain', items: ['S&OP', 'S&OE', 'DDMRP', 'Demand Planning', 'Inventory Planning', 'PCP', 'Replenishment', 'Forecasting'] },
        { title: 'Analytics', items: ['Power BI', 'SQL', 'Python', 'DAX', 'Power Query', 'Excel', 'Tableau', 'Pandas', 'ETL'] },
        { title: 'Digital Products', items: ['Spec-Driven Development', 'AI-assisted Development', 'Git/GitHub', 'Quality Gates', 'Automated Testing', 'Requirements'] },
        { title: 'Stack', items: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase', 'Docker', 'Playwright', 'SAP', 'Dremio'] },
      ],
    },
    contact: {
      title: 'Vamos conversar sobre Supply Chain, dados ou produtos digitais?',
      body: 'Estou sempre aberto a trocar ideias sobre planejamento, analytics, transformação digital e construção de soluções que resolvam problemas reais de operação.',
      email: 'E-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: 'Projetado e desenvolvido para refletir a interseção entre Supply Chain, analytics e tecnologia.',
  },
  en: {
    nav: {
      about: 'Focus',
      work: 'Projects',
      method: 'How I build',
      experience: 'Experience',
      contact: 'Contact',
      cv: 'Download resume',
    },
    hero: {
      line1: 'Supply Chain, data',
      line2: 'and digital products.',
      description:
        'I turn planning, demand and inventory problems into indicators, analytical models and digital solutions — connecting business knowledge, data and technology.',
      primary: 'View projects',
      secondary: 'Explore my work',
      location: 'Brazil',
      availability: 'Supply Chain × Analytics × Digital Solutions',
    },
    intro: {
      title: 'I work at the intersection of operations, decision-making and technology.',
      body:
        'My foundation is Supply Chain. From there, I use analytics, automation and product development to make planning processes clearer, traceable and actionable.',
      pillars: [
        {
          title: 'Planning',
          body: 'S&OP, S&OE, DDMRP, demand, inventory, replenishment and production planning focused on short-, mid- and long-term decisions.',
          meta: 'BUSINESS',
        },
        {
          title: 'Analytics',
          body: 'Data modeling, KPIs, dashboards and automation that turn operational data into context for decision-making.',
          meta: 'DATA',
        },
        {
          title: 'Digital solutions',
          body: 'From problem framing to specification, build, testing and iteration of products designed around real Supply Chain workflows.',
          meta: 'PRODUCT',
        },
      ],
    },
    method: {
      title: 'How I turn an operational need into a product.',
      subtitle:
        'A problem-, specification- and validation-driven workflow — with AI as an accelerator, not a replacement for judgment.',
      steps: [
        { n: '01', title: 'Understand the problem', body: 'Context, process, users, constraints and the decision that needs to improve.' },
        { n: '02', title: 'Model the rules', body: 'Business rules, data, exceptions, responsibilities and success criteria.' },
        { n: '03', title: 'Specify', body: 'Specs, tickets and acceptance criteria connecting business intent to implementation.' },
        { n: '04', title: 'Build', body: 'AI-assisted development, version control, reviews and iteration through Git/GitHub.' },
        { n: '05', title: 'Validate', body: 'Quality gates, automated tests and behavior validation before the product evolves.' },
      ],
    },
    work: {
      title: 'Selected projects',
      subtitle: 'Private products built around real planning and management problems.',
      stockhub: {
        label: 'INVENTORY PLANNING · DDMRP',
        title: 'StockHub',
        body:
          'An inventory planning, management and analytics platform that combines demand, inventory, orders, costs, BOMs, SKUs and organizational structures to support planning decisions.',
        bullets: [
          'DDMRP-based inventory and replenishment policies',
          'Planning-oriented data modeling and governance',
          'KPIs, scenarios and decision-support workflows',
          'Product delivery built around specifications and automated validation',
        ],
        stack: 'Next.js · React · TypeScript · PostgreSQL/Supabase · Docker · GitHub Actions',
      },
      demandhub: {
        label: 'DEMAND PLANNING · S&OP',
        title: 'DemandHub',
        body:
          'A collaborative demand planning and S&OP platform designed to organize commercial hierarchies, planning data, ownership and governed collaboration workflows.',
        bullets: [
          'Collaborative planning flows and commercial hierarchy',
          'Imports, permissions, auditing and internationalization',
          'Background processing across application and database layers',
          'Unit, database, E2E testing and a self-hosted quality gate',
        ],
        stack: 'Next.js · TypeScript · Python · PostgreSQL/Supabase · Docker · Playwright',
      },
    },
    analytics: {
      title: 'Analytics for Supply Chain decisions',
      body:
        'Throughout my work, I have built dashboards, KPIs and tools for different decision levels — from operational follow-up to executive S&OP conversations.',
      items: [
        {
          title: 'S&OP Control Tower',
          body: 'Integrated view of demand, inventory, service and exceptions to support tactical and executive planning cycles.',
          tags: ['Power BI', 'S&OP', 'Storytelling'],
        },
        {
          title: 'Service level & OTIF',
          body: 'Indicators to track service, availability, delays and operational performance.',
          tags: ['OTIF', 'SQL', 'Power BI'],
        },
        {
          title: 'Forecast & planning',
          body: 'MAPE, BIAS, coverage, transition inventory, Shelf Life, Back Order and scenarios supporting planning decisions.',
          tags: ['Forecast', 'DDMRP', 'DAX'],
        },
      ],
      note:
        'Public examples use descriptive or demonstrative visuals only. Corporate data and sensitive information are never published.',
    },
    experience: {
      title: 'Experience',
      items: [
        {
          period: '2025 — present',
          company: 'Independent projects',
          role: 'Digital Supply Chain Solution Development',
          body: 'Product discovery, business rules, data modeling, specifications, AI-assisted development, testing and iteration for inventory, demand and S&OP problems.',
        },
        {
          period: '2022 — present',
          company: 'Ourofino Saúde Animal',
          role: 'Data Analytics · S&OP · Supply Chain',
          body: 'Inventory planning and management for distribution centers across Brazil, DDMRP, S&OP/S&OE, forecasting, analytics, Power BI, automation and data governance.',
        },
        {
          period: '2021 — 2022',
          company: 'Grupo Serquímica',
          role: 'Production Planning · Data Analytics',
          body: 'Production planning, cross-functional coordination, ETL, dashboards and automation. Contributed to an average 16% increase in factory productivity.',
        },
        {
          period: '2019 — 2021',
          company: 'Research & Quality',
          role: 'Chemical Engineering',
          body: 'Scientific research and quality-control experience that strengthened analytical thinking, experimental methods and industrial process understanding.',
        },
      ],
    },
    skills: {
      title: 'Tools & capabilities',
      groups: [
        { title: 'Supply Chain', items: ['S&OP', 'S&OE', 'DDMRP', 'Demand Planning', 'Inventory Planning', 'Production Planning', 'Replenishment', 'Forecasting'] },
        { title: 'Analytics', items: ['Power BI', 'SQL', 'Python', 'DAX', 'Power Query', 'Excel', 'Tableau', 'Pandas', 'ETL'] },
        { title: 'Digital Products', items: ['Spec-Driven Development', 'AI-assisted Development', 'Git/GitHub', 'Quality Gates', 'Automated Testing', 'Requirements'] },
        { title: 'Stack', items: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Supabase', 'Docker', 'Playwright', 'SAP', 'Dremio'] },
      ],
    },
    contact: {
      title: 'Want to talk about Supply Chain, data or digital products?',
      body: 'I am always open to exchanging ideas about planning, analytics, digital transformation and building solutions that solve real operational problems.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: 'Designed and developed to reflect the intersection of Supply Chain, analytics and technology.',
  },
}
