import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import ProductReviews from '@/components/reviews/ProductReviews';
import SubmitReview from '@/components/reviews/SubmitReview';
import AddToCart from '@/components/single-product/AddToCart';
import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import ProductRating from '@/components/single-product/ProductRating';
import ShareButton from '@/components/single-product/ShareButton';
import { fetchSingleProduct, findExistingReview } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import React from 'react'

interface Props {
  id: string
}


async function ProductDetails({ params }: { params: Promise<Props> }) {

  const { id } = await params;

  const product = await fetchSingleProduct(id);
  const { userId } = await auth();
  const reviewDoesNotExist = userId ? !(await findExistingReview(userId, product.id)) : false;

  const price = formatCurrency(product.price);

  return (
    <section>
      <BreadCrumbs name={product.title} />
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        <div className='relative h-[500px] lg:h-full'>
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className='w-full rounded-md object-cover'
          />
        </div>
        {/* Product Info */}
        <div>
          <div className='flex gap-x-8 items-center'>
            <h1 className='capitalize text-3xl font-bold'>
              {product.title}
            </h1>
            <div className='flex gap-x-2'>
              <FavoriteToggleButton productId={product.id} />
              <ShareButton productId={id} name={product.title} />
            </div>

          </div>

          <ProductRating productID={product.id} />
          <h4 className='text-lg mt-2'>
            {product.company}
          </h4>
          <p className='mt-2 text-md bg-muted inline-block p-2 rounded-md'>
            {price}
          </p>
          <p className='mt-6 leading-8 text-muted-foreground'>
            {product.decription}
          </p>

          <AddToCart productID={product.id} />

        </div>
      </div>

      <ProductReviews productId={id} />

      {reviewDoesNotExist && <SubmitReview productId={id} />}
    </section>
  )
}

export default ProductDetails