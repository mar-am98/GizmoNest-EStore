
export const dynamic = 'force-dynamic';
import React from 'react'
import SectionTitle from '@/components/global/SectionTitle';
import ReviewCard from '@/components/reviews/ReviewCard';
import DeleteReviewForm from '@/components/reviews/DeleteReviewForm';
import { fetchProductReviewsByUser } from '@/utils/actions';

async function ReviewsPage() {
  const reviews = await fetchProductReviewsByUser();

  if (reviews.length === 0) {
    return <SectionTitle text='You have no reviews yet' />
  }

  return (
    <div>
      <SectionTitle text='Your Reviews' />
      <div className='grid md:grid-cols-2 gap-8 mt-4'>
        {reviews.map((review) => {
          const { rating, comment, product } = review;
          return (
            <ReviewCard
              key={review.id}
              reviewInfo={{
                comment,
                rating,
                name: product.title,
                image: product.image,
              }}
            >
              <div className="p-6 pt-0">
                <DeleteReviewForm reviewId={review.id} />
              </div>
            </ReviewCard>
          );
        })}
      </div>
    </div>
  )
}

export default ReviewsPage