import React from 'react'
import { Badge } from '../ui/badge'
import PackageCarousel from './package.carousel'
import { Button } from '../ui/button'
import Link from 'next/link'

const PackagesSection = () => {
  return (
    <div className='section-margin space-y-4 md:space-y-6 flex flex-col items-center'>
         <Badge className='rounded-full badge'>⭐Explore</Badge>
         <h1 className='heading text-center'>Discover Our Exceptional <br/>Packages</h1>
         <p className='paragraph text-center'>We offer innovative solutions tailored to your needs. Experience seamless integration and outstanding support with every package.</p>
         <PackageCarousel/>
         <Button><Link href="/packages">Find More</Link></Button>
    </div>
  )
}

export default PackagesSection