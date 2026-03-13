'use client';
import ButtonForm from '@/components/form/ButtonForm'
import FormContainer from '@/components/form/FormContainer'
import ImageInput from '@/components/form/ImageInput'
import { Button } from '@/components/ui/button'
import { actionFunction } from '@/utils/types'
import Image from 'next/image'
import React, { useState } from 'react'



type ImageProps = {
    image:string,
    name:string,
    action:actionFunction,
    text:string,
    children?:React.ReactNode
}

function ImageContainer(props:ImageProps) {
    const {image,name,action,text} = props;
    const [visible,setVisible]= useState(false);
  return (
   <div className='mb-8'>
    <Image
        src={image}
        width={200}
        height={200}
        className='rounded-md object-cover w-[200px] h-[200px]'
        alt={name}
        />

        <Button 
        className='mt-2 hover:cursor-pointer' 
        variant={'outline'}
        onClick={()=>setVisible((prev)=>!prev)}
        > 
           {text}
        </Button>

        {
            visible && (
                <div className='max-w-md mt-4' >
                    <FormContainer action={action}>
                        {props.children}
                        <ImageInput />
                        <ButtonForm />
                    </FormContainer>

                </div>
            )
        }
   </div>
  )
}

export default ImageContainer