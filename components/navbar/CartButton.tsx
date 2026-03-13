

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { linkPages } from '@/utils/links'
import { LuShoppingCart } from 'react-icons/lu'

function CartButton() {

  let numItemCart = 0;
  return (
    <Button asChild variant={'secondary'} size={'icon'} className='flex justify-center items-center relative'>
      <Link href={linkPages.CART.href}>
        <LuShoppingCart />

        <span className='absolute -top-3 -right-3 bg-blue-500 text-white rounded-full h-6 w-6 flex justify-center items-center text-xs'>
          {numItemCart}
        </span>
      </Link>
    </Button>
  )
}

export default CartButton