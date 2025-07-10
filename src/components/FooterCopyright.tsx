import Link from 'next/link'

const FooterCopyright = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 mb-5">
      <ul className="flex space-x-4">
        <li>
          <Link href="/privacy-policy" className="hover:underline" aria-label="Privacy policy">
            Privacy policy
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link href="/terms-of-service" className="hover:underline" aria-label="Terms of service">
            Terms of service
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link
            href="/cookies-management"
            className="hover:underline"
            aria-label="Cookies management"
          >
            Cookies management
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link
            href="/sitemap"
            className="hover:underline"
            aria-label="Sitemap - RedVet Djurklinik"
          >
            Sitemap
          </Link>
        </li>
      </ul>
      <div>
        &copy;&nbsp;2025&nbsp;
        <Link href="/" className="hover:underline" aria-label="Homepage - RedVet Djurklinik">
          RedVet Djurklinik
        </Link>
      </div>
    </div>
  )
}

export default FooterCopyright
