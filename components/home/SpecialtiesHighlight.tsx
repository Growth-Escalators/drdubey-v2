'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const specialties = [
  {
    title: 'Complex Hip & Knee Replacement',
    description: 'Advanced surgical solutions for the most challenging joint cases.',
    points: [
      'Revision surgeries for failed implants',
      'Deformity correction & bone loss management',
      'Complex fractures around joint replacements',
      'Post-infection joint reconstruction',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.658-5.66a8.364 8.364 0 010-11.83M15.17 11.42l5.658 5.658a8.364 8.364 0 010 11.832M8.464 15.535l-1.414 1.414M15.536 8.464l1.414-1.414M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
    color: 'from-blue-600 to-indigo-600',
    lightBg: 'bg-blue-50 dark:bg-blue-900/20',
    href: '/services',
  },
  {
    title: 'Robotic Hip & Knee Replacement',
    description: 'Precision surgery with computer-assisted robotic technology.',
    points: [
      'Sub-millimetre accuracy in implant placement',
      '3D pre-operative planning for every patient',
      'Faster recovery with minimally invasive approach',
      'Longer implant life with perfect alignment',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-2.345.39a9.064 9.064 0 01-6.58 0l-2.345-.39c-1.716-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    color: 'from-emerald-600 to-teal-600',
    lightBg: 'bg-emerald-50 dark:bg-emerald-900/20',
    href: '/procedures/robotic-knee-replacement',
  },
]

export default function SpecialtiesHighlight() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded-full uppercase">
            Specialisations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Advanced Joint Replacement Expertise
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {specialties.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${s.lightBg} text-emerald-600 dark:text-emerald-400 mb-6`}>
                  {s.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
                  {s.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {s.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
