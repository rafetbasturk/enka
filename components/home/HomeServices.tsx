"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Settings, RotateCw, Layers, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

type ServiceItem = {
  key: string;
  slug: string;
  Icon: React.ElementType;
};

const SERVICES: ServiceItem[] = [
  {
    key: "cncMilling",
    slug: "cnc-freze",
    Icon: Settings,
  },
  {
    key: "cncTurning",
    slug: "cnc-torna",
    Icon: RotateCw,
  },
  {
    key: "moldParts",
    slug: "kalip-parca-uretimi",
    Icon: Layers,
  },
  {
    key: "surfaceGrinding",
    slug: "yuzey-taslama",
    Icon: Sparkles,
  },
];

export default function HomeServices() {
  const t = useTranslations("services");

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t("title")}
          </h2>
          <div className="mt-4 w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.key}
              index={index}
              title={t(`${service.key}.title`)}
              description={t(`${service.key}.description`)}
              href={`/services/${service.slug}`}
              Icon={service.Icon}
              cta={t("cta")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  href,
  Icon,
  cta,
  index,
}: {
  title: string;
  description: string;
  href: string;
  Icon: React.ElementType;
  cta: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={href}
        className="
          group relative flex flex-col h-full rounded-2xl border bg-background/50 backdrop-blur-sm p-8
          transition-all duration-300
          hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5
          focus:outline-none focus:ring-2 focus:ring-primary
        "
      >
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-bold tracking-tight">{title}</h3>

        <p className="mt-4 text-muted-foreground leading-relaxed grow">
          {description}
        </p>

        {/* <div
          className="
            mt-8 flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3
          "
        >
          {cta}
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </div> */}
      </Link>
    </motion.div>
  );
}
