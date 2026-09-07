import { useEffect, useState } from "react";

const experiences = [
  {
    id: 1,
    role: "HR Recruiter / Talent Acquisition Specialist",
    company: "Freelance",
    location: "Remote",
    period: "1 Year",
    type: "Freelance",
    description:
      "Worked as a freelance HR Recruiter and Talent Acquisition Specialist, supporting recruitment activities and helping identify and evaluate suitable candidates for different roles.",
    responsibilities: [
      "Sourced and screened candidates based on job requirements.",
      "Reviewed CVs and evaluated candidate qualifications.",
      "Communicated with candidates throughout the recruitment process.",
      "Supported interview scheduling and candidate follow-up.",
      "Assisted with matching candidates to suitable job opportunities.",
    ],
    icon: "hr",
  },
  {
    id: 2,
    role: "Accountant",
    company: "Accounting Office",
    location: "Mohandessin, Giza",
    period: "1 Year",
    type: "Full-Time",
    description:
      "Worked at an accounting office in Mohandessin, gaining practical experience in accounting operations, financial documentation, and day-to-day office procedures.",
    responsibilities: [
      "Assisted with daily accounting and financial transactions.",
      "Prepared and organized accounting documents and records.",
      "Supported data entry and financial record keeping.",
      "Worked with financial documents and accounting procedures.",
      "Maintained accuracy and organization of accounting records.",
    ],
    icon: "accounting",
  },
  {
    id: 3,
    role: "Sales Representative",
    company: "Raya",
    location: "Egypt",
    period: "Experience",
    type: "Professional Experience",
    description:
      "Gained professional sales experience through customer interaction, communication, and supporting sales activities.",
    responsibilities: [
      "Communicated with customers and understood their needs.",
      "Presented products and services clearly to customers.",
      "Supported sales activities and customer follow-up.",
      "Developed communication and negotiation skills.",
    ],
    icon: "sales",
  },
  {
    id: 4,
    role: "Organization Member / Volunteer",
    company: "Youth Leaders Foundation (YLY)",
    location: "Ministry of Youth and Sports",
    period: "Volunteer Experience",
    type: "Volunteer",
    description:
      "Participated as a volunteer with Youth Leaders Foundation, developing teamwork, communication, organization, and event coordination skills.",
    responsibilities: [
      "Worked collaboratively within a volunteer team.",
      "Supported organizational and event-related activities.",
      "Communicated with team members and participants.",
      "Developed teamwork, leadership, and organizational skills.",
    ],
    icon: "volunteer",
  },
];

function ExperienceIcon({ type }) {
  if (type === "hr") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  if (type === "accounting") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
      >
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8M8 11h2M14 11h2M8 15h2M14 15h2M8 18h8" />
      </svg>
    );
  }

  if (type === "sales") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
      >
        <path d="M3 3v18h18" />
        <path d="m7 15 4-4 3 2 5-6" />
        <path d="M15 7h4v4" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
      <path d="M19 11v6M16 14h6" />
    </svg>
  );
}

function Experience() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-12"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-140px] top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-[-120px] top-1/3 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-100/30 blur-3xl" />

        <div className="absolute left-[10%] top-36 h-2 w-2 rounded-full bg-blue-300" />

        <div className="absolute right-[15%] top-52 h-2 w-2 rounded-full bg-indigo-300" />
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            My Experience
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Experience &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            A combination of professional experience, freelance work,
            volunteering, and continuous learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-blue-300 via-indigo-200 to-transparent md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((experience, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={experience.id}
                  className={`relative transition-all duration-700 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Desktop Timeline Dot */}
                  <div className="absolute left-1/2 top-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-blue-600 shadow-lg shadow-blue-500/30 md:block" />

                  {/* Mobile Timeline Dot */}
                  <div className="absolute left-0 top-8 z-10 h-3 w-3 rounded-full bg-blue-600 shadow-md shadow-blue-500/30 md:hidden" />

                  <div
                    className={`grid items-start md:grid-cols-2 ${
                      isLeft ? "" : ""
                    }`}
                  >
                    {/* Left Side */}
                    <div
                      className={`pl-8 md:pl-0 ${
                        isLeft
                          ? "md:pr-14"
                          : "md:col-start-2 md:pl-14"
                      }`}
                    >
                      <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_25px_70px_-35px_rgba(37,99,235,0.35)]">
                        {/* Gradient Top */}
                        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 opacity-70 transition-opacity group-hover:opacity-100" />

                        {/* Glow */}
                        <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-100/40 blur-3xl transition-all duration-500 group-hover:bg-indigo-100/60" />

                        <div className="relative">
                          {/* Card Header */}
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-4">
                              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2">
                                <ExperienceIcon type={experience.icon} />
                              </div>

                              <div>
                                <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                                  {experience.type}
                                </span>

                                <h3 className="mt-1 text-xl font-extrabold leading-tight text-slate-900 sm:text-2xl">
                                  {experience.role}
                                </h3>

                                <p className="mt-1 text-sm font-semibold text-slate-500">
                                  {experience.company}
                                </p>
                              </div>
                            </div>

                            <span className="hidden shrink-0 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 sm:inline-flex">
                              {experience.period}
                            </span>
                          </div>

                          {/* Mobile Period */}
                          <div className="mt-4 sm:hidden">
                            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                              {experience.period}
                            </span>
                          </div>

                          {/* Location */}
                          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-500">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              className="h-4 w-4 text-blue-600"
                            >
                              <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                              <circle cx="12" cy="10" r="2.5" />
                            </svg>

                            {experience.location}
                          </div>

                          {/* Description */}
                          <p className="mt-5 text-sm leading-7 text-slate-600">
                            {experience.description}
                          </p>

                          {/* Responsibilities */}
                          <div className="mt-6 space-y-3">
                            {experience.responsibilities.map(
                              (responsibility) => (
                                <div
                                  key={responsibility}
                                  className="flex items-start gap-3"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                                  <p className="text-sm leading-6 text-slate-600">
                                    {responsibility}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          className={`mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 shadow-2xl shadow-blue-500/10 transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
                Growing Every Day
              </p>

              <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Different experiences. One goal.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-7 text-blue-100">
                Building a strong professional background while continuously
                developing my technical and business skills.
              </p>
            </div>

            {/* <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur">
              
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;