import ContactUs from '@/components/ContactUs'
import HeroAbout from '@/components/HeroAbout'
import HeroBanner from '@/components/HeroBanner'
import HeroBooking from '@/components/HeroBooking'
import HeroNews from '@/components/HeroNews'
import { HeroReviews } from '@/components/HeroReviews'
import HeroServices from '@/components/HeroServices'
import OpeningTime from '@/components/OpeningTime'

export default function Home() {

  return (
    <>
      <HeroBanner />
      <HeroNews />
      <HeroServices />
      <HeroAbout />
      <HeroBooking />
      <HeroReviews />
      <OpeningTime />
      <ContactUs />
    </>
  )
}
