'use client';

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { useSearchParams,useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce';
import { linkPages } from '@/utils/links';

function NavSearch() {

  const searchParams = useSearchParams(); //keypath 

  const redirect = useRouter();

  const [search,setSearch] = useState(
    searchParams.get("search")?.toString() || ''
  );
  
  const handleSearch = useDebouncedCallback((value:string)=>{
    const params = new URLSearchParams(searchParams);

    
    if(value){
      params.set('search',value);
    }
    else{
      params.delete('search');
    }

    redirect.replace(`${linkPages.PRODUCTS.href}?${params.toString()}`)

  },300);


  return (
   <Input 
     value={search}
     type='search'
     placeholder='Search ...'
     className='max-w-xs dark:bg-muted'
     onChange={(e)=>{
        setSearch(e.target.value);
        handleSearch(e.target.value);
     }}
   />
  )
}

export default NavSearch