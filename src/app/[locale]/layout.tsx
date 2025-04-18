import { Montserrat, Roboto, Work_Sans } from 'next/font/google'
import './globals.css'
import { Locale, NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'

type Props = {
  children: ReactNode
  params: Promise<{ locale: Locale }>
}

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
})

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin']
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
  const { locale } = await props.params

  const t = await getTranslations({ locale, namespace: 'HomePage' })

  return {
    title: t('page-title'),
    description: t('page-description')
  }
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} ${workSans.variable} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
