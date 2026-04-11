import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const DEFAULT_SITE_URL = 'https://sabglass.co.il'
const DEFAULT_BUSINESS_PHONE = '+972-53-530-6456'

/** כתובת placeholder ב־.env.example — לא נכנסת ל־JSON-LD */
const PLACEHOLDER_INSTAGRAM_SUBSTRING = 'yourpage'

function isRealInstagramUrl(url: string): boolean {
  const u = url.trim()
  if (!u) return false
  if (u.toLowerCase().includes(PLACEHOLDER_INSTAGRAM_SUBSTRING)) return false
  try {
    const host = new URL(u).hostname
    return host.includes('instagram.com')
  } catch {
    return false
  }
}

function gtmHeadSnippet(id: string): string {
  return `    <!-- Google Tag Manager -->
    <script>
      (function (w, d, s, l, i) {
        w[l] = w[l] || []
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : ''
        j.async = true
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
        f.parentNode.insertBefore(j, f)
      })(window, document, 'script', 'dataLayer', '${id}')
    </script>
    <!-- End Google Tag Manager -->`
}

/** GA4 — רק מזהה בפורמט G-XXXXXXXX (ללא placeholder בבילד) */
function isValidGa4MeasurementId(id: string): boolean {
  return /^G-[A-Z0-9]+$/i.test(id.trim())
}

function ga4HeadSnippet(id: string): string {
  const safe = id.trim()
  return `    <!-- Google Analytics (GA4) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${safe}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${safe}');
    </script>`
}

function gtmBodySnippet(id: string): string {
  return `    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=${id}"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
        title="Google Tag Manager"
      ></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->`
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '')
  const businessPhone = env.VITE_BUSINESS_PHONE || DEFAULT_BUSINESS_PHONE
  const instagramRaw = env.VITE_SOCIAL_INSTAGRAM?.trim() ?? ''
  const instagramForLd = isRealInstagramUrl(instagramRaw) ? instagramRaw : null

  const orgLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'SAB Glass',
    description:
      'מקלחוני זכוכית בהתאמה אישית עם גימור יוקרתי — שירות בכל אזור המרכז וגם בירושלים',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IL',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'אזור המרכז' },
      { '@type': 'City', name: 'ירושלים' },
      { '@type': 'Country', name: 'ישראל' },
    ],
    telephone: businessPhone,
    url: siteUrl,
    image: `${siteUrl}/og-image.jpg`,
  }
  if (instagramForLd) {
    orgLd.sameAs = [instagramForLd]
  }

  const jsonLd = JSON.stringify(orgLd)

  const gtmContainerId = env.VITE_GTM_CONTAINER_ID?.trim()
  const gtmHead = gtmContainerId ? gtmHeadSnippet(gtmContainerId) : ''
  const gtmBody = gtmContainerId ? gtmBodySnippet(gtmContainerId) : ''

  const gaRaw = env.VITE_GA_MEASUREMENT_ID?.trim() ?? ''
  const ga4Head = isValidGa4MeasurementId(gaRaw) ? ga4HeadSnippet(gaRaw) : ''

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'seo-index-html',
        transformIndexHtml(html) {
          return html
            .replaceAll('__SITE_URL__', siteUrl)
            .replace('__JSON_LD__', jsonLd)
            .replace('__GTM_HEAD__', gtmHead)
            .replace('__GTM_BODY__', gtmBody)
            .replace('__GA4_HEAD__', ga4Head)
        },
      },
    ],
  }
})
