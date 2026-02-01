import { useTranslations } from "next-intl";

export function FAQSchema() {
  const t = useTranslations("faq");
  const items = t.raw("items") as {
    question: string;
    answer: string;
  }[];

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
