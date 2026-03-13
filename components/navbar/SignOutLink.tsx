'use client';
import { SignOutButton } from '@clerk/nextjs' // logout clerk
import Link from 'next/link'
import React from 'react'
import { toast } from 'sonner';

function SignOutLink() {

  const handleLogOut = ()=> {
    toast("Logout ...");
  }
  return (
    <SignOutButton> 
      <Link href={'/'} className='w-full text-left' onClick={handleLogOut}>
          LogOut
      </Link>
    </SignOutButton>
  )
}

export default SignOutLink