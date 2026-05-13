export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="h-10 w-80 bg-gray-200 rounded-lg mx-auto animate-pulse" />
        <div className="h-5 w-96 bg-gray-100 rounded mx-auto mt-4 animate-pulse" />
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-9 w-20 bg-gray-200 rounded-full animate-pulse"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow overflow-hidden border border-gray-100"
          >
            <div className="h-48 bg-gray-200 animate-pulse" />
            <div className="p-5 space-y-3">
              <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
