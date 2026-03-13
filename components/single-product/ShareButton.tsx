'use client';

import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '../ui/button';
import { LuShare } from 'react-icons/lu';
import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
 
} from "react-share";

function ShareButton({productId,name}:{productId:string,name:string}) {
    const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
    const shareLink = `${url}/products/${productId}`;
  return (
   <Popover>
        <PopoverTrigger asChild>
            <Button>
                <LuShare />
            </Button>
        </PopoverTrigger>

        <PopoverContent 
            side='top'
            align='end'
            sideOffset={10}
            className='flex items-center gap-x-2 justify-center w-full'
        >

            <TelegramShareButton url={shareLink} title={name}>
                <TelegramIcon  size={32}/>
            </TelegramShareButton>

            <FacebookShareButton url={shareLink} title={name}>
                <FacebookIcon  size={32}/>
            </FacebookShareButton>


            <LinkedinShareButton url={shareLink} title={name}>
                <LinkedinIcon  size={32}/>
            </LinkedinShareButton>

        </PopoverContent>
    </Popover>
  )
}

export default ShareButton