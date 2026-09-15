
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

          {/* Right Visual - Profile Image */}
          <div
            className={`relative mx-auto w-full max-w-xl transition-all delay-200 duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/25 blur-3xl" />

            {/* Decorative Rings */}
            <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/50" />

            <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-200/40" />

            {/* Main Image Card */}
            <div className="relative mx-auto w-[82%] max-w-[420px]">
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent blur-xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/70 p-3 shadow-2xl shadow-blue-900/15 backdrop-blur-2xl">
                {/* Image */}
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-100 via-white to-indigo-100">
                  <img
                    src="/Mohamed-Mamdouh.png"
                    alt="Mohamed Mamdouh - Full-Stack Web Developer"
                    className="relative z-10 mx-auto block h-auto w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  />

                  {/* Image Bottom Gradient */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-slate-950/30 to-transparent" />
                </div>

                {/* Profile Info */}
                <div className="px-3 pb-2 pt-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-md  p-18 font-black tracking-tight text-slate-950">
                        Mohamed Mamdouh
                      </p>

                      <p className="mt-1 text-sm font-medium text-blue-600">
                        Full-Stack Web Developer
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-xs font-black text-white shadow-lg">
                      MM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge - MERN */}
            <div className="absolute -left-2 top-16 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl shadow-blue-900/10 backdrop-blur-xl sm:block lg:-left-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Stack
              </p>

              <p className="mt-1 text-sm font-black text-slate-900">
                MERN
              </p>
            </div>

            {/* Floating Badge - Available */}
            <div className="absolute -right-2 top-32 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl shadow-blue-900/10 backdrop-blur-xl sm:block lg:-right-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />

                <p className="text-xs font-bold text-slate-700">
                  Available
                </p>
              </div>
            </div>

            {/* Floating Badge - Web Development */}
            <div className="absolute -right-2 bottom-20 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl shadow-blue-900/10 backdrop-blur-xl sm:block lg:-right-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Focus
              </p>

              <p className="mt-1 text-sm font-black text-blue-600">
                Web Development
              </p>
            </div>

            {/* Floating Tech Badge */}
            <div className="absolute -left-2 bottom-14 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl shadow-blue-900/10 backdrop-blur-xl sm:block lg:-left-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Building With
              </p>

              <p className="mt-1 text-sm font-black text-slate-900">
                React · Node · Mongo
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

