import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import db  from "@/utils/db";
import Image from 'next/image'

async function HeroCarousel() {
  const heroImages = await db.hero.findMany();

  return (
    <div className='lg:block hidden'>
        <Carousel>
          <CarouselContent>
            {
              heroImages.map((ob)=>(
                <CarouselItem key={ob.id}>
                  <div className='p-2 border-1 border-blue-50 rounded-lg'>
                    <Image 
                      src={ob.image}
                      alt={ob.title}
                      width={400}
                      height={400}
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className='object-cover w-full h-[440px] rounded-md'
                    />
                  </div>
                </CarouselItem>
              ))
            }
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
  )
}

export default HeroCarousel