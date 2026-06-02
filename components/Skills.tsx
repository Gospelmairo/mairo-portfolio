'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, ShieldCheck, Database, Terminal, Cloud, Plug, Activity } from "lucide-react";
import { SKILLS } from '@/lib/data';

const ICONS: Record<string, React.ElementType> = {
  code: Code,
  shield: ShieldCheck,
  database: Database,
  terminal: Terminal,
  cloud: Cloud,
  plug: Plug,
  activity: Activity,
};

function SkillBar({ name, level, evidence, delay }: { name: string; level: number; evidence: string[]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-[var(--foreground)] font-medium">{name}</span>
        <span className="text-xs text-[var(--accent)] font-code">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--card-border)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-violet-400"
        />
      </div>
      <div className="flex flex-wrap gap-1">
        {evidence.map((e) => (
          <span key={e} className="text-xs text-[var(--muted)] font-code">
            {e !== evidence[evidence.length - 1] ? `${e} ·` : e}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 px-6">
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
              03 / Skills
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Backend Engineering{' '}
            <span className="heading-gradient">Skill Matrix</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl">
            Every skill is grounded in a real project. No theoretical listings — each one was applied in a working system.
          </p>
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, catIdx) => {
            const Icon = ICONS[category.icon] ?? Code;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] space-y-5 hover:border-[var(--accent)]/40 transition-all duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="font-semibold text-[var(--foreground)]">{category.category}</h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      evidence={skill.evidence}
                      delay={catIdx * 0.1 + skillIdx * 0.08}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom: key achievement callouts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid sm:grid-cols-3 gap-4"
        >
          {[
            {
              label: 'PKCE OAuth for CLI',
              desc: 'Implemented the PKCE extension of OAuth 2.0 for a command-line client — a production security pattern.',
              tag: 'Security',
            },
            {
              label: 'Natural Language Query Parser',
              desc: 'Built a rule-based NLP query engine that converts human phrases into structured database queries.',
              tag: 'API Design',
            },
            {
              label: 'Booking Consistency',
              desc: 'Designed transactional flows that keep session bookings, subscriptions, and notifications consistent.',
              tag: 'Architecture',
            },
          ].map((item) => (
            <div
              key={item.label}
              className="p-5 rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/5"
            >
              <span className="text-xs text-[var(--accent)] font-code mb-2 block">{item.tag}</span>
              <h4 className="font-semibold text-[var(--foreground)] mb-2">{item.label}</h4>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
