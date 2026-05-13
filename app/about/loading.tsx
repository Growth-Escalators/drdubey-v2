export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-8"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1,2,3,4].map(i => (
          <div key={i} className="bg-gray-100 rounded-xl p-6">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"/>
            <div className="h-3 bg-gray-200 rounded w-full mb-2"/>
            <div className="h-3 bg-gray-200 rounded w-2/3"/>
          </div>
        ))}
      </div>
    </div>
  )
}
