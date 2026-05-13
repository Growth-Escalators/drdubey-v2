'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// Fires a GA4 page_view event on every App Router navigation. Next.js does
// not auto-fire pageviews when the URL changes via client-side navigation, so
// without this listener GA4 would only see the initial landing page.
export function AnalyticsListener({ gaId }: { gaId: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!gaId) return
    const w = window as unknown as {
      gtag?: (...args: unknown[]) => void
    }
    if (typeof w.gtag !== 'function') return

    const qs = searchParams?.toString()
    const url = qs ? `${pathname}?${qs}` : pathname
    w.gtag('config', gaId, { page_path: url })
  }, [gaId, pathname, searchParams])

  return null
}
