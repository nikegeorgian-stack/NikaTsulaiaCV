"use client";

import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-bg-light border-t border-border py-8 px-4 text-center">
      <p className="text-text-dim text-sm">
        © 2025 {t.contact.cardName} —{" "}
        <span className="text-accent inline-block animate-heartbeat">♥</span>
        {" — "}{t.footer}
      </p>
    </footer>
  );
}
