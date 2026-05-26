"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const navItems = ["about", "projects", "skills", "experience", "contact"] as const;

export function Navigation() {
  const { lang, t, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-bg/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-border"
            : "bg-bg/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-display text-xl font-bold text-primary tracking-wide"
          >
            {t.hero.title1}<span className="text-text">{t.hero.title2}</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="relative text-sm font-medium text-text-muted uppercase tracking-wider hover:text-primary transition-colors group"
              >
                {t.nav[item]}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            {/* Language Switcher */}
            <div className="flex gap-1 bg-bg-card rounded-lg p-1 border border-border">
              {(["ru", "ka", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    lang === l
                      ? "bg-primary text-bg"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-primary p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 bg-bg/98 backdrop-blur-xl border-b border-border lg:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-left text-lg font-medium text-text-muted hover:text-primary transition-colors py-2"
                >
                  {t.nav[item]}
                </button>
              ))}
              <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                {(["ru", "ka", "en"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                      lang === l
                        ? "bg-primary text-bg"
                        : "bg-bg-card text-text-muted border border-border"
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
