import {notFound} from 'next/navigation';
import {getLocale, getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'ar'];
 
export default getRequestConfig(async () => {
  // Validate that the incoming `locale` parameter is valid
  const locale = await getLocale();
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
