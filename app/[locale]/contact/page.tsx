import { useTranslations } from "next-intl";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";
import MapComponent from "@/components/contact/MapComponent";
import BackgroundVisuals from "@/components/BackgroundVisuals";
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
    title: messages.contact.title,
    description: messages.contact.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/contact`,
    },
    openGraph: {
      title: messages.contact.title,
      description: messages.contact.description,
      url: `${baseUrl}/${locale}/contact`,
      images: [`${baseUrl}${site.logo}`],
    },
    twitter: {
      title: messages.contact.title,
      description: messages.contact.description,
      images: [`${baseUrl}${site.logo}`],
    },
  };
}

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <>
      <BackgroundVisuals />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ContactDetails />
          <ContactForm />
        </div>

        <MapComponent />
      </div>
    </>
  );
}
