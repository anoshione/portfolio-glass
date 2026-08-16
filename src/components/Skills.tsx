import { motion } from 'motion/react';
import { skillGroups } from '../data';

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-14 text-center max-w-xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600/90 dark:text-indigo-400 mb-3">
          Expertise
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Technical toolkit and competencies.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.category}
            id={`skill-group-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-[24px] p-6 md:p-8 flex flex-col"
          >
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-6 pb-3 border-b border-slate-200/50 dark:border-white/5 flex items-center justify-between">
              <span>{group.category}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/70 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 border border-white/60 dark:border-white/10 hover:border-indigo-500/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
