import { Link } from '@/i18n/navigation'
import { Stethoscope, DoorOpen, CalendarCheck, BadgeDollarSign, Lightbulb } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const icons: LucideIcon[] = [
  Stethoscope, // services
  DoorOpen, // home-visit
  BadgeDollarSign, // prices
  Lightbulb, // advices
  CalendarCheck // book
]

type NavLink = {
  label: string
  href: string
}

type HamburgerMenuProps = {
  isOpen: boolean
  links: NavLink[]
}

const HamburgerMenu = ({ isOpen, links }: HamburgerMenuProps) => (
  <nav className={`hamburger-menu ${isOpen ? 'hamburger-menu-open' : ''}`}>
    {links.map(({ href, label }, index) => {
      const Icon = icons[index] || Stethoscope
      return (
        <Link
          key={href}
          href={href}
          className="flex items-center gap-2 py-2 px-4 group hover:bg-gray-100 transition-colors"
        >
          <Icon className="w-4 h-4 mr-4 text-gray-700 group-hover:text-black" />
          <span className="text-gray-800 group-hover:text-black">{label}</span>
        </Link>
      )
    })}
  </nav>
)

export default HamburgerMenu
