"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/") {
      const timer = setTimeout(() => setLoading(false), 10000) // Match your video length
      return () => clearTimeout(timer)
    } else {
      setLoading(false) // Instantly show content on non-home pages
    }
  }, [pathname])

  if (loading && pathname === "/") {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/loading.mp4" type="video/mp4" />
        </video>
      </div>
    )
  }

  return <>{children}</>
}
