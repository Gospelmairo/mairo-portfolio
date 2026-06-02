export const HERO = {
  name: "Mairo Gospel",
  title: "Backend Engineer | Data Engineer",
  location: "Lagos, Nigeria",
  tagline: "Building scalable APIs, secure backend systems, cloud-native applications, and production-ready services.",
  intro:
    "I am a backend engineer with a strong data engineering background, specializing in designing scalable APIs, secure authentication systems, cloud-native applications, and production-ready backend services. I enjoy building systems that are reliable, maintainable, and capable of supporting real-world business operations.",
  stats: [
    { value: "5+", label: "Production Backend Projects" },
    { value: "50+", label: "API Endpoints Built" },
    { value: "OAuth + JWT + RBAC", label: "Auth Implementations" },
    { value: "PostgreSQL · Redis · Cloud", label: "Infrastructure Experience" },
  ],
  github: "https://github.com/Gospelmairo",
};

export type Project = {
  id: string;
  name: string;
  featured?: boolean;
  liveUrl?: string;
  github?: string;
  overview: string;
  problem: string;
  features: string[];
  tech: string[];
  architecture: string[];
  contribution: string;
  highlight?: string;
  timeline?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "profile-api",
    name: "Profile API",
    github: "https://github.com/Gospelmairo",
    overview:
      "A REST API that aggregates demographic intelligence from multiple external services and persists the results.",
    problem:
      "Users needed a single endpoint capable of combining age, gender, and nationality predictions from multiple providers.",
    features: [
      "Parallel API requests to external services",
      "Data aggregation and normalization",
      "Idempotent API behavior",
      "SQLite and PostgreSQL support",
      "Validation and error handling",
      "Persistent storage layer",
    ],
    tech: ["Node.js", "Express", "SQLite", "PostgreSQL"],
    architecture: [
      "External API integration with concurrent service calls",
      "Data normalization pipeline",
      "Dual database persistence layer",
    ],
    contribution:
      "Designed and built the complete API, integrated multiple external demographic services, implemented idempotent request handling, validation logic, and database persistence.",
    timeline: "HNG Stage 1",
  },
  {
    id: "profile-intelligence",
    name: "Profile Intelligence API",
    github: "https://github.com/Gospelmairo",
    overview:
      "A demographic intelligence query engine supporting advanced filtering, sorting, pagination, and natural language search.",
    problem:
      "Enabled users to query demographic profiles using both structured filters and human-readable search phrases.",
    features: [
      "Natural language query parsing",
      "Advanced filtering and sorting",
      "Cursor-based pagination",
      "Full-text search engine functionality",
      "Profile management APIs (CRUD)",
      "Dynamic query generation",
    ],
    tech: ["Node.js", "Express", "PostgreSQL"],
    architecture: [
      "Rule-based natural language query parser",
      "Dynamic SQL query generation",
      "Database indexing for search optimization",
    ],
    contribution:
      'Designed the search engine, built the natural language parser, implemented filtering, pagination, sorting, and profile management endpoints. Example: "young males from nigeria" resolves to gender=male, age=16–24, country=NG.',
    highlight:
      '"young males from nigeria" → gender=male, age=16–24, country=NG',
    timeline: "HNG Stage 2",
  },
  {
    id: "insighta-backend",
    name: "Insighta Backend",
    liveUrl: "https://insighta-backend-ten.vercel.app",
    github: "https://github.com/Gospelmairo",
    overview:
      "A secure demographic intelligence platform with authentication, OAuth integration, session management, CSV export, and rate limiting.",
    problem:
      "Provided secure access to demographic intelligence data through both web and CLI clients with different authentication flows.",
    features: [
      "GitHub OAuth with PKCE for CLI",
      "JWT authentication with refresh token rotation",
      "Role-Based Access Control (RBAC)",
      "Cookie-based session management for web",
      "CSV data export",
      "API versioning",
      "Rate limiting",
      "Request logging",
    ],
    tech: ["Node.js", "PostgreSQL", "GitHub OAuth", "JWT", "Vercel"],
    architecture: [
      "PKCE OAuth flow for CLI authentication",
      "Dual-client architecture (web + CLI)",
      "Token rotation with secure refresh logic",
    ],
    contribution:
      "Built the complete authentication architecture, OAuth integration, role enforcement system, token rotation logic, CSV export functionality, logging, and rate limiting.",
    highlight:
      "Implemented PKCE OAuth flow for CLI authentication — a security pattern used in production-grade systems.",
    timeline: "HNG Stage 3",
  },
  {
    id: "trainer-onboarding",
    name: "Trainer Onboarding API",
    github: "https://github.com/Gospelmairo",
    overview:
      "Backend onboarding workflow for a fitness platform that automatically tracks trainer onboarding progress.",
    problem:
      "Ensured trainer profiles are completed before appearing in public discovery, preventing incomplete profiles from polluting search results.",
    features: [
      "Trainer registration and profile management",
      "API key authentication",
      "Automated onboarding state machine",
      "State transitions: pending → in_progress → complete",
      "Discovery filtering (only complete profiles shown)",
    ],
    tech: ["Go", "PostgreSQL", "Docker"],
    architecture: [
      "Finite state machine for onboarding flow",
      "Profile validation at each state transition",
      "Containerized deployment with Docker",
    ],
    contribution:
      "Implemented onboarding automation, profile validation logic, API key authentication, and state transition management.",
    timeline: "HNG Stage 4",
  },
  {
    id: "personal-trainer-be",
    name: "Personal Trainer Backend",
    featured: true,
    github: "https://github.com/Gospelmairo",
    overview:
      "A production-grade backend service powering a full-featured fitness training platform with trainer management, session booking, subscriptions, and notifications.",
    problem:
      "Fitness platforms require trainer onboarding, client management, bookings, subscriptions, notifications, authentication, and admin operations to work together reliably at scale.",
    features: [
      "Trainer and client management",
      "Session booking with Zoom integration",
      "Subscription plans and credit management",
      "Admin dashboard APIs",
      "Push notifications via Firebase",
      "Session reminders and background workers",
      "Role-Based Access Control",
      "Password reset flow",
      "MinIO object storage",
      "Soft delete architecture",
      "OpenAPI documentation",
    ],
    tech: ["Go", "Gin", "PostgreSQL", "Redis", "MinIO", "Firebase", "Zoom API", "JWT", "OpenAPI"],
    architecture: [
      "Stateless API servers for horizontal scaling",
      "Redis for caching and session state",
      "Background workers for notifications and reminders",
      "Transactional database operations for booking consistency",
      "Service-layer separation for maintainability",
    ],
    contribution:
      "Contributed to the architecture and backend implementation handling authentication, booking workflows, notifications, subscriptions, trainer onboarding, and administrative operations.",
    highlight:
      "Production-grade system with 7 integrated external services, background workers, and a complete booking workflow.",
    timeline: "HNG Stage 5 (Featured)",
  },
  {
    id: "logbase",
    name: "Logbase",
    github: "https://github.com/Gospelmairo/logbase",
    overview:
      "A developer-focused observability and logging platform designed to collect, store, search, and analyze structured application logs in real time.",
    problem:
      "Modern applications generate large volumes of logs across multiple services. Developers need a centralized platform to ingest, search, filter, and monitor logs efficiently for debugging, troubleshooting, and operational visibility.",
    features: [
      "Centralized log ingestion pipeline",
      "Structured logging support",
      "Real-time log streaming",
      "Search and filtering by service, level, and timestamp",
      "Multi-service observability",
      "API-based log ingestion",
      "Developer-focused monitoring experience",
      "Scalable log storage architecture",
    ],
    tech: ["REST APIs", "Structured Logging", "Observability Tooling", "Database Storage"],
    architecture: [
      "Log ingestion layer with API-first design",
      "Structured event processing pipeline",
      "Searchable log storage with query engine",
      "Real-time observability workflows",
    ],
    contribution:
      "Designed and implemented backend services for collecting, processing, and storing application logs. Built APIs for ingestion and retrieval, developed search and filtering capabilities, and focused on creating a developer-friendly observability experience.",
    highlight:
      "Demonstrates observability engineering and platform tooling — building developer infrastructure rather than only business-facing applications.",
    timeline: "Side Project",
  },
];

