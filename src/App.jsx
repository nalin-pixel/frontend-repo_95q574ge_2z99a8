import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Menu, X, Mail, Github, Linkedin, MapPin, Briefcase, Code } from 'lucide-react'

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
              Muhammad Syahid Abdillah
            </a>
            <nav className="hidden gap-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
                >
                  {item.label}
                </a>
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
          {open && (
            <div className="grid gap-2 px-6 pb-6 md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
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
        <p className="text-sm tracking-widest text-slate-700/80">SOFTWARE ENGINEER</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Muhammad Syahid Abdillah
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-700">
          I craft robust backends with Laravel and build beautiful cross‑platform apps with Flutter. Currently a Software Engineer at Yayasan Darul Fattah Lampung.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="pointer-events-auto rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800">View Projects</a>
          <a href="#contact" className="pointer-events-auto rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50">Contact Me</a>
        </div>
        <div className="mt-8 flex items-center gap-5 text-slate-700/80">
          <div className="flex items-center gap-2"><MapPin size={16} /><span>Lampung, Indonesia</span></div>
          <div className="flex items-center gap-2"><Briefcase size={16} /><span>Yayasan Darul Fattah Lampung</span></div>
        </div>
      </div>
    </section>
  )
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative scroll-mt-28">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-medium tracking-widest text-slate-500">{subtitle}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}

function SkillBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm">
      <Code size={16} className="mr-2 text-slate-500" /> {children}
    </span>
  )
}

function ProjectCard({ title, tags, desc, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <span className="text-xs text-slate-500">Case Study</span>
      </div>
      <p className="mt-3 text-sm text-slate-600">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">{t}</span>
        ))}
      </div>
    </a>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Muhammad Syahid Abdillah. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50" href="mailto:muhammad.syahid@example.com"><Mail size={16}/> Email</a>
          <a className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
          <a className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50" href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
          <a className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50" href="/test">System Test</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(125,211,252,0.25),#fff_60%),radial-gradient(ellipse_at_bottom,rgba(196,181,253,0.25),#fff_60%)]">
      <Navbar />
      <Hero />

      <Section id="about" title="About" subtitle="WHO I AM">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700 leading-relaxed">
              I am a software engineer specializing in Laravel for backend/API development and Flutter for cross‑platform mobile apps. I love turning real-world problems into scalable, elegant products with clean architecture, strong security, and delightful user experiences.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              I currently contribute at Yayasan Darul Fattah Lampung, building systems that make a positive impact.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Quick Facts</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>• Strong focus on clean code, performance, and maintainability</li>
              <li>• Comfortable across the full stack: APIs, databases, and UI</li>
              <li>• Team player who communicates clearly and ships reliably</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills" subtitle="WHAT I USE">
        <div className="flex flex-wrap gap-3">
          <SkillBadge>Laravel</SkillBadge>
          <SkillBadge>Flutter</SkillBadge>
          <SkillBadge>PHP</SkillBadge>
          <SkillBadge>Dart</SkillBadge>
          <SkillBadge>REST APIs</SkillBadge>
          <SkillBadge>MySQL</SkillBadge>
          <SkillBadge>PostgreSQL</SkillBadge>
          <SkillBadge>Blade</SkillBadge>
          <SkillBadge>Livewire</SkillBadge>
          <SkillBadge>Firebase</SkillBadge>
          <SkillBadge>Git & CI/CD</SkillBadge>
        </div>
      </Section>

      <Section id="experience" title="Experience" subtitle="WHERE I WORK">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Freelance & Personal Work</h3>
            <p className="mt-2 text-sm text-slate-700">Selected engagements and experiments in web and mobile.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• APIs and dashboards for internal tooling</li>
              <li>• Flutter apps for education and productivity</li>
              <li>• Integrations with payments, auth, and third‑party services</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="WHAT I BUILT">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="SAY HELLO">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Let’s build something great</h3>
            <p className="mt-2 text-slate-700">Open to collaboration, freelance, or full‑time opportunities. The fastest way to reach me is via email or LinkedIn.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="mailto:muhammad.syahid@example.com"><Mail size={16}/> muhammad.syahid@example.com</a>
              <a className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
              <a className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
              <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Send Message</button>
              <p className="text-xs text-slate-500">Form is a demo. Use the email links to reach me.</p>
            </form>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
