"use client";

import { useTranslations } from "next-intl";
import HomeTrust from "./HomeTrust";
import { motion } from "framer-motion";

export default function HomeHeroContent() {
  const t = useTranslations("home.hero");

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-xl"
    >
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight whitespace-pre-line leading-[1.1]">
        {t("headline")}
      </h1>

      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        {t("description")}
      </p>

      <p className="mt-4 text-muted-foreground italic">{t("subDescription")}</p>

      {/* TRUST IS PART OF THE HERO COPY */}
      <div className="mt-10 border-l-2 border-primary/30 pl-6">
        <HomeTrust />
      </div>
    </motion.div>
  );
}
