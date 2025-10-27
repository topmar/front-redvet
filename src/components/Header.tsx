'use client'
import { useEffect, useState } from 'react'
import Logo from './logo/Logo'
import { Nav } from './Nav'
import LocaleSwitcher from './localeswitcher/LocaleSwitcher'
import MobileMenuWrapper from './hamburger-menu/MobileMenuWrapper'
import { useTranslations } from 'next-intl'
import { NAV_ITEMS } from '@/lib/navigation'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const t = useTranslations('Navigation')
  const links = NAV_ITEMS.map((item) => ({
    label: t(item.path.replace('/', '')),
    href: item.path
  }))

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-200 ${scrolled ? 'bg-white' : ''}`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-white text-black p-2 rounded shadow"
      >
        Skip to content
      </a>
      <div className="flex items-center justify-between max-w-7xl mx-auto h-[5rem] w-full px-4">
        <Logo isLink={true} isColor={true} />
        <Nav links={links} />
        <LocaleSwitcher />
        <MobileMenuWrapper links={links} />
      </div>
    </header>
  )
}

export default Header
