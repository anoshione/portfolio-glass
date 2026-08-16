import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { pricingTiers } from '../data';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-16 text-center max-w-xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600/90 dark:text-indigo-400 mb-3">
          Engagement Models
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Transparent structures for scoped initiatives.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={tier.id}
            id={`pricing-tier-${tier.id}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`rounded-[24px] p-8 md:p-10 flex flex-col justify-between transition-all duration-300 ${
              tier.isHighlighted
                ? 'bg-white/65 dark:bg-slate-900/80 backdrop-blur-xl border-2 border-indigo-500/40 shadow-[0_0_32px_rgba(79,70,229,0.18)] dark:shadow-[0_0_40px_rgba(99,102,241,0.22)] -translate-y-1'
                : 'glass-card hover:border-slate-300 dark:hover:border-white/20'
            }`}
          >
            <div>
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white tracking-tight mb-2">
                  {tier.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-6 border-b border-slate-200/60 dark:border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-mono">
                    {tier.price}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    /{tier.period}
                  </span>
                </div>
              </div>

              {/* Features with checkmarks */}
              <ul className="space-y-3.5 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300">
                    <span className="w-4 h-4 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Single CTA per card with glow */}
            <a
              id={`pricing-cta-${tier.id}`}
              href="#contact"
              className={`w-full py-3.5 px-6 rounded-full text-xs uppercase tracking-wider font-semibold text-center transition-all duration-200 ${
                tier.isHighlighted
                  ? 'bg-indigo-600 text-white dark:bg-indigo-500 dark:text-white glow-accent hover:bg-indigo-700 active:scale-[0.98]'
                  : 'bg-white/40 hover:bg-white/60 dark:bg-white/10 dark:hover:bg-white/15 text-slate-900 dark:text-white border border-white/60 dark:border-white/10'
              }`}
            >
              {tier.ctaText}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
