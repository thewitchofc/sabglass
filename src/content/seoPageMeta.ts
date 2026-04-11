import { premiumCopy } from './premium'
import { getArticleBySlug, localLandingCenterIsraelPage, pillarMiklahonGuidePage, serviceShowerPage } from './seoContent'

/** כותרת ותיאור דף הבית — משותפים ל־title, meta description ו־Open Graph */
export const HOME_TITLE = 'SAB Glass - מקלחונים בהתאמה אישית'
const HOME_DESC =
  'מקלחוני זכוכית בהתאמה אישית, התקנה מקצועית ועיצוב יוקרתי'

const ARTICLES_INDEX_TITLE = 'מאמרים מקלחונים – כמה עולה ומחיר | SAB Glass'
const ARTICLES_INDEX_DESC =
  'מאמרים: בחירה, מחיר, זכוכית וחלל. שלחו תמונה וקבלו הצעה מדויקת.'

const CATALOG_DESC =
  'צילומים מהשטח, מקלחונים, אמבטיונים ומראות בהתאמה אישית. שלחו תמונה ל־SAB Glass לייעוץ והצעה מדויקת.'

/** כותרת ותיאור לכל נתיב (למטא דינמי ב־SPA) */
export function getSeoForPath(pathname: string): { title: string; description: string } {
  const norm = pathname.replace(/\/+$/, '') || '/'

  if (norm === '/') return { title: HOME_TITLE, description: HOME_DESC }
  if (norm === '/catalog') {
    return {
      title: `${premiumCopy.gallery.title} | SAB Glass`,
      description: CATALOG_DESC,
    }
  }
  if (norm === '/shower-glass-custom') {
    return { title: serviceShowerPage.metaTitle, description: serviceShowerPage.metaDescription }
  }
  if (norm === '/articles') {
    return { title: ARTICLES_INDEX_TITLE, description: ARTICLES_INDEX_DESC }
  }
  if (norm === '/miklahon-guide') {
    return {
      title: pillarMiklahonGuidePage.metaTitle,
      description: pillarMiklahonGuidePage.metaDescription,
    }
  }
  if (norm === '/miklahon-center-israel' || norm === '/miklahon-rishon-lezion') {
    return {
      title: localLandingCenterIsraelPage.metaTitle,
      description: localLandingCenterIsraelPage.metaDescription,
    }
  }
  if (norm.startsWith('/articles/')) {
    const slug = norm.slice('/articles/'.length)
    const a = getArticleBySlug(slug)
    if (a) return { title: a.metaTitle, description: a.metaDescription }
  }
  return { title: HOME_TITLE, description: HOME_DESC }
}

export type BreadcrumbItem = { name: string; path: string }

export function getBreadcrumbs(pathname: string): BreadcrumbItem[] | null {
  const norm = pathname.replace(/\/+$/, '') || '/'
  const items: BreadcrumbItem[] = [{ name: 'דף הבית', path: '/' }]

  if (norm === '/') return null
  if (norm === '/catalog') {
    items.push({ name: premiumCopy.gallery.title, path: '/catalog' })
    return items
  }
  if (norm === '/shower-glass-custom') {
    items.push({ name: 'מקלחונים בהתאמה אישית', path: '/shower-glass-custom' })
    return items
  }
  if (norm === '/articles') {
    items.push({ name: 'מאמרים', path: '/articles' })
    return items
  }
  if (norm === '/miklahon-guide') {
    items.push({ name: 'מאמרים', path: '/articles' })
    items.push({ name: pillarMiklahonGuidePage.breadcrumbLabel, path: pillarMiklahonGuidePage.path })
    return items
  }
  if (norm === '/miklahon-center-israel') {
    items.push({
      name: localLandingCenterIsraelPage.breadcrumbLabel,
      path: localLandingCenterIsraelPage.path,
    })
    return items
  }
  if (norm === '/miklahon-rishon-lezion') {
    items.push({
      name: localLandingCenterIsraelPage.breadcrumbLabel,
      path: localLandingCenterIsraelPage.path,
    })
    return items
  }
  if (norm.startsWith('/articles/')) {
    const slug = norm.slice('/articles/'.length)
    const a = getArticleBySlug(slug)
    if (!a) return null
    items.push({ name: 'מאמרים', path: '/articles' })
    items.push({ name: a.breadcrumbLabel ?? a.h1, path: a.path })
    return items
  }
  return null
}

