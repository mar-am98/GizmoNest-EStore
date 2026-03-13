
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import SectionTitle from '@/components/global/SectionTitle'
import { formatCurrency, formatDate } from '@/utils/format'

function OrdersPage() {


  return (
    <section className='mt-8'>
      <SectionTitle text='Your Orders' />
      <div className='mt-12'>
        <Table>
          <TableCaption>A list of your recent orders.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Order Total</TableHead>
              <TableHead>Tax</TableHead>
              <TableHead>Shipping</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className='hover:bg-muted/50 transition-colors'>
              <TableCell className="font-medium">ord_12345</TableCell>
              <TableCell>3</TableCell>
              <TableCell>{formatCurrency(45000)}</TableCell>
              <TableCell>{formatCurrency(4500)}</TableCell>
              <TableCell>{formatCurrency(500)}</TableCell>
              <TableCell className="text-right">{formatDate(new Date().toISOString())}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

export default OrdersPage