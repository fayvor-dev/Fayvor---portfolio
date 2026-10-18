import { Hanken_Grotesk, Instrument_Serif } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { site } from '@/lib/data';

const grotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
});

const display = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
});

const description =
  'Aghimien Favour is a web designer and developer in Benin City, Nigeria, designing and building websites, brand identities and interactive digital experiences. Open to remote projects.';

export const metadata = {
  title: {
    default: `${site.name} — Web Designer & Developer`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: ['web designer', 'web developer', 'Next.js', 'brand identity', 'portfolio', 'Benin City', 'Nigeria'],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — Web Designer & Developer`,
    description,
    type: 'website',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary',
    title: `${site.name} — Web Designer & Developer`,
    description,
  },
};

export const viewport = {
  themeColor: '#F5F1E8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${display.variable}`}>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
