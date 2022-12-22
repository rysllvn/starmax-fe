import { Link, useLocation } from 'react-router-dom';

export default function ItemAddedPage() {
  const location = useLocation();
  console.log(location.state.itemId);
  return (
    <div className='flex flex-col gap-6 items-center'>
      <h1 className='text-4xl'>Item Added To Cart</h1>
      <Link
        className='bg-slate-300 rounded-md p-4 w-fit'
        to='/cart'
      >
        Checkout
      </Link>
      <Link
        className='bg-slate-300 rounded p-4 w-fit'
        to='/shop'
      >
        Continue Shopping
      </Link>
    </div>
  )
}