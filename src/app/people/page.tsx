import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { team, TeamMember } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const departments = ["All", "Leadership", "Design", "Engineering", "Fabrication"];

const TeamGrid = ({ members }: { members: TeamMember[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {members.map((person) => {
      const personImage = PlaceHolderImages.find(p => p.id === person.imageId);
      return (
        <Card key={person.name} className="bg-secondary border-border/50 text-center transform transition-transform duration-300 hover:-translate-y-2">
          <CardContent className="p-0">
            {personImage && (
              <Image
                src={personImage.imageUrl}
                alt={person.name}
                width={400}
                height={400}
                className="w-full h-auto object-cover grayscale"
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
);


export default function PeoplePage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Heading className="text-center mb-4">The Minds &amp; Makers</Heading>
      <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-16">
        Our strength lies in our people. We are a collective of visionary designers, meticulous engineers, and master craftsmen dedicated to excellence.
      </p>

      <Tabs defaultValue="All" className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 sm:grid-cols-5 mb-12">
          {departments.map(dept => (
            <TabsTrigger key={dept} value={dept}>{dept}</TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="All">
          <TeamGrid members={team} />
        </TabsContent>
        <TabsContent value="Leadership">
          <TeamGrid members={team.filter(p => p.department === 'Leadership')} />
        </TabsContent>
        <TabsContent value="Design">
          <TeamGrid members={team.filter(p => p.department === 'Design')} />
        </TabsContent>
        <TabsContent value="Engineering">
          <TeamGrid members={team.filter(p => p.department === 'Engineering')} />
        </TabsContent>
        <TabsContent value="Fabrication">
          <TeamGrid members={team.filter(p => p.department === 'Fabrication')} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
