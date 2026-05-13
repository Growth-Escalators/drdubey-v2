'use client'
import { useState } from 'react'

interface FAQ {
  q: string
  a: string
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm font-semibold text-gray-900 pr-4">{faq.q}</span>
            <span className="text-blue-600 text-lg flex-shrink-0">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
