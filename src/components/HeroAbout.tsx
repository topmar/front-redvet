import Image from 'next/image'
import { fetchContact } from '@/lib/actions'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

const HeroAbout = async () => {
  const t = await getTranslations('HeroAbout')
  const tel = await fetchContact()
  return (
    <section className="my-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,50rem)_minmax(0,30rem)_minmax(0,1fr)] w-full md:h-96">
        <div className="hidden md:block" />
        <div className="order-2 md:order-1 flex flex-col pl-4 pr-8 justify-center">
          <h2 className="text-2xl font-bold mt-5 md:mt-0">{t('title')}</h2>
          <h3 className="text-xl mt-2">
            {t.rich('subtitle', {
              link: (chunks) => (
                <a href={`tel:${tel.telephone.replace(/\s/g, '')}`} className="underline">
                  {chunks}
                </a>
              ),
              tel: tel.telephone
            })}
          </h3>
          <p className="mt-4 text-justify text-pretty max-w-150">
            {t('description').replace(/\s([aiouwzAIUOWZ])\s/g, ' $1\u00A0')}
          </p>
          <Link
            href={t('link')}
            className="
            inline-flex items-center justify-center whitespace-nowrap transition-all shrink-0
            outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]
            bg-neutral-700 hover:bg-neutral-800
            mt-8 h-10 px-6 mx-auto w-[70%] md:mx-0 font-semibold text-base text-center text-white"
          >
            {t('link-text')}
          </Link>
        </div>
        <div className="order-1 md:order-2 relative col-span-2 h-100">
          <Image
            src="/vet.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover rounded-s-[5px]"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroAbout
