import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  Download,
  Instagram,
  Linkedin,
  Dribbble,
  Github,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Subtle parallax and fade out as user scrolls past hero
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, prefersReduced ? 1 : 0.1]);

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
  ];

  const handleDownloadCV = () => {
    // Generates a mock resume download alert/file trigger
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'Elena_Vance_Resume.pdf');
    // Direct notification without window.alert
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 md:px-8 lg:px-12"
    >
      <motion.div
        style={{
          y: yOffset,
          opacity: opacity,
        }}
        className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
      >
        {/* Left Column: Intro, Titles, Socials, CTAs, Stats */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">
          {/* Greeting eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center gap-2 mb-2 text-slate-600 dark:text-slate-400 font-medium text-base sm:text-lg tracking-normal"
          >
            <span>Hi I am</span>
          </motion.div>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight mb-2"
          >
            Elena Vance
          </motion.h2>

          {/* Large Title */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400 leading-[1.06] mb-6"
          >
            UI/UX Designer
          </motion.h1>

          {/* Short Bio / Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mb-8 leading-relaxed font-normal"
          >
            Crafting high-fidelity design systems, intuitive digital products, and kinetic interaction architectures for modern engineering teams.
          </motion.p>

          {/* Social Links Row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-8"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass-pill flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/40 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </motion.div>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a
              id="hero-hire-me-btn"
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-indigo-600 text-white dark:bg-indigo-500 dark:text-white text-sm font-semibold tracking-wide glow-accent hover:bg-indigo-700 dark:hover:bg-indigo-600 active:scale-[0.98] transition-all duration-200"
            >
              <span>Hire Me</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <a
              id="hero-download-cv-btn"
              href="#contact"
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full glass-pill text-sm font-semibold tracking-wide text-slate-800 dark:text-slate-200 hover:border-indigo-500/40 hover:bg-white/70 dark:hover:bg-slate-800/80 active:scale-[0.98] transition-all duration-200"
            >
              <Download size={15} className="text-indigo-600 dark:text-indigo-400" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Stats Bar Card (Left Bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.38, ease: 'easeOut' }}
            className="glass-card rounded-[22px] p-5 sm:p-6 max-w-lg border border-white/80 dark:border-white/10 shadow-sm"
          >
            <div className="grid grid-cols-3 gap-3 sm:gap-6 divide-x divide-slate-200/60 dark:divide-white/10">
              <div className="text-left pr-2">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400 font-mono tracking-tight">
                  8+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                  Experiences
                </div>
              </div>

              <div className="text-left pl-3 sm:pl-6 pr-2">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400 font-mono tracking-tight">
                  24+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                  Projects Done
                </div>
              </div>

              <div className="text-left pl-3 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400 font-mono tracking-tight">
                  80+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                  Happy Clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Circular Backdrop with Elena Vance Portrait */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
            className="relative aspect-square w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] flex items-center justify-center p-2 sm:p-4"
          >
            {/* Background Circular Aura / Backdrop Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/25 via-amber-400/20 to-emerald-400/20 dark:from-indigo-600/30 dark:via-purple-900/30 dark:to-transparent blur-2xl" />

            {/* Solid / Frosted circular background disk from reference design */}
            <div className="absolute inset-2 sm:inset-3 rounded-full bg-slate-200/80 dark:bg-[#131720] border-2 border-white/80 dark:border-white/10 shadow-2xl backdrop-blur-md" />

            {/* Portrait Image Frame - perfectly circular and cleanly framed without cutoff */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/60 dark:border-white/10 shadow-2xl bg-slate-900/10 flex items-center justify-center">
              <motion.img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                alt="Elena Vance - UI/UX Designer"
                loading="eager"
                referrerPolicy="no-referrer"
                animate={
                  prefersReduced
                    ? undefined
                    : {
                        y: [0, -4, 0],
                      }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-full h-full object-cover object-[center_18%] scale-110 select-none pointer-events-none"
              />
              {/* Subtle bottom depth vignette for seamless circular framing */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

