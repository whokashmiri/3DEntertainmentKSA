"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion, AnimatePresence } from "framer-motion";

type PortfolioGridProps = {
  projects: Project[];
};

const categories = ["All", "Steel Fabrication", "Wood Fabrication", "Foam Sculptures", "Plastic & Resin", "Fiberglass & Carbon Fiber", "Signage & Graphics", "Themed Environments", "Creative Media"];

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "secondary"}
            onClick={() => setActiveCategory(category)}
            className="font-semibold tracking-wide"
          >
            {category}
          </Button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => {
            const projectImage = PlaceHolderImages.find((p) => p.id === project.imageId);
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="group overflow-hidden relative border-border/50 h-full">
                  <CardContent className="p-0 h-full">
                    {projectImage && (
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-96 transition-transform duration-500 ease-in-out group-hover:scale-110"
                        data-ai-hint={projectImage.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-500 ease-in-out">
                       <div className="transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        <h3 className="font-headline text-2xl font-semibold uppercase tracking-wider">{project.title}</h3>
                        <p className="text-primary font-bold">{project.industry}</p>
                        <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-in-out mt-4">
                           <p className="text-sm"><span className="font-bold text-muted-foreground">Category:</span> {project.category}</p>
                           <p className="text-sm"><span className="font-bold text-muted-foreground">Materials:</span> {project.materials}</p>
                        </div>
                       </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
