import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { PREFETCH_PATHS } from '../config/prefetchRoutes'
import { getSiteUrl, OG_IMAGE_ABSOLUTE_URL } from '../config/siteUrl'
import { ARTICLE_SEO, articlesList, getArticleBySlug } from '../content/seoContent'
import { getBreadcrumbs, getSeoForPath } from '../content/seoPageMeta'

function canonicalHref(pathname: string, base: string): string {
  if (pathname === '/' || pathname === '') return `${base}/`
  const normalized = pathname.replace(/\/+$/, '') || '/'
  return `${base}${normalized}`
}

function setCanonicalHref(href: string) {
  const list = document.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]')
  if (list.length === 0) {
    const el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    el.setAttribute('href', href)
    document.head.appendChild(el)
    return
  }
  list[0].setAttribute('href', href)
  for (let i = 1; i < list.length; i++) {
    list[i].remove()
  }
}

function upsertMetaProperty(property: string, content: string) {
  const list = document.querySelectorAll<HTMLMetaElement>(`meta[property="${property}"]`)
  let el = list[0]
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
  for (let i = 1; i < list.length; i++) {
    list[i].remove()
  }
}

function setMetaDescription(content: string) {
  const list = document.querySelectorAll<HTMLMetaElement>('meta[name="description"]')
  let el = list[0]
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', 'description')
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
  for (let i = 1; i < list.length; i++) {
    list[i].remove()
  }
}

function setMetaName(name: string, content: string) {
  const list = document.querySelectorAll<HTMLMetaElement>(`meta[name="${name}"]`)
  let el = list[0]
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
  for (let i = 1; i < list.length; i++) {
    list[i].remove()
  }
}

function schedulePrefetchImportantRoutes() {
  const run = () => {
    for (const path of PREFETCH_PATHS) {
      const safeId = `route-prefetch-${path.replace(/[^a-zA-Z0-9]/g, '-')}`
      if (document.getElementById(safeId)) continue
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = path
      link.id = safeId
      document.head.appendChild(link)
    }
  }
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(run, { timeout: 4500 })
  } else {
    window.setTimeout(run, 2000)
  }
}

/** קנוניקל, מטא, og:url, og:title/description, BreadcrumbList לפי נתיב */
export function SeoHead() {
  const { pathname } = useLocation()
  const prefetchStarted = useRef(false)

  useLayoutEffect(() => {
    if (prefetchStarted.current) return
    prefetchStarted.current = true
    schedulePrefetchImportantRoutes()
  }, [])

  useLayoutEffect(() => {
    const base = getSiteUrl()
    const normPath = pathname.replace(/\/+$/, '') || '/'
    const href = canonicalHref(pathname, base)
    setCanonicalHref(href)
    upsertMetaProperty('og:url', href)

    const seo = getSeoForPath(pathname)
    document.title = seo.title
    setMetaDescription(seo.description)
    setMetaName(
      'robots',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    )
    upsertMetaProperty('og:title', seo.title)
    upsertMetaProperty('og:description', seo.description)
    upsertMetaProperty('og:type', 'website')

    upsertMetaProperty('og:image', OG_IMAGE_ABSOLUTE_URL)
    upsertMetaProperty('og:image:secure_url', OG_IMAGE_ABSOLUTE_URL)
    upsertMetaProperty('og:image:type', 'image/jpeg')
    upsertMetaProperty('og:image:width', '1200')
    upsertMetaProperty('og:image:height', '630')

    setMetaName('twitter:card', 'summary_large_image')
    setMetaName('twitter:title', seo.title)
    setMetaName('twitter:description', seo.description)
    setMetaName('twitter:image', OG_IMAGE_ABSOLUTE_URL)

    const crumbs = getBreadcrumbs(pathname)
    const existing = document.getElementById('seo-jsonld-breadcrumb')
    if (crumbs && crumbs.length > 0) {
      const itemListElement = crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.path === '/' ? `${base}/` : `${base}${c.path}`,
      }))
      const data = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement,
      }
      const script = (existing as HTMLScriptElement | null) ?? document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'seo-jsonld-breadcrumb'
      script.textContent = JSON.stringify(data)
      if (!existing) document.head.appendChild(script)
    } else if (existing) {
      existing.remove()
    }

    const itemListId = 'seo-jsonld-articles-itemlist'
    const existingItemList = document.getElementById(itemListId)
    if (normPath === '/articles') {
      const data = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'מדריך מקלחונים וזכוכית בהתאמה אישית',
        description: 'מאמרים ומדריכים לבחירת מקלחון, מחיר, זכוכית וחלל',
        numberOfItems: articlesList.length,
        itemListElement: articlesList.map((a, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: a.h1,
          url: `${base}${a.path}`,
        })),
      }
      const script = (existingItemList as HTMLScriptElement | null) ?? document.createElement('script')
      script.type = 'application/ld+json'
      script.id = itemListId
      script.textContent = JSON.stringify(data)
      if (!existingItemList) document.head.appendChild(script)
    } else if (existingItemList) {
      existingItemList.remove()
    }

    const faqScriptId = 'seo-jsonld-faq'
    const existingFaq = document.getElementById(faqScriptId)
    const articleSlug = pathname.match(/^\/articles\/([^/]+)$/)?.[1]
    const pageArticle = articleSlug ? getArticleBySlug(articleSlug) : undefined
    if (pageArticle?.faq && pageArticle.faq.length > 0) {
      const data = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: pageArticle.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
      const script = (existingFaq as HTMLScriptElement | null) ?? document.createElement('script')
      script.type = 'application/ld+json'
      script.id = faqScriptId
      script.textContent = JSON.stringify(data)
      if (!existingFaq) document.head.appendChild(script)
    } else if (existingFaq) {
      existingFaq.remove()
    }

    const articleLdId = 'seo-jsonld-article'
    const existingArticle = document.getElementById(articleLdId)
    if (pageArticle) {
      const articleLd: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: pageArticle.h1,
        description: pageArticle.metaDescription,
        inLanguage: 'he-IL',
        author: {
          '@type': 'Person',
          name: ARTICLE_SEO.authorName,
        },
        publisher: {
          '@type': 'Organization',
          name: ARTICLE_SEO.orgName,
          url: base,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': href,
        },
      }
      if (pageArticle.lastUpdated) {
        articleLd.dateModified = pageArticle.lastUpdated
      }
      const script = (existingArticle as HTMLScriptElement | null) ?? document.createElement('script')
      script.type = 'application/ld+json'
      script.id = articleLdId
      script.textContent = JSON.stringify(articleLd)
      if (!existingArticle) document.head.appendChild(script)
    } else if (existingArticle) {
      existingArticle.remove()
    }
  }, [pathname])

  return null
}
