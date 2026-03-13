import React from 'react'
import { Product } from '@prisma/client'
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import FavoriteToggleButton from './FavoriteToggleButton';
import { linkPages } from '@/utils/links';
import { formatCurrency } from '@/utils/format';

function ProductsList({
  products,
  favorites = [],
}: {
  products: Product[];
  favorites?: { proudctID: string; id: string }[];
}) {

  return (
    <section className='grid gap-y-8 mt-12'>

      {
        products.map((product) => {
          const productID = product.id;
          const price = formatCurrency(product.price);

          return (

            // Card
            <div className='relative' key={product.id}>
              <Link href={`${linkPages.PRODUCTS.href}/${productID}`}>
                <Card>
                  <CardContent className='p-8 grid md:grid-cols-3'>
                    <div className='relative h-64 md:w-48 md:h-48'>
                      <Image
                        src={product.image}
                        alt={"Product-"}
                        fill
                        priority
                        className='object-cover rounded-lg'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <div>
                      <h2 className='text-lg font-semibold capitalize max-sm:mt-4'>{product.title}</h2>
                      <p className='text-muted-foreground text-sm'>{product.company}</p>
                      <p className='text-muted-foreground mt-4'>{product.decription}</p>
                    </div>

                    <div className='flex gap-4 items-end md:flex-col justify-between text-lg text-center font-semibold'>
                      <p>{price}</p>
                      <FavoriteToggleButton productId={productID} favoriteId={favorites.find(f => f.proudctID === productID)?.id || null} />
                    </div>
                  </CardContent>
                </Card>
              </Link>

            </div>
          )
        })


      }
    </section>
  )
}

export default ProductsList