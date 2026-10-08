import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Santo",
    category: "Enterprise Construction Platform",
    description:
      "A complete enterprise-grade front-end for a modern construction management platform, combining project management, field operations, accounting, HR, procurement, materials, safety, documents, reporting, and business workflows.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "English + Arabic",
      "RTL / LTR",
    ],
    type: "Frontend",
    featured: true,
    badge: "Featured",
    isNew: true,
    github: null,
    live: "https://santo-construction-platform.vercel.app/",
    image: null,
  },

  {
    id: 2,
    title: "Full-Stack E-Commerce",
    category: "Full-Stack Development",
    description:
      "A complete full-stack e-commerce web application with authentication, product management, protected routes, REST APIs, and database integration.",
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    type: "Full-Stack",
    featured: true,
    badge: "Featured",
    isNew: false,
    github: "https://github.com/mo-code-dev",
    live: "#",
    image: null,
  },

  {
    id: 3,
    title: "Alex.Store",
    category: "Clothing E-Commerce",
    description:
      "A modern clothing e-commerce website focused on premium UI/UX, responsive layouts, clean product presentation, and smooth user interactions.",
    tech: ["React", "Tailwind CSS", "JavaScript", "UI/UX"],
    type: "Frontend",
    featured: true,
    badge: "Featured",
    isNew: false,
    github: "https://github.com/mo-code-dev",
    live: "https://alex-store-y1z5.vercel.app/",
    image: null,
  },

  {
    id: 4,
    title: "UNION",
    category: "SaaS Platform",
    description:
      "A scalable SaaS platform concept designed to support multiple business types with bilingual experiences, role-based authentication, business management, and subscription-ready architecture.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "i18next",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    type: "Full-Stack",
    featured: true,
    badge: "Featured",
    isNew: false,
    github: "https://github.com/mo-code-dev",
    live: "#",
    image: null,
  },

  {
    id: 5,
    title: "ALPHA",
    category: "Real Estate Landing Page",
    description:
      "A premium real estate landing page created with a dark luxury visual identity for showcasing properties and developments across leading New Cairo and West Cairo locations.",
    tech: ["React", "Tailwind CSS", "JavaScript", "UI/UX"],
    type: "Frontend",
    featured: true,
    badge: "Featured",
    isNew: false,
    github: "https://github.com/mo-code-dev",
    live: "#",
    image: null,
  },

  {
    id: 6,
    title: "SkillUp",
    category: "E-Learning Platform",
    description:
      "A modern e-learning platform designed to present online courses, instructors, categories, and educational content through a responsive and interactive interface.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Framer Motion",
    ],
    type: "Frontend",
    featured: true,
    badge: "Featured",
    isNew: false,
    github:
      "https://github.com/mo-code-dev/skillup-e-learning-platform",
    live: "https://skillup-e-learning-platform.vercel.app/",
    image: null,
  },

  {
    id: 7,
    title: "LUMA",
    category: "Restaurant Digital Menu",
    description:
      "A modern bilingual restaurant digital menu experience with product details, extras, cart functionality, localStorage, delivery and takeaway options, and direct WhatsApp and phone ordering.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide",
      "JavaScript",
    ],
    type: "Frontend",
    featured: true,
    badge: "Featured",
    isNew: false,
    github: "https://github.com/mo-code-dev",
    live: "#",
    image: null,
  },

  {
    id: 8,
    title: "Dr. Ahmed Mohamed Saeed",
    category: "Medical Landing Page",
    description:
      "A premium medical landing page for an internal medicine and gastroenterology doctor, focused on trust, clear service presentation, appointment booking, and direct communication.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide",
      "Responsive Design",
    ],
    type: "Frontend",
    featured: true,
    badge: "Featured",
    isNew: false,
    github: "https://github.com/mo-code-dev",
    live: "#",
    image: null,
  },

  {
    id: 9,
    title: "Personal Portfolio",
    category: "Portfolio Website",
    description:
      "A modern personal portfolio designed to showcase my skills, projects, experience, education, certificates, and professional journey with a clean responsive interface.",
    tech: [
      "React",
      "Tailwind CSS",
      "Vite",
      "JavaScript",
      "Responsive Design",
    ],
    type: "Frontend",
    featured: true,
    badge: "Featured",
    isNew: false,
    github: "https://github.com/mo-code-dev/Portfolio",
    live:
      "https://mohamed-mamdouh-portfolio-five.vercel.app/",
    image: "/portfolio-architecture.png",
  },
];

const projectIcons = {
  "Full-Stack": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h10M7 12h4M7 16h7" />
    </svg>
  ),

  Frontend: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 14h2M12 14h4" />
    </svg>
  ),
};

