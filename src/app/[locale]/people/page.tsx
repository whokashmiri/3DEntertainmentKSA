
import type { Metadata } from "next";
import PeoplePage from "@/components/PeoplePage";

export const metadata: Metadata = {
    title: "Our People & Expertise | 3D Entertainment Co.",
    description: "Meet the team of artists, engineers, and fabricators at 3D Entertainment Co. Our diverse expertise drives our success in creating extraordinary environments.",
    keywords: "fabrication team, engineering experts, creative designers, master craftsmen, Saudi Arabia careers",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default function People({ params: { locale } }: { params: { locale: string } }) {
  return <PeoplePage />;
}
