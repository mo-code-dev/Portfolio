import React from "react";

const certificates = [
  {
    title: "Backend Development / Node.js",
    provider: "Route Academy",
    category: "Web Development",
    description:
      "Backend development training covering Node.js, Express.js, MongoDB, Mongoose, REST APIs, and modern JavaScript.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    icon: "⚙️",
  },

  {
    title: "React.js",
    provider: "Programming with Mosh",
    category: "Frontend Development",
    description:
      "Self-learning React.js training focused on building modern and reusable frontend applications.",
    skills: ["React.js", "Components", "Hooks", "Frontend"],
    icon: "⚛️",
  },

  {
    title: "HTML, CSS & JavaScript",
    provider: "Yanfaa",
    category: "Web Development",
    description:
      "Web development fundamentals covering HTML, CSS, and JavaScript for building responsive websites.",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    icon: "🌐",
  },

  {
    title: "MOS Certificate",
    provider: "Alpatros Team",
    category: "Professional Skills",
    description:
      "Microsoft Office Specialist certification demonstrating practical skills in Microsoft Office applications.",
    skills: ["Microsoft Office", "Productivity", "Computer Skills"],
    icon: "📊",
  },

  {
    title: "PFA Course",
    provider: "ITSharks",
    category: "Finance & Accounting",
    description:
      "Professional financial accounting training covering practical accounting concepts and financial fundamentals.",
    skills: ["Accounting", "Finance", "Financial Concepts"],
    icon: "📈",
  },

  {
    title: "Entrepreneurship",
    provider: "Egyptian Banking Institute",
    category: "Business",
    description:
      "Entrepreneurship training focused on business fundamentals, entrepreneurial thinking, and developing business ideas.",
    skills: ["Entrepreneurship", "Business", "Innovation"],
    icon: "💡",
  },

  {
    title: "Financial Analysis",
    provider: "Bank Misr",
    category: "Banking & Finance",
    description:
      "Financial analysis training covering key concepts related to analyzing financial information and business performance.",
    skills: ["Financial Analysis", "Banking", "Finance"],
    icon: "🏦",
  },

  {
    title: "Financial Inclusion",
    provider: "CIB",
    category: "Banking & Finance",
    description:
      "Training focused on financial inclusion and its role in expanding access to financial services.",
    skills: ["Financial Inclusion", "Banking", "Finance"],
    icon: "💳",
  },

  {
    title: "AI Catalyst V.04",
    provider: "DotPy — The Framework",
    category: "AI & Business",
    description:
      "Professional event focused on Artificial Intelligence, Business, Marketing, Leadership, and Emotional Intelligence.",
    skills: ["Artificial Intelligence", "Business", "Leadership"],
    icon: "🤖",
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-[#f8fbff] py-24 sm:py-28"
    >
      {/* Background Decorations */}

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Certificates & Training
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Learning that{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              builds experience.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A collection of my professional certifications, technical
            training, banking programs, and continuous learning experiences.
          </p>
        </div>

        {/* Certificates Grid */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <article
              key={certificate.title}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-200/30"
            >
              {/* Top Gradient */}

              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

              {/* Number */}

              <div className="absolute right-5 top-5 text-5xl font-black text-slate-100 transition-colors duration-500 group-hover:text-blue-50">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-2xl shadow-lg shadow-blue-200 transition-transform duration-500 group-hover:scale-110">
                {certificate.icon}
              </div>

              {/* Category */}

              <div className="mt-6">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                  {certificate.category}
                </span>
              </div>

              {/* Title */}

              <h3 className="mt-4 text-xl font-black leading-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                {certificate.title}
              </h3>

              {/* Provider */}

              <p className="mt-2 text-sm font-bold text-indigo-600">
                {certificate.provider}
              </p>

              {/* Description */}

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {certificate.description}
              </p>

              {/* Skills */}

              <div className="mt-6 flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-600 transition-colors group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom Line */}

              <div className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                Professional Development
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 p-8 text-white shadow-2xl sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
                Continuous Learning
              </p>

              <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                Always learning. Always building.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                Combining technical development, business knowledge, and
                professional training to build stronger digital solutions.
              </p>
            </div>

            <div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center backdrop-blur-xl">
              <p className="text-3xl font-black text-white">
                {certificates.length}+
              </p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Learning Experiences
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Certificates;