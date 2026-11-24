export interface EcosystemNode {
  id: string;
  name: string;
  badge: string;
  repo: string;
  summary: { en: string; es: string };
  protocols: string[];
  stack: string[];
  highlights: { en: string[]; es: string[] };
}

export interface CaseStudy {
  id: string;
  title: string;
  category: 'Agentic AI' | 'Systems & VR' | 'KMP & Android';
  visibility: 'public' | 'private';
  repoUrl?: string;
  tagline: { en: string; es: string };
  objective: { en: string; es: string };
  description: { en: string; es: string };
  agenticRole: { en: string; es: string };
  architecture: { en: string; es: string };
  challenges: { en: string[]; es: string[] };
  stack: string[];
}

export interface ArchiveItem {
  name: string;
  category: 'Agentic AI' | 'KMP & Android' | 'Linux & Systems' | 'Reverse Engineering' | 'Web & Full-Stack';
  visibility: 'public' | 'private' | 'local';
  lang: string;
  url?: string;
  desc: { en: string; es: string };
}

export const ecosystemNodes: EcosystemNode[] = [
  {
    id: 'remotecast',
    name: 'RemoteCast',
    badge: 'Remote Desktop',
    repo: 'moonlight-android',
    summary: {
      en: 'An Android remote desktop client based on Moonlight. It connects to a PC running Sunshine and adapts the connection and touch controls for everyday use.',
      es: 'Cliente Android de escritorio remoto basado en Moonlight. Se conecta a un PC con Sunshine y adapta la conexión y los controles táctiles para el uso diario.',
    },
    protocols: ['Sunshine / GameStream', 'LAN / Tailscale', 'Android touch input'],
    stack: ['Java', 'Android', 'Moonlight', 'Sunshine'],
    highlights: {
      en: [
        'Separate RemoteCast app identity and Material 3 interface.',
        'Automatic connection flow for reaching the desktop with fewer steps.',
        'Three-finger touch passthrough and a four-finger keyboard gesture.',
      ],
      es: [
        'Identidad de aplicación RemoteCast e interfaz Material 3 propias.',
        'Flujo de conexión automática para llegar al escritorio en menos pasos.',
        'Paso de gestos táctiles con tres dedos y apertura del teclado con cuatro.',
      ],
    },
  },
  {
    id: 'extendcast',
    name: 'ExtendCast',
    badge: 'Second Display',
    repo: 'moonlight-extend',
    summary: {
      en: 'An Android client for using the phone as an extended display for a Hyprland desktop. It receives a virtual monitor stream and sends touch interaction back to the host.',
      es: 'Cliente Android para usar el teléfono como pantalla extendida de un escritorio Hyprland. Recibe la imagen de un monitor virtual y devuelve la interacción táctil al equipo.',
    },
    protocols: ['Sunshine / GameStream', 'Hyprland HEADLESS-1', 'Touch passthrough'],
    stack: ['Java', 'Android', 'Hyprland', 'Sunshine'],
    highlights: {
      en: [
        'Streams a virtual display instead of mirroring the laptop panel.',
        'Passes three-finger touch input to the host and opens the keyboard with four fingers.',
        'Uses a distinct Android app identity so it can coexist with RemoteCast and VRCast.',
      ],
      es: [
        'Transmite una pantalla virtual en lugar de duplicar el panel del portátil.',
        'Envía la interacción de tres dedos al equipo y abre el teclado con cuatro.',
        'Tiene identidad Android independiente para convivir con RemoteCast y VRCast.',
      ],
    },
  },
  {
    id: 'vrcast',
    name: 'VRCast',
    badge: 'Spatial VR Desktop',
    repo: 'vr-desktop',
    summary: {
      en: 'A 3DoF spatial desktop for a Pixel 9a in a VR headset. It places windows from a Hyprland virtual display in 3D space and follows head orientation.',
      es: 'Escritorio espacial 3DoF para un Pixel 9a dentro de un visor VR. Sitúa ventanas de una pantalla virtual de Hyprland en un espacio 3D y sigue la orientación de la cabeza.',
    },
    protocols: ['Sunshine GameStream', 'UDP 53151 Spatial Telemetry', 'Hyprland IPC (.socket2.sock)', 'USB / Tailscale'],
    stack: ['C / C++', 'OpenGL ES 3.0', 'GLSL Shaders', 'Python', 'Hyprland', 'Android'],
    highlights: {
      en: [
        'Single hardware-decoded video stream (`GL_TEXTURE_EXTERNAL_OES`) sliced into independent 3D floating windows.',
        'Live toggle between 360° floating quads and curved IMAX cylindrical canvas (`vr-ctl mode-toggle`).',
        'Turns off the laptop panel during VR use and restores its brightness when the session ends.',
      ],
      es: [
        'Stream único decodificado por hardware (`GL_TEXTURE_EXTERNAL_OES`) recortado en ventanas 3D flotantes independientes.',
        'Cambio en vivo entre quads 360° flotantes y lienzo curvo cilíndrico IMAX (`vr-ctl mode-toggle`).',
        'Apaga el panel del portátil durante la sesión VR y restaura su brillo al terminar.',
      ],
    },
  },
  {
    id: 'sounddrift',
    name: 'SoundDrift & PC-Audio-Stream',
    badge: 'Bidirectional Audio',
    repo: 'SoundDrift / SoundDriftPlayer',
    summary: {
      en: 'Real-time, low-latency bidirectional audio bridge between Android and Linux/Windows desktops without physical cables.',
      es: 'Puente de audio bidireccional en tiempo real y baja latencia entre Android y escritorios Linux/Windows sin cables.',
    },
    protocols: ['PCM / Opus Low-Latency Stream', 'WebSocket / TCP Audio', 'PipeWire / PulseAudio'],
    stack: ['Kotlin', 'Rust', 'JavaScript', 'Android AudioRecord', 'PipeWire'],
    highlights: {
      en: [
        'Routes Android device audio directly to desktop speakers (`SoundDrift` + `SoundDriftPlayer`).',
        'Streams PC audio to Android headphones with Rust-backed low-latency buffering (`PC-Audio-Stream-to-Phone`).',
      ],
      es: [
        'Enruta el audio de Android directamente a los altavoces del PC (`SoundDrift` + `SoundDriftPlayer`).',
        'Transmite audio del PC hacia auriculares en Android con buffering de baja latencia en Rust.',
      ],
    },
  },
  {
    id: 'share',
    name: 'Share (Compartir)',
    badge: 'P2P File Transfer',
    repo: 'Share / compartir',
    summary: {
      en: 'Native-feeling file & clipboard transfer between NixOS Nautilus and Android Share Sheet, powered by a Rust Tokio daemon.',
      es: 'Transferencia de archivos con integración nativa entre Nautilus en NixOS y el Share Sheet de Android, impulsada por un daemon en Rust.',
    },
    protocols: ['mDNS / LAN Discovery', 'Tailscale Mesh Fallback', 'Tokio Async TCP'],
    stack: ['Rust', 'Tokio', 'Kotlin', 'Android SAF', 'GTK / Nautilus'],
    highlights: {
      en: [
        'Workspace split into `compartir-common`, `compartir-daemon`, and `compartir-ui` in Rust.',
        'Direct Android Share Sheet integration and Storage Access Framework (SAF) file picker.',
        'Nautilus right-click picker on NixOS for instant push to mobile.',
      ],
      es: [
        'Workspace Rust modular: `compartir-common`, `compartir-daemon` y `compartir-ui`.',
        'Integración directa con Android Share Sheet y Storage Access Framework (SAF).',
        'Selector nativo desde clic derecho en Nautilus sobre NixOS para envío instantáneo.',
      ],
    },
  },
  {
    id: 'agi',
    name: 'Agi (File Explorer & Launcher AI)',
    badge: 'OS-Wide Agentic Assistant',
    repo: 'Agi',
    summary: {
      en: 'Unified Antigravity desktop harness embedding multi-session AI orbs into Quickshell search bar and Nautilus file explorer.',
      es: 'Harness unificado de escritorio que incrusta IA multi-sesión con orbes flotantes en la barra de búsqueda Quickshell y el explorador Nautilus.',
    },
    protocols: ['Quickshell IPC', 'stream-json Live Events', 'GTK4 Nautilus Extension'],
    stack: ['QML (Quickshell)', 'Python (GTK4)', 'systemd', 'Matugen M3'],
    highlights: {
      en: [
        'Pure floating orbs (`58px` / `42px` stacked) without heavy window chrome.',
        'Interactive M3 speech bubbles for inline questions, option pills, and generated images with one-click copy.',
        'Right-click any file/folder in Nautilus (`_agente.py`) to run parallel AI tasks with real `cwd`.',
      ],
      es: [
        'Orbes puros flotantes (`58px` / `42px` apilados) sin bordes de ventana innecesarios.',
        'Globos de diálogo M3 para preguntas inline, botones de decisión e imágenes con copia en un clic.',
        'Clic derecho sobre cualquier archivo/carpeta en Nautilus (`_agente.py`) para lanzar tareas paralelas con `cwd` real.',
      ],
    },
  },
  {
    id: 'tailscale-nixos',
    name: 'NixOS + Tailscale Mesh & Linux Admin',
    badge: 'Network & OS Foundation',
    repo: 'nixos-config / illogical-flake',
    summary: {
      en: 'Declarative NixOS 26.11 flake infrastructure with Tailscale zero-trust mesh networking, hybrid GPU PRIME management, and systemd user daemons.',
      es: 'Infraestructura declarativa en NixOS 26.11 con Flakes, red mesh zero-trust Tailscale, gestión GPU híbrida PRIME y servicios systemd.',
    },
    protocols: ['Tailscale WireGuard (tailscale0)', 'NetworkManager', 'CUPS', 'rclone User Mounts'],
    stack: ['NixOS Flakes', 'Tailscale', 'Hyprland', 'systemd', 'Bash'],
    highlights: {
      en: [
        'Encrypted connectivity between a NixOS laptop and Pixel 9a outside the home LAN via `tailscale0`.',
        'Declarative system & Quickshell configuration (`illogical-flake`, `nixos-config`) with zero imperative drift.',
        'Managed hybrid Intel Alder Lake-P + NVIDIA RTX 2050 PRIME offloading.',
      ],
      es: [
        'Conectividad cifrada continua entre el portátil NixOS y Pixel 9a fuera de la red local vía `tailscale0`.',
        'Configuración declarativa del sistema y Quickshell (`illogical-flake`, `nixos-config`) reproducible.',
        'Gestión de gráficos híbridos Intel Alder Lake-P + NVIDIA RTX 2050 con PRIME.',
      ],
    },
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'careeros',
    title: 'CareerOS',
    category: 'Agentic AI',
    visibility: 'private',
    tagline: {
      en: 'From job openings to a tailored resume',
      es: 'De una oferta de empleo a un CV adaptado',
    },
    objective: {
      en: 'Bring job opportunities, fit assessment and resume preparation into one workflow so a candidate can decide where to apply and present relevant experience.',
      es: 'Reunir las ofertas, la evaluación de afinidad y la preparación del CV en un solo flujo para decidir a qué postularse y presentar la experiencia pertinente.',
    },
    description: {
      en: 'I structured a Python backend with SQLite for the candidate and job data, and used agents to assess the inputs. Structured outputs feed Typst templates that generate a PDF resume. The project also includes an Android client and a Nix development environment.',
      es: 'Organicé un backend en Python con SQLite para los datos de candidaturas y ofertas, y usé agentes para evaluar la información. Sus salidas estructuradas alimentan plantillas Typst que generan el CV en PDF. El proyecto también incluye un cliente Android y un entorno de desarrollo con Nix.',
    },
    agenticRole: {
      en: 'I defined how agents evaluate inputs, added pytest checks, and iterated on the Typst templates.',
      es: 'Definí cómo evalúan los agentes, añadí pruebas con pytest y ajusté las plantillas de Typst.',
    },
    architecture: {
      en: 'Nix Flake (`python312`, `uv`, `typst`, `jdk17`, `gradle`, `sqlite`) → Python Multi-Agent Backend (`careeros.db`) → Typst CV Compiler + Android Client.',
      es: 'Nix Flake (`python312`, `uv`, `typst`, `jdk17`, `gradle`, `sqlite`) → Backend Multi-Agente Python (`careeros.db`) → Compilador CV Typst + Cliente Android.',
    },
    challenges: {
      en: [
        'Deterministic PDF resume compilation using Typst from structured JSON agent outputs.',
        'Unified Nix devShell reproducibility across Python backend and Android Gradle builds.',
      ],
      es: [
        'Compilación determinista de CVs en PDF usando Typst a partir de salidas JSON estructuradas.',
        'Reproducibilidad unificada con Nix devShell entre el backend Python y compilaciones Android Gradle.',
      ],
    },
    stack: ['Python 3.12', 'uv', 'Typst', 'SQLite', 'Kotlin/Android', 'Nix Flakes'],
  },
  {
    id: 'win2apk',
    title: 'Win2APK',
    category: 'Systems & VR',
    visibility: 'public',
    repoUrl: 'https://github.com/Julian-Florez/Win2APK',
    tagline: {
      en: 'A packaging tool for Windows apps on Android',
      es: 'Una herramienta para empaquetar apps de Windows en Android',
    },
    objective: {
      en: 'Move compatibility setup from the Android user to the developer: prepare a Windows app once and distribute an installable Android package.',
      es: 'Trasladar la configuración de compatibilidad del usuario de Android al desarrollador: preparar una app de Windows una vez y distribuir un paquete instalable.',
    },
    description: {
      en: 'For my Systems Engineering thesis, I am building a Rust CLI that validates a JSON configuration, checks the toolchain and packages an already prepared Windows app with a compatibility environment. The prototype produces Android distribution artifacts and is being evaluated with real test cases; it does not turn the program into a native Android app.',
      es: 'Para mi tesis de Ingeniería de Sistemas desarrollo un CLI en Rust que valida una configuración JSON, comprueba las herramientas y empaqueta una aplicación Windows ya preparada junto con su entorno de compatibilidad. El prototipo genera artefactos de distribución Android y se evalúa con casos reales; no convierte el programa en una app nativa.',
    },
    agenticRole: {
      en: 'I used Codex to iterate on the CLI, inspect packaging requirements and document the limits of the compatibility approach.',
      es: 'Usé Codex para iterar sobre el CLI, examinar los requisitos de empaquetado y documentar los límites de la compatibilidad.',
    },
    architecture: {
      en: 'Rust CLI + JSON configuration → toolchain and engine validation → packaging with Winlator compatibility components → AAB / APK set.',
      es: 'CLI en Rust + configuración JSON → validación de herramientas y motor → empaquetado con componentes de compatibilidad de Winlator → AAB / APK set.',
    },
    challenges: {
      en: [
        'Preparing Windows executables, libraries and resources so the compatibility environment can find them on Android.',
        'Making setup, validation and build steps repeatable while recording compatibility limits for the thesis.',
      ],
      es: [
        'Preparar ejecutables, bibliotecas y recursos de Windows para que el entorno de compatibilidad los encuentre en Android.',
        'Hacer repetibles la instalación de herramientas, la validación y la compilación, y documentar los límites para la tesis.',
      ],
    },
    stack: ['Rust', 'Android SDK', 'Winlator', 'Wine / Box64', 'Codex CLI'],
  },
  {
    id: 'agi-case',
    title: 'Agi: Desktop Agent Interface',
    category: 'Agentic AI',
    visibility: 'private',
    tagline: {
      en: 'An agent where the desktop work happens',
      es: 'Un agente en el lugar donde ocurre el trabajo',
    },
    objective: {
      en: 'Let me ask an agent to work on a file or folder from the desktop and follow several tasks without moving everything into a separate chat window.',
      es: 'Poder pedirle a un agente que trabaje sobre un archivo o carpeta desde el escritorio y seguir varias tareas sin llevarlo todo a otra ventana de chat.',
    },
    description: {
      en: 'Agi connects a Nautilus context action and the Quickshell launcher to a shared session manager. Floating orbs show which tasks are running, finished or need an answer; opening one reveals agent activity and the resulting files. Each session keeps its own working directory.',
      es: 'Agi conecta una acción contextual de Nautilus y el lanzador de Quickshell con un gestor de sesiones. Los orbes flotantes muestran qué tareas siguen activas, terminaron o necesitan respuesta; al abrirlos aparecen la actividad y los archivos entregados. Cada sesión conserva su propio directorio de trabajo.',
    },
    agenticRole: {
      en: 'The interface reads JSON events from the `agy` CLI and shows activity, agent notes, and resulting files.',
      es: 'La interfaz lee eventos JSON de la CLI `agy` y muestra actividad, notas del agente y archivos resultantes.',
    },
    architecture: {
      en: 'Nautilus (`_agente.py`) + Quickshell Launcher → `AntigravityManager.qml` (IPC) → `AntigravityOrbsWindow.qml` + Matugen Dynamic Colors.',
      es: 'Nautilus (`_agente.py`) + Quickshell Launcher → `AntigravityManager.qml` (IPC) → `AntigravityOrbsWindow.qml` + Colores Dinámicos Matugen.',
    },
    challenges: {
      en: [
        'Zero-chrome floating orbs (`58px` / `42px`) with interactive M3 speech bubbles for live user questions and file outputs.',
        'Parallel working directories (`os.path.commonpath`) isolated per agent session.',
      ],
      es: [
        'Orbes flotantes sin bordes (`58px` / `42px`) con globos de diálogo M3 para preguntas en vivo y entrega de archivos.',
        'Directorios de trabajo paralelos aislados por sesión de agente.',
      ],
    },
    stack: ['Quickshell QML', 'Python GTK4', 'Hyprland IPC', 'systemd', 'Matugen M3'],
  },
  {
    id: 'vrcast-case',
    title: 'VRCast 3DoF Spatial Desktop',
    category: 'Systems & VR',
    visibility: 'private',
    tagline: {
      en: 'A spatial Linux desktop on a phone',
      es: 'Un escritorio Linux espacial en el teléfono',
    },
    objective: {
      en: 'Use a Pixel 9a inside a VR headset as a usable spatial desktop, with independent windows and head-gaze control, without encoding a separate video stream for every window.',
      es: 'Usar un Pixel 9a dentro de un visor VR como escritorio espacial utilizable, con ventanas independientes y control por mirada, sin codificar un video diferente por ventana.',
    },
    description: {
      en: 'On the Linux host, Hyprland places windows on a virtual display and a daemon sends their positions to the phone. Sunshine transmits one video stream; the Android client cuts that image into floating 3D windows or a curved canvas. I also worked on optics calibration, gaze interaction and restoring the laptop screen after a session.',
      es: 'En Linux, Hyprland coloca las ventanas en una pantalla virtual y un daemon envía sus posiciones al teléfono. Sunshine transmite un solo video; el cliente Android lo recorta en ventanas 3D flotantes o en un lienzo curvo. También trabajé en la calibración óptica, la interacción por mirada y la restauración de la pantalla del portátil al terminar.',
    },
    agenticRole: {
      en: 'Developed with dedicated `host-qa-agent` and `android-qa-agent` subagents coordinating C/GLSL shaders, Python IPC daemons, and live QA.',
      es: 'Desarrollado con subagentes `host-qa-agent` y `android-qa-agent` coordinando shaders C/GLSL, daemons IPC en Python y QA en vivo.',
    },
    architecture: {
      en: 'Hyprland `HEADLESS-1` (5760×1080) → `vr-spatial-daemon.py` (UDP 53151) + Sunshine H.265 → Pixel 9a `GL_TEXTURE_EXTERNAL_OES` 3D Quads.',
      es: 'Hyprland `HEADLESS-1` (5760×1080) → `vr-spatial-daemon.py` (UDP 53151) + Sunshine H.265 → Pixel 9a Quads 3D `GL_TEXTURE_EXTERNAL_OES`.',
    },
    challenges: {
      en: [
        '360° cylindrical wrap-around seam dual-rendering and Head-Gaze raycasting.',
        'Live optical calibration (IPD, barrel distortion `k1, k2`, chromatic aberration) and `eDP-1` privacy shutoff.',
      ],
      es: [
        'Renderizado dual en costuras cilíndricas 360° y raycasting por mirada (`Head-Gaze`).',
        'Calibración óptica en vivo (IPD, distorsión de barril `k1, k2`) y apagado seguro de `eDP-1`.',
      ],
    },
    stack: ['OpenGL ES 3.0', 'GLSL', 'C / JNI', 'Python', 'Hyprland', 'Sunshine'],
  },
  {
    id: 'cinema',
    title: 'Cinema (KMP)',
    category: 'KMP & Android',
    visibility: 'private',
    tagline: {
      en: 'One media experience across three screens',
      es: 'Una experiencia multimedia en tres pantallas',
    },
    objective: {
      en: 'Explore how a media catalog and playback experience can reach Android, desktop and web while sharing the same domain logic.',
      es: 'Explorar cómo llevar un catálogo y la reproducción multimedia a Android, escritorio y web compartiendo la misma lógica de dominio.',
    },
    description: {
      en: 'The project separates a shared Kotlin core from the Compose interfaces for each target. I worked on how browsing, media state and screen layouts fit different devices, and on build scripts so the desktop version can be run and packaged independently.',
      es: 'El proyecto separa un núcleo Kotlin compartido de las interfaces Compose de cada plataforma. Trabajé en adaptar la exploración del catálogo, el estado multimedia y la disposición de las pantallas a cada dispositivo, además de los scripts para ejecutar y empaquetar la versión de escritorio.',
    },
    agenticRole: {
      en: 'Coding agents helped set up the Compose interfaces, shared data layer, and build scripts for each target.',
      es: 'Los agentes ayudaron a preparar las interfaces Compose, la capa de datos compartida y los scripts de compilación de cada plataforma.',
    },
    architecture: {
      en: 'Shared `:core` KMP Module → Compose Multiplatform UI → `:app` (Android), `:desktopApp` (JVM), `:web` (Browser).',
      es: 'Módulo KMP Compartido `:core` → UI Compose Multiplatform → `:app` (Android), `:desktopApp` (JVM), `:web` (Navegador).',
    },
    challenges: {
      en: [
        'Unified media playback state and Material 3 Expressive adaptive layouts across mobile, desktop, and web.',
        'Streamlined desktop packaging scripts (`install-desktop.sh`, `run-desktop.sh`).',
      ],
      es: [
        'Estado unificado de reproducción y layouts adaptativos Material 3 Expressive en móvil, escritorio y web.',
        'Scripts automatizados de empaquetado y ejecución para escritorio.',
      ],
    },
    stack: ['Kotlin Multiplatform', 'Compose Multiplatform', 'Material 3', 'Gradle KTS'],
  },
  {
    id: 'material-suite',
    title: 'Material KMP Suite',
    category: 'KMP & Android',
    visibility: 'public',
    repoUrl: 'https://github.com/Julian-Florez/MaterialTextEditor',
    tagline: {
      en: 'Tools for writing and organizing daily work',
      es: 'Herramientas para escribir y organizar el trabajo diario',
    },
    objective: {
      en: 'Build everyday tools that make writing and planning feel consistent across devices, while keeping documents and personal information under the user’s control.',
      es: 'Crear herramientas cotidianas para escribir y planificar con una experiencia coherente entre dispositivos y con el control de los documentos y datos personales en manos del usuario.',
    },
    description: {
      en: 'MaterialTextEditor focuses on editing text, Markdown and Typst with a private, quiet interface. MaterialCalendar and MaterialTasks extend the same family toward scheduling and follow-up work. Across the group I explored shared Compose patterns, platform differences and a consistent visual language.',
      es: 'MaterialTextEditor se centra en editar texto, Markdown y Typst con una interfaz sobria y privada. MaterialCalendar y MaterialTasks extienden la familia hacia la planificación y el seguimiento de pendientes. En conjunto exploré patrones compartidos con Compose, diferencias entre plataformas y un lenguaje visual coherente.',
    },
    agenticRole: {
      en: 'I used coding agents to work through Material 3 tokens, Markdown and Typst parsing, and differences between platform targets.',
      es: 'Usé agentes para trabajar en los tokens de Material 3, los parsers de Markdown y Typst, y las diferencias entre plataformas.',
    },
    architecture: {
      en: 'Compose Multiplatform + Material 3 Dynamic Color + Local-First Storage.',
      es: 'Compose Multiplatform + Color Dinámico Material 3 + Almacenamiento Local-First.',
    },
    challenges: {
      en: [
        'Supporting live Typst & Markdown editing in `MaterialTextEditor` with a distraction-free private-first design.',
        'Consistent calendar & task synchronization patterns across Android, iOS, and Desktop.',
      ],
      es: [
        'Soporte de edición Typst y Markdown en `MaterialTextEditor` con enfoque privado y minimalista.',
        'Patrones consistentes de calendario y tareas entre Android, iOS y Desktop.',
      ],
    },
    stack: ['Kotlin', 'Compose Multiplatform', 'Material 3', 'Typst', 'Markdown'],
  },
];

