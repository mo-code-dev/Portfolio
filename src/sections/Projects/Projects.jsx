import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Full-Stack E-Commerce",
    category: "Full-Stack Development",
    description:
      "A complete full-stack e-commerce web application with authentication, product management, protected routes, and database integration.",
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
    github: "https://github.com/mo-code-dev",
    live: "#",
    image: null,
  },
  {
    id: 2,
    title: "Alex.Store",
    category: "Clothing E-Commerce",
    description:
      "A modern clothing e-commerce website focused on premium UI/UX, responsive layouts, clean product presentation, and smooth user interactions.",
    tech: ["React", "Tailwind CSS", "JavaScript", "UI/UX"],
    type: "Frontend",
    featured: true,
    github: "https://github.com/mo-code-dev",
    live: "#",
    image: null,
  },
  {
    id: 3,
    title: "Personal Portfolio",
    category: "Portfolio Website",
    description:
      "A modern personal portfolio designed to showcase my skills, projects, experience, and development journey with a clean responsive interface.",
    tech: ["React", "Tailwind CSS", "Vite", "JavaScript"],
    type: "Frontend",
    featured: true,
    github:
      "https://github.com/mo-code-dev/mohamed-mamdouh-portfolio",
    live: "https://mohamed-mamdouh-portfolio-five.vercel.app/",
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
  "Tailwind CSS": "bg-sky-50 text-sky-700 border-sky-100",
  "Node.js": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Express.js": "bg-slate-100 text-slate-700 border-slate-200",
  MongoDB: "bg-green-50 text-green-700 border-green-100",
  JWT: "bg-violet-50 text-violet-700 border-violet-100",
  JavaScript: "bg-yellow-50 text-yellow-700 border-yellow-100",
  "UI/UX": "bg-pink-50 text-pink-700 border-pink-100",
  Vite: "bg-purple-50 text-purple-700 border-purple-100",
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
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-32 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="absolute right-[-100px] top-1/3 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-100/30 blur-3xl" />

        <div className="absolute left-[8%] top-24 h-2 w-2 rounded-full bg-blue-300" />

        <div className="absolute right-[14%] top-40 h-2 w-2 rounded-full bg-indigo-300" />

        <div className="absolute bottom-32 right-[25%] h-2 w-2 rounded-full bg-cyan-300" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            My Work
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Projects I&apos;ve{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Built
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            A selection of projects where I turn ideas into modern,
            responsive, and functional digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-7 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.35)] backdrop-blur transition-all duration-700 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_30px_80px_-35px_rgba(37,99,235,0.35)] ${
                project.featured ? "lg:col-span-1" : ""
              } ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Top Gradient Line */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Card Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl transition-all duration-500 group-hover:bg-indigo-100/60" />

              <div className="relative">
                {/* Portfolio Architecture Preview */}
                {project.image && (
                  <div className="mb-8">
                    <a
                      href={project.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View portfolio architecture"
                      className="group/architecture relative block overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-xl shadow-slate-900/10"
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt="Personal Portfolio Architecture"
                          className="block h-auto max-h-[380px] w-full object-cover object-top transition-transform duration-700 group-hover/architecture:scale-[1.025]"
                        />

                        {/* Gradient Overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition-all duration-300 group-hover/architecture:bg-slate-950/35 group-hover/architecture:opacity-100">
                          <span className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/95 px-5 py-3 text-sm font-bold text-slate-900 shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover/architecture:scale-100">
                            <EyeIcon />
                            View Architecture
                          </span>
                        </div>

                        {/* Image Label */}
                        <div className="absolute bottom-4 left-4">
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            System Architecture
                          </span>
                        </div>
                      </div>
                    </a>

                    {/* Image Caption */}
                    <div className="mt-3 flex items-center justify-between px-1">
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                        Project Architecture
                      </span>

                      <a
                        href={project.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 transition-colors hover:text-indigo-600"
                      >
                        Open Full Size
                        <ArrowUpRight />
                      </a>
                    </div>
                  </div>
                )}

                {/* Project Top */}
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2">
                      {projectIcons[project.type]}
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                        {project.category}
                      </span>

                      <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {project.featured && (
                    <span className="hidden rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 sm:inline-flex">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Description */}
                <p className="mt-7 min-h-[72px] text-[15px] leading-7 text-slate-600">
                  {project.description}
                </p>

                {/* Tech Stack */}
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

                {/* Links */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
                  >
                    <GithubIcon />
                    GitHub
                  </a>

                  {project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-blue-500/20"
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
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-center shadow-2xl shadow-blue-500/10 transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
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