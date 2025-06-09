"use client"
import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {

  
  return (
    <div>
        <Navbar/>
        <div className='my-8'>
 {children}
        </div>
       
        <Footer/>
    </div>
  )
}

export default PageLayout