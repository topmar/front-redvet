import HeroBanner from '@/components/HeroBanner'
import HeroServices from '@/components/HeroServices'
import { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

type Props = {
  params: Promise<{ locale: Locale }>
}

export default function Home({ params }: Props) {
  const { locale } = use(params)
  setRequestLocale(locale)

  return (
    <main>
      <HeroBanner />
      <HeroServices />
    </main>
  )
}
