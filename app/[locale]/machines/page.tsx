import MachinesPage from "@/components/pages/MachinesPage";
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
    title: messages.machines.title,
    description: messages.machines.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/machines`,
    },
    openGraph: {
      title: messages.machines.title,
      description: messages.machines.description,
      url: `${baseUrl}/${locale}/machines`,
      images: [`${baseUrl}${site.logo}`],
    },
    twitter: {
      title: messages.machines.title,
      description: messages.machines.description,
      images: [`${baseUrl}${site.logo}`],
    },
  };
}

export default function Machines() {
  return <MachinesPage />;
}
