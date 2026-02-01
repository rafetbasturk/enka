"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function HomeCTA() {
  const t = useTranslations("cta.home");

  return (
    <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Decorative Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            {t("title")}
          </h2>

          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
            {t("description")}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="tel:+905052382655"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-primary font-bold transition-all hover:bg-white/90 hover:scale-105 active:scale-95 shadow-xl"
            >
              <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
              {t("call")}
            </a>

            <a
              href="/contact"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 font-bold transition-all hover:bg-white/10 hover:border-white active:scale-95"
            >
              {t("offer")}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
