"use client";

import { Link, usePathname } from "@/i18n/routing";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useState } from "react";
import { useLinks } from "@/hooks/useLinks";

const Navbar = () => {
  const links = useLinks();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      aria-label="Primary"
      className="flex items-center justify-between p-6 bg-background/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <Logo className="md:basis-1/6" />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center justify-center gap-8 basis-4/6">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                itemProp="url"
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm font-semibold transition-colors",
                  isActive ? "text-primary" : "hover:text-primary",
                )}
              >
                <span itemProp="name">{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="hidden md:flex items-center gap-4 basis-1/6">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden px-2">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon-lg"
              className="md:hidden"
              aria-label="Open main menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <Menu />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            id="mobile-menu"
            aria-label="Main navigation"
            side="right"
            className="w-[300px] sm:w-[400px] p-4"
          >
            <VisuallyHidden>
              <SheetTitle>Mobile navigation</SheetTitle>
              <SheetDescription>Navigation links and settings</SheetDescription>
            </VisuallyHidden>

            <div className="flex flex-col gap-8 mt-8">
              <div className="flex flex-col gap-4">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors p-2 rounded-md hover:bg-muted",
                        isActive
                          ? "text-primary bg-muted/50"
                          : "text-foreground",
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="flex items-center gap-4">
                <LanguageSwitcher className="w-full" />
                <ThemeSwitcher />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
