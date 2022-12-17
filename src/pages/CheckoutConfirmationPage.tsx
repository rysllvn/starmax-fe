import { useEffect, useState } from "react";
import tiebomer from '../assets/tiebomber.png';
import xwing from '../assets/xwing.png';
import CartCards from "../components/CartCards";
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
  

export default function CheckoutConfirmationPage(){
    const [cartCards, setCartCards] = useState<cartItemType[]>([]);
    const [filteredCards, setFilteredCards] = useState<cartItemType[]>([]);

    useEffect(() => {
        setCartCards(fakeList); //WILL NEED TO BE UPDATED WHEN READING FROM THE BACKEND
        setFilteredCards(fakeList); //WILL NEED TO BE UPDATED WHEN READING FROM THE BACKEND
      }, [cartCards])

    return(
        <div>
            <h1 className="flex flex-col items-center font-bold text-5xl">CARD TEST PAGE</h1>
                {filteredCards.map(
                    (details) => {
                        return( <CartCards key = {details.itemId} details = {details} /> )
                    }
                )}
        </div>
    );
}