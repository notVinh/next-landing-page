'use client'

import { useMemo } from 'react'
import { LocalizedLink } from '@/components/LocalizedLink'
import { useLanguage } from '@/contexts/LanguageContext'

export function Products() {
  const { t } = useLanguage()

  const products = useMemo(
    () => [
      { name: t('products.printCutSpread'), desc: t('products.printCutSpreadDesc'), image: '/images/danhmuc/he thong may cadcam.png', link: '/san-pham/may-in-phay-trai-cat' },
      { name: t('products.automation'), desc: t('products.automationDesc'), image: '/images/danhmuc/he thong may tu dong.png', link: '/san-pham/may-tu-dong-xuong-may' },
      { name: t('products.programmable'), desc: t('products.programmableDesc'), image: '/images/danhmuc/may may tu dong.png', link: '/san-pham/may-may-lap-trinh' },
      { name: t('products.industrial'), desc: t('products.industrialDesc'), image: '/images/danhmuc/may may cong nghiep.png', link: '/san-pham/may-may-cong-nghiep' },
      { name: t('products.auxiliary'), desc: t('products.auxiliaryDesc'), image: '/images/danhmuc/May phu tro.png', link: '/san-pham/may-phu-tro' },
      { name: t('products.software'), desc: t('products.softwareDesc'), image: '/images/danhmuc/phan mem quan ly du lieu tong hop.png', link: '/san-pham/phan-mem-quan-ly' },
    ],
    [t]
  )

  return (
    <section id="products" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('products.title') as string}</h2>
          <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">{t('products.subtitle') as string}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <LocalizedLink
              key={index}
              href={product.link as string}
              className="flex flex-col bg-gray-50 text-gray-900 rounded-lg overflow-hidden hover-lift h-full"
            >
              <div className="h-48 md:h-64 lg:h-72 bg-white flex items-center justify-center overflow-hidden">
                <img src={product.image as string} alt={product.name as string} className="w-full h-full object-contain" />
              </div>
              <div className="p-4 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">{product.name as string}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-2 flex-grow">{product.desc as string}</p>
                <span className="inline-flex items-center text-sm md:text-base font-semibold text-blue-600 hover:text-blue-700 mt-auto">
                  {t('products.viewDetails') as string}
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </LocalizedLink>
          ))}
        </div>
      </div>
    </section>
  )
}
