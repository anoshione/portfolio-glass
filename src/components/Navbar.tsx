import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const prefersReduced = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();

  const [activeSection, setActiveSection] = useState<string>('');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Smooth kinetic morphing of navbar based on scroll progress
  const navPaddingY = useTransform(scrollY, [0, 160], [16, 8]);
  const navWidth = useTransform(scrollY, [0, 160], ['100%', '94%']);

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Scroll spy to detect current active section in viewport
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      const sectionElements = navLinks.map((link) => ({
        id: link.id,
        el: document.getElementById(link.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el) {
          const top = item.el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            return;
          }
        }
      }

      // If at top or hero
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 pointer-events-none">
      <motion.nav
        id="main-nav"
        style={{
          paddingTop: prefersReduced ? 10 : navPaddingY,
          paddingBottom: prefersReduced ? 10 : navPaddingY,
          maxWidth: '1040px',
          width: prefersReduced ? '100%' : navWidth,
        }}
        className="relative pointer-events-auto w-full glass-pill rounded-full px-5 md:px-7 flex items-center justify-between shadow-sm transition-shadow duration-300 overflow-hidden"
      >
        {/* Kinetic Scroll Progress Line at the base of Navbar */}
        <motion.div
          style={{
            scaleX: prefersReduced ? 0 : scrollYProgress,
            transformOrigin: 'left',
          }}
          className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-indigo-500/0 via-indigo-500/80 to-purple-500/80 dark:from-indigo-400/0 dark:via-indigo-400 dark:to-purple-400 pointer-events-none"
        />

        {/* Brand identity */}
        <a
          id="nav-logo"
          href="#"
          className="flex items-center gap-2.5 text-sm font-bold tracking-tight text-slate-900 dark:text-white group relative z-10"
        >
          <motion.span
            animate={{
              scale: activeSection === '' ? [1, 1.25, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: activeSection === '' ? Infinity : 0,
              ease: 'easeInOut',
            }}
            className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400 glow-accent group-hover:scale-125 transition-transform duration-200"
          />
          <span className="tracking-tight">Elena Vance</span>
        </a>

        {/* Center navigation links with fluid sliding active indicator */}
        <div
          onMouseLeave={() => setHoveredLink(null)}
          className="hidden md:flex items-center gap-1 text-xs tracking-wider uppercase font-semibold text-slate-600 dark:text-slate-300 relative z-10"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const isHovered = hoveredLink === link.id;

            return (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.id)}
                className={`relative px-3.5 py-1.5 rounded-full transition-colors duration-200 ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-300 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {/* Active Section Sliding Capsule */}
                {isActive && (
                  <motion.div
                    layoutId={prefersReduced ? undefined : 'activeNavIndicator'}
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute inset-0 rounded-full bg-indigo-600/10 dark:bg-indigo-400/20 border border-indigo-500/25 shadow-sm pointer-events-none"
                  />
                )}

                {/* Hover Indicator (faint glass pill) */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId={prefersReduced ? undefined : 'hoverNavIndicator'}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 32,
                    }}
                    className="absolute inset-0 rounded-full bg-slate-200/50 dark:bg-white/10 pointer-events-none"
                  />
                )}

                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Action & Theme Switcher */}
        <div className="flex items-center gap-3 relative z-10">
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200/50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 hover:scale-105 active:scale-95 transition-transform duration-150 border border-white/40 dark:border-white/10"
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>

          <a
            id="nav-cta-btn"
            href="#contact"
            className="hidden sm:inline-flex text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full bg-indigo-600 text-white dark:bg-indigo-500 dark:text-white glow-accent hover:bg-indigo-700 active:scale-95 transition-all duration-200"
          >
            Inquire
          </a>
        </div>
      </motion.nav>
    </header>
  );
}
