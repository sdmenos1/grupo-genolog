import type { Metadata } from 'next';
import { Montserrat, Plus_Jakarta_Sans } from 'next/font/google';
import PageTransition from '@/components/PageTransition';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GRUPO GENOLG | Ingeniería Minera, Paradas de Planta y Montaje Metalmecánico',
  description: 'GRUPO GENOLG MINERÍA & CONSTRUCCIÓN S.C.R.L. (RUC 20608261894). Contratista Minero Homologado Bureau Veritas () y Registro MINEM R.D. 0288-2021.',
  keywords: ['GRUPO GENOLG', 'RUC 20608261894', 'Mantenimiento minero Peru', 'Paradas de planta', 'Cambio de chaquetas molino SAG', 'Montaje metalmecanico Cerro de Pasco'],
  icons: {
    icon: '/icon.jpg',
    shortcut: '/icon.jpg',
    apple: '/icon.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <head>
        <link rel="icon" href="/icon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/icon.jpg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={`${montserrat.variable} ${plusJakartaSans.variable} font-sans bg-brand-deepObsidian text-slate-200 antialiased overflow-x-hidden`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
