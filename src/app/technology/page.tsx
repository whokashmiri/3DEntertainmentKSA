import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { technologies } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";

export default function TechnologyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Heading className="text-center mb-4">Our Technology</Heading>
      <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-16">
        We invest in state-of-the-art equipment to push the boundaries of manufacturing. Our facility is equipped with advanced machinery to handle projects of any scale and complexity.
      </p>

      <div className="space-y-16">
        {technologies.map((tech, index) => {
          const techImage = PlaceHolderImages.find(p => p.id === tech.imageId);
          const isReversed = index % 2 !== 0;
          return (
            <div key={tech.name} className={`grid md:grid-cols-5 gap-8 items-center`}>
              <div className={`md:col-span-3 ${isReversed ? 'md:order-last' : ''}`}>
                {techImage && (
                  <Image
                    src={techImage.imageUrl}
                    alt={tech.name}
                    width={800}
                    height={600}
                    className="rounded-lg shadow-2xl object-cover"
                    data-ai-hint={techImage.imageHint}
                  />
                )}
              </div>
              <div className="md:col-span-2">
                 <Card className="bg-secondary border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-headline text-3xl font-semibold uppercase tracking-wider text-primary">{tech.name}</h3>
                    <p className="text-muted-foreground mt-2 mb-6">{tech.description}</p>
                    <Separator className="my-4 bg-border/50" />
                    <h4 className="font-headline text-lg tracking-wider text-white mb-4">Key Specifications</h4>
                    <ul className="space-y-2 text-sm">
                      {tech.specs.map(spec => (
                        <li key={spec.label} className="flex justify-between items-center">
                          <span className="font-semibold text-muted-foreground">{spec.label}:</span>
                          <span className="font-mono text-white text-right">{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                 </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
