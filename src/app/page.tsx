
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { capabilities, industries, team } from "@/lib/data";
import { ArrowRight, DraftingCompass, Factory, Cpu, VenetianMask, Clapperboard, Wrench, Check, Code, ScanSearch, Wind, Bot, Printer, PaintBucket } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const whatWeDo = [
    { title: "Creative Design & Engineering", icon: DraftingCompass },
    { title: "Steel, Wood, Foam & Composite Fabrication", icon: Factory },
    { title: "CNC Machining & Digital Production", icon: Cpu },
    { title: "Themed Environments & Scenic Construction", icon: VenetianMask },
    { title: "Animation, VFX & Digital Content", icon: Clapperboard },
    { title: "Installation & Turnkey Delivery", icon: Wrench },
];

const featuredCapabilities = [
  { title: "CNC Machining", icon: Code },
  { title: "Foam Sculpting", icon: Bot },
  { title: "Fiberglass & Carbon Fiber", icon: Wind },
  { title: "Signage & Graphics", icon: VenetianMask },
  { title: "Large-Format Printing", icon: Printer },
  { title: "Advanced Coating & Finishing", icon: PaintBucket },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");
  const leadershipTeam = team.filter(p => p.department === 'Leadership').slice(0, 5);


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-primary opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-primary opacity-50"></div>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-widest text-white">
              3D Entertainment Co.
            </h1>
          </div>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Pioneering Saudi Industrial Leadership in Creative Fabrication and Advanced Manufacturing
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="font-bold tracking-wide">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold tracking-wide">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* What We Do Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Heading>We Design, Engineer, and Build Extraordinary Experiences</Heading>
              <p className="mt-6 text-muted-foreground text-lg">
                 3D Entertainment Co. is a multidisciplinary creative and fabrication powerhouse based in Saudi Arabia. We unite artists, architects, engineers, programmers, and master craftsmen with one of the region’s most advanced manufacturing facilities — delivering turnkey solutions for entertainment, film, hospitality, retail, and corporate environments.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {whatWeDo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-primary" />
                      <span className="text-white">{item.title}</span>
                    </div>
                  )
                })}
              </div>
              <Button asChild size="lg" className="mt-8 font-bold tracking-wide">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div>
               <Image
                src="https://picsum.photos/seed/11/600/400"
                alt="Engineers at work"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                data-ai-hint="engineers work"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <Heading className="text-center mb-12 md:mb-16">Industries We Serve</Heading>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <Card key={industry.name} className="bg-secondary border-border/50 text-center p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-semibold text-lg text-white">{industry.name}</h3>
                  </Card>
                );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <Heading className="text-center mb-12 md:mb-16">Meet the Team</Heading>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {team.slice(0,5).map((person, index) => {
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
                                height={180}
                                className="w-36 h-48 rounded-[40px] object-cover mb-4 border-4 border-primary/20"
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
          <div className="text-center mt-12">
            <Button asChild size="lg" className="font-bold tracking-wide">
              <Link href="/people">Meet All Our People <ArrowRight className="ml-2 h-5 w-5"/></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <Heading className="text-center mb-12 md:mb-16">Our Services</Heading>
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
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4">
          <Heading className="text-center mb-12 md:mb-16">Featured Capabilities</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCapabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <Link href="/services" key={capability.title}>
                  <Card className="group overflow-hidden relative border-border/50 h-full flex flex-col items-center justify-center p-8 bg-background hover:bg-background/80 transition-colors duration-300">
                      <Icon className="w-16 h-16 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                      <h3 className="font-headline text-xl font-semibold uppercase tracking-wider text-white text-center">{capability.title}</h3>
                  </Card>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="font-bold tracking-wide">
              <Link href="/services">View All Services <ArrowRight className="ml-2 h-5 w-5"/></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="font-headline text-4xl font-bold uppercase tracking-wider text-white">Ready to build the future?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Let's discuss how our advanced manufacturing and creative design capabilities can bring your vision to life.</p>
            <Button asChild size="lg" className="mt-8 font-bold tracking-wide text-lg">
                <Link href="/contact">Request a Quote</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
