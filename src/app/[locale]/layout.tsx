import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import ClientLayout from "@/components/ClientLayout";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: {
    default: "3D Entertainment Co. | Creative Fabrication & Advanced Manufacturing",
    template: "%s | 3D Entertainment Co.",
  },
  description:
    "Pioneering Saudi Industrial Leadership in Creative Fabrication and Advanced Manufacturing. We offer turnkey solutions in design, engineering, and production for immersive environments.",
  keywords:
    "Creative Fabrication, Advanced Manufacturing, Saudi Arabia, 3D Entertainment, Themed Environments, CNC Machining, Steel Fabrication, Engineering Services",
  icons: {
    icon: "/Logo.webp",
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // ✅ STATIC-SAFE: locale passed explicitly
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          inter.variable,
          oswald.variable
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientLayout>{children}</ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
