'use client'

import { LocalizedLink } from '@/components/LocalizedLink'
import { useLanguage } from '@/contexts/LanguageContext'

export function FooterProducts() {
  const { t } = useLanguage()

  const links = [
    { label: t('footer.industrialMachines'), href: '/san-pham/may-may-cong-nghiep' },
    { label: t('footer.printCutSpread'), href: '/san-pham/may-in-phay-trai-cat' },
    { label: t('footer.automation'), href: '/san-pham/may-tu-dong-xuong-may' },
    { label: t('footer.programmable'), href: '/san-pham/may-may-lap-trinh' },
    { label: t('footer.auxiliary'), href: '/san-pham/may-phu-tro' },
  ]

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">{t('footer.products') as string}</h4>
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
