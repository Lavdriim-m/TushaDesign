import Link from 'next/link';
import { Pencil, Hammer, Wrench, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import GoldDivider from '@/components/shared/GoldDivider';

const services = [
  {
    icon: Pencil,
    title: 'Kitchen Design',
    description:
      'A collaborative journey from your vision to a fully realized design — tailored to your space, lifestyle, and aesthetic aspirations.',
    href: '/services#design',
  },
  {
    icon: Hammer,
    title: 'Manufacturing',
    description:
      'Every element is produced in our atelier by master craftspeople, using premium materials and a blend of traditional and precision techniques.',
    href: '/services#manufacturing',
  },
  {
    icon: Wrench,
    title: 'Installation',
    description:
      'Our dedicated installation teams execute with the same care as our makers — treating your home with the utmost respect and attention.',
    href: '/services#installation',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-28 lg:py-36" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <AnimatedSection>
            <span className="text-xs tracking-[0.3em] uppercase font-body mb-4 block" style={{ color: '#C9A96E' }}>
              What We Do
            </span>
            <GoldDivider centered className="mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-white">
              Full-Service Excellence
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={i * 0.15} className="h-full">
                <div
                  className="h-full p-10 lg:p-12 group transition-colors duration-500 hover:bg-white/5 cursor-default"
                  style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
                >
                  <div className="mb-8">
                    <Icon size={32} color="#C9A96E" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-light text-white mb-4">{service.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-neutral-400 mb-8">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-body group-hover:gap-3 transition-all duration-300"
                    style={{ color: '#C9A96E' }}
                  >
                    Learn More
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
