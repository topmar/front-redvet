import Link from 'next/link'

const FooterCopyright = () => {
  return (
    <div className="w-full flex items-center justify-center h-10">
      <ul className="flex space-x-4">
        <li>
          &copy;&nbsp;2025&nbsp;
          <Link href="/" className="hover:underline" aria-label="Homepage - RedVet Djurklinik">
            RedVet Djurklinik
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
    </div>
  )
}

export default FooterCopyright
