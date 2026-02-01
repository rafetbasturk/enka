"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reference } from "@/types/reference";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

export default function References({
  references,
}: {
  references: Reference[];
}) {
  const t = useTranslations("references");

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl space-y-20 px-6 py-12 lg:px-8">
        <header className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-black tracking-tighter sm:text-7xl">
              <span className="text-primary italic">{t("title")}</span>
            </h1>
          </motion.div>
        </header>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
        >
          {references.map((ref) => (
            <motion.li
              key={ref.slug}
              variants={item}
              whileHover={{ y: -6 }}
              className="flex h-32 items-center justify-center rounded-2xl border border-border p-6 transition hover:shadow-lg bg-primary/50 dark:bg-primary/20"
            >
              <Image
                src={ref.image}
                alt={`${ref.name} logo`}
                className="max-h-full max-w-full object-contain transition size-60"
                priority={false}
              />
            </motion.li>
          ))}
        </motion.ul>

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-2xl font-bold text-foreground">{t("others")}</p>
        </div>
      </div>
    </section>
  );
}
