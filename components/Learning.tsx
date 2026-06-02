'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, TrendingUp } from 'lucide-react';

const REFLECTIONS = [
  {
    title: 'From CRUD to System Design',
    content:
      "Early in my backend journey, I thought building APIs meant writing route handlers and hitting a database. The HNG projects forced a mindset shift. By Stage 3, I was thinking about authentication architecture, not just authentication. By Stage 5, I was thinking about service boundaries, transaction scopes, and failure modes. The difference between a CRUD app and a production system isn't the language — it's the thinking behind it.",
  },
  {
    title: 'Learning OAuth and PKCE',
    content:
      'OAuth 2.0 was one of the most humbling things I studied. The flow seemed simple on paper — redirect, code, token — until I tried implementing PKCE for a CLI client. There\'s no browser in a CLI. The PKCE extension exists specifically for this case, and understanding why it was designed that way (preventing authorization code interception) made the implementation click. It\'s one of the moments where security stopped feeling like a checklist and started feeling like engineering.',
  },
  {
    title: 'Role-Based Access Control',
    content:
      'RBAC taught me that permissions are a data model problem before they\'re a code problem. I initially wrote permission checks scattered across handlers. After refactoring Insighta\'s access control into a centralized middleware with role hierarchies, the code became significantly easier to reason about and extend. The lesson: authorization logic lives in one place and propagates — not the other way around.',
  },
  {
    title: 'PostgreSQL and Database Design',
    content:
      'I went from treating databases as "where data goes" to understanding them as the core of the system. Query optimization, proper indexing, transaction isolation, and schema normalization aren\'t optional — they\'re the foundation that determines whether a system is reliable under load. The Profile Intelligence API\'s natural language search was only possible because I had designed the schema and indexes before writing a single query.',
  },
  {
    title: 'External Service Integration',
    content:
      'Integrating Zoom, Firebase, and GitHub OAuth taught me that every external service is a potential failure point. You design around it: validate before calling, handle timeouts explicitly, and think carefully about what happens if the external call fails mid-transaction. The Personal Trainer Backend\'s booking flow was designed specifically so that a Zoom API timeout doesn\'t leave the database in an inconsistent state.',
  },
  {
    title: 'Debugging and Troubleshooting',
    content:
      "Production systems fail in ways that local development never reveals. I\'ve learned to write backend code that is observable — logging at the right level, returning meaningful error responses, and thinking about what information I\'d want when something breaks at 2am. Good error messages and structured logs aren\'t nice-to-haves; they\'re how you debug production systems.",
  },
];

export default function Learning() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="reflection" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-[var(--card-border)]" />
            <span className="text-xs font-code text-[var(--accent)] uppercase tracking-widest">
              Reflection
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            What I Learned{' '}
            <span className="heading-gradient">Building These Systems</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl">
            An honest account of the technical and engineering lessons that came out of building five progressively complex backend systems.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12 p-6 rounded-xl border-l-4 border-[var(--accent)] bg-[var(--accent)]/5"
        >
          <div className="flex items-start gap-4">
            <BookOpen size={20} className="text-[var(--accent)] mt-1 shrink-0" />
            <p className="text-[var(--foreground)] text-lg leading-relaxed italic">
              "The goal wasn't to complete five stages. It was to understand — deeply — why production systems are built the way they are."
            </p>
          </div>
        </motion.div>

        {/* Reflection cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {REFLECTIONS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] transition-all duration-300 hover:border-[var(--accent)]/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                  <TrendingUp size={16} className="text-[var(--accent)]" />
                </div>
                <h3 className="font-semibold text-[var(--foreground)]">{item.title}</h3>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>

        {/* What's next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="p-8 rounded-2xl border border-[var(--accent)]/20 bg-gradient-to-br from-[var(--accent)]/8 to-violet-500/5"
        >
          <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">Where I'm Headed</h3>
          <p className="text-[var(--muted)] leading-relaxed max-w-3xl">
            I'm continuing to deepen my backend engineering skills — exploring distributed systems concepts,
            event-driven architectures, and data engineering pipelines. My goal is to work on backend systems
            that handle meaningful scale, where the engineering decisions have real consequences and the
            architecture choices matter. I'm looking for a team where I can contribute real engineering
            work, learn from experienced engineers, and grow into a well-rounded systems engineer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
