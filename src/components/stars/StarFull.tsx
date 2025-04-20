import clsx from "clsx"

interface StarFullProps {
  className?: string
}

const StarFull = ({ className }: StarFullProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={clsx('w-4 h-4 fill-amber-500', className)}
    >
      <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
    </svg>
  )
}

export default StarFull
