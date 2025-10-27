import Image from 'next/image'
import InstagramLogoSVG from './InstagramLogoSVG'
import ContactFooter from './ContactFooter'
import GoogleRating from './GoogleRating'
import { getTranslations } from 'next-intl/server'
import LogoSVG from './logo/LogoSVG'
import { Link } from '@/i18n/navigation'
import { NAV_ITEMS } from '@/lib/navigation'

const FooterInfo = async () => {
  const t = await getTranslations('FooterInfo')
  const t2 = await getTranslations('Navigation')
  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center ">
          <LogoSVG className="w-45 -translate-y-6 -translate-x-2" />
          <ContactFooter className="mx-auto" />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-x-8">
            <a
              href="https://www.facebook.com/redvetdjurklinik"
              title={t('facebook-title')}
              aria-label={t('facebook-link')}
            >
              <Image src="/f_logo_black.png" alt="" width={40} height={40} aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/redvetdjurklinik/"
              title={t('instagram-title')}
              aria-label={t('instagram-link')}
            >
              <InstagramLogoSVG />
            </a>
          </div>
          <GoogleRating />
        </div>
        <div className="">
          <ul className="flex flex-col items-center text-xl font-semibold gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className="whitespace-nowrap hover:underline">
                  {t2(item.path.replace('/', ''))}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterInfo
