import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_Symbols } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/lib/cart-context'
import { LikesProvider } from '@/lib/likes-context'

// Fuente de Google para los signos zodiacales (ver components/ZodiacIcon.tsx).
const zodiacFont = Noto_Sans_Symbols({ subsets: ['symbols'], weight: '400', variable: '--font-zodiac' })

export const metadata: Metadata = {
  title: 'Mi Cafecito — Marketplace de café de especialidad',
  description: 'Café de especialidad de distintos orígenes, recién tostado y listo para llegar a tu puerta. Encuentra tu próxima taza.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={zodiacFont.variable}>
      <body className="antialiased">
        <CartProvider><LikesProvider>{children}</LikesProvider></CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
