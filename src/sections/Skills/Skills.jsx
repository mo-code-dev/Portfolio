
function Skills() {
  const technicalSkills = [
    {
      number: "01",
      title: "Frontend",
      description:
        "Building responsive, modern and interactive interfaces with a strong focus on usability.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      number: "02",
      title: "Backend",
      description:
        "Developing reliable APIs and server-side applications with clean and scalable architecture.",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Authentication"],
    },
    {
      number: "03",
      title: "Database",
      description:
        "Designing and managing data structures for secure and efficient applications.",
      skills: ["MongoDB", "MongoDB Atlas", "Mongoose", "CRUD"],
    },
    {
      number: "04",
      title: "Tools",
      description:
        "Using modern development tools to build, test, manage and deploy projects efficiently.",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Vite"],
    },
  ];

  const personalSkills = [
    {
      title: "Problem Solving",
      description:
        "Breaking complex problems into clear, practical and effective solutions.",
      icon: "◈",
    },
    {
      title: "Communication",
      description:
        "Explaining ideas clearly and communicating effectively with different people.",
      icon: "◌",
    },
    {
      title: "Teamwork",
      description:
        "Working collaboratively, sharing ideas and contributing to team goals.",
      icon: "◇",
    },
    {
      title: "Adaptability",
      description:
        "Quickly learning new technologies and adapting to changing project requirements.",
      icon: "↗",
    },
    {
      title: "Time Management",
      description:
        "Organizing priorities and managing tasks to keep projects moving efficiently.",
      icon: "◷",
    },
    {
      title: "Continuous Learning",
      description:
        "Always improving my technical knowledge and keeping up with modern technologies.",
      icon: "∞",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28 sm:py-32"
    >
      {/* Background Glows */}

      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[400px] w-[400px] rounded-full bg-blue-200/25 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-200/20 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-[300px] w-[300px] rounded-full bg-sky-200/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl">

        {/* Section Header */}

        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              Skills & Technologies
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl md:text-6xl">
            The skills behind
            <span className="block bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
              my work.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500 sm:text-xl">
            A combination of technical knowledge and personal skills that help
            me build better products and work effectively with others.
          </p>
        </div>

        {/* ========================= */}
        {/* Technical Skills */}
        {/* ========================= */}

        <div className="mt-16">

          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                Technical Skills
              </p>

              <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Development Stack
              </h3>
            </div>

            <span className="hidden text-sm text-slate-400 sm:block">
              04 Categories
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {technicalSkills.map((group) => (
              <div
                key={group.number}
                className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-7 shadow-xl shadow-blue-900/[0.05] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/[0.08] sm:p-8"
              >
                {/* Hover Glow */}

                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-200/30 blur-[80px] transition-transform duration-700 group-hover:scale-125" />

                <div className="relative">

                  {/* Card Header */}

                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-bold tracking-[0.2em] text-blue-500">
                        {group.number}
                      </span>

                      <h4 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                        {group.title}
                      </h4>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-lg font-bold text-blue-600 transition-transform duration-500 group-hover:rotate-6">
                      +
                    </div>
                  </div>

                  {/* Description */}

                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                    {group.description}
                  </p>

                  {/* Divider */}

                  <div className="my-6 h-px bg-gradient-to-r from-blue-100 via-slate-200 to-transparent" />

                  {/* Technologies */}

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================= */}
        {/* Personal Skills */}
        {/* ========================= */}

        <div className="mt-24">

          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              Personal Skills
            </p>

            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              How I Work
            </h3>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">
              Beyond technical skills, I believe that communication,
              adaptability and a problem-solving mindset are essential for
              building successful products.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {personalSkills.map((skill) => (
              <div
                key={skill.title}
                className="group rounded-[1.75rem] border border-white/80 bg-white/65 p-6 shadow-lg shadow-blue-900/[0.04] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/[0.07]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-lg font-bold text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    {skill.icon}
                  </div>

                  <span className="text-xs font-bold text-slate-300 transition-colors duration-300 group-hover:text-blue-300">
                    0{personalSkills.indexOf(skill) + 1}
                  </span>
                </div>

                <h4 className="mt-5 text-lg font-bold text-slate-950">
                  {skill.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================= */}
        {/* Bottom Stack Banner */}
        {/* ========================= */}

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-7 shadow-xl shadow-blue-900/[0.08] sm:p-8">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                My Approach
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Learn. Build. Improve.
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/40">
                I continuously learn new technologies and apply them by
                building real projects and solving practical problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Problem Solving",
                "Clean Code",
                "Responsive Design",
                "Teamwork",
                "Continuous Learning",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-medium text-white/70 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;

