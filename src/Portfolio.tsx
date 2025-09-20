import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Code2,
  Server,
  Database,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


/* =====================
   EDIT HERE (EN)
===================== */
const DATA = {
  name: "Gabriel Barreto",
  role: "Frontend Developer (React) | Full-Stack in progress",
  about:
    "React-focused developer who loves building fast, accessible and beautiful UIs. Experience with Node.js/Express, MongoDB and Vercel deploys. Looking for a team where speed of delivery and impact matter.",
  links: {
    github: "https://github.com/gab01012025",
    linkedin: "https://www.linkedin.com/in/gab01012025/",
    email: "mailto:gabrielbarreto900@gmail.com",
  },
  highlights: [
    "React, TypeScript, Tailwind, Zustand",
    "Node.js, Express, MongoDB",
    "Testing: Jest + RTL",
    "Best practices: A11y, Responsive, CI/CD",
  ],
  projects: [
    {
      title: "Task Manager — Fullstack",
      description:
        "JWT auth, full CRUD and REST API in Node/Express + MongoDB Atlas. Responsive React frontend.",
      tags: ["React", "Node", "Express", "MongoDB", "JWT"],
      repo: "https://github.com/gab01012025/task-manager-fullstack",
      live: undefined,
    },
    {
      title: "DevFinance — Personal Budget Tracker",
      description:
        "Budget tracker with dashboard, charts, categories and dark mode. Clean UX and neat visuals.",
      tags: ["React", "Chart.js", "Tailwind"],
      repo: "https://github.com/gab01012025",
      live: undefined,
    },
    {
      title: "Secret Word Game — React",
      description:
        "Guess-the-word mini game with rounds, scoring and feedback. Lightweight, responsive and fun.",
      tags: ["React", "State", "Game"],
      repo: "https://github.com/gab01012025/secret-word-game",
      live: undefined,
    },
    {
      title: "MiniBlog",
      description:
        "Minimal blog with performance & SEO focus. Deployed on Vercel.",
      tags: ["React", "Vercel", "SEO"],
      repo: "https://github.com/gab01012025",
      live: "https://mini-blog-neon-mu.vercel.app/",
    },
  ],
  experience: [
    {
      company: "Personal Projects & Freelance",
      role: "Frontend Developer (React)",
      period: "2024 → 2025",
      bullets: [
        "Built responsive interfaces with React + Tailwind",
        "Integrated REST APIs and JWT authentication",
        "Adopted Git workflow, code review and documentation",
      ],
    },
  ],
  skills: [
  // Frontend
  { name: "React",           icon: <Code2 className="w-4 h-4" /> },
  { name: "TypeScript",      icon: <Code2 className="w-4 h-4" /> },
  { name: "Vite",            icon: <Code2 className="w-4 h-4" /> },
  { name: "Next.js (basics)",icon: <Code2 className="w-4 h-4" /> },
  { name: "Tailwind CSS",    icon: <Code2 className="w-4 h-4" /> },
  { name: "shadcn/ui",       icon: <Code2 className="w-4 h-4" /> },
  { name: "Framer Motion",   icon: <Code2 className="w-4 h-4" /> },

  // State / Data
  { name: "Zustand",         icon: <Code2 className="w-4 h-4" /> },
  { name: "Redux Toolkit",   icon: <Code2 className="w-4 h-4" /> },

  // Backend
  { name: "Node.js",         icon: <Server className="w-4 h-4" /> },
  { name: "Express",         icon: <Server className="w-4 h-4" /> },
  { name: "REST APIs",       icon: <Server className="w-4 h-4" /> },

  // DB
  { name: "MongoDB",         icon: <Database className="w-4 h-4" /> },
  { name: "Prisma (basics)", icon: <Database className="w-4 h-4" /> },
  { name: "PostgreSQL (basics)", icon: <Database className="w-4 h-4" /> },

  // Testing / Quality
  { name: "Jest",            icon: <Code2 className="w-4 h-4" /> },
  { name: "React Testing Library", icon: <Code2 className="w-4 h-4" /> },
  { name: "Cypress (basics)",icon: <Code2 className="w-4 h-4" /> },
  { name: "ESLint & Prettier",icon: <Code2 className="w-4 h-4" /> },

  // DevOps / Deploy
  { name: "Vercel",          icon: <Globe className="w-4 h-4" /> },
  { name: "Docker (basics)", icon: <Globe className="w-4 h-4" /> },
  { name: "GitHub Actions (basics)", icon: <Globe className="w-4 h-4" /> },
],

};

/* ================
   UI helpers
================ */
const Chip = ({ label }: { label: string }) => (
  <Badge className="rounded-full px-3 py-1 text-[0.8rem]">{label}</Badge>
);

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20"
    aria-labelledby={`${id}-title`}
  >
    <motion.h2
      id={`${id}-title`}
      className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", enabled);
    setIsDark(enabled);
  }, []);
  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };
  return (
    <Button
      onClick={toggle}
      variant="secondary"
      className="rounded-2xl"
      aria-pressed={isDark}
      title={isDark ? "Light" : "Dark"}
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </Button>
  );
}

