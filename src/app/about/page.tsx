
import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | 3D Entertainment Co.",
    description: "Learn about 3D Entertainment Co., a fully integrated creative and industrial fabrication company specializing in the design, engineering, and production of immersive environments in Saudi Arabia.",
    keywords: "fabrication company Saudi Arabia, themed environment design, creative studio Saudi, engineering and fabrication",
};


export default function AboutPage() {
    const aboutImage1 = PlaceHolderImages.find(p => p.id === "about-team-1");
    const aboutImage2 = PlaceHolderImages.find(p => p.id === "about-office-1");
    const aboutImage3 = PlaceHolderImages.find(p => p.id === "about-sketch-1");
    const aboutImage4 = PlaceHolderImages.find(p => p.id === "about-drawing-1");

    const coreValues = ["Excellence", "Collaboration", "Innovation"];

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <header className="text-center mb-16">
                <Heading>About 3D Entertainment Co.</Heading>
            </header>

            <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <div className="space-y-6">
                    <h2 className="font-headline text-3xl font-semibold uppercase tracking-wider text-white">Who We Are</h2>
                    <p className="text-muted-foreground text-lg">
                        3D Entertainment Co. is a fully integrated creative and industrial fabrication company specializing in the design, engineering, and production of immersive environments.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {aboutImage1 && (
                            <Image src={aboutImage1.imageUrl} alt={aboutImage1.description} width={300} height={200} className="rounded-lg object-cover" data-ai-hint={aboutImage1.imageHint}/>
                        )}
                        {aboutImage2 && (
                            <Image src={aboutImage2.imageUrl} alt={aboutImage2.description} width={300} height={200} className="rounded-lg object-cover" data-ai-hint={aboutImage2.imageHint}/>
                        )}
                    </div>
                </div>
                 <div className="space-y-8">
                    <Card className="bg-secondary border-border/50">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl uppercase tracking-wider text-primary">Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">To deliver exceptional craftsmanship and creative solutions that turn ideas into immersive, memorable experiences.</p>
                        </CardContent>
                    </Card>
                     <Card className="bg-secondary border-border/50">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl uppercase tracking-wider text-primary">Our Vision</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">To be the Middle East’s most trusted design and fabrication partner, known for innovation, quality, and the ability to bring bold creative visions to life.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

             <section className="mb-24">
                <Card className="bg-secondary border-border/50">
                    <CardContent className="p-10 grid md:grid-cols-2 gap-10 items-center">
                        <div>
                             <h2 className="font-headline text-3xl font-semibold uppercase tracking-wider text-white mb-6">Our Core Values</h2>
                             <ul className="space-y-4">
                                {coreValues.map(value => (
                                    <li key={value} className="flex items-center gap-3">
                                        <CheckCircle className="h-6 w-6 text-primary"/>
                                        <span className="text-lg text-white">{value}</span>
                                    </li>
                                ))}
                             </ul>
                        </div>
                        <div className="space-y-6">
                            <h2 className="font-headline text-3xl font-semibold uppercase tracking-wider text-white">Our Creative Journey</h2>
                            <p className="text-muted-foreground text-lg">
                                From concept to completion, we turn ideas into exceptional realities. Our team blends creative vision with technical expertise to build immersive experiences that captivate and inspire.
                            </p>
                        </div>
                    </CardContent>
                </Card>
             </section>

            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {aboutImage3 && (
                        <Image src={aboutImage3.imageUrl} alt={aboutImage3.description} width={600} height={400} className="rounded-lg object-cover" data-ai-hint={aboutImage3.imageHint}/>
                    )}
                    {aboutImage4 && (
                        <Image src={aboutImage4.imageUrl} alt={aboutImage4.description} width={600} height={400} className="rounded-lg object-cover" data-ai-hint={aboutImage4.imageHint}/>
                    )}
                </div>
            </section>
        </div>
    );
}
