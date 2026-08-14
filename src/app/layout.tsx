import type { Metadata } from 'next';
import { Montserrat, Plus_Jakarta_Sans } from 'next/font/google';
import ClientLayout from '@/components/ClientLayout';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${montserrat.variable} ${plusJakartaSans.variable} font-sans bg-slate-50 text-slate-800 antialiased overflow-x-hidden`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
