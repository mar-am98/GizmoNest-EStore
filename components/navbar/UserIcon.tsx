'use client'
import { useUser } from '@clerk/nextjs'
import { LucideUserCircle2 } from 'lucide-react';
import React from 'react'

function UserIcon() {
  const { user } = useUser();
  const profile_mg = user?.imageUrl;

  if (profile_mg) {
    return (
      <img src={profile_mg} className='w-6 h-6 rounded-full object-cover' />
    )
  }

  return <LucideUserCircle2 className='w-6 h-6 bg-accent rounded-full text-white' />
}

export default UserIcon