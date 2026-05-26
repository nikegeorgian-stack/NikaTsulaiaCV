"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setExit(true), 300);
          setTimeout(onComplete, 800);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 0.98, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="font-display text-5xl font-bold text-primary tracking-[0.1em] mb-4"
          >
            NT
          </motion.div>
          <p className="text-text-muted text-sm uppercase tracking-[0.2em] mb-8">
            Loading Experience
          </p>
          <div className="w-52 h-0.5 bg-bg-card rounded-full overflow-hidden">
            <motion.div
              className="h-full gradient-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-text-dim text-xs mt-3 font-mono">{Math.min(Math.round(progress), 100)}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
