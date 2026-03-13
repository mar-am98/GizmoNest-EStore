import React from 'react'

export const dynamic = 'force-dynamic';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { fetchAdminProducts } from '@/utils/actions'
import EmptyList from '@/components/global/EmptyList'
import Link from 'next/link'
import { linkPages } from '@/utils/links'
import { formatCurrency } from '@/utils/format'
import IconButton from '@/components/global/IconButton'
import DeleteProductForm from '@/components/global/DeleteProductForm'

async function ProductsAdminPage() {

  const items = await fetchAdminProducts()

  if (items.length === 0) {
    return <EmptyList title='No Products Yet' />
  }

  return (
    <section>
      <Table>

        <TableCaption>
          {`products: ${items.length}`}
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>

          {items.map((item) => {

            const { id: productID, title, company, price } = item

            return (
              <TableRow key={productID}>

                <TableCell>
                  <Link
                    className='underline capitalize'
                    href={`${linkPages.PRODUCTS.href}/${productID}`}
                  >
                    {title}
                  </Link>
                </TableCell>

                <TableCell>
                  {company}
                </TableCell>

                <TableCell>
                  {formatCurrency(price)}
                </TableCell>

                <TableCell className='flex items-center gap-x-2'>

                  <Link
                    href={`${linkPages.AdminProducts.href}/${productID}/edit`}
                  >
                    <IconButton actionType='edit' />
                  </Link>

                  <DeleteProductForm productID={productID} />

                </TableCell>

              </TableRow>
            )

          })}

        </TableBody>

      </Table>
    </section>
  )
}

export default ProductsAdminPage