'use client'

import { useCookieConsentContext } from '@/contexts/CookieConsentContext'
import { useEffect, useState } from 'react'

const CookieSettingsModal = () => {
  const { isRecaptchaAllowed, isAnalyticsAllowed, setAllConsent, disableAllConsent, saveConsent } =
    useCookieConsentContext()

  const [recaptcha, setRecaptcha] = useState(false)
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    setRecaptcha(isRecaptchaAllowed())
    setAnalytics(isAnalyticsAllowed())
  }, [isRecaptchaAllowed, isAnalyticsAllowed])

  return (
    <dialog
      id="cookie-settings-modal"
      className="inset-0 m-auto rounded-xl w-full max-w-xl p-6 backdrop:bg-black/85"
    >
      <form method="dialog" className="max-w-3xl mx-auto p-6 space-y-8">
        <button
          aria-label="Close"
          className="absolute top-3 right-3 text-4xl font-bold leading-none hover:text-gray-500"
        >
          ×
        </button>
        <h1 className="text-2xl font-bold">Cookie Settings</h1>
        <p className="text-gray-700">Beskrivning av cookiernas syfte.</p>

        <div className="space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <h2 className="font-medium">Nödvändiga cookies</h2>
              <p className="text-sm text-gray-600">Kan inte inaktiveras.</p>
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
              <h2 className="font-medium">reCAPTCHA</h2>
              <p className="text-sm text-gray-600">Skyddar formulär mot spam.</p>
            </div>
            <input
              type="checkbox"
              id="recaptcha-toggle"
              className="toggle-switch"
              checked={recaptcha}
              onChange={(e) => setRecaptcha(e.target.checked)}
            />
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <h2 className="font-medium">Analys</h2>
              <p className="text-sm text-gray-600">Hjälper oss förbättra webbplatsen.</p>
            </div>
            <input
              type="checkbox"
              id="analytics-toggle"
              className="toggle-switch"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
            />
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <button
            type="button"
            className="px-4 py-2 bg-green-600 text-white rounded"
            onClick={() => {
              setAllConsent()
              document.getElementById('cookie-settings-modal')?.close()
            }}
          >
            Acceptera alla
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-red-600 text-white rounded"
            onClick={() => {
              disableAllConsent()
              location.reload()
            }}
          >
            Avböj alla
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-400 text-black rounded"
            onClick={() => {
              saveConsent({ recaptcha, analytics })
              location.reload()
            }}
          >
            Spara inställningar
          </button>
        </div>
      </form>
    </dialog>
  )
}

export default CookieSettingsModal
