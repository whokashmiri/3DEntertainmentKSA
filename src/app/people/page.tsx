
import type { Metadata } from "next";
import PeoplePage from "@/components/PeoplePage";

export const metadata: Metadata = {
    title: "People",
};

export default function People() {
  return <PeoplePage />;
}
