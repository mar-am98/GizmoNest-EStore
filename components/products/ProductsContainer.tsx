import React from 'react'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { LuLayoutGrid, LuLayoutList } from 'react-icons/lu'
import { Button } from '../ui/button'
import { linkPages } from '@/utils/links'
import ProductsGrid from './ProductsGrid'
import { fetchAllProducts, fetchFavorites } from '@/utils/actions'
import ProductsList from './ProductsList'

interface props {
  layout: string
  search: string
}

async function ProductsContainer({ layout, search }: props) {

  const products = await fetchAllProducts({ search })
  const favorites = await fetchFavorites()
  const totalProduct = products.length

  const searchTerms = search ? `&search=${search}` : ''

  return (
    <>
      <section className='mt-15'>

        <div className='flex justify-between items-center'>

          <h2 className='font-medium text-2xl'>
            Total Product{totalProduct > 1 && 's'}
          </h2>

          <div className='flex gap-x-3 items-center'>

            <Button
              variant={layout === 'grid' ? 'outline' : 'ghost'}
              size={'icon'}
              asChild
            >
              <Link href={`${linkPages.PRODUCTS.href}?layout=grid${searchTerms}`}>
                <LuLayoutGrid />
              </Link>
            </Button>

            <Button
              variant={layout === 'list' ? 'outline' : 'ghost'}
              size={'icon'}
              asChild
            >
              <Link href={`${linkPages.PRODUCTS.href}?layout=list`}>
                <LuLayoutList />
              </Link>
            </Button>

          </div>

        </div>

        <Separator className='mt-4' />

      </section>

      {
        layout === 'grid'
          ? <ProductsGrid products={products} favorites={favorites} />
          : <ProductsList products={products} favorites={favorites} />
      }
    </>
  )
}

export default ProductsContainer