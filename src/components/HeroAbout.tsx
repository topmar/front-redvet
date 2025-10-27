import Image from 'next/image'
import { fetchContact } from '@/lib/actions'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { LINKS } from '@/lib/constants'

const HeroAbout = async () => {
  const t = await getTranslations('HeroAbout')
  const tel = await fetchContact()
  return (
    <section className="mt-[1] w-full">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,50rem)_minmax(0,30rem)_minmax(0,1fr)] w-full">
        <div className="hidden md:block" />
        <div className="order-2 md:order-1 flex flex-col px-6 justify-center py-10 mx-auto md:ml-0">
          <h2 className="text-2xl font-bold max-w-150 text-center">{t('title')}</h2>
          <p className="mt-8 text-justify text-pretty max-w-150">
            {t('description').replace(/\s([aiouwzAIUOWZ])\s/g, ' $1\u00A0')}
          </p>
          <h3 className="text-xl mt-4 text-center max-w-150">
            {t.rich('subtitle', {
              link: (chunks) => (
                <a href={`tel:${tel.telephone.replace(/\s/g, '')}`} className="underline whitespace-nowrap">
                  {chunks}
                </a>
              ),
              tel: tel.telephone
            })}
          </h3>
          <Link
            // href={t('link')}
            href={LINKS.ABOUT}
            className="
            inline-flex items-center justify-center whitespace-nowrap transition-all shrink-0
            outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]
            bg-neutral-700 hover:bg-neutral-800
            mt-8 h-10 px-6 font-semibold text-base text-center text-white w-full max-w-150"
          >
            {t('link-text')}
          </Link>
        </div>
        <div className="order-1 md:order-2 relative col-span-2 h-80 md:h-auto md:my-10">
          <Image
            src="/vet.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover md:rounded-s-[5px] h-full"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroAbout
