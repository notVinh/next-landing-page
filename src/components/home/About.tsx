'use client'

import { LocalizedLink } from '@/components/LocalizedLink'
import { useLanguage } from '@/contexts/LanguageContext'

export function About() {
  const { t } = useLanguage()

  const stats = [
    { number: '13+', label: t('about.stats.experience') },
    { number: '750+', label: t('about.stats.customers') },
    { number: '5000+', label: t('about.stats.machines') },
    { number: '5', label: t('about.stats.branches') },
  ]

  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('about.title') as string}</h2>
          <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <div className="order-2 md:order-1">
            <div className="w-full h-full min-h-[300px] md:min-h-[500px] bg-white shadow-lg overflow-hidden relative rounded-lg">
              <img
                src="/images/anhcty/nha-may-gtg.jpg"
                alt="GTG company"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center order-1 md:order-2">
            <p
              className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: (t('about.description1') as string) || '' }}
            />
            <ul className="space-y-2 md:space-y-3 mb-4">
              {(Array.isArray(t('about.rdFeatures')) ? (t('about.rdFeatures') as string[]) : []).map((feature, index) => (
                <li key={index} className="flex items-start text-gray-700 text-sm md:text-base">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <p
              className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: (t('about.description3') as string) || '' }}
            />
            <ul className="space-y-2 md:space-y-3 mb-6">
              <li className="flex items-center text-gray-700 text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t('about.highlights.genuine') as string}
              </li>
              <li className="flex items-center text-gray-700 text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t('about.highlights.afterSales') as string}
              </li>
              <li className="flex items-center text-gray-700 text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t('about.highlights.support') as string}
              </li>
              <li className="flex items-center text-gray-700 text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t('about.highlights.delivery') as string}
              </li>
            </ul>
            <LocalizedLink
              href="/thong-tin-cong-ty"
              className="inline-block bg-blue-600 text-white px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-semibold hover:bg-blue-700 transition rounded"
            >
              {t('about.learnMore') as string}
            </LocalizedLink>
          </div>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 md:p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number as string}</div>
              <div className="mt-2 text-gray-600 text-sm md:text-base">{stat.label as string}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
