import { redirect } from 'next/navigation';

// This component redirects the root path to the default locale.
export default function RootPage() {
  redirect('/en');
}
