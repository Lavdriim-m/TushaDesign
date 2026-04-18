export type ServiceStep = {
  number: string;
  title: string;
  description: string;
};

export type Service = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  icon: string;
  steps: ServiceStep[];
};

export const services: Service[] = [
  {
    id: '1',
    slug: 'design',
    title: 'Kitchen Design',
    subtitle: 'Vision brought to life',
    description:
      'Our design process is a deeply personal journey. We work alongside you to translate your vision into a kitchen that reflects your lifestyle, taste, and aspirations.',
    longDescription:
      'Every great kitchen begins with a great design. Our team of expert designers combine deep material knowledge, architectural sensitivity, and an intuitive understanding of how people live. We create spaces that are as functional as they are beautiful — designed to serve you for decades.',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Pencil',
    steps: [
      {
        number: '01',
        title: 'Discovery Consultation',
        description:
          'We begin with an in-depth conversation about your vision, lifestyle, entertaining habits, and aesthetic preferences.',
      },
      {
        number: '02',
        title: 'Concept Development',
        description:
          'Our designers craft multiple concept boards featuring material palettes, spatial layouts, and mood references tailored to your brief.',
      },
      {
        number: '03',
        title: 'Detailed Design',
        description:
          'Refined drawings, 3D visualizations, and full material specifications are developed with your direct input at every stage.',
      },
      {
        number: '04',
        title: 'Design Approval',
        description:
          'You approve the final design package before a single piece of material is ordered or a single cut is made.',
      },
    ],
  },
  {
    id: '2',
    slug: 'manufacturing',
    title: 'Manufacturing',
    subtitle: 'Crafted in our atelier',
    description:
      'Every component is produced in our dedicated workshop by master craftspeople using a blend of traditional techniques and precision CNC technology.',
    longDescription:
      'Our manufacturing atelier is where design becomes reality. Situated on 12,000 square feet, our workshop houses traditional hand-tool benches alongside the most advanced CNC routing and finishing equipment. This marriage of craft and technology allows us to achieve results that neither alone could produce.',
    image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Hammer',
    steps: [
      {
        number: '01',
        title: 'Material Procurement',
        description:
          'We source materials from the world\'s finest quarries, mills, and suppliers — selecting each slab and plank individually.',
      },
      {
        number: '02',
        title: 'Precision Fabrication',
        description:
          'Cabinet carcasses are built to exacting tolerances using premium-grade materials and concealed fixings.',
      },
      {
        number: '03',
        title: 'Hand Finishing',
        description:
          'Doors, drawer fronts, and decorative elements receive individual hand-finishing — sanding, priming, painting, and lacquering by skilled artisans.',
      },
      {
        number: '04',
        title: 'Quality Control',
        description:
          'Every piece undergoes a rigorous multi-point inspection before it leaves our atelier.',
      },
    ],
  },
  {
    id: '3',
    slug: 'installation',
    title: 'Installation',
    subtitle: 'Seamless execution',
    description:
      'Our dedicated installation teams carry our standards of excellence from the workshop to your home — treating every project as if it were their own.',
    longDescription:
      'The installation phase is where years of planning and craftsmanship are finally revealed. Our in-house installation teams are trained to the same standards as our craftspeople. They work meticulously, protecting your home and communicating clearly throughout the process.',
    image: 'https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: 'Wrench',
    steps: [
      {
        number: '01',
        title: 'Site Preparation',
        description:
          'Our team arrives early to protect floors, walls, and adjacent spaces before any installation work begins.',
      },
      {
        number: '02',
        title: 'Precise Installation',
        description:
          'Each cabinet, panel, and component is installed with laser precision — leveled, squared, and secured.',
      },
      {
        number: '03',
        title: 'Appliance Integration',
        description:
          'We coordinate with plumbers, electricians, and appliance specialists to ensure seamless integration.',
      },
      {
        number: '04',
        title: 'Final Inspection & Handover',
        description:
          'A thorough walkthrough ensures every detail meets our standards before we hand over your new kitchen.',
      },
    ],
  },
];

export const whyChooseUs = [
  {
    title: 'Two Decades of Mastery',
    description:
      'Over 20 years of creating exceptional kitchens for discerning clients across the world.',
  },
  {
    title: 'In-House Everything',
    description:
      'Design, manufacturing, and installation under one roof means total quality control at every stage.',
  },
  {
    title: 'Bespoke by Nature',
    description:
      'No templates, no shortcuts. Every kitchen is designed from first principles to your exact specifications.',
  },
  {
    title: 'Lifetime Guarantee',
    description:
      'Our kitchens are built to last generations. We stand behind every joint, finish, and fitting.',
  },
  {
    title: 'Premium Materials Only',
    description:
      'We work exclusively with the finest materials — sourced globally, selected individually.',
  },
  {
    title: 'White-Glove Service',
    description:
      'From first consultation to final handover, your experience is as refined as the kitchen we create.',
  },
];
