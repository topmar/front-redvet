import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LogoSVG from './LogoSVG'
import clsx from 'clsx'

interface LogoProps {
  className?: string
  isLink?: boolean
  isColor?: boolean
}

const Logo = ({ className = '', isLink = false, isColor = false }: LogoProps) => {
  const t = useTranslations('Logo')
  const logoImage = (
    <LogoSVG className={clsx('h-[70%] w-auto mt-[5%]', className)} isColor={isColor} />
  )

  return (
    <div className="h-full">
      {isLink ? (
        <Link href={'/'} aria-label={t('aria-link-homepage')}>
          {logoImage}
        </Link>
      ) : (
        logoImage
      )}
    </div>
  )
}

export default Logo
