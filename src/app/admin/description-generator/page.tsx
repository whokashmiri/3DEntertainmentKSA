import { Heading } from "@/components/ui/heading";
import { DescriptionGeneratorForm } from "./components/description-generator-form";

export default function DescriptionGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Heading className="text-center mb-4">Project Description Generator</Heading>
      <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
        This is an internal tool to generate compelling project descriptions using AI. Fill in the details below to get started.
      </p>
      <div className="max-w-2xl mx-auto">
        <DescriptionGeneratorForm />
      </div>
    </div>
  );
}
