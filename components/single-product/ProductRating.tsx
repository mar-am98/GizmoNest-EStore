import React from 'react'
import { FaStar } from 'react-icons/fa';
import { fetchProductRating } from '@/utils/actions';

async function ProductRating({ productID }: { productID: string }) {
  const { rating, count } = await fetchProductRating(productID);

  const reviewsText = `(${count}) Reviews`;

  return (
    <span className='flex gap-1 items-center text-md mt-1 mb-4'>
      <FaStar className='w-3 h-3' />
      {rating} {reviewsText}
    </span>
  )
}

export default ProductRating