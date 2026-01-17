
import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { ContactForm } from "@/app/contact/components/contact-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Phone, Mail, MapPin, User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | 3D Entertainment Co.",
    description: "Get in touch with 3D Entertainment Co. for a quote on your project. Contact us for creative design, engineering, and fabrication services in Saudi Arabia.",
    keywords: "contact fabrication company, request a quote, engineering services contact, creative design Saudi Arabia, Jeddah fabrication",
};

export default function ContactPage() {
    const mapImage = PlaceHolderImages.find(p => p.id === "contact-map");

    return (
    <>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div data-aos="fade-up">
            <Heading className="text-center mb-4">Get In Touch</Heading>
            <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-16">
              Have a project in mind, or need more information? We're ready to help. Reach out to us to start a conversation about your creative, engineering, or fabrication needs. We provide comprehensive quotes for projects of all scales.
            </p>
        </div>

        <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-3" data-aos="fade-right">
                <ContactForm />
            </div>
            <div className="md:col-span-2" data-aos="fade-left">
                <div className="bg-secondary p-8 rounded-lg border border-border/50 h-full">
                    <h3 className="font-headline text-2xl font-semibold uppercase tracking-wider text-white mb-6">Contact Information</h3>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="mt-1 text-primary">
                                <User className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Contact Person</h4>
                                <p className="text-muted-foreground">Hammam Attar</p>
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
      <div className="w-full h-[450px] relative" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.9175310923792!2d39.14178171032434!3d21.58914196821437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3da87e12d03cb%3A0xaad451ac0b2c881f!2sSalama%20center!5e0!3m2!1sen!2ssa!4v1767114197374!5m2!1sen!2ssa"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
