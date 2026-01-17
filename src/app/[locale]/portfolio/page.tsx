import { Heading } from "@/components/ui/heading";
import { projects } from "@/lib/data";
import { PortfolioGrid } from "@/app/portfolio/components/portfolio-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | 3D Entertainment Co.",
    description: "Explore the portfolio of 3D Entertainment Co., showcasing our work in steel fabrication, themed environments, CNC machining, and more across various industries.",
    keywords: "fabrication portfolio, themed environment projects, CNC machining examples, steel fabrication work, creative media portfolio",
};

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div data-aos="fade-up">
        <Heading className="text-center mb-4">Our Work</Heading>
        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
          We take pride in our ability to transform complex challenges into tangible, high-quality results. Explore a selection of our projects across various industries, from public art and architecture to film and themed entertainment. Each project showcases our integrated approach to design, engineering, and fabrication.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <PortfolioGrid projects={projects} />
      </div>
    </div>
  );
}
