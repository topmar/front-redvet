'use client'

import { useCookieConsentContext } from '@/contexts/CookieConsentContext'
import { Link } from '@/i18n/navigation'
import { LINKS } from '@/lib/constants'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

const CookieDrawer = () => {
  const [visible, setVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
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
      className={`fixed bottom-0 inset-x-0 z-[9999] bg-white shadow-md p-4 flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:px-8 lg:py-5 border-t transition-transform duration-300 transform ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <p className="text-sm text-gray-800 text-center lg:text-left">
        {t.rich('title', {
          cookiePolicy: (chunk) => (
            <Link href={LINKS.PRIVACY_POLICY} className="underline">
              {chunk}
            </Link>
          ),
          privacyPolicy: (chunk) => (
            <Link href={LINKS.PRIVACY_POLICY} className="underline">
              {chunk}
            </Link>
          )
        })}
      </p>
      <div className="flex gap-2 flex-col md:flex-row md:gap-4 w-auto">
        <button
          onClick={acceptAllCookies}
          className="h-12 min-w-65 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-800 transition cursor-pointer"
        >
          {t('accept-button')}
        </button>
        <button
          onClick={openSettingsModal}
          className="h-12 min-w-65 px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800 transition cursor-pointer"
        >
          {t('settings-button')}
        </button>
      </div>
    </div>
  )
}

export default CookieDrawer
