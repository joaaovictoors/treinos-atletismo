import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: '200 Treinos de Atletismo | Biblioteca Visual de Treinos',
  description:
    '200 treinos prontos de atletismo para consultar e aplicar, do iniciante ao avançado, com adaptações por público e nível. Acesso imediato.',
  generator: 'v0.app',
  openGraph: {
    title: '200 Treinos de Atletismo | Biblioteca Visual de Treinos',
    description:
      '200 treinos prontos de atletismo para consultar e aplicar. Acesso imediato e garantia de 7 dias.',
    type: 'website',
    locale: 'pt_BR',
    siteName: '200 Treinos de Atletismo',
  },
  twitter: {
    card: 'summary_large_image',
    title: '200 Treinos de Atletismo',
    description:
      '200 treinos prontos de atletismo para consultar e aplicar. Acesso imediato e garantia de 7 dias.',
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${oswald.variable} bg-background`}
    >
      <head>
        {/* Rastreamento de UTMs */}
        <Script
          id="utmify-utms"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
        />

        {/* Configuração do pixel da UTMify */}
        <Script id="utmify-pixel-config" strategy="beforeInteractive">
          {`window.pixelId = "6a81310b156944913413552c";`}
        </Script>

        {/* Carregamento do pixel da UTMify */}
        <Script
          id="utmify-pixel"
          src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
          strategy="afterInteractive"
        />
      </head>

      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
