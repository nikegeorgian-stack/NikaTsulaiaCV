"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useMousePosition } from "@/hooks/useMousePosition";
import Image from "next/image";

export function HeroSection() {
  const { t } = useLanguage();
  const mouse = useMousePosition();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border rounded-full text-primary text-sm uppercase tracking-wider mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {t.hero.badge}
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="gradient-text">{t.hero.title1}</span>{" "}
            <span className="text-primary">{t.hero.title2}</span>
          </h1>

          <p className="text-xl text-text-muted font-light mb-6 max-w-xl mx-auto lg:mx-0">
            {t.hero.subtitle}
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-2 text-text-dim mb-8">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm">{t.hero.location}</span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-bg font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow"
            >
              <Phone size={18} />
              {t.hero.btnContact}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text font-semibold rounded-xl hover:border-primary hover:text-primary transition-colors"
            >
              {t.hero.btnProjects}
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative max-w-md mx-auto lg:max-w-none">
            {/* Glow effect */}
            <div className="absolute -inset-4 gradient-primary rounded-[2rem] opacity-20 blur-3xl animate-glow-pulse" />

            {/* Rotating rings */}
            <div className="absolute -inset-3 border-2 border-primary/30 rounded-[1.75rem] animate-ring-rotate" />
            <div className="absolute -inset-6 border border-dashed border-primary/15 rounded-[2.25rem] animate-ring-rotate-reverse" />

            {/* Image container with 3D tilt */}
            <motion.div
              className="relative z-10"
              style={{
                rotateY: (mouse.x - (typeof window !== "undefined" ? window.innerWidth / 2 : 0)) * 0.01,
                rotateX: -(mouse.y - (typeof window !== "undefined" ? window.innerHeight / 2 : 0)) * 0.01,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-border/50">
                <Image
                  src="/photo.jpg"
                  alt={`${t.hero.title1} ${t.hero.title2}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Floating stats */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 lg:right-0 bg-bg-card border border-border rounded-2xl px-4 py-3 backdrop-blur-xl z-20"
            >
              <div className="font-display text-2xl font-bold text-primary">50+</div>
              <div className="text-xs text-text-muted uppercase tracking-wider">{t.hero.statHotels}</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-8 -left-4 lg:left-0 bg-bg-card border border-border rounded-2xl px-4 py-3 backdrop-blur-xl z-20"
            >
              <div className="font-display text-2xl font-bold text-primary">30+</div>
              <div className="text-xs text-text-muted uppercase tracking-wider">{t.hero.statOrgs}</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
              className="absolute -bottom-4 right-8 bg-bg-card border border-border rounded-2xl px-4 py-3 backdrop-blur-xl z-20"
            >
              <div className="font-display text-2xl font-bold text-primary">80+</div>
              <div className="text-xs text-text-muted uppercase tracking-wider">{t.hero.statOffices}</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-dim text-xs uppercase tracking-wider"
      >
        <span>{t.hero.scrollDown}</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
