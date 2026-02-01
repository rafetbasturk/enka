"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import instagram from "@/public/instagram.svg";
import facebook from "@/public/facebook.svg";
import { useTranslations } from "next-intl";
import { useLinks } from "@/hooks/useLinks";
import Logo from "./Logo";
import { SEO } from "@/lib/seo";
import Since from "./Since";

export default function Footer() {
  const t = useTranslations("footer");
  const links = useLinks();
  const { site } = SEO;

  return (
    <footer
      className="bg-muted/60 border-t border-border mt-auto"
      itemScope
      itemType="https://schema.org/LocalBusiness"
      itemID={`${site.baseUrl}/#organization`}
    >
      <meta itemProp="url" content={site.baseUrl} />
      <meta itemProp="logo" content={`${site.baseUrl}${site.logo}`} />
      <meta itemProp="name" content={site.legalName} />

      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Logo />
          <p className="mt-6 text-sm text-muted-foreground">{t("about")}</p>
        </div>

        {/* Nav */}
        <nav aria-label="Footer navigation" className="md:m-auto">
          <p className="font-semibold mb-4">{t("navigation")}</p>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="md:m-auto">
          <p className="font-semibold mb-4">{t("contact")}</p>

          <p className="text-sm text-muted-foreground" itemProp="address">
            {site.address.street}, {site.address.district}, {site.address.city},{" "}
            {site.address.country}
          </p>

          <p className="mt-2 text-sm">
            <a
              href={`tel:${site.phone}`}
              itemProp="telephone"
              className="hover:text-primary"
            >
              {site.phone}
            </a>
          </p>

          <p className="mt-2 text-sm">
            <a
              href={`mailto:${site.email}`}
              itemProp="email"
              className="hover:text-primary"
            >
              {site.email}
            </a>
          </p>

          <div className="flex gap-4 mt-6">
            <a href={site.socials[1]} target="_blank" rel="noopener noreferrer">
              <Image
                src={instagram}
                alt="Instagram"
                width={24}
                height={24}
                className="dark:invert"
              />
            </a>
            <a href={site.socials[0]} target="_blank" rel="noopener noreferrer">
              <Image
                src={facebook}
                alt="Facebook"
                width={24}
                height={24}
                className="dark:invert"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {t("company")} — {t("rights")}
      </div>
    </footer>
  );
}
