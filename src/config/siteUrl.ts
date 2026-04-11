/** כתובת קנונית ל־og:image / twitter:image — תואם ל־index.html */
export const OG_IMAGE_ABSOLUTE_URL = 'https://sabglass.co.il/og-image.jpg'

/** כתובת בסיס לקנוניקל, OG ו־JSON-LD בצד הלקוח (מסונכן עם ברירת המחדל ב־vite.config) */
export function getSiteUrl(): string {
  const raw = (import.meta.env.VITE_SITE_URL as string | undefined)?.trim()
  return (raw || 'https://sabglass.co.il').replace(/\/$/, '')
}
