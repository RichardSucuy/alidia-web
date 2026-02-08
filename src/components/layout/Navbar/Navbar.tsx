'use client';

import Link from 'next/link';
import { useState } from 'react';

import styles from './Navbar.module.css';

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: '#que-es-alidia', label: '¿Qué es ALIDIA?' },
  { href: '#quienes-somos', label: '¿Quiénes somos?' },
  { href: '#mision-vision', label: 'Misión y Visión' },
  { href: '#lineas-accion', label: 'Líneas de acción' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#equipo', label: 'Equipo' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Inicio ALIDIA" onClick={closeMenu}>
          <img src="/logo/alidia-horizontal.png" alt="ALIDIA" className={styles.logo} />
        </Link>

        <nav className={styles.desktopNav} aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ''}`}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-nav" className={`${styles.mobilePanel} ${isMenuOpen ? styles.mobilePanelOpen : ''}`}>
        <nav className={styles.mobileNav} aria-label="Navegación móvil">
          {navItems.map((item) => (
            <a key={`mobile-${item.href}`} href={item.href} className={styles.mobileLink} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
