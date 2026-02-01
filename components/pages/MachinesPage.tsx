"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MachineCard } from "../machines/MachineCard";

import machine0 from "@/public/images/machines/hyundai-f4600.webp";
import machine1 from "@/public/images/machines/akira-seiki-v2.5.webp";
import machine2 from "@/public/images/machines/hyundai-f500.webp";
import machine3 from "@/public/images/machines/akira-seiki-v4.5.webp";
import machine4 from "@/public/images/machines/powermax.webp";
import machine5 from "@/public/images/machines/soraluce.webp";
import machine6 from "@/public/images/machines/quaser.png";
import machine7 from "@/public/images/machines/goodway.webp";
import machine8 from "@/public/images/machines/yunnan.webp";
import machine9 from "@/public/images/machines/toss.webp";
import machine10 from "@/public/images/machines/jetko.webp";
import machine11 from "@/public/images/machines/dis-cekme.webp";
import machine12 from "@/public/images/machines/laser1.webp";

const machineImages = [
  machine0,
  machine1,
  machine2,
  machine3,
  machine4,
  machine5,
  machine6,
  machine7,
  machine8,
  machine9,
  machine10,
  machine11,
  machine12,
];

export default function MachinesPage() {
  const t = useTranslations("machines");
  const machines = t.raw("list") as any[];

  return (
    <div className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-background">
      {/* Technical Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating Glow Accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-24 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/10 blur-[130px] opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <header className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-black tracking-tighter sm:text-7xl">
              <span className="bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                {t("heading").split(" ")[0]}
              </span>{" "}
              <span className="text-primary italic">
                {t("heading").split(" ").slice(1).join(" ")}
              </span>
            </h1>
          </motion.div>
        </header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {machines.map((machine, index) => (
            <MachineCard
              key={machine.id}
              specs={t("specs")}
              machine={machine}
              image={machineImages[index]}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
