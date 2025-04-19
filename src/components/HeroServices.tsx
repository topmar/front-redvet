import { LINKS } from '@/lib/constants'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

const HeroServices = () => {
  const t = useTranslations('HeroServices')
  return (
    <section className="flex flex-col h-90 md:flex-row md:h-60 w-full gap-[1]">
      <div className="relative flex-1">
        <Image
          src="/vaccination.jpg"
          alt=""
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="absolute object-cover"
          aria-hidden="true"
        />
        <Link
          href={LINKS.SERVICES_VACCINATIONS}
          className="absolute inset-0 flex items-center justify-center text-center text-white text-xl font-medium bg-black/50 hover:bg-black/35 transition duration-300 ease-in-out"
          title={t('vaccination.aria-label')}
          aria-label={t('vaccination.aria-label')}
        >
          {t('vaccination.text')}
        </Link>
      </div>
      <div className="flex-1 flex">
        <div className="relative flex-1">
          <Image
            src="/vet_at_home.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="absolute object-cover"
            aria-hidden="true"
          />
          <Link
            href={LINKS.SERVICES_VETERINARY_CARE_AT_HOME}
            className="absolute inset-0 flex items-center justify-center text-center text-white text-xl font-medium bg-black/50 hover:bg-black/35 transition duration-300 ease-in-out"
            title={t('veterinary-care.aria-label')}
            aria-label={t('veterinary-care.aria-label')}
          >
            <pre>{t('veterinary-care.text')}</pre>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex">
        <div className="relative flex-1">
          <Image
            src="/end_of_life.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="absolute object-cover"
            aria-hidden="true"
          />
          <Link
            href={LINKS.SERVICES_END_OF_LIFE_CARE}
            className="absolute inset-0 flex items-center justify-center text-center text-white text-xl font-medium bg-black/50 hover:bg-black/35 transition duration-300 ease-in-out"
            title={t('end-of-life.aria-label')}
            aria-label={t('end-of-life.aria-label')}
          >
            <pre>{t('end-of-life.text')}</pre>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroServices
