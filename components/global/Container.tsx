

import { cn } from '@/lib/utils';
import React from 'react'

type ContainerProps ={
  children: React.ReactNode;
  className?: string;
}

function Container({children , className}:ContainerProps) {
  return (
    <div className={cn('mx-auto max-w-6xl px xl:max-w-7xl px-4',className)}>
      {children}
    </div>
  )
}

export default Container