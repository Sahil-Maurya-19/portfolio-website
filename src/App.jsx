import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Market Data Analysis Tool",
    category: "Python • Data Analysis",
    description:
      "Built a full-stack quantitative trading research platform for XAUUSD strategy analysis, and risk evaluation using Python, FastAPI, and React Developed Monte Carlo simulation and advanced risk analytics modules including VaR, CVaR, and real-time performance dashboards for strategy robustness testing",
    highlights: ["CSV data cleaning", "Time-series indexing", "Reusable functions"],
    link: "https://github.com/Sahil-Maurya-19/XAUUSD-Algo-Lab",
  },
  {
    title: "Solar Energy Website",
    category: "React • UI Design",
    description:
      "Developed and deployed the corporate website for Vaikuntha Energies, creating a responsive and modern web experience to strengthen the company’s digital presence and brand visibility.",
    highlights: ["Responsive layout", "Modern UI", "Recruiter-focused content"],
    link: "https://www.vaikunthaenergies.com/",
  },
  {
    title: "Leading Lagging Sectors",
    category: "Finance • Problem Solving",
    description:
      "Built an automated Python-based macro-equity sector rotation tracker analysing institutional capital flow across NIFTY50, NIFTY IT, NIFTY AUTO, NIFTY PHARMA and NIFTY BANK using normalized growth and relative strength analysis.",
    highlights: ["50-day Relative Strength smoothing", "Pandas", "Yahoo finance API"],
    link: "https://github.com/Sahil-Maurya-19/Leading_Lagging_Sectors",
  },
];

const skills = [
  "Python",
  "Pandas",
  "NumPy",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Data Cleaning",
  "Problem Solving",
  "Financial Analysis",
  "Communication",
  "Presentation",
];

const stats = [
  { label: "Projects", value: "3+" },
  { label: "Core Skills", value: "12" },
  { label: "Trading", value: "2 yrs" },
];

