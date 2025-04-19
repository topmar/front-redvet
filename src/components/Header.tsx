'use client'
import { useEffect, useState } from 'react'
import Logo from './logo/Logo'
import { Nav } from './Nav'
import LocaleSwitcher from './localeswitcher/LocaleSwitcher'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
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
      <div className="flex items-center justify-between max-w-7xl mx-auto h-[5rem] w-full px-4">
        <Logo isLink={true} isColor={true} />
        <Nav />
        <LocaleSwitcher />
      </div>
    </header>
  )
}

export default Header
