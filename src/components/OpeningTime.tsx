import { fetchOpeningTime } from '@/lib/actions'
import { getLocale, getTranslations } from 'next-intl/server'
import Separator from './Separator'

interface OpeningTimeEntry {
  openingTimeId: number
  day: string
  time: string
  active: boolean
}

const OpeningTime = async () => {
  const t = await getTranslations('OpeningTime')
  const openingTimes = await fetchOpeningTime(await getLocale())
  const days = openingTimes.slice(0, 7)
  const lunch = openingTimes[7]
  const activeDays: OpeningTimeEntry[] = days.filter((day: OpeningTimeEntry) => day.active)

  return (
    <section className="flex flex-col max-w-7xl mx-auto py-6 px-4" aria-labelledby="opening-time">
      <h2 id="opening-time" className="text-2xl font-semibold mb-6 text-left">
        {t('title')}
      </h2>

      <details className="md:hidden border rounded-md p-4">
        <summary className="cursor-pointer font-medium text-lg">
          {t('expand')}
        </summary>
        <div className="mt-4 flex flex-col gap-3">
          {activeDays.map((entry) => (
            <div key={entry.openingTimeId} className="flex flex-row justify-between border-b pb-1">
              <span className="uppercase font-medium">{entry.day}</span>
              <span className="text-gray-800">{entry.time}</span>
            </div>
          ))}
          {lunch && lunch.active && (
            <div className="flex flex-row justify-between border-b pb-1">
              <span className="uppercase font-medium">{lunch.day}</span>
              <span className="text-gray-800">{lunch.time}</span>
            </div>
          )}
        </div>
      </details>

      <div className="hidden md:flex flex-wrap justify-center gap-4 w-full flex-col md:flex-row">
        {activeDays.map((entry, index) => (
          <div
            key={entry.openingTimeId}
            className="flex h-10 items-center mb-3 gap-x-4 text-sm justify-center flex-col md:flex-row"
          >
            <div className="flex flex-row border-b-2 md:border-b-0 justify-between w-[80%] md:flex-col md:text-center min-w-[7rem]">
              <span className="font-medium text-lg uppercase">{entry.day}</span>
              <span className="text-base text-gray-800">{entry.time}</span>
            </div>
            {index < activeDays.length - 1 && <Separator className="hidden md:block" />}
          </div>
        ))}
        {lunch && lunch.active && (
          <div key="lunch" className="w-full flex justify-center mt-4">
            <div className="flex flex-row border-b-2 mb-3 md:border-b-0 justify-between w-[80%] md:flex-col md:text-center min-w-[7rem]">
              <span className="font-medium text-lg uppercase">{lunch.day}</span>
              <span className="text-base text-gray-800">{lunch.time}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default OpeningTime
