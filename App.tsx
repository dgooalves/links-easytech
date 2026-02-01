import React, { useState, useEffect } from 'react';
import LinkButton from './components/LinkButton';
import TechPlexusBackground from './components/TechPlexusBackground';
import { LINKS, PROFILE_DATA, WHATSAPP_URL } from './constants';

const App: React.FC = () => {
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    const savedCount = localStorage.getItem('nova_visits');
    const currentCount = savedCount ? parseInt(savedCount, 10) : 0;
    const newCount = currentCount + 1;
    localStorage.setItem('nova_visits', newCount.toString());
    setVisitCount(newCount);
  }, []);

  const socialLinks = [
    { icon: 'fa-brands fa-instagram', url: "https://www.instagram.com/easytechtelecom" },
    { icon: 'fa-brands fa-facebook', url: "https://www.facebook.com/easytechtelecom" },
    { icon: 'fa-brands fa-whatsapp', url: WHATSAPP_URL },
    { icon: 'fa-solid fa-globe', url: PROFILE_DATA.website || '#' }
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-[#008000] text-gray-700 selection:bg-black/10 overflow-x-hidden">
      <style>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.6s ease-out;
        }
      `}</style>

      <TechPlexusBackground />

      <main className="relative z-10 w-full max-w-[480px] px-5 py-10 md:py-16 flex flex-col items-center">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-10 animate-fade-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-white/30 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white bg-white overflow-hidden shadow-2xl flex items-center justify-center p-1.5">
              <img 
                src={PROFILE_DATA.avatarUrl} 
                alt={PROFILE_DATA.name}
                className="w-full h-full object-contain"
                loading="eager"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://i.ibb.co/LzNfS8Z/easytech-logo.png";
                }}
              />
            </div>
          </div>
          
          <h1 className="mt-5 text-2xl md:text-3xl font-bold tracking-tight text-white font-conthrax uppercase px-2">
            {PROFILE_DATA.name}
          </h1>
          
          <p className="mt-3 text-white/90 text-sm md:text-base leading-relaxed max-w-[280px] md:max-w-sm font-medium">
            {PROFILE_DATA.bio}
          </p>

          {/* Social Icons Row */}
          <div className="mt-6 md:mt-8 flex gap-3 md:gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-11 h-11 md:w-12 md:h-12 bg-white border border-gray-100 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-90"
                aria-label={`Link para ${social.icon}`}
              >
                <i className={`${social.icon} text-lg md:text-xl text-gray-500 group-hover:text-[#008000] transition-colors`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full space-y-1">
          {LINKS.map((link, index) => (
            <LinkButton 
              key={link.id} 
              link={link} 
              delay={150 + (index * 80)} 
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-10 md:mt-12 flex flex-col items-center text-center opacity-70 animate-fade-up" style={{ animationDelay: '800ms' }}>
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            © 2026 EASYTECH TELECOM
          </p>
          <div className="mt-2 text-[9px] text-white/50 uppercase tracking-widest">
            Acesso {visitCount}
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;