'use client'

import { useCookieConsentContext } from '@/contexts/CookieConsentContext'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

const CookieSettingsModal = () => {
  const { isRecaptchaAllowed, isAnalyticsAllowed, setAllConsent, disableAllConsent, saveConsent } =
    useCookieConsentContext()
  const [recaptcha, setRecaptcha] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const t = useTranslations('CookieSettings')

  useEffect(() => {
    setRecaptcha(isRecaptchaAllowed())
    setAnalytics(isAnalyticsAllowed())
  }, [isRecaptchaAllowed, isAnalyticsAllowed])

  return (
    <dialog
      id="cookie-settings-modal"
      className="inset-0 m-auto rounded-xl w-full max-w-xl backdrop:bg-black/85"
    >
      {/* <form method="dialog" className="max-w-3xl mx-auto p-6 space-y-4"> */}
      <form method="dialog" className="max-w-3xl mx-auto flex flex-col h-full">
        <button
          aria-label="Close"
          className="absolute top-2 right-3 text-4xl font-bold leading-none hover:text-gray-500 cursor-pointer"
        >
          ×
        </button>
        <h1 className="text-2xl pt-4 px-4 sm:pt-6 sm:px-6 font-bold">{t('title')}</h1>
        <p className="px-4 sm:px-6 sm:pt-2 text-gray-700">{t('description')}</p>

        <div className="p-4 sm:p-6 sm:pb-0">
          <label
            htmlFor="required-toggle"
            className="flex items-center justify-between border-b pb-4 mb-4"
          >
            <div className="mr-4">
              <h2 className="text-xl sm:text-2xl font-medium">{t('required-title')}</h2>
              <p className="text-sm text-gray-600 max-w-100">{t('required-description')}</p>
            </div>
            <input
              type="checkbox"
              id="required-toggle"
              className="toggle-switch"
              checked
              readOnly
              disabled
            />
          </label>

          <label
            htmlFor="recaptcha-toggle"
            className="flex items-center justify-between border-b pb-4 mb-4"
          >
            <div className="mr-4">
              <h2 className="text-xl sm:text-2xl font-medium">{t('recaptcha-title')}</h2>
              <p className="text-sm text-gray-600 max-w-100">{t('recaptcha-description')}</p>
            </div>
            <input
              type="checkbox"
              id="recaptcha-toggle"
              className="toggle-switch"
              checked={recaptcha}
              onChange={(e) => setRecaptcha(e.target.checked)}
            />
          </label>

          <label
            htmlFor="analytics-toggle"
            className="flex items-center justify-between border-b  pb-4"
          >
            <div className="mr-4">
              <h2 className="text-xl sm:text-2xl font-medium">{t('analytics-title')}</h2>
              <p className="text-sm text-gray-600 max-w-100">{t('analytics-description')}</p>
            </div>
            <input
              type="checkbox"
              id="analytics-toggle"
              className="toggle-switch"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
            />
          </label>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sticky bottom-0 bg-white p-4 sm:p-6">
          <button
            type="button"
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
            onClick={() => {
              setAllConsent()
              ;(
                document.getElementById('cookie-settings-modal') as HTMLDialogElement | null
              )?.close()
            }}
          >
            {t('accept-button')}
          </button>
          <button
            type="button"
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded cursor-pointer"
            onClick={() => {
              disableAllConsent()
              location.reload()
            }}
          >
            {t('decline-button')}
          </button>
          <button
            type="button"
            className="flex-1 px-4 py-2 bg-gray-400 text-black rounded cursor-pointer"
            onClick={() => {
              saveConsent({ recaptcha, analytics })
              location.reload()
            }}
          >
            {t('save-button')}
          </button>
        </div>
      </form>
    </dialog>
  )
}

export default CookieSettingsModal
