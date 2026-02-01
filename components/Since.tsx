"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Since() {
  const t = useTranslations("footer");

  return (
    <div className="py-10 border-t border-zinc-200/50 dark:border-white/5 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em] mb-6">
          {t("since")}
        </p>
        <div className="h-1.5 w-full bg-linear-to-r from-transparent via-primary to-transparent rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
      </motion.div>
    </div>
  );
}
