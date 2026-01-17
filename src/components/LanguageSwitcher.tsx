"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/navigation";
import { useTransition } from "react";
import { Button } from "./ui/button";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="flex gap-1">
      <Button
        variant={locale === 'en' ? 'default' : 'ghost'}
        size="sm"
        className="px-2"
        disabled={isPending}
        onClick={() => onSelectChange('en')}
      >
        EN
      </Button>
      <Button
        variant={locale === 'ar' ? 'default' : 'ghost'}
        size="sm"
        className="px-2"
        disabled={isPending}
        onClick={() => onSelectChange('ar')}
      >
        AR
      </Button>
    </div>
  );
}
