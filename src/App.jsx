import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useInView } from 'framer-motion'
import { Menu, X, Mail, Github, Linkedin, MapPin, Briefcase, Code } from 'lucide-react'

// Animation presets
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  // mount animation
  return (
    <motion.header className="fixed top-0 left-0 right-0 z-50" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
              Muhammad Syahid Abdillah
            </a>
            <nav className="hidden gap-6 md:flex">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          <motion.div
            initial={false}
            animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="grid gap-2 px-6 pb-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.04 * i }}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.p className="text-sm tracking-widest text-slate-700/80" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
          SOFTWARE ENGINEER
        </motion.p>
        <motion.h1
          className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65 }}
        >
          Muhammad Syahid Abdillah
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-base sm:text-lg text-slate-700"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.65 }}
        >
          I craft robust backends with Laravel and build beautiful cross‑platform apps with Flutter. Currently a Software Engineer at Yayasan Darul Fattah Lampung.
        </motion.p>
        <motion.div className="mt-8 flex flex-wrap items-center justify-center gap-3" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.a
            href="#projects"
            className="pointer-events-auto rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800"
            variants={fadeUp}
            whileHover={{ y: -2, boxShadow: '0 12px 30px rgba(15, 23, 42, 0.25)' }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="pointer-events-auto rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            variants={fadeUp}
            whileHover={{ y: -2, boxShadow: '0 10px 24px rgba(2,6,23,0.12)' }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
        <motion.div className="mt-8 flex items-center gap-5 text-slate-700/80" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
          <div className="flex items-center gap-2"><MapPin size={16} /><span>Lampung, Indonesia</span></div>
          <div className="flex items-center gap-2"><Briefcase size={16} /><span>Yayasan Darul Fattah Lampung</span></div>
        </motion.div>

        {/* floating indicator */}
        <motion.div
          aria-hidden
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ duration: 2.2, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="h-8 w-1 rounded-full bg-slate-800/50" />
        </motion.div>
      </div>
    </section>
  )
}

function Section({ id, title, subtitle, children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.2, once: true })

  return (
    <section id={id} className="relative scroll-mt-28">
      {/* animated background accents */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -top-10 left-1/3 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute -bottom-10 right-1/4 h-40 w-40 rounded-full bg-violet-200/40 blur-3xl" />
      </motion.div>

      <div ref={ref} className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          className="mb-10"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="text-sm font-medium tracking-widest text-slate-500">{subtitle}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

function SkillBadge({ children }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm"
    >
      <Code size={16} className="mr-2 text-slate-500" /> {children}
    </motion.span>
  )
}

function ProjectCard({ title, tags, desc, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition"
      whileHover={{ y: -6, boxShadow: '0 18px 40px rgba(2,6,23,0.10)' }}
      whileTap={{ scale: 0.995 }}
      variants={fadeUp}
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <span className="text-xs text-slate-500">Case Study</span>
      </div>
      <p className="mt-3 text-sm text-slate-600">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <motion.span
            key={t}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
            whileHover={{ y: -2 }}
          >
            {t}
          </motion.span>
        ))}
      </div>
    </motion.a>
  )
}

function Footer() {
  return (
    <motion.footer
      className="border-t border-slate-200 bg-white/70"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Muhammad Syahid Abdillah. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <motion.a whileHover={{ y: -2 }} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50" href="mailto:muhammad.syahid@example.com"><Mail size={16}/> Email</motion.a>
          <motion.a whileHover={{ y: -2 }} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</motion.a>
          <motion.a whileHover={{ y: -2 }} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50" href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</motion.a>
          <motion.a whileHover={{ y: -2 }} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50" href="/test">System Test</motion.a>
        </div>
      </div>
    </motion.footer>
  )
}

