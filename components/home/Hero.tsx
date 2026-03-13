import React from 'react'
import HeroCarousel from './HeroCarousel'
import HeroContentes from './HeroContentes'

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center p-14'>
      <div>
        <HeroContentes />
      </div>

      <HeroCarousel />
    </section>
  )
}

export default Hero