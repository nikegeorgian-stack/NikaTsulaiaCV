"use client";

import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

export function LanguagesSection() {
  const { t } = useLanguage();

  return (
    <section id="languages" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-bg-light">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border rounded-full text-primary text-xs uppercase tracking-wider mb-4">
            <Languages size={14} />
            {t.languages.label}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            {t.languages.title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="gradient-text">{t.languages.title.split(" ").slice(-2).join(" ")}</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="flex flex-wrap justify-center gap-4" staggerDelay={0.1}>
          {t.languages.items.map((lang, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -3, borderColor: "rgba(0, 212, 255, 0.5)" }}
                className="flex items-center gap-3 bg-bg-card border border-border rounded-2xl px-6 py-4 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center text-xl">
                  {lang.flag}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{lang.name}</div>
                  <div className="text-text-muted text-xs">{lang.level}</div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
