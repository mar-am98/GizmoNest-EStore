import ProductsContainer from '@/components/products/ProductsContainer'
import React from 'react'

interface SearchParams {
  layout?: string;
  search?: string;
}

interface PageProps {
  searchParams: Promise<SearchParams>;
}

async function ProductsPage({ searchParams }: PageProps) {
  const { layout = 'grid', search = '' } = await searchParams;

  return (
    <ProductsContainer layout={layout} search={search} />
  )
}

export default ProductsPage