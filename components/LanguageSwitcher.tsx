"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { startTransition, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = useTranslations("navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: newLocale },
      );
    });
  };

  if (!mounted) return null;

  return (
    <div className={cn("relative", className)}>
      <span className="sr-only">Language selector</span>
      <div className="sr-only">
        <Link href={pathname} locale="tr">
          Türkçe
        </Link>
        <Link href={pathname} locale="en">
          English
        </Link>
      </div>
      <Select value={locale} onValueChange={handleLanguageChange}>
        <SelectTrigger
          className="w-32 bg-background/50 backdrop-blur-sm border-input hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label="Select language"
        >
          <SelectValue placeholder={t("language")} />
        </SelectTrigger>
        <SelectContent align="end">
          <SelectItem value="en">
            <div className="flex items-center gap-2">
              <span className="text-lg leading-none">🇺🇸</span>
              <span className="font-medium">{t("languageSwitcher.en")}</span>
            </div>
          </SelectItem>
          <SelectItem value="tr">
            <div className="flex items-center gap-2">
              <span className="text-lg leading-none">🇹🇷</span>
              <span className="font-medium">{t("languageSwitcher.tr")}</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
