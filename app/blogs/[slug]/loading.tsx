export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Title */}
      <div className="h-10 w-3/4 bg-gray-200 rounded-lg animate-pulse" />
      <div className="h-6 w-1/2 bg-gray-100 rounded mt-3 animate-pulse" />

      {/* Meta */}
      <div className="flex gap-3 mt-6">
        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
      </div>

      {/* Cover image */}
      <div className="h-72 w-full bg-gray-200 rounded-xl mt-8 animate-pulse" />

      {/* Text lines */}
      <div className="mt-8 space-y-4">
        <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-4/5 bg-gray-100 rounded animate-pulse" />
      </div>
    </div>
  );
}
