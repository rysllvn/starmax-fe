import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tiebomer from '../assets/tiebomber.png';
import xwing from '../assets/xwing.png';
import CartCard from "../components/CartCard";
import { cartItemType } from "../utilities/types";

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

  //CONSIDER ADDING A SAVE CHANGES OPTION
export default function CheckoutConfirmationPage(){
    const [cartCards, setCartCards] = useState<cartItemType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setCartCards(fakeList); //WILL NEED TO BE UPDATED WHEN READING FROM THE BACKEND

      }, [])

      //Updates cart total price
      function assignCartTotalPrice(){
        let num: number;
        num = 0;
        cartCards.forEach(item => 
          num = num + (item.purchasePrice * item.amount)
        );
        return num;
      }

      //Removes an item from the cart
      function handleDelete(id : string){
        const copyCartCards = cartCards.filter((card) => card.itemId !== id);
        setCartCards(copyCartCards);
      }

      //Updates the amount of an item in the cart
      function handleAmountChange(id: string, newAmount : number){

        if(newAmount === 0) {
            handleDelete(id);
            return;
        }
        const copyCartCards = [...cartCards];
        const index = copyCartCards.findIndex(cards => (cards.itemId === id));
        copyCartCards[index].amount = newAmount;
        setCartCards(copyCartCards);
      }

      //Changes the current page checkout.
      function checkoutRouter(){
        const checkoutPath = "/cart/confirmation";
        //Make a POST request to update the user cart in database.
        navigate(checkoutPath);
      }

      //Used to save the user cart by making post request to the database
      function saveCart(){
        //CURRENTLY DOES NOTHING. NEED TO WAIT ON BACKEND IMPLEMENTATION
        console.log("saving cart");
      }
    
    //Perhaps add the user's name to the cart to make it a bit
    return(
        <div>
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-5xl bg-slate-200 border-t-2 border-l-2 border-r-2 border-slate-500 rounded-t-md px-4 py-2">Cart</h1>
                <h1 className="font-bold text-4xl bg-slate-200 border-2 border-slate-500 rounded-md px-4 py-2">Total Price: {assignCartTotalPrice()}</h1>
                <div className="flex space-x-5">
                    <button className="bg-slate-500 text-white text-2xl my-3 font-bold rounded-md px-4 py-2 ease-out hover:scale-125 duration-300 hover:bg-green-500"
                        onClick={checkoutRouter}>Checkout
                    </button>
                    <button className="bg-slate-500 text-white text-2xl my-3 font-bold rounded-md px-4 py-2 ease-out hover:scale-125 duration-300 hover:bg-green-500"
                    onClick={saveCart}> Save Cart
                    </button>
                </div>
                
            </div>
            {cartCards.map(
                (details) => {
                    return( <CartCard key = {details.itemId} details = {details}  onDelete = {handleDelete} onAmountChange = {handleAmountChange} />)
                }
                    
            )}
        </div>
    );
}