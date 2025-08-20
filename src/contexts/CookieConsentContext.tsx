'use client'

import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react'

const COOKIE_KEY = 'cookie-consent'

type ConsentData = {
  recaptcha: boolean
  analytics: boolean
}

type CookieConsentContextType = {
  updatedAt: number
  saveConsent: (consent: ConsentData) => void
  hasConsent: () => boolean
  setAllConsent: () => void
  setReCaptchaConsent: (value: boolean) => void
  disableAllConsent: () => void
  isRecaptchaAllowed: () => boolean
  isAnalyticsAllowed: () => boolean
}

const CookieConsentContext = createContext<CookieConsentContextType | null>(null)

export const CookieConsentProvider = ({ children }: { children: React.ReactNode }) => {
  const [updatedAt, setUpdatedAt] = useState(Date.now())

  useEffect(() => {
    const scriptId = 'recaptcha-script'

    const checkConsentAndUpdateScript = () => {
      if (isRecaptchaAllowed()) {
        const script = document.createElement('script')
        script.id = scriptId
        script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`
        script.async = true
        script.defer = true
        document.head.appendChild(script)
      }
    }

    checkConsentAndUpdateScript()

    const onStorage = (e: StorageEvent) => {
      if (e.key === 'cookie-consent-updated') {
        checkConsentAndUpdateScript()
        setUpdatedAt(Date.now())
      }
    }

    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [updatedAt])

  const hasConsent = (): boolean => !!getConsent()

  const getConsent = (): ConsentData | null => {
    const raw = document.cookie.split('; ').find((c) => c.startsWith(`${COOKIE_KEY}=`))
    if (!raw) return null
    try {
      return JSON.parse(decodeURIComponent(raw.split('=')[1]))
    } catch {
      return null
    }
  }
  const saveConsent = (consent: ConsentData) => {
    document.cookie = `${COOKIE_KEY}=${encodeURIComponent(
      JSON.stringify(consent)
    )}; path=/; max-age=31536000; secure; SameSite=Lax`
    localStorage.setItem('cookie-consent-updated', Date.now().toString())
    triggerUpdate()
  }

  const triggerUpdate = useCallback(() => {
    setUpdatedAt(Date.now())
  }, [])

  const setAllConsent = () => saveConsent({ recaptcha: true, analytics: true })
  const disableAllConsent = () => saveConsent({ recaptcha: false, analytics: false })

  const setReCaptchaConsent = (value: boolean) => {
    const current = getConsent() || { recaptcha: false, analytics: false }
    saveConsent({ ...current, recaptcha: value })
  }

  const isRecaptchaAllowed = () => getConsent()?.recaptcha === true

  const isAnalyticsAllowed = () => getConsent()?.analytics === true

  const contextValue = useMemo(
    () => ({
      updatedAt,
      saveConsent,
      hasConsent,
      setAllConsent,
      setReCaptchaConsent,
      disableAllConsent,
      isRecaptchaAllowed,
      isAnalyticsAllowed
    }),
    [updatedAt]
  )

  return (
    <CookieConsentContext.Provider value={contextValue}>{children}</CookieConsentContext.Provider>
  )
}

export const useCookieConsentContext = () => {
  const context = useContext(CookieConsentContext)
  if (!context)
    throw new Error('useCookieConsentContext must be used within a CookieConsentProvider')
  return context
}

