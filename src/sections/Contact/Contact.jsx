import React from "react";

const contactItems = [
  {
    title: "Email",
    value: "mohamedmmdouh541@gmail.com",
    href: "mailto:mohamedmmdouh541@gmail.com",
    icon: "✉",
  },
  {
    title: "WhatsApp",
    value: "01007924757",
    href: "https://wa.me/201007924757",
    icon: "◉",
  },
  {
    title: "WhatsApp",
    value: "01009305429",
    href: "https://wa.me/201009305429",
    icon: "◉",
  },
  {
    title: "Location",
    value: "Cairo / Giza, Egypt",
    href: "https://www.google.com/maps/search/?api=1&query=Giza%2C%20Egypt",
    icon: "⌖",
  },
];

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-indigo-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Get In Touch
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              great together.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            I&apos;m open to web development opportunities, freelance projects,
            collaborations, and interesting ideas. Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50/80 p-6 shadow-xl shadow-slate-200/40 sm:p-8">
            <div className="space-y-4">
              {contactItems.map((item) => (
                <a
                  key={`${item.title}-${item.value}`}
                  href={item.href}
                  target={item.title === "Email" ? undefined : "_blank"}
                  rel={item.title === "Email" ? undefined : "noreferrer"}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl text-white shadow-lg shadow-blue-200">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                      {item.title}
                    </p>
                    <p className="mt-1 truncate font-semibold text-slate-800 group-hover:text-blue-700">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-7 border-t border-slate-200 pt-7">
              <p className="mb-4 text-sm font-bold text-slate-500">Find me online</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/mo-code-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-1 hover:shadow-md"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/mohamed-mamdouh-bab243302"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-100 hover:shadow-md"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 text-white shadow-2xl shadow-indigo-200 sm:p-10">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-50">
                  Available for opportunities
                </span>

                <h3 className="mt-7 text-3xl font-black leading-tight sm:text-4xl">
                  Have a project in mind?
                </h3>

                <p className="mt-5 max-w-md leading-7 text-blue-50/90">
                  Whether you need a responsive frontend, a complete
                  full-stack application, or help turning an idea into a real
                  product, let&apos;s talk.
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="mailto:mohamedmmdouh541@gmail.com"
                  className="inline-flex rounded-xl bg-white px-6 py-3.5 font-bold text-indigo-700 shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  Send Me an Email <span className="ml-2">→</span>
                </a>

                <p className="mt-5 text-sm text-blue-100/80">
                  React • Tailwind CSS • Node.js • Express • MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Mohamed Mamdouh. 
        </div>
      </div>
    </section>
  );
}

export default Contact;
