"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

function isSymbolBadge(value: string) {
  return !/^\d/.test(value);
}

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border rounded-full text-primary text-xs uppercase tracking-wider mb-4">
            <CheckCircle2 size={14} />
            {t.projects.label}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            {t.projects.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">{t.projects.title.split(" ").pop()}</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6"
          staggerDelay={0.1}
        >
          {t.projects.items.map((project, index) => {
            const symbol = isSymbolBadge(project.number);

            const spanClass =
              index >= 3
                ? "sm:col-span-1 lg:col-span-3"
                : "sm:col-span-1 lg:col-span-2";

            return (
              <StaggerItem key={project.title} className={spanClass}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative h-full bg-bg-card border border-border rounded-2xl p-6 overflow-hidden card-hover flex flex-col"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`flex-shrink-0 flex items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 group-hover:bg-primary/15 transition-colors ${
                        symbol ? "w-14 h-14 text-2xl" : "w-16 h-16"
                      }`}
                    >
                      <span
                        className={
                          symbol
                            ? "text-primary leading-none"
                            : "font-display text-2xl sm:text-3xl font-bold text-primary leading-none"
                        }
                      >
                        {project.number}
                      </span>
                    </div>
                    <div className="min-w-0 pt-1">
                      <h3 className="text-lg font-semibold text-white leading-snug">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 border border-border rounded-full text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
