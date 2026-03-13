import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

function ImageInput() {
  const name = 'image';
  return (
     <div className="mb-6 flex flex-col gap-2">
      <Label className='capitalize' htmlFor={name} >
        Image
      </Label>
      <Input
        id={name}
        name={name}
        type='file'
        accept='image/*'
        required
      />
    </div>
  )
}

export default ImageInput