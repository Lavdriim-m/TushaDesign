'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const solid = scrolled || !isHome || menuOpen;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: solid ? 'rgba(250, 248, 245, 0.97)' : 'transparent',
          backdropFilter: solid ? 'blur(12px)' : 'none',
          borderBottom: solid ? '1px solid rgba(201, 169, 110, 0.15)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="text-2xl font-display font-semibold tracking-tight transition-colors duration-300"
              style={{ color: solid ? '#1A1A1A' : 'white' }}
            >
              Tusha
            </span>
            <span
              className="text-xs font-body font-light tracking-[0.25em] uppercase transition-colors duration-300"
              style={{ color: solid ? '#C9A96E' : 'rgba(201,169,110,0.9)' }}
            >
              Design
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm tracking-widest uppercase font-body font-light transition-colors duration-300 group"
                style={{ color: solid ? '#1A1A1A' : 'rgba(255,255,255,0.9)' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: '#C9A96E' }}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm tracking-widest uppercase font-body px-6 py-2.5 transition-all duration-300 border"
              style={
                solid
                  ? { borderColor: '#1A1A1A', color: '#1A1A1A' }
                  : { borderColor: 'white', color: 'white' }
              }
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = solid ? '#1A1A1A' : 'white';
                el.style.color = solid ? 'white' : '#1A1A1A';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = 'transparent';
                el.style.color = solid ? '#1A1A1A' : 'white';
              }}
            >
              Book Now
            </Link>
          </nav>

          <button
            className="md:hidden p-2 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={24} color="#1A1A1A" />
            ) : (
              <Menu size={24} color={solid ? '#1A1A1A' : 'white'} />
            )}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ backgroundColor: '#FAF8F5' }}
          >
            <div className="flex-1 flex flex-col justify-center px-10">
              <div className="mb-16">
                <span className="text-xs tracking-[0.3em] uppercase font-body" style={{ color: '#C9A96E' }}>
                  Navigation
                </span>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      className="text-5xl font-display font-light text-charcoal hover:text-gold transition-colors duration-300 block"
                      style={{ color: '#1A1A1A' }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                className="mt-16 pt-10 border-t"
                style={{ borderColor: 'rgba(201,169,110,0.2)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-sm font-body text-neutral-500 mb-3">Ready to start?</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 text-base font-body tracking-widest uppercase"
                  style={{ color: '#C9A96E' }}
                >
                  Book a Consultation
                  <span className="text-xs">→</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
