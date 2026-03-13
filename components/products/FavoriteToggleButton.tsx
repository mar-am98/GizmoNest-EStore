import React from 'react'
import { auth } from '@clerk/nextjs/server'
import CardSignInButton from '../form/CardSignInButton'
import { fetchFavoriteID } from '@/utils/actions'
import FavoriteToggleForm from './FavoriteToggleForm'

async function FavoriteToggleButton({
  productId,
  favoriteId,
}: {
  productId: string;
  favoriteId?: string | null;
}) {
  const { userId } = await auth();

  if (!userId) {
    return <CardSignInButton />;
  }

  const favID = favoriteId !== undefined ? favoriteId : await fetchFavoriteID({ productId });

  return <FavoriteToggleForm favoriteId={favID} productId={productId} />;
}

export default FavoriteToggleButton