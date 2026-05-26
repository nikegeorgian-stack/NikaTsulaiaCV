"use client";

import { motion } from "framer-motion";
import { Star, Monitor, Wrench, FileText, Users, Film, Smartphone } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const iconMap: Record<string, React.ElementType> = {
  monitor: Monitor,
  smartphone: Smartphone,
  film: Film,
  wrench: Wrench,
  "file-text": FileText,
  users: Users,
};

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-bg-light">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border rounded-full text-primary text-xs uppercase tracking-wider mb-4">
            <Star size={14} />
            {t.skills.label}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            {t.skills.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">{t.skills.title.split(" ").pop()}</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {t.skills.categories.map((cat, i) => {
            const IconComponent = iconMap[cat.icon] || Star;
            const description = "description" in cat ? cat.description : undefined;
            return (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ borderColor: "rgba(0, 212, 255, 0.3)" }}
                  className="bg-bg-card border border-border rounded-2xl p-6 h-full transition-all hover:shadow-lg hover:shadow-primary/5 flex flex-col"
                >
                  <div className="flex items-start gap-3 pb-4 mb-3 border-b border-border">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <IconComponent size={22} className="text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-white leading-tight">{cat.name}</h3>
                      {description && (
                        <p className="text-text-muted text-sm leading-relaxed mt-2">{description}</p>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {cat.items.map((item, j) => (
                      <motion.li
                        key={j}
                        whileHover={{ x: 8, color: "#e2e8f0" }}
                        className="flex items-center gap-3 text-text-muted text-sm transition-colors cursor-default"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
