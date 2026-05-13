import { HINDI_PAGES } from '@/lib/hindi-pages'
import { PROCEDURE_PAGES } from '@/lib/procedure-pages'
import { CONDITION_PAGES } from '@/lib/condition-pages'
import { notFound } from 'next/navigation'
import { BreadcrumbNav, CTASection, FAQAccordion, TrustBadges } from '@/components/pages'
import type { Metadata } from 'next'
import { defaultSEO } from '@/lib/seo.config'

export async function generateStaticParams() {
  return HINDI_PAGES.map(p => ({ page: p.slug }))
}

// Resolve the English URL for a Hindi page's `englishSlug` by looking it up
// in both PROCEDURE_PAGES and CONDITION_PAGES. Returns the absolute URL or
// null if no English twin exists.
function resolveEnglishUrl(englishSlug?: string): string | null {
  if (!englishSlug) return null
  if (PROCEDURE_PAGES.some((p: { slug: string }) => p.slug === englishSlug)) {
    return `${defaultSEO.siteUrl}/procedures/${englishSlug}`
  }
  if (CONDITION_PAGES.some((c: { slug: string }) => c.slug === englishSlug)) {
    return `${defaultSEO.siteUrl}/conditions/${englishSlug}`
  }
  return null
}

export async function generateMetadata(
  { params }: { params: { page: string } }
): Promise<Metadata> {
  const page = HINDI_PAGES.find(p => p.slug === params.page)
  if (!page) return {}
  const canonical = `${defaultSEO.siteUrl}/hindi/${page.slug}`
  const englishUrl = resolveEnglishUrl(page.englishSlug)

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical,
      languages: englishUrl
        ? {
            'en-IN': englishUrl,
            'hi-IN': canonical,
            'x-default': englishUrl,
          }
        : undefined,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      locale: 'hi_IN',
      alternateLocale: englishUrl ? ['en_IN'] : undefined,
      type: 'article',
    },
  }
}

export default function HindiPage({ params }: { params: { page: string } }) {
  const page = HINDI_PAGES.find(p => p.slug === params.page)
  if (!page) return notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'होम', item: 'https://www.drdubay.in' },
      { '@type': 'ListItem', position: 2, name: 'हिंदी', item: 'https://www.drdubay.in/hindi' },
      { '@type': 'ListItem', position: 3, name: page.title, item: `https://www.drdubay.in/hindi/${page.slug}` },
    ],
  }

  const faqSchema = page.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <BreadcrumbNav
          crumbs={[
            { label: 'होम', href: '/' },
            { label: 'हिंदी', href: '/hindi' },
            { label: page.title },
          ]}
        />

        {/* English version link */}
        {page.englishSlug && (
          <div className="mb-6 text-xs text-gray-500">
            Read in English:{' '}
            <a
              href={`/conditions/${page.englishSlug}`}
              className="text-blue-600 hover:underline"
            >
              {page.englishSlug.replace(/-/g, ' ')}
            </a>
          </div>
        )}

        {/* Hero */}
        <div className="mb-8">
          <span className="inline-block bg-orange-50 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {page.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4" lang="hi">
            {page.h1}
          </h1>
          <p className="text-gray-600 text-base leading-relaxed" lang="hi">{page.intro}</p>
        </div>

        <TrustBadges />

        {/* Content Sections */}
        {page.sections.map((section, i) => (
          <section key={i} className="my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" lang="hi">
              {section.heading}
            </h2>
            {section.content && (
              <p className="text-gray-600 leading-relaxed mb-4" lang="hi">
                {section.content}
              </p>
            )}
            {section.list && section.list.length > 0 && (
              <ul className="space-y-2">
                {section.list.map((item, j) => (
                  <li key={j} className="flex gap-3 text-gray-700 text-sm" lang="hi">
                    <span className="text-orange-500 mt-0.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* FAQ */}
        {page.faqs.length > 0 && (
          <section className="my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" lang="hi">
              अक्सर पूछे जाने वाले सवाल
            </h2>
            <FAQAccordion faqs={page.faqs} />
          </section>
        )}

        {/* Related Hindi pages */}
        <section className="my-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4" lang="hi">और जानकारी पढ़ें</h2>
          <div className="flex flex-wrap gap-3">
            {HINDI_PAGES.filter(p => p.slug !== page.slug).map((related, i) => (
              <a
                key={i}
                href={`/hindi/${related.slug}`}
                className="text-sm text-orange-700 bg-orange-50 border border-orange-200 px-4 py-2 rounded-full hover:bg-orange-100 transition-colors"
                lang="hi"
              >
                {related.title}
              </a>
            ))}
          </div>
        </section>

        <CTASection
          heading="दर्दमुक्त जीवन के लिए आज ही संपर्क करें"
          subheading="डॉ. धीरज दुबे से परामर्श लें। शालबी हॉस्पिटल, वैशाली नगर और डॉ. दुबे हिप एंड नी क्लीनिक, विद्याधर नगर, जयपुर में उपलब्ध।"
        />
      </main>
    </>
  )
}
