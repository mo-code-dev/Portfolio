import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Certificates", id: "certificates" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavigation = (id) => {
    setIsOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleResume = () => {
    setIsOpen(false);

    window.open(
      "/Mohamed_Mamdouh_Training_Internship_CV_FINAL.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-5 py-3.5 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "border-blue-100/80 bg-white/85 shadow-xl shadow-blue-900/10 backdrop-blur-2xl"
            : "border-white/60 bg-white/55 shadow-lg shadow-blue-900/5 backdrop-blur-xl"
        }`}
      >
        {/* Logo */}

        <button
          type="button"
          onClick={() => handleNavigation("home")}
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/20">
            <span className="relative z-10 text-base font-bold text-white">
              M
            </span>

            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-[15px] font-bold tracking-wide text-slate-900">
              Mohamed Mamdouh
            </p>

            <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-500">
              Full-Stack Developer
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavigation(link.id)}
                className={`relative rounded-xl px-3.5 py-2.5 text-[15px] font-medium transition-all duration-300 lg:px-4 ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-500 hover:bg-slate-100/80 hover:text-slate-900"
                }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.6)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Desktop Resume Button */}

        <button
          type="button"
          onClick={handleResume}
          className="group hidden items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 md:flex"
        >
          My Resume

          <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </button>

        {/* Mobile Menu Button */}

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/70 transition-all duration-300 hover:bg-white md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}

      <div
        className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-blue-100 bg-white/90 shadow-2xl shadow-blue-900/10 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          isOpen
            ? "max-h-[800px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="p-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavigation(link.id)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-[15px] font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span>{link.name}</span>

                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.6)]" />
                )}
              </button>
            );
          })}

          {/* Mobile Resume Button */}

          <button
            type="button"
            onClick={handleResume}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
          >
            My Resume

            <span>↗</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;