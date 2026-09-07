import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* Background Decorations */}

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}

        <div className="mb-14 max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Education
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Academic{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              background.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            My academic background in accounting and business provides a strong
            foundation that complements my technical development journey.
          </p>
        </div>

        {/* Education Card */}

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50/80 shadow-xl shadow-slate-200/40">

          {/* Top Gradient Line */}

          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

          <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">

            {/* Left Side */}

            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 text-white sm:p-10 lg:p-12">

              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />

              <div className="relative">

                {/* Graduation Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-3xl shadow-xl backdrop-blur-xl">
                  🎓
                </div>

                <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
                  2019 — 2023
                </p>

                <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  Bachelor&apos;s Degree
                </h3>

                <p className="mt-3 text-lg font-semibold text-blue-100">
                  Commerce — Accounting
                </p>

                <div className="mt-8 inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl">
                  <span className="text-sm font-bold">
                    Grade: Good
                  </span>
                </div>

              </div>
            </div>

            {/* Right Side */}

            <div className="p-8 sm:p-10 lg:p-12">

              {/* University */}

              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                  🏛️
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    University
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-slate-900">
                    Sohag University
                  </h3>

                  <p className="mt-1 font-semibold text-indigo-600">
                    Faculty of Commerce — English Section
                  </p>
                </div>

              </div>

              {/* Divider */}

              <div className="my-8 h-px bg-slate-200" />

              {/* Academic Details */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    Degree
                  </p>

                  <p className="mt-2 font-bold text-slate-900">
                    Bachelor&apos;s Degree
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Commerce
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    Major
                  </p>

                  <p className="mt-2 font-bold text-slate-900">
                    Accounting 
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    English Section
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    University
                  </p>

                  <p className="mt-2 font-bold text-slate-900">
                    Sohag University
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Egypt
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    Graduation
                  </p>

                  <p className="mt-2 font-bold text-slate-900">
                    2023
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Grade: Good
                  </p>
                </div>

              </div>

              {/* Bottom Statement */}

              <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  My academic background in accounting developed my analytical
                  thinking, attention to detail, problem-solving abilities,
                  and understanding of business fundamentals.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;