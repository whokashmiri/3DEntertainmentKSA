
import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team, TeamMember } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our People | 3D Entertainment Co.",
    description: "Meet the talented team of artists, architects, engineers, programmers, and master craftsmen at 3D Entertainment Co. in Saudi Arabia.",
    keywords: "fabrication team Saudi Arabia, CNC specialists, scenic artists, engineering team Saudi",
};

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
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Heading className="text-center mb-4">Our People</Heading>
      <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-16">
        Our strength comes from the people who imagine, design, engineer, and build extraordinary environments. We bring together artists, architects, engineers, programmers, and master craftsmen under one roof.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept) => {
          const deptImage = PlaceHolderImages.find(p => p.id === dept.imageId);
          return (
          <Card key={dept.title} className="bg-secondary border-border/50 flex flex-col">
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
        <Heading className="text-center mb-12">Meet The Leadership</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.filter(p => p.department === 'Leadership').map((person) => {
            const personImage = PlaceHolderImages.find(p => p.id === person.imageId);
            return (
                <Card key={person.name} className="bg-secondary border-border/50 text-center transform transition-transform duration-300 hover:-translate-y-2 group">
                <CardContent className="p-0">
                    {personImage && (
                    <Image
                        src={personImage.imageUrl}
                        alt={person.name}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        data-ai-hint={personImage.imageHint}
                    />
                    )}
                    <div className="p-6">
                    <h3 className="font-headline text-xl font-semibold uppercase tracking-wider text-white">{person.name}</h3>
                    <p className="text-primary font-medium">{person.title}</p>
                    </div>
                </CardContent>
                </Card>
            );
            })}
        </div>
      </section>

    </div>
  );
}
