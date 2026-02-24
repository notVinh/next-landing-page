'use client'

import { LocalizedLink } from '@/components/LocalizedLink'
import { useLanguage } from '@/contexts/LanguageContext'
import { FooterQuickLinks } from './FooterQuickLinks'
import { FooterProducts } from './FooterProducts'
import { FooterContact } from './FooterContact'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <img src="/logo.png" alt="GTG Logo" className="h-10 mb-4" />
            <p className="text-gray-400 text-sm mb-4">{t('footer.companyDesc') as string}</p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/maymaygiangthanh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@giangthanhgtg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 flex items-center justify-center hover:bg-red-700 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://zalo.me/3581524201647006505"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <span className="text-xs font-bold">Zalo</span>
              </a>
            </div>
          </div>
          <FooterQuickLinks />
          <FooterProducts />
          <FooterContact />
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">{t('footer.copyright') as string}</p>
            <div className="mt-4 md:mt-0 flex items-center space-x-4 text-sm text-gray-400">
              <span>{t('footer.brand') as string}:</span>
              <span className="text-white font-semibold">GTG</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
