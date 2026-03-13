import React from 'react'
import { redirect } from 'next/navigation'
import ButtonForm from '@/components/form/ButtonForm'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import { createProductAction, fetchAdminProductDetails, updateImageAction, updateProductAction } from '@/utils/actions';
import PriceInput from '@/components/form/PriceInput';
import ImageInput from '@/components/form/ImageInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import CheckBoxInput from '@/components/form/CheckBoxInput';
import ImageContainer from './ImageContainer';

async function EditProductAdmin({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await fetchAdminProductDetails(id);
  if (!product) redirect('/admin/products');


  const { title, company, decription, featured, price } = product;
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'> Update Product</h1>
      <div className='border p-8 rounded-md'>

        <ImageContainer
          action={updateImageAction}
          name='title'
          image={product?.image as string}
          text='Update Image'

        >
          <input type='hidden' name='id' value={id} />
          <input type='hidden' name='url' value={product?.image} />

        </ImageContainer>

        <FormContainer action={updateProductAction}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
            <input type="hidden" name='id' value={id} />
            <FormInput
              type='text'
              name='title'
              label='Product Name'
              defaultValue={title}
            />
            <FormInput
              type='text'
              name='company'
              label='company'
              defaultValue={company}
            />
            <PriceInput defaultValue={price} />

          </div>

          <TextAreaInput
            name='decription'
            labelText='Product Description'
            defaultValue={decription}
          />

          <div className='mt-6'>
            <CheckBoxInput name='featured' label='Featured' defaultChecked={featured} />
          </div>
          <ButtonForm />
        </FormContainer>

      </div>
    </section>
  )
}

export default EditProductAdmin