export const kmpGames = [
  {
    id: 'tetris',
    title: 'MaterialTetris',
    url: 'https://julian-florez.github.io/MaterialTetris/',
    repo: 'https://github.com/Julian-Florez/MaterialTetris',
    desc: {
      en: 'Modern Tetris with Material Design 3, built in Kotlin Multiplatform & Compose for Web, Desktop & Android.',
      es: 'Tetris moderno con Material Design 3, desarrollado en Kotlin Multiplatform y Compose para Web, Desktop y Android.',
    },
  },
  {
    id: 'snake',
    title: 'MaterialSnake',
    url: 'https://julian-florez.github.io/MaterialSnake/',
    repo: 'https://github.com/Julian-Florez/MaterialSnake',
    desc: {
      en: 'Classic Snake reinvented with Material 3 Expressive motion and KMP targeting Web, Desktop & Android.',
      es: 'El clásico Snake reinventado con Material Design 3, construido con Kotlin Multiplatform y Compose.',
    },
  },
  {
    id: '2048',
    title: 'Material2048',
    url: 'https://julian-florez.github.io/Material2048/',
    repo: 'https://github.com/Julian-Florez/Material2048',
    desc: {
      en: 'Smooth 2048 puzzle experience with Material 3 dynamic palettes compiled to Web via Compose Multiplatform.',
      es: 'Versión moderna de 2048 con Material Design 3, creada con Kotlin Multiplatform y Compose.',
    },
  },
];

