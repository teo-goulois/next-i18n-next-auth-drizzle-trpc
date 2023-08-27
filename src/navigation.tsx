import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
  
  export const locales = ['en', 'fr'] as const;
  
  export const pathnames = {
    '/': '/',
    '/client': '/client',
    '/client/redirect': '/client/redirect',
    '/nested': {
      en: '/nested',
      fr: '/imbrique',
    },
    '/redirect': '/redirect',
    '/news/[articleId]': {
      en: '/news/[articleId]',
      fr: '/nouveau/[articleId]',
    }
  } satisfies Pathnames<typeof locales>;
  
  export const {Link, redirect, usePathname, useRouter} =
    createLocalizedPathnamesNavigation({
      locales,
      pathnames
    });