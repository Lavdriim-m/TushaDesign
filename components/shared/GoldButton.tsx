'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'gold' | 'outline-dark' | 'outline-light';
  showArrow?: boolean;
  className?: string;
};

export default function GoldButton({
  href,
  children,
  variant = 'gold',
  showArrow = true,
  className = '',
}: Props) {
  const base = `inline-flex items-center justify-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase font-body transition-all duration-300 group ${className}`;

  if (variant === 'gold') {
    return (
      <Link
        href={href}
        className={base}
        style={{ backgroundColor: '#C9A96E', color: 'white' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#b8924d'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E'; }}
      >
        {children}
        {showArrow && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />}
      </Link>
    );
  }

  if (variant === 'outline-light') {
    return (
      <Link
        href={href}
        className={base}
        style={{ border: '1px solid white', color: 'white' }}
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
        {children}
        {showArrow && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={base}
      style={{ border: '1px solid #1A1A1A', color: '#1A1A1A' }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor = '#1A1A1A';
        el.style.color = 'white';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor = 'transparent';
        el.style.color = '#1A1A1A';
      }}
    >
      {children}
      {showArrow && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />}
    </Link>
  );
}
