import Link from 'next/link'
import Image from 'next/image'
import InstagramLogoSVG from './InstagramLogoSVG'
import Logo from './logo/Logo'
import ContactFooter from './ContactFooter'
import GoogleRating from './GoogleRating'
import { getTranslations } from 'next-intl/server'

const FooterInfo = async () => {
  const t = await getTranslations("FooterInfo")
  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <Logo
          isLink={false}
          isColor={false}
          className="max-h-15 items-center mx-auto -translate-x-1 md:ml-0"
        />
        <div className="flex flex-col items-center">
          <div className="flex gap-x-8">
            <Link
              href="https://www.facebook.com/profile.php?id=61554795244218"
              title={t('facebook-title')}
              aria-label={t('facebook-link')}
            >
              <Image src="/f_logo_black.png" alt="" width={40} height={40} aria-hidden="true" />
            </Link>
            <Link
              href="https://www.instagram.com/redvetdjurklinik/"
              title={t('instagram-title')}
              aria-label={t('instagram-link')}
            >
              <InstagramLogoSVG />
            </Link>
          </div>
          <GoogleRating />
        </div>
        <ContactFooter className="mx-auto md:mr-0" />
      </div>
    </div>
  )
}

export default FooterInfo
