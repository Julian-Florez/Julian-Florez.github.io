export type Lang = 'en' | 'es';

export const copy = {
  en: {
    nav: {
      agentic: 'Agentic AI',
      ecosystem: 'Ecosystem',
      projects: 'Projects',
      arcade: 'Arcade',
      archive: 'All Projects',
      contact: 'Contact',
    },
    hero: {
      badge: 'Systems Engineer · Universidad EAN',
      titleStart: 'I build software that connects',
      titleHighlight: 'devices,',
      titleEnd: 'tools and people.',
      subtitle:
        'I build Android and Linux software, often with coding agents. Here is the work and the thinking behind it.',
      ctaPrimary: 'See selected projects',
      ctaSecondary: 'How I work',
      ctaGithub: 'View my GitHub',
    },
    playbook: {
      eyebrow: 'My process',
      title: 'How I work with coding agents',
      subtitle:
        'From the first question to a tested result: my decisions and the agents’ work.',
      humanRole: 'Human Architect Decisions',
      agentRole: 'Autonomous Agent Execution',
      verification: 'Verification Loop',
    },
    ecosystem: {
      eyebrow: 'Connected devices',
      title: 'Infrastructure and networks behind my projects',
      subtitle:
        'NixOS and Android connected for files, audio, remote screens and VR.',
      selectPrompt: 'Select any node in the ecosystem to inspect protocols, daemons, and architecture:',
      protocolLabel: 'Protocols & Transport',
      stackLabel: 'Core Stack',
      highlightsLabel: 'Key Capabilities',
    },
    cases: {
      eyebrow: 'Selected work',
      title: 'Projects and technical decisions',
      subtitle:
        'What each project set out to do, with the details one tap away.',
      privateBadge: 'Private project',
      publicBadge: 'Public repository',
      objectiveLabel: 'Goal',
      builtLabel: 'What I built',
      agenticImpact: 'Where agents helped',
      inspectBtn: 'Inspect Architecture',
      closeBtn: 'Close',
      architectureLabel: 'System Architecture',
      challengesLabel: 'Engineering Challenges Solved',
    },
    arcade: {
      eyebrow: 'Games',
      title: 'The Arcade',
      subtitle:
        'Choose Tetris, Snake or 2048 and play.',
      playNow: 'Play Live',
      openNewTab: 'Open Fullscreen',
      loading: 'Loading the game…',
      loadError: 'The game did not load here. Open it in a new tab.',
    },
    archive: {
      eyebrow: 'Project archive',
      title: 'More projects',
      subtitle:
        'More work across Android, Linux, AI and the web.',
      all: 'All',
      noResults: 'No projects in this category. Choose All to see the archive.',
    },
    contact: {
      title: 'Get in touch',
      subtitle:
        'If you want to talk about a project or an engineering role, send me an email.',
      emailBtn: 'Send Email',
      linkedinBtn: 'LinkedIn',
      githubBtn: 'GitHub',
      education: 'Systems Engineer · Universidad EAN',
    },
  },
  es: {
    nav: {
      agentic: 'IA Agéntica',
      ecosystem: 'Ecosistema',
      projects: 'Proyectos',
      arcade: 'El Arcade',
      archive: 'Archivo',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Ingeniero de Sistemas · Universidad EAN',
      titleStart: 'Creo software que conecta',
      titleHighlight: 'dispositivos,',
      titleEnd: 'herramientas y personas.',
      subtitle:
        'Desarrollo software para Android y Linux, a menudo con agentes de programación. Aquí muestro los proyectos y las decisiones detrás.',
      ctaPrimary: 'Ver proyectos destacados',
      ctaSecondary: 'Cómo trabajo',
      ctaGithub: 'Ver mi GitHub',
    },
    playbook: {
      eyebrow: 'Mi proceso',
      title: 'Cómo trabajo con agentes de programación',
      subtitle:
        'De la pregunta al resultado probado: mis decisiones y el trabajo de los agentes.',
      humanRole: 'Decisiones del Arquitecto',
      agentRole: 'Ejecución Autónoma de Agentes',
      verification: 'Ciclo de Verificación',
    },
    ecosystem: {
      eyebrow: 'Dispositivos conectados',
      title: 'Infraestructura y redes detrás de mis proyectos',
      subtitle:
        'NixOS y Android conectados para archivos, audio, pantallas remotas y VR.',
      selectPrompt: 'Selecciona cualquier nodo del ecosistema para inspeccionar protocolos, daemons y arquitectura:',
      protocolLabel: 'Protocolos y Transporte',
      stackLabel: 'Stack Principal',
      highlightsLabel: 'Capacidades Clave',
    },
    cases: {
      eyebrow: 'Trabajo destacado',
      title: 'Proyectos y decisiones técnicas',
      subtitle:
        'El propósito de cada proyecto, con los detalles a un toque.',
      privateBadge: 'Proyecto privado',
      publicBadge: 'Repositorio público',
      objectiveLabel: 'Objetivo',
      builtLabel: 'Qué construí',
      agenticImpact: 'Dónde ayudaron los agentes',
      inspectBtn: 'Ver Arquitectura',
      closeBtn: 'Cerrar',
      architectureLabel: 'Arquitectura del Sistema',
      challengesLabel: 'Retos Técnicos Resueltos',
    },
    arcade: {
      eyebrow: 'Juegos',
      title: 'El Arcade',
      subtitle:
        'Elige Tetris, Snake o 2048 y juega.',
      playNow: 'Jugar en Vivo',
      openNewTab: 'Abrir en Pantalla Completa',
      loading: 'Cargando el juego…',
      loadError: 'El juego no cargó aquí. Ábrelo en otra pestaña.',
    },
    archive: {
      eyebrow: 'Archivo de proyectos',
      title: 'Más proyectos',
      subtitle:
        'Más trabajos de Android, Linux, IA y web.',
      all: 'Todos',
      noResults: 'No hay proyectos en esta categoría. Elige Todos para ver el archivo.',
    },
    contact: {
      title: 'Hablemos',
      subtitle:
        'Si quieres hablar de un proyecto o una oportunidad de ingeniería, escríbeme por correo.',
      emailBtn: 'Enviar Correo',
      linkedinBtn: 'LinkedIn',
      githubBtn: 'GitHub',
      education: 'Ingeniero de Sistemas · Universidad EAN',
    },
  },
} as const;
