
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import React from 'react'
import { faker } from '@faker-js/faker';
import { createProductAction } from '@/utils/actions';
import ButtonForm from '@/components/form/ButtonForm';
import PriceInput from '@/components/form/PriceInput';
import ImageInput from '@/components/form/ImageInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import CheckBoxInput from '@/components/form/CheckBoxInput';

function CreateProductAdminPage() {

  const name = faker.commerce.productName();
  const company = faker.company.name();
  const decription = faker.lorem.paragraph({min:11,max:20});
  

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'> Create Product</h1>
      <div className='border p-8 rounded-md'>

          
          <FormContainer  action={createProductAction}>
              <div className='grid gap-4 md:grid-cols-2 my-4'>
                  <FormInput
                    type='text'
                    name='title'
                    label='Product Name'
                    defaultValue={name}
                    />
                     <FormInput
                    type='text'
                    name='company'
                    label='company'
                    defaultValue={company}
                    />
                    <PriceInput />
                    <ImageInput />
                    
              </div>

              <TextAreaInput 
                name='decription'
                labelText='Product Description'
                defaultValue={decription}
              />

              <div className='mt-6'>
                  <CheckBoxInput name='featured' label='Featured' />
              </div>
              <ButtonForm />
          </FormContainer>

      </div>
    </section>
  )
}

export default CreateProductAdminPage