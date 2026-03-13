import LoadingContainer from '@/components/global/LoadingContainer';
import SectionTitle from '@/components/global/SectionTitle';
import ProductsGrid from '@/components/products/ProductsGrid';
import { fetchUserFavorites } from '@/utils/actions';
import React, { Suspense } from 'react'

export const dynamic = 'force-dynamic';

async function FavoritesPage() {
  const favorites = await fetchUserFavorites();
  if (favorites.length === 0) {
    return <SectionTitle text='You Have No Favorites Yet' />
  }
  return (
    <div>
      <SectionTitle text='Favorites' />
      <Suspense fallback={<LoadingContainer />}>
        <ProductsGrid 
          products={favorites.map((favorit) => favorit.product)} 
          favorites={favorites}
        />
      </Suspense>
    </div>
  )
}

export default FavoritesPage;