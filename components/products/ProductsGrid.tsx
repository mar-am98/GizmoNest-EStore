import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import FavoriteToggleButton from './FavoriteToggleButton'
import Image from 'next/image'
import { Product } from '@prisma/client'
import { formatCurrency } from '@/utils/format'

function ProductsGrid({
  products,
  favorites = [],
}: {
  products: Product[];
  favorites?: { proudctID: string; id: string }[];
}) {
  return (
    <div className='pt-12 grid gap-4 lg:grid-cols-3 md:grid-cols-2'>

      {/* CARD */}
      {products.map(function (ob) {

        const { id, image, title, price } = ob;
        const get_price = formatCurrency(price);


        return (
          <div className='relative' key={id}>
            <Link href={`/products/${id}`}>
              <Card className='transform hover:shadow-xl transition-shadow duration-300'>
                <CardContent className='px-4'>
                  <div className='relative h-64 md:46 overflow-hidden' >
                    <Image
                      src={image}
                      alt={`Product-${title}`}
                      fill
                      priority
                      className='object-cover rounded-lg'
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                    />
                  </div>
                  <div className='mt-4 text-center'>
                    <h2 className='text-lg capitalize'>{title}</h2>
                    <p className='text-muted-foreground mt-2'>{get_price}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/*Fav toggleButton */}
            <div className='absolute top-8 right-8 z-8'>
              <FavoriteToggleButton productId={id} favoriteId={favorites.find(f => f.proudctID === id)?.id || null} />
            </div>
          </div>
        );
      })}

    </div>
  )
}

export default ProductsGrid