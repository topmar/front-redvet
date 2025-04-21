import clsx from 'clsx'

type Props = {
  itemsLength: number
  selectedIndex: number
}
const Dots = ({ itemsLength, selectedIndex }: Props) => {
  const arr = new Array(itemsLength).fill(0)
  return (
    <div className="flex gap-1 justify-center">
      {arr.map((_, index) => {
        const selected = index === selectedIndex
        return (
          <div
            className={clsx(
              'h-2 w-2 rounded-full transition-colors duration-300',
              selected ? 'bg-white' : 'bg-white/30'
            )}
            key={index}
          />
        )
      })}
    </div>
  )
}
export default Dots
