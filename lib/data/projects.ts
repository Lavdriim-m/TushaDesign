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
    slug: 'vodno-hills-residence',
    title: 'Vodno Hills Residence',
    subtitle: 'A masterpiece of warm minimalism',
    category: 'Minimalist',
    location: 'Skopje, North Macedonia',
    year: '2024',
    style: 'Warm Minimalist',
    materials: ['MDF (Mediapan)', 'Matte Finish Surfaces', 'Custom Hardware', 'Engineered Worktop'],
    description: 'A serene kitchen that balances raw natural textures with refined craftsmanship.',
    longDescription:
      'Located in one of Skopje’s most desirable residential areas, this kitchen was designed to reflect a refined minimalist lifestyle. Clean lines and balanced proportions define the space, while custom-crafted cabinetry ensures both functionality and elegance. Every detail was carefully executed in our workshop to create a kitchen that feels modern, warm, and timeless.',
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
    slug: 'central-skyline-penthouse',
    title: 'Central Skyline Penthouse',
    subtitle: 'Urban sophistication at its peak',
    category: 'Contemporary',
    location: 'Skopje, North Macedonia',
    year: '2025',
    style: 'Urban Contemporary',
    materials: ['MDF (Mediapan)', 'Matte Black Finish', 'Walnut Texture', 'Compact Worktop'],
    description: 'A high-contrast kitchen that commands attention in a Skopje penthouse.',
    longDescription:
      'Located in the heart of Skopje, this penthouse kitchen was designed to reflect a bold and modern urban lifestyle. Clean architectural lines are combined with dark, elegant finishes to create a strong visual identity, while warm wood elements bring balance and comfort to the space. The result is a kitchen that is both striking and highly functional, designed for everyday living and entertaining.',
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
    slug: 'ohrid-lake-residence',
    title: 'Ohrid Lake Residence',
    subtitle: 'Where the lake meets refined living',
    category: 'Modern',
    location: 'Ohrid, North Macedonia',
    year: '2026',
    style: 'Coastal Modern',
    materials: ['MDF (Mediapan)', 'Matte White Finish', 'Wood Texture Panels', 'Compact Worktop'],
    description: 'Light-filled and breezy, with an effortless connection to the natural world.',
    longDescription:
      'Situated near the shores of Lake Ohrid, this kitchen was designed to embrace natural light and a calm, modern atmosphere. Soft tones and clean lines define the space, while wood textures add warmth and balance. Large openings allow natural light to fill the interior, creating a bright and relaxing environment ideal for everyday living.',
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
    slug: 'classic-residence',
    title: 'Classic Residence',
    subtitle: 'Classic grandeur reimagined',
    category: 'Classic',
    location: 'Bitola, North Macedonia',
    year: '2025',
    style: 'Transitional Classic',
    materials: ['MDF (Mediapan)', 'Matte Painted Finish', 'Classic Profile Fronts', 'Warm Wood Accents', 'Compact Worktop'],
    description: 'A timeless kitchen that honors tradition while embracing modern function.',
    longDescription:
      'Located in one of Bitola’s most historic neighborhoods, this kitchen was designed to reflect the elegance of classic architecture while meeting the needs of modern living. Refined details, soft tones, and balanced proportions create a timeless atmosphere, while custom-crafted cabinetry adds both character and functionality. The result is a space that feels sophisticated, warm, and enduring.',
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
    slug: 'elite-estate-residence',
    title: 'Elite Estate Residence',
    subtitle: 'Hollywood glamour meets culinary precision',
    category: 'Contemporary',
    location: 'Kumanovo, North Macedonia',
    year: '2026',
    style: 'Kumanovo Contemporary',
    materials: ['MDF (Mediapan)', 'High-Gloss Finish', 'Matte Accents', 'Fluted Glass Details', 'Compact Worktop'],
    description: 'Dramatic, sculptural, and unmistakably Los Angeles.',
    longDescription:
      'Designed as a statement piece, this kitchen combines bold contemporary design with everyday functionality. Clean architectural lines and contrasting textures define the space, while high-gloss surfaces and custom cabinetry create a refined, modern aesthetic. Every element is carefully integrated to deliver a kitchen that feels both visually striking and highly practical.',
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
    slug: 'urban-residence',
    title: 'Urban Residence',
    subtitle: 'Urban craft at the highest level',
    category: 'Modern',
    location: 'Skopje, North Macedonia',
    year: '2026',
    style: 'Urban Modern',
    materials: ['MDF (Mediapan)', 'Wood Texture Panels', 'Matte Finish Surfaces', 'Dark Metal Accents', 'Compact Worktop'],
    description: 'A kitchen rooted in place, built to last generations.',
    longDescription:
      'Designed to bring a modern interpretation of chalet-style living into an urban setting, this kitchen combines warm textures with clean contemporary lines. Wood-inspired finishes create a sense of comfort and depth, while dark accents add contrast and character. The result is a balanced space that feels both cozy and modern, tailored for everyday living.',
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
