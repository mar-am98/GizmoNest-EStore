import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import Comment from './Comment'
import Image from 'next/image'
import Rating from './Rating'

type Props = {
    reviewInfo : {
      comment:string,
      rating:number,
      name:string,
      image:string
    },
    children? : React.ReactNode
}

function ReviewCard({reviewInfo,children}:Props) {
  return (
    <Card>
      <CardHeader>
        <div className='flex items-center gap-4'>
          <Image 
            src={reviewInfo.image}
            alt={reviewInfo.name}
            width={44}
            height={44}
            className='w-12 h-12 rounded-full capitalize mb-1'
            />
            <div className=''>
               <h3 className='text-sm font-bold capitalize mb-1'>
                {reviewInfo.name}
               </h3>
               <Rating  rating={reviewInfo.rating}/>
            </div>
        </div>

      </CardHeader>
      <CardContent>
        {reviewInfo.comment}
      </CardContent>
      <div>
        {children}
      </div>
    </Card>
  )
}

export default ReviewCard