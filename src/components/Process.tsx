import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { processSteps } from '../data';

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'center center'],
  });

  // Progress line fill tied strictly to scroll position
  const lineScaleX = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [1, 1] : [0, 1]
  );

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-24 px-4 md:px-8 max-w-6xl mx-auto"
    >
      <div className="mb-16 text-center max-w-xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600/90 dark:text-indigo-400 mb-3">
          Methodology
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          A structured approach from concept to code.
        </h2>
      </div>

      <div className="relative">
        {/* Connecting line behind chips - desktop only */}
        <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-slate-200/60 dark:bg-white/10 z-0">
          <motion.div
            style={{
              scaleX: lineScaleX,
              transformOrigin: 'left',
            }}
            className="h-full bg-gradient-to-r from-indigo-500 via-amber-400 to-emerald-400 dark:from-indigo-400 dark:via-amber-400 dark:to-emerald-400"
          />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              id={`process-step-${index + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-[22px] p-6 flex flex-col justify-between hover:border-indigo-500/30 transition-colors duration-200"
            >
              <div>
                {/* Step Chip with Number */}
                <div className="w-12 h-12 rounded-xl glass-pill flex items-center justify-center font-mono text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-6 border border-white/80 dark:border-white/20 shadow-sm">
                  {step.number}
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-white/5 text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                Phase 0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
