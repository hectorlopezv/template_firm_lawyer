import { LocalePrefix, Pathnames } from "next-intl/routing";

export const defaultLocale = "es" as const;
export const locales = ["en", "es"] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    es: "/nombederutas",
  },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const port = process.env.PORT ?? 3000;
export const host = process.env.HOSTNAME_URL
  ? `https://${process.env.HOSTNAME_URL}`
  : `http://localhost:${port}`;
