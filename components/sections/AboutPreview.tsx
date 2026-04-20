import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import GoldDivider from '@/components/shared/GoldDivider';

const stats = [
  { value: '8+', label: 'Years of Craft' },
  { value: '340+', label: 'Projects Completed' },
];

export default function AboutPreview() {
  return (
    <section className="py-28 lg:py-36" style={{ backgroundColor: '#EDE8E0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimatedSection direction="left" className="relative">
            <div className="relative" style={{ aspectRatio: '4/5' }}>
              <Image
                src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Our craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 hidden lg:block"
              style={{ width: 180, height: 180, backgroundColor: '#C9A96E', opacity: 0.12 }}
            />
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <span className="text-xs tracking-[0.3em] uppercase font-body mb-4 block" style={{ color: '#C9A96E' }}>
              Our Story
            </span>
            <GoldDivider className="mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
              Crafted with
              <br />
              <em>Uncompromising</em>
              <br />
              Precision
            </h2>
            <p className="font-body text-sm leading-relaxed text-neutral-600 mb-4">
              Since 2018, TushaDesign has been creating kitchens that transcend function
              to become the defining spaces of exceptional homes. Every project begins with a simple
              belief: the kitchen is the heart of the home, and it deserves to be extraordinary.
            </p>
            <p className="font-body text-sm leading-relaxed text-neutral-600 mb-10">
              Our in-house atelier — where designers, craftspeople, and installers work in
              concert — ensures an unwavering standard from first sketch to final fitting.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-10 pb-10" style={{ borderBottom: '1px solid rgba(201,169,110,0.3)' }}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-light mb-1" style={{ color: '#C9A96E' }}>
                    {stat.value}
                  </p>
                  <p className="font-body text-xs tracking-wider text-neutral-500 uppercase">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-body group"
              style={{ color: '#1A1A1A' }}
            >
              Discover Our Story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
