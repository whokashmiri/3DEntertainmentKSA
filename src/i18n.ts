import {notFound} from 'next/navigation';
import {getLocale, getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'ar'];
 
export default getRequestConfig(async () => {
  // Obtain the locale
  const locale = await getLocale();
 
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
