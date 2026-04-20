export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Modern' | 'Classic' | 'Minimalist' | 'Contemporary';
  location: string;
  year: string;
  style: string;
  materials: string[];
  description: string;
  longDescription: string;
  heroImage: string;
  images: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: '1',
    slug: 'alpine-residence',
    title: 'Alpine Residence',
    subtitle: 'A masterpiece of warm minimalism',
    category: 'Minimalist',
    location: 'Gazi Baba, Skopje',
    year: '2024',
    style: 'Warm Minimalist',
    materials: ['Calacatta Marble', 'Brushed Brass', 'Smoked Oak', 'Matte White Lacquer'],
    description: 'A serene kitchen that balances raw natural textures with refined craftsmanship.',
    longDescription:
      'Nestled in the heart of Aspen, this kitchen was designed to harmonize with the surrounding mountain landscape. Calacatta marble countertops with dramatic veining take center stage, framed by custom smoked oak cabinetry and brushed brass hardware. Every element was hand-selected and crafted in our workshop to create a space that feels simultaneously grand and intimate.',
    heroImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'metropolitan-penthouse',
    title: 'Metropolitan Penthouse',
    subtitle: 'Urban sophistication at its peak',
    category: 'Contemporary',
    location: 'New York City, NY',
    year: '2024',
    style: 'Urban Contemporary',
    materials: ['Nero Marquina Marble', 'Matte Black Steel', 'Walnut', 'Concrete'],
    description: 'A high-contrast kitchen that commands attention in a New York penthouse.',
    longDescription:
      'Perched atop Manhattan, this penthouse kitchen demanded a design as bold as its surroundings. Nero Marquina marble creates a dramatic focal point against custom matte black steel framing, while warm walnut islands add an organic counterpoint. The result is a kitchen that entertains both visually and functionally.',
    heroImage: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920',
    images: [
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'coastal-retreat',
    title: 'Coastal Retreat',
    subtitle: 'Where the ocean meets refined living',
    category: 'Modern',
    location: 'The Hamptons, NY',
    year: '2023',
    style: 'Coastal Modern',
    materials: ['White Quartz', 'Cerused Oak', 'Aged Brass', 'Linen Lacquer'],
    description: 'Light-filled and breezy, with an effortless connection to the natural world.',
    longDescription:
      'Designed for a waterfront estate in The Hamptons, this kitchen celebrates the interplay of light, air, and natural materials. Cerused oak cabinetry with an open-grain finish mimics the texture of driftwood, while white quartz countertops and aged brass hardware complete the serene palette. Floor-to-ceiling glazing floods the space with coastal light.',
    heroImage: 'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1920',
    images: [
      'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    featured: true,
  },
  {
    id: '4',
    slug: 'heritage-manor',
    title: 'Heritage Manor',
    subtitle: 'Classic grandeur reimagined',
    category: 'Classic',
    location: 'Greenwich, Connecticut',
    year: '2023',
    style: 'Transitional Classic',
    materials: ['Arabescato Marble', 'Antique Brass', 'Painted Shaker', 'Reclaimed Oak'],
    description: 'A timeless kitchen that honors tradition while embracing modern function.',
    longDescription:
      'Set within a 19th-century Georgian manor, this kitchen required a design that honored the home\'s heritage while meeting the demands of contemporary life. Hand-painted shaker cabinetry in a bespoke off-white, Arabescato marble, and antique brass fittings create an atmosphere of understated grandeur.',
    heroImage: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1920',
    images: [
      'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    featured: false,
  },
  {
    id: '5',
    slug: 'beverly-hills-estate',
    title: 'Beverly Hills Estate',
    subtitle: 'Hollywood glamour meets culinary precision',
    category: 'Contemporary',
    location: 'Beverly Hills, CA',
    year: '2023',
    style: 'California Contemporary',
    materials: ['Patagonia Quartzite', 'Satin Chrome', 'Ebony Lacquer', 'Fluted Glass'],
    description: 'Dramatic, sculptural, and unmistakably Los Angeles.',
    longDescription:
      'This Beverly Hills estate kitchen was conceived as a showpiece — a place where culinary artistry and architectural drama converge. Patagonia quartzite islands with waterfall edges, ebony lacquer high-gloss cabinetry, and concealed professional appliances create an experience that is both theatrical and supremely functional.',
    heroImage: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1920',
    images: [
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    featured: false,
  },
  {
    id: '6',
    slug: 'swiss-chalet',
    title: 'Swiss Chalet',
    subtitle: 'Alpine craft at the highest level',
    category: 'Modern',
    location: 'Gstaad, Switzerland',
    year: '2022',
    style: 'Alpine Modern',
    materials: ['Swiss Limestone', 'Oxidized Steel', 'Larch Wood', 'Hand-Blown Glass'],
    description: 'A kitchen rooted in place, built to last generations.',
    longDescription:
      'Commissioned for a private chalet in the Swiss Alps, this kitchen draws from the region\'s deep woodworking tradition. Local larch cabinetry with hand-carved details and Swiss limestone countertops speak of permanence and craft. Oxidized steel elements and hand-blown glass pendants add a contemporary counterpoint to the traditional forms.',
    heroImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    featured: false,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getCategories = (): string[] => ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
