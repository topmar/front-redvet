import { useLocale, useTranslations } from 'next-intl'
import LocaleSwitcherSelect from './LocaleSwitcherSelect'
import { routing } from '@/i18n/routing'

const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((cur) => (
        <option className='' key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  )
}

export default LocaleSwitcher