function Icon({ name, className = "h-5 w-5" }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    github: (
      <svg {...commonProps}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    linkedin: (
      <svg {...commonProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    mail: (
      <svg {...commonProps}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
    external: (
      <svg {...commonProps}>
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
    ),
    download: (
      <svg {...commonProps}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="M7 10l5 5 5-5" />
        <path d="M12 15V3" />
      </svg>
    ),
    code: (
      <svg {...commonProps}>
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </svg>
    ),
    briefcase: (
      <svg {...commonProps}>
        <rect width="20" height="14" x="2" y="7" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    graduation: (
      <svg {...commonProps}>
        <path d="M22 10 12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c3 2 9 2 12 0v-5" />
      </svg>
    ),
    sparkles: (
      <svg {...commonProps}>
        <path d="m12 3-1.9 5.8L4 11l6.1 2.2L12 19l1.9-5.8L20 11l-6.1-2.2L12 3z" />
        <path d="M5 3v4" />
        <path d="M3 5h4" />
        <path d="M19 17v4" />
        <path d="M17 19h4" />
      </svg>
    ),
  };

  return icons[name] || icons.sparkles;
}

function Button({ children, variant = "primary", href = "#" }) {
  const variantClass =
    variant === "secondary"
      ? "bg-white text-slate-950 hover:bg-slate-200"
      : "bg-cyan-300 text-slate-950 hover:bg-cyan-200";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-4 text-base font-bold shadow-lg transition ${variantClass}`}
    >
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-white/10 bg-white/5 ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export function runPortfolioDataTests() {
  const results = [];

  results.push({
    name: "has at least three projects",
    pass: projects.length >= 3,
  });

  results.push({
    name: "each project has title, category, description, highlights, and link",
    pass: projects.every(
      (project) =>
        Boolean(project.title) &&
        Boolean(project.category) &&
        Boolean(project.description) &&
        Array.isArray(project.highlights) &&
        project.highlights.length > 0 &&
        Boolean(project.link)
    ),
  });

  results.push({
    name: "skills list is recruiter-friendly and non-empty",
    pass: skills.length >= 8 && skills.every(Boolean),
  });

  results.push({
    name: "stats list has label and value for every item",
    pass: stats.every((item) => Boolean(item.label) && Boolean(item.value)),
  });

  return results;
}

export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-80 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-6xl px-6 py-8">
        <nav className="mb-16 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
          <div className="text-lg font-bold tracking-tight">Sahil Maurya</div>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>

        <section className="grid items-center gap-10 py-10 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <Icon name="sparkles" className="h-4 w-4" /> Open to internships and entry-level roles
            </div>
            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Welcome to my work. Let's <span className="text-cyan-300">create</span> something great.
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
              I am a motivated learner with interests in Finance, data analysis, technology, and problem solving. This portfolio highlights my projects, practical skills, and readiness to contribute to a professional team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#contact">
                <Icon name="mail" className="mr-2 h-5 w-5" /> Contact Me
              </Button>
              <Button
                variant="secondary"
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download
              >
                <Icon name="download" className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <Card className="rounded-[2rem] bg-white/10 text-white shadow-2xl backdrop-blur">
              <CardContent className="p-8">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-cyan-300 text-4xl font-black text-slate-950">SM</div>
                <h2 className="mb-2 text-2xl font-bold">Sahil Maurya</h2>
                <p className="mb-6 text-slate-300">Aspiring professional • Data & Finance Enthusiast</p>
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-2xl bg-white/10 p-4 text-center">
                      <div className="text-2xl font-bold text-cyan-200">{item.value}</div>
                      <div className="text-xs text-slate-300">{item.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="projects" className="py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Selected Work</p>
              <h2 className="text-4xl font-black">Projects</h2>
            </div>
            <Icon name="code" className="h-10 w-10 text-cyan-300" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full text-white transition hover:-translate-y-1 hover:bg-white/10">
                  <CardContent className="flex h-full flex-col p-6">
                    <p className="mb-3 text-sm text-cyan-300">{project.category}</p>
                    <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
                    <p className="mb-5 flex-1 leading-7 text-slate-300">{project.description}</p>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.highlights.map((tag) => (
                        <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{tag}</span>
                      ))}
                    </div>
                    <a href={project.link} className="inline-flex items-center text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                      View project <Icon name="external" className="ml-2 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="py-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Capabilities</p>
          <h2 className="mb-8 text-4xl font-black">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-slate-100">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="about" className="grid gap-6 py-16 md:grid-cols-2">
          <Card className="text-white">
            <CardContent className="p-8">
              <Icon name="graduation" className="mb-5 h-10 w-10 text-cyan-300" />
              <h2 className="mb-4 text-3xl font-black">Education</h2>
              <p className="leading-8 text-slate-300">
                SSC - 82.20% (2020) | HSC - 62.67% (2022) | B.E(Computer Engineering) - 7 CGPA (2026)
              </p>
            </CardContent>
          </Card>
          <Card className="text-white">
            <CardContent className="p-8">
              <Icon name="briefcase" className="mb-5 h-10 w-10 text-cyan-300" />
              <h2 className="mb-4 text-3xl font-black">Career Objective</h2>
              <p className="leading-8 text-slate-300">
                To begin my professional journey in a role where I can apply analytical thinking, technical learning, communication skills, and dedication to deliver meaningful results.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="py-16">
          <Card className="rounded-[2rem] border-cyan-400/20 bg-cyan-400/10 text-white">
            <CardContent className="p-8 text-center md:p-12">
              <h2 className="mb-4 text-4xl font-black">Let's connect</h2>
              <p className="mx-auto mb-8 max-w-2xl text-slate-300">
                I am available for internships, fresher roles, and project opportunities. Please reach out for my resume and interview discussion.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="mailto:sahilmaurya0819@gmail.com"><Icon name="mail" className="mr-2 h-5 w-5" /> sahilmaurya0819@gmail.com</Button>
                <Button variant="secondary" href="https://github.com/Sahil-Maurya-19"><Icon name="github" className="mr-2 h-5 w-5" /> GitHub</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
