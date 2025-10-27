import { Link } from '@/i18n/navigation'
import { LINKS } from '@/lib/constants'
import { getTranslations } from 'next-intl/server'

const HeroBooking = async () => {
  const t = await getTranslations('HeroBooking')
  return (
    <section className="relative bg-red-500 text-center p-13" aria-labelledby="hero-booking">
      <h2 id="hero-booking" className="text-2xl text-white">
        {t('title')}
      </h2>
      <Link
        href={LINKS.BOOK}
        className="
      inline-flex items-center justify-center whitespace-nowrap transition-all shrink-0
      outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]
      bg-[#f7f7f7] shadow-xs hover:bg-[#f7f7f7]/80
      mt-8 h-10 px-6 min-w-60 mx-auto md:mx-0 font-medium text-base text-center text-[1.05]"
      >
        {t('link')}
      </Link>
    </section>
  )
}

export default HeroBooking
