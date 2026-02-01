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
      className="group relative w-full flex items-center justify-between p-4 mb-4 bg-white border border-transparent rounded-2xl shadow-xl transition-all duration-300 hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] animate-fade-up"
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'both'
      }}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 group-hover:bg-[#008000] transition-all duration-300">
          <i className={`${link.icon} text-lg text-gray-500 group-hover:text-white transition-colors`}></i>
        </div>
        <span className="text-gray-700 font-bold text-lg transition-colors">
          {link.title}
        </span>
      </div>
      <i className="fa-solid fa-chevron-right text-gray-300 group-hover:text-gray-500 transition-all transform group-hover:translate-x-1"></i>
    </a>
  );
};

export default LinkButton;