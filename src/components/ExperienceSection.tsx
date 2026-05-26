"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection } from "./AnimatedSection";

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border rounded-full text-primary text-xs uppercase tracking-wider mb-4">
            <Briefcase size={14} />
            {t.experience.label}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            {t.experience.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">{t.experience.title.split(" ").pop()}</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent lg:-translate-x-px" />

          {t.experience.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-bg border-3 border-primary rounded-full z-10 lg:-translate-x-2 shadow-lg shadow-primary/30">
                <div className="absolute inset-0 border border-primary rounded-full animate-ping opacity-30" />
              </div>

              {/* Date - hidden on mobile, shown on desktop */}
              <div className={`hidden lg:block w-1/2 text-right ${i % 2 === 0 ? "pr-12" : "pl-12 text-left"}`}>
                <span className="text-primary font-display text-sm font-semibold tracking-wide">
                  {item.date}
                </span>
              </div>

              {/* Content */}
              <div className="ml-12 lg:ml-0 lg:w-1/2">
                <motion.div
                  whileHover={{ borderColor: "rgba(0, 212, 255, 0.3)", x: i % 2 === 0 ? 5 : -5 }}
                  className="bg-bg-card border border-border rounded-2xl p-6 transition-all"
                >
                  <span className="lg:hidden text-primary font-display text-sm font-semibold tracking-wide block mb-2">
                    {item.date}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.role}</h3>
                  <p className="text-text-muted text-sm mb-4">{item.company}</p>
                  <ul className="space-y-1">
                    {item.duties.map((duty, j) => (
                      <li key={j} className="flex items-start gap-2 text-text-dim text-sm">
                        <span className="text-primary mt-1">›</span>
                        {duty}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
