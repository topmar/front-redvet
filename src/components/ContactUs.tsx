'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { sendContactForm } from '@/lib/actions'
import { ContactFormValues } from '@/types/contact'
import { useEffect, useState } from 'react'
import { useCookieConsentContext } from '@/contexts/CookieConsentContext'
import { Link } from '@/i18n/navigation'

declare global {
  interface Window {
    grecaptcha?: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

export default function ContactUs() {
  const { setReCaptchaConsent, updatedAt } = useCookieConsentContext()
  const [hasConsent, setHasConsent] = useState(true)
  const t = useTranslations('ContactUs')
  const accessibilityProps = !hasConsent ? { disabled: true, tabIndex: -1 } : {}

  useEffect(() => {
    const checkConsent = () => {
      const consent = document.cookie.split('; ').find((c) => c.startsWith('cookie-consent='))
      if (!consent) return setHasConsent(false)

      try {
        const parsed = JSON.parse(decodeURIComponent(consent.split('=')[1]))
        setHasConsent(parsed.recaptcha === true)
      } catch {
        setHasConsent(false)
      }
    }

    checkConsent()

    const onStorage = (e: StorageEvent) => {
      if (e.key === 'cookie-consent-updated') {
        checkConsent()
      }
    }

    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [updatedAt])

  const handleConsentAccept = () => {
    setReCaptchaConsent(true)
  }

  const formSchema = z.object({
    ownerName: z.string().min(1, { message: t('Error-owner') }),
    animalName: z.string(),
    email: z.string().email({ message: t('Error-email') }),
    tel: z.union([
      z
        .string()
        .min(9, { message: t('Error-tel-too-short') })
        .max(12, { message: t('Error-tel-too-long') }),
      z.literal('')
    ]),
    message: z
      .string()
      .min(1, { message: t('Error-message-too-short') })
      .max(600, { message: t('Error-message-too-long') })
  })

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ownerName: '',
      animalName: '',
      email: '',
      tel: '',
      message: ''
    }
  })

  async function onSubmit(values: ContactFormValues) {
    try {
      if (!window.grecaptcha) if (!window.grecaptcha) throw new Error('reCAPTCHA not loaded')
      const token = await window.grecaptcha.execute('6Lc8g4YrAAAAAMdSrNqiLuRbpywiMahe1UJ4I0qN', {
        action: 'submit'
      })
      console.log(token)
      await sendContactForm(values, token)
      form.reset()
      // toast.success(t('Send-success'))
    } catch (error) {
      console.log(error)
      // toast.error(t('Error-send'))
    }
  }

  return (
    <section className="bg-red-900/[95%] relative">
      {!hasConsent && (
        <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center px-4 text-center">
          <p className="text-white w-full max-w-120">
            {t.rich('consent-message', {
              policy: (chunks) => (
                <Link href="/privacy-policy" className="underline">
                  {chunks}
                </Link>
              )
            })}
          </p>
          <button
            onClick={handleConsentAccept}
            className="bg-white text-black px-4 py-2 rounded mt-10"
          >
            {t('consent-button')}
          </button>
        </div>
      )}
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-left text-white">{t('title')}</h2>
        <form onSubmit={form.handleSubmit(onSubmit)} aria-hidden={!hasConsent}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-7">
              <div className="relative flex flex-col">
                <label className="text-white">{t('Owner-label')}</label>
                <input
                  type="text"
                  placeholder={t('Owner-placeholder')}
                  {...form.register('ownerName')}
                  {...accessibilityProps}
                  className="bg-white focus-visible:ring-[1px] h-9 p-2"
                />
                {form.formState.errors.ownerName && (
                  <span className="absolute text-white top-full w-full px-2 bg-red-600 rounded-b-lg">
                    {form.formState.errors.ownerName.message}
                  </span>
                )}
              </div>

              <div className="relative flex flex-col">
                <label className="text-white">{t('Animal-label')}</label>
                <input
                  type="text"
                  placeholder={t('Animal-placeholder')}
                  {...form.register('animalName')}
                  {...accessibilityProps}
                  className="bg-white focus-visible:ring-[1px] h-9 p-2"
                />
                {form.formState.errors.animalName && (
                  <span className="absolute text-white top-full w-full px-2 bg-red-600 rounded-b-lg">
                    {form.formState.errors.animalName.message}
                  </span>
                )}
              </div>

              <div className="relative flex flex-col">
                <label className="text-white">{t('Email-label')}</label>
                <input
                  type="email"
                  placeholder={t('Email-placeholder')}
                  {...form.register('email')}
                  {...accessibilityProps}
                  className="bg-white focus-visible:ring-[1px] h-9 p-2"
                />
                {form.formState.errors.email && (
                  <span className="absolute text-white top-full w-full px-2 bg-red-600 rounded-b-lg">
                    {form.formState.errors.email.message}
                  </span>
                )}
              </div>

              <div className="relative flex flex-col">
                <label className="text-white">{t('Tel-label')}</label>
                <input
                  type="tel"
                  placeholder={t('Tel-placeholder')}
                  {...form.register('tel')}
                  {...accessibilityProps}
                  className="bg-white focus-visible:ring-[1px] h-9 p-2"
                />
                {form.formState.errors.tel && (
                  <span className="text-red-500">{form.formState.errors.tel.message}</span>
                )}
              </div>
            </div>

            <div className="space-y-6 h-full">
              <div className="relative h-full grid grid-rows-[auto_1fr]">
                <label className="text-white">{t('Message-label')}</label>
                <textarea
                  placeholder={t('Message-placeholder')}
                  {...form.register('message')}
                  {...accessibilityProps}
                  className="resize-none h-50 md:h-full bg-white focus-visible:ring-[1px] p-2"
                />
                {form.formState.errors.message && (
                  <span className="absolute text-white top-full w-full px-2 bg-red-600 rounded-b-lg">
                    {form.formState.errors.message.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-transparent border-2 border-white focus-visible:ring-[1px] w-full mt-10 hover:border-0 hover:bg-white hover:text-black text-white h-10 text-lg"
            {...accessibilityProps}
          >
            {t('Button-submit')}
          </button>
        </form>
        <p className="text-sm text-gray-200 text-center mt-10">
          {t.rich('recaptcha', {
            privacy: (chunks) => (
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {chunks}
              </a>
            ),
            terms: (chunks) => (
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {chunks}
              </a>
            )
          })}
        </p>
      </div>
    </section>
  )
}
