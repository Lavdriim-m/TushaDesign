import AnimatedSection from '@/components/shared/AnimatedSection';
import GoldButton from '@/components/shared/GoldButton';

export default function CTASection() {
  return (
    <section
      className="relative py-40 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.55) 100%)' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="max-w-2xl">
          <span className="text-xs tracking-[0.3em] uppercase font-body mb-6 block" style={{ color: '#C9A96E' }}>
            Begin Your Journey
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
            Your Dream Kitchen
            <br />
            <em>Awaits</em>
          </h2>
          <p className="font-body text-base text-white/70 leading-relaxed mb-10 max-w-lg">
            Every extraordinary kitchen begins with a conversation. Tell us your vision and let our
            team of master designers bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <GoldButton href="/contact" variant="gold">
              Book a Consultation
            </GoldButton>
            <GoldButton href="/projects" variant="outline-light" showArrow={false}>
              View Our Work
            </GoldButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
