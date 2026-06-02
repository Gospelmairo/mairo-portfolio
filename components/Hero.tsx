'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail, MapPin, Server } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { useEffect, useState } from 'react';
import { HERO } from '@/lib/data';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
}

const TYPING_PHRASES = [
  'Backend Engineer',
  'API Architect',
  'Data Engineer',
  'System Designer',
];

function TypingEffect() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPING_PHRASES[phraseIdx];
    const delay = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < phrase.length) {
          setDisplayed(phrase.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % TYPING_PHRASES.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayed, deleting, phraseIdx]);

  return (
    <span className="text-[var(--accent)]">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-pattern">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent)]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/6 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Location badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--card-border)] bg-[var(--card)] text-xs text-[var(--muted)]">
              <MapPin size={12} className="text-[var(--accent)]" />
              {HERO.location}
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-[var(--foreground)] leading-tight mb-4"
          >
            {HERO.name.split(' ')[0]}{' '}
            <span className="heading-gradient">{HERO.name.split(' ')[1]}</span>
          </motion.h1>

          {/* Typing title */}
          <motion.div variants={itemVariants} className="text-xl md:text-2xl font-medium mb-6 font-code h-9">
            <TypingEffect />
          </motion.div>

          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className="text-[var(--muted)] text-base md:text-lg leading-relaxed max-w-2xl mb-10"
          >
            {HERO.intro}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={scrollToProjects}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-[var(--accent)]/20"
            >
              <Server size={18} />
              View Projects
            </button>
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--card)] text-[var(--foreground)] font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              <Mail size={18} />
              Contact Me
            </button>
            <a
              href={HERO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--card)] text-[var(--foreground)] font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              <GithubIcon width={18} height={18} />
              GitHub
            </a>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { num: 6, suffix: "+", label: "Backend Systems Built" },
              { num: 60, suffix: "+", label: "API Endpoints Implemented" },
              { num: 3, suffix: "", label: "OAuth, JWT & RBAC Security Systems" },
              { num: 5, suffix: "", label: "PostgreSQL, Redis & Observability Exp." },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="terminal-border p-4"
              >
                <div className="text-2xl font-bold text-[var(--accent)] font-code mb-1">
                  <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-[var(--muted)]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted)]"
        >
          <span className="text-xs">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
