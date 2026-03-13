import React from 'react'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

type TextAreaInputProps = {
  name: string,
  labelText?: string,
  defaultValue?:string,
}

function TextAreaInput({name,labelText,defaultValue}:TextAreaInputProps) {
  return (
    <div className="mb-6 flex flex-col gap-2">
      <Label className='capitalize' htmlFor={name} >
        {labelText || name}
      </Label>
      <Textarea 
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required
        className='leading-loose'
      />
    </div>
  )
}

export default TextAreaInput