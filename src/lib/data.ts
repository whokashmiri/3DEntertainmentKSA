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
      "Shop drawings for fabrication",
    ],
    process: [
      "Client brief & creative ideation",
      "3D modeling, visualization & VR walkthroughs",
      "Engineering analysis & simulation",
      "Material research & selection",
      "Seamless handoff of production-ready shop drawings to fabrication teams",
    ],
    capability: [
      "In-house architects, artists, and engineers",
      "Advanced CAD/CAM software (AutoCAD, Revit, SolidWorks)",
      "Finite Element Analysis (FEA) tools",
      "Direct collaboration with fabrication floor",
    ],
    value: [
      "Integrated design-to-fabrication workflow",
      "Creative solutions grounded in technical feasibility",
      "Designs optimized for manufacturability and cost-efficiency",
      "Reduced project risk through early-stage engineering validation",
    ],
  },
  {
    title: "E-Production",
    icon: ScanLine,
    imageId: "tech-machine-4",
    scope: [
        "High-fidelity 3D scanning (object & environment)",
        "Reverse engineering from physical objects",
        "Digital model cleanup for CNC & 3D printing",
        "Virtual reality (VR) pre-visualization",
        "Rapid prototyping via 3D printing farm",
    ],
    process: [
        "On-site scanning with laser/structured light scanners",
        "Point cloud data processing into a usable 3D mesh",
        "CAD model creation from scan data for reverse engineering",
        "Creating immersive VR environments for design review",
        "Direct output of digital files to CNC machines and 3D printers",
    ],
    capability: [
        "High-resolution 3D scanners (Artec, Faro)",
        "Full-color 3D printer farm",
        "Powerful workstations for data processing",
        "Direct link to fabrication and machining departments",
    ],
    value: [
        "Accelerates the entire design-to-fabrication pipeline",
        "Ensures perfect fit and integration with existing conditions",
        "Enables early-stage collaborative design reviews in VR",
        "Bridges the physical and digital worlds for limitless creativity",
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
      "Custom content for projection mapping on fabricated structures",
      "Interactive media for integrated exhibits",
    ],
    process: [
      "Storyboarding, animatics, and pre-visualization",
      "Asset creation (modeling, texturing, rigging)",
      "Animation, motion capture, and simulation",
      "Compositing digital effects with live-action footage",
      "Content calibration for specific surfaces built by our fabrication team",
    ],
    capability: [
      "In-house animation and VFX studio",
      "High-performance render farm",
      "Industry-standard software (Maya, Houdini, After Effects)",
      "Syncs with fabrication team for projection mapping projects",
    ],
    value: [
      "Engaging digital storytelling that captivates audiences",
      "Seamless integration of digital content with physical environments",
      "A complete pipeline from concept to final rendered content",
      "Enhances physical creations with dynamic digital layers",
    ],
  },
  {
    title: "Machining & Cutting",
    icon: Cpu,
    imageId: "tech-machine-1",
    scope: [
      "Multi-axis CNC milling and turning for complex parts",
      "Large-format CNC routing for wood, foam, and plastics",
      "High-power CNC laser & plasma cutting for metal",
      "Framecad LGS line for light-gauge steel structures",
      "Precision drilling, tapping, and sheet metal forming",
    ],
    process: [
      "Receiving digital models directly from the engineering team",
      "CAM programming and toolpath optimization",
      "Automated machining, cutting, and forming operations",
      "In-process quality control and tolerance verification",
      "Parts are passed to assembly and coating teams for finishing",
    ],
    capability: [
      "40 kW CNC plate laser, CNC pipe laser",
      "5-axis & 4-axis carving machines, large-format routers",
      "CNC turning/milling centers, CNC bending machines",
      "Direct integration with design and engineering data",
    ],
    value: [
      "Flawless execution of design intent with high precision",
      "Ability to produce complex geometries efficiently",
      "Reduces manual error and accelerates production timelines",
      "A critical link in our fully digital fabrication workflow",
    ],
  },
  {
    title: "Coating & Cladding",
    icon: PaintRoller,
    imageId: "tech-machine-2",
    scope: [
      "Protective polyurea and hard-shell coatings for foam & props",
      "Architectural metal cladding and paneling systems",
      "Industrial powder coating for durability and finish",
      "Wood veneer pressing and film lamination",
      "High-quality scenic painting and artistic finishing",
    ],
    process: [
      "Surface preparation (sanding, blasting, cleaning)",
      "Application of coatings in controlled spray booths",
      "Curing in industrial ovens for a robust finish",
      "Application of veneers or laminates in large-scale presses",
      "Final quality inspection before moving to pre-assembly or installation",
    ],
    capability: [
      "Automated powder-coating and hard-coating lines",
      "Large-scale, ventilated paint and spray booths",
      "Veneer presses and lamination machinery",
      "Team of skilled painters and finishing specialists",
    ],
    value: [
      "The final step in ensuring long-term durability and aesthetic perfection",
      "Wide range of finishes, from industrial-grade to hyper-realistic scenic art",
      "Consistent quality control as part of our integrated process",
      "Protection and beauty for fabricated components",
    ],
  },
  {
    title: "Installation & Special Construction",
    icon: Wrench,
    imageId: "portfolio-project-2",
    scope: [
      "Full-service, on-site installation and assembly",
      "Turnkey construction of themed environments and scenic elements",
      "Rigging and placement of large-scale structures and artworks",
      "Integration of all fabricated components, including electronics",
      "Project management and site supervision from start to finish",
    ],
    process: [
      "Pre-installation site survey and logistic planning",
      "Transporting pre-fabricated components from our factory to the site",
      "Systematic assembly based on installation drawings from our engineers",
      "Coordinating with other on-site trades and general contractors",
      "Final commissioning, testing, and client handover",
    ],
    capability: [
      "Experienced teams of on-site installers, technicians, and supervisors",
      "Mobile equipment (cranes, lifts, welding units)",
      "Certified riggers and safety officers to ensure compliance",
      "Deep expertise in complex, multi-component installations",
    ],
    value: [
      "Seamless transition from factory to final location",
      "Single point of responsibility for the entire project lifecycle",
      "Ensures the final product matches the initial design vision perfectly",
      "Safe, efficient, and professional on-site execution",
    ],
  },
  {
    title: "Electronics & Programming",
    icon: CircuitBoard,
    imageId: "portfolio-project-0",
    scope: [
      "Custom LED lighting design and integration into fabricated pieces",
      "PLC programming for automation and show control",
      "Development of interactive exhibits with sensors and actuators",
      "Integration of motors and motion control systems",
      "Bespoke software for system control and user interaction",
    ],
    process: [
      "Designing electronic systems to fit within physical fabrications",
      "Circuit design, assembly, and bench testing in our lab",
      "Programming firmware and control software",
      "Pre-installing electronics into components at the factory",
      "On-site calibration and integration during final installation",
    ],
    capability: [
      "In-house electronics lab and programming team",
      "Expertise in PLC, Arduino, and Raspberry Pi platforms",
      "Knowledge of DMX, Art-Net, and other control protocols",
      "Close collaboration with design and fabrication teams",
    ],
    value: [
      "Brings static environments to life with dynamic light, sound, and motion",
      "Creates engaging and memorable interactive experiences",
      "Reliable control systems tested and integrated before they leave the factory",
      "A key part of our ability to deliver fully realized, turnkey experiences",
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
