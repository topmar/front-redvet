'use client'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { EmblaOptionsType } from 'embla-carousel'
import React from 'react'
import { PropsWithChildren, useEffect } from 'react'

type Props = PropsWithChildren & EmblaOptionsType

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({speed: 0.5, playOnInit: true})
  ])

  useEffect(() => {
    if (!emblaApi) return

    let resumeTimeout: NodeJS.Timeout

    const stopAndResume = () => {
      emblaApi.plugins().autoScroll?.stop()
      clearTimeout(resumeTimeout)
      resumeTimeout = setTimeout(() => {
        emblaApi.plugins().autoScroll?.play()
      }, 7000)
    }

    emblaApi.on('pointerDown', stopAndResume)

    return () => {
      emblaApi.off('pointerDown', stopAndResume)
      clearTimeout(resumeTimeout)
    }
  }, [emblaApi])

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">{children}</div>
      </div>
    </>
  )
}
export default Carousel
