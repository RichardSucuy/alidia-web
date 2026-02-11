'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Info, Target, Rocket, Users, Briefcase, Send } from 'lucide-react';

type NavItem = {
  href: string;
  label: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { href: '#que-es-alidia', label: 'Nosotros', icon: Info },
  { href: '#quienes-somos', label: 'Identidad', icon: Users },
  { href: '#mision-vision', label: 'Estrategia', icon: Target },
  { href: '#lineas-accion', label: 'Acción', icon: Rocket },
  { href: '#proyectos', label: 'Proyectos', icon: Briefcase },
  { href: '#equipo', label: 'Equipo', icon: Users },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-60 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-xl shadow-sm py-3' 
            : 'bg-white py-5'
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
          
          {/* Logo con efecto hover */}
          <Link 
            href="#inicio" 
            className="group flex items-center gap-2 transition-transform active:scale-95"
          >
            <div className="relative h-10 w-auto overflow-hidden">
              <img 
                src="/logo/alidia-horizontal.png" 
                alt="ALIDIA" 
                className="h-full w-auto object-contain transition-filter duration-300 group-hover:brightness-110" 
              />
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative flex items-center gap-2 px-4 py-2 text-sm font-bold tracking-tight text-gray-600 transition-colors hover:text-[#0c3c5c]"
              >
                <item.icon className="h-4 w-4 opacity-0 transition-all -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-blue-500" />
                <span>{item.label}</span>
                {/* Indicador de hover inferior */}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-blue-500 transition-all group-hover:w-full" />
              </a>
            ))}
            


            {/* Botón de Acción Principal (Opcional) */}
            {/* <Link 
              href="#contacto" 
              className="ml-4 flex items-center gap-2 rounded-full bg-[#0c3c5c] px-5 py-2.5 text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-900/20 active:scale-95"
            >
              <Cpu className="h-4 w-4" />
              Conectar
            </Link> */}

            <Link 
              href="mailto:contacto@alidia.org" // Cambia el href para que abra Gmail directamente
              className="ml-4 flex items-center gap-2 rounded-full bg-[#0c3c5c] px-5 py-2.5 text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-blue-600"
            >
              <Send className="h-4 w-4" /> {/* <--- AQUÍ CAMBIAS EL ICONO */}
              Conectar
            </Link>


          </nav>
          

          {/* Botón Menú Móvil */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 border border-gray-100 text-[#0c3c5c] lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menú Móvil con Animación */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute inset-x-0 top-full overflow-hidden bg-white border-b border-gray-100 shadow-xl lg:hidden"
            >
              <nav className="flex flex-col p-6 gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl bg-gray-50 px-5 py-4 text-lg font-bold text-gray-800 active:bg-blue-50"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-blue-500" />
                      {item.label}
                    </div>
                    <span className="h-2 w-2 rounded-full bg-blue-200" />
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer para evitar saltos de contenido */}
      <div className={isScrolled ? "h-[64px]" : "h-[80px] transition-all duration-500"} />
    </>
  );
}