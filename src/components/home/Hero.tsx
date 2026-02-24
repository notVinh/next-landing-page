'use client'

import { LocalizedLink } from '@/components/LocalizedLink'
import { useLanguage } from '@/contexts/LanguageContext'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('hero.title') as string} <span className="text-blue-600">{t('hero.titleHighlight') as string}</span>{' '}
              {t('hero.titleEnd') as string}
            </h1>
            <p className="mt-6 text-lg text-gray-600">{t('hero.subtitle') as string}</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('hero.features.genuine') as string}
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('hero.features.support') as string}
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-3 text-center font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
                {t('hero.cta') as string}
              </a>
              <LocalizedLink
                href="/san-pham"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 text-center font-semibold hover:bg-blue-600 hover:text-white transition"
              >
                {t('hero.viewProducts') as string}
              </LocalizedLink>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold text-gray-900">
                  {t('hero.hotline') as string}: 0961.230.808
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-80 md:h-96 bg-gradient-to-br from-blue-400 to-indigo-600 shadow-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/images/anhcty/z7357057865754_32e8b0dfead67aaba6e79ba81571bcf0.jpg"
                alt="GTG Industrial Solutions"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 shadow-lg">
              <div className="text-3xl font-bold text-blue-600">13+</div>
              <div className="text-sm text-gray-600">{t('hero.stats.experience') as string}</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white p-4 shadow-lg">
              <div className="text-3xl font-bold text-green-600">750+</div>
              <div className="text-sm text-gray-600">{t('hero.stats.customers') as string}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
