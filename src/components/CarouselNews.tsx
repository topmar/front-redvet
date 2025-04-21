'use client'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import Dots from './Dots'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Props = PropsWithChildren & EmblaOptionsType & { labels: { prev: string; next: string } }

const CarouselNews = ({ children, labels, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 7000 })
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const length = React.Children.count(children)

  const resetAutoplay = () => {
    emblaApi?.plugins().autoplay?.stop()
    setTimeout(() => emblaApi?.plugins().autoplay?.play(), 7000)
  }

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap()
      setSelectedIndex(index || 0)
    }

    emblaApi?.on('select', selectHandler)
    return () => {
      emblaApi?.off('select', selectHandler)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    let resumeTimeout: NodeJS.Timeout

    const stopAndResume = () => {
      emblaApi.plugins().autoplay?.stop()
      clearTimeout(resumeTimeout)
      resumeTimeout = setTimeout(() => {
        emblaApi.plugins().autoplay?.play()
      }, 7000)
    }

    emblaApi.on('pointerDown', stopAndResume)

    return () => {
      emblaApi.off('pointerDown', stopAndResume)
      clearTimeout(resumeTimeout)
    }
  }, [emblaApi])

  return (
    <div className="w-full flex flex-col items-center">
      <div className="overflow-hidden w-full max-w-200 center h-40" ref={emblaRef}>
        <div className="flex gap-4 h-full">{children}</div>
      </div>

      <div className="flex w-50 justify-between mx-auto items-center" role="navigation">
        <button
          onClick={() => {
            emblaApi?.scrollPrev()
            resetAutoplay()
          }}
          className="p-0 m-0 bg-transparent border-none text-white/80 hover:text-white"
          aria-label={labels.prev}
        >
          <ChevronLeft size={32} />
        </button>
        <Dots itemsLength={length} selectedIndex={selectedIndex} />
        <button
          onClick={() => {
            emblaApi?.scrollNext()
            resetAutoplay()
          }}
          className="p-0 m-0 bg-transparent border-none text-white/80 hover:text-white"
          aria-label={labels.next}
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  )
}

export default CarouselNews
