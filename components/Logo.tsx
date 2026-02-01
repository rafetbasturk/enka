"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import logo from "@/public/Logo.png";
import { useLocale } from "next-intl";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  itemProp?: string;
}

export default function Logo({
  className,
  width = 120,
  height = 40,
  priority = false,
  itemProp,
}: LogoProps) {
  const locale = useLocale();

  return (
    <Link
      href="/"
      locale={locale}
      itemProp={itemProp}
      aria-label="En-Ka Makine Kalıp Home"
      className={cn(
        "block relative hover:opacity-80 transition-opacity",
        className,
      )}
    >
      <Image
        src={logo}
        alt="En-Ka Makine Kalıp - CNC Freze ve Torna İmalatı"
        width={width}
        height={height}
        priority={priority}
        placeholder="blur"
        className="object-contain"
        style={{ width: "auto", height: "auto" }}
      />
    </Link>
  );
}
