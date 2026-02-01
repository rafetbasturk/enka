"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import * as React from "react";

export function FAQSection() {
  const t = useTranslations("faq");
  const items = t.raw("items") as {
    question: string;
    answer: string;
  }[];

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t("subtitle") ||
              "Common questions about our services and processes."}
          </p>
        </motion.div>

        <div className="grid gap-4">
          {items.map((item, index) => (
            <FAQItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="rounded-2xl border bg-background overflow-hidden transition-all hover:border-primary/30"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <h3 className="font-bold text-lg pr-8">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed border-t border-dashed mt-2">
          <p className="mt-4">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
