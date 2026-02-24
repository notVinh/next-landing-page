'use client'

import { useMemo } from 'react'
import { LocalizedLink } from '@/components/LocalizedLink'
import { useLanguage } from '@/contexts/LanguageContext'

export function HomeSolutions() {
  const { t } = useLanguage()

  const items = useMemo(
    () => [
      { title: t('solutions.cadCam'), image: '/images/anhcty/giaiphap/cadcam.jpg', link: '/giai-phap/cad-cam', color: 'bg-cyan-400/25' },
      { title: t('solutions.pants'), image: '/images/anhcty/giaiphap/jeans.jpg', link: '/giai-phap/quan', color: 'bg-blue-400/25' },
      { title: t('solutions.jackets'), image: '/images/anhcty/giaiphap/ao khoac.jpg', link: '/giai-phap/ao-khoac', color: 'bg-orange-400/25' },
      { title: t('solutions.formalWear'), image: '/images/anhcty/giaiphap/au phuc.jpg', link: '/giai-phap/au-phuc', color: 'bg-gray-500/25' },
      { title: t('solutions.knitwear'), image: '/images/anhcty/giaiphap/det kim.jpg', link: '/giai-phap/hang-det-kim', color: 'bg-green-400/25' },
      { title: t('solutions.underwear'), image: '/images/anhcty/giaiphap/do lot.jpg', link: '/giai-phap/do-lot', color: 'bg-purple-400/25' },
      { title: t('solutions.casualWear'), image: '/images/anhcty/giaiphap/do thuong phuc.jpg', link: '/giai-phap/trang-phuc-thuong-ngay', color: 'bg-rose-400/25' },
      { title: t('solutions.childrenWear'), image: '/images/anhcty/giaiphap/tre em.jpg', link: '/giai-phap/quan-ao-tre-em', color: 'bg-pink-400/25' },
    ],
    [t]
  )

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('solutions.title') as string}</h2>
          <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto" />
          <p className="mt-4 text-gray-600">{t('solutions.subtitle') as string}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
          {items.map((item, index) => (
            <LocalizedLink key={index} href={item.link as string} className="group relative h-48 lg:h-64 overflow-hidden shadow-lg block">
              <img src={item.image as string} alt={item.title as string} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`relative flex flex-col items-center justify-center px-3 lg:px-4 text-center text-white font-semibold ${item.color} transition-all duration-300 ease-out w-28 h-28 lg:w-32 lg:h-32 rounded-full group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:px-4`}
                >
                  <div className="font-bold text-white text-xs lg:text-sm leading-tight drop-shadow">{item.title as string}</div>
                  <span className="mt-1 lg:mt-2 text-xs text-white font-semibold drop-shadow">{t('common.viewAll') as string}</span>
                </div>
              </div>
            </LocalizedLink>
          ))}
        </div>
      </div>
    </section>
  )
}
