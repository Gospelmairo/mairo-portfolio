'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { useTheme } from '@/app/providers';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Deep Dive', href: '#featured' },
  { label: 'Reflection', href: '#reflection' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--background)]/90 backdrop-blur-xl border-b border-[var(--card-border)] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
            <Terminal size={16} className="text-white" />
          </div>
          <span className="font-semibold text-[var(--foreground)] font-code text-sm">
            mg<span className="text-[var(--accent)]">.dev</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`nav-link px-3 py-2 text-sm rounded-md transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--muted)] hover:text-[var(--foreground)]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card-border)]/40 transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="https://github.com/Gospelmairo"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--card-border)] text-sm text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            GitHub
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[var(--muted)]"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[var(--card-border)] bg-[var(--background)]/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-3 py-3 text-sm text-[var(--muted)] hover:text-[var(--foreground)] rounded-lg hover:bg-[var(--card-border)]/20 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://github.com/Gospelmairo"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-3 py-3 text-sm text-[var(--accent)] border border-[var(--card-border)] rounded-lg text-center"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
