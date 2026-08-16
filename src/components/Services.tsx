import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Layers, Sparkles, Cpu, Gauge } from 'lucide-react';
import { servicesData } from '../data';
import type { ServiceItem } from '../types';

const iconMap: Record<string, typeof Layers> = {
  'product-design': Layers,
  'interaction-dev': Sparkles,
  'design-systems': Cpu,
  'performance-audit': Gauge,
};

interface ServiceCardProps {
  key?: string;
  item: ServiceItem;
  index: number;
}

function ServiceCard({ item, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'center center'],
  });

  // Staggered scroll-driven scale and opacity based on index offset
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [1, 1] : [0.93 + index * 0.01, 1]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    prefersReduced ? [1, 1] : [0.35, 1]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [30, 0]
  );

  const IconComponent = iconMap[item.id] || Layers;

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        opacity,
        y,
      }}
      id={`service-card-${item.id}`}
      className="glass-card rounded-[24px] p-8 md:p-10 flex flex-col justify-between hover:border-indigo-500/30 transition-colors duration-300 group"
    >
      <div>
        <div className="w-12 h-12 rounded-2xl glass-pill flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8 group-hover:scale-105 transition-transform duration-200">
          <IconComponent size={22} />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white tracking-tight mb-3">
          {item.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-normal">
          {item.description}
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
        <span>Capability</span>
        <span className="font-mono text-indigo-600 dark:text-indigo-400">0{index + 1}</span>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-14 text-center max-w-xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600/90 dark:text-indigo-400 mb-3">
          Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Disciplines engineered for product precision.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} item={service} index={index} />
        ))}
      </div>
    </section>
  );
}
