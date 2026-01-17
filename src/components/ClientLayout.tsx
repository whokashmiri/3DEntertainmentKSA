"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import AOS from "aos";
import "aos/dist/aos.css";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster />
    </>
  );
}
