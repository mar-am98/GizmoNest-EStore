
import React from 'react'
import SectionTitle from '@/components/global/SectionTitle'
import CartItem from '@/components/cart/CartItem'
import CartTotals from '@/components/cart/CartTotals'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function CartPage() {
  const numItemsInCart: number = 2; 

  if (numItemsInCart === 0) {
    return (
      <section className='mt-8'>
        <SectionTitle text='Your Cart is Empty' />
        <Link href='/products' className='mt-8 inline-block'>
          <Button size='lg'>Fill it up!</Button>
        </Link>
      </section>
    )
  }

  return (
    <section className='mt-8'>
      <SectionTitle text='Shopping Cart' />
      <div className='mt-8 grid gap-8 lg:grid-cols-12'>
        
        <div className='lg:col-span-8'>
          <CartItem />
          <CartItem />
        </div>
        
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
        </div>
      </div>
    </section>
  )
}

export default CartPage
