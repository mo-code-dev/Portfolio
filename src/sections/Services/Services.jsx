import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import services from "../../data/services";

function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f8fbff] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-slate-400" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Services
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
              What I can
              <br />
              build for you.
            </h2>
          </div>

          <div className="lg:max-w-2xl lg:justify-self-end">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              From focused landing pages to complete full-stack platforms,
              I build modern digital products with clear structure,
              responsive interfaces, and practical functionality.
            </p>
          </div>
        </div>

        {/* Services Layout */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Services List */}
          <div className="border-t border-slate-200">
            {services.map((service) => {
              const isActive = activeService.id === service.id;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveService(service)}
                  className={`group relative flex w-full items-center gap-5 border-b border-slate-200 py-6 text-left transition-all duration-300 sm:py-7 ${
                    isActive ? "pl-3 sm:pl-5" : ""
                  }`}
                >
                  {/* Active Line */}
                  <span
                    className={`absolute left-0 top-0 h-full w-[2px] origin-top transition-transform duration-300 ${
                      isActive
                        ? "scale-y-100 bg-slate-950"
                        : "scale-y-0 bg-slate-300 group-hover:scale-y-100"
                    }`}
                  />

                  <span
                    className={`w-9 shrink-0 text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-slate-950" : "text-slate-400"
                    }`}
                  >
                    {service.number}
                  </span>

                  <span className="flex-1">
                    <span
                      className={`block text-lg font-medium tracking-[-0.02em] transition-colors duration-300 sm:text-xl ${
                        isActive
                          ? "text-slate-950"
                          : "text-slate-600 group-hover:text-slate-950"
                      }`}
                    >
                      {service.shortTitle}
                    </span>

                    <span
                      className={`mt-1 block text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${
                        isActive
                          ? "text-slate-500"
                          : "text-slate-400"
                      }`}
                    >
                      {service.category}
                    </span>
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-300 ${
                      isActive
                        ? "border-slate-950 bg-slate-950 text-white"
                        : "border-slate-200 text-slate-400 group-hover:border-slate-400 group-hover:text-slate-700"
                    }`}
                  >
                    ↗
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Service Details */}
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10 lg:min-h-[620px] lg:p-12">
            {/* Decorative Number */}
            <div className="pointer-events-none absolute right-[-20px] top-[-35px] select-none text-[10rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.045] sm:text-[14rem]">
              {activeService.number}
            </div>

            <div className="relative z-10 flex h-full flex-col">
              {/* Top Label */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  {activeService.category}
                </span>

                <span className="text-sm text-slate-500">
                  {activeService.number}
                </span>
              </div>

              {/* Main Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-1 flex-col"
                >
                  <div className="mt-16 max-w-2xl sm:mt-20">
                    <h3 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                      {activeService.title}
                    </h3>

                    <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                      {activeService.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-12">
                    <div className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Included
                    </div>

                    <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {activeService.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 border-b border-white/10 pb-3 text-sm text-slate-200"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology */}
                  <div className="mt-auto pt-10">
                    <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Technologies
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {activeService.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;