import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['sv', 'en', 'pl'],

  // Used when no locale matches
  defaultLocale: 'sv',
  pathnames: {
    '/': '/',
    '/privacy-policy': {
      sv: '/integritetspolicy',
      en: '/privacy-policy',
      pl: '/polityka-prywatnosci',
    },
    '/terms-of-service': {
      sv: '/anvandarvillkor',
      en: '/terms-of-service',
      pl: '/regulamin',
    },
    '/services': {
      sv: '/tjanster',
      en: '/services',
      pl: '/uslugi',
    },

    '/home-visit': {
      sv: '/hembesok',
      en: '/home-visit',
      pl: '/wizyta-domowa',
    },

    '/prices': {
      sv: '/priser',
      en: '/prices',
      pl: '/cennik',
    },

    '/advices': {
      sv: '/rad',
      en: '/advices',
      pl: '/porady',
    },

    '/book': {
      sv: '/boka',
      en: '/book',
      pl: '/rezerwacja',
    },
    '/about': {
      sv: '/om-oss',
      en: '/about',
      pl: '/o-nas',
    },
    '/services/vaccinations': {
      sv: '/tjanster/vaccinationer',
      en: '/services/vaccinations',
      pl: '/uslugi/szczepienia',
    },
    '/services/care-at-home': {
      sv: '/tjanster/veterinarvard-hemma',
      en: '/services/veterinary-care-at-home',
      pl: '/uslugi/opieka-w-domu',
    },
    '/services/end-of-life': {
      sv: '/tjanster/avlivning',
      en: '/services/end-of-life-care',
      pl: '/uslugi/opieka-na-koncu-zycia',
    },
  }
})
