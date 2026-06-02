'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Shield, Database, Bell, Layers, Zap } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';


const REQUEST_FLOW = [
  { step: '1', action: 'Client sends POST /bookings', detail: 'With Bearer JWT token in Authorization header' },
  { step: '2', action: 'Auth Middleware validates JWT', detail: 'Checks token signature, expiry, and user role' },
  { step: '3', action: 'Booking Service validates credits', detail: 'Queries subscription table, checks available sessions' },
  { step: '4', action: 'Session record created in DB', detail: 'PostgreSQL transaction begins, booking inserted' },
  { step: '5', action: 'Zoom meeting generated', detail: 'External API call to create meeting link for session' },
  { step: '6', action: 'Database updated atomically', detail: 'Credits decremented, session URL stored, commit' },
  { step: '7', action: 'Notification dispatched', detail: 'Firebase FCM push to trainer and client devices' },
  { step: '8', action: 'Booking confirmation returned', detail: '201 response with session details and Zoom link' },
];

const SERVICES = [
  { name: 'Trainer Service', icon: Layers, desc: 'Onboarding, profiles, availability' },
  { name: 'Booking Service', icon: Database, desc: 'Session scheduling, credit management' },
  { name: 'Session Service', icon: Zap, desc: 'Zoom integration, status tracking' },
  { name: 'Notification Service', icon: Bell, desc: 'Firebase FCM, reminders, alerts' },
  { name: 'Auth Service', icon: Shield, desc: 'JWT, RBAC, password reset' },
];

const SUPPORTING = ['Redis (caching)', 'Firebase (FCM)', 'Zoom API', 'MinIO (storage)', 'PostgreSQL'];

export default function FeaturedProject() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="featured" className="py-24 px-6 bg-[var(--card)]/30">
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
              04 / Deep Dive
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Production-Grade{' '}
            <span className="heading-gradient">Fitness Platform Backend</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl">
            A close look at the most complex project in my portfolio — the Personal Trainer Backend — covering architecture, request flows, and engineering decisions.
          </p>
        </motion.div>

        <div className="space-y-10">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card)]"
          >
            <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">The Problem</h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Fitness platforms require multiple systems to operate together reliably: trainer onboarding
              and verification, client management, session booking with calendar logic, subscription credit
              tracking, real-time notifications, external meeting generation, and administrative oversight.
              Each of these subsystems has its own state, failure modes, and consistency requirements.
              The engineering challenge is making them work as a coherent whole while keeping each service
              independently maintainable.
            </p>
          </motion.div>

          {/* Architecture diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="terminal-border"
          >
            <div className="terminal-bar">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-2 text-xs text-[var(--muted)] font-code">architecture.md</span>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-6">System Architecture</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Client → API flow */}
                <div>
                  <p className="text-xs font-code text-[var(--muted)] uppercase tracking-widest mb-4">Request Path</p>
                  <div className="space-y-2">
                    {['Client Apps (iOS/Android/Web)', 'API Gateway (Gin Router)', 'Authentication Layer (JWT Middleware)', 'Business Services', 'PostgreSQL Database'].map((layer, i) => (
                      <div key={layer} className="flex flex-col items-start">
                        <div className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          i === 3
                            ? 'bg-[var(--accent)]/15 border border-[var(--accent)]/40 text-[var(--accent)]'
                            : 'bg-[var(--card-border)]/40 border border-[var(--card-border)] text-[var(--foreground)]'
                        }`}>
                          {layer}
                        </div>
                        {i < 4 && (
                          <div className="ml-6 my-1 text-[var(--muted)]">
                            <ArrowRight size={14} className="rotate-90" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business services */}
                <div>
                  <p className="text-xs font-code text-[var(--muted)] uppercase tracking-widest mb-4">Business Services</p>
                  <div className="space-y-3 mb-6">
                    {SERVICES.map((svc) => (
                      <div key={svc.name} className="flex items-start gap-3 p-3 rounded-lg border border-[var(--card-border)] bg-[var(--card)]">
                        <svc.icon size={16} className="text-[var(--accent)] mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-[var(--foreground)]">{svc.name}</p>
                          <p className="text-xs text-[var(--muted)]">{svc.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs font-code text-[var(--muted)] uppercase tracking-widest mb-3">Supporting Infrastructure</p>
                  <div className="flex flex-wrap gap-2">
                    {SUPPORTING.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-md bg-[var(--accent)]/8 border border-[var(--accent)]/20 text-xs text-[var(--accent)] font-code">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Request flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 md:p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card)]"
          >
            <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">Request Flow: Client Books a Session</h3>
            <p className="text-sm text-[var(--muted)] mb-6">
              Tracing a booking request from client through the full system stack.
            </p>
            <div className="space-y-3">
              {REQUEST_FLOW.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[var(--accent)] font-code">{item.step}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--foreground)]">{item.action}</p>
                    <p className="text-xs text-[var(--muted)] mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Challenge + Scalability */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card)]"
            >
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">Technical Challenge</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                The core challenge was maintaining consistency across booking creation, subscription credit
                deduction, Zoom meeting generation, and notification dispatch — four separate operations that
                must either all succeed or cleanly fail together.
              </p>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                The solution used PostgreSQL transactions to atomically handle the database side, with the
                Zoom API call happening before commit so the meeting URL could be stored in the same transaction.
                Notification dispatch was deferred to a post-commit step to avoid blocking the response.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card)]"
            >
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">Scalability Considerations</h3>
              <ul className="space-y-3">
                {[
                  { title: 'Stateless API Servers', desc: 'Go Gin servers hold no session state — any instance can handle any request' },
                  { title: 'Redis Caching', desc: 'Frequently read data cached to reduce PostgreSQL load' },
                  { title: 'Background Workers', desc: 'Notifications and reminders processed outside the request cycle' },
                  { title: 'Object Storage', desc: 'Files stored in MinIO — decoupled from the database' },
                  { title: 'Horizontal Scaling', desc: 'Stateless design allows adding more API instances behind a load balancer' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="text-[var(--accent)] mt-1 shrink-0 text-xs">◆</span>
                    <div>
                      <span className="text-sm font-medium text-[var(--foreground)]">{item.title} — </span>
                      <span className="text-sm text-[var(--muted)]">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center"
          >
            <a
              href="https://github.com/Gospelmairo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-xl border border-[var(--accent)]/40 bg-[var(--accent)]/8 text-[var(--accent)] font-semibold hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
            >
              <GithubIcon width={20} height={20} />
              View Source on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
