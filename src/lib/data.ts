import { DraftingCompass, Cog, Cpu, Layers, VenetianMask, Factory, LucideIcon, Wrench, PaintRoller, ScanLine, CircuitBoard, PenTool, Clapperboard } from "lucide-react";

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const capabilities: Capability[] = [
  {
    title: "Creative Design",
    description: "From concept to reality, our team brings your ideas to life with stunning visuals and functional design.",
    icon: DraftingCompass,
  },
  {
    title: "Engineering",
    description: "Precision engineering for complex challenges, ensuring structural integrity and performance.",
    icon: Cog,
  },
  {
    title: "CNC Machining",
    description: "High-precision, multi-axis CNC machining for metals, composites, and plastics.",
    icon: Cpu,
  },
  {
    title: "Fabrication",
    description: "Expert fabrication and assembly of custom components and large-scale structures.",
    icon: Layers,
  },
  {
    title: "Themed Environments",
    description: "Creating immersive experiences and environments for entertainment, retail, and cultural projects.",
    icon: VenetianMask,
  },
  {
    title: "Advanced Manufacturing",
    description: "Utilizing the latest technology and processes to deliver high-quality products at scale.",
    icon: Factory,
  },
];

export type ServiceCategory = {
    title: string;
    items: string[];
    imageId: string;
    icon: LucideIcon;
};

export const serviceCategories: ServiceCategory[] = [
    {
        title: "Design & Engineering",
        items: [
            "Concept design",
            "Technical drawings",
            "Structural engineering",
            "Shop drawings",
        ],
        imageId: "about-drawing-1",
        icon: PenTool,
    },
    {
        title: "E-Production",
        items: [
            "Digital modeling",
            "3D scanning",
            "Rapid prototyping",
            "Virtual pre-visualization",
        ],
        imageId: "tech-machine-4",
        icon: ScanLine,
    },
    {
        title: "Animation, VFX & Content",
        items: [
            "3D animation",
            "Motion graphics",
            "Projection mapping content",
            "Visual effects",
        ],
        imageId: "about-sketch-1",
        icon: Clapperboard,
    },
    {
        title: "Machining & Cutting",
        items: [
            "CNC machining",
            "Laser, plasma & waterjet cutting",
            "Precision milling & turning",
        ],
        imageId: "tech-machine-1",
        icon: Cpu,
    },
    {
        title: "Coating & Cladding",
        items: [
            "Polyurea",
            "Hard coating",
            "Metal cladding",
            "Decorative film lamination",
            "Veneer pressing",
        ],
        imageId: "tech-machine-2",
        icon: PaintRoller,
    },
    {
        title: "Installations & Special Construction",
        items: [
            "On-site assembly",
            "Themed environment construction",
            "Exhibition & event setup",
            "Scenic builds",
            "Large-scale installations",
        ],
        imageId: "portfolio-project-2",
        icon: Wrench,
    },
    {
        title: "Electronics & Programming",
        items: [
            "LED integration",
            "Motion systems",
            "Interactive installations",
            "Control systems & automation",
        ],
        imageId: "portfolio-project-5",
        icon: CircuitBoard,
    },
];


export type Project = {
  title: string;
  category: "Fabrication" | "CNC Machining" | "Themed Environments" | "Engineering";
  industry: string;
  materials: string;
  imageId: string;
};

export const projects: Project[] = [
  {
    title: "Kinetic Sculpture",
    category: "CNC Machining",
    industry: "Public Art",
    materials: "Stainless Steel, Aluminum",
    imageId: "portfolio-project-1",
  },
  {
    title: "Facade System",
    category: "Fabrication",
    industry: "Architecture",
    materials: "Weathering Steel, Glass",
    imageId: "portfolio-project-2",
  },
  {
    title: "Sci-Fi Set Piece",
    category: "Themed Environments",
    industry: "Film & TV",
    materials: "Fiberglass, Urethane Foam",
    imageId: "portfolio-project-3",
  },
  {
    title: "Automotive Chassis",
    category: "Engineering",
    industry: "Automotive",
    materials: "Carbon Fiber, Titanium",
    imageId: "portfolio-project-4",
  },
  {
    title: "Aerospace Bracket",
    category: "CNC Machining",
    industry: "Aerospace",
    materials: "Inconel 718",
    imageId: "portfolio-project-5",
  },
  {
    title: "Industrial Gearbox",
    category: "Fabrication",
    industry: "Heavy Machinery",
    materials: "Hardened Steel",
    imageId: "portfolio-project-6",
  },
];

export const featuredProjects = projects.slice(0, 3);

export type Technology = {
  name: string;
  description: string;
  specs: { label: string, value: string }[];
  imageId: string;
}

export const technologies: Technology[] = [
  {
    name: "5-Axis CNC Mill",
    description: "Enables highly complex geometries and single-setup machining for maximum precision and efficiency.",
    specs: [
      { label: "Travel (X/Y/Z)", value: "1270 / 762 / 610 mm" },
      { label: "Spindle Speed", value: "15,000 RPM" },
      { label: "Material Capability", value: "Titanium, Inconel, Steel" },
    ],
    imageId: "tech-machine-1",
  },
  {
    name: "Fiber Laser Cutter",
    description: "High-speed cutting of sheet metals with exceptional accuracy and edge quality.",
    specs: [
      { label: "Power", value: "12 kW" },
      { label: "Max Sheet Size", value: "4000 x 2000 mm" },
      { label: "Accuracy", value: "±0.03 mm" },
    ],
    imageId: "tech-machine-2",
  },
  {
    name: "Robotic Welding Cell",
    description: "Automated welding for high-volume production, ensuring consistent quality and speed.",
    specs: [
      { label: "Reach", value: "2,010 mm" },
      { label: "Payload", value: "12 kg" },
      { label: "Weld Type", value: "MIG/TIG" },
    ],
    imageId: "tech-machine-3",
  },
  {
    name: "Large Format 3D Printer",
    description: "Additive manufacturing for large prototypes, tooling, and end-use parts in advanced composites.",
    specs: [
      { label: "Build Volume", value: "1m x 1m x 0.8m" },
      { label: "Materials", value: "Carbon Fiber Nylon, PEKK" },
      { label: "Layer Height", value: "50-400 microns" },
    ],
    imageId: "tech-machine-4",
  },
];

export type TeamMember = {
  name: string;
  title: string;
  department: "Leadership" | "Engineering" | "Fabrication" | "Design";
  imageId: string;
};

export const team: TeamMember[] = [
  {
    name: "Abdullah Al-Fahd",
    title: "Chief Executive Officer",
    department: "Leadership",
    imageId: "person-1",
  },
  {
    name: "Fatima Al-Jamil",
    title: "Head of Design",
    department: "Design",
    imageId: "person-2",
  },
  {
    name: "Yusuf Ibrahim",
    title: "Lead Fabrication Specialist",
    department: "Fabrication",
    imageId: "person-3",
  },
  {
    name: "Omar Khalid",
    title: "Director of Engineering",
    department: "Engineering",
    imageId: "person-4",
  },
  {
    name: "Layla Hassan",
    title: "Senior CNC Programmer",
    department: "Engineering",
    imageId: "person-5",
  },
  {
    name: "Khalid Rahman",
    title: "Master Welder",
    department: "Fabrication",
    imageId: "person-6",
  },
];
