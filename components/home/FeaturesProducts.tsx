import React from 'react'
import SectionTitle from '../global/SectionTitle'
import ProductsGrid from '../products/ProductsGrid'
import EmptyList from '../global/EmptyList';
import { fetchFeaturedProducts } from '@/utils/actions';

async function FeaturesProducts() {
  const products = await fetchFeaturedProducts();

  if(products.length === 0) return <EmptyList title='No Products Yet ...'/>
  return (
    
    <section className='pt-24 p-14'>
      <SectionTitle text="featured product" />
      <ProductsGrid products={products} />
    </section>
  )
}

export default FeaturesProducts