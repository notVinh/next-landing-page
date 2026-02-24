'use client'

import { LocalizedLink } from '@/components/LocalizedLink'
import { useLanguage } from '@/contexts/LanguageContext'

export function FooterQuickLinks() {
  const { t } = useLanguage()

  const links = [
    { label: t('footer.home'), href: '/' },
    { label: t('footer.about'), href: '/thong-tin-cong-ty' },
    { label: t('footer.products'), href: '/san-pham' },
    { label: t('footer.solutions'), href: '/giai-phap' },
    { label: t('footer.services'), href: '/dich-vu' },
    { label: t('footer.contact'), href: '/lien-he' },
  ]

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks') as string}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href as string}>
            <LocalizedLink href={link.href as string} className="text-gray-400 hover:text-white transition">
              {link.label as string}
            </LocalizedLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
