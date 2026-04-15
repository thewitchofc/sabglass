/**
 * מעקב אחר לחיצות וואטסאפ ל־GTM / GA4 (dataLayer + gtag אם קיים).
 * ב־GTM: טריגר מותאם על Custom Event בשם whatsapp_click, או על dataLayer key event === whatsapp_click
 */
export type WhatsAppClickLabel = 'article' | 'gallery' | 'hero'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

export function trackWhatsAppClick(label: WhatsAppClickLabel): void {
  if (typeof window === 'undefined') return

  const payload: Record<string, unknown> = {
    event: 'whatsapp_click',
    event_category: 'whatsapp',
    event_label: label,
    label,
    whatsapp_click_label: label,
  }

  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push(payload)

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'whatsapp',
      event_label: label,
    })
  }
}
