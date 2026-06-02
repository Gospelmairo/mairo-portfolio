'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, Star, ChevronDown, ChevronUp,
  CheckCircle, GitBranch, Cpu
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { PROJECTS, Project, TIMELINE } from '@/lib/data';

const ALL_TECHS = ['All', 'Node.js', 'Go', 'PostgreSQL', 'Docker', 'OAuth', 'JWT', 'Redis', 'Observability'];

const TECH_COLORS: Record<string, string> = {
  'Node.js': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Go': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'PostgreSQL': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Express': 'bg-gray-500/10 text-gray-400 border-gray-500/20',
  'SQLite': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Docker': 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  'JWT': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'OAuth': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  'Redis': 'bg-red-500/10 text-red-400 border-red-500/20',
  'Firebase': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Zoom API': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'MinIO': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Gin': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  'OpenAPI': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  'Vercel': 'bg-white/10 text-slate-300 border-white/20',
  'GitHub OAuth': 'bg-gray-500/10 text-gray-400 border-gray-500/20',
};

function TechBadge({ tech }: { tech: string }) {
  const cls = TECH_COLORS[tech] ?? 'bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/20';
  return (
    <span className={`px-2 py-0.5 rounded-md border text-xs font-code ${cls}`}>{tech}</span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl border bg-[var(--card)] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[var(--accent)]/5 ${
        project.featured
          ? 'border-[var(--accent)]/40 shadow-[0_0_30px_var(--accent-glow)]'
          : 'border-[var(--card-border)]'
      }`}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent)] text-white text-xs font-semibold">
          <Star size={12} />
          Featured
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <span className="text-xs font-code text-[var(--muted)] mb-1 block">{project.timeline}</span>
              <h3 className={`text-xl font-bold ${project.featured ? 'text-[var(--accent)]' : 'text-[var(--foreground)]'}`}>
                {project.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0 mt-6">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all">
                  <ExternalLink size={16} />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all">
                  <GithubIcon width={16} height={16} />
                </a>
              )}
            </div>
          </div>

          <p className="text-[var(--muted)] text-sm leading-relaxed">{project.overview}</p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => <TechBadge key={t} tech={t} />)}
        </div>

        {/* Highlight */}
        {project.highlight && (
          <div className="mb-4 p-3 rounded-lg bg-[var(--accent)]/8 border border-[var(--accent)]/20">
            <p className="text-xs text-[var(--accent)] font-code leading-relaxed">
              ★ {project.highlight}
            </p>
          </div>
        )}

        {/* Toggle expand */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors mt-2"
        >
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          {expanded ? 'Less detail' : 'More detail'}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                {/* Problem */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-2">Problem Solved</h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{project.problem}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-2 flex items-center gap-2">
                    <CheckCircle size={12} className="text-[var(--accent)]" />
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((f) => (
                      <li key={f} className="text-sm text-[var(--muted)] flex items-start gap-2">
                        <span className="text-[var(--accent)] mt-0.5 shrink-0">→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-2 flex items-center gap-2">
                    <GitBranch size={12} className="text-[var(--accent)]" />
                    Architecture Highlights
                  </h4>
                  <ul className="space-y-1">
                    {project.architecture.map((a) => (
                      <li key={a} className="text-sm text-[var(--muted)] flex items-start gap-2">
                        <span className="text-[var(--accent)] mt-0.5 shrink-0">◆</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* My Contribution */}
                <div className="p-4 rounded-lg bg-[var(--card-border)]/30 border border-[var(--card-border)]">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-2 flex items-center gap-2">
                    <Cpu size={12} className="text-[var(--accent)]" />
                    My Contribution
                  </h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{project.contribution}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--card-border)] to-transparent" />
      <div className="space-y-6 pl-12">
        {TIMELINE.map((item, i) => (
          <motion.div
            key={item.stage}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--background)] ring-2 ring-[var(--accent)]/30" />
            <span className="text-xs font-code text-[var(--accent)] mb-1 block">{item.stage}</span>
            <p className="font-semibold text-[var(--foreground)] text-sm">{item.project}</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {item.tech.map((t) => (
                <span key={t} className="text-xs text-[var(--muted)] bg-[var(--card-border)]/40 px-1.5 py-0.5 rounded font-code">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const filtered = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.tech.some((t) => t.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section id="projects" className="py-24 px-6 bg-[var(--card)]/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-[var(--card-border)]" />
            <span className="text-xs font-code text-[var(--accent)] uppercase tracking-widest">
              Projects
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            HNG Internship{' '}
            <span className="heading-gradient">Projects</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl">
            Five backend projects built during the HNG internship, each addressing a real engineering problem with increasing complexity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar: timeline + filter */}
          <div className="lg:col-span-1 space-y-8">
            {/* Filter */}
            <div className="terminal-border p-4">
              <div className="terminal-bar mb-4">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-xs text-[var(--muted)] font-code">filter.sh</span>
              </div>
              <p className="text-xs text-[var(--muted)] mb-3 font-code">$ filter_by --tech</p>
              <div className="flex flex-col gap-1">
                {ALL_TECHS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilter(t)}
                    className={`text-left px-3 py-2 rounded-lg text-sm transition-all font-code ${
                      filter === t
                        ? 'bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30'
                        : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card-border)]/20'
                    }`}
                  >
                    {t === 'All' ? '* All' : `> ${t}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xs font-code uppercase tracking-widest text-[var(--muted)] mb-4">
                Project Timeline
              </h3>
              <Timeline />
            </div>
          </div>

          {/* Project cards */}
          <div className="lg:col-span-3 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {filtered.length > 0 ? (
                  filtered.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                  ))
                ) : (
                  <div className="text-center py-16 text-[var(--muted)]">
                    <p className="font-code">No projects match this filter.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
