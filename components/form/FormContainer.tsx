'use client';

import { actionFunction } from '@/utils/types';
import { useRouter } from 'next/navigation';
import React, { useActionState, useEffect, useTransition } from 'react';
import { toast } from "sonner"

const initalState = {
  message: ''
}

function FormContainer({action,children}:{
  action: actionFunction,
  children: React.ReactNode
}) {

  const [state,formAction] = useActionState(action,initalState);
  const [isPending,startTransition]= useTransition();
  const router = useRouter(); // router.resresh 

  useEffect(()=>{
      if(state.message){
        toast(state.message);
      }
      
      startTransition(()=>{
        setTimeout(()=>{
          router.refresh();
        },0)
      })

    },[state])

 

  return (
    <form action={formAction}>
      {children}
    </form>
  )
}

export default FormContainer