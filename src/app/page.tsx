import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Home | 3D Entertainment Co. | Creative Fabrication & Advanced Manufacturing",
  description: "3D Entertainment Co. is a leader in creative fabrication and advanced manufacturing in Saudi Arabia, specializing in themed environments, CNC machining, and turnkey project delivery.",
};

export default function Home() {
  return <HomePage />;
}
