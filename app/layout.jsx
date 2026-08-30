import './globals.css';
import './transition.css';
import './story.css';

export const metadata={
  metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:4173'),
  title:'Итальянский с Зауром | Zaurino Accademia',
  description:'Итальянский как часть жизни. Авторский Metodo del Diplomatico, живая практика и индивидуальный маршрут с Зауром.',
  openGraph:{title:'Zaurino Accademia — Italiano come vita',description:'Не просто учить итальянский. Начать понимать Италию.',images:['/illustrations/italian-street.webp'],locale:'ru_RU',type:'website'}
};

export default function RootLayout({children}){return <html lang="ru"><body>{children}</body></html>}
