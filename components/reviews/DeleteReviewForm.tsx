import React from 'react'
import IconButton from '../global/IconButton'
import { deleteReviewAction } from '@/utils/actions'
import FormContainer from '../form/FormContainer';

function DeleteReviewForm({ reviewId }: { reviewId: string }) {
    const deleteReview = deleteReviewAction.bind(null, { reviewId });
    return (
        <FormContainer action={deleteReview}>
            <IconButton actionType='delete' />
        </FormContainer>
    )
}

export default DeleteReviewForm
