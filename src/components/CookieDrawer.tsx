'use client'

import { useCookieConsentContext } from '@/contexts/CookieConsentContext'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

const CookieDrawer = () => {
  const [visible, setVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  // const [isModalOpen, setIsModalOpen] = useState(false)
  const t = useTranslations('CookieDrawer')
  const { hasConsent, setAllConsent, updatedAt } = useCookieConsentContext()

  const openSettingsModal = () => {
    const modal = document.getElementById('cookie-settings-modal') as HTMLDialogElement | null
    modal?.showModal()
  }

  useEffect(() => {
    const updateVisibility = () => {
      if (!hasConsent()) {
        setIsMounted(true)
        setVisible(true)
      } else {
        setVisible(false)
        setTimeout(() => setIsMounted(false), 300)
      }
    }

    updateVisibility()

    const onStorage = (e: StorageEvent) => {
      if (e.key === 'cookie-consent-updated') {
        updateVisibility()
      }
    }

    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [hasConsent, updatedAt])

  const acceptAllCookies = () => {
    setAllConsent()
  }

  if (!isMounted) return null

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-[9999] bg-white shadow-md p-4 flex flex-col items-center gap-2 md:flex-row md:justify-between md:px-8 md:py-5 border-t transition-transform duration-300 transform ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <p className="text-sm text-gray-800">{t('title')}</p>
      <button
        onClick={acceptAllCookies}
        className="mt-2 md:mt-0 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-800 transition"
      >
        {t('accept-button')}
      </button>
      <button
        onClick={openSettingsModal}
        className="mt-2 md:mt-0 px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800 transition"
      >
        {t('settings-button')}
      </button>
    </div>
  )
}

export default CookieDrawer
