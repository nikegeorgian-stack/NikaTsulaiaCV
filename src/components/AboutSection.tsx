"use client";

import { motion } from "framer-motion";
import { Info, Monitor, Smartphone, Wifi, Camera, CreditCard, Film, Code, Cpu } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection, AnimatedFadeIn } from "./AnimatedSection";

const techIconComponents = [Monitor, Smartphone, Wifi, Camera, CreditCard, Film, Code, Cpu] as const;

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-bg-light overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border rounded-full text-primary text-xs uppercase tracking-wider mb-4">
            <Info size={14} />
            {t.about.label}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            {t.about.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">{t.about.title.split(" ").pop()}</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedFadeIn direction="left" className="space-y-6">
            <p className="text-text-muted text-lg leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              {t.about.p2}
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              {t.about.p3}
            </p>
            <div className="relative bg-bg-card border border-border rounded-2xl p-6 overflow-hidden space-y-4">
              <div className="absolute top-0 left-0 w-1 h-full gradient-primary" />
              <p className="text-text leading-relaxed">{t.about.p4}</p>
              <p className="text-text leading-relaxed">{t.about.p4Work}</p>
              <p className="text-text-muted leading-relaxed text-[0.95rem]">
                {t.about.p4Cause}{" "}
                <a
                  href={t.about.p4CauseHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-4 transition-colors"
                >
                  {t.about.p4CauseLink}
                </a>
              </p>
            </div>
          </AnimatedFadeIn>

          <AnimatedFadeIn direction="right" delay={0.2}>
            <div className="bg-bg-card border border-border rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-radial-gradient from-primary/5 to-transparent pointer-events-none" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {t.about.techIcons.map((name, i) => {
                  const Icon = techIconComponents[i];
                  return (
                  <motion.div
                    key={name}
                    whileHover={{ y: -4, borderColor: "rgba(0, 212, 255, 0.5)" }}
                    className="bg-bg border border-border rounded-xl p-4 text-center transition-all hover:shadow-lg hover:shadow-primary/10"
                  >
                    <Icon size={32} className="text-primary mx-auto mb-2" />
                    <div className="text-sm text-text-muted font-medium">{name}</div>
                  </motion.div>
                  );
                })}
              </div>
            </div>
          </AnimatedFadeIn>
        </div>
      </div>
    </section>
  );
}
