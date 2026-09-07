import { useEffect, useState } from "react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50/70 to-indigo-100/80 px-4 pb-20 pt-32 sm:px-6 lg:px-8"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-indigo-300/25 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-sky-300/15 blur-3xl" />

        <div className="absolute left-[12%] top-[22%] h-2 w-2 rounded-full bg-blue-500/60 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />

        <div className="absolute right-[18%] top-[30%] h-2.5 w-2.5 rounded-full bg-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.5)]" />

        <div className="absolute bottom-[22%] left-[45%] h-2 w-2 rounded-full bg-blue-400/50" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-9rem)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Content */}
          <div
            className={`max-w-3xl transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Availability Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 shadow-sm shadow-emerald-900/5 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>

              <span className="text-xs font-semibold tracking-wide text-emerald-700 sm:text-sm">
                Available for opportunities
              </span>
            </div>

            {/* Eyebrow */}
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-600 sm:text-base">
              Full-Stack Web Developer
            </p>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              Building
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                digital experiences.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg md:text-xl">
              I'm{" "}
              <span className="font-semibold text-slate-900">
                Mohamed Mamdouh
              </span>
              , a Full-Stack Developer focused on building modern, responsive,
              and high-performance web applications using technologies like
              React, Tailwind CSS, Node.js, Express, and MongoDB.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => handleNavigation("projects")}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-slate-950/15 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/20 sm:text-base"
              >
                View My Work

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleNavigation("contact")}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-7 py-4 text-sm font-bold text-slate-800 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:text-base"
              >
                Let's Talk

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="mr-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Connect
              </span>

              {/* GitHub */}
              <a
                href="https://github.com/mo-code-dev"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-950 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mohamed-mamdouh-bab243302"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-600 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 .02.78.02 1.75v20.5c0 .97.78 1.75 1.76 1.75h20.44c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:mohamedmmdouh541@gmail.com"
                aria-label="Email"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-none stroke-current stroke-[1.8] transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 6 6.18 5.14a2.1 2.1 0 0 0 2.64 0L19.5 6"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`relative mx-auto w-full max-w-xl transition-all delay-200 duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Main Glow */}
            <div className="absolute inset-10 rounded-full bg-blue-400/20 blur-3xl" />

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/65 p-5 shadow-2xl shadow-blue-900/10 backdrop-blur-2xl sm:p-7">
              {/* Top Bar */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-slate-300" />
                  <span className="h-3 w-3 rounded-full bg-slate-300" />
                  <span className="h-3 w-3 rounded-full bg-slate-300" />
                </div>

                <div className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
                  Developer
                </div>
              </div>

              {/* Code Window */}
              <div className="rounded-2xl bg-slate-950 p-5 shadow-xl sm:p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="text-blue-400">01</span>
                  <span className="text-slate-600">/</span>
                  <span>portfolio.jsx</span>
                </div>

                <div className="mt-6 space-y-3 font-mono text-xs leading-6 sm:text-sm">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-sky-300">developer</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-yellow-300">{"{"}</span>
                  </p>

                  <p className="pl-5">
                    <span className="text-blue-300">name</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-emerald-300">
                      "Mohamed Mamdouh"
                    </span>
                    <span className="text-white">,</span>
                  </p>

                  <p className="pl-5">
                    <span className="text-blue-300">role</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-emerald-300">
                      "Full-Stack Developer"
                    </span>
                    <span className="text-white">,</span>
                  </p>

                  <p className="pl-5">
                    <span className="text-blue-300">frontend</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-emerald-300">
                      "React + Tailwind"
                    </span>
                    <span className="text-white">,</span>
                  </p>

                  <p className="pl-5">
                    <span className="text-blue-300">backend</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-emerald-300">
                      "Node + Express"
                    </span>
                    <span className="text-white">,</span>
                  </p>

                  <p className="pl-5">
                    <span className="text-blue-300">database</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-emerald-300">"MongoDB"</span>
                  </p>

                  <p>
                    <span className="text-yellow-300">{"}"}</span>
                  </p>

                  <div className="mt-5 h-px bg-slate-800" />

                  <p className="pt-2">
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-sky-300">build</span>
                    <span className="text-white">(</span>
                    <span className="text-emerald-300">
                      "great experiences"
                    </span>
                    <span className="text-white">);</span>
                  </p>
                </div>
              </div>

              {/* Stack Cards */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-black text-blue-600 shadow-sm">
                    FE
                  </div>

                  <p className="text-sm font-bold text-slate-900">
                    Frontend
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    React + Tailwind
                  </p>
                </div>

                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-50">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-black text-indigo-600 shadow-sm">
                    BE
                  </div>

                  <p className="text-sm font-bold text-slate-900">
                    Backend
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Node + Express
                  </p>
                </div>
              </div>

              {/* Bottom Status */}
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-100 bg-white/70 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-slate-600">
                    System online
                  </span>
                </div>

                <span className="text-xs font-medium text-slate-400">
                  Building & learning
                </span>
              </div>
            </div>

            {/* Floating Badge - MERN */}
            <div className="absolute -left-4 top-20 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl shadow-blue-900/10 backdrop-blur-xl sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Stack
              </p>

              <p className="mt-1 text-sm font-black text-slate-900">
                MERN
              </p>
            </div>

            {/* Floating Badge - Web Development */}
            <div className="absolute -right-4 bottom-24 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl shadow-blue-900/10 backdrop-blur-xl sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Focus
              </p>

              <p className="mt-1 text-sm font-black text-blue-600">
                Web Development
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        onClick={() => handleNavigation("about")}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 transition-colors duration-300 hover:text-blue-600 sm:flex"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-slate-300 p-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500" />
        </span>
      </button>
    </section>
  );
}

export default Hero;