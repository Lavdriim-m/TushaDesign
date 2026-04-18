import Link from 'next/link';
import { Instagram, Linkedin, ArrowRight } from 'lucide-react';

const footerLinks = {
  Company: [
    { href: '/about', label: 'Our Story' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ],
  Services: [
    { href: '/services#design', label: 'Kitchen Design' },
    { href: '/services#manufacturing', label: 'Manufacturing' },
    { href: '/services#installation', label: 'Installation' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1A1A', color: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col leading-none mb-8">
              <span className="text-3xl font-display font-semibold tracking-tight text-white">Tusha</span>
              <span className="text-xs font-body font-light tracking-[0.25em] uppercase" style={{ color: '#C9A96E' }}>
                Design
              </span>
            </Link>
            <p className="font-body text-sm leading-relaxed text-neutral-400 max-w-xs mb-8">
              Luxury kitchen design, manufacturing, and installation. Crafted to perfection for those who demand the extraordinary.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-body transition-all duration-300 group"
              style={{ color: '#C9A96E' }}
            >
              Begin Your Project
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs tracking-[0.25em] uppercase font-body font-medium text-neutral-500 mb-6">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-body text-neutral-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-xs font-body text-neutral-600">
            &copy; {new Date().getFullYear()} TushaDesign. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              aria-label="Instagram"
              className="text-neutral-600 hover:text-white transition-colors duration-300"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-neutral-600 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
