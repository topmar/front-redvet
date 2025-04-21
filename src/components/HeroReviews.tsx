import { fetchGoogleReviews } from '@/lib/actions'
import RatingStars from './stars/RatingStars'
import GoogleRating from './GoogleRating'
import { getTranslations } from 'next-intl/server'
import Carousel from './Carousel'
interface review {
  opinionId: number
  text: string
  author: string
  date: string
  stars: number
}

export const HeroReviews = async () => {
  const t = await getTranslations('HeroReviews')
  const reviews = await fetchGoogleReviews()

  return (
    <section className="bg-gray-400 py-10">
      <header className='max-w-7xl mx-auto px-4'>
        <h2 className="text-2xl">{t('title')}</h2>
        <h3>{t('description')}</h3>
      </header>

      <div className="w-full px-3 mx-auto mt-10">
        <Carousel align="start" loop>
          {reviews.map((review: review, i: number) => {
            return (
              <article
                className="relative h-auto flex flex-col flex-[0_0_auto] min-w-[300px] max-w-[300px] md:max-w-[350px] bg-white p-6 rounded-[5] shadow-md last:mr-4"
                key={review.opinionId}
              >
                <div className="mb-4">
                  <p className="text-sm text-gray-800">{review.text}</p>
                </div>
                <div className="flex justify-between items-center pt-2 border-t-1 w-full mt-auto">
                  <span>
                    <p className="text-[1.1rem] mr-5">{review.author}</p>
                    <p className="text-[0.7rem] text-gray-500">{review.date} Google reviews</p>
                  </span>
                  <RatingStars rating={review.stars} size={4} />
                </div>
              </article>
            )
          })}
        </Carousel>
      </div>
      <footer>
        <GoogleRating />
      </footer>
    </section>
  )
}
