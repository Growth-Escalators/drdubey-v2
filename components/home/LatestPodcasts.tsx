'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Video {
  id: string
  title: string
  url: string
  description?: string
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/)
  return match ? match[1] : null
}

export default function LatestPodcasts() {
  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || ''
    fetch(`${baseUrl}/api/youtube`)
      .then(r => r.json())
      .then(d => setVideos(Array.isArray(d) ? d.slice(0, 3) : []))
      .catch(e => console.error('[LatestPodcasts/fetch]', e))
  }, [])

  if (videos.length === 0) return null

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 rounded-full uppercase">
            Watch & Learn
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Podcasts & Video Insights
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => {
            const videoId = getYouTubeId(v.url || '')
            return (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
                  {videoId ? (
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-gray-400">Video</span>
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-2">
                      {v.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/podcasts"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors text-sm"
          >
            View All Episodes
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
