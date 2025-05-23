'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import clsx from 'clsx'
import { Locale } from 'next-intl'
import { useParams } from 'next/navigation'
import { ChangeEvent, ReactNode, useEffect, useTransition } from 'react'

type Props = {
  children: ReactNode
  defaultValue: string
  label: string
}

export default function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  useEffect(() => {
    const scroll = sessionStorage.getItem('scrollPosition')
    if (scroll) {
      window.scrollTo({ top: parseInt(scroll), behavior: 'smooth' })
      sessionStorage.removeItem('scrollPosition')
    }
  }, [])

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale
    sessionStorage.setItem('scrollPosition', window.scrollY.toString())
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      )
    })
  }

  return (
    <label
      className={clsx(
        'relative text-gray-500 hidden md:block',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="
        inline-flex appearance-none
        outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]
        bg-transparent py-2 pl-2 pr-5"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-2 top-[4px]">⌄</span>
    </label>
  )
}
