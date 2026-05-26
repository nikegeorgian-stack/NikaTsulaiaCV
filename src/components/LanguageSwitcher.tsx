"use client";

import { useLanguage } from "@/hooks/useLanguage";
import type { Language } from "@/i18n/translations";

const LANGUAGES: { code: Language; label: string; title: string }[] = [
  { code: "ka", label: "ქარ", title: "ქართული" },
  { code: "ru", label: "RU", title: "Русский" },
  { code: "en", label: "EN", title: "English" },
];

type LanguageSwitcherProps = {
  className?: string;
  /** Compact pills for the mobile header bar */
  compact?: boolean;
};

export function LanguageSwitcher({ className = "", compact = false }: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`flex items-center gap-1 rounded-lg border border-border bg-bg-card/90 p-1 shadow-sm shadow-black/10 ${className}`}
      role="group"
      aria-label="Language"
    >
      {LANGUAGES.map(({ code, label, title }) => (
        <button
          key={code}
          type="button"
          title={title}
          onClick={() => setLang(code)}
          className={`font-semibold transition-all ${
            compact ? "min-w-[2.25rem] px-2 py-1 text-[11px] rounded-md" : "px-3 py-1.5 text-xs rounded-md"
          } ${
            lang === code
              ? "bg-primary text-bg shadow-sm"
              : "text-text-muted hover:text-text hover:bg-bg-light"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
