import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Articles & Publications | Dr. Dheeraj Dubay',
  description: 'Published medical articles, research papers, and scientific publications by Dr. Dheeraj Dubay on joint replacement surgery, robotic surgery, and orthopaedic care.',
}

export const revalidate = 3600

async function getArticles() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://admin.drdubay.in'
    const res = await fetch(`${baseUrl}/api/articles`, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data.filter((a: any) => a.isPublished) : []
  } catch {
    return []
  }
}

export default async function ArticlesPage() {
  const articles = await getArticles()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-emerald-700 bg-emerald-50 rounded-full uppercase">
            Research & Publications
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Articles & Publications
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Published medical articles and research papers by Dr. Dheeraj Dubay
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Publications coming soon
            </h3>
            <p className="text-gray-500 text-sm">
              Dr. Dubay&apos;s published articles and research papers will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {articles.map((a: any) => (
              <article key={a.id} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold text-gray-900 mb-2">{a.title}</h2>
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
                  {a.journalName && (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      {a.journalName}
                    </span>
                  )}
                  {a.authors && <span>{a.authors}</span>}
                  {a.publishedDate && (
                    <span>{new Date(a.publishedDate).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</span>
                  )}
                </div>
                {a.abstract && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{a.abstract}</p>
                )}
                <div className="flex flex-wrap gap-3">
                  {a.externalUrl && (
                    <a href={a.externalUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                      Read full article
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {a.pdfUrl && (
                    <a href={a.pdfUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700">
                      Download PDF
                    </a>
                  )}
                  {a.doi && (
                    <span className="text-xs text-gray-400">DOI: {a.doi}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
