import { Link } from '@/i18n/navigation'
import { LINKS } from '@/lib/constants'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

const HeroServices = async () => {
  const t = await getTranslations('HeroServices')
  return (
    <section className="flex flex-col h-90 md:flex-row md:h-60 w-full gap-[1] mt-[1]">
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
          className="group absolute inset-0 flex items-center justify-center text-center text-white text-xl font-medium bg-black/50 hover:bg-black/35 transition duration-300 ease-in-out"
          title={t('vaccination.aria-label')}
          aria-label={t('vaccination.aria-label')}
        >
          <div className="relative">
            <div className="flex items-center justify-center min-h-[1em]">
              {t('vaccination.text')}
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 md:mt-3 whitespace-nowrap text-sm text-gray-300 group-hover:text-gray-100 transition duration-100 ease-in-out italic">
              {t('read-more')}
            </div>
          </div>
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
            className="group absolute inset-0 flex items-center justify-center text-center text-white text-xl font-medium bg-black/50 hover:bg-black/35 transition duration-300 ease-in-out"
            title={t('veterinary-care.aria-label')}
            aria-label={t('veterinary-care.aria-label')}
          >
            <div className="relative">
              <pre className="flex items-center justify-center min-h-[1em]">
                {t('veterinary-care.text')}
              </pre>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 md:mt-3 whitespace-nowrap text-sm text-gray-300 group-hover:text-gray-100 transition duration-100 ease-in-out italic">
                {t('read-more')}
              </div>
            </div>
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
            className="group absolute inset-0 flex items-center justify-center text-center text-white text-xl font-medium bg-black/50 hover:bg-black/35 transition duration-300 ease-in-out"
            title={t('end-of-life.aria-label')}
            aria-label={t('end-of-life.aria-label')}
          >
            <div className="relative">
              <pre className="flex items-center justify-center min-h-[1em]">
                {t('end-of-life.text')}
              </pre>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 md:mt-3 whitespace-nowrap text-sm text-gray-300 group-hover:text-gray-100 transition duration-100 ease-in-out italic">
                {t('read-more')}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroServices
