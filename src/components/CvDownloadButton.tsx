"use client";

import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { cvFilenames } from "@/lib/cv/cvLabels";

type CvDownloadButtonProps = {
  variant?: "primary" | "outline";
  className?: string;
};

export function CvDownloadButton({
  variant = "outline",
  className = "",
}: CvDownloadButtonProps) {
  const { lang, t } = useLanguage();
  const filename = cvFilenames[lang];
  const href = `/cv/${filename}`;

  const base =
    "inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all text-sm";

  const variants = {
    primary:
      "gradient-primary text-bg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40",
    outline:
      "border border-primary/40 text-primary bg-primary/5 hover:bg-primary/15 hover:border-primary hover:shadow-lg hover:shadow-primary/20",
  };

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(href);
      if (!res.ok) throw new Error("PDF not found");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleDownload}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/15 border border-primary/30">
        <FileDown size={16} className="text-primary" />
      </span>
      {t.cv.download}
    </motion.button>
  );
}
