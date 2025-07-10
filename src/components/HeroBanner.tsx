import { LINKS } from '@/lib/constants'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

const HeroBanner = async () => {
  const t = await getTranslations('HeroBanner')
  return (
    <div className="relative w-full h-[88vh] md:h-[95vh] md:min-h-[900px]">
      <Image
        src="/banner.jpg"
        alt=""
        fill
        className="object-cover z-0"
        priority
        aria-hidden="true"
      />
      <section className="relative max-w-7xl mx-auto px-4 pt-[5rem]" aria-labelledby="hero-title">
        <div className="md:inline-block mt-[2rem] md:mt-[10rem] text-center md:text-left">
          <h1
            id="hero-title"
            className="drop-shadow-xl/50 font-medium text-left"
            dangerouslySetInnerHTML={{ __html: t('title-row1') }}
          />
          {/* <h2 className="pl-1 text-xl drop-shadow-xl/50 mt-[1rem] font-medium text-left"> */}
          <h2 className="pl-1 text-xl text-shadow-xl text-shadow-amber-200/50 drop-shadow-xl/50 mt-[1rem] font-medium text-left">
            {t('title-row2')}
          </h2>
          <Link
            href={LINKS.BOOK}
            className="
            inline-flex items-center justify-center whitespace-nowrap transition-all shrink-0
            outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]
            bg-[#f7f7f7] shadow-xs hover:bg-[#f7f7f7]/80
            mt-12 h-12 px-6 w-100 max-w-[70%] font-semibold text-lg"
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
