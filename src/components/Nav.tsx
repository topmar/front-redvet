"use client"
import { useMessages, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export const Nav = () => {
  const t = useTranslations('Navigation')
  const links = Object.keys(useMessages().Navigation)

  return (
    <nav className="hidden md:block">
      <ul className="flex">
        {links.map((key) => (
          <li key={key}>
            <Link
              href={`/${key}`}
              className="
              inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 h-10 px-6
              text-[1.125rem] font-medium transition-all
              outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px] hover:bg-black hover:text-white"
            >
              {t(key)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
