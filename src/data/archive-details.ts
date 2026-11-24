// Extra context is kept separate from the short descriptions used by search.
export const archiveDetails: Record<string, { es: string; en: string }> = {
  CareerOS: {
    es: 'Conecté un backend en Python y SQLite con generación de CV en Typst y una aplicación Android. El entorno de desarrollo se define con Nix; las pruebas comprueban la transformación de datos antes de producir el PDF.',
    en: 'I connected a Python and SQLite backend to Typst resume generation and an Android app. Nix defines the development environment, while tests check the data transformation before producing a PDF.',
  },
  Agi: {
    es: 'Integré acciones de agentes en Nautilus y en un lanzador de Quickshell. La interfaz recibe eventos JSON de la CLI, muestra el avance de cada tarea y conserva el contexto del archivo o carpeta desde donde se inició.',
    en: 'I integrated agent actions into Nautilus and a Quickshell launcher. The interface reads JSON events from the CLI, shows task progress, and keeps the context of the file or folder that started the task.',
  },
  ragecallsim: {
    es: 'La simulación plantea conversaciones difíciles de atención al cliente y evalúa las respuestas. El trabajo se centra en generar escenarios, adaptar su dificultad y convertir la conversación en información útil para practicar.',
    en: 'The simulator stages difficult customer service conversations and evaluates responses. The work covers scenario generation, adaptive difficulty, and turning a conversation into useful practice feedback.',
  },
  Win2APK: {
    es: 'Mi tesis explora el análisis de ejecutables PE, la inclusión de dependencias de compatibilidad y la construcción de un APK. Separé esas etapas para poder estudiar qué parte del proceso funciona y dónde aparecen límites de arquitectura.',
    en: 'My thesis explores PE executable analysis, compatibility dependencies, and APK construction. I separated those stages so I could study what works and where architecture limits appear.',
  },
  RemoteCast: {
    es: 'Partí de Moonlight para crear una app Android con identidad propia y conexión al escritorio mediante Sunshine. Trabajé el flujo de autoconexión, el tema visual y los gestos táctiles para teclado y control remoto.',
    en: 'I used Moonlight as the base for an Android app with its own identity and a Sunshine desktop connection. I worked on auto-connect, the visual theme, and touch gestures for keyboard and remote control.',
  },
  ExtendCast: {
    es: 'Separé el uso del teléfono como segunda pantalla del acceso remoto general. La app recibe un monitor virtual de Hyprland a través de Sunshine y permite devolver gestos táctiles al equipo.',
    en: 'I separated the phone-as-second-display use case from general remote access. The app receives a Hyprland virtual monitor through Sunshine and sends touch gestures back to the host.',
  },
  VRCast: {
    es: 'Transmito una pantalla virtual de Hyprland mediante Sunshine a un Pixel 9a dentro de un visor VR. Un daemon comunica la posición de las ventanas y el cliente las ubica en un espacio 3DoF que responde a la orientación de la cabeza.',
    en: 'I stream a Hyprland virtual display through Sunshine to a Pixel 9a in a VR headset. A daemon sends window positions, and the client places them in a 3DoF space that follows head orientation.',
  },
  'Share (compartir)': {
    es: 'Construí un daemon asíncrono en Rust para enviar archivos entre NixOS y Android. La integración con Nautilus y la hoja de compartir de Android busca que el envío comience desde las acciones normales de cada sistema.',
    en: 'I built an asynchronous Rust daemon to send files between NixOS and Android. Nautilus and Android Share Sheet integration let transfers start from each system’s familiar actions.',
  },
  SoundDrift: {
    es: 'Este fork reúne la app Android que captura audio y lo transmite a un receptor de escritorio. Sirve para experimentar con la ruta entre captura, transporte y reproducción.',
    en: 'This fork contains the Android app that captures audio and streams it to a desktop receiver. It provides a basis for experimenting with capture, transport, and playback.',
  },
  SoundDriftPlayer: {
    es: 'Este fork corresponde al receptor de escritorio de SoundDrift. Recibe el flujo que envía Android y lo reproduce en el equipo, lo que permite probar la ruta completa entre ambas aplicaciones.',
    en: 'This fork is SoundDrift’s desktop receiver. It accepts the stream sent by Android and plays it on the computer, completing the route between the two apps.',
  },
  'PC-Audio-Stream-to-Phone': {
    es: 'Exploré el recorrido inverso: capturar audio del computador y enviarlo a Android. La parte en Rust administra el flujo y el almacenamiento temporal necesario para reproducirlo sin cortes perceptibles.',
    en: 'I explored the opposite route: capturing computer audio and sending it to Android. The Rust component manages the stream and buffering needed for continuous playback.',
  },
  'nixos-config': {
    es: 'Organicé la configuración del portátil con Nix Flakes: entorno gráfico, servicios de usuario, red y gráficos híbridos. La configuración declarativa permite revisar los cambios del sistema como código.',
    en: 'I organized the laptop configuration with Nix Flakes: desktop, user services, networking, and hybrid graphics. The declarative setup lets system changes be reviewed as code.',
  },
  'illogical-flake': {
    es: 'Este fork empaqueta la configuración de Hyprland y Quickshell como un flake de Nix. Lo uso para integrar esos dotfiles en una instalación declarativa y seguir sus cambios por versión.',
    en: 'This fork packages a Hyprland and Quickshell configuration as a Nix flake. I use it to integrate those dotfiles into a declarative installation and track changes by version.',
  },
  'quickshell-ii': {
    es: 'Adapté la interfaz de Quickshell para mi entorno Wayland, con un lanzador y controles de escritorio conectados a los servicios que uso a diario.',
    en: 'I adapted the Quickshell interface for my Wayland desktop, with a launcher and desktop controls connected to the services I use every day.',
  },
  'hypr-config': {
    es: 'Organicé ventanas, atajos y monitores de Hyprland como configuración versionada. El objetivo es poder revisar y reproducir los cambios del gestor de ventanas.',
    en: 'I organized Hyprland windows, shortcuts, and monitors as versioned configuration. The goal is to review and reproduce changes to the window manager.',
  },
  cinema: {
    es: 'Organicé una aplicación multimedia con un módulo compartido en Kotlin Multiplatform y clientes para Android, escritorio y web. Trabajé en separar los datos y el estado de reproducción de cada interfaz.',
    en: 'I organized a media app around a shared Kotlin Multiplatform module with Android, desktop, and web clients. I worked on separating data and playback state from each interface.',
  },
  MaterialTextEditor: {
    es: 'Construí un editor para texto, Markdown y Typst con Compose Multiplatform. El proyecto explora una interfaz de escritura centrada en el documento y el tratamiento local de archivos.',
    en: 'I built a text, Markdown, and Typst editor with Compose Multiplatform. The project explores a document-focused writing interface and local file handling.',
  },
  MaterialCalendar: {
    es: 'Prototipo de calendario con Compose Multiplatform para estudiar vistas de agenda y eventos en varias plataformas. El trabajo se concentra en compartir la lógica y adaptar la interfaz a cada pantalla.',
    en: 'A Compose Multiplatform calendar prototype for exploring agenda and event views across platforms. The work focuses on sharing logic and adapting the interface to each screen.',
  },
  MaterialTasks: {
    es: 'Gestor de tareas en Kotlin Multiplatform con componentes Material 3. Explora cómo representar, organizar y editar pendientes con una interfaz coherente entre plataformas.',
    en: 'A Kotlin Multiplatform task manager using Material 3 components. It explores how to display, organize, and edit tasks with a consistent interface across platforms.',
  },
  MaterialTetris: {
    es: 'Implementé el tablero, las piezas y las reglas de caída en Compose. La versión web permite probar el juego; el mismo proyecto apunta también a escritorio y Android.',
    en: 'I implemented the board, pieces, and falling rules in Compose. The web build lets visitors play it, while the same project also targets desktop and Android.',
  },
  MaterialSnake: {
    es: 'Implementé el movimiento, la comida, las colisiones y el reinicio del juego con controles de teclado y pantalla táctil. El código compartido se compila para web, escritorio y Android.',
    en: 'I implemented movement, food, collisions, and restart behavior with keyboard and touch controls. Shared code builds for web, desktop, and Android.',
  },
  Material2048: {
    es: 'Construí la cuadrícula y la lógica para mover y combinar fichas. La interfaz en Compose adapta los controles de flechas o WASD y la interacción táctil a web, escritorio y Android.',
    en: 'I built the grid and tile movement and merging logic. The Compose interface adapts arrow or WASD controls and touch input across web, desktop, and Android.',
  },
  MaterialQuickSettings: {
    es: 'Exploré un panel compacto de controles de escritorio con Material 3. El diseño se concentra en acciones rápidas que aparecen sobre el entorno de trabajo.',
    en: 'I explored a compact desktop control panel with Material 3. The design focuses on quick actions that appear over the workspace.',
  },
  MaterialMusicFlyout: {
    es: 'El repositorio separa una interfaz Compose compartida de las entradas de Windows y Android. En Windows consulta la sesión multimedia global y muestra el estado de reproducción en un panel flotante.',
    en: 'The repository separates shared Compose UI from Windows and Android entry points. On Windows it reads the global media session and displays playback state in a floating panel.',
  },
  CircleToSearchCS: {
    es: 'Implementé una selección visual de una región de la pantalla en Windows para iniciar una búsqueda relacionada. El trabajo conecta la captura de área con una acción de consulta inmediata.',
    en: 'I implemented visual screen-region selection on Windows to start a related search. The work connects area capture to an immediate lookup action.',
  },
  winlator: {
    es: 'Repositorio para estudiar la ejecución de programas Windows en Android con Wine y Box86/Box64. Lo relaciono con la investigación de compatibilidad y empaquetado de Win2APK.',
    en: 'A repository for studying Windows programs on Android with Wine and Box86/Box64. It connects to the compatibility and packaging investigation in Win2APK.',
  },
  'winlator-app': {
    es: 'Base de aplicación Android relacionada con Winlator. La conservo por separado para examinar la estructura de la app y cómo integra las capas de compatibilidad.',
    en: 'An Android app codebase related to Winlator. I keep it separate to inspect the app structure and how compatibility layers are integrated.',
  },
  'Mi Fitness APK Mod (OpenCode)': {
    es: 'Analicé el APK de Mi Fitness para localizar la integración del asistente y el intercambio de datos con el reloj. Es un experimento local de ingeniería inversa; no hay una versión pública para descargar.',
    en: 'I inspected the Mi Fitness APK to locate the assistant integration and data exchange with the watch. This is a local reverse-engineering experiment; there is no public download.',
  },
  'Seminario-Cuentas-X': {
    es: 'Investigación sobre señales que pueden distinguir cuentas automatizadas en X. El repositorio reúne el trabajo del seminario y el proceso de análisis utilizado para estudiar el problema.',
    en: 'Research into signals that may distinguish automated accounts on X. The repository contains the seminar work and the analysis process used to study the problem.',
  },
  ProyectoDesarrolloWeb: {
    es: 'Desarrollé una plataforma educativa para explorar y comparar estilos de arte visual. La interfaz organiza el contenido para que la comparación sea interactiva en lugar de una lista de definiciones.',
    en: 'I developed an educational platform for exploring and comparing visual art styles. The interface organizes the content as an interactive comparison instead of a list of definitions.',
  },
  EduNow: {
    es: 'Proyecto web orientado a educación. Organicé la información y las interacciones alrededor de la consulta de contenido educativo; el código permanece privado.',
    en: 'A web project focused on education. I organized information and interactions around exploring educational content; its code remains private.',
  },
  Mindfull: {
    es: 'La investigación reunió artículos, bibliografía y un texto APA 7; también produjo un prototipo sonoro con Web Audio. La app final usa Jetpack Compose y un motor C++/AAudio: distribuye la sesión en fases, genera texturas sin pistas en bucle y reserva los pulsos binaurales para auriculares. Probé y ajusté el control de tiempo, las transiciones y el comportamiento al pausar. El código permanece privado.',
    en: 'The research gathered papers, a bibliography and an APA 7 article, plus an interactive Web Audio sound prototype. The final app uses Jetpack Compose and a C++/AAudio engine: it schedules session phases, generates sound without looped tracks, and reserves binaural tones for headphones. I tested and refined time controls, transitions and pause behavior. The code remains private.',
  },
};
