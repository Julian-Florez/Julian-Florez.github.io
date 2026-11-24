export interface AgenticCase {
  id: string;
  tool: string;
  title: { en: string; es: string };
  tagline: { en: string; es: string };
  humanDecisions: { en: string[]; es: string[] };
  agentExecution: { en: string[]; es: string[] };
  verificationLoop: { en: string; es: string };
  pipelineSteps: { label: string | { en: string; es: string }; role: string | { en: string; es: string } }[];
  researchNotes?: {
    heading: { en: string; es: string };
    items: { label: { en: string; es: string }; text: { en: string; es: string } }[];
    limitation: { en: string; es: string };
  };
}

export const agenticCases: AgenticCase[] = [
  {
    id: 'mindfull-research',
    tool: 'Antigravity · investigación + Android',
    title: {
      en: 'Mindfull: from research to Android audio',
      es: 'Mindfull: de la investigación al audio en Android',
    },
    tagline: {
      en: 'I started with a scientific question, reviewed the evidence, tested a sound prototype and turned the selected ideas into a native meditation app.',
      es: 'Partí de una pregunta científica, revisé la evidencia, probé un prototipo sonoro y llevé las decisiones resultantes a una app nativa de meditación.',
    },
    humanDecisions: {
      en: [
        'Set the question and required traceable papers and an APA 7 article before building the app.',
        'Chose a single-screen experience with a breathing orb and a time ruler instead of sign-in or a menu of arbitrary sound presets.',
        'Reviewed the prototype on a phone and requested fixes to session restart, paused-time editing, phase transitions and tactile feedback.',
      ],
      es: [
        'Definí la pregunta y pedí artículos rastreables y un texto en formato APA 7 antes de construir la app.',
        'Elegí una sola pantalla con orbe de respiración y regla de tiempo, sin inicio de sesión ni un menú de sonidos arbitrarios.',
        'Revisé el prototipo en el teléfono y pedí ajustes al reinicio, la edición del tiempo en pausa, las transiciones y la respuesta táctil.',
      ],
    },
    agentExecution: {
      en: [
        'Antigravity organized 30 papers across six research topics, a bibliography, an APA 7 article and an interactive Web Audio prototype.',
        'The Android implementation joined Kotlin and Jetpack Compose to a C++17/AAudio synthesis engine through JNI.',
        'The app schedules three adaptive phases, generates pink noise and nature-like texture, and enables binaural tones only with headphones.',
      ],
      es: [
        'Antigravity organizó 30 trabajos en seis líneas de investigación, una bibliografía, un artículo APA 7 y un prototipo interactivo con Web Audio.',
        'La implementación Android unió Kotlin y Jetpack Compose con un motor de síntesis C++17/AAudio mediante JNI.',
        'La app programa tres fases adaptables, genera ruido rosa y textura natural, y activa tonos binaurales solo con auriculares.',
      ],
    },
    verificationLoop: {
      en: 'The conversation records an Android build and installation on a Pixel 9a, followed by fixes from actual use. The paper and bibliography document the sources; the app itself has not undergone a clinical trial.',
      es: 'La conversación registra compilación e instalación en un Pixel 9a, seguidas de correcciones de uso real. El artículo y la bibliografía documentan las fuentes; la app aún no cuenta con un ensayo clínico propio.',
    },
    pipelineSteps: [
      { label: { en: '30 papers and bibliography', es: '30 estudios y bibliografía' }, role: { en: 'Evidence', es: 'Evidencia' } },
      { label: { en: 'Synthesis and exclusions', es: 'Síntesis y descarte' }, role: { en: 'Judgment', es: 'Criterio' } },
      { label: 'Web Audio prototype', role: { en: 'Prototype', es: 'Prototipo' } },
      { label: { en: 'Kotlin + C++ app', es: 'App Kotlin + C++' }, role: { en: 'Product', es: 'Producto' } },
    ],
    researchNotes: {
      heading: {
        en: 'What the research changed in the product',
        es: 'Cómo la investigación cambió el producto',
      },
      items: [
        {
          label: { en: 'Kept', es: 'Se incorporó' },
          text: {
            en: 'A gentle 4:6 breathing cue, pink-noise bed and nature-like textures became parts of the generated sound.',
            es: 'Una guía respiratoria suave de 4:6, ruido rosa de fondo y texturas inspiradas en la naturaleza pasaron al sonido generado.',
          },
        },
        {
          label: { en: 'Made optional', es: 'Se condicionó' },
          text: {
            en: 'Because evidence on binaural beats is mixed, the app uses them as an adjunct and only when stereo headphones are connected.',
            es: 'Como la evidencia sobre pulsos binaurales es mixta, la app los usa como complemento y solo cuando hay auriculares estéreo.',
          },
        },
        {
          label: { en: 'Left out', es: 'Se descartó' },
          text: {
            en: 'Claims about a special effect of 432 or 528 Hz did not become product requirements.',
            es: 'Las promesas de un efecto especial de 432 o 528 Hz no se convirtieron en requisitos del producto.',
          },
        },
      ],
      limitation: {
        en: 'The literature informed the design; it does not establish that Mindfull itself improves health outcomes.',
        es: 'La literatura orientó el diseño; no demuestra que Mindfull, por sí misma, mejore resultados de salud.',
      },
    },
  },
  {
    id: 'vrcast-multiagent',
    tool: 'Antigravity + AGENTS.md',
    title: {
      en: 'VRCast 3DoF Spatial VR Desktop',
      es: 'VRCast 3DoF Escritorio Espacial VR',
    },
    tagline: {
      en: 'Split-role agent orchestration across NixOS Wayland host (Python/Hyprland) and Android OpenGL ES 3.0 client.',
      es: 'Orquestación de agentes por roles entre host NixOS Wayland (Python/Hyprland) y cliente Android OpenGL ES 3.0.',
    },
    humanDecisions: {
      en: [
        'Designed the UV-Atlas single-stream architecture (`HEADLESS-1` 5760×1080) to eliminate multi-stream encoding overhead.',
        'Defined UDP telemetry protocol (`53151`) and strict `eDP-1` display failsafe rules in `AGENTS.md`.',
        'Specified 3DoF sensor fusion (`TYPE_GAME_ROTATION_VECTOR`) and barrel distortion optics calibration.',
      ],
      es: [
        'Diseñé la arquitectura de stream único UV-Atlas (`HEADLESS-1` 5760×1080) para evitar codificar múltiples streams.',
        'Definí el protocolo de telemetría UDP (`53151`) y reglas estrictas de failsafe para `eDP-1` en `AGENTS.md`.',
        'Especifiqué la fusión de sensores 3DoF (`TYPE_GAME_ROTATION_VECTOR`) y calibración óptica de barril.',
      ],
    },
    agentExecution: {
      en: [
        'Host Agent implemented `vr-spatial-daemon.py` reading Hyprland `.socket2.sock` IPC events in real time.',
        'Android Agent built `GL_TEXTURE_EXTERNAL_OES` 3D floating quads + cylindrical IMAX curved mode.',
        'QA Subagents (`host-qa-agent` & `android-qa-agent`) synchronized docs (`PROGRESS.md`, `QA_REPORT.md`) via standardized Git protocol.',
      ],
      es: [
        'Agente Host implementó `vr-spatial-daemon.py` leyendo eventos IPC de Hyprland (`.socket2.sock`) en tiempo real.',
        'Agente Android construyó quads 3D flotantes con `GL_TEXTURE_EXTERNAL_OES` y modo curvo cilíndrico IMAX.',
        'Subagentes QA (`host-qa-agent` y `android-qa-agent`) sincronizaron documentación y pruebas con protocolo Git estandarizado.',
      ],
    },
    verificationLoop: {
      en: 'Automated Gradle APK builds, ADB deployment to Pixel 9a (120Hz), GLSL shader compilation checks, and timed `eDP-1` off/on failsafe tests.',
      es: 'Compilación automática APK con Gradle, despliegue ADB al Pixel 9a (120Hz), validación de shaders GLSL y pruebas temporizadas de failsafe `eDP-1`.',
    },
    pipelineSteps: [
      { label: 'AGENTS.md Spec', role: 'Architect' },
      { label: 'Hyprland IPC Daemon', role: 'Host Agent' },
      { label: 'OpenGL ES 3.0 SBS', role: 'Android Agent' },
      { label: 'Live Telemetry QA', role: 'QA Subagent' },
    ],
  },
  {
    id: 'win2apk-codex',
    tool: 'OpenAI Codex CLI',
    title: {
      en: 'Win2APK: Undergraduate Thesis',
      es: 'Win2APK: Tesis de Grado',
    },
    tagline: {
      en: 'Iterative work with Codex to analyze Windows applications and package them as Android APKs.',
      es: 'Trabajo iterativo con Codex para analizar aplicaciones Windows y empaquetarlas como APKs para Android.',
    },
    humanDecisions: {
      en: [
        'Scoped thesis research objectives, compatibility matrix, and Wine/Box86/Box64 runtime boundaries.',
        'Selected academic references and defined evaluation criteria for the thesis.',
        'Directed architectural pivots when handling Windows dependencies and Android packaging constraints.',
      ],
      es: [
        'Definí los objetivos de investigación, matriz de compatibilidad y límites del runtime Wine/Box86/Box64.',
        'Curé más de 50 referencias académicas y criterios de evaluación de la tesis.',
        'Dirigí los pivotes de arquitectura frente a dependencias Windows y empaquetado Android.',
      ],
    },
    agentExecution: {
      en: [
        'Automated PE/EXE dependency analysis, Wine prefix bundling, and Android APK manifest/asset generation.',
        'Refactored Python CLI pipelines and packaging scripts during development.',
      ],
      es: [
        'Automatización del análisis de dependencias PE/EXE, empaquetado de prefijos Wine y generación de manifiestos APK.',
        'Refactorización de pipelines CLI en Python y scripts de empaquetado durante el desarrollo.',
      ],
    },
    verificationLoop: {
      en: 'End-to-end APK packaging dry-runs, manifest validation, and automated test suites verifying reproducible builds.',
      es: 'Pruebas end-to-end de empaquetado APK, validación de manifiestos y suites de test automatizadas.',
    },
    pipelineSteps: [
      { label: 'PE/EXE Inspector', role: 'Thesis Core' },
      { label: 'Codex CLI', role: 'Iterative Build' },
      { label: 'Runtime Bundler', role: 'Python Pipeline' },
      { label: 'APK Output', role: 'Android Target' },
    ],
  },
  {
    id: 'agi-quickshell',
    tool: 'Antigravity + OpenCode',
    title: {
      en: 'Agi: Desktop Agent Interface',
      es: 'Agi: Interfaz de Agentes para Escritorio',
    },
    tagline: {
      en: 'Embedded agentic AI directly into NixOS Wayland desktop: Quickshell floating orbs + Nautilus right-click file actions.',
      es: 'IA agéntica integrada en el escritorio Wayland de NixOS: orbes flotantes en Quickshell + acciones en el explorador Nautilus.',
    },
    humanDecisions: {
      en: [
        'Designed the "Pure Orbs" UX paradigm: zero-chrome floating circles (`58px` single / `42px` multi-session) with M3 speech bubbles.',
        'Unified Nautilus context menu (`_agente.py`) and Quickshell launcher (`agy`) into a single multi-session manager.',
        'Enforced Matugen dynamic color synchronization from the active desktop wallpaper.',
      ],
      es: [
        'Diseñé el paradigma UX de "Orbes Puros": círculos flotantes sin ventanas (`58px` / `42px` multi-sesión) con globos M3.',
        'Unifiqué el menú contextual de Nautilus (`_agente.py`) y el launcher de Quickshell (`agy`) en un gestor multi-sesión.',
        'Integré sincronización dinámica de colores Matugen desde el fondo de pantalla activo.',
      ],
    },
    agentExecution: {
      en: [
        'Built `AntigravityManager.qml` streaming live `stream-json` events into activity icons, collapsible `Thought` panels, and file deliverables.',
        'Connected `AntigravityOrbsWindow.qml` for inline user questions, decision pills, and clipboard-ready generated images.',
      ],
      es: [
        'Construcción de `AntigravityManager.qml` procesando `stream-json` en vivo hacia iconos de actividad, `Thought` y entregables.',
        'Conexión de `AntigravityOrbsWindow.qml` para preguntas inline, botones de decisión e imágenes listas para portapapeles.',
      ],
    },
    verificationLoop: {
      en: '10 real-world desktop scenarios: parallel Nautilus + Launcher sessions, `qs -c ii ipc call shell reload` checks, and `py_compile` verification.',
      es: '10 escenarios reales de escritorio: sesiones paralelas Nautilus + Launcher, recarga IPC de Quickshell y validación `py_compile`.',
    },
    pipelineSteps: [
      { label: 'Nautilus / Launcher', role: 'Trigger' },
      { label: 'AntigravityManager', role: 'QML Stream' },
      { label: 'Pure Floating Orbs', role: 'Wayland UI' },
      { label: 'Deliverables Bubble', role: 'M3 Action' },
    ],
  },
];
