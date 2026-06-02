'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Server, Database, ShieldCheck, Cloud, GitBranch, Zap
} from 'lucide-react';

const TECH_STACK = [
  'Node.js', 'Express', 'Go', 'Gin', 'TypeScript',
  'PostgreSQL', 'Redis', 'SQLite',
  'Docker', 'GitHub Actions', 'Vercel',
  'OAuth 2.0', 'JWT', 'PKCE',
  'REST APIs', 'OpenAPI',
  'AWS', 'MinIO', 'Firebase',
];

const PILLARS = [
  {
    icon: Server,
    title: 'API Architecture',
    desc: 'Designing REST APIs that are versioned, documented, and built to scale — from simple CRUD endpoints to complex query engines with natural language parsing.',
  },
  {
    icon: ShieldCheck,
    title: 'Authentication & Security',
    desc: 'Implementing production-grade auth — JWT, OAuth 2.0 with PKCE, refresh token rotation, role-based access control, and secure session management.',
  },
  {
    icon: Database,
    title: 'Database Engineering',
    desc: 'Designing normalized schemas, writing optimized queries, and building persistence layers with PostgreSQL, Redis caching, and object storage.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Deployment',
    desc: 'Containerizing services with Docker, deploying to cloud platforms, and managing environment configuration for production reliability.',
  },
  {
    icon: GitBranch,
    title: 'Third-Party Integrations',
    desc: 'Integrating external services — GitHub OAuth, Zoom API, Firebase FCM, and demographic data providers — into cohesive backend workflows.',
  },
  {
    icon: Zap,
    title: 'Background Processing',
    desc: 'Building notification workers, scheduled reminders, and async jobs that run independently of request cycles to support real-world business operations.',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-[var(--card-border)]" />
            <span className="text-xs font-code text-[var(--accent)] uppercase tracking-widest">
              About
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Engineering systems that{' '}
            <span className="heading-gradient">work at scale</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl leading-relaxed">
            I'm a backend engineer who enjoys building the invisible infrastructure that
            makes products reliable. My focus is writing backend code that other engineers
            can read, reason about, and extend — systems that handle real users and real
            data without falling over.
          </p>
        </motion.div>

        {/* Bio + Stack */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-4 text-[var(--muted)] leading-relaxed"
          >
            <p>
              My backend engineering journey started with building REST APIs and quickly
              evolved into learning the harder parts: authentication architecture, database
              design, service integration, and production deployment.
            </p>
            <p>
              Through the HNG internship, I built five progressively complex backend
              systems — starting from a simple data aggregation API and ending with a
              production-grade fitness platform using Go, PostgreSQL, Redis, Firebase,
              MinIO, and Zoom. Each project added a new layer of engineering depth.
            </p>
            <p>
              I pay particular attention to authentication and security. I've implemented
              OAuth 2.0 with PKCE for CLI clients, JWT with refresh token rotation,
              role-based access control, and secure cookie sessions — patterns I've studied
              and applied in real production-facing systems.
            </p>
            <p>
              Beyond the code, I'm interested in data engineering and how backend systems
              can serve analytics workloads — understanding data pipelines, query
              optimization, and how storage decisions affect system performance over time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="terminal-border p-6">
              <div className="terminal-bar mb-4">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-xs text-[var(--muted)] font-code">tech_stack.json</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs text-[var(--accent)] font-code"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Capability pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              whileHover={{ y: -4, borderColor: 'var(--accent)' }}
              className="p-6 rounded-xl border border-[var(--card-border)] bg-[var(--card)] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--accent)]/20 transition-colors">
                <pillar.icon size={20} className="text-[var(--accent)]" />
              </div>
              <h3 className="font-semibold text-[var(--foreground)] mb-2">{pillar.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
