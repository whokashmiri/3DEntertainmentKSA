import { Heading } from "@/components/ui/heading";
import { projects } from "@/lib/data";
import { PortfolioGrid } from "./components/portfolio-grid";

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Heading className="text-center mb-4">Our Work</Heading>
      <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
        We take pride in our ability to transform complex challenges into tangible, high-quality results. Explore a selection of our projects across various industries.
      </p>
      <PortfolioGrid projects={projects} />
    </div>
  );
}
