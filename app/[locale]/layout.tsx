import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { OrganizationSchema } from "@/components/OrganizationSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO } from "@/lib/seo";
import type { Viewport } from "next";
import Since from "@/components/Since";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { site } = SEO;

  const messages = (await import(`@/messages/${locale}.json`)).default;

  const baseUrl = site.baseUrl;
  const siteName = site.name[locale as keyof typeof site.name];

  return {
    metadataBase: new URL(baseUrl),

    title: {
      default: messages.home.title,
      template: `%s | ${siteName}`,
    },

    description: messages.home.description,
    keywords: messages.keywords,
    category: messages.category,

    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        tr: "/tr",
      },
    },

    inLanguage: locale,

    openGraph: {
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      url: `${baseUrl}/${locale}`,
      siteName,
      title: messages.home.title,
      description: messages.home.description,
      images: [
        {
          url: `${baseUrl}${site.logo}`,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: messages.home.title,
      description: messages.home.description,
      images: [`${baseUrl}${site.logo}`],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    icons: {
      icon: [
        { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
        { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
        { url: "/favicon-128.png", sizes: "128x128", type: "image/png" },
        { url: "/favicon-256.png", sizes: "256x256", type: "image/png" },
        { url: "/favicon.ico" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },

    manifest: "/manifest.webmanifest",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1500px] mx-auto`}
      >
        <OrganizationSchema locale={locale} />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="grow">{children}</main>
              <Since />
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
