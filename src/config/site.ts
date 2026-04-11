/** החלף במספר וואטסאפ בפורמט בינלאומי ללא + (למשל 972501234567) */
export const WHATSAPP_PHONE = '972535306456'

/** לתצוגה בפוטר בלבד */
export const WHATSAPP_DISPLAY = '053-530-6456'

/** הודעה ראשונית אופציונלית בצ'אט */
export const WHATSAPP_DEFAULT_MESSAGE =
  'היי, אשמח לשמוע על זכוכית למקלחון / מראה, מצרף פרטים מהמרחב.'

export const WHATSAPP_CONSULT_MESSAGE =
  'היי, אשמח לייעוץ ראשוני לזכוכית למקלחון / מראה בהתאמה אישית.'

/** פתיחה לשליחת תמונה להצעת מחיר */
export const WHATSAPP_PHOTO_MESSAGE =
  'שלום בן, אני מעוניין/ת במקלחון בהתאמה אישית. מצרף/ת תמונה של החדר.'

/** CTA אמצע דף */
export const WHATSAPP_MID_CTA_MESSAGE =
  'שלום, ראיתי את האתר ואשמח לשמוע פרטים נוספים.'

/** הודעה קצרה ללחיצה מהירה */
export const WHATSAPP_QUICK_HELLO = 'שלום, אשמח לקבל ייעוץ לגבי מקלחון.'

/**
 * סרטון פרומו (MP4). ריק = לא מוצג בלוק וידאו.
 * להפעלה: export const PROMO_VIDEO_SRC = '/videos/promo.mp4'
 * בנגישות: על אלמנט <video> יש לקבוע aria-label (או title), למשל מ־premiumCopy.a11y.promoVideoLabel,
 * להוסיף controls, ולוודא טקסט חלופי אם אין אודיו הכרחי (או תיאור ליד).
 */
export const PROMO_VIDEO_SRC = ''

/** תמונת בן לסקשן «מי עומד מאחורי», קובץ ב־public/ben.png */
export const BEN_PORTRAIT_SRC = '/ben.png'

/** לוגו קרדיט פיתוח בפוטר (ללא קישור), קובץ ב־public/ */
export const DEVELOPER_BRAND_LOGO_SRC = '/developer-brand.png'

/**
 * בדיקות המרה, החלפת טקסט CTA ראשי בכל האתר.
 * 'precise' = שלחו תמונה וקבלו הצעה מדויקת | 'now' = שלחו תמונה עכשיו
 */
export type PrimaryCtaVariant = 'precise' | 'now'
export const PRIMARY_CTA_VARIANT: PrimaryCtaVariant = 'precise'

export const PRIMARY_CTA_LABELS: Record<PrimaryCtaVariant, string> = {
  precise: 'שלחו תמונה וקבלו הצעה מדויקת',
  now: 'שלחו תמונה עכשיו',
}

/** כיתוב אחיד לכפתורי וואטסאפ מרכזיים (מאמרים, בלוקים, מובייל) */
export const SITE_WIDE_CTA_BUTTON_LABEL = PRIMARY_CTA_LABELS[PRIMARY_CTA_VARIANT]

export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_PHONE}`
  const text = message === undefined ? WHATSAPP_DEFAULT_MESSAGE : message
  if (!text.trim()) return base
  return `${base}?text=${encodeURIComponent(text)}`
}
