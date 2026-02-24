'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const contactConfigs: Record<string, { messaging: { link: string; text: string; className: string; hasQR?: boolean; qrImage?: string; qrTitle?: string }; phone: { number: string; text: string } }> = {
  vi: {
    messaging: { link: 'https://zalo.me/3581524201647006505', text: 'Zalo', className: 'zalo', hasQR: false },
    phone: { number: '0961230808', text: 'Hotline' },
  },
  en: {
    messaging: { link: 'https://wa.me/84967118879', text: 'WhatsApp', className: 'whatsapp', hasQR: false },
    phone: { number: '0967118879', text: 'Hotline' },
  },
  zh: {
    messaging: { link: '#', text: 'WeChat', className: 'wechat', hasQR: true, qrImage: '/images/wechat-qr.jpg', qrTitle: 'WeChat' },
    phone: { number: '+8615856600066', text: 'Hotline' },
  },
}

export function FloatingContactButtons() {
  const { language } = useLanguage()
  const [showQRModal, setShowQRModal] = useState(false)
  const [qrData, setQrData] = useState({ image: '', title: '' })

  const config = contactConfigs[language] || contactConfigs.en
  const { messaging, phone } = config

  const handleMessagingClick = (e: React.MouseEvent) => {
    if (messaging.hasQR) {
      e.preventDefault()
      setQrData({ image: messaging.qrImage || '', title: messaging.qrTitle || '' })
      setShowQRModal(true)
    }
  }

  return (
    <>
      <div className={`floating-contact ${language === 'zh' ? 'chinese-version' : ''}`}>
        <a
          className={messaging.className}
          href={messaging.link}
          onClick={handleMessagingClick}
          target={messaging.hasQR ? undefined : '_blank'}
          rel={messaging.hasQR ? undefined : 'noopener noreferrer'}
        >
          <span className="icon">{messaging.text.slice(0, 1)}</span>
          <span>{messaging.text}</span>
        </a>
        <a className="phone" href={`tel:${phone.number}`}>
          <span className="icon">
            <svg viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" fill="currentColor" />
            </svg>
          </span>
          <span>{phone.text}</span>
        </a>
      </div>

      {showQRModal && (
        <div className="qr-modal" onClick={() => setShowQRModal(false)}>
          <div className="qr-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close cursor-pointer" onClick={() => setShowQRModal(false)}>
              &times;
            </span>
            <h3>{qrData.title}</h3>
            {qrData.image && <img src={qrData.image} alt="QR Code" />}
          </div>
        </div>
      )}
    </>
  )
}
