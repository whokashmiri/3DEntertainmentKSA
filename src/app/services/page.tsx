
import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { capabilities } from "@/lib/data";
import { Check } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Heading className="text-center mb-4">Our Services</Heading>
      <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-16">
        We offer a comprehensive range of services to bring your vision to life, from initial concept to final installation. Our integrated approach ensures seamless execution and exceptional results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
                <Card key={capability.title} className="bg-secondary border-border/50 text-center p-6 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
                    <div className="p-4 bg-background rounded-md inline-block mb-4">
                        <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-headline text-2xl font-semibold uppercase tracking-wider text-white mb-2">{capability.title}</h3>
                    <p className="text-muted-foreground">{capability.description}</p>
                </Card>
            );
        })}
      </div>
    </div>
  );
}
