// components/HeroCarousel.tsx
"use client"

import React, { useEffect, useState, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { heroContent } from "@/data/hero"


export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <div className="relative overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {heroContent.map((slide, index) => (
            <div
              className="relative min-w-screen h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageURL})` }}
              key={index}
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 md:px-20 text-white">
                <h1 className="hero mb-4">{slide.title}</h1>
                <p className="paragraph text-base mb-6">{slide.subtitle}</p>
                {/* <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                  Book
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute left-4 bottom-4 z-20 flex gap-2">
        <button onClick={scrollPrev} className="p-2 bg-white/70 rounded-full hover:bg-white">
          <ChevronLeft size={20} />
        </button>
        <button onClick={scrollNext} className="p-2 bg-white/70 rounded-full hover:bg-white">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Scroll down prompt */}
      <div className="absolute bottom-6 right-6 z-20 animate-bounce text-white text-sm">
        <div className="flex flex-col items-center">
          <span>Scroll down</span>
          <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  )
}
