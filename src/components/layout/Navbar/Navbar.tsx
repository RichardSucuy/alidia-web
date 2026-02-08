'use client';

import { object } from 'framer-motion/client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type NavItem = {
  href: string;
  label: string;

};

const navItems: NavItem[] = [
  { href: '#que-es-alidia', label: 'Que es ALIDIA?' },
  { href: '#quienes-somos', label: 'Quienes somos?' },
  { href: '#mision-vision', label: 'Mision y Vision' },
  { href: '#objetivos', label: 'Objetivos' },
  { href: '#lineas-accion', label: 'Lineas de accion' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#equipo', label: 'Equipo' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] border-b border-[#e5e7eb] shadow-[0_4px_20px_rgba(12,60,92,0.06)] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 shadow-[0_4px_30px_rgba(12,60,92,0.1)] backdrop-blur-[12px]'
            : 'bg-white'
        }`}
      >
        <div className="mx-auto flex min-h-[74px] w-full max-w-[1200px] items-center justify-between gap-4 px-5">
          <Link href="#inicio" className="inline-flex items-center" aria-label="Inicio ALIDIA" onClick={closeMenu}>
            <img src="/logo/alidia-horizontal.png" alt="ALIDIA" className="block h-10 w-auto" />
          </Link>

          <nav className="hidden items-center gap-5 min-[980px]:inline-flex" aria-label="Navegacion principal">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.95rem] font-medium leading-[1.2] text-[#1f2937] no-underline transition-colors duration-200 hover:text-[#0c3c5c]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className={`inline-flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1 rounded-[10px] border border-[#e5e7eb] transition-colors duration-200 min-[980px]:hidden ${
              isScrolled ? 'bg-white/70' : 'bg-white'
            }`}
            aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={toggleMenu}
          >
            <span
              className={`block h-0.5 w-[18px] bg-[#0c3c5c] transition-all duration-200 ${
                isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-[18px] bg-[#0c3c5c] transition-all duration-200 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-[18px] bg-[#0c3c5c] transition-all duration-200 ${
                isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`overflow-hidden border-t border-transparent transition-all duration-300 min-[980px]:hidden ${
            isMenuOpen ? 'max-h-[420px] border-[#e5e7eb]' : 'max-h-0'
          }`}
        >
          <nav className="mx-auto flex w-full max-w-[1200px] flex-col px-5 pb-4 pt-3" aria-label="Navegacion movil">
            {navItems.map((item) => (
              <a
                key={`mobile-${item.href}`}
                href={item.href}
                className="border-b border-[#f3f4f6] py-[0.7rem] text-[0.95rem] font-medium text-[#1f2937] no-underline transition-colors duration-200 hover:text-[#0c3c5c] last:border-b-0"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="h-[74px]" />
    </>
  );
}