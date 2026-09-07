
function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28 sm:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-[350px] w-[350px] rounded-full bg-blue-200/20 blur-[120px]" />

      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-indigo-200/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl">

        {/* Section Header */}

        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              About Me
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl md:text-6xl">
            Turning ideas into
            <span className="block bg-gradient-to-r from-blue-700 to-indigo-500 bg-clip-text text-transparent">
              digital experiences.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-500 sm:text-xl">
            I&apos;m a Full-Stack Web Developer passionate about creating
            modern web applications that combine clean architecture,
            excellent performance and thoughtful user experiences.
          </p>
        </div>

        {/* Content Grid */}

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Main About Card */}

          <div className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-8 shadow-xl shadow-blue-900/[0.06] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/[0.08] sm:p-10">

            {/* Decorative Glow */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-200/30 blur-[80px] transition-transform duration-700 group-hover:scale-125" />

            <div className="relative">

              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                My journey into web development started with a curiosity about
                how websites work and evolved into a passion for building
                complete digital products from the ground up.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-500 sm:text-lg">
                I work across both frontend and backend development, turning
                designs and ideas into responsive interfaces and reliable
                applications. My current stack includes React, Tailwind CSS,
                Node.js, Express and MongoDB.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-500 sm:text-lg">
                I&apos;m constantly learning, experimenting with new
                technologies and looking for opportunities to build products
                that solve real problems.
              </p>

              {/* Divider */}

              <div className="my-8 h-px bg-gradient-to-r from-blue-100 via-slate-200 to-transparent" />

              {/* Highlights */}

              <div className="grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
                  <p className="text-sm font-bold text-blue-700">
                    Frontend
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Modern responsive interfaces
                  </p>
                </div>

                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
                  <p className="text-sm font-bold text-indigo-700">
                    Backend
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    APIs & scalable systems
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-100 bg-cyan-50/60 p-4">
                  <p className="text-sm font-bold text-cyan-700">
                    UI / UX
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Clean user experiences
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">

            {/* Stat Card */}

            <div className="group rounded-[2rem] border border-white/80 bg-white/70 p-7 shadow-xl shadow-blue-900/[0.06] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Projects
                  </p>

                  <p className="mt-3 text-5xl font-black tracking-tight text-slate-950">
                    10+
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                  ↗
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Personal and real-world projects built with modern web
                technologies.
              </p>
            </div>

            {/* Stack Card */}

            <div className="rounded-[2rem] border border-white/80 bg-slate-950 p-7 shadow-xl shadow-blue-900/[0.08]">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Current Stack
                  </p>

                  <p className="mt-2 text-lg font-bold text-white">
                    Technologies I use
                  </p>
                </div>

                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/70">
                  HTML
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/70">
                  CSS
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/70">
                  JavaScript
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/70">
                  React
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/70">
                  Tailwind
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/70">
                  Node.js
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/70">
                  Express
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/70">
                  MongoDB
                </span>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Statement */}

        <div className="mt-10 rounded-[2rem] border border-blue-100 bg-gradient-to-r from-blue-50/80 via-white/70 to-indigo-50/80 p-7 text-center shadow-sm backdrop-blur-xl sm:p-9">
          <p className="text-lg font-semibold tracking-tight text-slate-700 sm:text-xl">
            &quot;Good software is not just about how it works —
            <span className="text-blue-600">
              {" "}it&apos;s about how it feels.
            </span>
            &quot;
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;

