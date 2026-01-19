import HomePage from "@/components/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | 3D Entertainment Co. | Creative Fabrication & Advanced Manufacturing",
  description: "3D Entertainment Co. is a leader in creative fabrication and advanced manufacturing in Saudi Arabia, specializing in themed environments, CNC machining, and turnkey project delivery.",
  keywords: "Creative Fabrication, Advanced Manufacturing, Saudi Arabia, 3D Entertainment, Themed Environments, CNC Machining, Steel Fabrication, Engineering Services",
};

// Required to make this page static for both locales
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default function Home() {
  return <HomePage />;
}
