"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navItems = ["about", "projects", "skills", "experience", "contact"] as const;

export function Navigation() {
  const { t } = useLanguage();
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
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-bg/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-border"
            : "bg-bg/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-lg sm:text-xl font-bold text-primary tracking-wide shrink-0"
          >
            {t.hero.title1}
            <span className="text-text">{t.hero.title2}</span>
          </a>

          {/* Desktop: nav + language */}
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
            <LanguageSwitcher />
          </div>

          {/* Mobile: language always visible + menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher compact />
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-primary p-2 rounded-lg border border-border/60 bg-bg-card/80"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu — navigation only */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[4.25rem] z-40 bg-bg/98 backdrop-blur-xl border-b border-border lg:hidden"
          >
            <div className="flex flex-col p-6 gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => scrollTo(item)}
                  className="text-left text-lg font-medium text-text-muted hover:text-primary transition-colors py-3 border-b border-border/50 last:border-0"
                >
                  {t.nav[item]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
