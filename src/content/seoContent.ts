/** תוכן SEO: עמוד שירות + מאמרים (מבנה לעמודים סטטיים) */

import { SITE_WIDE_CTA_BUTTON_LABEL } from '../config/site'
import { SERVICE_AREA_COPY } from './serviceAreaCopy'

/** כיתוב CTA ייעודי למאמר ניקוי זכוכית */
const ARTICLE_NIKUI_CTA_LABEL = 'שלחו תמונה ונייעץ לכם גם על תחזוקה נכונה'

/** כיתוב CTA ייעודי למאמר תחזוקת מקלחון */
const ARTICLE_TACHZUKA_CTA_LABEL = 'שלחו תמונה ונכוון אתכם גם לתחזוקה נכונה'

/** CTA מוקדם אחרי פתיחה קצרה — המרות */
const ARTICLE_EARLY_CONVERSION_CTA_LABEL =
  'שלחו תמונה של חדר הרחצה ונכוון אתכם בדיוק למה שמתאים'

const ARTICLE_IMAGE_CAPTION_CONVERSION =
  'דוגמה למקלחון בהתאמה אישית עם גימור מדויק'

const ARTICLE_MID_HOOK_CONVERSION = 'לא חייבים לנחש — אפשר לדעת בדיוק מה מתאים לכם'

const ARTICLE_SOCIAL_PROOF_SHORT =
  'לקוחות רבים כבר שדרגו את חדר הרחצה שלהם עם SAB Glass'

const ARTICLE_TRUST_INSTALL_AREA = `${SERVICE_AREA_COPY.installWide}.`

/**
 * וריאציית meta title למאמר מחיר מקלחון (A/B בגוגל).
 * שנה ל־'b' לבדיקה: כותרת ותיאור עם דגש מהירות (תמונה) מול אמינות בשטח
 */
export type MiklahonPriceMetaTitleVariant = 'a' | 'b'
export const MIKLAHON_PRICE_META_TITLE_VARIANT: MiklahonPriceMetaTitleVariant = 'a'

const MIKLAHON_PRICE_META_TITLES: Record<MiklahonPriceMetaTitleVariant, string> = {
  a: 'כמה עולה מקלחון זכוכית? מחיר אמיתי | SAB Glass',
  b: 'כמה עולה מקלחון זכוכית? מחיר לפי תמונה | SAB Glass',
}

const MIKLAHON_PRICE_META_DESCRIPTIONS: Record<MiklahonPriceMetaTitleVariant, string> = {
  a:
    'בלי ניחושים: המחיר נקבע לפי מצב אמיתי בשטח — מידות, זכוכית ופרזול. במאמר — גורמים שקופים, טווחים להמחשה ואיך מגיעים להצעה מדויקת. שלחו תמונה וקבלו הצעה מדויקת.',
  b:
    'רוצים מחיר מהיר לפני שממשיכים? מתמונה טובה אפשר לקבל הערכה כמעט מיד. במאמר — מה לצלם, מה משנה בעלות ואיך ממשיכים למדידה. שלחו תמונה וקבלו הצעה מדויקת.',
}

export const serviceShowerPage = {
  path: '/shower-glass-custom' as const,
  metaTitle: 'מקלחון זכוכית בהתאמה אישית – מחיר ומדריך | SAB Glass',
  metaDescription:
    'מקלחוני זכוכית לפי מידה: חזית, פינה והזזה. התקנה במרכז וירושלים. שלחו תמונה וקבלו הצעה מדויקת.',
  h1: 'מקלחונים בהתאמה אישית מזכוכית',
  intro:
    'אם אתם מחפשים מקלחון איכותי בהתאמה אישית, חשוב לבחור פתרון שמתאים בדיוק למידות, לעיצוב ולשימוש היומיומי. מקלחון שמיוצר ומותקן נכון נשמר שנים, נשמר נקי ומרגיש חלק מהחלל, לא כמו תוספת זמנית. ' +
    SERVICE_AREA_COPY.installWide +
    '. ' +
    SERVICE_AREA_COPY.reachTrust +
    '.',
  ctaMid: SITE_WIDE_CTA_BUTTON_LABEL,
  sections: [
    {
      h2: 'סוגי מקלחונים: חזית, פינתיים והזזה',
      paragraphs: [
        'מקלחון חזיתי מתאים לרוב למקלחונים בנישה או בקו ישר, דלת כנף או הזזה לפי רוחב הפתח. פתרון פינתי מנצל זווית בחדר ומאפשר מקלח גדול גם כשהמרחב לא סימטרי. מערכות הזזה חוסכות מקום בפתיחה ומתאימות במיוחד למסדרונות צרים ליד המקלחון.',
        'הבחירה בין הסוגים תלויה בתכנון האריחים, במיקום אסלה וכיור ובאיך שאתם נכנסים ויוצאים מהמקלח. נשמח לעזור לכם לבחור לפי תמונה ומידות מהשטח.',
      ],
    },
    {
      h2: 'יתרונות זכוכית מחוסמת',
      paragraphs: [
        'זכוכית מחוסמת חזקה משמעותית מזכוכית רגילה, ואם היא נשברת, נשברת לרוב לשברים קטנים ולא חדים כמו זכוכית רגילה. היא מתאימה לחדר רחצה עם לחות, שינויי טמפרטורה וניקיון תכוף.',
        'אפשר לשלב גימור שקוף, חלבי או פסים לפרטיות, לפי סגנון החלל והאור בחדר.',
      ],
    },
    {
      h2: 'למה חשובה התקנה מקצועית',
      paragraphs: [
        'אטימה נכונה, כיוון הדלת והתאמת הפרזול מונעים נזילות, רעש ושחיקה מוקדמת. התקנה חובבנית עלולה להיראות «בסדר» ביום הראשון ולהובעיות אחרי חודשים. אנחנו מתקינים בשטח עם דיוק מילימטרי ומקפידים על ניקיון וסדר.',
      ],
    },
    {
      h2: 'התאמה לחללים קטנים וגדולים',
      paragraphs: [
        'בחדר קטן נשחקים פתרונות הזזה, דלתות חוצות פחות מרחב וזכוכית שמשקפת אור. בחדר גדול אפשר ללכת על פאנלים רחבים, פינה או חזית רחבה שמייצרת תחושת ספא ביתית.',
        'בכל מקרה המדידה והתכנון לפני ייצור חוסכים תסבוכת בעלות וביצוע.',
      ],
    },
  ],
  image: {
    src: '/gallery/2705.png',
    alt: 'מקלחון פינתי זכוכית שקופה מחוסמת עם פרזול שחור מט ושיש, עיצוב מודרני לחדר רחצה',
  },
} as const

export type ArticleSlug =
  | 'miklahon-mithapeach'
  | 'zchuchit-le-miklahon'
  | 'miklahon-lachadar-katan'
  | 'miklahon-price'
  | 'miklahon-hazit-vs-pinati'
  | 'nikui-zchuchit-miklahon'
  | 'miklahon-yokerati'
  | 'tachzuka-miklahon'
  | 'miklahon-lefi-mida-advanced'
  | 'parzol-le-miklahon'
  | 'miklahon-katan-amvaticon'
  | 'miklahon-lefi-mida-price'
  | 'amvaticon-price'
  | 'tikun-miklahon'

/** סדר ברירת מחדל ל«מאמרים קשורים» */
export const ARTICLE_RELATED_PRIORITY: ArticleSlug[] = [
  'miklahon-lefi-mida-price',
  'amvaticon-price',
  'miklahon-price',
  'tikun-miklahon',
  'miklahon-lefi-mida-advanced',
  'miklahon-katan-amvaticon',
  'parzol-le-miklahon',
  'miklahon-yokerati',
  'tachzuka-miklahon',
  'miklahon-hazit-vs-pinati',
  'nikui-zchuchit-miklahon',
  'miklahon-mithapeach',
  'zchuchit-le-miklahon',
  'miklahon-lachadar-katan',
]

export const ARTICLE_DEFAULT_END_CTA = {
  title: 'עדיין מתלבטים?',
  subtitle: 'שלחו תמונה ונגיד לכם בדיוק מה מתאים לכם',
} as const

export const ARTICLE_SEO = {
  authorName: 'בן',
  authorRole: 'מומחה למקלחונים וזכוכית בהתאמה אישית',
  authorBio: 'עם ניסיון בעבודה מדויקת והתקנה מקצועית.',
  orgName: 'SAB Glass',
} as const

/** עמוד עמודים (Pillar) — מרכז סמכות נושאית */
export const pillarMiklahonGuidePage = {
  path: '/miklahon-guide' as const,
  breadcrumbLabel: 'מדריך מקלחונים מלא',
  metaTitle: 'מדריך מקלחונים: כמה עולה ומה לבחור | SAB Glass',
  metaDescription:
    'סוגי מקלחונים, חלל וזכוכית — מה משפיע על המחיר. שלחו תמונה וקבלו הצעה מדויקת.',
  h1: 'המדריך המלא למקלחונים בהתאמה אישית',
  intro:
    'כאן תמצאו את המפתח לכל התכנים שיעזרו לכם לבחור מקלחון נכון: מסוגי המקלחון ועד מחיר, זכוכית וחדר קטן. בכל נושא יש קישור למאמר מפורט ולעמוד השירות לייעוץ והצעת מחיר.',
  sections: [
    {
      h2: 'סוגי מקלחונים',
      paragraphs: [
        'חזית, פינה והזזה — הבחירה תלויה בתכנון האריחים, רוחב הפתח וזרימת התנועה בחדר. חשוב להתאים פתרון לאורך שנים ולא רק לתמונה בקטלוג.',
      ],
      links: [
        { text: 'איך לבחור מקלחון לחדר הרחצה', href: '/articles/miklahon-mithapeach' },
        { text: 'מקלחון לפי מידה בהתאמה אישית — המדריך המלא', href: '/articles/miklahon-lefi-mida-advanced' },
        { text: 'פרזול למקלחונים — איך לבחור נכון', href: '/articles/parzol-le-miklahon' },
        { text: 'מקלחון חזית או פינתי — מה עדיף', href: '/articles/miklahon-hazit-vs-pinati' },
        { text: 'מקלחון יוקרתי בהתאמה אישית — מה זה אומר', href: '/articles/miklahon-yokerati' },
        { text: 'מקלחונים באזור המרכז וירושלים', href: '/miklahon-center-israel' },
        { text: 'מקלחונים בהתאמה אישית — עמוד השירות', href: '/shower-glass-custom' },
      ],
    },
    {
      h2: 'התאמה לפי חלל',
      paragraphs: [
        'חדר צר, פינה או קו ישר — לכל חלל יש פתיחה ופרופיל שמתאימים לו. תכנון נכון חוסך תסכול אחרי התקנה.',
      ],
      links: [
        { text: 'מקלחון לחדר רחצה קטן', href: '/articles/miklahon-lachadar-katan' },
        { text: 'מקלחון קטן או אמבטיון — איך לבחור', href: '/articles/miklahon-katan-amvaticon' },
        { text: 'כמה עולה אמבטיון — מחיר', href: '/articles/amvaticon-price' },
        { text: 'איך לבחור מקלחון (מדריך כללי)', href: '/articles/miklahon-mithapeach' },
      ],
    },
    {
      h2: 'מחיר',
      paragraphs: [
        'המחיר נקבע לפי מידות, עובי זכוכית, סוג פתיחה ומורכבות ההתקנה. עדיף להתחיל מתמונה ותיאור כדי לקבל הערכה ריאלית.',
      ],
      links: [
        { text: 'כמה עולה מקלחון זכוכית', href: '/articles/miklahon-price' },
        { text: 'כמה עולה מקלחון לפי מידה — מחיר והצעה', href: '/articles/miklahon-lefi-mida-price' },
        { text: 'כמה עולה אמבטיון — מחיר', href: '/articles/amvaticon-price' },
        { text: 'מקלחון לפי מידה — התאמה אישית (מדריך)', href: '/articles/miklahon-lefi-mida-advanced' },
      ],
    },
    {
      h2: 'סוגי זכוכית',
      paragraphs: [
        'זכוכית מחוסמת היא הסטנדרט במקלחון; העובי נבחר לפי גודל הדלת והפתרון. הבנה קצרה חוסכת טעויות יקרות.',
      ],
      links: [
        { text: 'איזה זכוכית מתאימה למקלחונים', href: '/articles/zchuchit-le-miklahon' },
        { text: 'איך מנקים זכוכית מקלחון', href: '/articles/nikui-zchuchit-miklahon' },
        { text: 'תחזוקת מקלחון לאורך זמן', href: '/articles/tachzuka-miklahon' },
        { text: 'תיקון מקלחון — מתי לתקן ומתי להחליף', href: '/articles/tikun-miklahon' },
      ],
    },
  ],
} as const

/** עמוד נחיתה — אזור המרכז וירושלים */
export const localLandingCenterIsraelPage = {
  path: '/miklahon-center-israel' as const,
  breadcrumbLabel: 'מקלחונים במרכז וירושלים',
  metaTitle: 'מקלחונים במרכז וירושלים – כמה עולה | SAB Glass',
  metaDescription:
    'מקלחוני זכוכית בהתאמה אישית: מדידה ועד התקנה. ' +
    SERVICE_AREA_COPY.reachTrust +
    '. שלחו תמונה וקבלו הצעה מדויקת.',
  h1: 'מקלחונים בהתאמה אישית באזור המרכז וירושלים',
  paragraphs: [
    SERVICE_AREA_COPY.installWide +
      '. ' +
      SERVICE_AREA_COPY.citiesExamples +
      ' — מהמדידה והתכנון ועד הגימור בשטח.',
    'אם אתם מתכננים שדרוג לחדר הרחצה, אפשר להתחיל מ־תמונה אחת ולקבל ייעוץ והצעת מחיר מותאמת למידות ולעיצוב שלכם.',
  ],
} as const

