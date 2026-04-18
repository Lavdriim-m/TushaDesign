'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, getCategories } from '@/lib/data/projects';
import ProjectCard from '@/components/shared/ProjectCard';
import AnimatedSection from '@/components/shared/AnimatedSection';
import GoldDivider from '@/components/shared/GoldDivider';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = getCategories();

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section
        className="pt-40 pb-20"
        style={{ backgroundColor: '#FAF8F5' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-2xl">
            <span className="text-xs tracking-[0.3em] uppercase font-body mb-4 block" style={{ color: '#C9A96E' }}>
              Our Work
            </span>
            <GoldDivider className="mb-6" />
            <h1 className="font-display text-5xl md:text-6xl font-light mb-6">
              Portfolio
            </h1>
            <p className="font-body text-base text-neutral-500 leading-relaxed">
              Each kitchen is a unique expression of its owner — crafted with precision and designed to endure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-6" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="text-xs tracking-[0.2em] uppercase font-body px-5 py-2.5 transition-all duration-300"
                  style={{
                    backgroundColor: activeCategory === cat ? '#1A1A1A' : 'transparent',
                    color: activeCategory === cat ? 'white' : '#6B6B6B',
                    border: activeCategory === cat ? '1px solid #1A1A1A' : '1px solid #D4C5A9',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 pb-28" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-neutral-400">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
