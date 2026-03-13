'use client';

import { Button } from '@/components/ui/button'
import { adminLinks } from '@/utils/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Sidebar() {

  const pathName = usePathname();

  return (
    <aside>
      {adminLinks.map((link)=>{
          const  isActive = pathName === link.href;
          const variant = isActive ? 'default' : 'ghost';

        return (
           <Button 
              key={link.label}
              variant={variant}
              className='w-full mb-2 capitalize font-normal flex justify-start'
               asChild
            >
            <Link href={link.href}>
                {link.label}
            </Link>
          </Button>
        )
      })}
    </aside>
  )
}

export default Sidebar