import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

export function BreadcrumbNav({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 flex-wrap">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-gray-300">›</span>}
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-blue-600 transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-gray-800 font-medium">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
