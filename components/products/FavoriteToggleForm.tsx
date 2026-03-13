import React from 'react'
import FormContainer from '../form/FormContainer'
import CardSubmitButton from '../form/CardSubmitButton'
import { toggleFavoriteAction } from '@/utils/actions'

type Props = {
  productId : string,
  favoriteId: string | null,

}

function FavoriteToggleForm({productId,favoriteId}:Props) {
  const toggleAction = toggleFavoriteAction.bind(null, {
    productId,
    favoriteId
  })
  return (
   <FormContainer action={toggleAction}>
    <CardSubmitButton isFavorite={favoriteId ? true: false} />
   </FormContainer>
  )
}

export default FavoriteToggleForm