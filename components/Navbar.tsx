"use client"

import { useState, useEffect } from "react"
import MarginedComponent from "./ui/marginedComponent"
import { navLinks } from "@/data/navlinks"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [animationPhase, setAnimationPhase] = useState(0)
  // 0: closed, 1: hamburger merging, 2: menu opening, 3: cross forming

  const toggleMenu = () => {
    if (!isOpen) {
      // Opening sequence
      setAnimationPhase(1) // Start hamburger merging
      setTimeout(() => {
        setIsOpen(true) // Show menu after hamburger merges
        setTimeout(() => {
          setAnimationPhase(3) // Form cross after menu appears
        }, 400)
      }, 400)
    } else {
      // Closing sequence
      setAnimationPhase(1) // Start cross merging back to line
      setTimeout(() => {
        setIsOpen(false) // Hide menu
        setTimeout(() => {
          setAnimationPhase(0) // Back to hamburger
        }, 800)
      }, 400)
    }
  }

  // Reset animation phase when component unmounts
  useEffect(() => {
    return () => {
      setAnimationPhase(0)
    }
  }, [])

  return (
    <>
      <div className="h-20 backdrop-blur-lg flex  shadow-sm z-50 fixed w-full top-0">
        <MarginedComponent styles="py-4 flex items-center justify-between w-full">
          {/* Logo */}
          <img src="/assets/logo.png" className="h-16" alt="Logo" />

          {/* Hamburger Menu Button */}
          <div className="cursor-pointer p-2 z-50 relative" onClick={toggleMenu}>
            <div className="w-[30px] h-6 relative flex flex-col justify-between">
              <span
                className={`w-full h-[3px] bg-gray-800 rounded-full transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform origin-center
                ${animationPhase >= 1 ? "translate-y-[10.5px]" : ""} 
                ${animationPhase >= 3 ? "rotate-45" : ""}`}
              ></span>
              <span
                className={`w-full h-[3px] bg-gray-800 rounded-full transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                ${animationPhase >= 1 ? "opacity-0 scale-x-0" : ""}`}
              ></span>
              <span
                className={`w-full h-[3px] bg-gray-800 rounded-full transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform origin-center
                ${animationPhase >= 1 ? "-translate-y-[10.5px]" : ""} 
                ${animationPhase >= 3 ? "-rotate-45" : ""}`}
              ></span>
            </div>
          </div>
        </MarginedComponent>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-br z-20 from-white via-blue-150 to-blue-300 overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Close Button - Cross Symbol inside menu */}
            {/* <motion.div
              className="absolute "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              <div className="cursor-pointer p-2" onClick={toggleMenu}>
                <div className="w-[30px] h-6 relative flex flex-col justify-between">
                  <span className="w-full h-[3px] bg-gray-800 rounded-full transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform origin-center translate-y-[10.5px] rotate-45"></span>
                  <span className="w-full h-[3px] bg-gray-800 rounded-full transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] opacity-0 scale-x-0"></span>
                  <span className="w-full h-[3px] bg-gray-800 rounded-full transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform origin-center -translate-y-[10.5px] -rotate-45"></span>
                </div>
              </div>
            </motion.div> */}

            <div className="flex h-full w-full md:flex-row flex-col ">
              {/* Navigation Section - Top on mobile, Right on desktop */}
              <div className="flex-1 flex items-center justify-center p-8 order-1 md:order-2">
                <motion.div
                  className="flex flex-col gap-6 md:gap-8 items-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {navLinks.map(({ title, href }, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.5 + i * 0.1,
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <Link
                        href={href}
                        className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-blue-600 transition-all duration-300 relative overflow-hidden hover:translate-x-2.5 inline-block group"
                        onClick={() => toggleMenu()}
                      >
                        {title}
                        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.5 + navLinks.length * 0.1,
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <Button
                      className="mt-6 md:mt-8 py-3 md:py-4 px-6 md:px-8 text-lg md:text-2xl font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                      onClick={() => toggleMenu()}
                    >
                      Explore
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Image Section - Bottom on mobile, Left on desktop */}
              <motion.div
                className="flex-1 flex items-center justify-center p-8 bg-white/30 backdrop-blur-sm order-2 md:order-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Menu Background"
                  className="max-w-full max-h-[80%] object-cover rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
