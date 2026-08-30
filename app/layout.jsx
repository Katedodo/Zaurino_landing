import { Manrope, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import './transition.css';
import './story.css';

const sans=Manrope({subsets:['latin','cyrillic'],variable:'--font-sans',display:'swap'});
const serif=Cormorant_Garamond({subsets:['latin','cyrillic'],variable:'--font-serif',weight:['400','500','600'],style:['normal','italic'],display:'swap'});

export const metadata={
  metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:4173'),
  title:'Итальянский с Зауром | Zaurino Accademia',
  description:'Итальянский как часть жизни. Авторский Metodo del Diplomatico, живая практика и индивидуальный маршрут с Зауром.',
  openGraph:{title:'Zaurino Accademia — Italiano come vita',description:'Не просто учить итальянский. Начать понимать Италию.',images:['/illustrations/italian-street.webp'],locale:'ru_RU',type:'website'}
};

export default function RootLayout({children}){return <html lang="ru"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>}
