import React from 'react'
import IconButton from '../global/IconButton'
import { deleteProductAction } from '@/utils/actions'
import FormContainer from '../form/FormContainer';

function DeleteProductForm({productID}:{productID:string}) {
  const deleteProduct = deleteProductAction.bind(null,{productID});
  return (
    
    <FormContainer action={deleteProduct}>
      
      <IconButton actionType='delete' />
    </FormContainer>
  )
}

export default DeleteProductForm