import { Github, Twitter, Linkedin, Dribbble } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/50 dark:border-white/5 py-12 px-4 md:px-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
          <span className="font-semibold text-slate-800 dark:text-slate-200">ELENA VANCE</span>
          <span>© {currentYear}. All rights reserved.</span>
        </div>

        {/* Minimal Nav Links */}
        <div className="flex items-center gap-6">
          <a href="#services" className="hover:text-slate-900 dark:hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-slate-900 dark:hover:text-white transition-colors">Process</a>
          <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</a>
          <a href="#reviews" className="hover:text-slate-900 dark:hover:text-white transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            <Github size={15} />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            <Twitter size={15} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            <Linkedin size={15} />
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            <Dribbble size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
