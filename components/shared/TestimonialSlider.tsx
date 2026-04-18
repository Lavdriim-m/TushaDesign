'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '@/lib/data/testimonials';

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialSlider({ testimonials }: Props) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  };

  const t = testimonials[current];

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={t.id}
          custom={direction}
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -60 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center px-4"
        >
          <div className="text-5xl font-display font-light mb-8" style={{ color: '#C9A96E' }}>
            &ldquo;
          </div>
          <blockquote className="font-display text-2xl md:text-3xl font-light leading-relaxed text-neutral-800 mb-10 italic">
            {t.quote}
          </blockquote>
          <div>
            <p className="font-body font-medium text-sm tracking-wider text-neutral-900">{t.name}</p>
            <p className="font-body text-xs tracking-widest uppercase text-neutral-500 mt-1">
              {t.title} &mdash; {t.location}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-6 mt-14">
        <button
          onClick={prev}
          className="w-10 h-10 border flex items-center justify-center transition-all duration-300 hover:bg-neutral-900 hover:border-neutral-900 hover:text-white"
          style={{ borderColor: '#D4C5A9', color: '#1A1A1A' }}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className="h-px transition-all duration-300"
              style={{
                width: i === current ? 32 : 16,
                backgroundColor: i === current ? '#C9A96E' : '#D4C5A9',
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 border flex items-center justify-center transition-all duration-300 hover:bg-neutral-900 hover:border-neutral-900 hover:text-white"
          style={{ borderColor: '#D4C5A9', color: '#1A1A1A' }}
          aria-label="Next testimonial"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
