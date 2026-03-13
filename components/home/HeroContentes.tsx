import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { linkPages } from '@/utils/links'

function HeroContentes() {
  return (
    <div>
      <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
            Soft, Modern Furniture for Your Cozy Space
      </h1>
      <p className='mt-6 max-w-xl text-lg leading-8 text-gray-600'>
        Discover pastel chairs, soft rugs, and cute home essentials curated to bring calm, style, and Instagram-worthy vibes to your living space.
      </p>
      <Button asChild size='lg' className='mt-10 bg-primary hover:bg-primary/80 text-white'>
        <Link href={linkPages.PRODUCTS.href}>
          Explore the Collection
        </Link>
      </Button>
    </div>
  )
}

export default HeroContentes