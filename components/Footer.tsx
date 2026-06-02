'use client';

import { motion } from "framer-motion";
import { Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--card)] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-[var(--accent)] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[var(--accent)]/30 transition-all">
              <Terminal size={16} className="text-white" />
            </div>
            <div className="text-left">
              <p className="font-bold text-[var(--foreground)] leading-tight">Mairo Gospel</p>
              <p className="text-xs text-[var(--muted)]">Backend Engineer | Data Engineer</p>
            </div>
          </motion.button>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Gospelmairo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
              aria-label="GitHub"
            >
              <GithubIcon width={18} height={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/oghenemairo-gospel/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon width={18} height={18} />
            </a>
            <a
              href="mailto:gospelmairo@gmail.com"
              className="p-2.5 rounded-lg border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[var(--muted)] font-code">
            © {new Date().getFullYear()} Mairo Gospel. Built with Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
