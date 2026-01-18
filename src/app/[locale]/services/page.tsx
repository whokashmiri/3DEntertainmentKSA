

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Heading } from "@/components/ui/heading";
import { expandedServices, projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check, Dot } from "lucide-react";
import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PortfolioGrid } from "@/app/portfolio/components/portfolio-grid";

export const metadata: Metadata = {
    title: "Services & Portfolio | 3D Entertainment Co.",
    description: "Explore our comprehensive services including Design, Engineering, E-Production, Animation, Machining, Coating, Installation, and Electronics. We provide turnkey solutions from concept to reality, and showcase our featured work.",
    keywords: "full-service fabrication, design and engineering, CNC machining, themed environment construction, animation studio, installation services Saudi Arabia, fabrication portfolio",
};

export default function ServicesPage() {
  return (
    <>
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div data-aos="fade-up">
        <Heading className="text-center mb-4">Our Integrated Services</Heading>
        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-16">
          We offer a comprehensive range of services to bring your vision to life, from initial concept to final installation. Our integrated approach ensures seamless execution and exceptional results, demonstrating a clear link from design and engineering through to fabrication and installation.
        </p>
      </div>

      <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        <Accordion type="single" collapsible className="w-full space-y-8">
            {expandedServices.map((service, index) => {
                 const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);
                 const Icon = service.icon;
                 return (
                    <AccordionItem value={`item-${index}`} key={service.title} className="border-b-0">
                         <Card className="bg-secondary border-border/50 overflow-hidden">
                             <AccordionTrigger className="p-6 text-left hover:no-underline group">
                                <div className="flex items-center gap-4 md:gap-6 w-full">
                                    <div className="p-3 bg-background group-hover:bg-primary/10 rounded-md border-2 border-primary/20 transition-colors duration-300">
                                        <Icon className="w-8 h-8 text-primary transition-colors duration-300" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-headline text-2xl md:text-3xl font-semibold uppercase tracking-wider text-white">{service.title}</h3>
                                    </div>
                                </div>
                             </AccordionTrigger>
                             <AccordionContent className="p-0">
                                <div className="grid md:grid-cols-5 gap-0">
                                    <div className="md:col-span-2 hidden md:block">
                                        {serviceImage && (
                                            <Image
                                                src={serviceImage.imageUrl}
                                                alt={service.title}
                                                width={400}
                                                height={500}
                                                className="w-full h-full object-cover"
                                                data-ai-hint={serviceImage.imageHint}
                                            />
                                        )}
                                    </div>
                                    <div className="md:col-span-3 p-6 md:p-8 space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-bold text-lg text-primary mb-2">Scope of Work</h4>
                                                <ul className="space-y-1.5">
                                                    {service.scope.map(item => (
                                                        <li key={item} className="flex items-start gap-2">
                                                            <Dot className="h-5 w-5 text-primary/70 mt-0.5 shrink-0" />
                                                            <span className="text-muted-foreground">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                             <div>
                                                <h4 className="font-bold text-lg text-primary mb-2">Process & Workflow</h4>
                                                <ul className="space-y-1.5">
                                                    {service.process.map(item => (
                                                        <li key={item} className="flex items-start gap-2">
                                                            <Dot className="h-5 w-5 text-primary/70 mt-0.5 shrink-0" />
                                                            <span className="text-muted-foreground">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                         <div>
                                            <h4 className="font-bold text-lg text-primary mb-2">Capability</h4>
                                            <ul className="space-y-1.5">
                                                {service.capability.map(item => (
                                                    <li key={item} className="flex items-start gap-2">
                                                        <Dot className="h-5 w-5 text-primary/70 mt-0.5 shrink-0" />
                                                        <span className="text-muted-foreground">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-primary mb-2">Client Value</h4>
                                            <ul className="space-y-1.5">
                                                {service.value.map(item => (
                                                    <li key={item} className="flex items-start gap-2">
                                                        <Check className="h-5 w-5 text-green-400 mt-0.5 shrink-0" />
                                                        <span className="text-foreground">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                             </AccordionContent>
                         </Card>
                    </AccordionItem>
                 );
            })}
        </Accordion>
      </div>

       <div className="pt-16 md:pt-24 mt-16 md:mt-24 border-t border-border/50">
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
    </div>
     <section className="bg-secondary">
        <div className="container mx-auto px-4 py-20 text-center" data-aos="fade-up">
            <h2 className="font-headline text-4xl font-bold uppercase tracking-wider text-white">Have a project in mind?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Our team is ready to help you with your creative, engineering, and fabrication needs. Let's build something extraordinary together.</p>
            <Button asChild size="lg" className="mt-8 font-bold tracking-wide text-lg py-6 px-10">
                <Link href="/contact">Request a Quote</Link>
            </Button>
        </div>
      </section>
    </>
  );
}
