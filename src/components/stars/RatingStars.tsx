import StarHalf from './StarHalf'
import Star from './Star'
import StarFull from './StarFull'

interface RatingStarsProps {
  rating: number
  size?: number
}

const RatingStars = ({ rating, size = 7 }: RatingStarsProps) => {
  const starClass = `w-${size} h-${size}`
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
