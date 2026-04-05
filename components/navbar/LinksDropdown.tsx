

import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { dropDownMenuLinks } from '@/utils/links';
import UserIcon from './UserIcon';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import SignOutLink from './SignOutLink';
import { auth } from '@clerk/nextjs/server';

async function LinksDropdown() {
  const { userId } = await auth();
  const is_admin = userId === process.env.ADMIN_USER_ID;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'secondary'} className='flex gap-4 max-w-[100px]'>
          <LuAlignLeft className='w-6 h-6' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-40' align='start' sideOffset={10}>
        <SignedOut>
          <DropdownMenuItem className='focus:bg-transparent'>
            <SignInButton mode='modal'>
              <Button className='w-full text-left' variant={'default'}>Sign In</Button>
            </SignInButton>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem className='focus:bg-transparent focus:text-dark'>
            <SignUpButton mode='modal'>
              <Button className='w-full text-left hover:text-white' variant={'outline'}>Sign Up</Button>
            </SignUpButton>
          </DropdownMenuItem>

        </SignedOut>

        <SignedIn>
          {
            dropDownMenuLinks.map((link) => {
              if (link.name === 'Dashboard' && !is_admin) return null;
              return (
                <DropdownMenuItem key={link.name}>
                  <Link href={link.href}>
                    {link.name}
                  </Link>
                </DropdownMenuItem>
              )
            })
          }
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>

        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinksDropdown