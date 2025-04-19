type SeparatorProps = {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

const Separator = ({ orientation = 'vertical', className = '' }: SeparatorProps) => {
  return (
    <div
      className={`bg-gray-800 ${
        orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full'
      } ${className}`}
      aria-hidden="true"
    />
  )
}

export default Separator
