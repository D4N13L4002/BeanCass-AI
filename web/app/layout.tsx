import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BeanCass AI — Clasificación foliar',
  description: 'Clasificación orientativa de enfermedades foliares de fréjol y yuca con modelos de visión entrenados (UNEMI).',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f8f4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
