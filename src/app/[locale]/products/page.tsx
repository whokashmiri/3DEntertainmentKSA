

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Our Products | 3D Entertainment Co.",
    description: "Explore our range of custom-fabricated products, including pre-engineered steel structures, CNC-carved wood furniture, complex foam props, vacuum-formed plastic components, advanced composites, and large-format signage.",
    keywords: "steel fabrication Saudi, wood CNC, foam sculpting, fiberglass molding, custom signage production, LGS structures, carbon fiber parts",
};

const productSections = [
    {
        title: "Steel Products",
        items: [
            "Pre-Engineered Structures",
            "LGS Structures",
            "Sheet Metal Processing",
            "Cutting Services",
            "Custom Steel Fabrication",
        ],
        imageId: "product-steel",
    },
    {
        title: "Wood Products",
        items: [
            "Cabinets & Furniture",
            "CNC Wood Processing",
            "Edge Banding",
            "Vacuum Press & Veneer Pressing",
            "Architectural Wood Elements",
        ],
        imageId: "product-wood",
    },
    {
        title: "Foam Products",
        items: [
            "CNC Foam Carving",
            "5-Axis Foam Milling",
            "Sculptures & Props",
            "Hard-Shell & Polyurea Coating",
        ],
        imageId: "product-foam",
    },
    {
        title: "Plastic & Resin",
        items: [
            "Vacuum Forming",
            "Thermoforming",
            "Resin Casting",
            "Acrylic & Polycarbonate Fabrication",
        ],
        imageId: "product-plastic",
    },
    {
        title: "Fiberglass & Carbon Fiber",
        items: [
            "Fiberglass Molding",
            "Carbon Fiber Fabrication",
            "Composite Reinforcement",
            "Lightweight Architectural Elements",
        ],
        imageId: "product-composites",
    },
    {
        title: "Signage & Graphics",
        items: [
            "2D & 3D Signage",
            "LED & Backlit Signs",
            "Large-Format Printing",
            "Vinyl Graphics",
            "Digital Signage",
        ],
        imageId: "product-signage",
    }
];

export default function ProductsPage() {
  return (
    <>
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div data-aos="fade-up">
        <Heading className="text-center mb-4">Our Products</Heading>
        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-16">
          From large-scale steel structures to intricate custom furniture, our state-of-the-art facility produces a wide range of high-quality products. Our integrated manufacturing process ensures that every item, whether metal, wood, or composite, is built to precise specifications and finished to the highest standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productSections.map((section, index) => {
          const sectionImage = PlaceHolderImages.find(p => p.id === section.imageId);
          return (
            <Card key={section.title} className="bg-secondary border-border/50 flex flex-col" data-aos="fade-up" data-aos-delay={index * 100}>
              <CardHeader>
                {sectionImage && (
                    <Image
                        src={sectionImage.imageUrl}
                        alt={section.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover rounded-md"
                        data-ai-hint={sectionImage.imageHint}
                    />
                )}
                <CardTitle className="font-headline text-xl text-primary uppercase tracking-wider pt-4">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {section.items.map((item) => (
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
    </div>
    <section className="bg-background">
      <div className="container mx-auto px-4 py-20 text-center" data-aos="fade-up">
          <h2 className="font-headline text-4xl font-bold uppercase tracking-wider text-white">Need a custom fabricated product?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">We can build it. Tell us about your project requirements and let's get started.</p>
          <Button asChild size="lg" className="mt-8 font-bold tracking-wide text-lg py-6 px-10">
              <Link href="/contact">Request a Quote</Link>
          </Button>
      </div>
    </section>
  </>
  );
}
