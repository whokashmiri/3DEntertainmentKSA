
import { Link } from "next-intl/navigation";
import { Factory, Linkedin, Twitter, Instagram, Music2Icon, Mail, PhoneCallIcon, LocateIcon, Pin, PinOffIcon, LocateFixedIcon, MapPlusIcon, MapPinCheck } from "lucide-react";
import NextImage from "next/image";
import Logo from "../../../public/assets/Logo/Logo.webp";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  const tHeader = useTranslations("Header");

  const navLinks = [
    { href: "/about", label: tHeader("about") },
    { href: "/services", label: tHeader("services") },
    { href: "/products", label: tHeader("products") },
    { href: "/technology", label: tHeader("technology") },
    { href: "/people", label: tHeader("people") },
    { href: "/industries", label: tHeader("industries") },
    { href: "/contact", label: tHeader("contact") },
  ];

  return (
    <footer className="bg-secondary border-t border-border/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
               <NextImage src={Logo} alt="3D Entertainment Logo" className="h-6 w-6" />
              <span className="text-xl font-bold sm:inline-block font-headline uppercase tracking-widest">
                3D Entertainment Co.
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              {t('description')}
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold uppercase tracking-wider text-white mb-4">{t('navigate')}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

     
          <div>
             <h3 className="font-headline text-lg font-semibold uppercase tracking-wider text-white mb-4">{t('connect')}</h3>
                  <div className="flex flex-col text-sm">
           <span className="text-muted-foreground mb-2"> <Mail  className="h-5 w-6 inline" /> info@3dentertainmentksa.com</span>
            <span className="text-muted-foreground mb-2"> <PhoneCallIcon  className="h-5 w-6 inline " /> +966 122 751 997</span>

            <span className="text-muted-foreground mb-2"> <PhoneCallIcon  className="h-5 w-6 inline" /> +966 537 399 808</span>

             <span className="text-muted-foreground mb-2"> <MapPinCheck  className="h-5 w-6 inline" /> Salamah Center, Jeddah, Saudi Arabia</span>

          </div>
            <div className="flex space-x-4 m-3" >
              <a href="https://www.tiktok.com/@3dentertainment.c" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Music2Icon className="h-6 w-6" />
                <span className="sr-only">TikTok</span>
              </a>
              <a href="https://www.linkedin.com/company/3d-entertainment-co/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/3dentertainmentsa?igsh=dzh3NmM3ZGVkcHF4&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>{t('copyright', {year: new Date().getFullYear()})}</p>
        </div>
      </div>
    </footer>
  );
}
