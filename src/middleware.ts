import createMiddleware from 'next-intl/middleware';
import { locales, pathnames } from './i18n/routing';

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  pathnames,
  localePrefix: 'as-needed'
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
