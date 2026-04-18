import Image from 'next/image';
import AnimatedSection from '@/components/shared/AnimatedSection';
import GoldDivider from '@/components/shared/GoldDivider';
import GoldButton from '@/components/shared/GoldButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — TushaDesign',
  description: 'Two decades of creating extraordinary kitchens for discerning clients.',
};

const values = [
  {
    title: 'Uncompromising Craft',
    description:
      'We refuse to cut corners. Every joint, every finish, every detail is executed to the highest standard — because longevity and beauty demand nothing less.',
  },
  {
    title: 'Client Partnership',
    description:
      'We believe great kitchens emerge from genuine collaboration. We listen intently, advise honestly, and create together.',
  },
  {
    title: 'Material Integrity',
    description:
      'We source only the finest materials — visiting quarries, mills, and artisan workshops to select pieces that meet our exacting standards.',
  },
  {
    title: 'Timeless Design',
    description:
      'Trends fade; quality endures. We design kitchens that will remain beautiful, functional, and relevant for generations.',
  },
];

const team = [
  {
    name: 'Elias Tusha',
    title: 'Founder & Creative Director',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'With over two decades in bespoke kitchen design, Elias founded TushaDesign on a single belief: the kitchen is the soul of the home and deserves to be extraordinary.',
  },
  {
    name: 'Marina Voss',
    title: 'Head of Design',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'A graduate of the Architectural Association, Marina brings architectural rigour and intuitive spatial thinking to every project she leads.',
  },
  {
    name: 'Thomas Rauch',
    title: 'Master Craftsman',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Third-generation cabinetmaker Thomas oversees all manufacturing, ensuring that every piece that leaves our atelier meets the standards set by generations of craft.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[75vh] min-h-[580px] flex items-end">
        <Image
          src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Our atelier"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.8) 0%, rgba(26,26,26,0.3) 60%, transparent 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <AnimatedSection>
            <span className="text-xs tracking-[0.3em] uppercase font-body mb-4 block" style={{ color: '#C9A96E' }}>
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-light text-white">
              About
              <br />
              <em>TushaDesign</em>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-28 lg:py-36" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <AnimatedSection direction="left">
              <GoldDivider className="mb-8" />
              <h2 className="font-display text-4xl md:text-5xl font-light mb-8">
                Two Decades of
                <br />
                <em>Exceptional Craft</em>
              </h2>
              <div className="space-y-5 font-body text-sm leading-relaxed text-neutral-600">
                <p>
                  TushaDesign was founded in 2003 by Elias Tusha, a designer who believed that the
                  kitchen — as the heart of the home — deserved the same level of care and craft
                  that a master architect brings to a landmark building.
                </p>
                <p>
                  What began as a one-man design studio has grown into a world-class atelier of 60
                  craftspeople, designers, and installation specialists. Yet our founding principle
                  remains unchanged: every kitchen we create is a singular work, designed from
                  first principles, built by hand, and installed with care.
                </p>
                <p>
                  We have completed over 340 projects across North America, Europe, and beyond —
                  from alpine retreats to Manhattan penthouses, from coastal estates to urban
                  townhouses. Each one is different. Each one is exceptional.
                </p>
                <p>
                  Our 12,000 square foot manufacturing facility houses both traditional hand-tool
                  benches and state-of-the-art CNC technology. This marriage of craft and
                  precision is what allows us to realize designs of extraordinary complexity and
                  beauty.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative" style={{ aspectRatio: '3/4' }}>
                  <Image
                    src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Workshop detail"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative mt-8" style={{ aspectRatio: '3/4' }}>
                  <Image
                    src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Craftsmanship detail"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-28" style={{ backgroundColor: '#EDE8E0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <AnimatedSection>
              <span className="text-xs tracking-[0.3em] uppercase font-body mb-4 block" style={{ color: '#C9A96E' }}>
                Our Principles
              </span>
              <GoldDivider centered className="mb-6" />
              <h2 className="font-display text-4xl md:text-5xl font-light">What We Stand For</h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(201,169,110,0.2)' }}>
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="p-10 lg:p-12" style={{ backgroundColor: '#EDE8E0' }}>
                  <span className="font-display text-4xl font-light mb-4 block" style={{ color: 'rgba(201,169,110,0.4)' }}>
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-2xl font-medium mb-4">{value.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-neutral-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <AnimatedSection>
              <span className="text-xs tracking-[0.3em] uppercase font-body mb-4 block" style={{ color: '#C9A96E' }}>
                The People
              </span>
              <GoldDivider centered className="mb-6" />
              <h2 className="font-display text-4xl md:text-5xl font-light">Our Team</h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.15}>
                <div>
                  <div className="relative mb-6 overflow-hidden" style={{ aspectRatio: '3/4' }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div
                    className="pb-4 mb-4"
                    style={{ borderBottom: '1px solid rgba(201,169,110,0.3)' }}
                  >
                    <h3 className="font-display text-xl font-medium">{member.name}</h3>
                    <p className="text-xs tracking-widest uppercase font-body mt-1" style={{ color: '#C9A96E' }}>
                      {member.title}
                    </p>
                  </div>
                  <p className="font-body text-sm leading-relaxed text-neutral-500">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-xs tracking-[0.3em] uppercase font-body mb-6 block" style={{ color: '#C9A96E' }}>
              Join Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6">
              Let&apos;s Create Something
              <br />
              <em>Extraordinary Together</em>
            </h2>
            <p className="font-body text-neutral-400 mb-10 leading-relaxed">
              Every great kitchen begins with a conversation. Tell us about your vision.
            </p>
            <GoldButton href="/contact" variant="gold">
              Book a Consultation
            </GoldButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
