
import Link from "next/link";
import { Factory, Linkedin, Twitter, Instagram } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services & Portfolio" },
  { href: "/products", label: "Products" },
  { href: "/technology", label: "Technology" },
  { href: "/people", label: "People" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Factory className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold sm:inline-block font-headline uppercase tracking-widest">
                3D Entertainment Co.
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              A Saudi-based company specializing in creative design, engineering, CNC machining, fabrication, themed environments, and advanced manufacturing.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold uppercase tracking-wider text-white mb-4">Navigate</h3>
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
             <h3 className="font-headline text-lg font-semibold uppercase tracking-wider text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} 3D Entertainment Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
