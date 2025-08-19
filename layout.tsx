import './globals.css'
import React from 'react'

export const metadata = {
  title: 'HR Microsites',
  description: 'Executive / IT / Marketing / Sales recruitment microsites',
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID
const YM_ID = process.env.NEXT_PUBLIC_YM_ID
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        {/* Google Tag Manager */}
        {GTM_ID && (
          <script dangerouslySetInnerHTML={{__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode!.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}}/>
        )}
        {/* GA4 (optional if using GTM) */}
        {GA4_ID && (
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}></script>
        )}
        {GA4_ID && (
          <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${GA4_ID}');`}}/>
        )}
        {/* Yandex Metrica */}
        {YM_ID && (
          <script dangerouslySetInnerHTML={{__html:`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
ym(${YM_ID}, 'init', {clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true});`}}/>
        )}
        {/* Clarity */}
        {CLARITY_ID && (
          <script dangerouslySetInnerHTML={{__html:`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})
(window, document, "clarity", "script", "${CLARITY_ID}");`}}/>
        )}
      </head>
      <body>
        {GTM_ID && (
          <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        )}
        <div className="container py-6">
          <header className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <a href="/" className="text-white/90 font-semibold">HR Microsites</a>
            <nav className="flex gap-2">
              <a className="btn btn-ghost" href="/executive">Executive</a>
              <a className="btn btn-ghost" href="/it">IT</a>
              <a className="btn btn-ghost" href="/marketing">Marketing</a>
              <a className="btn btn-ghost" href="/sales">Sales</a>
            </nav>
          </header>
          {children}
          <footer className="mt-16 border-t border-white/10 pt-6 text-center">
            <div className="text-sm opacity-70">Наши HR — с ебейшей экспертизой. Конфиденциально. Быстро. Результативно.</div>
          </footer>
        </div>
      </body>
    </html>
  )
}
