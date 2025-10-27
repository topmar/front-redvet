import { useTranslations } from 'next-intl'
import LogoSVG from './LogoSVG'
import clsx from 'clsx'
import { Link } from '@/i18n/navigation'

interface LogoProps {
  className?: string
  isLink?: boolean
  isColor?: boolean
  footer?: boolean
}

const Logo = ({ className = '', isLink = false, isColor = false, footer = false }: LogoProps) => {
  const t = useTranslations('Logo')
  const content = isLink ? (
    <Link href="/" aria-label={t('aria-link-homepage')}>
      <LogoSVG className={clsx('h-[70%] w-auto mt-[5%]', className)} isColor={isColor} />
    </Link>
  ) : (
    <LogoSVG className={clsx('h-[70%] w-auto mt-[5%]', className)} isColor={isColor} />
  )

  return footer ? content : <div className="h-full">{content}</div>
}

export default Logo
