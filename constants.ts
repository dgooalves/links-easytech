import { LinkItem, ProfileData } from './types';

export const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5597996121918&text=Olá+%2AEasytech+Telecom%2A%21+Gostaria+de+saber+sobre+os+planos+de+Internet.&type=phone_number&app_absent=0";

export const PROFILE_DATA: ProfileData & { facebook?: string; website?: string } = {
  name: "EASYTECH TELECOM",
  bio: "conexão que transforma",
  instagram: "easytechtelecom",
  facebook: "easytechtelecom",
  website: "https://www.easytecham.com.br",
  // Updated avatar URL with the new image provided by the user
  avatarUrl: "https://i.ibb.co/m52hBrW4/Instagram-post-34.png" 
};

export const LINKS: LinkItem[] = [
  {
    id: "1",
    title: "Falar no WhatsApp",
    url: WHATSAPP_URL,
    icon: "fa-brands fa-whatsapp"
  },
  {
    id: "2",
    title: "Nosso Site",
    url: "https://www.easytecham.com.br",
    icon: "fa-solid fa-globe"
  },
  {
    id: "3",
    title: "Central do Cliente",
    url: "https://sac.easytecham.com.br/central_assinante_web/login",
    icon: "fa-solid fa-headset"
  },
  {
    id: "4",
    title: "Teste de Velocidade",
    url: "https://www.speedtest.net/pt",
    icon: "fa-solid fa-gauge-high"
  }
];