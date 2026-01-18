import {getLocale, getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
 
// Can be imported from a shared config
const locales = ['en', 'ar'];
 
export default getRequestConfig(async () => {
  // Obtain the locale for the current request
  const locale = await getLocale();
 
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