export default function App() {
  // subtle page fade-in
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(125,211,252,0.25),#fff_60%),radial-gradient(ellipse_at_bottom,rgba(196,181,253,0.25),#fff_60%)]"
    >
      <Navbar />
      <Hero />

      <Section id="about" title="About" subtitle="WHO I AM">
        <motion.div className="grid gap-8 md:grid-cols-2" variants={staggerContainer}>
          <motion.div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" variants={fadeUp}>
            <p className="text-slate-700 leading-relaxed">
              I am a software engineer specializing in Laravel for backend/API development and Flutter for cross‑platform mobile apps. I love turning real-world problems into scalable, elegant products with clean architecture, strong security, and delightful user experiences.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              I currently contribute at Yayasan Darul Fattah Lampung, building systems that make a positive impact.
            </p>
          </motion.div>
          <motion.div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" variants={fadeUp}>
            <h3 className="text-base font-semibold text-slate-900">Quick Facts</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>• Strong focus on clean code, performance, and maintainability</li>
              <li>• Comfortable across the full stack: APIs, databases, and UI</li>
              <li>• Team player who communicates clearly and ships reliably</li>
            </ul>
          </motion.div>
        </motion.div>
      </Section>

      <Section id="skills" title="Skills" subtitle="WHAT I USE">
        <motion.div className="flex flex-wrap gap-3" variants={staggerContainer}>
          {['Laravel','Flutter','PHP','Dart','REST APIs','MySQL','PostgreSQL','Blade','Livewire','Firebase','Git & CI/CD'].map((s) => (
            <motion.div key={s} variants={fadeUp}>
              <SkillBadge>{s}</SkillBadge>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section id="experience" title="Experience" subtitle="WHERE I WORK">
        <motion.div className="grid gap-6 md:grid-cols-2" variants={staggerContainer}>
          <motion.div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" variants={fadeUp}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Software Engineer</h3>
              <span className="text-xs text-slate-500">Present</span>
            </div>
            <p className="mt-1 text-sm text-slate-600">Yayasan Darul Fattah Lampung</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Build and maintain Laravel-based systems and APIs</li>
              <li>• Develop Flutter apps with clean architecture and responsive UI</li>
              <li>• Collaborate with stakeholders to deliver impactful products</li>
            </ul>
          </motion.div>
          <motion.div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" variants={fadeUp}>
            <h3 className="text-lg font-semibold text-slate-900">Freelance & Personal Work</h3>
            <p className="mt-2 text-sm text-slate-700">Selected engagements and experiments in web and mobile.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• APIs and dashboards for internal tooling</li>
              <li>• Flutter apps for education and productivity</li>
              <li>• Integrations with payments, auth, and third‑party services</li>
            </ul>
          </motion.div>
        </motion.div>
      </Section>

      <Section id="projects" title="Projects" subtitle="WHAT I BUILT">
        <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer}>
          <ProjectCard
            title="School Management Portal"
            desc="End‑to‑end Laravel platform for admissions, attendance, and reporting with role‑based access and analytics."
            tags={["Laravel", "MySQL", "Blade"]}
            link="#"
          />
          <ProjectCard
            title="Community App"
            desc="Flutter app for announcements, events, and messaging with Firebase push notifications."
            tags={["Flutter", "Firebase", "Provider"]}
            link="#"
          />
          <ProjectCard
            title="Payments API"
            desc="Secure REST API with Laravel for transactions, webhooks, and reconciliation."
            tags={["Laravel", "REST", "Security"]}
            link="#"
          />
        </motion.div>
      </Section>

      <Section id="contact" title="Contact" subtitle="SAY HELLO">
        <motion.div className="grid gap-6 md:grid-cols-2" variants={staggerContainer}>
          <motion.div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" variants={fadeUp}>
            <h3 className="text-base font-semibold text-slate-900">Let’s build something great</h3>
            <p className="mt-2 text-slate-700">Open to collaboration, freelance, or full‑time opportunities. The fastest way to reach me is via email or LinkedIn.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <motion.a whileHover={{ y: -2 }} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="mailto:muhammad.syahid@example.com"><Mail size={16}/> muhammad.syahid@example.com</motion.a>
              <motion.a whileHover={{ y: -2 }} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</motion.a>
              <motion.a whileHover={{ y: -2 }} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</motion.a>
            </div>
          </motion.div>
          <motion.div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" variants={fadeUp}>
            <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                <input className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300" placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
                <textarea rows={4} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300" placeholder="Tell me about your project..." />
              </div>
              <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Send Message</motion.button>
              <p className="text-xs text-slate-500">Form is a demo. Use the email links to reach me.</p>
            </form>
          </motion.div>
        </motion.div>
      </Section>

      <Footer />
    </motion.div>
  )
}
