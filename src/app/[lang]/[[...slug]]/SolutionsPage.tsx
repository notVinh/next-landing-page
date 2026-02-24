'use client'

import { useMemo } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { LocalizedLink } from '@/components/LocalizedLink'

export function SolutionsPage() {
  const { t } = useLanguage()

  const solutions = useMemo(
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
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="text-white py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/banner_product/gtg_bgr_detail.png)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('pages.solutionsPage.title') as string}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{t('pages.solutionsPage.heroDesc') as string}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((item, index) => (
            <LocalizedLink key={index} href={item.link as string} className="group relative h-48 lg:h-56 overflow-hidden shadow-lg block">
              <img src={item.image as string} alt={item.title as string} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className={`absolute inset-0 flex items-center justify-center ${item.color}`}>
                <span className="font-bold text-white text-center text-sm lg:text-base drop-shadow">{item.title as string}</span>
              </div>
            </LocalizedLink>
          ))}
        </div>
      </div>
    </div>
  )
}
