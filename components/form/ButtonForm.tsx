
'use client';

import React from 'react'
import { Button } from '../ui/button';
import { useFormStatus } from 'react-dom';
import { cn } from '@/lib/utils';
import { ReloadIcon } from '@radix-ui/react-icons';

type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
  className?:string,
  text?:string,
  size?:btnSize
}

function ButtonForm({
  className='hover:cursor-pointer',
  text='Submit',
  size='lg'
}:SubmitButtonProps) {
  const {pending} = useFormStatus();
  return (
    <Button
    type='submit'
    disabled={pending}
    className={cn('capitalize', className)}
    size={size}
    >

        {
          pending ? 
            (
              <>
                <ReloadIcon className='h-4 w-4 animate-spin'
                 /> please wait
              </>
            ) :
            
            (
              text
            )
        }

    </Button>
  )
}

export default ButtonForm