'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export function ContactPage() {
  const { t } = useLanguage()

  return (
    <div id="contact" className="pt-20 min-h-screen bg-gray-50">
      <div className="text-white py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/banner_product/gtg_bgr_detail.png)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('nav.contact') as string}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{t('footer.officeLocation') as string}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4">{t('footer.office') as string}</h3>
            <p className="text-gray-600 mb-2">{t('footer.officeLocation') as string}</p>
            <a href="tel:0961230808" className="text-blue-600 hover:underline">
              {t('footer.officePhone') as string}: 0961.230.808
            </a>
          </div>
          <div className="bg-white p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4">{t('footer.factory') as string}</h3>
            <p className="text-gray-600 mb-2">{t('footer.factoryLocation') as string}</p>
            <a href="tel:008613345510808" className="text-blue-600 hover:underline">
              {t('footer.factoryPhone') as string}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
