interface TimelineStep {
  period: string
  title: string
  description: string
}

export function RecoveryTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="my-8">
      <div className="flex flex-col md:flex-row gap-0">
        {steps.map((step, i) => (
          <div key={i} className="flex md:flex-col items-start md:items-center flex-1 relative">
            <div className="flex md:flex-col items-center w-full">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 z-10">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-0.5 md:h-0.5 w-0.5 md:w-full bg-blue-200" />
              )}
            </div>
            <div className="ml-4 md:ml-0 md:mt-3 md:text-center pb-6 md:pb-0 md:px-2">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                {step.period}
              </p>
              <p className="text-sm font-semibold text-gray-900 mt-1">{step.title}</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
