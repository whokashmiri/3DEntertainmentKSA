
"use client";

import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team, TeamMember } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check } from "lucide-react";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const departments = [
  {
    title: "Creative, Design & Digital Team",
    roles: [
      "Architects", "Artists & Painters", "Graphic Designers", "3D Designers & Modelers", "Industrial Designers", "Concept & Scenic Designers", "Digital Sculptors", "Animation & VFX Artists", "Motion Graphics Designers", "3D Scanning & Reverse Engineering Specialists",
    ],
    imageId: "about-sketch-1",
  },
  {
    title: "Engineering & Technical Team",
    roles: [
      "Civil, Mechanical & Electrical Engineers", "Structural Engineers", "LGS Structural Designers", "Industrial Engineers", "Draftsmen", "Computer Programmers", "PLC & Automation Engineers", "Mechatronics Engineers",
    ],
    imageId: "about-drawing-1",
  },
  {
    title: "Factory & Fabrication Team",
    roles: [
      "Carpenters & Cabinet Makers", "CNC Operators (5-Axis, Routers, Milling, Edge Banding)", "Welders & Metal Fabricators", "Sheet Metal Technicians", "Foam Carving Artists", "Hard-Coating Technicians", "GRC Technicians", "Fiberglass & Carbon Fiber Specialists", "Painters & Scenic Finishers",
    ],
    imageId: "tech-machine-3",
  },
  {
    title: "Construction & Installation Team",
    roles: [
      "Electricians", "Plumbers", "Tile Layers", "Concrete Finishing Crew", "Steel Installers", "Rigging & Lifting Crew", "Site Supervisors & Safety Officers",
    ],
    imageId: "portfolio-project-2",
  },
  {
    title: "Digital Fabrication & Printing Team",
    roles: [
      "3D Printing Technicians", "UV & Large-Format Printing Operators", "Vinyl & Cardboard Cutting Technicians",
    ],
    imageId: "tech-machine-4",
  },
  {
    title: "General Workforce & Support",
    roles: [
      "Skilled & Semi-Skilled Labor", "Logistics & Material Handling", "Crane & Equipment Operators",
    ],
    imageId: "portfolio-project-6",
  },
];

export default function PeoplePage() {
  const leadershipTeam = team.filter(p => p.department === 'Leadership');
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div data-aos="fade-up">
        <Heading className="text-center mb-4">Our People</Heading>
        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-16">
          Our strength comes from the people who imagine, design, engineer, and build extraordinary environments. We bring together artists, architects, engineers, programmers, and master craftsmen under one roof.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept, index) => {
          const deptImage = PlaceHolderImages.find(p => p.id === dept.imageId);
          return (
          <Card key={dept.title} className="bg-secondary border-border/50 flex flex-col" data-aos="fade-up" data-aos-delay={index * 100}>
            <CardHeader>
              {deptImage && (
                 <Image
                    src={deptImage.imageUrl}
                    alt={dept.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-md"
                    data-ai-hint={deptImage.imageHint}
                  />
              )}
              <CardTitle className="font-headline text-xl text-primary uppercase tracking-wider pt-4">{dept.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {dept.roles.map((role) => (
                  <li key={role} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary/70 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{role}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )})}
      </div>

       <section className="py-20 md:py-32">
        <Heading className="text-center mb-12 md:mb-16" data-aos="fade-up">Meet The Leadership</Heading>
        <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            data-aos="fade-up"
          >
            <CarouselContent>
              {leadershipTeam.map((person, index) => {
                const personImage = PlaceHolderImages.find(p => p.id === person.imageId);
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="bg-background border-border/50 overflow-hidden">
                        <CardContent className="flex flex-col items-center p-6">
                           {personImage && (
                              <Image
                                src={personImage.imageUrl}
                                alt={person.name}
                                width={144}
                                height={224}
                                className="w-36 h-56 rounded-[40px] object-cover mb-4 border-4 border-primary/20"
                                data-ai-hint={personImage.imageHint}
                              />
                           )}
                          <h3 className="font-headline text-xl font-semibold uppercase tracking-wider text-white mt-2">{person.name}</h3>
                          <p className="text-primary font-medium">{person.title}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
      </section>

    </div>
  );
}
