'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
export function LanguageSwitcher() {
  const { language, setLanguage, availableLanguages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = availableLanguages.find((l) => l.code === language)

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        type="button"
        className="flex items-center gap-1.5 py-2 px-3 text-gray-700 hover:text-blue-600 transition border border-gray-200 hover:border-blue-300 rounded-md"
      >
        {currentLang && (
          <img src={currentLang.flag} alt="" className="w-6 h-4 object-cover rounded-sm" />
        )}
        <svg
          className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`absolute top-full right-0 mt-1 w-36 bg-white shadow-lg rounded-md py-1 transition-all duration-200 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        {availableLanguages.map((lang) => (
          <button
            key={lang.code}
            type="button"
            onClick={() => {
              setLanguage(lang.code)
              setIsOpen(false)
            }}
            className={`w-full flex items-center gap-2 px-4 py-2 text-left transition ${
              language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <img src={lang.flag} alt="" className="w-5 h-3.5 object-cover rounded-sm" />
            <span className="text-sm">{lang.name}</span>
            {language === lang.code && (
              <svg className="w-4 h-4 ml-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
