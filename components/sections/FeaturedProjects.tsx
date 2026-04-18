import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProjects } from '@/lib/data/projects';
import ProjectCard from '@/components/shared/ProjectCard';
import AnimatedSection from '@/components/shared/AnimatedSection';
import GoldDivider from '@/components/shared/GoldDivider';

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-28 lg:py-36" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <AnimatedSection>
            <span className="text-xs tracking-[0.3em] uppercase font-body mb-4 block" style={{ color: '#C9A96E' }}>
              Portfolio
            </span>
            <GoldDivider className="mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal">
              Featured
              <br />
              <em>Projects</em>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-body mt-6 md:mt-0 group"
              style={{ color: '#C9A96E' }}
            >
              View All Projects
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
