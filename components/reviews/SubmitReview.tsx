'use client';

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import FormContainer from '../form/FormContainer'
import { createReviewAction } from '@/utils/actions'
import { useUser } from '@clerk/nextjs'
import RatingInput from './RatingInput'
import { Textarea } from '../ui/textarea'
import TextAreaInput from '../form/TextAreaInput'
import ButtonForm from '../form/ButtonForm'

function SubmitReview({productId}:{productId:string}) {
  const { user } = useUser();
  const [isOpen,setIsOpen] = useState(false);

  return (
    <div>
      <Button 
      size={'lg'} 
      className='capitlaize mt-10'
      onClick={()=>setIsOpen((prev)=>!prev)}
      >
        {isOpen ? 'close' : 'Leave Review'}
      </Button>

     {isOpen && (
       <Card className='p-8 mt-8'>
          <FormContainer action={createReviewAction}>

            <input type="hidden" name='productId'  value={productId}/>
            <input 
              type="hidden"
              name='authorName'
              value={user?.firstName || 'user'}
            />
            <input 
              type="hidden"
              name='authorImageUrl'
              value={user?.imageUrl || ''}
            />
            <RatingInput name='rating'/>
            <TextAreaInput 
              name='comment'
              labelText='FeedBack ...'
              defaultValue='Hello World !!!'
            />

            <ButtonForm text='Submit' />


          </FormContainer>
      </Card>
     )}
    </div>
  )
}

export default SubmitReview