export const archiveItems: ArchiveItem[] = [
  { name: 'CareerOS', category: 'Agentic AI', visibility: 'local', lang: 'Python / Kotlin / Typst', desc: { en: 'Multi-agent career, job matching & Typst CV platform.', es: 'Plataforma multi-agente de carrera, empleo y CVs en Typst.' } },
  { name: 'Agi', category: 'Agentic AI', visibility: 'private', lang: 'QML / Python', desc: { en: 'Unified Antigravity desktop harness with floating orbs in Quickshell & Nautilus.', es: 'Harness de escritorio con orbes flotantes en Quickshell y Nautilus.' } },
  { name: 'ragecallsim', category: 'Agentic AI', visibility: 'public', lang: 'TypeScript', url: 'https://github.com/Julian-Florez/ragecallsim', desc: { en: 'AI customer service training simulator with adaptive difficulty & evaluation.', es: 'Simulador de entrenamiento con IA conversacional y evaluación adaptativa.' } },
  { name: 'Win2APK', category: 'Linux & Systems', visibility: 'public', lang: 'Python', url: 'https://github.com/Julian-Florez/Win2APK', desc: { en: 'Undergraduate thesis exploring packaging Windows apps as Android APKs.', es: 'Tesis de grado sobre el empaquetado de apps Windows como APKs para Android.' } },
  { name: 'RemoteCast', category: 'Linux & Systems', visibility: 'public', lang: 'Java / Android', url: 'https://github.com/Julian-Florez/moonlight-android', desc: { en: 'Moonlight-based Android client for remote access to a Sunshine desktop.', es: 'Cliente Android basado en Moonlight para acceder a un escritorio con Sunshine.' } },
  { name: 'ExtendCast', category: 'Linux & Systems', visibility: 'private', lang: 'Java / Android', desc: { en: 'Android client that turns a virtual Hyprland display into a second screen.', es: 'Cliente Android que convierte una pantalla virtual de Hyprland en segunda pantalla.' } },
  { name: 'VRCast', category: 'Linux & Systems', visibility: 'private', lang: 'C / Python / GLSL', desc: { en: '3DoF spatial desktop using NixOS, Hyprland, Sunshine, and a Pixel 9a.', es: 'Escritorio espacial 3DoF con NixOS, Hyprland, Sunshine y un Pixel 9a.' } },
  { name: 'Share (compartir)', category: 'Linux & Systems', visibility: 'private', lang: 'Rust / Kotlin', desc: { en: 'Cross-platform file sharing daemon in Rust Tokio + Android SAF.', es: 'Daemon multiplataforma de envío de archivos en Rust Tokio + Android SAF.' } },
  { name: 'SoundDrift', category: 'KMP & Android', visibility: 'public', lang: 'Kotlin', url: 'https://github.com/Julian-Florez/SoundDrift', desc: { en: 'Real-time audio streaming from Android to desktop.', es: 'Streaming de audio en tiempo real de Android a escritorio.' } },
  { name: 'SoundDriftPlayer', category: 'Linux & Systems', visibility: 'public', lang: 'JavaScript', url: 'https://github.com/Julian-Florez/SoundDriftPlayer', desc: { en: 'Minimalist desktop client receiving SoundDrift audio streams.', es: 'Cliente minimalista de escritorio para recibir audio de SoundDrift.' } },
  { name: 'PC-Audio-Stream-to-Phone', category: 'Linux & Systems', visibility: 'private', lang: 'Rust', desc: { en: 'Low-latency PC-to-Android audio streamer written in Rust.', es: 'Streaming de audio de baja latencia de PC a Android escrito en Rust.' } },
  { name: 'nixos-config', category: 'Linux & Systems', visibility: 'private', lang: 'Nix', desc: { en: 'Declarative NixOS 26.11 flake configuration for Lenovo hybrid GPU host.', es: 'Configuración declarativa NixOS 26.11 con Flakes para portátil híbrido.' } },
  { name: 'illogical-flake', category: 'Linux & Systems', visibility: 'public', lang: 'Nix', url: 'https://github.com/Julian-Florez/illogical-flake', desc: { en: 'Nix flake packaging for Hyprland + Quickshell dotfiles.', es: 'Flake Nix para dotfiles de Hyprland y Quickshell.' } },
  { name: 'quickshell-ii', category: 'Linux & Systems', visibility: 'private', lang: 'QML', desc: { en: 'Customized Quickshell desktop shell.', es: 'Personalización del shell de escritorio Quickshell.' } },
  { name: 'hypr-config', category: 'Linux & Systems', visibility: 'private', lang: 'Shell', desc: { en: 'Hyprland Wayland configuration for daily use.', es: 'Configuración de Hyprland Wayland para uso diario.' } },
  { name: 'cinema', category: 'KMP & Android', visibility: 'private', lang: 'Kotlin', desc: { en: 'Kotlin Multiplatform media app for Android, desktop, and web.', es: 'Aplicación multimedia en Kotlin Multiplatform para Android, escritorio y web.' } },
  { name: 'MaterialTextEditor', category: 'KMP & Android', visibility: 'public', lang: 'Kotlin', url: 'https://github.com/Julian-Florez/MaterialTextEditor', desc: { en: 'Private, minimalistic Text, Markdown & Typst editor.', es: 'Editor minimalista y privado de Texto, Markdown y Typst.' } },
  { name: 'MaterialCalendar', category: 'KMP & Android', visibility: 'private', lang: 'Kotlin', desc: { en: 'Google Calendar clone for Android/iOS/Desktop using Compose Multiplatform.', es: 'Clon de calendario para Android/iOS/Desktop con Compose Multiplatform.' } },
  { name: 'MaterialTasks', category: 'KMP & Android', visibility: 'private', lang: 'Kotlin', desc: { en: 'Material 3 task manager built with Kotlin Multiplatform.', es: 'Gestor de tareas Material 3 en Kotlin Multiplatform.' } },
  { name: 'MaterialTetris', category: 'KMP & Android', visibility: 'public', lang: 'Kotlin', url: 'https://github.com/Julian-Florez/MaterialTetris', desc: { en: 'Playable Tetris built with Kotlin Multiplatform and Compose.', es: 'Tetris jugable desarrollado con Kotlin Multiplatform y Compose.' } },
  { name: 'MaterialSnake', category: 'KMP & Android', visibility: 'public', lang: 'Kotlin', url: 'https://github.com/Julian-Florez/MaterialSnake', desc: { en: 'Snake for web, desktop and Android with Material 3.', es: 'Snake para web, escritorio y Android con Material 3.' } },
  { name: 'Material2048', category: 'KMP & Android', visibility: 'public', lang: 'Kotlin', url: 'https://github.com/Julian-Florez/Material2048', desc: { en: '2048 for web, desktop and Android with Material 3.', es: '2048 para web, escritorio y Android con Material 3.' } },
  { name: 'MaterialQuickSettings', category: 'KMP & Android', visibility: 'private', lang: 'Kotlin', desc: { en: 'Desktop quick settings interface using Material 3.', es: 'Interfaz de ajustes rápidos de escritorio con Material 3.' } },
  { name: 'MaterialMusicFlyout', category: 'KMP & Android', visibility: 'public', lang: 'Kotlin', url: 'https://github.com/Julian-Florez/MaterialMusicFlyout', desc: { en: 'Compose Multiplatform music flyout for Windows and Android.', es: 'Panel de música en Compose Multiplatform para Windows y Android.' } },
  { name: 'CircleToSearchCS', category: 'Linux & Systems', visibility: 'public', lang: 'C#', url: 'https://github.com/Julian-Florez/CircleToSearchCS', desc: { en: 'Desktop "Circle to Search" visual screen selection & instant lookup.', es: 'Aplicación de escritorio que emula "Circle to Search" con selección visual.' } },
  { name: 'winlator', category: 'Reverse Engineering', visibility: 'public', lang: 'C', url: 'https://github.com/Julian-Florez/winlator', desc: { en: 'Windows application compatibility on Android with Wine and Box86/Box64.', es: 'Compatibilidad de aplicaciones Windows en Android con Wine y Box86/Box64.' } },
  { name: 'winlator-app', category: 'Reverse Engineering', visibility: 'public', lang: 'C', url: 'https://github.com/Julian-Florez/winlator-app', desc: { en: 'Related Android compatibility codebase for Windows applications.', es: 'Base de código relacionada con compatibilidad de aplicaciones Windows en Android.' } },
  { name: 'Mi Fitness APK Mod (OpenCode)', category: 'Reverse Engineering', visibility: 'local', lang: 'Smali / APK', desc: { en: 'Reverse-engineered Mi Fitness APK via OpenCode to replace Alexa with Gemini & inspect watch BLE/sync protocols.', es: 'Ingeniería inversa de Mi Fitness APK en OpenCode para reemplazar Alexa por Gemini y analizar protocolo del reloj.' } },
  { name: 'Seminario-Cuentas-X', category: 'Web & Full-Stack', visibility: 'public', lang: 'Python', url: 'https://github.com/Julian-Florez/Seminario-de-Investigacion-Cuentas-automatizadas-en-X', desc: { en: 'Research seminar detecting automated bot accounts on X.', es: 'Seminario de investigación para detección de cuentas automatizadas en X.' } },
  { name: 'ProyectoDesarrolloWeb', category: 'Web & Full-Stack', visibility: 'public', lang: 'HTML / JS', url: 'https://github.com/Julian-Florez/ProyectoDesarrolloWeb', desc: { en: 'Interactive web platform to explore and compare visual art styles.', es: 'Plataforma web educativa para explorar y comparar estilos artísticos.' } },
  { name: 'EduNow', category: 'Web & Full-Stack', visibility: 'private', lang: 'JS / HTML', desc: { en: 'Educational web application.', es: 'Aplicación web educativa.' } },
  { name: 'Mindfull', category: 'KMP & Android', visibility: 'private', lang: 'Kotlin / C++', desc: { en: 'Native Android meditation app with procedural audio shaped by a review of 30 scientific papers.', es: 'App nativa de meditación para Android con audio procedural diseñado a partir de una revisión de 30 trabajos científicos.' } },
];
