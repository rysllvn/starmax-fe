import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartCard from "../components/CartCard";
import { AppStateContext } from '../utilities/Contexts';

  //CONSIDER ADDING A SAVE CHANGES OPTION
export default function CheckoutConfirmationPage(){
    const applicationState = useContext(AppStateContext);
    const cart = applicationState.cart;
    const navigate = useNavigate();

    //Updates cart total price
    function assignCartTotalPrice(){
      let num = 0;
      cart.forEach((amount, item) => {
        num  = num + (item?.current_price ? (item.current_price * amount) : 0);
      });
      return num;
    }

    //Removes an item from the cart
    function handleDelete(id : string){
    }

    //Updates the amount of an item in the cart
    function handleAmountChange(id: string, newAmount : number){
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
          {Array.from(cart.entries()).map(
              ([item, amount]) => {
                  return (
                    <CartCard
                      key={item.id}
                      amount={amount}
                      item={item}
                      onDelete={handleDelete}
                      onAmountChange={handleAmountChange}
                    />
                  )
              }
          )}
      </div>
    );
}