export const KNOWLEDGE = `
## Summary
Julian Ritondale is a software engineer based in Buenos Aires, Argentina. He is currently studying Software Engineering with a Minor in Artificial Intelligence at Universidad Austral.

## Contact
- Email: julianritondale@gmail.com
- Phone: +54 11 2160-4006
- LinkedIn: linkedin.com/in/julianritondale
- GitHub: github.com/julian-ritondale

## Education
- Universidad Austral, Buenos Aires, Argentina
- B.S. in Software Engineering with a Minor in Artificial Intelligence
- February 2023 to December 2027 (expected)
- Relevant coursework: Artificial Intelligence, Algorithms & Data Structures, Software Design, Concurrent Programming, Databases, Operating Systems

## Experience

### IntegridAI, Product Engineer (Feb 2026 to present, Buenos Aires)
Stack: TypeScript, NestJS, Next.js, Claude API, ElevenLabs, PostgreSQL, Docker, Supabase, Vercel.
- Owns product for a 5-person team building a compliance management platform that helps SMEs meet Argentina's anti-corruption law requirements.
- Ran 8 validation sessions with 5 stakeholders, using AI tools to prototype rapidly and confirm 20+ features that shaped the backlog and roadmap.
- Shipped real-time voice simulations for compliance training end to end by integrating ElevenLabs Agents for live voice conversations and the Claude API as an LLM-as-evaluator.
- Cut token usage by 8.1% and cost by 14.6% on production models while maintaining evaluation quality by benchmarking 6 LLMs in Braintrust.

## Projects

### Pay and Pray (May 2026 to Jun 2026)
Stack: Kotlin, TypeScript, Spring Boot, React, PostgreSQL, Docker.
GitHub: github.com/RugPull-Inc/pay-and-pray
- Collaborated on a portfolio tracker, integrating the SEC EDGAR API to surface financial metrics and official 10-K/10-Q filings for US-listed companies.
- Built a React + Capacitor frontend supporting web and native Android usage, with portfolio P&L calculations, watchlist management, and side-by-side company metric comparisons.
- Set up GitHub Actions CI/CD pipelines running unit, integration, and Cypress E2E tests to streamline delivery.

### Agent Orchestra (Apr 2026 to Jul 2026)
Stack: Python, OpenAI API, ChromaDB, Langfuse.
GitHub: github.com/DecoudJuan/Agent-Orchestra
- Co-built a multi-agent coding assistant with an orchestrator, 5 specialized sub-agents, and 9 tools.
- Enforced safe, resumable execution by designing a permissioned tool dispatcher and a 3-tier memory system.
- Grounded responses in official documentation by building a RAG pipeline over 28 documents in ChromaDB.
- Achieved 99.3% error-free execution across 280 instrumented spans by tracking cost, token usage, and retrieval quality in Langfuse.

### Snippet Searcher (Aug 2025 to Dec 2025)
Stack: Kotlin, TypeScript, Spring Boot, React, PostgreSQL, Redis, Docker, Azure.
GitHub (Toolchain): github.com/IngSisTeam3-2025/printscript
- Led development of a code snippet management and sharing platform on a 4-microservice architecture, powered by a custom language toolchain for a TypeScript subset.
- Implemented the core language pipeline by building the lexer, parser, interpreter, and formatter from scratch.
- Validated the language toolchain against an external TCK, passing all 49 scenarios under a 7MB heap limit.
- Improved responsiveness by offloading time-intensive tasks to asynchronous inter-service communication using Redis.

### Sonora (Aug 2025 to Nov 2025)
Stack: TypeScript, React, Tailwind CSS, NestJS, Prisma, PostgreSQL, Docker, Azure.
GitHub (Frontend): github.com/julian-ritondale/sonora-ui
GitHub (Backend): github.com/julian-ritondale/sonora-back
- Co-developed a music social web app for browsing and reviewing albums, artists, and tracks.
- Enabled music discovery across Spotify's 100M+ track catalog by integrating the Spotify API to import artist, album, and track metadata along with 30-second audio previews.
- Delivered core social features end to end, including album and track reviews, review reactions, and user profiles.

## Achievements

### 1st Place, "Your Time, Your World Cup" AI Competition (Jun 2026)
Stack: TypeScript, React, Express, OpenAI, Google Calendar, Railway.
GitHub: github.com/scout-austral/scout-austral.github.io
- Co-developed Scout Austral, a web app that classifies all 72 FIFA World Cup 2026 group-stage matches into interest levels based on user preferences and schedule availability.
- Streamlined onboarding by deriving Bayesian priors from natural language descriptions using the OpenAI API.
- Simplified match planning by syncing recommended matches to users' calendars using the Google Calendar API.

## Skills
- Product: Agile Methodologies, Project Management, Prototyping, Client Interactions
- Programming languages: Kotlin, Java, TypeScript, JavaScript, Python, SQL, HTML/CSS
- Frameworks and libraries: Spring Boot, NestJS, Express, Prisma, React, Next.js, Tailwind CSS
- Databases: PostgreSQL, Supabase, Redis
- Cloud and DevOps: Azure, Vercel, Railway, Docker, GitHub Actions
- AI/ML: Claude API, OpenAI API, ElevenLabs, Langfuse, Braintrust
- Tools: Git/GitHub, Claude Code, Codex
`