import { SEO } from "@/lib/seo";

export function OrganizationSchema({ locale }: { locale: string }) {
  const { site } = SEO;
  const baseUrl = site.baseUrl;
  const name = site.name[locale as keyof typeof site.name];
  const description = site.description[locale as keyof typeof site.description];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: `${baseUrl}/${locale}`,
        name,
        inLanguage: locale,
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
      },

      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${baseUrl}/#organization`,
        name,
        legalName: site.legalName,
        url: baseUrl,
        description,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}${site.logo}`,
          width: 512,
          height: 512,
        },
        image: `${baseUrl}${site.logo}`,

        email: site.email,
        telephone: site.phone,
        faxNumber: site.fax,

        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.district,
          addressRegion: site.address.city,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.lat,
          longitude: site.geo.lng,
        },

        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: site.openingHours.days,
            opens: site.openingHours.opens,
            closes: site.openingHours.closes,
          },
        ],

        sameAs: site.socials,

        knowsLanguage: ["tr", "en"],

        areaServed: {
          "@type": "Country",
          name: "Turkey",
        },

        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name:
                locale === "tr"
                  ? "Hassas CNC Frezeleme"
                  : "Precision CNC Milling",
            },
            provider: { "@id": `${baseUrl}/#organization` },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name:
                locale === "tr"
                  ? "Hassas CNC Tornalama"
                  : "Precision CNC Turning",
            },
            provider: { "@id": `${baseUrl}/#organization` },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name:
                locale === "tr"
                  ? "Kalıp Parçaları İmalatı"
                  : "Mold Parts Manufacturing",
            },
            provider: { "@id": `${baseUrl}/#organization` },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
