import { Link, useLocation } from 'react-router-dom';

export default function ItemAddedPage() {
  const location = useLocation();
  console.log(location.state.itemId);
  return (
    <>
      <h1>Item Added</h1>
      <Link to='/cart'>Head to cart</Link>
      <Link to='/shop'>Continue Shopping</Link>
    </>
  )
}