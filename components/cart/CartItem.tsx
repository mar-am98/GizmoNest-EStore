
import { Card } from '@/components/ui/card';
import { formatCurrency } from '@/utils/format';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LuTrash2 } from 'react-icons/lu';

function CartItem() {
    return (
        <Card className='flex flex-col gap-y-4 md:flex-row flex-wrap p-6 mb-8 hover:shadow-lg transition-shadow duration-300'>
            <div className='relative h-24 w-24 sm:h-32 sm:w-32'>
                <Image
                    src={'/products/modern-mirror.png'}
                    alt={'Modern Mirror'}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='rounded-md object-cover'
                />
            </div>

            <div className='md:ml-6 md:w-48'>
                <Link href={`/products/1`}>
                    <h3 className='capitalize font-medium hover:underline'>Modern Mirror</h3>
                </Link>
                <h4 className='mt-2 capitalize text-sm text-muted-foreground'>
                    Company Name
                </h4>
            </div>

            <div className='md:ml-12'>
                <p className='text-sm text-muted-foreground mb-2'>Amount</p>
                <div className='flex items-center gap-x-2'>
                    <Button variant='outline' size='icon' className='h-8 w-8'>-</Button>
                    <span className='px-2'>1</span>
                    <Button variant='outline' size='icon' className='h-8 w-8'>+</Button>
                </div>
            </div>

            <div className='md:ml-auto flex flex-col items-end justify-between'>
                <p className='font-medium md:ml-auto'>{formatCurrency(12999)}</p>
                <Button variant='ghost' size='icon' className='text-destructive hover:text-destructive/90'>
                    <LuTrash2 />
                </Button>
            </div>
        </Card>
    );
}

export default CartItem;
