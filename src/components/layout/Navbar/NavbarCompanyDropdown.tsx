'use client'

import { LocalizedLink } from '@/components/LocalizedLink'
import { useLanguage } from '@/contexts/LanguageContext'

export function NavbarCompanyDropdown() {
  const { t } = useLanguage()

  const items = [
    { label: t('nav.companyProfile'), href: '/ho-so-cong-ty' },
    { label: t('nav.history'), href: '/lich-su' },
    { label: t('nav.services'), href: '/dich-vu' },
  ]

  return (
    <div className="absolute top-full left-0 w-48 bg-white shadow-lg py-2 transition-all duration-200">
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
