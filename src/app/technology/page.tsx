
import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { technologies } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Technology & Equipment | 3D Entertainment Co.",
    description: "We operate one of the region’s most advanced fabrication facilities, equipped with industrial-grade CNC systems, composite production lines, and specialized machinery.",
    keywords: "CNC machining Saudi Arabia, laser cutting, foam CNC, fiberglass production, carbon fiber autoclave",
};

const technologySections = [
    {
        title: "CNC Machining & Cutting",
        items: [
            "40 kW CNC plate laser",
            "CNC I-section & pipe laser",
            "CNC turning/milling",
            "5-axis & 4-axis carving machines",
            "CNC routers",
            "CNC panel-processing line",
            "CNC bending & sheet-metal forming",
            "CNC drilling & tapping",
            "5m × 5m hot-wire CNC",
            "CNC glass cutting",
        ],
        imageId: "tech-machine-1",
    },
    {
        title: "Welding & Metal Fabrication",
        items: [
            "Mobile laser welding",
            "All welding types",
            "Iron Man punching & trimming",
            "Press drills",
            "Automatic metal sanding",
            "6-meter plating tanks",
            "Metal X-ray inspection",
            "Framecad LGS line",
        ],
        imageId: "tech-machine-3",
    },
    {
        title: "Foam, Resin & Composite Production",
        items: [
            "Foam coating & cementation lines",
            "Foam recycling systems",
            "GRC production line",
            "Resin injection line",
            "Carbon fiber autoclave line",
            "Fiberglass spray & injection systems",
            "Mold-making production line",
        ],
        imageId: "portfolio-project-5",
    },
    {
        title: "Digital Fabrication & Printing",
        items: [
            "3D scanner",
            "Full-color 3D printer farm",
            "UV printers",
            "Large-format printers",
            "Vinyl cutting machines",
            "Cardboard cutting",
        ],
        imageId: "tech-machine-4",
    },
    {
        title: "Finishing & Coating",
        items: [
            "Powder-coating line",
            "Hard-coating line",
            "Wood & metal sanding lines",
            "Polyurea coating systems",
        ],
        imageId: "tech-machine-2",
    },
];

export default function TechnologyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div data-aos="fade-up">
        <Heading className="text-center mb-4">Technology & Equipment</Heading>
        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-16">
          We operate one of the region’s most advanced fabrication facilities, equipped with industrial-grade CNC systems, composite production lines, and specialized machinery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologySections.map((section, index) => {
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
  );
}