const techColors = {
  React: "bg-cyan-50 text-cyan-700 border-cyan-100",
  "Next.js": "bg-slate-900 text-white border-slate-800",
  TypeScript:
    "bg-blue-50 text-blue-700 border-blue-100",
  "Tailwind CSS":
    "bg-sky-50 text-sky-700 border-sky-100",
  "Node.js":
    "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Express.js":
    "bg-slate-100 text-slate-700 border-slate-200",
  MongoDB:
    "bg-green-50 text-green-700 border-green-100",
  JWT: "bg-violet-50 text-violet-700 border-violet-100",
  JavaScript:
    "bg-yellow-50 text-yellow-700 border-yellow-100",
  "UI/UX":
    "bg-pink-50 text-pink-700 border-pink-100",
  Vite:
    "bg-purple-50 text-purple-700 border-purple-100",
  i18next:
    "bg-indigo-50 text-indigo-700 border-indigo-100",
  "Framer Motion":
    "bg-rose-50 text-rose-700 border-rose-100",
  Lucide:
    "bg-orange-50 text-orange-700 border-orange-100",
  "Responsive Design":
    "bg-teal-50 text-teal-700 border-teal-100",
  "English + Arabic":
    "bg-indigo-50 text-indigo-700 border-indigo-100",
  "RTL / LTR":
    "bg-violet-50 text-violet-700 border-violet-100",
};

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.28c0 .32.22.69.83.58A12 12 0 0 0 12 .7Z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M14 4h6v6" />
      <path d="M10 14 20 4" />
      <path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function SantoPreview() {
  return (
    <div className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-[#f9f5ec] shadow-lg shadow-slate-900/5">
      {/* Mini Browser Header */}
      <div className="flex items-center justify-between border-b border-[#d9d0c4] bg-[#fcf8ef] px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>

        <div className="rounded-full border border-[#d9d0c4] bg-[#fef9ef] px-4 py-1 text-[9px] font-semibold text-slate-500">
          santo-construction-platform.vercel.app
        </div>

        <div className="h-5 w-5 rounded-full bg-[#ead7cc]" />
      </div>

      <div className="grid grid-cols-[82px_1fr] bg-[#fef9ef]">
        {/* Mini Sidebar */}
        <div className="border-r border-[#d9d0c4] bg-[#fbf5e9] p-3">
          <div className="mb-4 flex items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded-lg bg-[#b05a36] text-[10px] font-bold text-white">
              S
            </div>

            <span className="text-[10px] font-bold text-[#2a2b2f]">
              Santo
            </span>
          </div>

          <div className="space-y-1">
            {[
              "Overview",
              "Projects",
              "Field",
              "Tasks",
              "Accounting",
              "HR",
            ].map((item, index) => (
              <div
                key={item}
                className={`rounded-lg px-2 py-1.5 text-[7px] font-semibold ${
                  index === 0
                    ? "bg-[#ead7cc] text-[#b05a36]"
                    : "text-slate-500"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Mini Dashboard */}
        <div className="p-4">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <div className="text-[7px] font-bold uppercase tracking-[.12em] text-[#b05a36]">
                Construction Operations
              </div>

              <div className="mt-1 font-serif text-lg tracking-[-0.04em] text-[#2a2b2f]">
                Good morning, Ahmed.
              </div>
            </div>

            <div className="rounded-full bg-[#b05a36] px-3 py-1 text-[7px] font-bold text-white">
              New project
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[
              ["Active", "12"],
              ["At risk", "3"],
              ["Progress", "68%"],
              ["Issues", "24"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-[#d9d0c4] bg-[#f5eee1] p-2"
              >
                <div className="text-[6px] text-slate-500">
                  {label}
                </div>

                <div className="mt-1 font-serif text-sm text-[#2a2b2f]">
                  {value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-[1.4fr_.9fr] gap-2">
            <div className="rounded-xl border border-[#d9d0c4] bg-[#f5eee1] p-3">
              <div className="text-[7px] font-bold text-[#2a2b2f]">
                Project performance
              </div>

              <div className="mt-3 space-y-2">
                {[82, 64, 51].map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-2"
                  >
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#e1d8cb]">
                      <div
                        className="h-full rounded-full bg-[#b05a36]"
                        style={{ width: `${value}%` }}
                      />
                    </div>

                    <span className="text-[7px] text-slate-500">
                      {value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#d9d0c4] bg-[#f5eee1] p-3">
              <div className="text-[7px] font-bold text-[#2a2b2f]">
                Upcoming
              </div>

              <div className="mt-3 space-y-2">
                <div className="h-2 rounded-full bg-[#e4d9cf]" />
                <div className="h-2 w-4/5 rounded-full bg-[#e4d9cf]" />
                <div className="h-2 w-3/5 rounded-full bg-[#e4d9cf]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition-all duration-300 hover:bg-slate-950/20 hover:opacity-100">
        <a
          href="https://santo-construction-platform.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-2xl"
        >
          <EyeIcon />
          Open Live Demo
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#f8fbff] px-6 py-24 sm:px-8 lg:px-12"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="absolute -right-28 top-1/3 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-100/30 blur-3xl" />

        <div className="absolute left-[8%] top-24 h-2 w-2 rounded-full bg-blue-300" />

        <div className="absolute right-[14%] top-40 h-2 w-2 rounded-full bg-indigo-300" />

        <div className="absolute bottom-32 right-[25%] h-2 w-2 rounded-full bg-cyan-300" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            Selected Work
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Projects I&apos;ve{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Built
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            A selection of real projects where I turn ideas into
            modern, responsive, and functional digital experiences.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => {
            const isSanto = project.title === "Santo";

            return (
              <article
                key={project.id}
                className={`group relative overflow-hidden rounded-[30px] border bg-white/90 p-7 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.38)] backdrop-blur transition-all duration-700 hover:-translate-y-2 ${
                  isSanto
                    ? "border-blue-200 shadow-[0_30px_90px_-35px_rgba(37,99,235,0.28)] lg:col-span-2"
                    : "border-slate-200/80 hover:border-blue-200 hover:shadow-[0_30px_80px_-35px_rgba(37,99,235,0.3)]"
                } ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Top Accent */}
                <div
                  className={`absolute left-0 right-0 top-0 h-1 ${
                    isSanto
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"
                      : "bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
                  } opacity-80 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Ambient Glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-100/40 blur-3xl transition-all duration-500 group-hover:bg-indigo-100/70" />

                <div className="relative">
                  {/* Santo Visual Preview */}
                  {isSanto && (
                    <div className="mb-8">
                      <SantoPreview />

                      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-1">
                        <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                          Featured Product Preview
                        </span>

                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 transition-colors hover:text-indigo-600"
                        >
                          Open Live Product
                          <ArrowUpRight />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-105 ${
                          isSanto
                            ? "bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 shadow-blue-500/20 group-hover:rotate-1"
                            : "bg-gradient-to-br from-blue-600 to-indigo-600 shadow-blue-500/20 group-hover:rotate-2"
                        }`}
                      >
                        {projectIcons[project.type]}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                            {project.category}
                          </span>

                          {project.isNew && (
                            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-emerald-700">
                              New
                            </span>
                          )}
                        </div>

                        <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {project.featured && (
                      <span className="hidden rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 sm:inline-flex">
                        {project.badge || "Featured"}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className={`mt-7 text-[15px] leading-7 text-slate-600 ${
                      isSanto ? "max-w-4xl" : "min-h-[72px]"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Santo Meta */}
                  {isSanto && (
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
                        <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                          Product
                        </div>

                        <div className="mt-2 text-sm font-bold text-slate-900">
                          Enterprise Front-End
                        </div>
                      </div>

                      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
                        <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-indigo-600">
                          Platform
                        </div>

                        <div className="mt-2 text-sm font-bold text-slate-900">
                          Construction Management
                        </div>
                      </div>

                      <div className="rounded-2xl border border-violet-100 bg-violet-50/60 p-4">
                        <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-violet-600">
                          Experience
                        </div>

                        <div className="mt-2 text-sm font-bold text-slate-900">
                          English + Arabic RTL
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tech */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                          techColors[technology] ||
                          "border-slate-200 bg-slate-50 text-slate-700"
                        }`}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="my-7 h-px bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
                        >
                          <GithubIcon />
                          GitHub
                        </a>
                      )}

                      {isSanto && (
                        <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-500">
                          Private Repository
                        </span>
                      )}
                    </div>

                    {project.live !== "#" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
                          isSanto
                            ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-blue-500/20 hover:shadow-indigo-500/25"
                            : "bg-slate-900 shadow-slate-900/10 hover:bg-blue-600 hover:shadow-blue-500/20"
                        }`}
                      >
                        Live Demo
                        <ArrowUpRight />
                      </a>
                    ) : (
                      <span className="inline-flex cursor-default items-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-400">
                        Live Demo
                        <ExternalLinkIcon />
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 rounded-[30px] border border-blue-100 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-center shadow-2xl shadow-blue-500/10 transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="mx-auto max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
              More Projects Coming
            </p>

            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Always building. Always learning.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
              I&apos;m continuously working on new ideas and improving my
              development skills through real-world projects.
            </p>

            <a
              href="https://github.com/mo-code-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <GithubIcon />
              Explore My GitHub
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;