import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '../data';
import type { ProjectItem } from '../types';

interface ProjectCardProps {
  key?: string;
  project: ProjectItem;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Parallax on the image inside the card container
  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? ['0%', '0%'] : ['-8%', '8%']
  );

  return (
    <motion.div
      ref={cardRef}
      id={`project-card-${project.id}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="glass-card rounded-[24px] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_36px_rgba(79,70,229,0.18)] hover:border-indigo-500/30 group"
    >
      <div>
        {/* Parallax image frame */}
        <div
          ref={imageContainerRef}
          className="relative w-full h-64 sm:h-72 rounded-[18px] overflow-hidden mb-7 bg-slate-200/50 dark:bg-slate-800/50 border border-white/40 dark:border-white/10"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            style={{
              y: imgY,
              scale: 1.15,
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />

          <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-pill text-[11px] font-semibold tracking-wider text-slate-800 dark:text-slate-200 uppercase">
            {project.year}
          </div>
        </div>

        {/* Project details */}
        <div className="flex items-center justify-between gap-4 mb-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            {project.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            <span>Details</span>
            <ExternalLink size={13} />
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6">
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/50 dark:border-white/5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-medium bg-white/60 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-white/50 dark:border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-14 text-center max-w-xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600/90 dark:text-indigo-400 mb-3">
          Portfolio
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Selected software and interface projects.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
