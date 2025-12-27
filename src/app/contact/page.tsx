
import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { ContactForm } from "./components/contact-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Phone, Mail, MapPin, User } from "lucide-react";

export default function ContactPage() {
    const mapImage = PlaceHolderImages.find(p => p.id === "contact-map");

    return (
    <>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Heading className="text-center mb-4">Get In Touch</Heading>
        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-16">
          Have a project in mind, or need more information? We're ready to help. Reach out to us to start a conversation.
        </p>

        <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-3">
                <ContactForm />
            </div>
            <div className="md:col-span-2">
                <div className="bg-secondary p-8 rounded-lg border border-border/50 h-full">
                    <h3 className="font-headline text-2xl font-semibold uppercase tracking-wider text-white mb-6">Contact Information</h3>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="mt-1 text-primary">
                                <User className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Contact Person</h4>
                                <p className="text-muted-foreground">Aaqib</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="mt-1 text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Our Address</h4>
                                <p className="text-muted-foreground">Salamah Center, Jeddah, Saudi Arabia</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="mt-1 text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Email Us</h4>
                                <p className="text-muted-foreground">info@3dentertainmentksa.com</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="mt-1 text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Call Us</h4>
                                <p className="text-muted-foreground">+966 122 751 997</p>
                                <p className="text-muted-foreground">+966 537 399 808</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      {mapImage && (
        <div className="w-full h-[400px] relative">
            <Image
                src={mapImage.imageUrl}
                alt={mapImage.description}
                fill
                className="object-cover"
                data-ai-hint={mapImage.imageHint}
            />
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
      )}
    </>
  );
}
