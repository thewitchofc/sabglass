import { onCLS, onLCP, type Metric } from 'web-vitals'

function pushToDataLayer(metric: Metric) {
  const w = window as Window & { dataLayer?: Record<string, unknown>[] }
  if (!Array.isArray(w.dataLayer)) return
  const valueForGa =
    metric.name === 'CLS' ? Math.round(metric.value * 1000) : Math.round(metric.value)
  w.dataLayer.push({
    event: 'web_vitals',
    web_vitals_name: metric.name,
    web_vitals_value: valueForGa,
    web_vitals_id: metric.id,
    web_vitals_rating: metric.rating,
  })
}

function report(metric: Metric) {
  if (import.meta.env.DEV) {
    globalThis.console.info('[SAB vitals]', metric.name, metric.value, metric.rating ?? '')
  }
  pushToDataLayer(metric)
}

/** מדידת LCP ו־CLS — dataLayer בפרודקשן; בפיתוח גם קונסול */
export function initWebVitals() {
  onLCP(report)
  onCLS(report)
}
