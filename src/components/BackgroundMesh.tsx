import { motion, useReducedMotion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export function BackgroundMesh() {
  const { theme } = useTheme();
  const prefersReduced = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Fixed natural tones radial multi-point background */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          theme === 'dark' ? 'opacity-35' : 'opacity-85'
        }`}
        style={{
          backgroundImage:
            theme === 'dark'
              ? 'radial-gradient(at 0% 0%, rgba(49, 46, 129, 0.45) 0px, transparent 55%), radial-gradient(at 100% 0%, rgba(120, 53, 15, 0.3) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(6, 78, 59, 0.35) 0px, transparent 55%), radial-gradient(at 0% 100%, rgba(30, 41, 59, 0.4) 0px, transparent 50%)'
              : 'radial-gradient(at 0% 0%, #e0e7ff 0px, transparent 55%), radial-gradient(at 100% 0%, #fef3c7 0px, transparent 50%), radial-gradient(at 100% 100%, #d1fae5 0px, transparent 55%), radial-gradient(at 0% 100%, #f1f5f9 0px, transparent 50%)',
        }}
      />

      {/* Floating kinetic tone spheres for depth */}
      <motion.div
        animate={
          prefersReduced
            ? undefined
            : {
                x: [0, 35, -25, 0],
                y: [0, -25, 30, 0],
                scale: [1, 1.06, 0.96, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] transition-colors duration-700 ${
          theme === 'dark'
            ? 'bg-indigo-950/40 opacity-50'
            : 'bg-indigo-200/50 opacity-70'
        }`}
      />

      <motion.div
        animate={
          prefersReduced
            ? undefined
            : {
                x: [0, -40, 25, 0],
                y: [0, 35, -25, 0],
                scale: [1, 0.95, 1.05, 1],
              }
        }
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute -top-[5%] -right-[10%] w-[45vw] h-[45vw] rounded-full blur-[110px] transition-colors duration-700 ${
          theme === 'dark'
            ? 'bg-amber-950/30 opacity-40'
            : 'bg-amber-100/60 opacity-75'
        }`}
      />

      <motion.div
        animate={
          prefersReduced
            ? undefined
            : {
                x: [0, 30, -35, 0],
                y: [0, -35, 20, 0],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute -bottom-[10%] right-[10%] w-[55vw] h-[55vw] rounded-full blur-[120px] transition-colors duration-700 ${
          theme === 'dark'
            ? 'bg-emerald-950/30 opacity-40'
            : 'bg-emerald-100/60 opacity-65'
        }`}
      />

      {/* Subtle fine glass refraction texture */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          theme === 'dark'
            ? 'opacity-[0.025] [background-image:radial-gradient(#ffffff_1px,transparent_1px)]'
            : 'opacity-[0.035] [background-image:radial-gradient(#0f172a_1px,transparent_1px)]'
        } [background-size:24px_24px]`}
      />
    </div>
  );
}
