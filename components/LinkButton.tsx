import React from 'react';
import { LinkItem } from '../types';

interface LinkButtonProps {
  link: LinkItem;
  delay: number;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link, delay }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full flex items-center justify-between p-3.5 md:p-4 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:bg-gray-50 md:hover:scale-[1.02] active:scale-[0.98] animate-fade-up border border-white/50"
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'both'
      }}
    >
      <div className="flex items-center gap-4 overflow-hidden">
        {/* Uniform Icon Container */}
        <div className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-[#008000]/10 transition-all duration-300">
          <i className={`${link.icon} text-lg md:text-xl text-slate-500 group-hover:text-[#008000] transition-colors`}></i>
        </div>
        
        {/* Label - Improved weight and color */}
        <span className="text-slate-700 font-semibold text-base md:text-lg transition-colors truncate tracking-tight">
          {link.title}
        </span>
      </div>
      
      {/* Right Chevron */}
      <i className="fa-solid fa-chevron-right text-slate-300 text-sm group-hover:text-slate-500 transition-all transform group-hover:translate-x-1 flex-shrink-0 ml-2"></i>
    </a>
  );
};

export default LinkButton;