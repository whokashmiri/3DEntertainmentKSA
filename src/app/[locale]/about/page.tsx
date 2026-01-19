import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | 3D Entertainment Co.",
  description:
    "Learn about 3D Entertainment Co., a fully integrated creative and industrial fabrication company specializing in the design, engineering, and production of immersive environments in Saudi Arabia.",
  keywords:
    "fabrication company Saudi Arabia, themed environment design, creative studio Saudi, engineering and fabrication, immersive experiences",
};

// ✅ REQUIRED for static export under [locale]
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default function AboutPage({
  params,
}: {
  params: { locale: string };
}) {
  // ✅ Explicitly consume locale to prevent headers() usage
  const { locale } = params;

  const aboutImage1 = PlaceHolderImages.find(
    (p) => p.id === "about-team-1"
  );
  const aboutImage2 = PlaceHolderImages.find(
    (p) => p.id === "about-office-1"
  );
  const aboutImage3 = PlaceHolderImages.find(
    (p) => p.id === "about-sketch-1"
  );
  const aboutImage4 = PlaceHolderImages.find(
    (p) => p.id === "about-drawing-1"
  );

  const coreValues = [
    {
      title: "Excellence",
      description:
        "We deliver top-quality design and fabrication, strengthened by the expertise of our international partners.",
    },
    {
      title: "Collaboration",
      description:
        "We work closely with clients and global partners to bring every vision to life with clarity and precision.",
    },
    {
      title: "Innovation",
      description:
        "We push creative boundaries by using advanced techniques and insights from our international collaborators.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-16" data-aos="fade-up">
        <Heading>About 3D Entertainment Co.</Heading>
      </header>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="space-y-6" data-aos="fade-right">
          <h2 className="font-headline text-3xl font-semibold uppercase tracking-wider text-white">
            Who We Are
          </h2>
          <p className="text-muted-foreground text-lg">
            3D Entertainment Co. is a fully integrated creative and industrial
            fabrication company specializing in the design, engineering, and
            production of immersive environments. Based in Saudi Arabia, we are
            a multidisciplinary powerhouse uniting artists, architects,
            engineers, and master craftsmen to deliver turnkey solutions for the
            entertainment, film, hospitality, and corporate sectors.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {aboutImage1 && (
              <Image
                src={aboutImage1.imageUrl}
                alt={aboutImage1.description}
                width={300}
                height={200}
                className="rounded-lg object-cover"
                data-ai-hint={aboutImage1.imageHint}
                data-aos="fade-up"
                data-aos-delay="100"
              />
            )}
            {aboutImage2 && (
              <Image
                src={aboutImage2.imageUrl}
                alt={aboutImage2.description}
                width={300}
                height={200}
                className="rounded-lg object-cover"
                data-ai-hint={aboutImage2.imageHint}
                data-aos="fade-up"
                data-aos-delay="200"
              />
            )}
          </div>
        </div>

        <div className="space-y-8" data-aos="fade-left">
          <Card className="bg-secondary border-border/50">
            <CardHeader>
              <CardTitle className="font-headline text-2xl uppercase tracking-wider text-primary">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To deliver exceptional craftsmanship and creative solutions
                that turn ideas into immersive, memorable experiences.
              </p>
            </CardContent>
          </Card>

          <Card
            className="bg-secondary border-border/50"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <CardHeader>
              <CardTitle className="font-headline text-2xl uppercase tracking-wider text-primary">
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be the Middle East’s most trusted design and fabrication
                partner, known for innovation, quality, and the ability to
                bring bold creative visions to life.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-24" data-aos="fade-up">
        <Card className="bg-secondary border-border/50">
          <CardContent className="p-10">
            <h2 className="font-headline text-3xl font-semibold uppercase tracking-wider text-white mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={value.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full border-2 border-primary/30">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aboutImage3 && (
            <Image
              src={aboutImage3.imageUrl}
              alt={aboutImage3.description}
              width={600}
              height={400}
              className="rounded-lg object-cover"
              data-ai-hint={aboutImage3.imageHint}
              data-aos="fade-up"
            />
          )}
          {aboutImage4 && (
            <Image
              src={aboutImage4.imageUrl}
              alt={aboutImage4.description}
              width={600}
              height={400}
              className="rounded-lg object-cover"
              data-ai-hint={aboutImage4.imageHint}
              data-aos="fade-up"
              data-aos-delay="100"
            />
          )}
        </div>
      </section>
    </div>
  );
}
