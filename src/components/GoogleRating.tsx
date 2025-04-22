import { fetchGoogleRating } from '@/lib/actions'
import RatingStars from './stars/RatingStars'
import { getTranslations } from 'next-intl/server'

const GoogleRating = async () => {
  const t = await getTranslations('GoogleRating')
  const { rating, reviewCount } = await fetchGoogleRating()
  return (
    <div className="flex flex-col items-center mt-6">
      <div className="flex items-center space-x-1">
        <span
          className="text-2xl font-bold text-red-900"
          aria-label={t('rating', { rating: rating.toFixed(1) })}
        >
          {rating.toFixed(1)}
        </span>
        <RatingStars rating={rating} />
      </div>
      <span className="ml-2 text-sm">({t('reviews', { count: reviewCount })})</span>
    </div>
  )
}

export default GoogleRating
