import { cn } from '@/lib/utils'
import React from 'react'

interface Props{
  title: string,
  className?:string
}

function EmptyList({title,className} :Props ) {
  return (
    <h2 className={cn('text-xl',className)}>{title}</h2>
  )
}

export default EmptyList