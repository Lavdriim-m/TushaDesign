import { testimonials } from '@/lib/data/testimonials';
import TestimonialSlider from '@/components/shared/TestimonialSlider';
import AnimatedSection from '@/components/shared/AnimatedSection';
import GoldDivider from '@/components/shared/GoldDivider';

export default function TestimonialsSection() {
  return (
    <section className="py-28 lg:py-36" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <AnimatedSection>
            <span className="text-xs tracking-[0.3em] uppercase font-body mb-4 block" style={{ color: '#C9A96E' }}>
              Client Voices
            </span>
            <GoldDivider centered className="mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal">
              What Our Clients Say
            </h2>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2}>
          <TestimonialSlider testimonials={testimonials} />
        </AnimatedSection>
      </div>
    </section>
  );
}
