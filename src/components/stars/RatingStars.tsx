import StarHalf from './StarHalf'
import Star from './Star'
import StarFull from './StarFull'

interface RatingStarsProps {
  rating: number
  size?: number
}

const RatingStars = ({ rating, size = 7 }: RatingStarsProps) => {
  const sizes: Record<number, string> = {
    4: 'w-4 h-4',
    5: 'w-5 h-5',
    6: 'w-6 h-6',
    7: 'w-7 h-7',
    8: 'w-8 h-8',
    9: 'w-9 h-9',
    10: 'w-10 h-10'
  }
  const starClass = sizes[size]
  const rounded = Math.round(rating * 2) / 2
  const fullStars = Math.floor(rounded)
  const halfStar = rounded % 1 === 0.5 ? 1 : 0
  const emptyStars = 5 - fullStars - halfStar

  return (
    <div className="flex" aria-hidden="true">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} aria-hidden="true">
          <StarFull className={starClass} />
        </span>
      ))}
      {[...Array(halfStar)].map((_, i) => (
        <span key={i} aria-hidden="true">
          <StarHalf className={starClass} />
        </span>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={i} aria-hidden="true">
          <Star className={starClass} />
        </span>
      ))}
    </div>
  )
}

export default RatingStars
