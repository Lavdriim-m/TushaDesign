'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(26,26,26,0.72) 0%, rgba(26,26,26,0.4) 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span
            className="inline-block text-xs tracking-[0.35em] uppercase font-body font-light mb-6"
            style={{ color: '#C9A96E' }}
          >
            Luxury Kitchen Atelier
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Luxury Kitchens,
          <br />
          <em>Designed to Perfection</em>
        </motion.h1>

        <motion.p
          className="font-body font-light text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Full-service bespoke kitchen design, artisanal manufacturing, and seamless installation —
          crafted for those who demand the extraordinary.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase font-body transition-all duration-300 group"
            style={{ backgroundColor: '#C9A96E', color: 'white' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#b8924d'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E'; }}
          >
            View Projects
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase font-body border border-white text-white transition-all duration-300"
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = 'white';
              el.style.color = '#1A1A1A';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = 'transparent';
              el.style.color = 'white';
            }}
          >
            Book Consultation
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase font-body">Scroll</span>
        <motion.div
          className="w-px h-12"
          style={{ backgroundColor: 'rgba(201,169,110,0.6)' }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
