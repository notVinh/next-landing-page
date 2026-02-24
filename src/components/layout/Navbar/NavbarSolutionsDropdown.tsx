'use client'

import { LocalizedLink } from '@/components/LocalizedLink'
import { useLanguage } from '@/contexts/LanguageContext'

export function NavbarSolutionsDropdown() {
  const { t } = useLanguage()

  const items = [
    { label: t('solutions.cadCam'), href: '/giai-phap/cad-cam' },
    { label: t('solutions.pants'), href: '/giai-phap/quan' },
    { label: t('solutions.jackets'), href: '/giai-phap/ao-khoac' },
    { label: t('solutions.formalWear'), href: '/giai-phap/au-phuc' },
    { label: t('solutions.knitwear'), href: '/giai-phap/hang-det-kim' },
    { label: t('solutions.underwear'), href: '/giai-phap/do-lot' },
    { label: t('solutions.casualWear'), href: '/giai-phap/trang-phuc-thuong-ngay' },
    { label: t('solutions.childrenWear'), href: '/giai-phap/quan-ao-tre-em' },
  ]

  return (
    <div className="absolute top-full left-0 w-56 bg-white shadow-lg py-2 transition-all duration-200">
      {items.map((item) => (
        <LocalizedLink
          key={item.href}
          href={item.href}
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
        >
          {item.label as string}
        </LocalizedLink>
      ))}
    </div>
  )
}
