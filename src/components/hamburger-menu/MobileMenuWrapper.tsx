'use client'

import { useEffect, useState } from 'react'
import HamburgerIcon from './HamburgerIcon'
import HamburgerMenu from './HamburgerMenu'

type NavLink = {
  label: string
  href: string
}

type NavProps = {
  links: NavLink[]
}

const MobileMenuWrapper = ({ links }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)

  useEffect(() => {
    const handleInteraction = () => {
      if (window.innerWidth >= 1024 || window.scrollY > 0) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleInteraction)
    window.addEventListener('scroll', handleInteraction)
    return () => {
      window.removeEventListener('resize', handleInteraction)
      window.removeEventListener('scroll', handleInteraction)
    }
  }, [])

  return (
    <div className="block lg:hidden">
      <HamburgerIcon isOpen={isOpen} toggle={toggleMenu} />
      <HamburgerMenu isOpen={isOpen} links={links} />
    </div>
  )
}

export default MobileMenuWrapper
