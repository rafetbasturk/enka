"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useState, forwardRef } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const themes = [
  {
    key: "system",
    icon: Monitor,
    label: "System theme",
  },
  {
    key: "light",
    icon: Sun,
    label: "Light theme",
  },
  {
    key: "dark",
    icon: Moon,
    label: "Dark theme",
  },
] as const;

interface ThemeSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const ThemeSwitcher = forwardRef<HTMLDivElement, ThemeSwitcherProps>(
  ({ className = "", ...props }, ref) => {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    const handleThemeClick = useCallback(
      (themeKey: string) => {
        setTheme(themeKey);
      },
      [setTheme],
    );

    // Prevent hydration mismatch
    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative isolate flex h-8 rounded-full bg-background p-1 ring-1 ring-border",
          className,
        )}
        {...props}
      >
        {themes.map(({ key, icon: Icon, label }) => {
          const isActive = theme === key;

          return (
            <button
              aria-label={label}
              className="relative h-6 w-6 rounded-full cursor-pointer z-10"
              key={key}
              onClick={() => handleThemeClick(key)}
              type="button"
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary z-[-1]"
                  layoutId="activeTheme"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <Icon
                className={cn(
                  "m-auto h-4 w-4 transition-colors duration-200",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              />
            </button>
          );
        })}
      </div>
    );
  },
);

ThemeSwitcher.displayName = "ThemeSwitcher";
