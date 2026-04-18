import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Layers } from 'lucide-react';
import { getProjectBySlug, projects } from '@/lib/data/projects';
import AnimatedSection from '@/components/shared/AnimatedSection';
import GoldDivider from '@/components/shared/GoldDivider';
import GoldButton from '@/components/shared/GoldButton';
import type { Metadata } from 'next';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — TushaDesign`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <>
      <section className="relative h-[80vh] min-h-[600px]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.2) 60%, transparent 100%)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
          <span
            className="inline-block text-xs tracking-[0.2em] uppercase font-body px-3 py-1 mb-4"
            style={{ backgroundColor: '#C9A96E', color: 'white' }}
          >
            {project.category}
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-light text-white mb-2">
            {project.title}
          </h1>
          <p className="font-body text-lg text-white/70 italic font-light">{project.subtitle}</p>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-body mb-16 group transition-colors duration-300 text-neutral-500 hover:text-neutral-900"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <GoldDivider className="mb-8" />
                <h2 className="font-display text-3xl md:text-4xl font-light mb-6">About this Project</h2>
                <p className="font-body text-base leading-relaxed text-neutral-600">
                  {project.longDescription}
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs tracking-[0.25em] uppercase font-body text-neutral-400 mb-4">
                    Project Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} color="#C9A96E" className="mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-neutral-400 font-body">Location</p>
                        <p className="text-sm font-body font-medium">{project.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar size={16} color="#C9A96E" className="mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-neutral-400 font-body">Year</p>
                        <p className="text-sm font-body font-medium">{project.year}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Layers size={16} color="#C9A96E" className="mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-neutral-400 font-body">Style</p>
                        <p className="text-sm font-body font-medium">{project.style}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs tracking-[0.25em] uppercase font-body text-neutral-400 mb-4">
                    Materials Used
                  </h3>
                  <ul className="space-y-2">
                    {project.materials.map((m) => (
                      <li key={m} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#C9A96E' }} />
                        <span className="text-sm font-body">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-6 pb-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.slice(0, 4).map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative overflow-hidden" style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}>
                  <Image
                    src={img}
                    alt={`${project.title} — image ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-xs tracking-[0.3em] uppercase font-body mb-4 block" style={{ color: '#C9A96E' }}>
              Your Kitchen Awaits
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6">
              Inspired by what you see?
            </h2>
            <p className="font-body text-neutral-400 mb-10">
              Let us design and build something extraordinary for you.
            </p>
            <GoldButton href="/contact" variant="gold">
              Start Your Project
            </GoldButton>
          </AnimatedSection>
        </div>
      </section>

      {(prevProject || nextProject) && (
        <section className="py-12" style={{ backgroundColor: '#EDE8E0' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-center">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="flex items-center gap-3 group"
                >
                  <ArrowLeft size={16} color="#C9A96E" className="group-hover:-translate-x-1 transition-transform duration-300" />
                  <div>
                    <p className="text-xs text-neutral-400 font-body tracking-widest uppercase mb-1">Previous</p>
                    <p className="font-display text-lg font-light">{prevProject.title}</p>
                  </div>
                </Link>
              ) : <div />}
              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="flex items-center gap-3 text-right group"
                >
                  <div>
                    <p className="text-xs text-neutral-400 font-body tracking-widest uppercase mb-1">Next</p>
                    <p className="font-display text-lg font-light">{nextProject.title}</p>
                  </div>
                  <ArrowRight size={16} color="#C9A96E" className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