export type Skill = {
  name: string;
  level: number;
  evidence: string[];
};

export type SkillCategory = {
  category: string;
  icon: string;
  skills: Skill[];
};

export const SKILLS: SkillCategory[] = [
  {
    category: "API Design",
    icon: "code",
    skills: [
      { name: "REST APIs", level: 92, evidence: ["Profile API", "Profile Intelligence", "Insighta Backend"] },
      { name: "API Versioning", level: 85, evidence: ["Insighta Backend"] },
      { name: "Pagination & Filtering", level: 90, evidence: ["Profile Intelligence"] },
      { name: "OpenAPI / Documentation", level: 80, evidence: ["Personal Trainer Backend"] },
    ],
  },
  {
    category: "Authentication & Security",
    icon: "shield",
    skills: [
      { name: "JWT & Refresh Tokens", level: 90, evidence: ["Insighta Backend", "Personal Trainer Backend"] },
      { name: "OAuth 2.0 / PKCE", level: 85, evidence: ["Insighta Backend"] },
      { name: "Role-Based Access Control", level: 88, evidence: ["Insighta Backend", "Personal Trainer Backend"] },
      { name: "Secure Cookies & Sessions", level: 82, evidence: ["Insighta Backend"] },
    ],
  },
  {
    category: "Database Engineering",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: 90, evidence: ["All Projects"] },
      { name: "Query Optimization", level: 82, evidence: ["Profile Intelligence"] },
      { name: "Data Modeling", level: 85, evidence: ["All Projects"] },
      { name: "SQLite", level: 78, evidence: ["Profile API"] },
    ],
  },
  {
    category: "Languages & Frameworks",
    icon: "terminal",
    skills: [
      { name: "Node.js / Express", level: 90, evidence: ["Profile API", "Profile Intelligence", "Insighta"] },
      { name: "Go / Gin", level: 82, evidence: ["Trainer Onboarding", "Personal Trainer Backend"] },
      { name: "TypeScript", level: 80, evidence: ["Portfolio", "Various Projects"] },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    icon: "cloud",
    skills: [
      { name: "Docker", level: 82, evidence: ["Trainer Onboarding", "Personal Trainer Backend"] },
      { name: "Redis", level: 80, evidence: ["Personal Trainer Backend"] },
      { name: "Object Storage (MinIO)", level: 78, evidence: ["Personal Trainer Backend"] },
      { name: "Vercel Deployments", level: 85, evidence: ["Insighta Backend"] },
    ],
  },
  {
    category: "Integrations",
    icon: "plug",
    skills: [
      { name: "GitHub OAuth", level: 85, evidence: ["Insighta Backend"] },
      { name: "Zoom API", level: 78, evidence: ["Personal Trainer Backend"] },
      { name: "Firebase (FCM)", level: 78, evidence: ["Personal Trainer Backend"] },
      { name: "External REST APIs", level: 88, evidence: ["Profile API"] },
    ],
  },
  {
    category: "Observability",
    icon: "activity",
    skills: [
      { name: "Structured Logging", level: 82, evidence: ["Logbase"] },
      { name: "Log Search & Filtering", level: 80, evidence: ["Logbase"] },
      { name: "API-first Ingestion", level: 85, evidence: ["Logbase"] },
      { name: "Multi-service Monitoring", level: 78, evidence: ["Logbase"] },
    ],
  },
];

export const TIMELINE = [
  { stage: "Stage 1", project: "Profile API", tech: ["Node.js", "Express", "PostgreSQL"], color: "indigo" },
  { stage: "Stage 2", project: "Profile Intelligence API", tech: ["Node.js", "Express", "PostgreSQL"], color: "violet" },
  { stage: "Stage 3", project: "Insighta Backend", tech: ["Node.js", "JWT", "OAuth", "PostgreSQL"], color: "purple" },
  { stage: "Stage 4", project: "Trainer Onboarding API", tech: ["Go", "PostgreSQL", "Docker"], color: "blue" },
  { stage: "Stage 5", project: "Personal Trainer Backend", tech: ["Go", "Gin", "Redis", "Firebase"], color: "cyan" },
  { stage: "Side Project", project: "Logbase", tech: ["REST APIs", "Observability", "Structured Logging"], color: "emerald" },
];
