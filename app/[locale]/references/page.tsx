import References from "@/components/pages/References";
import a01 from "@/public/images/ref/a01.webp";
import a02 from "@/public/images/ref/a02.webp";
import a03 from "@/public/images/ref/a03.webp";
import a04 from "@/public/images/ref/a04.webp";
import a05 from "@/public/images/ref/a05.webp";
import a06 from "@/public/images/ref/a06.webp";
import a07 from "@/public/images/ref/a07.webp";
import a08 from "@/public/images/ref/a08.webp";
import a09 from "@/public/images/ref/a09.png";
import a10 from "@/public/images/ref/a10.webp";
import a11 from "@/public/images/ref/a11.webp";
import a12 from "@/public/images/ref/a12.webp";
import a13 from "@/public/images/ref/a13.png";
import { Reference } from "@/types/reference";
import { SEO } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const { site } = SEO;
  const baseUrl = site.baseUrl;

  return {
    title: messages.references.title,
    description: messages.references.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/references`,
    },
    openGraph: {
      title: messages.references.title,
      description: messages.references.description,
      url: `${baseUrl}/${locale}/references`,
      images: [`${baseUrl}${site.logo}`],
    },
    twitter: {
      title: messages.references.title,
      description: messages.references.description,
      images: [`${baseUrl}${site.logo}`],
    },
  };
}

const references: Reference[] = [
  { slug: "Adam Makina", image: a01, name: "Adam Makina logo" },
  { slug: "Alp Form", image: a02, name: "Alp Form logo" },
  { slug: "Arslan Döküm", image: a03, name: "Arslan Döküm logo" },
  { slug: "Babe", image: a04, name: "Babe logo" },
  { slug: "Burulaş", image: a05, name: "Burulaş logo" },
  { slug: "Coşkunöz", image: a06, name: "Coşkunöz logo" },
  { slug: "Elde", image: a07, name: "Elde logo" },
  { slug: "Ermetal", image: a08, name: "Ermetal logo" },
  { slug: "Fontana", image: a09, name: "Fontana logo" },
  { slug: "Ford", image: a10, name: "Ford logo" },
  { slug: "Rollmech", image: a11, name: "Rollmech logo" },
  { slug: "Tezel Klima", image: a12, name: "Tezel Klima logo" },
  { slug: "Tofaş", image: a13, name: "Tofaş logo" },
] as const;

export default function ReferencesPage() {
  return <References references={references} />;
}
