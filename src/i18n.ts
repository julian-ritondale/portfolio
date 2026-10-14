import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          ui: {
            nav: {
              about: 'About',
              education: 'Education',
              experience: 'Experience',
              projects: 'Projects',
              github: 'GitHub',
              socials: 'Socials',
              resume: 'Resume',
              contact: 'Contact',
            },
            now: 'NOW',
            current: 'Current',
            notice: "Hi! I'm open to opportunities in\nProduct or Engineering :)",
            intern: 'Internship',
            parttime: 'Part-time',
            baModes: 'On-site / Hybrid / Remote',
            us: 'US',
            usModes: 'Remote',
            letsTalk: "Let's talk",
            prompts: ['What are you working on?', 'Best project?', 'Tech stack', 'Where do you study?', 'How can I reach you?'],
            heroTitle: "Hi, I'm Julian. Ask about me.",
            placeholder: "Ask about his experience, projects, skills…",
            ask: 'Ask',
            clear: 'Clear',
            thinking: 'THINKING…',
            send: 'Send',
            top: 'BACK TO TOP ↑',
            error: "Something went wrong reaching the assistant. Please try again in a moment, or email julianritondale@gmail.com.",
          },
          sections: {
            resume: "Resume",
            quote: "\"Any sufficiently advanced technology is indistinguishable from magic.\"",
            quote_author: "Arthur C. Clarke",

            about_title: "ABOUT",
            years_old: "years old",

            about_desc_1: "I'm a 4th-year Software Engineering student at Universidad Austral.",
            about_desc_2: "I'm passionate about building creative products with new technologies and talented people.",
            about_desc_3: "I value collaborative environments where people feel supported and motivated to do their best.",
            about_skills: ['Kotlin', 'Java', 'TypeScript', 'Python', 'SQL', 'HTML/CSS', 'Claude API', 'OpenAI API', 'ElevenLabs', 'Langfuse', 'Braintrust', 'Spring Boot', 'Nest JS', 'Express', 'Prisma', 'React', 'Next.js', 'Tailwind CSS', 'Azure', 'Vercel', 'Railway', 'Docker', 'GitHub Actions', 'PostgreSQL', 'Supabase', 'Redis', 'Git/GitHub', 'Claude Code', 'Codex', 'Spanish / English'],

            education_title: "EDUCATION",
            education_desc_1: "The world is full of incredible people nobody really knows about.",
            education_desc_2: "Here, I was lucky enough to meet many of them.",
            education_uni: "Universidad Austral",
            education_time: "Feb. 2023 - Dec. 2027 (Expected)",
            education_degree: "BS in Software Engineering",
            education_minor: "Minor in Artificial Intelligence",
            education_location: "Buenos Aires, Argentina",
            education_coursework: ['Artificial Intelligence', 'Algorithms & Data Structures', 'Software Design', 'Concurrent Programming', 'Databases', 'Operating Systems'],

            experience_title: "EXPERIENCE",
            experience_1_role: "Product Engineer",
            experience_1_company: "IntegridAI",
            experience_1_date: "Feb. 2026 — Now",
            experience_1_bullets: [
              "Compliance management platform helping SMEs meet the requirements of Argentina's anti-corruption law. Own product for a 5-person team.",
              "Ran 8 validation sessions with 5 stakeholders, confirming 20+ features that shaped the backlog and roadmap.",
              "Shipped real-time voice simulations for compliance training end to end, integrating ElevenLabs Agents for live voice conversations and the Claude API as an LLM-as-evaluator.",
              "Benchmarked 6 LLMs in Braintrust, cutting token usage by 8.1% and cost by 14.6% on production models while maintaining evaluation quality.",
            ],

            projects_title: "PROJECTS",
            projects_desc_1: "There's nothing more rewarding than working with talented people on fun projects.",
            projects_desc_2: "Some of these I'm proud of. All of them taught me something.",

            project_1_name: "Pay and Pray",
            project_1_stack: "Kotlin, TypeScript, Spring Boot, React, PostgreSQL, Docker",
            project_1_date: "May 2026 - Jun. 2026",
            project_1_bullets: [
              "Collaborated developing a portfolio tracker by integrating the SEC EDGAR API to surface financial metrics and official 10-K/10-Q filings for US-listed companies.",
              "Supported web and native Android usage by building a React + Capacitor frontend with portfolio P&L calculations, watchlist management, and side-by-side company metric comparisons.",
              "Streamlined delivery by setting up GitHub Actions CI/CD pipelines running unit, integration, and Cypress E2E tests."
            ],

            project_2_name: "Snippet Searcher",
            project_2_stack: "Kotlin, TypeScript, Spring Boot, React, PostgreSQL, Redis, Docker, Azure",
            project_2_date: "Aug. 2025 - Dec. 2025",
            project_2_bullets: [
              "Led development of a code snippet management and sharing platform on a 4-microservice architecture, powered by a custom language toolchain for a TypeScript subset.",
              "Implemented the core language pipeline by building the lexer, parser, interpreter, and formatter from scratch.",
              "Validated the language toolchain against an external TCK, passing all 49 scenarios under a 7MB heap limit.",
              "Improved responsiveness by offloading time-intensive tasks to asynchronous inter-service communication using Redis."
            ],

            project_3_name: "PrintScript",
            project_3_stack: "Kotlin, Clikt",
            project_3_date: "Aug. 2025 - Nov. 2025",
            project_3_bullets: [
              "Developed a public library of language tools for a TypeScript subset by implementing an interpreter, formatter, and linter.",
              "Streamlined tool usage by building a CLI for language tool execution using the Clikt library.",
              "Enforced module independence and reusable build logic by configuring a multi-project Gradle build with shared conventions for linting, formatting, and code coverage.",
              "Automated versioned package publishing by setting up GitHub Actions CI/CD pipelines deploying to Apache Maven registry.",
              "Successfully verified library compliance through a TCK suite covering memory and runtime constraints."
            ],

            project_4_name: "Sonora",
            project_4_stack: "TypeScript, Tailwind CSS, React, Nest JS, PostgreSQL",
            project_4_date: "Aug. 2025 - Nov. 2025",
            project_4_bullets: [
              "Collaborated developing a web application for browsing and reviewing music content.",
              "Developed music discovery features by integrating the Spotify API to import artists, albums, and tracks with metadata and audio previews.",
              "Improved API discoverability by documenting all endpoints with Swagger and OpenAPI annotations.",
              "Enabled user engagement by implementing social features including follows, reviews, reactions, and a listen later queue."
            ],

            project_5_name: "Chess and Checkers Engine",
            project_5_stack: "Java",
            project_5_date: "Jun. 2025 - Jul. 2025",
            project_5_bullets: [
              "Designed a reusable game engine using an Entity Component System architecture to share core logic across chess, checkers, and their variants.",
              "Validated correctness of 33+ game rules by implementing a dynamic test runner and integrating a third-party test suite covering movements, captures, check, castling, and checkmate.",
              "Enabled a playable chess and checkers UI by integrating the game engine to a provided JavaFX interface."
            ],

            project_6_name: "Agent Orchestra",
            project_6_stack: "Python, OpenAI API, ChromaDB, Langfuse",
            project_6_date: "Apr. 2026 - Jul. 2026",
            project_6_bullets: [
              "Co-built a multi-agent coding assistant with an orchestrator, 5 specialized sub-agents, and 9 tools",
              "Enforced safe, resumable execution by designing a permissioned tool dispatcher and a 3-tier memory system",
              "Grounded responses in official documentation by building a RAG pipeline over 28 documents in ChromaDB",
              "Achieved 99.3% error-free execution across 280 instrumented spans by tracking cost, token usage, and retrieval quality in Langfuse"
            ],

            achievements_title: "ACHIEVEMENTS",
            achievements_desc: "Try everything. If the goal is to experience, you always win.",
            achievement_details_label: "Details",
            achievement_1_name: "Scout",
            achievement_1_label: "AI Competition",
            achievement_1_date: "Jun. 2026",
            achievement_1_place: "1st Place",
            achievement_1_note: "Won a Messi jersey :)",
            achievement_1_bullets: [
              "Collaborated developing a web application that classified all 72 FIFA World Cup 2026 group-stage matches into three interest levels through user preferences and schedule availability.",
              "Eliminated the need for historical user data by designing a Bayesian elicitation system that estimates individual utility functions through adaptive questionnaires.",
              "Improved recommendation accuracy over time by implementing a Kalman filter that attributes user feedback to individual match features.",
              "Reduced onboarding friction by processing natural language descriptions with the OpenAI API to automatically derive Bayesian priors and generate personalized recommendation explanations.",
              "Simplified match planning by enabling users to add recommended matches to their calendars using the Google Calendar API."
            ],

            skills_title: "TECHNICAL SKILLS",
            skills_languages_label: "Programming Languages",
            skills_languages: "Kotlin, Java, TypeScript, Python, SQL, HTML/CSS",
            skills_ai_label: "AI/ML",
            skills_ai: "Claude API, OpenAI API, ElevenLabs, Langfuse, Braintrust",
            skills_frameworks_label: "Frameworks & Libraries",
            skills_frameworks: "Spring Boot, Nest JS, Express, Prisma, React, Next.js, Tailwind CSS",
            skills_cloud_label: "Cloud & DevOps",
            skills_cloud: "Azure, Vercel, Railway, Docker, GitHub Actions",
            skills_databases_label: "Databases",
            skills_databases: "PostgreSQL, Supabase, Redis",
            skills_tools_label: "Developer Tools",
            skills_tools: "Git/GitHub, Claude Code, Codex",
            skills_spoken_languages_label: "Languages",
            skills_spoken_languages: "Spanish (Native), English (Fluent/Professional)",

            github_contrib: "CONTRIBUTIONS IN THE LAST YEAR",
            github_view: "View profile",

            socials_title: "SOCIALS",

            download: "Download",

            contact_title: "CONTACT",
            contact_desc: "One of the most important things I've learned in recent years: the people you can reach just by sending an email would genuinely surprise you.",
            contact_your_email: "Your email",
            contact_say_hi: "Say hi…",
            contact_send: "Send",
            name: "Julian Ritondale",
            phone: "+54 11-2160-4006",
            email: "julianritondale@gmail.com",
            linkedin: "linkedin.com/in/julianritondale",
            website: "julian-ritondale.github.io"
          }
        }
      },
      es: {
        translation: {
          ui: {
            nav: {
              about: 'Sobre mí',
              education: 'Educación',
              experience: 'Experiencia',
              projects: 'Proyectos',
              github: 'GitHub',
              socials: 'Redes',
              resume: 'CV',
              contact: 'Contacto',
            },
            now: 'AHORA',
            current: 'Actual',
            notice: '¡Hola! Estoy abierto a oportunidades\nen Producto o Ingeniería :)',
            intern: 'Pasantía',
            parttime: 'Part-time',
            baModes: 'Presencial / Híbrido / Remoto',
            us: 'EE. UU.',
            usModes: 'Remoto',
            letsTalk: 'Hablemos',
            prompts: ['¿En qué estás trabajando?', '¿Tu mejor proyecto?', 'Stack técnico', '¿Dónde estudiás?', '¿Cómo te contacto?'],
            heroTitle: 'Hola, soy Julián. Preguntá sobre mí.',
            placeholder: 'Preguntá sobre su experiencia, proyectos, skills…',
            ask: 'Preguntar',
            clear: 'Borrar',
            thinking: 'PENSANDO…',
            send: 'Enviar',
            top: 'VOLVER ARRIBA ↑',
            error: 'Hubo un problema al conectar con el asistente. Probá de nuevo en un momento, o escribile a julianritondale@gmail.com.',
          },
          sections: {
            resume: "CV",
            quote: "\"Cualquier tecnología lo suficientemente avanzada es indistinguible de la magia.\"",
            quote_author: "Arthur C. Clarke",

            about_title: "SOBRE MÍ",
            years_old: "años",

            about_desc_1: "Soy estudiante de 4to año de Ingeniería Informática en la Universidad Austral.",
            about_desc_2: "Me apasiona crear productos y proyectos con nuevas tecnologías junto a personas talentosas.",
            about_desc_3: "Valoro entornos donde las personas se sientan acompañadas y motivadas a dar lo mejor de sí.",
            about_skills: ['Kotlin', 'Java', 'TypeScript', 'Python', 'SQL', 'HTML/CSS', 'Claude API', 'OpenAI API', 'ElevenLabs', 'Langfuse', 'Braintrust', 'Spring Boot', 'Nest JS', 'Express', 'Prisma', 'React', 'Next.js', 'Tailwind CSS', 'Azure', 'Vercel', 'Railway', 'Docker', 'GitHub Actions', 'PostgreSQL', 'Supabase', 'Redis', 'Git/GitHub', 'Claude Code', 'Codex', 'Español / Inglés'],

            education_title: "EDUCACIÓN",
            education_desc_1: "El mundo está lleno de personas increíbles que nadie conoce realmente.",
            education_desc_2: "Aquí tuve la suerte de conocer a muchas de ellas.",
            education_uni: "Universidad Austral",
            education_time: "Feb. 2023 - Dic. 2027 (Esperado)",
            education_degree: "Grado en Ingeniería Informática",
            education_minor: "Orientación en Inteligencia Artificial",
            education_location: "Buenos Aires, Argentina",
            education_coursework: ['Inteligencia Artificial', 'Algoritmos y Estructuras de Datos', 'Diseño de Software', 'Programación Concurrente', 'Bases de Datos', 'Sistemas Operativos'],

            experience_title: "EXPERIENCIA",
            experience_1_role: "Product Engineer",
            experience_1_company: "IntegridAI",
            experience_1_date: "Feb. 2026 — Ahora",
            experience_1_bullets: [
              "Plataforma de compliance que ayuda a PyMEs a cumplir con la ley anticorrupción de Argentina. Soy dueño de producto para un equipo de 5 personas.",
              "Lideré 8 sesiones de validación con 5 stakeholders, confirmando más de 20 funcionalidades que definieron el backlog y el roadmap.",
              "Lancé simulaciones de voz en tiempo real para entrenamiento de compliance de punta a punta, integrando ElevenLabs Agents para conversaciones de voz en vivo y la API de Claude como evaluador LLM.",
              "Comparé 6 LLMs en Braintrust, reduciendo el uso de tokens en 8.1% y el costo en 14.6% en producción manteniendo la calidad de evaluación.",
            ],

            projects_title: "PROYECTOS",
            projects_desc_1: "No hay nada más gratificante que trabajar con personas talentosas en proyectos divertidos.",
            projects_desc_2: "De algunos estoy orgulloso. Todos me enseñaron algo.",

            project_1_name: "Pay and Pray",
            project_1_stack: "Kotlin, TypeScript, Spring Boot, React, PostgreSQL, Docker",
            project_1_date: "May. 2026 - Jun. 2026",
            project_1_bullets: [
              "Colaboré desarrollando un rastreador de portafolio integrando la API de SEC EDGAR para mostrar métricas financieras y reportes oficiales 10-K/10-Q de empresas listadas en EE.UU.",
              "Desarrollé soporte web y Android nativo con un frontend en React + Capacitor con cálculos de P&L, gestión de listas de seguimiento y comparaciones de métricas entre empresas.",
              "Agilicé la entrega configurando pipelines de CI/CD en GitHub Actions con pruebas unitarias, de integración y E2E con Cypress."
            ],

            project_2_name: "Snippet Searcher",
            project_2_stack: "Kotlin, TypeScript, Spring Boot, React, PostgreSQL, Redis, Docker, Azure",
            project_2_date: "Ago. 2025 - Dic. 2025",
            project_2_bullets: [
              "Lideré el desarrollo de una plataforma de gestión y distribución de snippets de código sobre una arquitectura de 4 microservicios, impulsada por una toolchain de lenguaje propia para un subconjunto de TypeScript.",
              "Implementé el pipeline central del lenguaje construyendo desde cero el lexer, el parser, el intérprete y el formateador.",
              "Validé la toolchain del lenguaje contra un TCK externo, aprobando los 49 escenarios con un límite de heap de 7MB.",
              "Mejoré la capacidad de respuesta delegando tareas de larga duración a comunicación asincrónica entre servicios mediante Redis."
            ],

            project_3_name: "PrintScript",
            project_3_stack: "Kotlin, Clikt",
            project_3_date: "Ago. 2025 - Nov. 2025",
            project_3_bullets: [
              "Desarrollé una librería pública de herramientas de lenguaje para un subconjunto de TypeScript implementando intérprete, formateador y linter.",
              "Agilicé el uso de herramientas construyendo una CLI con la librería Clikt.",
              "Reforcé la independencia de módulos configurando un build multi-proyecto en Gradle con convenciones compartidas para linting, formateo y cobertura de código.",
              "Automaticé la publicación de paquetes versionados configurando pipelines de CI/CD en GitHub Actions hacia el registro de Apache Maven.",
              "Verifiqué el cumplimiento de la librería mediante una suite TCK con restricciones de memoria y tiempo de ejecución."
            ],

            project_4_name: "Sonora",
            project_4_stack: "TypeScript, Tailwind CSS, React, Nest JS, PostgreSQL",
            project_4_date: "Ago. 2025 - Nov. 2025",
            project_4_bullets: [
              "Colaboré desarrollando una aplicación web para explorar y reseñar contenido musical.",
              "Implementé funciones de descubrimiento musical integrando la API de Spotify para importar artistas, álbumes y canciones con metadatos y previews de audio.",
              "Facilité la discoverabilidad de la API documentando todos los endpoints con Swagger y anotaciones OpenAPI.",
              "Potencié la interacción social implementando seguimientos, reseñas, reacciones y una cola de escucha pendiente."
            ],

            project_5_name: "Motor de Ajedrez y Damas",
            project_5_stack: "Java",
            project_5_date: "Jun. 2025 - Jul. 2025",
            project_5_bullets: [
              "Diseñé un motor de juego reutilizable usando una arquitectura Entity Component System para compartir lógica entre ajedrez, damas y sus variantes.",
              "Validé más de 33 reglas de juego implementando un ejecutor de tests dinámico e integrando una suite de tests de terceros que cubre movimientos, capturas, jaque, enroque y jaque mate.",
              "Conecté el motor a una interfaz JavaFX para ofrecer una experiencia de juego completa en ajedrez y damas."
            ],

            project_6_name: "Agent Orchestra",
            project_6_stack: "Python, OpenAI API, ChromaDB, Langfuse",
            project_6_date: "Abr. 2026 - Jul. 2026",
            project_6_bullets: [
              "Co-construí un asistente de código multi-agente con un orquestador, 5 sub-agentes especializados y 9 tools",
              "Garanticé una ejecución segura y reanudable diseñando un dispatcher de tools con permisos y un sistema de memoria de 3 niveles",
              "Fundamenté las respuestas en documentación oficial construyendo un pipeline RAG sobre 28 documentos en ChromaDB",
              "Logré un 99.3% de ejecución sin errores en 280 spans instrumentados, monitoreando costo, uso de tokens y calidad de recuperación en Langfuse"
            ],

            achievements_title: "LOGROS",
            achievements_desc: "Intentalo todo. Si el objetivo es vivir la experiencia, siempre vas a ganar.",
            achievement_details_label: "Detalles",
            achievement_1_name: "Scout",
            achievement_1_label: "Competencia de IA",
            achievement_1_date: "Jun. 2026",
            achievement_1_place: "1er Puesto",
            achievement_1_note: "Me gané una camiseta de Messi :)",
            achievement_1_bullets: [
              "Colaboré desarrollando una aplicación web que clasificó los 72 partidos del grupo del Mundial FIFA 2026 en tres niveles de interés según preferencias y disponibilidad horaria del usuario.",
              "Eliminé la necesidad de datos históricos diseñando un sistema de elicitación bayesiana que estima funciones de utilidad individuales mediante cuestionarios adaptativos.",
              "Mejoré la precisión de recomendaciones implementando un filtro de Kalman que atribuye el feedback del usuario a características individuales de cada partido.",
              "Reduje la fricción inicial procesando descripciones en lenguaje natural con la API de OpenAI para derivar priors bayesianos y generar explicaciones personalizadas.",
              "Simplifiqué la planificación permitiendo agregar partidos recomendados al calendario personal mediante la API de Google Calendar."
            ],

            skills_title: "HABILIDADES TÉCNICAS",
            skills_languages_label: "Lenguajes de Programación",
            skills_languages: "Kotlin, Java, TypeScript, Python, SQL, HTML/CSS",
            skills_ai_label: "IA/ML",
            skills_ai: "Claude API, OpenAI API, ElevenLabs, Langfuse, Braintrust",
            skills_frameworks_label: "Frameworks & Librerías",
            skills_frameworks: "Spring Boot, Nest JS, Express, Prisma, React, Next.js, Tailwind CSS",
            skills_cloud_label: "Cloud & DevOps",
            skills_cloud: "Azure, Vercel, Railway, Docker, GitHub Actions",
            skills_databases_label: "Bases de Datos",
            skills_databases: "PostgreSQL, Supabase, Redis",
            skills_tools_label: "Herramientas",
            skills_tools: "Git/GitHub, Claude Code, Codex",
            skills_spoken_languages_label: "Idiomas",
            skills_spoken_languages: "Español (Nativo), Inglés (Fluido/Profesional)",

            github_contrib: "CONTRIBUCIONES DEL ÚLTIMO AÑO",
            github_view: "Ver perfil",

            socials_title: "REDES",

            download: "Descargar",

            contact_title: "CONTACTO",
            contact_desc: "Una de las cosas más importantes que aprendí en los últimos años: las personas a las que podés llegar simplemente mandándoles un mail realmente te sorprenderían.",
            contact_your_email: "Tu email",
            contact_say_hi: "Escribime…",
            contact_send: "Enviar",
            name: "Julián Ritondale",
            phone: "+54 11-2160-4006",
            email: "julianritondale@gmail.com",
            linkedin: "linkedin.com/in/julianritondale",
            website: "julian-ritondale.github.io"
          }
        }
      }
    }
  });

export default i18n;
