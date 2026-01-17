import { Heading } from "@/components/ui/heading";
import { industries } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industries We Serve | 3D Entertainment Co.",
    description: "Discover the industries we serve at 3D Entertainment Co., from theme parks and film production to retail, architecture, and museums. We provide specialized fabrication and design solutions for each sector.",
    keywords: "theme park fabrication, film set construction, retail store fit-out, architectural fabrication, museum exhibit builders, event fabrication",
};

export default function IndustriesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div data-aos="fade-up">
        <Heading className="text-center mb-4">Industries We Serve</Heading>
        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
          Our diverse capabilities in design, engineering, and advanced manufacturing allow us to serve a wide range of industries. We tailor our turnkey solutions to meet the unique challenges and standards of each sector, delivering quality and innovation every time.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="100">
        {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card key={industry.name} className="bg-secondary border-border/50 text-center p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2">
                <div className="p-4 bg-background rounded-md inline-block mb-4 border-2 border-primary/20">
                    <Icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-headline text-xl font-semibold uppercase tracking-wider text-white">{industry.name}</h3>
              </Card>
            );
        })}
      </div>
    </div>
  );
}