export type ArticleHubLink = { label: string; slug: ArticleSlug }

export type ArticleHubGroup = {
  id: string
  title: string
  links: ArticleHubLink[]
}

/** קיבוץ מאמרים לפי נושא — עמוד /articles */
export const articleHubGroups: ArticleHubGroup[] = [
  {
    id: 'choice',
    title: 'בחירת מקלחון',
    links: [
      { label: 'איך לבחור מקלחון', slug: 'miklahon-mithapeach' },
      { label: 'מקלחון יוקרתי', slug: 'miklahon-yokerati' },
      { label: 'חזית או פינתי', slug: 'miklahon-hazit-vs-pinati' },
      { label: 'מקלחון לפי מידה בהתאמה אישית', slug: 'miklahon-lefi-mida-advanced' },
    ],
  },
  {
    id: 'hardware',
    title: 'פרזול ואיכות',
    links: [{ label: 'פרזול למקלחונים', slug: 'parzol-le-miklahon' }],
  },
  {
    id: 'glass',
    title: 'זכוכית למקלחון',
    links: [{ label: 'איזה זכוכית למקלחון', slug: 'zchuchit-le-miklahon' }],
  },
  {
    id: 'price',
    title: 'מחיר ועלויות',
    links: [
      { label: 'כמה עולה מקלחון', slug: 'miklahon-price' },
      { label: 'מחיר מקלחון לפי מידה', slug: 'miklahon-lefi-mida-price' },
      { label: 'מחיר אמבטיון', slug: 'amvaticon-price' },
    ],
  },
  {
    id: 'space',
    title: 'פתרונות לפי חלל',
    links: [
      { label: 'מקלחון לחדר קטן', slug: 'miklahon-lachadar-katan' },
      { label: 'מקלחון קטן או אמבטיון', slug: 'miklahon-katan-amvaticon' },
    ],
  },
  {
    id: 'care',
    title: 'תחזוקה וניקיון',
    links: [
      { label: 'תחזוקת מקלחון', slug: 'tachzuka-miklahon' },
      { label: 'ניקוי זכוכית מקלחון', slug: 'nikui-zchuchit-miklahon' },
      { label: 'תיקון מקלחון', slug: 'tikun-miklahon' },
    ],
  },
]

/** נושאים לפיתוח תוכן עתידי (SEO) — ראו גם את כל המאמרים בעמוד /articles */
export const plannedArticleTopics: readonly { id: string; title: string }[] = []

/** פסקה עם קישורים פנימיים (קישור = טקסט + href) */
export type RichTextSegment = { text: string; href?: string }

/** קטע טקסט עם הדגשה (בולד) אופציונלית */
export type ArticleEmphasisSegment = { text: string; strong?: boolean }

/** טבלה בתוך סעיף מאמר (למשל טווח מחירים) */
export type ArticleSectionTable = {
  headers: [string, string]
  rows: { left: string; right: string }[]
  footnote?: string
  /** שורות אמון עם סימון ✓ מתחת לטבלה */
  trustNotes?: string[]
}

export type ArticleSection = {
  h2: string
  /** מזהה עוגן ל־TOC וקישורים פנימיים */
  id?: string
  paragraphs: string[]
  bullets?: string[]
  linkedParagraphs?: { segments: RichTextSegment[] }[]
  dataTable?: ArticleSectionTable
  /** ציטוט אמון מיד אחרי טבלה (אופציונלי) */
  tableQuote?: { quote: string; attribution: string }
}

export type ArticleTocItem = { label: string; id: string }

export type ArticleFaqItem = { question: string; answer: string }

export type ArticleContent = {
  slug: ArticleSlug
  path: string
  metaTitle: string
  metaDescription: string
  h1: string
  /** כותרת קצרה ל־breadcrumb ויזואלי ול־JSON-LD (אופציונלי) */
  breadcrumbLabel?: string
  /** תאריך עדכון אחרון לתצוגה ול־JSON-LD (ISO YYYY-MM-DD) */
  lastUpdated?: string
  /** חלופה לרשימת מאמרים קשורים (ברירת מחדל: ARTICLE_RELATED_PRIORITY) */
  relatedSlugs?: ArticleSlug[]
  intro: string
  /** תשובה קצרה ל־Featured Snippet — מוצגת מיד אחרי H1, בלי CTA */
  featuredSnippetAnswer?: string
  /** שורת זמן קריאה מתחת ל־H1 (אופציונלי) */
  readingTimeLabel?: string
  /** CTA מוקדם מיד אחרי פסקת ה־intro הראשונה */
  earlyCta?: { label: string; message: 'photo' | 'consult' }
  /** פסקאות המשך אחרי ה־CTA המוקדם ולפני introLinked */
  introAfterCta?: string[]
  /**
   * פסקאות עם בולד חלקי (מחליפות/משלימות introAfterCta לפי סדר: קודם rich, אחר כך string[])
   */
  introAfterCtaRich?: ArticleEmphasisSegment[][]
  /** שורת social proof אחרי בלוק הפתיחה */
  socialProofLine?: string
  /** פסקה קצרה לפני CTA האמצעי (בתוך אותו סעיף) */
  midHook?: string
  /** אינדקס סעיף (0 = ראשון) שבו מוצג CTA האמצעי. ברירת מחדל בדף: 1 */
  midCtaSectionIndex?: number
  /** כותרת משנה מעל כפתור CTA האמצעי */
  ctaMidTitle?: string
  /** טקסט תומך מעל כפתור CTA האמצעי */
  ctaMidSubtitle?: string
  /** פסקה עם קישור לגלריה לפני CTA הסיום */
  galleryClosing?: { segments: RichTextSegment[] }
  /** תוכן עניינים */
  toc?: { title: string; items: ArticleTocItem[] }
  /** לפני/אחרי — בלי תמונות: placeholder */
  beforeAfter?: {
    title: string
    placeholder?: string
    beforeSrc?: string
    afterSrc?: string
    beforeAlt?: string
    afterAlt?: string
    beforeCaption?: string
    afterCaption?: string
  }
  /** ציטוט אמון אחרי רשימת ה־FAQ ולפני ה־CTA */
  faqClosingQuote?: { quote: string; attribution: string }
  /** CTA אחרי FAQ */
  faqAfterCta?: {
    title: string
    subtitle: string
    buttonLabel: string
    message: 'photo' | 'consult'
  }
  /** רצועת וואטסאפ קומפקטית אחרי ~50% גלילה בעמוד */
  scrollNudgeCta?: { label: string; message: 'photo' | 'consult'; microLine?: string }
  /** פסקאות עם קישורים מיד אחרי הפתיחה (אופציונלי) */
  introLinked?: { segments: RichTextSegment[] }[]
  /** תמונה נוספת אחרי סיום סעיף לפי אינדקס (0 = אחרי הסעיף הראשון) */
  secondaryImage?: { src: string; alt: string; afterSectionIndex: number }
  sections: ArticleSection[]
  ctaMid: string
  ctaEnd: string
  /** כותרת משנה מעל כפתור ה־CTA בתחתית (אופציונלי) */
  ctaEndTitle?: string
  /** טקסט תומך מעל הכפתור (אופציונלי) */
  ctaEndSubtitle?: string
  image: { src: string; alt: string; caption?: string }
  waMidMessage: 'photo' | 'consult'
  waEndMessage: 'photo' | 'consult'
  faq?: ArticleFaqItem[]
}

