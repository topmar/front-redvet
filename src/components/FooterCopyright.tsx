import { Link } from '@/i18n/navigation'
import { CookieSettingsModalTrigger } from './CookieSettingsTrigger'
import { LINKS } from '@/lib/constants'

const FooterCopyright = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 mb-5">
      <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full">
        <li className="md:flex-1 md:text-right md:mr-5">
          <Link href={LINKS.PRIVACY_POLICY} className="hover:underline">
            Privacy policy
          </Link>
        </li>
        <hr className="block md:hidden w-1/5 border-t border-gray-500 my-2" aria-hidden="true" />
        <span className="hidden md:inline mx-2 text-gray-500" aria-hidden="true">
          |
        </span>
        <li className="whitespace-nowrap md:mx-5">
          <Link href={LINKS.TERMS_OF_SERVICE} className="hover:underline">
            Terms of service
          </Link>
        </li>
        <hr className="block md:hidden w-1/5 border-t border-gray-500 my-2" aria-hidden="true" />
        <span className="hidden md:inline mx-2 text-gray-500" aria-hidden="true">
          |
        </span>
        <li className="md:flex-1 md:text-left md:ml-5">
          <CookieSettingsModalTrigger title="Cookies management" />
        </li>
      </ul>
      <div className="text-center mt-10 md:mt-0">
        &copy;&nbsp;2025&nbsp;
        <Link href="/" className="hover:underline" aria-label="Homepage - RedVet Djurklinik">
          RedVet Djurklinik
        </Link>
      </div>
    </div>
  )
}

export default FooterCopyright
