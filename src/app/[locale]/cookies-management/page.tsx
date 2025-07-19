'use client'

import { useCookieConsentContext } from '@/contexts/CookieConsentContext'
import { useRouter } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

export default function CookieManagementPage() {
  const router = useRouter()
  const {
    setAllConsent,
    disableAllConsent,
    saveConsent
  } = useCookieConsentContext()
  const t = useTranslations('CookieManagement')
  const { isRecaptchaAllowed, isAnalyticsAllowed, updatedAt } = useCookieConsentContext()

  useEffect(() => {
    setRecaptchaChecked(isRecaptchaAllowed())
    setAnalyticsChecked(isAnalyticsAllowed())
  }, [isRecaptchaAllowed, isAnalyticsAllowed, updatedAt])


  const [recaptchaChecked, setRecaptchaChecked] = useState(false)
  const [analyticsChecked, setAnalyticsChecked] = useState(false)

  const handleAcceptAll = () => {
    setAllConsent()
  }
  
  const handleRejectAll = () => {
    disableAllConsent()
  }
  
  const handleSave = () => {
    const before = isRecaptchaAllowed()
    saveConsent({ recaptcha: recaptchaChecked, analytics: analyticsChecked })

    const sameOrigin = document.referrer.startsWith(window.location.origin)

    if (before && !recaptchaChecked) {
      window.location.reload()
    } else if (sameOrigin) {
      router.back()
    } else {
      router.push('/')
    }
  }
  // const handleSave = () => {
  //   saveConsent({
  //     recaptcha: recaptchaChecked,
  //     analytics: analyticsChecked
  //   })
  //   router.back()
  //  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8 pt-50">
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <p className="text-gray-700">{t('description')}</p>

      <div className="space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <h2 className="font-medium">{t('required-title')}</h2>
            <p className="text-sm text-gray-600">{t('required-description')}</p>
          </div>
          <input
            type="checkbox"
            id="required-toggle"
            className="toggle-switch"
            checked
            readOnly
            disabled
          />
        </div>

        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <h2 className="font-medium">{t('recaptcha-title')}</h2>
            <p className="text-sm text-gray-600">{t('recaptcha-description')}</p>
          </div>
          <input
            type="checkbox"
            checked={recaptchaChecked}
            onChange={(e) => setRecaptchaChecked(e.target.checked)}
            id="recaptcha-toggle"
            className="toggle-switch"
          />
        </div>

        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <h2 className="font-medium">{t('analytics-title')}</h2>
            <p className="text-sm text-gray-600">{t('analytics-description')}</p>
          </div>
          <input
            type="checkbox"
            checked={analyticsChecked}
            onChange={(e) => setAnalyticsChecked(e.target.checked)}
            id="analytics-toggle"
            className="toggle-switch"
          />
        </div>
      </div>

      <div className="flex gap-4 pt-6">
        <button onClick={handleAcceptAll} className="px-4 py-2 bg-green-600 text-white rounded">
          Acceptera alla
        </button>
        <button onClick={handleRejectAll} className="px-4 py-2 bg-red-600 text-white rounded">
          Avböj alla
        </button>
        <button onClick={handleSave} className="px-4 py-2 bg-gray-400 text-black rounded">
          Spara inställningar
        </button>
      </div>
    </div>
  )
}
