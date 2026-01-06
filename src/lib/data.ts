import { DraftingCompass, Cog, Cpu, Layers, VenetianMask, Factory, LucideIcon, Wrench, PaintRoller, ScanLine, CircuitBoard, PenTool, Clapperboard, Building, Tv, ShoppingCart, Calendar, Construction, Landmark, Briefcase } from "lucide-react";

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
        imageId: "portfolio-project-0",
        icon: CircuitBoard,
    },
];

export type ExpandedService = {
  title: string;
  icon: LucideIcon;
  imageId: string;
  scope: string[];
  process: string[];
  capability: string[];
  value: string[];
};

export const expandedServices: ExpandedService[] = [
  {
    title: "Design & Engineering",
    icon: PenTool,
    imageId: "about-drawing-1",
    scope: [
      "Architectural & interior design",
      "Concept, character & scenic design",
      "Structural & MEP engineering",
      "Industrial & product design",
      "Shop drawings & fabrication planning",
    ],
    process: [
      "Client brief & requirements gathering",
      "Conceptualization & mood boarding",
      "3D modeling & visualization",
      "Engineering analysis & simulation",
      "Prototyping & design validation",
      "Detailed shop drawings for production",
    ],
    capability: [
      "Team of architects, artists, and engineers",
      "Advanced CAD/CAM software (AutoCAD, Revit, SolidWorks)",
      "FEA & structural analysis tools",
      "Partnerships with specialized design firms",
    ],
    value: [
      "Integrated design-to-fabrication workflow",
      "Creative solutions grounded in technical feasibility",
      "Reduced project risk through early-stage engineering",
      "Optimized designs for manufacturability and cost-efficiency",
    ],
  },
  {
    title: "E-Production",
    icon: ScanLine,
    imageId: "tech-machine-4",
    scope: [
        "High-fidelity 3D scanning (object & environment)",
        "Reverse engineering from physical objects",
        "Digital model cleanup and optimization",
        "Virtual reality (VR) pre-visualization",
        "Rapid prototyping via 3D printing",
    ],
    process: [
        "On-site or in-house scanning with laser/structured light scanners",
        "Processing point cloud data into a usable 3D mesh",
        "CAD modeling based on scan data for reverse engineering",
        "Creating immersive VR environments for design review",
        "Fabricating scale models and prototypes using a 3D printer farm",
    ],
    capability: [
        "High-resolution 3D scanners (Artec, Faro)",
        "Full-color 3D printer farm",
        "Powerful workstations for data processing",
        "Expertise in digital sculpting and modeling software (ZBrush, Blender)",
    ],
    value: [
        "Accelerates the design and iteration process",
        "Ensures perfect fit and integration with existing structures",
        "Enables collaborative design reviews in a virtual space",
        "Bridges the gap between physical and digital worlds",
    ],
  },
  {
    title: "Animation, VFX & Content",
    icon: Clapperboard,
    imageId: "about-sketch-1",
    scope: [
      "3D character & environmental animation",
      "Motion graphics for branding and events",
      "Visual effects (VFX) for film and media",
      "Custom content for projection mapping",
      "Interactive media and game development",
    ],
    process: [
      "Storyboarding and animatics",
      "Asset creation (modeling, texturing, rigging)",
      "Animation and motion capture",
      "Compositing, rendering, and post-production",
      "Content calibration for specific displays and surfaces",
    ],
    capability: [
      "In-house animation and VFX studio",
      "Render farm for high-volume production",
      "Industry-standard software (Maya, Houdini, After Effects)",
      "Team of animators, VFX artists, and creative directors",
    ],
    value: [
      "Engaging digital storytelling that captivates audiences",
      "Seamless integration of digital content with physical environments",
      "Full-service pipeline from concept to final render",
      "High-quality visual content for any screen or surface",
    ],
  },
  {
    title: "Machining & Cutting",
    icon: Cpu,
    imageId: "tech-machine-1",
    scope: [
      "Multi-axis CNC milling and turning",
      "Large-format CNC routing for wood, foam, and plastics",
      "High-power laser cutting for metal plates and pipes",
      "CNC plasma and waterjet cutting",
      "Precision drilling, tapping, and bending",
    ],
    process: [
      "CAM programming from digital models",
      "Material selection and preparation",
      "Automated machining and cutting operations",
      "In-process quality control and tolerance checks",
      "Deburring and initial finishing",
    ],
    capability: [
      "40 kW CNC plate laser, CNC I-section & pipe laser",
      "5-axis & 4-axis carving machines, large-format routers",
      "CNC turning/milling centers",
      "Framecad LGS line for light-gauge steel",
      "CNC bending, drilling, and tapping machines",
    ],
    value: [
      "Unmatched precision and repeatability",
      "Ability to produce highly complex geometries",
      "Fast turnaround times for custom parts",
      "Efficient processing of a wide range of materials",
    ],
  },
  {
    title: "Coating & Cladding",
    icon: PaintRoller,
    imageId: "tech-machine-2",
    scope: [
      "Protective polyurea and hard-shell coatings",
      "Architectural metal cladding and paneling",
      "Decorative and protective powder coating",
      "Wood veneer pressing and film lamination",
      "Scenic painting and artistic finishing",
    ],
    process: [
      "Surface preparation (sanding, blasting, cleaning)",
      "Automated or manual application of coatings",
      "Curing in controlled environments (ovens, drying rooms)",
      "Multi-layer application for specific finishes",
      "Quality inspection for thickness, adhesion, and appearance",
    ],
    capability: [
      "Automated powder-coating line",
      "Polyurea and hard-coating spray systems",
      "Large-scale paint booths with ventilation",
      "Veneer and vacuum presses",
      "Team of skilled painters and finishing artists",
    ],
    value: [
      "Enhanced durability and weather resistance",
      "Wide range of aesthetic finishes, from industrial to artistic",
      "Consistent quality across large surfaces and multiple parts",
      "Specialized coatings for themed environments and high-wear applications",
    ],
  },
  {
    title: "Installation & Special Construction",
    icon: Wrench,
    imageId: "portfolio-project-2",
    scope: [
      "Full-service, on-site installation and assembly",
      "Turnkey construction of themed environments and scenic elements",
      "Rigging and installation of large-scale structures and artworks",
      "Integration of mechanical, electrical, and lighting systems",
      "Project management and site supervision",
    ],
    process: [
      "Pre-installation site survey and planning",
      "Logistics and transportation of fabricated components",
      "Systematic assembly according to installation drawings",
      "Coordination with other trades and general contractors",
      "Final commissioning and client handover",
    ],
    capability: [
      "Experienced teams of on-site installers and technicians",
      "Mobile equipment (cranes, lifts, welding units)",
      "Certified riggers and safety officers",
      "Expertise in complex, multi-component installations",
    ],
    value: [
      "Seamless transition from factory to final location",
      "Single point of responsibility for the entire project lifecycle",
      "Safe and efficient on-site execution",
      "Guaranteed quality from fabrication through to final installation",
    ],
  },
  {
    title: "Electronics & Programming",
    icon: CircuitBoard,
    imageId: "portfolio-project-0",
    scope: [
      "Custom LED lighting design and integration",
      "PLC programming for automated motion and show control",
      "Development of interactive exhibits and installations",
      "Integration of sensors, motors, and actuators",
      "Bespoke software development for control systems",
    ],
    process: [
      "System architecture design and component selection",
      "Circuit board design and assembly",
      "Software and firmware programming",
      "Bench testing and system integration",
      "On-site calibration and user training",
    ],
    capability: [
      "In-house electronics lab and programmers",
      "Expertise in PLC, Arduino, and Raspberry Pi platforms",
      "Knowledge of DMX, Art-Net, and other control protocols",
      "Ability to integrate a wide range of electronic components",
    ],
    value: [
      "Brings static environments to life with light, sound, and motion",
      "Creates engaging and memorable interactive experiences",
      "Reliable and robust control systems for complex shows",
      "Custom solutions tailored to specific creative and functional needs",
    ],
  },
];


