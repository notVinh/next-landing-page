'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export function CompanyInfoPage() {
  const { t } = useLanguage()

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="text-white py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/banner_product/gtg_bgr_detail.png)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('nav.company') as string}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{t('footer.companyDesc') as string}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 shadow-lg">
          <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: (t('about.description1') as string) || '' }} />
        </div>
      </div>
    </div>
  )
}
