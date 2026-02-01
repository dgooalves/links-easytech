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
      className="group relative w-full flex items-center justify-between p-3.5 md:p-4 mb-3 bg-white border border-transparent rounded-2xl shadow-lg transition-all duration-300 hover:bg-gray-50 md:hover:scale-[1.02] active:scale-[0.97] animate-fade-up"
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'both'
      }}
    >
      <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
        <div className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-xl bg-gray-100 group-hover:bg-[#008000] transition-all duration-300">
          <i className={`${link.icon} text-lg md:text-xl text-gray-500 group-hover:text-white transition-colors`}></i>
        </div>
        <span className="text-gray-700 font-bold text-base md:text-lg transition-colors truncate">
          {link.title}
        </span>
      </div>
      <i className="fa-solid fa-chevron-right text-gray-300 group-hover:text-gray-500 transition-all transform group-hover:translate-x-1 flex-shrink-0 ml-2"></i>
    </a>
  );
};

export default LinkButton;