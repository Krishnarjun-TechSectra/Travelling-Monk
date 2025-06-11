"use client"

import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const pathname = usePathname()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setHydrated(true)

    const alreadyShown = sessionStorage.getItem("loaderShown")

    if (pathname === "/") {
      if (alreadyShown) {
        setLoading(false)
      } else {
        setLoading(true)
        const timer = setTimeout(() => {
          setLoading(false)
          sessionStorage.setItem("loaderShown", "true")
        }, 5000) // Match the video length / speed-up

        return () => clearTimeout(timer)
      }
    } else {
      setLoading(false)
    }
  }, [pathname])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2 // 2x speed
    }
  }, [loading])

  // ✨ Prevent flashing by rendering nothing until hydration
  if (!hydrated) return null

  if (loading && pathname === "/") {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="w-screen h-screen object-cover"
        >
          <source src="/loading.mp4" type="video/mp4" />
        </video>
      </div>
    )
  }

  return <>{children}</>
}
