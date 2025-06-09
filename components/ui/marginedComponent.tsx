"use client"
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  styles?: string
}

const MarginedComponent = ({ children, styles }: Props ) => {
  return (
    <div className={`max-w-screen-xl mx-auto w-full px-4 md:px-6  ${styles}`}>{children}</div>
  )
}

export default MarginedComponent