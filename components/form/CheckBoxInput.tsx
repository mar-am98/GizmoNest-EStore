import React from 'react'
import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'

type CheckBoxInputProps = {
  name: string,
  label: string,
  defaultChecked?: boolean,
}

function CheckBoxInput({name,label,defaultChecked}:CheckBoxInputProps) {
  return (
    <div className="mb-6 flex flex-col gap-2">
      <Checkbox name={name} id={name} defaultChecked={defaultChecked} />
      <Label className='capitalize' htmlFor={name} >
        {label || name}
      </Label>
    </div>
  )
}

export default CheckBoxInput