"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
import * as React from "react";

import { sendContactEmail } from "@/lib/actions/contact";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [isPending, setIsPending] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    const result = await sendContactEmail(data);

    setIsPending(false);
    if (result.success) {
      setIsSuccess(true);
    } else {
      setError(result.error || t("form.error"));
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full flex flex-col items-center justify-center text-center p-8 bg-primary/5 rounded-3xl border border-primary/20"
      >
        <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-6">
          <Send className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold mb-2">{t("sent")}</h3>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />

      <h3 className="text-2xl font-bold mb-8">{t("form.heading")}</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded-xl">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-foreground ml-1"
            >
              {t("form.name")}
            </label>
            <input
              required
              id="name"
              name="name"
              className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
              placeholder={t("form.placeholders.name")}
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-foreground ml-1"
            >
              {t("form.mail")}
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
              placeholder={t("form.placeholders.email")}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-foreground ml-1"
          >
            {t("form.phone")}
          </label>
          <input
            id="phone"
            name="phone"
            className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
            placeholder={t("form.placeholders.phone")}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-foreground ml-1"
          >
            {t("form.message")}
          </label>
          <textarea
            required
            id="message"
            name="message"
            className="flex min-h-[160px] w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-y shadow-sm"
            placeholder={t("form.placeholders.message")}
          />
        </div>

        <button
          disabled={isPending}
          className="w-full group flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all active:scale-[0.98] disabled:opacity-70 shadow-xl shadow-primary/20"
        >
          {isPending ? (
            <div className="animate-spin h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full" />
          ) : (
            <>
              {t("form.btn")}
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
