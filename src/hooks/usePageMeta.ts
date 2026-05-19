import { useEffect } from 'react'

interface PageMeta {
  title: string
  description: string
  canonical: string
}

const DEFAULTS = {
  title: 'FDE Singapore | Embedded AI Deployment for Singapore SMEs',
  description: 'Singapore\'s only embedded AI deployment partner built for SMEs. HPC embeds inside your operations to find what\'s leaking and deploy working systems — not recommendations.',
  canonical: 'https://fde.sg/',
}

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

export function usePageMeta({ title, description, canonical }: PageMeta) {
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    const canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (canonicalEl) canonicalEl.href = canonical

    return () => {
      document.title = DEFAULTS.title
      setMeta('meta[name="description"]', 'content', DEFAULTS.description)
      setMeta('meta[property="og:title"]', 'content', DEFAULTS.title)
      setMeta('meta[property="og:description"]', 'content', DEFAULTS.description)
      setMeta('meta[property="og:url"]', 'content', DEFAULTS.canonical)
      setMeta('meta[name="twitter:title"]', 'content', DEFAULTS.title)
      setMeta('meta[name="twitter:description"]', 'content', DEFAULTS.description)
      if (canonicalEl) canonicalEl.href = DEFAULTS.canonical
    }
  }, [title, description, canonical])
}
