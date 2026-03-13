import { SignInButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'
import { FaRegHeart } from 'react-icons/fa'

function CardSignInButton() {
  return (
   <SignInButton>
        <Button
            type='button'
            size={'icon'}
            variant={'outline'}
            className='p-2 cursor-pointer'
            >

                <FaRegHeart />

            </Button>
   </SignInButton>
  )
}

export default CardSignInButton