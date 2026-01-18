
import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'ar'] as const;

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/services': '/services',
  '/products': '/products',
  '/technology': '/technology',
  '/people': '/people',
  '/industries': '/industries',
  '/contact': '/contact',
  '/portfolio': '/portfolio'
};

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames
  });
