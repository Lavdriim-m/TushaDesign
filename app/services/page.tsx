import Image from 'next/image';
import { Check, type LucideIcon, Pencil, Hammer, Wrench } from 'lucide-react';
import { services, whyChooseUs } from '@/lib/data/services';
import AnimatedSection from '@/components/shared/AnimatedSection';
import GoldDivider from '@/components/shared/GoldDivider';
import GoldButton from '@/components/shared/GoldButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — TushaDesign',
  description: 'Bespoke kitchen design, artisanal manufacturing, and seamless installation.',
};

const icons: Record<string, LucideIcon> = {
  Pencil,
  Hammer,
  Wrench,
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-40 pb-24" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-2xl">
            <span className="text-xs tracking-[0.3em] uppercase font-body mb-4 block" style={{ color: '#C9A96E' }}>
              What We Offer
            </span>
            <GoldDivider className="mb-6" />
            <h1 className="font-display text-5xl md:text-6xl font-light text-white mb-6">
              Full-Service
              <br />
              <em>Excellence</em>
            </h1>
            <p className="font-body text-base text-neutral-400 leading-relaxed">
              From the first sketch to the final fitting, we orchestrate every detail of your kitchen journey.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {services.map((service, i) => {
        const Icon = icons[service.icon];
        const isEven = i % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.slug}
            className="py-24 lg:py-32"
            style={{ backgroundColor: i % 2 === 0 ? '#FAF8F5' : '#EDE8E0' }}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                <AnimatedSection direction={isEven ? 'left' : 'right'} className={isEven ? '' : 'lg:col-start-2'}>
                  <div className="relative" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </AnimatedSection>

                <AnimatedSection
                  direction={isEven ? 'right' : 'left'}
                  delay={0.2}
                  className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}
                >
                  <div className="mb-6">
                    {Icon && <Icon size={36} strokeWidth={1.5} color="#C9A96E" />}
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase font-body mb-3 block" style={{ color: '#C9A96E' }}>
                    {`0${i + 1}`}
                  </span>
                  <GoldDivider className="mb-6" />
                  <h2 className="font-display text-4xl md:text-5xl font-light mb-4">{service.title}</h2>
                  <p className="font-body text-sm leading-relaxed text-neutral-600 mb-10">
                    {service.longDescription}
                  </p>

                  <div className="space-y-6">
                    <h3 className="text-xs tracking-[0.25em] uppercase font-body text-neutral-400">
                      Our Process
                    </h3>
                    {service.steps.map((step) => (
                      <div key={step.number} className="flex gap-6">
                        <span
                          className="font-display text-2xl font-light flex-shrink-0 leading-none"
                          style={{ color: '#C9A96E', opacity: 0.5 }}
                        >
                          {step.number}
                        </span>
                        <div>
                          <h4 className="font-display text-lg font-medium mb-1">{step.title}</h4>
                          <p className="font-body text-sm text-neutral-500 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-24 lg:py-32" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <AnimatedSection>
              <span className="text-xs tracking-[0.3em] uppercase font-body mb-4 block" style={{ color: '#C9A96E' }}>
                Our Difference
              </span>
              <GoldDivider centered className="mb-6" />
              <h2 className="font-display text-4xl md:text-5xl font-light text-white">
                Why Choose TushaDesign
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div
                  className="p-8"
                  style={{ border: '1px solid rgba(201,169,110,0.15)', backgroundColor: 'rgba(255,255,255,0.03)' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Check size={16} color="#C9A96E" />
                    <h3 className="font-display text-lg font-medium text-white">{item.title}</h3>
                  </div>
                  <p className="font-body text-sm text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="text-center mt-16">
            <GoldButton href="/contact" variant="gold">
              Begin Your Project
            </GoldButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