export type Project = {
  title: string;
  category: "Steel Fabrication" | "Wood Fabrication" | "Foam Sculptures" | "Plastic & Resin" | "Fiberglass & Carbon Fiber" | "Signage & Graphics" | "Themed Environments" | "Creative Media";
  industry: string;
  materials: string;
  imageId: string;
};

export const projects: Project[] = [
  {
    title: "Kinetic Sculpture",
    category: "Steel Fabrication",
    industry: "Public Art",
    materials: "Stainless Steel, Aluminum",
    imageId: "portfolio-project-1",
  },
  {
    title: "Facade System",
    category: "Steel Fabrication",
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
    title: "Automotive Prototype",
    category: "Fiberglass & Carbon Fiber",
    industry: "Automotive",
    materials: "Carbon Fiber, Titanium",
    imageId: "portfolio-project-4",
  },
  {
    title: "Aerospace Bracket",
    category: "Steel Fabrication",
    industry: "Aerospace",
    materials: "Inconel 718",
    imageId: "portfolio-project-5",
  },
  {
    title: "Industrial Gearbox",
    category: "Steel Fabrication",
    industry: "Heavy Machinery",
    materials: "Hardened Steel",
    imageId: "portfolio-project-6",
  },
  {
    title: "Custom Cabinetry",
    category: "Wood Fabrication",
    industry: "Interior Design",
    materials: "Oak, Walnut",
    imageId: "product-wood",
  },
  {
    title: "Themed Park Entrance",
    category: "Themed Environments",
    industry: "Entertainment",
    materials: "GRC, Foam, Steel",
    imageId: "portfolio-project-3",
  },
  {
    title: "Animated Short Film",
    category: "Creative Media",
    industry: "Media",
    materials: "Digital",
    imageId: "about-sketch-1",
  },
  {
    title: "Large Foam Prop",
    category: "Foam Sculptures",
    industry: "Events",
    materials: "EPS Foam, Polyurea",
    imageId: "product-foam",
  },
  {
    title: "Backlit Channel Letters",
    category: "Signage & Graphics",
    industry: "Retail",
    materials: "Acrylic, Aluminum, LEDs",
    imageId: "product-signage",
  },
  {
    title: "Clear Product Casing",
    category: "Plastic & Resin",
    industry: "Electronics",
    materials: "Polycarbonate, Acrylic",
    imageId: "product-plastic",
  }
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
    name: "Fares Jazar",
    title: "Administrative Affairs & Business Development",
    department: "Leadership",
    imageId: "person-1",
  },
  {
    name: "Hadeel Sabawi",
    title: "Designer & Architect",
    department: "Design",
    imageId: "person-2",
  },
  {
    name: "Rahaf Abdullah",
    title: "Designer & Architect",
    department: "Fabrication",
    imageId: "person-3",
  },
  {
    name: "Hammam Attar",
    title: "CEO & Civil Engineer",
    department: "Engineering",
    imageId: "person-4",
  },
  {
    name: "Hamada Abaaza",
    title: "Production Manager & Industrial Engineer",
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

export const industries = [
  { name: "Theme Parks & Attractions", icon: VenetianMask },
  { name: "Film & TV Production", icon: Tv },
  { name: "Retail & Hospitality", icon: ShoppingCart },
  { name: "Events & Exhibitions", icon: Calendar },
  { name: "Architecture & Construction", icon: Construction },
  { name: "Museums & Cultural Projects", icon: Landmark },
  { name: "Corporate & Government", icon: Briefcase },
];
