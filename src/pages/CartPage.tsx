import { ArrowDownIcon, ArrowsUpDownIcon, ArrowUpIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import tiebomer from '../assets/tiebomber.png';
import xwing from '../assets/xwing.png';
import DisplayCartRow from '../components/DisplayCartRow';
import { cartItemType } from '../utilities/types';

//Check to see if cart is empty. If it is, load an the empty page content. Otherwise, load the regular page
//This will reuse a lot of the same code from Purchase history. The only different is adding the ability to update qty and the ability to checkout

//This list will not be displaying orderID, but for to avoid making a new type, it will be here
const fakeList = [
  {
      itemId: '1',
      orderId: '1',
      name: 'ship1',
      amount: 5,
      imgUrl: tiebomer,
      purchasePrice: 10
  },
  {
      itemId: '2',
      orderId: '1',
      name: 'ship2',
      amount: 2,
      imgUrl: tiebomer,
      purchasePrice: 10
  },
  {
      itemId: '3',
      orderId: '2',
      name: 'ship3dsadsadavaffrhbgrgsgrhsifuhbvoiwsjolweefqdshfhdssdahuiouifgauyrgfuiwhrgigvuhiwurhgvirhgiuehgiuvhbebhgiuehviuhreivuheiuhviuehviuerghviuerguieg',
      amount: 2,
      imgUrl: xwing,
      purchasePrice: 20
  },
  {
      itemId: '4',
      orderId: '3',
      name: 'ship4',
      amount: 2,
      imgUrl: xwing,
      purchasePrice: 20
  },
  {
      itemId: '5',
      orderId: '3',
      name: 'ship5',
      amount: 2,
      imgUrl: tiebomer,
      purchasePrice: 2
  },
  {
      itemId: '6',
      orderId: '1',
      name: 'ship5.4',
      amount: 2,
      imgUrl: tiebomer,
      purchasePrice: 1
  },
  {
      itemId: '7',
      orderId: '2',
      name: 'ship5.41',
      amount: 2,
      imgUrl: tiebomer,
      purchasePrice: 5
  },
  {
      itemId: '8',
      orderId: '1',
      name: 'ship5.41',
      amount: 4,
      imgUrl: xwing,
      purchasePrice: 20
  },
]

export default function CartPage(){
  const [totalCart, setTotalCart] = useState<cartItemType[]>([]);
  const [filteredTotalCart, setFilteredTotalCart] = useState<cartItemType[]>([]);
  const [priceDirection, setPriceDirection] = useState<'asc' | 'dsc' | null>(null);
  const [totalPriceDirection, setTotalPriceDirection] = useState<'asc' | 'dsc' | null>(null);
  const [filter, setFilter] = useState<string>("");
  const [cartTotalPrice, setCartTotalPrice] = useState<number>(0);

  useEffect(() => {
    setTotalCart(fakeList);
    setFilteredTotalCart(fakeList);
    sortTotalPrice();
    setCartTotalPrice(assignCartTotalPrice());
  }, [totalCart])

  //Handler
  function filterName(e: React.ChangeEvent<HTMLInputElement>){
    setPriceDirection(null);
    setFilter(e.target.value);
    setFilteredTotalCart(totalCart.filter(word => word.name.includes(e.target.value)));
  }

  //This has problems
  //It reads every item, but fails to update properly. This is most likely due to this constantly adding to it. May need to call this elsewhere (?)
  function assignCartTotalPrice(){
    let num: number;
    num = 0;
    totalCart.forEach(item => 
      num = num + (item.purchasePrice * item.amount)
    );
    return num;
  }

  //Handler
  //Sorts Purchase History table based on item price
  function sortPrice(){
    setTotalPriceDirection(null);
    if(filter === ""){
      const totalCartCopy = [...totalCart];
      if(priceDirection === null || priceDirection === "dsc" ){
        setPriceDirection("asc");
        totalCartCopy.sort((a,b) => a.purchasePrice - b.purchasePrice);
      } else {
        setPriceDirection("dsc");
        totalCartCopy.sort((a,b) => b.purchasePrice - a.purchasePrice);
      }
      setFilteredTotalCart(totalCartCopy);
    } else {
      const filteredTotalCartCopy = [...filteredTotalCart];
      if(priceDirection === null || priceDirection === "dsc" ){
        setPriceDirection("asc");
        filteredTotalCartCopy.sort((a,b) => a.purchasePrice - b.purchasePrice);
      } else {
        setPriceDirection("dsc");
        filteredTotalCartCopy.sort((a,b) => b.purchasePrice - a.purchasePrice);
      }
      setFilteredTotalCart(filteredTotalCartCopy);
    }
  }

  //Handler
  //Sorts Purchase History table based on Total Price
  function sortTotalPrice(){
    setPriceDirection(null);
    if(filter === ""){
      const totalCartCopy = [...totalCart];
      if(totalPriceDirection === null || totalPriceDirection === "dsc" ){
        setTotalPriceDirection("asc");
        totalCartCopy.sort((a,b) => (a.purchasePrice*a.amount) - (b.purchasePrice*b.amount));
      } else {
        setTotalPriceDirection("dsc");
        totalCartCopy.sort((a,b) => (b.purchasePrice*b.amount) - (a.purchasePrice*a.amount));
      }
      setFilteredTotalCart(totalCartCopy);
    } else {
      const filteredTotalCartCopy = [...filteredTotalCart];
      if(totalPriceDirection === null || totalPriceDirection === "dsc" ){
        setTotalPriceDirection("asc");
        filteredTotalCartCopy.sort((a,b) => (a.purchasePrice*a.amount) - (b.purchasePrice*b.amount));
      } else {
        setTotalPriceDirection("dsc");
        filteredTotalCartCopy.sort((a,b) => (b.purchasePrice*b.amount) - (a.purchasePrice*a.amount));
      }
      setFilteredTotalCart(filteredTotalCartCopy);
    }
  }

  return(
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Cart</h1>
      </div>
      <div className="ml-3 mr-3 flex flex-row">
        <div className="flex flex-row">
          <label>
            <MagnifyingGlassIcon className='w-5 h-5 mr-1'/>
          </label>
          <input className="bg-slate-100 outline-none placeholder:text-sm placeholder:px-2  text-sm" 
            placeholder="Filter By Item Name" type="text" id="item_name"
            value={filter} onChange={(e) => filterName(e)}
          />
        </div>
      </div>
      <div className="flex flex-col items-center ml-3 mr-3 mt-2">
        <table className="min-w-full" id="filteredPurchaseHistory">
          <thead className="text-left border">
            <tr className="text-md">
             <th scope="col" className="px-2 w-1/12 border-r">Item Pic</th>
               <th scope="col" className="px-2 w-1/2 border-r">Item Name</th>
               <th scope="col" className="px-2 w-1/6 border-r">Quantity</th>
               <th scope="col" className="px-2 w-1/6 border-r  cursor-pointer" 
                 onClick={() => sortPrice()} >Price 
                 {
                   (priceDirection !== 'asc')
                   ? (priceDirection !== 'dsc') 
                       ? <ArrowsUpDownIcon className='w-4 h-4 translate-y-1 float-right'/>
                       : <ArrowDownIcon className='w-4 h-4 translate-y-1 float-right'/>
                   : <ArrowUpIcon className='w-4 h-4 translate-y-1 float-right'/>
                 }
               </th>
               <th scope="col" className="px-2 w-1/12 border-r  cursor-pointer"
                 onClick={() => sortTotalPrice()} >Total Price
                 {
                   (totalPriceDirection !== 'asc')
                   ? (totalPriceDirection !== 'dsc') 
                     ? <ArrowsUpDownIcon className='w-4 h-4 translate-y-1 float-right'/>
                     : <ArrowDownIcon className='w-4 h-4 translate-y-1 float-right'/>
                   : <ArrowUpIcon className='w-4 h-4 translate-y-1 float-right'/>
                 }
               </th>
            </tr>
         </thead>
          <tbody>
              {filteredTotalCart.map(
                (details) => {
                  return( <DisplayCartRow key = {details.itemId} details = {details} /> )
                }
              )}
          <tr className="border-b border-l bg-slate-100 font-bold text-lg">
            <td colSpan={5} className="text-center border-r -translate-x-2 overflow-hidden whitespace-nowrap max-w-md">
              TOTAL PRICE: {cartTotalPrice}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center">
        <button className="m-3 text-3xl text-white font-bold px-5 py-2 bg-slate-800 rounded-md ease-out duration-300 hover:scale-125">
          Checkout
        </button>
      </div>
    </>
  );
}