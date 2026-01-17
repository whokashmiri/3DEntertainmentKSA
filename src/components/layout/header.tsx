"use client";

import Link from "next-intl/link";
import { usePathname } from "next-intl/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import NextImage from "next/image";
import Logo from "../../../public/assets/Logo/Logo.webp";
import LanguageSwitcher from "../LanguageSwitcher";


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Header");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/products", label: t("products") },
    { href: "/technology", label: t("technology") },
    { href: "/people", label: t("people") },
    { href: "/industries", label: t("industries") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <NextImage src={Logo} alt="3D Entertainment Logo" className="h-6 w-6" />
          <span className="font-bold sm:inline-block font-headline uppercase tracking-widest">
            3D Entertainment
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] bg-background">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex justify-between items-center p-4 border-b">
                   <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <NextImage src={Logo} alt="3D Entertainment Logo" className="h-6 w-6" />
                    <span className="font-bold font-headline uppercase tracking-widest">
                      3DE
                    </span>
                  </Link>
                </div>
                <nav className="flex flex-col p-4 space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium uppercase tracking-wider transition-colors hover:text-primary",
                        pathname === link.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="p-4 mt-4 border-t">
                  <LanguageSwitcher />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
