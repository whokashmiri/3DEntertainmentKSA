import { Heading } from "@/components/ui/heading";
import { projects } from "@/lib/data";
import { PortfolioGrid } from "./components/portfolio-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div data-aos="fade-up">
        <Heading className="text-center mb-4">Our Work</Heading>
        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
          We take pride in our ability to transform complex challenges into tangible, high-quality results. Explore a selection of our projects across various industries.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <PortfolioGrid projects={projects} />
      </div>
    </div>
  );
}
