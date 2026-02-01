
import React, { useState, useEffect } from 'react';
import LinkButton from './components/LinkButton';
import TechPlexusBackground from './components/TechPlexusBackground';
import { LINKS, PROFILE_DATA, WHATSAPP_URL } from './constants';

const App: React.FC = () => {
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    // Visit Counter logic
    const savedCount = localStorage.getItem('nova_visits');
    const currentCount = savedCount ? parseInt(savedCount, 10) : 0;
    const newCount = currentCount + 1;
    localStorage.setItem('nova_visits', newCount.toString());
    setVisitCount(newCount);
  }, []);

  const socialLinks = [
    { icon: 'fa-brands fa-instagram', url: "https://www.instagram.com/easytechtelecom?igsh=MXE1a3JocGx0c3k3MA%3D%3D" },
    { icon: 'fa-brands fa-facebook', url: "https://www.facebook.com/easytechtelecom?mibextid=ZbWKwL" },
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

      {/* Tech-inspired background animation */}
      <TechPlexusBackground />

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-lg px-6 py-16 flex flex-col items-center">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-10 animate-fade-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-white/30 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-32 h-32 rounded-full border-4 border-white bg-white overflow-hidden shadow-2xl flex items-center justify-center p-2">
              <img 
                src={PROFILE_DATA.avatarUrl} 
                alt={PROFILE_DATA.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://i.ibb.co/LzNfS8Z/easytech-logo.png";
                }}
              />
            </div>
          </div>
          
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white font-conthrax uppercase">
            {PROFILE_DATA.name}
          </h1>
          
          <p className="mt-4 text-white/90 leading-relaxed max-w-sm font-medium">
            {PROFILE_DATA.bio}
          </p>

          {/* Social Icons Row */}
          <div className="mt-8 flex gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-white border border-gray-100 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <i className={`${social.icon} text-xl text-gray-500 group-hover:text-[#008000] transition-colors`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full">
          {LINKS.map((link, index) => (
            <LinkButton 
              key={link.id} 
              link={link} 
              delay={200 + (index * 100)} 
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 flex flex-col items-center text-center opacity-60 animate-fade-up" style={{ animationDelay: '1000ms' }}>
          <p className="text-xs font-bold uppercase tracking-widest text-white/80">
            © 2026 EASYTECH TELECOM.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
