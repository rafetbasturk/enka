import { useTranslations } from "next-intl";

export const useLinks = () => {
  const t = useTranslations("navbar");

  const links = [
    { href: '/', label: t('home') },
    { href: '/machines', label: t('machines') },
    { href: '/references', label: t('references') },
    { href: '/contact', label: t('contact') },
  ];

  return links
}