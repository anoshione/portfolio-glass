import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Github, Twitter, Linkedin, Dribbble } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-[28px] p-8 md:p-12 text-center"
      >
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600/90 dark:text-indigo-400 mb-3">
          Initiate Contact
        </span>

        {/* Closing headline (under 8 words) */}
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">
          Ready to build your next product interface?
        </h2>

        {/* Body text (2 short sentences max) */}
        <p className="text-base text-slate-600 dark:text-slate-300 max-w-lg mx-auto mb-10 font-normal leading-relaxed">
          Reach out directly to discuss upcoming milestones, timelines, and technical requirements.
        </p>

        {submitted ? (
          <div className="py-8 flex flex-col items-center justify-center gap-3 text-indigo-600 dark:text-indigo-400">
            <CheckCircle2 size={36} />
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Message received. We will respond within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 text-left mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Alex Rivers"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-black/30 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-black/30 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Project Scope & Details
              </label>
              <textarea
                id="contact-message"
                rows={3}
                required
                placeholder="Describe your timeline, stack, and deliverables..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-black/30 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </div>

            <button
              id="contact-submit-btn"
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-indigo-600 text-white dark:bg-indigo-500 dark:text-white text-xs font-semibold uppercase tracking-wider glow-accent hover:bg-indigo-700 active:scale-[0.99] flex items-center justify-center gap-2 transition-all duration-200"
            >
              <span>Transmit inquiry</span>
              <Send size={14} />
            </button>
          </form>
        )}

        {/* Social icons in small glass circles */}
        <div className="pt-8 border-t border-slate-200/50 dark:border-white/5 flex items-center justify-center gap-4">
          {[
            { id: 'github', icon: Github, href: 'https://github.com', label: 'GitHub' },
            { id: 'twitter', icon: Twitter, href: 'https://x.com', label: 'X' },
            { id: 'linkedin', icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { id: 'dribbble', icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
          ].map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.id}
                id={`social-link-${social.id}`}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                className="w-10 h-10 rounded-full glass-pill flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 active:scale-95 transition-all duration-150"
              >
                <Icon size={17} />
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
