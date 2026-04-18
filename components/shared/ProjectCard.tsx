'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/data/projects';

type Props = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <motion.div
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full h-full"
          >
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-6"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.85) 0%, transparent 60%)' }}
          >
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase font-body text-white/70 mb-1">
                  {project.category}
                </p>
                <h3 className="text-xl font-display font-medium text-white">{project.title}</h3>
              </div>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#C9A96E' }}
              >
                <ArrowRight size={16} color="white" />
              </div>
            </div>
          </motion.div>
          <div className="absolute top-4 left-4">
            <span
              className="text-xs tracking-[0.15em] uppercase font-body px-3 py-1"
              style={{ backgroundColor: 'rgba(201,169,110,0.9)', color: 'white' }}
            >
              {project.category}
            </span>
          </div>
        </div>
        <div className="pt-5 pb-2">
          <h3 className="font-display text-xl font-medium text-charcoal mb-1">{project.title}</h3>
          <p className="text-sm font-body text-neutral-500">{project.location}</p>
        </div>
      </Link>
    </motion.div>
  );
}
