import HeroAbout from '@/components/HeroAbout'
import HeroBanner from '@/components/HeroBanner'
import HeroBooking from '@/components/HeroBooking'
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
      <HeroAbout />
      <HeroBooking />
    </main>
  )
}
