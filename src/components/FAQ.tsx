import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="mb-14 text-center max-w-xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600/90 dark:text-indigo-400 mb-3">
          Clarity
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Frequently asked questions.
        </h2>
      </div>

      <div className="space-y-4">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              id={`faq-item-${item.id}`}
              className="glass-card rounded-[20px] overflow-hidden transition-colors duration-200"
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                className="w-full py-5 px-6 md:px-8 flex items-center justify-between text-left gap-4 hover:bg-white/20 dark:hover:bg-white/5 transition-colors duration-150"
              >
                <span className="text-base font-semibold text-slate-900 dark:text-white tracking-tight">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="text-slate-500 dark:text-slate-400 shrink-0"
                >
                  <ChevronDown size={18} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  >
                    <div className="px-6 md:px-8 pb-6 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal border-t border-slate-200/40 dark:border-white/5">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
