export type Testimonial = {
  id: string;
  name: string;
  title: string;
  location: string;
  quote: string;
  project: string;
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Artan Krasniqi',
    title: 'Villa Owner',
    location: 'Mavrovo, North Macedonia',
    quote:
      'TushaDesign transformed our villa with a kitchen that exceeded every expectation. The attention to detail from the hand-selected marble to the perfectly weighted drawer pulls is extraordinary. It is not just a kitchen; it is the heart of our home.',
    project: 'Alpine Residence',
  },
  {
    id: '2',
    name: 'Aleksandar & Marija Petrovski',
    title: 'Homeowners',
    location: 'Skopje, North Macedonia',
    quote:
      'We interviewed three design firms before choosing TushaDesign. Within minutes of our first meeting, it was clear they understood not just what we wanted, but why we wanted it. The result is a kitchen that feels entirely ours and entirely extraordinary.',
    project: 'Metropolitan Penthouse',
  },
  {
    id: '3',
    name: 'Ana Dimitrovska',
    title: 'Interior Architect',
    location: 'Skopje, North Macedonia',
    quote:
      'As an architect, I have exacting standards. TushaDesign is the only kitchen manufacturer I recommend to my most demanding clients. Their ability to realize complex designs without compromise is simply unmatched in the industry.',
    project: 'Coastal Retreat',
  },
  {
    id: '4',
    name: 'Lavdrim Mustafi',
    title: 'Property Developer',
    location: 'Kumanovo, North Macedonia',
    quote:
      'I have commissioned TushaDesign for four projects now. Each one has elevated the property value and set the standard for luxury in its market. They deliver on time, on budget, and above expectation — every single time.',
    project: 'Heritage Manor',
  },
  {
    id: '5',
    name: 'Marija Nikolovska',
    title: 'Homeowner',
    location: 'Ohrid, North Macedonia',
    quote:
      'The kitchen TushaDesign created for us is without question the most beautiful room in our home. Every guest who visits remarks on it. It has become a gathering place, a source of pride, and a daily pleasure.',
    project: 'Beverly Hills Estate',
  },
];
