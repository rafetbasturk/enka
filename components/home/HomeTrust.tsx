"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function HomeTrust() {
  const t = useTranslations("home.trust");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-3 gap-6"
    >
      <TrustItem
        variants={item}
        value={t("precision.value")}
        label={t("precision.label")}
      />
      <TrustItem
        variants={item}
        value={t("delivery.value")}
        label={t("delivery.label")}
      />
      <TrustItem
        variants={item}
        value={t("experience.value")}
        label={t("experience.label")}
      />
    </motion.div>
  );
}

function TrustItem({
  value,
  label,
  variants,
}: {
  value: string;
  label: string;
  variants: any;
}) {
  return (
    <motion.div variants={variants} className="text-left">
      <div className="text-md md:text-2xl font-bold text-primary tracking-tight">
        {value}
      </div>
      <div className="mt-1 text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-medium">
        {label}
      </div>
    </motion.div>
  );
}
