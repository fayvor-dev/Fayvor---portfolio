import { Bricolage_Grotesque, Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { site } from '@/lib/data';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const grotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
});

const description =
  'Aghimien Favour is a web designer and developer in Benin City, Nigeria, building responsive, user-friendly websites that help businesses establish a stronger online presence. Open to remote projects.';

export const metadata = {
  title: {
    default: `${site.name} — Web Designer & Developer`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: ['web designer', 'web developer', 'Next.js', 'portfolio', 'website redesign', 'Benin City', 'Nigeria'],
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
  themeColor: '#0C0C0C',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${grotesk.variable}`}>
      <body className="min-h-screen bg-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-mist focus:px-4 focus:py-2 focus:text-ink"
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
