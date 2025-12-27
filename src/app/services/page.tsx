
import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceCategories, projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check } from "lucide-react";
import type { Metadata } from "next";
import { PortfolioGrid } from "../portfolio/components/portfolio-grid";

export const metadata: Metadata = {
    title: "Services & Portfolio | 3D Entertainment Co.",
    description: "Our services include installations, special construction, CNC cutting, themed construction, and our animation studio in Saudi Arabia. Explore our portfolio of work.",
    keywords: "installation services Saudi, CNC cutting, themed construction, animation studio Saudi, fabrication portfolio",
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Heading className="text-center mb-4">Our Services</Heading>
      <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-16">
        We offer a comprehensive range of services to bring your vision to life, from initial concept to final installation. Our integrated approach ensures seamless execution and exceptional results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCategories.map((category) => {
          const categoryImage = PlaceHolderImages.find(p => p.id === category.imageId);
          const Icon = category.icon;
          return (
            <Card key={category.title} className="bg-secondary border-border/50 flex flex-col">
              <CardHeader>
                {categoryImage && (
                    <div className="relative h-48 w-full rounded-md overflow-hidden">
                        <Image
                            src={categoryImage.imageUrl}
                            alt={category.title}
                            fill
                            className="object-cover"
                            data-ai-hint={categoryImage.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 flex items-center gap-3">
                             <div className="p-2 bg-primary/80 backdrop-blur-sm rounded-md">
                                <Icon className="w-6 h-6 text-white" />
                             </div>
                             <CardTitle className="font-headline text-xl text-white uppercase tracking-wider">{category.title}</CardTitle>
                        </div>
                    </div>
                )}
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary/70 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-24 md:mt-32">
        <Heading className="text-center mb-4">Our Work</Heading>
        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
            We take pride in our ability to transform complex challenges into tangible, high-quality results. Explore a selection of our projects across various industries.
        </p>
        <PortfolioGrid projects={projects} />
      </div>
    </div>
  );
}
