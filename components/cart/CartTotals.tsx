
import { Card, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/utils/format';
import { Button } from '@/components/ui/button';

function CartTotals() {
    const subtotal = 12999;
    const shipping = 500;
    const tax = 1200;
    const orderTotal = subtotal + shipping + tax;

    return (
        <div>
            <Card className='p-8'>
                <CartTotalRow label='Subtotal' amount={subtotal} />
                <CartTotalRow label='Shipping' amount={shipping} />
                <CartTotalRow label='Tax' amount={tax} />
                <Separator className='my-4' />
                <CardTitle className='mt-8'>
                    <CartTotalRow label='Order Total' amount={orderTotal} lastRow />
                </CardTitle>
            </Card>
            <Button className='w-full mt-8' size='lg'>
                Checkout
            </Button>
        </div>
    );
}

function CartTotalRow({
    label,
    amount,
    lastRow,
}: {
    label: string;
    amount: number;
    lastRow?: boolean;
}) {
    return (
        <p className={`flex justify-between text-sm ${!lastRow ? 'mb-2' : 'text-base'}`}>
            <span>{label}</span>
            <span>{formatCurrency(amount)}</span>
        </p>
    );
}

export default CartTotals;
