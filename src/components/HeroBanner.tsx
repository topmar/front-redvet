import { LINKS } from '@/lib/constants'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

const HeroBanner = async () => {
  const t = await getTranslations('HeroBanner')
  return (
    <div className="relative w-full h-screen md:h-[900px]">
      <Image
        src="/banner.jpg"
        alt=""
        fill
        className="object-cover z-0"
        priority
        aria-hidden="true"
      />
      <section className="relative max-w-7xl mx-auto px-4 pt-[5rem]" aria-labelledby="hero-title">
        <div className="w-full md:inline-block text-left mt-[2rem] md:mt-[10rem]">
          <h1
            id="hero-title"
            className="text-3xl drop-shadow-xl/50 font-medium md:text-5xl"
            dangerouslySetInnerHTML={{ __html: t('title-row1') }}
          />
          <h2 className="pl-1 text-xl drop-shadow-xl/50 mt-[1rem] font-medium">
            {t('title-row2')}
          </h2>
          <Link
            href={LINKS.BOOK}
            // className="block text-center mt-8 w-100 font-semibold text-base max-w-[70%] mx-auto md:mx-0"
            className="
            inline-flex items-center justify-center whitespace-nowrap transition-all shrink-0
            outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]
            bg-[#f7f7f7] shadow-xs hover:bg-[#f7f7f7]/80
            mt-8 h-10 px-6 w-full max-w-[70%] mx-auto md:mx-0 font-semibold text-base text-center"
            aria-label={t('button-book-appointment')}
          >
            {t('button-book-appointment')}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HeroBanner