function ProjectCard({ p }: { p: (typeof DATA.projects)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="h-full"
    >
      <Card className="group h-full overflow-hidden rounded-3xl border border-border/60 bg-background/80 backdrop-blur transition-all hover:shadow-xl hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="text-xl">{p.title}</span>
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="ml-auto text-sm inline-flex items-center gap-1 underline-offset-4 hover:underline"
                aria-label={`Open ${p.title} live`}
              >
                Live <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </CardTitle>
          <CardDescription>{p.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-2">
          {p.tags.map((t) => (
            <Chip key={t} label={t} />
          ))}
          <div className="ml-auto flex gap-2">
            <a href={p.repo} target="_blank" rel="noreferrer">
              <Button variant="outline" size="sm" className="rounded-xl">
                <Github className="w-4 h-4 mr-2" /> Code
              </Button>
            </a>
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer">
                <Button size="sm" className="rounded-xl">
                  Live <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/* ================
   PAGE
================ */
export default function Portfolio() {
  const gridMask =
    "bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground)/0.06)_1px,transparent_1px)] [background-size:22px_22px] dark:bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground)/0.05)_1px,transparent_1px)]";

  return (
    <div
      className={`relative min-h-screen text-foreground ${gridMask} bg-gradient-to-b from-[hsl(var(--primary)/0.06)] to-transparent`}
    >
      {/* Blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-50 dark:opacity-30 bg-[conic-gradient(at_top_left,_#8b5cf6,_#60a5fa,_#34d399)]" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-40 dark:opacity-25 bg-[conic-gradient(at_bottom_right,_#fb7185,_#f59e0b,_#22d3ee)]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav
          className="max-w-6xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between"
          aria-label="Primary navigation"
        >
          <a href="#home" className="font-semibold tracking-tight hover:opacity-80 transition">
            {DATA.name}
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href={DATA.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Button variant="ghost" className="rounded-xl"><Github className="w-5 h-5" /></Button>
            </a>
            <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Button variant="ghost" className="rounded-xl"><Linkedin className="w-5 h-5" /></Button>
            </a>
            <a href={DATA.links.email} aria-label="Email">
              <Button variant="ghost" className="rounded-xl"><Mail className="w-5 h-5" /></Button>
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-14 sm:py-20">
          <div className="rounded-3xl border border-border/60 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-8 sm:p-10 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
            <motion.h1
              className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight
                         bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--foreground))] to-[hsl(var(--primary))]
                         dark:from-white dark:to-[hsl(var(--primary))]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              React Developer
            </motion.h1>

            <motion.p
              className="mt-3 text-xl sm:text-2xl font-semibold"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
            >
              {DATA.role}
            </motion.p>

            <motion.p
              className="mt-6 max-w-2xl text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
            >
              {DATA.about}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <a href="#projects">
                <Button className="rounded-xl shadow-[0_8px_20px_-8px_hsl(var(--primary)/0.6)] transition-transform hover:-translate-y-0.5">
                  View projects
                </Button>
              </a>
              <a href={DATA.links.github} target="_blank" rel="noreferrer">
                <Button variant="outline" className="rounded-xl transition-transform hover:-translate-y-0.5">
                  <Github className="w-4 h-4 mr-2" /> GitHub
                </Button>
              </a>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap gap-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.06 }}
            >
              {DATA.highlights.map((h) => (
                <motion.div key={h} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}>
                  <Badge className="rounded-full px-3 py-1 text-[0.8rem]">{h}</Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Projects */}
      <Section id="projects" title="Featured Projects">
        <div className="rounded-3xl border border-border/60 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {DATA.projects.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="rounded-3xl border border-border/60 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-6 sm:p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {DATA.experience.map((e) => (
              <Card key={e.company} className="rounded-2xl hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">{e.role}</CardTitle>
                  <CardDescription>
                    {e.company} • {e.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                    {e.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Tech Stack">
        <div className="rounded-3xl border border-border/60 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-6 sm:p-8">
          <div className="flex flex-wrap gap-3">
            {DATA.skills.map((s) => (
              <Badge
                key={s.name}
                className="flex items-center gap-2 rounded-full px-3 py-1 text-[0.85rem]"
              >
                {s.icon}
                {s.name}
              </Badge>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="rounded-3xl border border-border/60 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-6 sm:p-8">
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                Interested in working together? Send me an email or connect on LinkedIn.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={DATA.links.email}>
                  <Button className="rounded-xl shadow-[0_8px_20px_-8px_hsl(var(--primary)/0.6)] hover:-translate-y-0.5 transition">
                    <Mail className="w-4 h-4 mr-2" /> Email
                  </Button>
                </a>
                <a href={DATA.links.linkedin} target="_blank" rel="noreferrer">
                  <Button variant="outline" className="rounded-xl hover:-translate-y-0.5 transition">
                    <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-muted-foreground flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} {DATA.name}. Built with React.</span>
          <a
            className="inline-flex items-center gap-2 hover:underline underline-offset-4"
            href={DATA.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github className="w-4 h-4" /> /gab01012025
          </a>
        </div>
      </footer>
    </div>
  );
}
