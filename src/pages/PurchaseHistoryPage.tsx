import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from "react";
import { DisplayTableRow } from '../components/DisplayTableRow';
import { cartItemType } from "../utilities/types";

//Any additional columns added to this will mean additional changes will need to be made to both this page and types.ts
//ADD DATES TO EACH ITEM. CONSIDER OMITTING THE ITEM_ID
const fakeList = [
    {
        item_id: '1',
        order_id: '1',
        name: 'ship1',
        qty: 5,
        price: 10
    },
    {
        item_id: '2',
        order_id: '1',
        name: 'ship2',
        qty: 2,
        price: 10
    },
    {
        item_id: '3',
        order_id: '2',
        name: 'ship3dsadsadavaffrhbgrgsgrhsifuhbvoiwsjolweefqdshfhdssdahuiouifgauyrgfuiwhrgigvuhiwurhgvirhgiuehgiuvhbebhgiuehviuhreivuheiuhviuehviuerghviuerguieg',
        qty: 2,
        price: 20
    },
    {
        item_id: '4',
        order_id: '3',
        name: 'ship4',
        qty: 2,
        price: 20
    },
    {
        item_id: '5',
        order_id: '3',
        name: 'ship5',
        qty: 2,
        price: 2
    },
    {
        item_id: '6',
        order_id: '3',
        name: 'ship5.4',
        qty: 2,
        price: 1
    },
    {
        item_id: '7',
        order_id: '3',
        name: 'ship5.41',
        qty: 2,
        price: 5
    },
]

export default function PurchaseHistoryPage(){
    //Hooks
    const [filteredPurchaseHistory, setFilteredPurchaseHistory] = useState<cartItemType[]>([]);
    const [priceFilter, setPriceFilter] = useState<string>("");
    const [totalPurchaseHistory, setTotalPurchaseHistory] = useState<cartItemType[]>([]); //NEVER CALL THIS SET AGAIN
    const [filter, setFilter] = useState<string>("");
    

    useEffect(() => {
        setFilteredPurchaseHistory(fakeList); //Will eventually replace this with a list loaded from the database
        setTotalPurchaseHistory(fakeList);
    }, []);

    //Handler
    function filterName(e: React.ChangeEvent<HTMLInputElement>){
        setFilter(e.target.value);
        setFilteredPurchaseHistory(totalPurchaseHistory.filter(word => word.name.includes(e.target.value)));
    }

    //Handler
    function sortPrice(e: React.MouseEvent){
        //List is not filtered
        if(filter === ""){
            const totalPurchaseHistoryCopy = [...totalPurchaseHistory];
            if(priceFilter === "" || priceFilter === "desc" ){
                setPriceFilter("asc");
                totalPurchaseHistoryCopy.sort((a,b) => a.price - b.price);
            } else {
                setPriceFilter("desc");
                totalPurchaseHistoryCopy.sort((a,b) => b.price - a.price);
            }
            setFilteredPurchaseHistory(totalPurchaseHistoryCopy);
        } else {
            const filteredPurchaseHistoryCopy = [... filteredPurchaseHistory]
            if(priceFilter === "" || priceFilter === "desc" ){
                setPriceFilter("asc");
                filteredPurchaseHistoryCopy.sort((a,b) => a.price - b.price);
            } else {
                setPriceFilter("desc");
                filteredPurchaseHistoryCopy.sort((a,b) => b.price - a.price);
            }
            setFilteredPurchaseHistory(filteredPurchaseHistoryCopy);
        }
        
    }


    return(
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">Past Orders</h1>
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
                <select className="rounded-sm bg-slate-100 text-sm">
                    <option>Order ID</option>
                    <option>Item ID</option>
                    <option>Item Price</option>
                    <option>Total Price</option>
                </select>
            </div>
            <div className="flex flex-col items-center ml-3 mr-3 mt-2">
            <table className="min-w-full" id="filteredPurchaseHistory">
                <thead className="text-left border">
                    <tr className="text-md cursor-pointer">
                        <th scope="col" className="px-2 w-1/4 border-r">Item ID</th>
                        <th scope="col" className="px-2 w-1/4 border-r">Item Name</th>
                        <th scope="col" className="px-2 w-1/4 border-r">Order ID</th>
                        <th scope="col" className="px-2 w-1/12 border-r">QTY</th>
                        <th scope="col" className="px-2 w-1/12 border-r" onClick={(e) => sortPrice(e)} >Price</th>
                        <th scope="col" className="px-2 w-1/12 border-r">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPurchaseHistory.map(
                        (details) => {
                            return( <DisplayTableRow key = {details.item_id} details = {details} /> )
                        }
                    )}
                </tbody>
            </table>

        </div>
        </>
    );
}