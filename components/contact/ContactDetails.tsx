"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Printer } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactDetails() {
  const t = useTranslations("contact");

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {t("heading")}
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {t("description")}
        </p>
      </motion.div>

      <div className="grid gap-6">
        <DetailItem
          icon={<Phone className="w-6 h-6" />}
          label={t("form.phone")}
          value={t("tel")}
          href={t("href")}
          delay={0.1}
        />
        <DetailItem
          icon={<Printer className="w-6 h-6" />}
          label="Fax"
          value={t("fax")}
          delay={0.2}
        />
        <DetailItem
          icon={<Mail className="w-6 h-6" />}
          label={t("form.mail")}
          value={t("email")}
          href={`mailto:${t("email")}`}
          delay={0.3}
        />
        <DetailItem
          icon={<MapPin className="w-6 h-6" />}
          label="Address"
          value={t("address")}
          delay={0.4}
        />
      </div>
    </div>
  );
}

function DetailItem({
  icon,
  label,
  value,
  href,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex gap-4 p-4 rounded-2xl border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors group"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest leading-none mb-1">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="text-lg font-medium text-foreground hover:text-primary transition-colors inline-block"
          >
            {value}
          </a>
        ) : (
          <p className="text-lg font-medium text-foreground">{value}</p>
        )}
      </div>
    </motion.div>
  );
}
