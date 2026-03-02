import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Soft3ch | Desarrollo de Software a Medida',
  description: 'Empresa de desarrollo de software especializada en aplicaciones web y móviles personalizadas para impulsar tu negocio.',
  keywords: ['desarrollo de software', 'aplicaciones web', 'apps móviles', 'consultoría IT', 'transformación digital', 'soft3ch'],
  openGraph: {
    title: 'Soft3ch | Transformamos tus ideas en software',
    description: 'Desarrollamos soluciones tecnológicas a medida para empresas y startups.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://soft3ch.com',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <style>
          {
            `html {
              font-family: ${GeistSans.style.fontFamily};
              --font-sans: ${GeistSans.variable};
              --font-mono: ${GeistMono.variable};
            }`
          }
        </style>
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  )
}
