import React from 'react'
import SectionTitle from '../global/SectionTitle'
import ReviewCard from './ReviewCard'
import { fetchProductReviews } from '@/utils/actions';

async function ProductReviews({productId}:{productId:string}) {
  const reviews = await fetchProductReviews(productId);
  return (
    <div className='mt-16'>
      <SectionTitle text='ProductReviews'/>

      <div className='grid md:grid-cols-2 gap-8 my-8'>
          {reviews.map((rev)=>{
            const {comment,rating,authorName,authorImageUrl} = rev;
            const review_info = {
              comment,
              rating,
              name:authorName,
              image:authorImageUrl
            }

            return <ReviewCard key={rev.id} reviewInfo={review_info} />;
          })}
      </div>
      </div>
  )
}

export default ProductReviews