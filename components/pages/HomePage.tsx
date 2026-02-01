"use client";

import { useTranslations } from "next-intl";
import HomeServices from "../home/HomeServices";
import HomeCTA from "../home/HomeCTA";
import HomeHero from "../home/HomeHero";
import { FAQSection } from "../faq/FAQSection";

export default function HomePage() {
  const t = useTranslations("home");
  return (
    <>
      <header>
        <h1 className="sr-only">{t("seoH1")}</h1>
        <HomeHero />
      </header>

      <HomeServices />
      <HomeCTA />
      <FAQSection />
    </>
  );
}
