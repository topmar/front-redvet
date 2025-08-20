import { Link } from '@/i18n/navigation'
import { NavPath } from '@/lib/navigation'

type NavLink = {
  label: string
  href: string
}

type NavProps = {
  links: NavLink[]
}

export const Nav = ({ links }: NavProps) => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href as NavPath}
              className="
              inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 h-10 px-6
              text-[1.125rem] font-medium transition-all
              outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px] hover:bg-black hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
