'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const LINKS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gospelmairo@gmail.com',
    href: 'mailto:gospelmairo@gmail.com',
    display: 'gospelmairo@gmail.com',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/Gospelmairo',
    href: 'https://github.com/Gospelmairo',
    display: 'github.com/Gospelmairo',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/oghenemairo-gospel/',
    display: 'linkedin.com/in/oghenemairo-gospel',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-24 px-6 bg-[var(--card)]/30">
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
              06 / Contact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Let's{' '}
            <span className="heading-gradient">Build Something</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl leading-relaxed">
            Interested in backend engineering, scalable systems, API development, or cloud infrastructure?
            I'm open to full-time roles, contract work, and collaboration on interesting engineering problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-5 rounded-xl border border-[var(--card-border)] bg-[var(--card)] hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/5 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--accent)]/20 transition-colors">
                  <link.icon size={20} className="text-[var(--accent)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[var(--muted)] mb-0.5">{link.label}</p>
                  <p className="text-sm font-medium text-[var(--foreground)] truncate">{link.display}</p>
                </div>
                <ArrowRight size={16} className="text-[var(--muted)] group-hover:text-[var(--accent)] shrink-0 transition-colors" />
              </motion.a>
            ))}

            {/* Location */}
            <div className="flex items-center gap-3 px-5 py-3 text-sm text-[var(--muted)]">
              <MapPin size={16} className="text-[var(--accent)] shrink-0" />
              Lagos, Nigeria — Open to remote opportunities worldwide
            </div>
          </motion.div>

          {/* Right panel - what I'm looking for */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="terminal-border"
          >
            <div className="terminal-bar">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-2 text-xs text-[var(--muted)] font-code">availability.json</span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-code text-[var(--muted)] mb-2">// Current status</p>
                <p className="font-code text-sm">
                  <span className="text-[var(--accent)]">status</span>
                  <span className="text-[var(--muted)]">: </span>
                  <span className="text-emerald-400">"actively looking"</span>
                </p>
              </div>
              <div>
                <p className="text-xs font-code text-[var(--muted)] mb-2">// What I'm looking for</p>
                {[
                  'Backend Engineer or API Engineer roles',
                  'Data Engineering positions',
                  'Systems that handle real scale',
                  'Teams that care about code quality',
                  'Opportunities to learn from senior engineers',
                ].map((item, i) => (
                  <p key={i} className="font-code text-sm text-[var(--muted)] mb-1">
                    <span className="text-[var(--muted)]">{i}: </span>
                    <span className="text-blue-400">"{item}"</span>
                  </p>
                ))}
              </div>
              <div>
                <p className="text-xs font-code text-[var(--muted)] mb-2">// Preferred stack</p>
                <p className="font-code text-sm">
                  <span className="text-[var(--accent)]">stack</span>
                  <span className="text-[var(--muted)]">: </span>
                  <span className="text-orange-400">["Go", "Node.js", "PostgreSQL", "Any"]</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
