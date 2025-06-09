"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const container = containerRef.current

    if (!section || !container) return

    const totalScrollWidth = container.scrollWidth - window.innerWidth

    const ctx = gsap.context(() => {
      gsap.to(container, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${container.scrollWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="h-screen overflow-hidden relative">
      <div
        ref={containerRef}
        className="flex space-x-10 h-full px-10 items-center"
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="min-w-[80vw] h-[80vh] bg-blue-500 rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-xl"
          >
            Slide {index + 1}
          </div>
        ))}
      </div>
    </section>
  )
}