export const articlesList: ArticleContent[] = [
  {
    slug: 'miklahon-mithapeach',
    path: '/articles/miklahon-mithapeach',
    metaTitle: 'איך לבחור מקלחון – מדריך ומחיר | SAB Glass',
    metaDescription:
      'מדריך לבחירת מקלחון לפי חלל — בלי טעויות יקרות. שלחו תמונה וקבלו הצעה מדויקת.',
    h1: 'איך לבחור מקלחון שמתאים בדיוק לחדר הרחצה שלכם',
    breadcrumbLabel: 'איך לבחור מקלחון',
    lastUpdated: '2026-04-05',
    intro:
      'בחירת מקלחון היא לא רק עניין של עיצוב, היא משפיעה על נוחות, ניקיון ובטיחות לאורך שנים. להלן מה שכדאי לדעת לפני שמתחייבים לדגם או למידות. ' +
      SERVICE_AREA_COPY.citiesExamples +
      ' — ומתאימים ומתקינים מקלחונים מהתכנון ועד השטח.',
    earlyCta: {
      label: SITE_WIDE_CTA_BUTTON_LABEL,
      message: 'photo',
    },
    introLinked: [
      {
        segments: [
          { text: 'מפת דרכים מלאה באתר: ' },
          { text: 'המדריך המלא למקלחונים בהתאמה אישית', href: '/miklahon-guide' },
          { text: '. ' },
          { text: 'למחירים משוערים והצעה מהירה ראו ' },
          { text: 'כמה עולה מקלחון זכוכית בהתאמה אישית', href: '/articles/miklahon-price' },
          { text: '. לשירות מלא, ייצור והתקנה לפי מידות — ' },
          { text: 'מקלחונים בהתאמה אישית מזכוכית', href: '/shower-glass-custom' },
          { text: '.' },
        ],
      },
      {
        segments: [
          { text: 'להבנת עובי זכוכית ובטיחות: ' },
          { text: 'איזה זכוכית מתאימה למקלחונים', href: '/articles/zchuchit-le-miklahon' },
          { text: '. לחדר צר: ' },
          { text: 'מקלחון לחדר רחצה קטן', href: '/articles/miklahon-lachadar-katan' },
          { text: '.' },
        ],
      },
    ],
    sections: [
      {
        h2: 'סוגי מקלחונים, מה מתאים לכם?',
        paragraphs: [
          'מקלחון בנישה לרוב דורש דלת אחת או מערכת הזזה לפי רוחב הפתח. פינתי מתאים כשיש זווית פנויה ורוצים שטח רחצה נדיב. התאמה לקו האריחים ולכיוון הפתיחה קובעת אם תזכו לפתח נוח או למקום שתמיד נתקעים בו ברגל.',
        ],
      },
      {
        h2: 'טעויות נפוצות בבחירת מקלחון',
        paragraphs: [
          'מדידה לפני גמר אריחים, התעלמות מכיוון פתיחת הדלת מול אסלה וכיור, ובחירת עובי זכוכית שלא תואם לגודל הדלת, כל אלה עלולים לייקר תיקון או החלפה. עדיף לצלם את החלל ולשאול לפני הזמנה.',
        ],
      },
      {
        h2: 'איך לבחור נכון לפי החלל',
        paragraphs: [
          'חדר צר, חשבו הזזה או כנף שפותחת החוצה מהמקלח. חדר עם חלון או אוורור חלש, חשובו בפרטיות (פס חלבי חלקי) ובאטימה סביב הפרופיל. תמיד אפשר לשלב בין פונקציה למראה נקי.',
        ],
      },
    ],
    ctaMid: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEnd: SITE_WIDE_CTA_BUTTON_LABEL,
    image: {
      src: '/gallery/2703.png',
      alt: 'מקלחון פינתי זכוכית שקופה מחוסמת עם ניקל מוברש, דלת ציר ומוט תמיכה, דוגמה לבחירת מקלחון לפי חלל',
    },
    waMidMessage: 'photo',
    waEndMessage: 'photo',
  },
  {
    slug: 'zchuchit-le-miklahon',
    path: '/articles/zchuchit-le-miklahon',
    metaTitle: 'זכוכית למקלחון – עובי, מחיר ובטיחות | SAB Glass',
    metaDescription:
      'עובי זכוכית מחוסמת למקלחון — לפני הזמנה. שלחו תמונה וקבלו הצעה מדויקת.',
    h1: 'איזה זכוכית מתאימה למקלחונים? מדריך מלא',
    breadcrumbLabel: 'איזה זכוכית למקלחון',
    lastUpdated: '2026-04-05',
    intro:
      'לא כל זכוכית מתאימה למקלחון. הבחירה נוגעת לבטיחות, ליציבות הדלת ולתקן הייצור. הנה מה שרוב הלקוחות שלנו שואלים לפני שמחליטים. ההמלצות שלנו מבוססות על התקנות בשטח בכל אזור המרכז וגם בירושלים, שם לחות ושימוש יומיומי בוחנים את החומרים אמיתיים.',
    earlyCta: {
      label: SITE_WIDE_CTA_BUTTON_LABEL,
      message: 'photo',
    },
    introLinked: [
      {
        segments: [
          { text: 'המבנה המלא של הנושאים: ' },
          { text: 'המדריך המלא למקלחונים בהתאמה אישית', href: '/miklahon-guide' },
          { text: '. ' },
          { text: 'למדריך בחירת מקלחון לפי חלל קראו ' },
          { text: 'איך לבחור מקלחון לחדר הרחצה', href: '/articles/miklahon-mithapeach' },
          { text: '. לפתרון מלא בהתאמה אישית — ' },
          { text: 'מקלחונים בהתאמה אישית מזכוכית', href: '/shower-glass-custom' },
          { text: '.' },
        ],
      },
      {
        segments: [
          { text: 'לטווחי מחיר והצעה מהירה: ' },
          { text: 'כמה עולה מקלחון זכוכית', href: '/articles/miklahon-price' },
          { text: '. לחללים צרים: ' },
          { text: 'מקלחון לחדר רחצה קטן', href: '/articles/miklahon-lachadar-katan' },
          { text: '.' },
        ],
      },
    ],
    sections: [
      {
        h2: 'זכוכית מחוסמת, למה זה הסטנדרט במקלחון',
        paragraphs: [
          'במקלחון משתמשים כמעט תמיד בזכוכית מחוסמת (מחוסמת בחום), שחזקה יותר ומתנהגת אחרת בשבר. זה חלק מתקן הבטיחות והביצועים הנכונים לחלל רטוב. בפרויקטים בכל אזור המרכז וגם בירושלים אנחנו רואים כמה חשובה עמידות לאורך זמן.',
        ],
      },
      {
        h2: 'עובי 6, 8 או 10 מ״מ, מה הנפוץ ומתי',
        paragraphs: [
          'עובי נבחר לפי גודל הדלת, סוג הפתרון (כנף בודדת מול הזזה) והנדסית הפרופיל. דלת רחבה או גבוהה דורשת לרוב עובי גבוה יותר ליציבות. נכוון אתכם לפי תכנון ומידות אמיתיות, לא לפי «מה שרואים בקטלוג גנרי».',
        ],
      },
      {
        h2: 'בטיחות ותחזוקה ביום־יום',
        paragraphs: [
          'ניקוי נכון שומר על שקיפות ומאריך חיים לפרזול. אם יש פגיעה או סדק, לא להמתין: זכוכית במקלחון היא רכיב בטיחותי ולא רק קוסמטי.',
        ],
      },
    ],
    ctaMid: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEnd: SITE_WIDE_CTA_BUTTON_LABEL,
    image: {
      src: '/gallery/2665.png',
      alt: 'אמבטיון זכוכית חלבית עם פרזול שחור מט, דוגמה לגימור זכוכית ופרטיות במקלחון',
    },
    waMidMessage: 'photo',
    waEndMessage: 'photo',
  },
  {
    slug: 'miklahon-lachadar-katan',
    path: '/articles/miklahon-lachadar-katan',
    metaTitle: 'מקלחון לחדר קטן – מדריך ומחיר | SAB Glass',
    metaDescription:
      'חדר קטן: הזזה, פינה ותכנון. שלחו תמונה וקבלו הצעה מדויקת.',
    h1: 'פתרונות מקלחון לחדרי רחצה קטנים',
    breadcrumbLabel: 'מקלחון לחדר קטן',
    lastUpdated: '2026-04-05',
    intro:
      'חדר רחצה קטן לא אומר שצריך לוותר על מקלחון נעים או מראה נקי. עם תכנון נכון אפשר לשחרר מקום לפתיחה, לנצל פינה ולשמור על תחושת מרחב. דירות רבות בתל אביב, בחולון, בבת ים, בירושלים ובערים נוספות באזור המרכז נהנות מדיוק במדידה כדי שלא «נחנקים» בפתיחת הדלת.',
    earlyCta: {
      label: SITE_WIDE_CTA_BUTTON_LABEL,
      message: 'photo',
    },
    introLinked: [
      {
        segments: [
          { text: 'נקודת כניסה מומלצת: ' },
          { text: 'המדריך המלא למקלחונים בהתאמה אישית', href: '/miklahon-guide' },
          { text: '. ' },
          { text: 'למחירים והתאמה אישית ראו ' },
          { text: 'כמה עולה מקלחון זכוכית', href: '/articles/miklahon-price' },
          { text: ' ואת ' },
          { text: 'מקלחונים בהתאמה אישית מזכוכית', href: '/shower-glass-custom' },
          { text: '.' },
        ],
      },
      {
        segments: [
          { text: 'למדריך בחירה כללי: ' },
          { text: 'איך לבחור מקלחון לחדר הרחצה', href: '/articles/miklahon-mithapeach' },
          { text: '. לעובי זכוכית: ' },
          { text: 'איזה זכוכית מתאימה למקלחונים', href: '/articles/zchuchit-le-miklahon' },
          { text: '.' },
        ],
      },
    ],
    sections: [
      {
        h2: 'עיצוב חכם לפני הכל',
        paragraphs: [
          'מתחילים מזרימת תנועה: איפה נכנסים, איפה עומדים מול הדלת ואיפה נשענים על הקירות. לפעמים הזזה של כמה סנטימטרים בקו האריחים פותרת בעיית פתיחה שתסבך אתכם אחרי התקנה.',
        ],
      },
      {
        h2: 'דלתות הזזה ומסילות',
        paragraphs: [
          'מערכת הזזה איכותית חוסכת את רדיוס הפתיחה של דלת כנף ומתאימה למסדרון צר ליד המקלח. חשוב לבחור פרופיל וגלגלים שמיועדים ללחות ולשימוש יומיומי.',
        ],
      },
      {
        h2: 'ניצול מקום בפינה ובגובה',
        paragraphs: [
          'מקלחון פינתי יכול להרחיב את תא הרחצה בלי להרחיב את הריצפה. לעיתים שילוב של זכוכית שקופה עם פס חלבי חלקי נותן פרטיות בלי לסגור את החלל ויזואלית.',
        ],
      },
    ],
    ctaMid: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEnd: SITE_WIDE_CTA_BUTTON_LABEL,
    image: {
      src: '/gallery/2674.png',
      alt: 'אמבטיון סטנדרטי זכוכית שקופה עם פרזול שחור מט, פתרון קומפקטי לחדר רחצה קטן',
    },
    waMidMessage: 'photo',
    waEndMessage: 'photo',
  },
  {
    slug: 'miklahon-price',
    path: '/articles/miklahon-price',
    metaTitle: MIKLAHON_PRICE_META_TITLES[MIKLAHON_PRICE_META_TITLE_VARIANT],
    metaDescription: MIKLAHON_PRICE_META_DESCRIPTIONS[MIKLAHON_PRICE_META_TITLE_VARIANT],
    h1: 'כמה עולה מקלחון זכוכית בהתאמה אישית?',
    breadcrumbLabel: 'כמה עולה מקלחון',
    lastUpdated: '2026-04-05',
    readingTimeLabel: 'זמן קריאה: כ־2–3 דקות',
    featuredSnippetAnswer:
      'מחיר מקלחון זכוכית בהתאמה אישית מתחיל מ־4,200 ₪ ומגיע עד 6,800 ₪ ומעלה לפתרון מלא, תלוי בשטח זכוכית, עובי (6/8/10 מ״מ), סוג פתיחה, פרזול ומורכבות ההתקנה. פתרון יוקרתי יכול לעלות מעבר.',
    intro:
      'כמה עולה מקלחון זכוכית בהתאמה אישית? התשובה משתנה לפי גודל, סוג הזכוכית ורמת הגימור.',
    earlyCta: {
      label: SITE_WIDE_CTA_BUTTON_LABEL,
      message: 'photo',
    },
    introAfterCtaRich: [
      [
        { text: 'המחיר למקלחון בהתאמה אישית מתחיל מכמה אלפי שקלים', strong: true },
        {
          text: ' ויכול לעלות בהתאם למידות, עיצוב וסוג הזכוכית. אין טבלת מחירים אחת לכולם, כי כל חדר שונה.',
        },
      ],
    ],
    introAfterCta: [
      SERVICE_AREA_COPY.installWide + ' ומלווים אתכם מתמונת החדר ועד הגימור.',
    ],
    socialProofLine: 'מאות לקוחות כבר שדרגו את חדר הרחצה שלהם עם SAB Glass.',
    toc: {
      title: 'מה תמצאו בעמוד',
      items: [
        { label: 'מחיר — מה משפיע', id: 'mehir' },
        { label: 'למה לא רק לפי מחיר', id: 'lama-lo-mehir' },
        { label: 'איך מקבלים הצעה', id: 'eich-livchor-hazaa' },
        { label: 'טווח מחירים', id: 'tvach' },
        { label: 'שאלות נפוצות', id: 'faq' },
      ],
    },
    introLinked: [
      {
        segments: [
          { text: 'מתחילים מהמבנה המלא: ' },
          { text: 'המדריך המלא למקלחונים בהתאמה אישית', href: '/miklahon-guide' },
          { text: '. ' },
          { text: 'אם אתם מחפשים ' },
          { text: 'מקלחון זכוכית בהתאמה אישית', href: '/shower-glass-custom' },
          {
            text: ', כדאי לעבור על עמוד השירות המלא עם סוגי מקלחונים, זכוכית מחוסמת והתקנה. למדריך בחירה ראו ',
          },
          { text: 'איך לבחור מקלחון לחדר הרחצה', href: '/articles/miklahon-mithapeach' },
          { text: ', להבנת עובי וחומרים ', },
          { text: 'איזה זכוכית מתאימה למקלחונים', href: '/articles/zchuchit-le-miklahon' },
          { text: ', ולרעיונות בחלל צר ', },
          { text: 'מקלחון לחדר רחצה קטן', href: '/articles/miklahon-lachadar-katan' },
          { text: '. ' },
          { text: 'צפו בדוגמאות אמיתיות של מקלחונים', href: '/catalog' },
          { text: ' בגלריה.' },
        ],
      },
    ],
    secondaryImage: {
      src: '/gallery/2703.png',
      alt: 'מקלחון זכוכית בהתאמה אישית לאחר התקנה בבית לקוח',
      afterSectionIndex: 2,
    },
    beforeAfter: {
      title: 'לפני ואחרי התקנה',
      placeholder:
        'כאן יתווספו בקרוב צילומי לפני ואחרי מהשטח. רוצים לראות דוגמאות? עברו לגלריה מהתפריט או מהקישורים במאמר.',
    },
    midCtaSectionIndex: 2,
    midHook: 'לא חייבים לנחש, אפשר לדעת בדיוק.',
    ctaMidTitle: 'רוצים לדעת כמה זה יעלה אצלכם?',
    ctaMidSubtitle: 'שלחו תמונה ונגיד לכם בדיוק',
    sections: [
      {
        id: 'mehir',
        h2: 'מה משפיע על מחיר מקלחון?',
        paragraphs: [
          'כל אחד מהגורמים הבאים משנה את כמות החומר, סוג הפרזול וזמן ההתקנה, ולכן גם את המחיר הסופי. עובי הזכוכית וההתאמה למידות אמיתיות הם חלק מרכזי, במיוחד בדלת רחבה או גבוהה.',
        ],
        bullets: [
          'גודל המקלחון והיקף הזכוכית',
          'סוג הזכוכית (6/8/10 מ״מ) וגימור (שקוף, חלבי, פסים)',
          'סוג פתיחה (דלת כנף / הזזה) ומורכבות הפרזול',
          'מורכבות ההתקנה בשטח, כולל קירות, ריצוף ואלכסונים',
        ],
        linkedParagraphs: [
          {
            segments: [
              { text: 'רוצים להעמיק בנושא העובי והבטיחות? קראו את המדריך ' },
              { text: 'איזה זכוכית מתאימה למקלחונים', href: '/articles/zchuchit-le-miklahon' },
              { text: '. לסוגי מקלחונים, זכוכית מחוסמת והתקנה — ' },
              { text: 'מקלחון זכוכית בהתאמה אישית', href: '/shower-glass-custom' },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'lama-lo-mehir',
        h2: 'למה לא כדאי לבחור רק לפי מחיר?',
        paragraphs: [
          'מקלחון הוא מוצר לשנים רבות: הוא חשוף למים, לחות ולניקיון יומיומי. בחירה בזול בלי אטימה נכונה, פרזול איכותי והתקנה מדויקת עלולה להוביל לנזילות, רעש, דלת לא יציבה או שחיקה מהירה, ואז התיקון יקר יותר מההפרש במחיר ההתחלתי.',
          'השקעה נכונה בתכנון ובביצוע שומרת על נראות, בטיחות ושקט נפשי לאורך זמן.',
        ],
        linkedParagraphs: [
          {
            segments: [
              { text: 'בשירות ' },
              { text: 'מקלחונים בהתאמה אישית מזכוכית', href: '/shower-glass-custom' },
              {
                text: ' אנחנו משלבים תכנון, חומרים והתקנה כדי שהתוצאה תחזיק מעמד — לא רק במחיר הראשוני.',
              },
            ],
          },
        ],
      },
      {
        id: 'eich-livchor-hazaa',
        h2: 'איך מקבלים הצעת מחיר מדויקת?',
        paragraphs: [
          'הדרך המהירה והמדויקת היא לשלוח תמונה של חדר הרחצה (כולל זווית שמראה את האריחים, הפתח והאסלה אם רלוונטי). כך אפשר להבין את החלל, להמליץ על סוג פתיחה ועובי זכוכית, ולהחזיר הצעה שמתאימה לכם.',
          SERVICE_AREA_COPY.installWide +
            '. ההצעה משקפת גם ניסיון בשטח, מדידה מדויקת והתאמה למבנה הקיים — לא רק את עלות הזכוכית.',
        ],
        linkedParagraphs: [
          {
            segments: [
              { text: 'בעמוד ' },
              { text: 'מקלחונים בהתאמה אישית מזכוכית', href: '/shower-glass-custom' },
              {
                text: ' תמצאו את כל מה שאנחנו מציעים לפני שאתם שולחים תמונה, כדי לדעת בדיוק על מה אתם מדברים.',
              },
            ],
          },
        ],
      },
      {
        id: 'tvach',
        h2: 'טווח מחירים',
        paragraphs: [
          'להלן טווחים להמחשה בלבד. המחיר הסופי נקבע אחרי תכנון, מידות מדויקות ובדיקת השטח.',
        ],
        dataTable: {
          headers: ['סוג מקלחון', 'טווח מחיר'],
          rows: [
            { left: 'בסיסי', right: 'החל מ־4,200 ₪' },
            { left: 'בהתאמה אישית', right: 'החל מ־6,800 ₪' },
            { left: 'יוקרתי', right: 'לפי דרישות' },
          ],
          footnote:
            'המחירים הם להמחשה בלבד ומשתנים לפי מידה, עיצוב ותנאי השטח',
          trustNotes: ['מחירים לדוגמה בלבד', 'התאמה אישית לכל לקוח'],
        },
        tableQuote: {
          quote: 'התקנה מדויקת ושירות ברמה גבוהה מאוד',
          attribution: 'לקוח, אזור המרכז',
        },
        linkedParagraphs: [
          {
            segments: [
              { text: 'רוצים לראות איך זה נראה בפועל? ' },
              { text: 'צפו בדוגמאות אמיתיות של מקלחונים', href: '/catalog' },
              { text: ' בגלריה שלנו.' },
            ],
          },
        ],
      },
    ],
    ctaMid: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEnd: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEndTitle: 'עדיין מתלבטים?',
    ctaEndSubtitle: 'שלחו תמונה ונגיד לכם בדיוק מה מתאים לכם',
    image: {
      src: '/gallery/2705.png',
      alt: 'מקלחון זכוכית בהתאמה אישית לאחר התקנה בבית לקוח, מחיר לפי מידות ועיצוב',
      caption: 'דוגמה למקלחון בהתאמה אישית, המחיר משתנה לפי גודל ועיצוב',
    },
    galleryClosing: {
      segments: [
        { text: 'רוצים לראות דוגמאות אמיתיות? ' },
        { text: 'צפו בעבודות שביצענו בגלריה', href: '/catalog' },
        { text: '.' },
      ],
    },
    waMidMessage: 'photo',
    waEndMessage: 'photo',
    faq: [
      {
        question: 'האם אפשר לקבל מחיר בלי להגיע למקום?',
        answer:
          'כן. ברוב המקרים מספיקה תמונה של חדר הרחצה להערכה מדויקת. אם צריך — נתאם מדידה לפני ייצור.',
      },
      {
        question: 'כמה זמן לוקחת התקנה?',
        answer: 'בדרך כלל יום התקנה אחד בשטח, אחרי ייצור הזכוכית למידות שלכם.',
      },
      {
        question: 'האם חייבים מדידה לפני?',
        answer:
          'לרוב מתבצעת מדידה בשטח לפני ייצור, לאטימה ודיוק. אפשר להתחיל מתמונה ואז לקבוע מדידה.',
      },
    ],
    faqClosingQuote: {
      quote: 'השירות היה מהיר והתוצאה מושלמת',
      attribution: 'לקוחה, תל אביב',
    },
    faqAfterCta: {
      title: 'עדיין מתלבטים?',
      subtitle: 'שלחו תמונה ונגיד לכם בדיוק מה מתאים לכם',
      buttonLabel: SITE_WIDE_CTA_BUTTON_LABEL,
      message: 'photo',
    },
    scrollNudgeCta: {
      label: SITE_WIDE_CTA_BUTTON_LABEL,
      message: 'photo',
      microLine: 'מענה מהיר בוואטסאפ',
    },
  },
  {
    slug: 'miklahon-hazit-vs-pinati',
    path: '/articles/miklahon-hazit-vs-pinati',
    metaTitle: 'מה עדיף מקלחון חזית או פינתי? | SAB Glass',
    metaDescription:
      'בלי ניחושים: קל לטעות בין חזית לפינתי רק לפי תמונות. במאמר — השוואה לפי חלל, נוחות ומחיר. שלחו תמונה וקבלו הצעה מדויקת.',
    h1: 'מקלחון חזית או פינתי — מה עדיף?',
    breadcrumbLabel: 'חזית או פינתי',
    lastUpdated: '2026-04-05',
    featuredSnippetAnswer:
      'מקלחון חזית מתאים לקיר אחד ודלת בקו ישר, בעוד מקלחון פינתי מתאים לפינה פנויה או לחלל צר שבו רוצים לסגור אזור רחצה. מידות החדר, סוג הפתיחה ומסלול ההליכה קובעים מה נוח בפועל.',
    relatedSlugs: ['miklahon-lachadar-katan', 'miklahon-mithapeach', 'miklahon-price'],
    intro:
      'כשמתכננים מקלחון חדש, אחת השאלות הראשונות היא האם לבחור מקלחון חזית או פינתי. הבחירה תלויה בגודל החדר, המבנה והעדפה אישית. ' +
      SERVICE_AREA_COPY.citiesExamples +
      ' — ואנחנו מתכננים ומתקינים ונעזור לכם להתאים פתרון לחלל בפועל.',
    earlyCta: {
      label: SITE_WIDE_CTA_BUTTON_LABEL,
      message: 'photo',
    },
    toc: {
      title: 'מה תמצאו במאמר',
      items: [
        { label: 'מקלחון חזית', id: 'chazit' },
        { label: 'מקלחון פינתי', id: 'pinati' },
        { label: 'איך לבחור', id: 'eich-livchor' },
        { label: 'שאלות נפוצות', id: 'faq' },
      ],
    },
    introLinked: [
      {
        segments: [
          { text: 'מפת דרכים מלאה: ' },
          { text: 'המדריך המלא למקלחונים בהתאמה אישית', href: '/miklahon-guide' },
          { text: '. ' },
          { text: 'למחירים והצעה מותאמת: ' },
          { text: 'כמה עולה מקלחון זכוכית בהתאמה אישית', href: '/articles/miklahon-price' },
          { text: '. לייצור והתקנה לפי מידות — ' },
          { text: 'מקלחונים בהתאמה אישית מזכוכית', href: '/shower-glass-custom' },
          { text: '.' },
        ],
      },
      {
        segments: [
          { text: 'למדריך בחירה כללי: ' },
          { text: 'איך לבחור מקלחון לחדר הרחצה', href: '/articles/miklahon-mithapeach' },
          { text: '. לחדר קטן: ' },
          { text: 'מקלחון לחדר רחצה קטן', href: '/articles/miklahon-lachadar-katan' },
          { text: '.' },
        ],
      },
    ],
    sections: [
      {
        id: 'chazit',
        h2: 'מקלחון חזית — למי זה מתאים?',
        paragraphs: [],
        bullets: ['חללים רחבים', 'מראה פתוח ונקי', 'גישה נוחה'],
      },
      {
        id: 'pinati',
        h2: 'מקלחון פינתי — יתרונות',
        paragraphs: [],
        bullets: ['חוסך מקום', 'מתאים לחדרים קטנים', 'ניצול חכם של החלל'],
      },
      {
        id: 'eich-livchor',
        h2: 'איך לבחור נכון?',
        paragraphs: ['הבחירה תלויה בגודל החדר, במיקום הקירות ובשימוש היומיומי.'],
      },
    ],
    midCtaSectionIndex: 1,
    ctaMid: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEnd: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEndTitle: 'רוצים לדעת מה מתאים לחדר שלכם?',
    ctaEndSubtitle:
      'שלחו תמונה וקבלו הצעה מדויקת — נייעץ מהתמונה ונכוון אתכם לחזית או לפינתי, בלי התחייבות.',
    image: {
      src: '/gallery/2665.png',
      alt: 'מקלחון זכוכית — השוואה בין פתרון חזיתי לפינתי בחדר רחצה',
    },
    waMidMessage: 'photo',
    waEndMessage: 'photo',
    faq: [
      {
        question: 'האם אפשר לדעת מה עדיף בלי מדידה?',
        answer:
          'תמונה טובה נותנת כיוון חזק. לפני ייצור הזכוכית מדידה בשטח מבטיחה דיוק לאטימה ולפתיחה.',
      },
      {
        question: 'כמה זמן לוקחת התקנה?',
        answer: 'בדרך כלל יום אחד בשטח, אחרי ייצור למידות המדויקות שלכם.',
      },
      {
        question: 'מה משפיע יותר על המחיר — חזית או פינתי?',
        answer: 'תלוי בשטח הזכוכית, סוג הפתיחה והפרזול — לא רק בצורה.',
      },
    ],
  },
  {
    slug: 'nikui-zchuchit-miklahon',
    path: '/articles/nikui-zchuchit-miklahon',
    metaTitle: 'ניקוי זכוכית מקלחון – מדריך ומחיר | SAB Glass',
    metaDescription:
      'ניקוי נכון — פחות אבנית ונזק לזכוכית. שלחו תמונה וקבלו הצעה מדויקת.',
    h1: 'איך מנקים זכוכית מקלחון ושומרים עליה נקייה',
    breadcrumbLabel: 'ניקוי זכוכית מקלחון',
    lastUpdated: '2026-04-05',
    relatedSlugs: ['zchuchit-le-miklahon', 'miklahon-mithapeach', 'miklahon-price'],
    intro:
      'אחת הבעיות הנפוצות במקלחונים היא הצטברות אבנית ולכלוך על הזכוכית. עם תחזוקה נכונה, אפשר לשמור על מראה נקי לאורך זמן. בהתקנות בכל אזור המרכז וגם בירושלים אנחנו לעיתים ממליצים גם על ציפוי ננו ועל הרגלי שימוש קלים.',
    earlyCta: {
      label: ARTICLE_NIKUI_CTA_LABEL,
      message: 'photo',
    },
    introLinked: [
      {
        segments: [
          { text: 'המבנה המלא של הנושאים: ' },
          { text: 'המדריך המלא למקלחונים בהתאמה אישית', href: '/miklahon-guide' },
          { text: '. ' },
          { text: 'לסוגי זכוכית ועובי: ' },
          { text: 'איזה זכוכית מתאימה למקלחונים', href: '/articles/zchuchit-le-miklahon' },
          { text: '. לפתרון מלא — ' },
          { text: 'מקלחונים בהתאמה אישית מזכוכית', href: '/shower-glass-custom' },
          { text: '.' },
        ],
      },
      {
        segments: [
          { text: 'למחירים והתאמה אישית: ' },
          { text: 'כמה עולה מקלחון זכוכית', href: '/articles/miklahon-price' },
          { text: '. לבחירת מקלחון לפי חלל: ' },
          { text: 'איך לבחור מקלחון לחדר הרחצה', href: '/articles/miklahon-mithapeach' },
          { text: '.' },
        ],
      },
    ],
    sections: [
      {
        h2: 'למה נוצרת אבנית?',
        paragraphs: [],
        bullets: ['מים קשים', 'שאריות סבון', 'חוסר ניקוי קבוע'],
      },
      {
        h2: 'איך לנקות נכון?',
        paragraphs: [],
        bullets: ['שימוש בחומר מתאים', 'ניגוב אחרי שימוש', 'ניקוי שבועי'],
      },
      {
        h2: 'איך למנוע לכלוך?',
        paragraphs: [],
        bullets: ['ציפוי ננו', 'תחזוקה קבועה'],
      },
    ],
    midCtaSectionIndex: 1,
    ctaMid: ARTICLE_NIKUI_CTA_LABEL,
    ctaEnd: ARTICLE_NIKUI_CTA_LABEL,
    ctaEndTitle: 'רוצים ייעוץ גם על תחזוקה?',
    ctaEndSubtitle: 'שלחו תמונה של המקלחון ונכוון אתכם לניקוי נכון ולשמירה על הזכוכית.',
    image: {
      src: '/gallery/2705.png',
      alt: 'זכוכית מקלחון נקייה — תחזוקה וניקוי נכון לאורך זמן',
    },
    waMidMessage: 'photo',
    waEndMessage: 'photo',
  },
  {
    slug: 'miklahon-yokerati',
    path: '/articles/miklahon-yokerati',
    metaTitle: 'כמה עולה מקלחון יוקרתי? מחיר אמיתי | SAB Glass',
    metaDescription:
      'לפני שמשקיעים: «יוקרתי» בלי הגדרה ברורה מבלבל ומייקר טעויות. במאמר — מה כולל גימור פרימיום ומה משפיע על המחיר. שלחו תמונה וקבלו הצעה מדויקת.',
    h1: 'מקלחון יוקרתי בהתאמה אישית – מה זה באמת אומר?',
    breadcrumbLabel: 'מקלחון יוקרתי',
    lastUpdated: '2026-04-05',
    featuredSnippetAnswer:
      'מחיר מקלחון יוקרתי מתחיל מ־6,800 ₪ (נקודת פתיחה לפתרון מלא בהמחשה) ומגיע עד סכום גבוה יותר לפי מפרט, תלוי בעובי זכוכית (8–10 מ״מ), פרזול, גימור והיקף זכוכית.',
    relatedSlugs: ['miklahon-price', 'zchuchit-le-miklahon', 'miklahon-mithapeach'],
    intro:
      'מקלחון יוקרתי הוא לא רק מראה מרשים, אלא שילוב של זכוכית איכותית, התקנה מדויקת ועיצוב שמתאים בדיוק לחלל. אם אתם רוצים תוצאה שנראית ברמה גבוהה באמת – חשוב להבין מה מגדיר מקלחון יוקרתי.',
    earlyCta: {
      label: ARTICLE_EARLY_CONVERSION_CTA_LABEL,
      message: 'photo',
    },
    introAfterCta: [
      ARTICLE_TRUST_INSTALL_AREA,
      SERVICE_AREA_COPY.citiesExamples + '.',
      'התאמה נכונה של עובי זכוכית, פרזול ופתיחה היא מה שמבדיל בין «נראה טוב בתמונה» לבין גימור שמחזיק מעמד ביום־יום.',
    ],
    socialProofLine: ARTICLE_SOCIAL_PROOF_SHORT,
    introLinked: [
      {
        segments: [
          { text: 'מפת דרכים: ' },
          { text: 'המדריך המלא למקלחונים בהתאמה אישית', href: '/miklahon-guide' },
          { text: '. ' },
          { text: 'למחירים והצעה מותאמת: ' },
          { text: 'כמה עולה מקלחון זכוכית בהתאמה אישית', href: '/articles/miklahon-price' },
          { text: '. לייצור והתקנה — ' },
          { text: 'מקלחונים בהתאמה אישית מזכוכית', href: '/shower-glass-custom' },
          { text: '.' },
        ],
      },
      {
        segments: [
          { text: 'לעובי זכוכית ובטיחות: ' },
          { text: 'איזה זכוכית מתאימה למקלחונים', href: '/articles/zchuchit-le-miklahon' },
          { text: '. לבחירה לפי חלל: ' },
          { text: 'איך לבחור מקלחון לחדר הרחצה', href: '/articles/miklahon-mithapeach' },
          { text: '. לחזית מול פינתי: ' },
          { text: 'מקלחון חזית או פינתי — מה עדיף', href: '/articles/miklahon-hazit-vs-pinati' },
          { text: '.' },
        ],
      },
    ],
    midHook: ARTICLE_MID_HOOK_CONVERSION,
    toc: {
      title: 'מה תמצאו במאמר',
      items: [
        { label: 'מה זה מקלחון יוקרתי', id: 'mah-yokereti' },
        { label: 'למי זה מתאים', id: 'lemi' },
        { label: 'מחיר', id: 'mehir' },
        { label: 'שאלות נפוצות', id: 'faq' },
      ],
    },
    sections: [
      {
        id: 'mah-yokereti',
        h2: 'מה הופך מקלחון ליוקרתי?',
        paragraphs: [],
        bullets: [
          'זכוכית מחוסמת עבה (8–10 מ״מ)',
          'פרזול איכותי',
          'גימור נקי ומדויק',
          'התאמה אישית מלאה',
        ],
      },
      {
        id: 'lemi',
        h2: 'למי זה מתאים?',
        paragraphs: [],
        bullets: ['מי שמחפש מראה מודרני', 'שיפוץ חדר רחצה', 'בתים חדשים'],
      },
      {
        id: 'mehir',
        h2: 'כמה עולה מקלחון יוקרתי?',
        paragraphs: ['המחיר משתנה לפי מידה, עיצוב ורמת הגימור.'],
      },
    ],
    midCtaSectionIndex: 1,
    ctaMid: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEnd: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEndTitle: 'רוצים מקלחון ברמת פרימיום?',
    ctaEndSubtitle:
      'שלחו תמונה וקבלו הצעה מדויקת — נסביר מה שווה להשקיע בזכוכית, בפרזול ובהתקנה, בלי התחייבות.',
    image: {
      src: '/gallery/2706.png',
      alt: 'מקלחון זכוכית יוקרתי בהתאמה אישית — דלת כנף מזכוכית מחוסמת עבה עם פרזול ניקל מוברש וגימור נקי בחדר רחצה מודרני',
      caption: ARTICLE_IMAGE_CAPTION_CONVERSION,
    },
    waMidMessage: 'photo',
    waEndMessage: 'photo',
    faq: [
      {
        question: 'האם אפשר לקבל מחיר לפי תמונה?',
        answer:
          'כן. תמונה והעדפות עיצוב נותנות הערכה טובה; לפני הזמנת ייצור תתאם בדרך כלל מדידה בשטח.',
      },
      {
        question: 'כמה זמן לוקחת התקנה?',
        answer: 'בדרך כלל יום התקנה אחד, אחרי ייצור הזכוכית למידות שלכם.',
      },
      {
        question: 'מה מייקר מקלחון יוקרתי?',
        answer: 'עובי זכוכית, פרזול, גימור והתאמה אישית מלאה — כל אחד משנה את העלות.',
      },
    ],
  },
  {
    slug: 'tachzuka-miklahon',
    path: '/articles/tachzuka-miklahon',
    metaTitle: 'תחזוקת מקלחון – מדריך וחיסכון במחיר | SAB Glass',
    metaDescription:
      'תחזוקה נכונה — פחות תקלות ועלויות. שלחו תמונה וקבלו הצעה מדויקת.',
    h1: 'איך לשמור על מקלחון לאורך זמן – מדריך תחזוקה פשוט',
    breadcrumbLabel: 'תחזוקת מקלחון',
    lastUpdated: '2026-04-05',
    relatedSlugs: ['nikui-zchuchit-miklahon', 'miklahon-mithapeach', 'miklahon-price'],
    intro:
      'מקלחון איכותי יכול להחזיק שנים, אבל רק אם שומרים עליו נכון. תחזוקה פשוטה יכולה למנוע אבנית, לכלוך ושחיקה של הזכוכית.',
    earlyCta: {
      label: ARTICLE_EARLY_CONVERSION_CTA_LABEL,
      message: 'photo',
    },
    introAfterCta: [
      ARTICLE_TRUST_INSTALL_AREA,
      SERVICE_AREA_COPY.citiesExamples + '.',
      'בסיום התקנה אנחנו נותנים הנחיות קצרות לשימוש יומיומי — כדי שהמקלחון יישמר נוח, נקי ונעים לאורך זמן.',
    ],
    socialProofLine: ARTICLE_SOCIAL_PROOF_SHORT,
    introLinked: [
      {
        segments: [
          { text: 'ניקוי מפורט לזכוכית: ' },
          { text: 'איך מנקים זכוכית מקלחון ושומרים עליה נקייה', href: '/articles/nikui-zchuchit-miklahon' },
          { text: '. המבנה המלא: ' },
          { text: 'המדריך המלא למקלחונים בהתאמה אישית', href: '/miklahon-guide' },
          { text: '.' },
        ],
      },
      {
        segments: [
          { text: 'לייצור והתקנה — ' },
          { text: 'מקלחונים בהתאמה אישית מזכוכית', href: '/shower-glass-custom' },
          { text: '. למחירים: ' },
          { text: 'כמה עולה מקלחון זכוכית', href: '/articles/miklahon-price' },
          { text: '. למקלחון ברמת פרימיום: ' },
          { text: 'מקלחון יוקרתי בהתאמה אישית — מה זה אומר', href: '/articles/miklahon-yokerati' },
          { text: '.' },
        ],
      },
    ],
    midHook: ARTICLE_MID_HOOK_CONVERSION,
    sections: [
      {
        h2: 'מה גורם לשחיקה במקלחון?',
        paragraphs: [],
        bullets: ['מים קשים', 'אבנית', 'שימוש לא נכון'],
      },
      {
        h2: 'איך לשמור על הזכוכית נקייה?',
        paragraphs: [],
        bullets: ['ניגוב אחרי מקלחת', 'ניקוי שבועי', 'שימוש בחומרים מתאימים'],
      },
      {
        h2: 'טיפים לשמירה לאורך זמן',
        paragraphs: [],
        bullets: ['לא להשתמש בחומרים חומציים', 'לבדוק אטימות', 'לשמור על פרזול'],
      },
    ],
    midCtaSectionIndex: 1,
    ctaMid: ARTICLE_TACHZUKA_CTA_LABEL,
    ctaEnd: ARTICLE_TACHZUKA_CTA_LABEL,
    ctaEndTitle: 'רוצים ייעוץ קצר על תחזוקה?',
    ctaEndSubtitle: 'שלחו תמונה של המקלחון — נכוון אתכם לתחזוקה נכונה ולמניעת בעיות נפוצות.',
    image: {
      src: '/gallery/2676.png',
      alt: 'מקלחון זכוכית נקי ומטופח — תחזוקה שוטפת שומרת על שקיפות הזכוכית ועל פרזול תקין לאורך שנים',
      caption: ARTICLE_IMAGE_CAPTION_CONVERSION,
    },
    waMidMessage: 'photo',
    waEndMessage: 'photo',
    faq: [
      {
        question: 'כל כמה זמן צריך לנקות?',
        answer: 'לפחות פעם בשבוע.',
      },
      {
        question: 'האם אפשר למנוע אבנית?',
        answer: 'כן, עם תחזוקה נכונה.',
      },
    ],
  },
  {
    slug: 'miklahon-lefi-mida-advanced',
    path: '/articles/miklahon-lefi-mida-advanced',
    metaTitle: 'איך לבחור מקלחון לפי מידה? מדריך | SAB Glass',
    metaDescription:
      'לפני התקנה: חדר לא סטנדרטי ומקלחון מהמדף עלולים לא להיפגש טוב. במאמר — מתי כדאי לפי מידה, איך נראה התהליך ומה עולה. שלחו תמונה וקבלו הצעה מדויקת.',
    h1: 'מקלחון לפי מידה בהתאמה אישית – המדריך המלא לבחירה נכונה',
    breadcrumbLabel: 'מקלחון לפי מידה',
    lastUpdated: '2026-04-05',
    readingTimeLabel: 'זמן קריאה: כ־4 דקות',
    featuredSnippetAnswer:
      'כדי לבחור נכון, בודקים אם החלל לא מתאים למקלחון מדף (קירות, פינות או פתח). אחר כך מודדים בשטח לפני ייצור. בסוף מייצרים ומתקינים לפי מידות אמת לאטימה נכונה ולפתיחת דלת נוחה.',
    intro:
      'כשחדר הרחצה לא סטנדרטי, מקלחון לפי מידה הוא הפתרון המדויק ביותר. התאמה אישית מאפשרת ניצול מושלם של החלל, מראה נקי ותוצאה יוקרתית באמת — בלי פשרות על פתיחת דלת, אטימה או קו עיצובי.',
    earlyCta: {
      label: ARTICLE_EARLY_CONVERSION_CTA_LABEL,
      message: 'photo',
    },
    introAfterCta: [
      'אנו מתקינים בכל אזור המרכז וגם בירושלים — מהמדידה והתכנון ועד ההתקנה בשטח, עם ליווי אישי.',
    ],
    socialProofLine: ARTICLE_SOCIAL_PROOF_SHORT,
    toc: {
      title: 'מה תמצאו במאמר',
      items: [
        { label: 'מתי צריך לפי מידה', id: 'matai' },
        { label: 'יתרונות', id: 'yitronot' },
        { label: 'איך נראה התהליך', id: 'tahalich' },
        { label: 'מחיר', id: 'mehir' },
        { label: 'שאלות נפוצות', id: 'faq' },
      ],
    },
    introLinked: [
      {
        segments: [
          { text: 'לטווחי מחיר והשוואה: ' },
          { text: 'כמה עולה מקלחון זכוכית בהתאמה אישית', href: '/articles/miklahon-price' },
          { text: '. המבנה המלא: ' },
          { text: 'המדריך המלא למקלחונים בהתאמה אישית', href: '/miklahon-guide' },
          { text: '. לשירות, ייצור והתקנה — ' },
          { text: 'מקלחונים בהתאמה אישית מזכוכית', href: '/shower-glass-custom' },
          { text: '.' },
        ],
      },
      {
        segments: [
          { text: 'לחדר צר או לא סימטרי ראו גם ' },
          { text: 'מקלחון לחדר רחצה קטן', href: '/articles/miklahon-lachadar-katan' },
          { text: ' ואת ' },
          { text: 'איך לבחור מקלחון לחדר הרחצה', href: '/articles/miklahon-mithapeach' },
          { text: '.' },
        ],
      },
    ],
    midCtaSectionIndex: 2,
    midHook: ARTICLE_MID_HOOK_CONVERSION,
    ctaMidSubtitle: 'שלחו תמונה וקבלו הצעה מדויקת',
    sections: [
      {
        id: 'matai',
        h2: 'מתי צריך מקלחון לפי מידה?',
        paragraphs: [
          'מקלחון סטנדרטי מהמדף מתאים לחלל «נקי» עם קירות ישרים, רוחב וגובה צפויים ופתח שמתאים למידות נפוצות. ברגע שהמציאות בשטח שונה — אלכסונים, נישות לא אחידות, ריצוף שכבר הותקן או תכנון ייחודי — מקלחון לפי מידה הופך לבחירה הגיונית שחוסכת תסכול אחרי ההתקנה.',
        ],
        bullets: [
          'חדרים קטנים או לא סימטריים',
          'קירות לא לגמרי ישרים או הפרשי גובה',
          'עיצוב מיוחד (קווים נקיים, פס חלבי חלקי, פרזול בולט או מינימליסטי)',
          'צורך בניצול מקסימלי של החלל בלי לפגוע בפתיחת דלת או בתנועה בחדר',
        ],
      },
      {
        id: 'yitronot',
        h2: 'מה היתרונות של התאמה אישית?',
        paragraphs: [
          'התאמה אישית אומרת שהזכוכית, הפרופילים והפרזול נבנים סביב המידות האמיתיות שלכם, לא סביב ממוצע תעשייתי. התוצאה נראית שלמה עם האריחים והאסלה, והשימוש היומיומי נשאר נוח.',
        ],
        bullets: [
          'התאמה מלאה למידות בפועל — כולל פינות ופתחים לא שגרתיים',
          'מראה מדויק ונקי, בלי «חורים» או מרווחים מוזרים',
          'נוחות שימוש גבוהה: פתיחה, הזזה ואחיזה נוחות לפי הגובה והרוחב שלכם',
          'פתרון שמתאים בדיוק לצרכים שלכם — פרטיות, גישה נגישה או שמירה על אור טבעי',
        ],
      },
      {
        id: 'tahalich',
        h2: 'איך מתבצע התהליך?',
        paragraphs: [
          'אצלנו התהליך בנוי להיות פשוט מצדכם ומדויק מצדנו. אין צורך להבין בפרזול או בעובי זכוכית לפני שמדברים — מתחילים מתמונה ושיחה קצרה.',
        ],
        bullets: [
          'שולחים תמונה של חדר הרחצה (כמה זוויות אם אפשר)',
          'מקבלים ייעוץ מקצועי: סוג פתיחה, עובי זכוכית והכיוון הכללי',
          'מדידה בשטח והתקנה — עד גימור מלא',
        ],
      },
      {
        id: 'mehir',
        h2: 'כמה עולה מקלחון לפי מידה?',
        paragraphs: [
          'המחיר משתנה לפי גודל הפתרון, סוג הזכוכית (שקוף, חלבי, פסים), סוג הפתיחה והעומס על הפרזול. מקלחון לפי מידה לרוב יקר יותר מסטנדרט מהמדף — אבל מחזיר את ההשקעה בנוחות, במראה ובעמידות לאורך שנים.',
          'שלחו תמונה ונכוון אתכם להצעה מדויקת, כולל מה כדאי לשדרג ואיפה אפשר לחסוך בלי לפגוע באיכות.',
        ],
        linkedParagraphs: [
          {
            segments: [
              { text: 'להרחבה על גורמי מחיר: ' },
              { text: 'כמה עולה מקלחון זכוכית', href: '/articles/miklahon-price' },
              { text: '.' },
            ],
          },
        ],
      },
    ],
    ctaMid: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEnd: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEndTitle: ARTICLE_DEFAULT_END_CTA.title,
    ctaEndSubtitle: ARTICLE_DEFAULT_END_CTA.subtitle,
    image: {
      src: '/gallery/2704.png',
      alt: 'מקלחון זכוכית בהתאמה אישית לפי מידות אמת בשטח — דלת ופרופיל מותאמים לקו האריחים ולפתח הלא סטנדרטי',
      caption: ARTICLE_IMAGE_CAPTION_CONVERSION,
    },
    galleryClosing: {
      segments: [
        { text: 'רוצים לראות עוד דוגמאות של התאמה אישית? ' },
        { text: 'עברו לגלריית העבודות שלנו', href: '/catalog' },
        { text: '.' },
      ],
    },
    scrollNudgeCta: {
      label: SITE_WIDE_CTA_BUTTON_LABEL,
      message: 'photo',
      microLine: SERVICE_AREA_COPY.reachTrust,
    },
    waMidMessage: 'photo',
    waEndMessage: 'photo',
    faq: [
      {
        question: 'האם אפשר לקבל מחיר בלי להגיע?',
        answer:
          'כן. רוב הלקוחות מתחילים מתמונה ומקבלים כיוון והערכה ראשונית; לפני ייצור תתאם מדידה כשצריך.',
      },
      {
        question: 'האם חייבים מדידה לפני ייצור?',
        answer: 'כן. לפני ייצור הזכוכית מדידה בשטח מבטיחה דיוק מול קירות, פתח ואלכסונים.',
      },
      {
        question: 'כמה זמן לוקחת התקנה?',
        answer:
          'ההתקנה עצמה לרוב יום אחד בבית. סך הזמן מהפנייה עד גמר תלוי בעומס ובמורכבות — בדרך כלל ימים עד שבועות ספורים.',
      },
    ],
  },
  {
    slug: 'parzol-le-miklahon',
    path: '/articles/parzol-le-miklahon',
    metaTitle: 'איך לבחור פרזול למקלחון נכון? | SAB Glass',
    metaDescription:
      'לפני שמזמינים: פרזול חלש הורג נוחות, אטימה ועמידות. במאמר — איך לבחור צירים ומסילות שמתאימים לדלת וללחות. שלחו תמונה וקבלו הצעה מדויקת.',
    h1: 'פרזול למקלחונים – איך לבחור נכון ולמה זה חשוב',
    breadcrumbLabel: 'פרזול למקלחון',
    lastUpdated: '2026-04-05',
    readingTimeLabel: 'זמן קריאה: כ־3 דקות',
    featuredSnippetAnswer:
      'כדי לבחור נכון, בודקים עומס דלת וסוג פתיחה (כנף מול הזזה). בודקים גם עמידות בלחות ולניקוי יומיומי, וגם התאמת איכות הפרזול למשקל הדלת ולתנועה שלה.',
    intro:
      'כשבוחרים מקלחון, לא רק הזכוכית חשובה — גם הפרזול משפיע על המראה, האיכות והעמידות לאורך זמן. צירים רופפים, מסילה לא נכונה או חומרים זולים יורגשו בכל פתיחה של הדלת; בחירה נכונה יחד עם התקנה מקצועית נותנת תחושה יציבה ויוקרתית.',
    earlyCta: {
      label: ARTICLE_EARLY_CONVERSION_CTA_LABEL,
      message: 'photo',
    },
    introAfterCta: [
      'אנו מתקינים בכל אזור המרכז וגם בירושלים, עם דגש על פרזול איכותי שמתאים לסוג הפתרון וללחות בחדר הרחצה.',
    ],
    socialProofLine: ARTICLE_SOCIAL_PROOF_SHORT,
    toc: {
      title: 'מה תמצאו במאמר',
      items: [
        { label: 'מה זה פרזול', id: 'mah-parzol' },
        { label: 'השפעה על איכות', id: 'eich-sifut' },
        { label: 'איך לבחור', id: 'eich-livchor' },
        { label: 'שאלות נפוצות', id: 'faq' },
      ],
    },
    introLinked: [
      {
        segments: [
          { text: 'למקלחון ברמת גימור גבוהה: ' },
          { text: 'מקלחון יוקרתי בהתאמה אישית — מה זה אומר', href: '/articles/miklahon-yokerati' },
          { text: '. סיכום נושאים: ' },
          { text: 'המדריך המלא למקלחונים בהתאמה אישית', href: '/miklahon-guide' },
          { text: '. ' },
          { text: 'מקלחונים בהתאמה אישית מזכוכית', href: '/shower-glass-custom' },
          { text: ' — עמוד השירות והצעת מחיר.' },
        ],
      },
      {
        segments: [
          { text: 'לעובי זכוכית ובטיחות: ' },
          { text: 'איזה זכוכית מתאימה למקלחונים', href: '/articles/zchuchit-le-miklahon' },
          { text: '. למחירים: ' },
          { text: 'כמה עולה מקלחון זכוכית', href: '/articles/miklahon-price' },
          { text: '.' },
        ],
      },
    ],
    midCtaSectionIndex: 1,
    ctaMidSubtitle: 'שלחו תמונה ונכוון אתכם לבחירה הנכונה',
    sections: [
      {
        id: 'mah-parzol',
        h2: 'מה זה פרזול למקלחון?',
        paragraphs: [
          'פרזול הוא כל חלקי המתכת והמנגנונים שמחברים את הזכוכית למסגרת, לקיר ולדלת: צירים, ידיות, מסילות להזזה, תומכים וברגים מתאימים ללחות. הוא לא «פרט קטן» — הוא מה שמחזיק את המשקל של הדלת ומאפשר אלפי פתיחות בלי רעידות ונזילות.',
        ],
        bullets: ['צירים וזוויות פתיחה', 'ידיות ואחיזה נוחה', 'מסילות וגלגלים להזזה', 'חיבורים, ברגים ואטימה סביב הפרופיל'],
      },
      {
        id: 'eich-sifut',
        h2: 'איך הפרזול משפיע על האיכות?',
        paragraphs: [
          'פרזול איכותי מתוכנן לחלל רטוב: חומרים שלא מחלידים במגע עם מים ואדים, תנועה חלקה בלי קרטוע, והתאמה לעובי הזכוכית. פרזול חלש יגרום לדלת «נופלת», רווחים לא אחידים ולעיתים נזילות לריצוף.',
        ],
        bullets: [
          'עמידות לאורך זמן מול מים וניקוי יומיומי',
          'תנועה חלקה של הדלת — נוחות ובטיחות',
          'מראה יוקרתי שמתאים לשאר אביזרי החדר',
        ],
      },
      {
        id: 'eich-livchor',
        h2: 'איזה פרזול כדאי לבחור?',
        paragraphs: [
          'אין תשובה אחת לכולם: הכל תלוי בסוג המקלחון (כנף מול הזזה), במשקל הדלת ובקו העיצובי (נירוסטה מוברש, שחור מט, כרום). חשוב שהבחירה תיעשה יחד עם ספק שמבין התקנה בשטח, לא רק מכירה מתוך קטלוג.',
        ],
        bullets: [
          'נירוסטה או גימורים איכותיים העמידים ללחות',
          'התאמה לעיצוב החדר ולשאר הפריטים',
          'התקנה מקצועית — כיוון, הידוק ואטימה נכונים',
        ],
        linkedParagraphs: [
          {
            segments: [
              { text: 'למדריך מקלחון יוקרתי וגימור: ' },
              { text: 'מקלחון יוקרתי בהתאמה אישית', href: '/articles/miklahon-yokerati' },
              { text: '.' },
            ],
          },
        ],
      },
    ],
    ctaMid: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEnd: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEndTitle: 'רוצים מקלחון ברמה גבוהה באמת?',
    ctaEndSubtitle: 'שלחו תמונה ונעזור לכם לבחור נכון — זכוכית, פרזול והתקנה שמתאימים יחד.',
    image: {
      src: '/gallery/2701.png',
      alt: 'מקלחון זכוכית עם פרזול נירוסטה מוברש — צירים, ידית ופרופיל המדגימים את השפעת איכות הפרזול על המראה והעמידות',
      caption: ARTICLE_IMAGE_CAPTION_CONVERSION,
    },
    galleryClosing: {
      segments: [
        { text: 'לעוד השראה מפרויקטים אמיתיים: ' },
        { text: 'גלריית מקלחונים ואמבטיונים', href: '/catalog' },
        { text: '.' },
      ],
    },
    scrollNudgeCta: {
      label: SITE_WIDE_CTA_BUTTON_LABEL,
      message: 'photo',
      microLine: SERVICE_AREA_COPY.reachTrust,
    },
    waMidMessage: 'photo',
    waEndMessage: 'photo',
    faq: [
      {
        question: 'האם אפשר לבחור פרזול בלי מדידה?',
        answer:
          'אפשר להתחיל מתמונה וסוג פתיחה. לפני רכישה חייבת התאמה למידות הדלת והזכוכית — לרוב אחרי מדידה.',
      },
      {
        question: 'כמה זמן לוקחת התקנה?',
        answer: 'כשהזכוכית והפרזול מוכנים, לרוב יום התקנה אחד בשטח.',
      },
      {
        question: 'האם פרזול זול חוסך כסף?',
        answer:
          'לרוב לא לטווח ארוך — פרזול חלש מוביל לרעידות, נזילות ותיקונים שעולים יותר.',
      },
    ],
  },
  {
    slug: 'miklahon-katan-amvaticon',
    path: '/articles/miklahon-katan-amvaticon',
    metaTitle: 'מה עדיף מקלחון קטן או אמבטיון? | SAB Glass',
    metaDescription:
      'בחדר קטן טעות בבחירה עולה במקום ובמחיר. במאמר — השוואה בין אמבטיון למקלחון קטן, שיקולי עלות ומה מתאים לחלל. שלחו תמונה וקבלו הצעה מדויקת.',
    h1: 'מקלחון קטן או אמבטיון – איך לבחור פתרון נכון לחדר קטן',
    breadcrumbLabel: 'מקלחון קטן או אמבטיון',
    lastUpdated: '2026-04-05',
    readingTimeLabel: 'זמן קריאה: כ־3 דקות',
    featuredSnippetAnswer:
      'אמבטיון מתאים כשמשתמשים באמבטיה ורוצים מחיצת זכוכית חוסכת מקום מעליה, בעוד מקלחון קטן נפרד מתאים כשחשובה אטימה חזקה לתא מקלח ויש מקום לדלת. גודל החלל והשימוש היומיומי מכריעים.',
    intro:
      'כשחדר הרחצה קטן, הבחירה בין מקלחון לאמבטיון יכולה לעשות הבדל גדול בנוחות ובמראה. אמבטיון נשען לרוב על קו אחד או שניים מעל האמבטיה וחוסך מקום לפתיחה; מקלחון קטן או מערכת מלאה נותנים תחושת מקלח נפרדת ומודרנית יותר, אבל דורשים תכנון מדויק של פתיחה ומסילות.',
    earlyCta: {
      label: ARTICLE_EARLY_CONVERSION_CTA_LABEL,
      message: 'photo',
    },
    introAfterCta: [
      'אנו מתקינים בכל אזור המרכז וגם בירושלים, ומתאימים את הפתרון לפי המידות והשימוש שלכם — לא לפי תבנית אחת לכולם.',
    ],
    socialProofLine: ARTICLE_SOCIAL_PROOF_SHORT,
    toc: {
      title: 'מה תמצאו במאמר',
      items: [
        { label: 'מתי אמבטיון', id: 'ambatyoon' },
        { label: 'מתי מקלחון קטן', id: 'miklahon-katan' },
        { label: 'איך לבחור', id: 'eich-livchor' },
        { label: 'שאלות נפוצות', id: 'faq' },
      ],
    },
    introLinked: [
      {
        segments: [
          { text: 'להעמקה בחדר צר: ' },
          { text: 'מקלחון לחדר רחצה קטן — פתרונות חכמים', href: '/articles/miklahon-lachadar-katan' },
          { text: '. המדריך המלא: ' },
          { text: 'המדריך המלא למקלחונים בהתאמה אישית', href: '/miklahon-guide' },
          { text: '. שירות מלא: ' },
          { text: 'מקלחונים בהתאמה אישית מזכוכית', href: '/shower-glass-custom' },
          { text: '.' },
        ],
      },
      {
        segments: [
          { text: 'למחיר משוער: ' },
          { text: 'כמה עולה מקלחון זכוכית', href: '/articles/miklahon-price' },
          { text: '. לדוגמאות ויזואליות: ' },
          { text: 'גלריית עבודות', href: '/catalog' },
          { text: '.' },
        ],
      },
    ],
    midCtaSectionIndex: 1,
    midHook: 'לא בטוחים מה מתאים?',
    ctaMidSubtitle: 'שלחו תמונה ונעזור לכם לבחור',
    sections: [
      {
        id: 'ambatyoon',
        h2: 'מתי לבחור אמבטיון?',
        paragraphs: [
          'אמבטיון מתאים במיוחד כשיש אמבטיה קיימת ורוצים לסגור את אזור הרחצה בלי להרחיב את תא המקלח. הוא פתרון קומפקטי יחסית, לרוב עם פחות נפח זכוכית ממקלחון עצמאי, ומתאים לחללים קטנים מאוד או כשהתקציב והזמן לשינוי מבני מוגבלים.',
        ],
        bullets: [
          'חללים קטנים מאוד שבהם כבר קיימת אמבטיה',
          'צורך בפתרון קומפקטי מעל האמבטיה',
          'התקנה יחסית פשוטה כשהקוים כבר ידועים',
        ],
      },
      {
        id: 'miklahon-katan',
        h2: 'מתי לבחור מקלחון קטן?',
        paragraphs: [
          'מקלחון קטן או מקלחון בהתאמה אישית לפי מידות נותן חוויית מקלח נפרדת, סגירה טובה יותר מפני תרסיס ולעיתים מראה עכשווי יותר. זה מתאים כשיש מקום לדלת הזזה או כנף אחת בלי לחסום את שאר החדר, וכשהשימוש במקלח הוא יומיומי.',
        ],
        bullets: [
          'רצון בנוחות מקסימלית בתוך תא מקלח ייעודי',
          'שימוש יומיומי וצורך באטימה וניקיון קלים יותר',
          'מראה מודרני וקווים נקיים בחדר הרחצה',
        ],
        linkedParagraphs: [
          {
            segments: [
              { text: 'למדריך מקלחון לפי מידות: ' },
              { text: 'מקלחון לפי מידה בהתאמה אישית', href: '/articles/miklahon-lefi-mida-advanced' },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'eich-livchor',
        h2: 'איך לבחור נכון?',
        paragraphs: [
          'הבחירה תלויה בגודל החלל בפועל, בזרימת התנועה (אסלה, כיור, דלת חדר), בצרכים שלכם ובתקציב. תמונה אחת טובה של החדר חוסכת ניחושים ומאפשרת להמליץ על אמבטיון לעומת מקלחון, או על שילוב הזזה/כנף.',
          'שלחו תמונה ונכוון אתכם לפתרון המדויק — כולל מה אפשר לשדרג בהמשך בלי לשבור את כל התכנון.',
        ],
      },
    ],
    ctaMid: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEnd: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEndTitle: 'רוצים החלטה בטוחה?',
    ctaEndSubtitle: 'שלחו תמונה ונגיד לכם בדיוק מה הכי מתאים לחלל שלכם.',
    image: {
      src: '/gallery/2675.png',
      alt: 'אמבטיון זכוכית קומפקטי מול פתרון מקלחון — השוואה ויזואלית לחדר רחצה קטן',
      caption: ARTICLE_IMAGE_CAPTION_CONVERSION,
    },
    galleryClosing: {
      segments: [
        { text: 'לבחירה בין דגמים שונים: ' },
        { text: 'צפו בגלריה', href: '/catalog' },
        { text: '.' },
      ],
    },
    scrollNudgeCta: {
      label: SITE_WIDE_CTA_BUTTON_LABEL,
      message: 'photo',
      microLine: SERVICE_AREA_COPY.reachTrust,
    },
    waMidMessage: 'photo',
    waEndMessage: 'photo',
    faq: [
      {
        question: 'האם אפשר לקבל המלצה בלי להגיע?',
        answer:
          'כן. תמונה של החדר והאמבטיה מספיקה לרוב לכיוון ראשוני; לפני ייצור תתאם מדידה.',
      },
      {
        question: 'כמה זמן לוקחת התקנה?',
        answer: 'בדרך כלל יום אחד בשטח, אחרי ייצור הזכוכית למידות.',
      },
      {
        question: 'האם חייבים מדידה לפני?',
        answer: 'לפני ייצור זכוכית כן — לדיוק מול קירות, פתח וקו האמבטיה.',
      },
    ],
  },
  {
    slug: 'miklahon-lefi-mida-price',
    path: '/articles/miklahon-lefi-mida-price',
    metaTitle: 'כמה עולה מקלחון לפי מידה? מחיר אמיתי | SAB Glass',
    metaDescription:
      'לפני ייצור: מחיר תלוי במידות, זכוכית ופרזול — קל להיתקע על טווח גנרי. במאמר — גורמי מחיר, טווחים והצעה מדויקת. שלחו תמונה וקבלו הצעה מדויקת.',
    h1: 'כמה עולה מקלחון לפי מידה – מחיר והצעת מחיר מדויקת',
    breadcrumbLabel: 'מחיר מקלחון לפי מידה',
    lastUpdated: '2026-04-05',
    readingTimeLabel: 'זמן קריאה: כ־3 דקות',
    featuredSnippetAnswer:
      'מחיר מקלחון לפי מידה מתחיל מ־4,200 ₪ ומגיע עד 6,800 ₪ ומעלה לפתרון מלא, תלוי בשטח הזכוכית שנמדד אצלכם, בגימור, בפתיחה ובפרזול, ובמורכבות מול הקירות והפתח. יוקרתי יכול לעלות מעבר.',
    intro:
      'אם אתם בודקים כמה עולה מקלחון לפי מידה, כנראה שאתם כבר בשלב מתקדם — אחרי שקיבלתם הבנה שסטנדרט מהמדף לא מתאים לחלל שלכם. המחיר משתנה לפי גודל, זכוכית ועיצוב, אבל אפשר לקבל הערכה מדויקת תוך דקות כששולחים תמונה של חדר הרחצה.',
    earlyCta: {
      label: 'שלחו תמונה של חדר הרחצה ונגיד לכם בדיוק כמה זה יעלה',
      message: 'photo',
    },
    introAfterCta: [
      'אנו מתקינים בכל אזור המרכז וגם בירושלים — מהייעוץ הראשוני ועד המדידה וההתקנה, בלי הפתעות מיותרות.',
    ],
    socialProofLine: ARTICLE_SOCIAL_PROOF_SHORT,
    toc: {
      title: 'מה תמצאו בעמוד',
      items: [
        { label: 'מחיר — מה משפיע', id: 'mehir' },
        { label: 'טווח מחירים', id: 'tvach' },
        { label: 'איך מקבלים הצעה', id: 'eich-livchor-hazaa' },
        { label: 'שאלות נפוצות', id: 'faq' },
      ],
    },
    introLinked: [
      {
        segments: [
          { text: 'מדריך מחיר כללי: ' },
          { text: 'כמה עולה מקלחון זכוכית בהתאמה אישית', href: '/articles/miklahon-price' },
          { text: '. המבנה המלא: ' },
          { text: 'המדריך המלא למקלחונים בהתאמה אישית', href: '/miklahon-guide' },
          { text: '. ייצור והתקנה: ' },
          { text: 'מקלחונים בהתאמה אישית מזכוכית', href: '/shower-glass-custom' },
          { text: '.' },
        ],
      },
      {
        segments: [
          { text: 'רוצים להבין את התהליך לפני המחיר? ' },
          { text: 'מקלחון לפי מידה בהתאמה אישית — המדריך המלא', href: '/articles/miklahon-lefi-mida-advanced' },
          { text: '.' },
        ],
      },
    ],
    midCtaSectionIndex: 1,
    midHook: 'לא חייבים לנחש — שלחו תמונה וקבלו מחיר מדויק',
    ctaMidSubtitle: 'בוואטסאפ נחזור עם כיוון והערכה לפי התמונה',
    sections: [
      {
        id: 'mehir',
        h2: 'מה משפיע על המחיר?',
        paragraphs: [
          'מקלחון לפי מידה נספר לפי מטרים רבועים של זכוכית, סוג הפתיחה והעומס על הפרזול. ככל שהפתרון מותאם יותר לקירות לא ישרים, לפינות או לפתח לא סטנדרטי, כך גדלים גם זמן העבודה בשטח וגם רמת הדיוק הנדרשת — וזה משתקף במחיר.',
        ],
        bullets: [
          'גודל המקלחון — שטח זכוכית, גובה ורוחב הדלת',
          'סוג הזכוכית — עובי, שקוף/חלבי/פסים',
          'פרזול — הזזה, צירים, גימור (נירוסטה, שחור מט, כרום)',
          'מורכבות ההתקנה — אלכסונים, גמר אריחים, גישה לפתח',
        ],
        linkedParagraphs: [
          {
            segments: [
              { text: 'לעומק בפרזול: ' },
              { text: 'פרזול למקלחונים — איך לבחור נכון', href: '/articles/parzol-le-miklahon' },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'tvach',
        h2: 'טווח מחירים',
        paragraphs: [
          'להלן טווחים להמחשה בלבד, באותה שיטת תמחור כמו במאמר המחיר הכללי שלנו. המספר הסופי נקבע אחרי תמונה, תיאור קצר ולרוב מדידה בשטח.',
        ],
        bullets: [
          'מקלחון לפי מידה בסיסי: החל מ־4,200 ₪',
          'מקלחון בהתאמה אישית (מידות + עיצוב מלא): החל מ־6,800 ₪',
          'מקלחון יוקרתי: לפי עיצוב, חומרים ומורכבות — הצעה אישית',
        ],
        linkedParagraphs: [
          {
            segments: [
              { text: 'לטבלת מחירים מפורטת יותר: ' },
              { text: 'כמה עולה מקלחון זכוכית', href: '/articles/miklahon-price' },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'eich-livchor-hazaa',
        h2: 'איך מקבלים הצעת מחיר?',
        paragraphs: [
          'פשוט שולחים תמונה של חדר הרחצה — עדיף שתי זוויות אם אפשר. אנחנו מכוונים אתכם בדיוק למה שמתאים: סוג פתיחה, עובי זכוכית והאם מדובר בפתרון בסיסי, מלא או יוקרתי.',
          'אנו מתקינים בכל אזור המרכז וגם בירושלים; אחרי הייעוץ הראשוני מתאמים מדידה כשצריך, ואז מגיעה הצעה שמשקפת את המציאות בשטח.',
        ],
      },
    ],
    ctaMid: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEnd: 'שלחו תמונה עכשיו',
    ctaEndTitle: 'רוצים לדעת כמה זה יעלה אצלכם בדיוק?',
    ctaEndSubtitle: 'שלחו תמונה עכשיו — נחזור עם הערכה ברורה בוואטסאפ.',
    image: {
      src: '/gallery/2707.png',
      alt: 'מקלחון זכוכית בהתאמה אישית לפי מידות — דוגמה לפרויקט שבו המחיר נקבע לפי גודל, זכוכית ופרזול',
      caption: ARTICLE_IMAGE_CAPTION_CONVERSION,
    },
    galleryClosing: {
      segments: [
        { text: 'דוגמאות נוספות לעלויות לפי סגנון: ' },
        { text: 'גלריית מקלחונים', href: '/catalog' },
        { text: '.' },
      ],
    },
    scrollNudgeCta: {
      label: SITE_WIDE_CTA_BUTTON_LABEL,
      message: 'photo',
      microLine: SERVICE_AREA_COPY.reachTrust,
    },
    waMidMessage: 'photo',
    waEndMessage: 'photo',
    faq: [
      {
        question: 'האם אפשר לקבל מחיר בלי להגיע למקום?',
        answer:
          'כן. תמונה של חדר הרחצה (ועדיף שתי זוויות) מספיקה לרוב להערכה. אם נדרש — מדידה לפני ייצור.',
      },
      {
        question: 'כמה זמן לוקחת התקנה?',
        answer: 'בדרך כלל יום אחד בשטח, אחרי ייצור הזכוכית למידות.',
      },
      {
        question: 'האם חייבים מדידה לפני?',
        answer: 'לפני הזמנת ייצור כן — לדיוק מול קירות, פתח ואלכסונים.',
      },
    ],
  },
  {
    slug: 'amvaticon-price',
    path: '/articles/amvaticon-price',
    metaTitle: 'כמה עולה אמבטיון? מחיר אמיתי | SAB Glass',
    metaDescription:
      'לפני התקנה קל להתבלבל בין טווחי מחיר שונים. במאמר — מה זה אמבטיון, טווחים להמחשה ומה חשוב לדעת לפני הזמנה. שלחו תמונה וקבלו הצעה מדויקת.',
    h1: 'כמה עולה אמבטיון – מחיר ומה חשוב לדעת לפני שמתקינים',
    breadcrumbLabel: 'מחיר אמבטיון',
    lastUpdated: '2026-04-05',
    readingTimeLabel: 'זמן קריאה: כ־3 דקות',
    featuredSnippetAnswer:
      'מחיר אמבטיון מתחיל מ־3,800 ₪ ומגיע עד 5,200 ₪ בגרסת התאמה אישית, תלוי ברוחב, גובה, עובי זכוכית, סוג פתיחה (כנף או הזזה) והתאמה לקו האמבטיה. מעבר לכך הסכום עולה לפי מפרט.',
    intro:
      'אמבטיון הוא פתרון מצוין לחדרי רחצה קטנים — הוא סוגר את אזור האמבטיה בלי לבנות תא מקלח נפרד. לפני שמתקינים, חשוב להבין מה משפיע על המחיר ומה האפשרויות, כדי שלא תופתעו אחרי שכבר הזמנתם זכוכית.',
    earlyCta: {
      label: 'שלחו תמונה ונכוון אתכם לפתרון הכי מתאים',
      message: 'photo',
    },
    introAfterCta: [
      'אנו מתקינים בכל אזור המרכז וגם בירושלים — אמבטיונים, מקלחונים ומערכות זכוכית בהתאמה למידות.',
    ],
    socialProofLine: ARTICLE_SOCIAL_PROOF_SHORT,
    toc: {
      title: 'מה תמצאו בעמוד',
      items: [
        { label: 'מה זה אמבטיון', id: 'mah-ze' },
        { label: 'מחיר', id: 'mehir' },
        { label: 'איך לבחור', id: 'eich-livchor' },
        { label: 'שאלות נפוצות', id: 'faq' },
      ],
    },
    introLinked: [
      {
        segments: [
          { text: 'השוואה מעשית בין פתרונות: ' },
          { text: 'מקלחון קטן או אמבטיון — איך לבחור נכון', href: '/articles/miklahon-katan-amvaticon' },
          { text: '. ' },
          { text: 'המדריך המלא למקלחונים בהתאמה אישית', href: '/miklahon-guide' },
          { text: '. ' },
          { text: 'מקלחונים בהתאמה אישית מזכוכית', href: '/shower-glass-custom' },
          { text: ' — שירות מלא.' },
        ],
      },
      {
        segments: [
          { text: 'למחיר מקלחון לפי מידה: ' },
          { text: 'כמה עולה מקלחון לפי מידה', href: '/articles/miklahon-lefi-mida-price' },
          { text: '.' },
        ],
      },
    ],
    midCtaSectionIndex: 1,
    midHook: 'לא בטוחים מה מתאים?',
    ctaMidSubtitle: 'שלחו תמונה — נסביר מה כדאי לכם',
    sections: [
      {
        id: 'mah-ze',
        h2: 'מה זה אמבטיון?',
        paragraphs: [
          'אמבטיון הוא מערכת זכוכית (לרוב פאנל קבוע + דלת או הזזה) שמותקנת מעל או סביב האמבטיה, כדי למנוע התזת מים ולשמור על ניקיון. הוא פתרון קומפקטי יחסית שמתאים במיוחד כשאין מקום לתא מקלח גדול.',
        ],
        bullets: ['פתרון קומפקטי יחסית לחדר קטן', 'מתאים כשכבר יש אמבטיה במקום', 'חוסך מקום לעומת תא מקלח מלא לפעמים'],
      },
      {
        id: 'mehir',
        h2: 'כמה עולה אמבטיון?',
        paragraphs: [
          'המחיר תלוי ברוחב, בגובה, בעובי הזכוכית ובסוג הפתיחה. להלן טווחים להמחשה בלבד — המספר המדויק אצלכם יוצא מתמונה ומדידה.',
        ],
        bullets: [
          'אמבטיון בסיסי: החל מ־3,800 ₪',
          'בהתאמה אישית לפי מידות החלל: החל מ־5,200 ₪',
        ],
        linkedParagraphs: [
          {
            segments: [
              { text: 'לטבלת מחירים כללית של מקלחונים: ' },
              { text: 'כמה עולה מקלחון זכוכית', href: '/articles/miklahon-price' },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'eich-livchor',
        h2: 'אמבטיון או מקלחון?',
        paragraphs: [
          'תלוי בגודל החלל, בזרימת התנועה ובאיך שאתם משתמשים בחדר מדי יום. אמבטיון נפוץ כשהאמבטיה נשארת בשימוש או כשהמרחב מוגבל; מקלחון נפרד מתאים כשיש מקום לתא מקלח ורוצים הפרדה חזקה יותר.',
          'אנחנו נעזור לכם לבחור נכון — שלחו תמונה ונציג את האפשרויות בצורה ברורה, בלי מילים מסובכות.',
        ],
      },
    ],
    ctaMid: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEnd: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEndTitle: 'רוצים מחיר לאמבטיון אצלכם?',
    ctaEndSubtitle: 'שלחו תמונה ונגיד לכם בדיוק מה הכי מתאים — וכמה זה אמור לעלות בערך.',
    image: {
      src: '/gallery/2674.png',
      alt: 'אמבטיון זכוכית סטנדרטי מעל אמבטיה — דוגמה לפתרון קומפקטי שמתאים לחדר רחצה קטן',
      caption: ARTICLE_IMAGE_CAPTION_CONVERSION,
    },
    galleryClosing: {
      segments: [
        { text: 'עוד אמבטיונים ומקלחונים: ' },
        { text: 'צפו בגלריה', href: '/catalog' },
        { text: '.' },
      ],
    },
    scrollNudgeCta: {
      label: SITE_WIDE_CTA_BUTTON_LABEL,
      message: 'photo',
      microLine: SERVICE_AREA_COPY.reachTrust,
    },
    waMidMessage: 'photo',
    waEndMessage: 'photo',
    faq: [
      {
        question: 'האם אפשר לקבל מחיר בלי להגיע?',
        answer:
          'כן. תמונה של החלל והאמבטיה בדרך כלל מספיקה להערכה; לפני ייצור תתאם מדידה כשצריך.',
      },
      {
        question: 'כמה זמן לוקחת התקנה?',
        answer: 'לרוב בין כמה שעות ליום אחד בשטח, לפי מורכבות הפתרון.',
      },
      {
        question: 'האם חייבים מדידה לפני?',
        answer: 'לפני הזמנת זכוכית כן — כדי להתאים לרוחב, גובה וקו האמבטיה.',
      },
    ],
  },
  {
    slug: 'tikun-miklahon',
    path: '/articles/tikun-miklahon',
    metaTitle: 'מה עדיף תיקון או החלפת מקלחון? | SAB Glass',
    metaDescription:
      'לא בטוחים אם לתקן או להחליף — טעות יכולה לעלות ביוקר ובנזילות. במאמר — מתי משתלם כל פתרון ומה משפיע על המחיר. שלחו תמונה וקבלו הצעה מדויקת.',
    h1: 'תיקון מקלחון – מתי מתקנים ומתי עדיף להחליף',
    breadcrumbLabel: 'תיקון מקלחון',
    lastUpdated: '2026-04-05',
    readingTimeLabel: 'זמן קריאה: כ־3 דקות',
    featuredSnippetAnswer:
      'תיקון מתאים כשהזכוכית תקינה והבעיה נקודתית בציר, במסילה או באטימה, בעוד החלפה מתאימה כשהזכוכית שבורה, ההתקנה לא בטוחה או שהתקלה חוזרת אחרי תיקון. כך נמנע תשלום כפול על אותו חלל.',
    intro:
      'מקלחון שהתקלקל לא תמיד חייבים להחליף. לפעמים תיקון ממוקד — ציר, גלילה במסילה או כיוון דלת — יכול לפתור את הבעיה במהירות ובעלות נמוכה יחסית. מצד שני, יש מצבים שבהם החלפה מלאה בטוחה וחסכונית יותר לאורך זמן.',
    earlyCta: {
      label: 'שלחו תמונה ונגיד לכם אם צריך תיקון או החלפה',
      message: 'photo',
    },
    introAfterCta: [
      'אנו מתקינים בכל אזור המרכז וגם בירושלים, ומלווים לקוחות גם כשמדובר בשדרוג או בבירור מצב לפני החלטה.',
    ],
    socialProofLine: ARTICLE_SOCIAL_PROOF_SHORT,
    toc: {
      title: 'מה תמצאו בעמוד',
      items: [
        { label: 'מתי לתקן', id: 'tikun' },
        { label: 'מתי להחליף', id: 'hachlafa' },
        { label: 'מחיר תיקון', id: 'mehir' },
        { label: 'שאלות נפוצות', id: 'faq' },
      ],
    },
    introLinked: [
      {
        segments: [
          { text: 'מתכננים מקלחון חדש לגמרי? ' },
          { text: 'מקלחון לפי מידה בהתאמה אישית — המדריך המלא', href: '/articles/miklahon-lefi-mida-advanced' },
          { text: '. ' },
          { text: 'המדריך המלא למקלחונים בהתאמה אישית', href: '/miklahon-guide' },
          { text: '. ' },
          { text: 'מקלחונים בהתאמה אישית מזכוכית', href: '/shower-glass-custom' },
          { text: '.' },
        ],
      },
      {
        segments: [
          { text: 'לתחזוקה שוטפת: ' },
          { text: 'תחזוקת מקלחון לאורך זמן', href: '/articles/tachzuka-miklahon' },
          { text: '. למחיר החלפה מלאה: ' },
          { text: 'כמה עולה מקלחון זכוכית', href: '/articles/miklahon-price' },
          { text: '.' },
        ],
      },
    ],
    midCtaSectionIndex: 1,
    midHook: 'לא בטוחים?',
    ctaMidSubtitle: 'שלחו תמונה ונבדוק יחד',
    sections: [
      {
        id: 'tikun',
        h2: 'מתי אפשר לתקן?',
        paragraphs: [
          'כשהזכוכית שלמה והמסגרת יציבה, הרבה תקלות נפתרות בתיקון ממוקד. חשוב לזהות את מקור הבעיה — לפעמים מדובר ברופף בברגים, בציר שנשחק או במסילת הזזה שמצטברת אבנית.',
        ],
        bullets: ['בעיה בצירים או בריכוך הפתיחה', 'דלת שלא נסגרת בצורה אחידה — לעיתים כיוון או אטימה', 'פרזול רופף או ידית שבורה (החלפת רכיב)'],
        linkedParagraphs: [
          {
            segments: [
              { text: 'להבנת פרזול: ' },
              { text: 'פרזול למקלחונים — איך לבחור נכון', href: '/articles/parzol-le-miklahon' },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'hachlafa',
        h2: 'מתי עדיף להחליף?',
        paragraphs: [
          'כשהזכוכית סדוקה או פגועה, כשההתקנה הישנה לא עומדת בתקן או כשאותה תקלה חוזרת אחרי תיקון — לרוב משתלם להחליף מערכת שלמה. מקלחון חדש עם מדידה נכונה נותן אטימה טובה יותר, בטיחות ושקט נפשי.',
        ],
        bullets: [
          'זכוכית סדוקה או שריטות עמוקות שפוגעות במבנה',
          'התקנה ישנה שלא ניתנת להתאמה בטוחה',
          'בעיות חוזרות (נזילות, דלת «נופלת») אחרי תיקונים',
        ],
        linkedParagraphs: [
          {
            segments: [
              { text: 'למחיר מקלחון חדש: ' },
              { text: 'כמה עולה מקלחון לפי מידה', href: '/articles/miklahon-lefi-mida-price' },
              { text: '.' },
            ],
          },
        ],
      },
      {
        id: 'mehir',
        h2: 'כמה עולה תיקון מקלחון?',
        paragraphs: [
          'המחיר משתנה לפי סוג התקלה — החלפת ציר או רכיב קטן זה לא אותו דבר כמו פירוק והרכבה מחדש. בדרך כלל תיקון נקודתי עולה פחות מהחלפת מקלחון שלם, אבל אם התיקון הוא זמני בלבד, עדיף לחשב את העלות הכוללת על פני שנים.',
        ],
      },
    ],
    ctaMid: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEnd: SITE_WIDE_CTA_BUTTON_LABEL,
    ctaEndTitle: 'רוצים לדעת מה הכי נכון אצלכם?',
    ctaEndSubtitle: 'שלחו תמונה ונגיד לכם מה הפתרון הכי נכון — תיקון, שדרוג או החלפה.',
    image: {
      src: '/gallery/2703.png',
      alt: 'מקלחון זכוכית מותקן — בדיקת צירים, אטימה ופרזול לפני החלטה בין תיקון להחלפה',
      caption: ARTICLE_IMAGE_CAPTION_CONVERSION,
    },
    galleryClosing: {
      segments: [
        { text: 'להשראה לפתרון חדש: ' },
        { text: 'גלריית מקלחונים', href: '/catalog' },
        { text: '.' },
      ],
    },
    scrollNudgeCta: {
      label: SITE_WIDE_CTA_BUTTON_LABEL,
      message: 'photo',
      microLine: SERVICE_AREA_COPY.reachTrust,
    },
    waMidMessage: 'photo',
    waEndMessage: 'photo',
    faq: [
      {
        question: 'האם אפשר לדעת אם לתקן בלי להגיע?',
        answer:
          'לעיתים כן מתמונה. לבעיה מורכבת או נזילה — לרוב נדרשת בדיקה קצרה בשטח.',
      },
      {
        question: 'כמה זמן לוקח תיקון?',
        answer: 'תיקון נקודתי לרוב ביקור אחד; חלקים מיוחדים עלולים להאריך לימים.',
      },
      {
        question: 'האם תמיד משתלם לתקן?',
        answer:
          'לא. זכוכית או מסגרת פגועים, או תקלה שחוזרת — לעיתים החלפה בטוחה וחסכונית יותר.',
      },
    ],
  },
]

export const articlesBySlug = Object.fromEntries(articlesList.map((a) => [a.slug, a])) as Record<
  ArticleSlug,
  ArticleContent
>

export function articleLinkTitle(a: ArticleContent): string {
  return a.breadcrumbLabel ?? a.h1
}

export function formatArticleLastUpdated(isoDate: string): string {
  const normalized = isoDate.includes('T') ? isoDate : `${isoDate}T12:00:00`
  const d = new Date(normalized)
  if (Number.isNaN(d.getTime())) return isoDate
  return d.toLocaleDateString('he-IL', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function getRelatedArticlesForArticle(article: ArticleContent, limit = 3): ArticleContent[] {
  if (article.relatedSlugs?.length) {
    return article.relatedSlugs
      .filter((s) => s !== article.slug)
      .slice(0, limit)
      .map((s) => articlesBySlug[s])
      .filter((x): x is ArticleContent => Boolean(x))
  }
  const out: ArticleContent[] = []
  for (const s of ARTICLE_RELATED_PRIORITY) {
    if (s === article.slug) continue
    const a = articlesBySlug[s]
    if (a) out.push(a)
    if (out.length >= limit) break
  }
  return out
}

export function getArticleBySlug(slug: string): ArticleContent | undefined {
  return articlesBySlug[slug as ArticleSlug]
}
