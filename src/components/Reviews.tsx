import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { reviewsData } from '../data';

export function Reviews() {
  return (
    <section id="reviews" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-16 text-center max-w-xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600/90 dark:text-indigo-400 mb-3">
          Client Feedback
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Direct feedback from product teams.
        </h2>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {reviewsData.map((review, index) => (
          <motion.div
            key={review.id}
            id={`review-card-${review.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-[22px] p-7 md:p-8 flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 group"
          >
            <div>
              {/* Highlight Tag & Quote Icon */}
              <div className="flex items-center justify-between gap-2 mb-5">
                {review.highlight ? (
                  <span className="text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
                    {review.highlight}
                  </span>
                ) : (
                  <span />
                )}
                <Quote size={16} className="text-slate-400 dark:text-slate-500 opacity-60 group-hover:text-indigo-500 group-hover:opacity-100 transition-all duration-200" />
              </div>

              {/* Quote text */}
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal mb-6">
                "{review.quote}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-5 border-t border-slate-200/60 dark:border-white/10 flex items-center gap-3.5">
              <img
                src={review.avatar}
                alt={review.author}
                className="w-10 h-10 rounded-full object-cover border border-white/60 dark:border-white/15 shrink-0 shadow-sm"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="min-w-0">
                <div className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                  {review.author}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  {review.role} · <span className="text-slate-700 dark:text-slate-300">{review.company}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
