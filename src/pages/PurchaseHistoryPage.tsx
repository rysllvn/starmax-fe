import { MagnifyingGlassIcon, ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from "react";
import { DisplayTableRow } from '../components/DisplayTableRow';
import { cartItemType } from "../utilities/types";

//Any additional columns added to this will mean additional changes will need to be made to both this page and types.ts
//ADD DATES TO EACH ITEM. CONSIDER OMITTING THE ITEM_ID
const fakeList = [
    {
        itemId: '1',
        orderId: '1',
        name: 'ship1',
        amount: 5,
        purchasePrice: 10
    },
    {
        itemId: '2',
        orderId: '1',
        name: 'ship2',
        amount: 2,
        purchasePrice: 10
    },
    {
        itemId: '3',
        orderId: '2',
        name: 'ship3dsadsadavaffrhbgrgsgrhsifuhbvoiwsjolweefqdshfhdssdahuiouifgauyrgfuiwhrgigvuhiwurhgvirhgiuehgiuvhbebhgiuehviuhreivuheiuhviuehviuerghviuerguieg',
        amount: 2,
        purchasePrice: 20
    },
    {
        itemId: '4',
        orderId: '3',
        name: 'ship4',
        amount: 2,
        purchasePrice: 20
    },
    {
        itemId: '5',
        orderId: '3',
        name: 'ship5',
        amount: 2,
        purchasePrice: 2
    },
    {
        itemId: '6',
        orderId: '1',
        name: 'ship5.4',
        amount: 2,
        purchasePrice: 1
    },
    {
        itemId: '7',
        orderId: '2',
        name: 'ship5.41',
        amount: 2,
        purchasePrice: 5
    },
    {
        itemId: '8',
        orderId: '1',
        name: 'ship5.41',
        amount: 4,
        purchasePrice: 20
    },
]

export default function PurchaseHistoryPage(){
    //Hooks
    const [filteredPurchaseHistory, setFilteredPurchaseHistory] = useState<cartItemType[]>([]);
    const [orderFilter, setOrderFilter] = useState<string>("");
    const [priceFilter, setPriceFilter] = useState<string>("");
    const [filter, setFilter] = useState<string>("");
    const [totalPurchaseHistory, setTotalPurchaseHistory] = useState<cartItemType[]>([]); //NEVER CALL THIS SET AGAIN
    

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
                totalPurchaseHistoryCopy.sort((a,b) => a.purchasePrice - b.purchasePrice);
            } else {
                setPriceFilter("desc");
                totalPurchaseHistoryCopy.sort((a,b) => b.purchasePrice - a.purchasePrice);
            }
            setFilteredPurchaseHistory(totalPurchaseHistoryCopy);
        } else {
            const filteredPurchaseHistoryCopy = [... filteredPurchaseHistory]
            if(priceFilter === "" || priceFilter === "desc" ){
                setPriceFilter("asc");
                filteredPurchaseHistoryCopy.sort((a,b) => a.purchasePrice - b.purchasePrice);
            } else {
                setPriceFilter("desc");
                filteredPurchaseHistoryCopy.sort((a,b) => b.purchasePrice - a.purchasePrice);
            }
            setFilteredPurchaseHistory(filteredPurchaseHistoryCopy);
        }
        
    }

    //Probs a way to use one method for both sort features
    function sortOrder(e: React.MouseEvent){
        if(filter === ""){
            const totalPurchaseHistoryCopy = [...totalPurchaseHistory];
            if(orderFilter === "" || orderFilter === "desc" ){
                setOrderFilter("asc");
                totalPurchaseHistoryCopy.sort((a,b) => {
                    const orderA = a.orderId.toUpperCase();
                    const orderB = b.orderId.toUpperCase();
                    if(orderA < orderB){ return -1; } 
                    else if (orderA > orderB){ return 1; }
                    else { return 0}
                });
            } else {
                setOrderFilter("desc");
                totalPurchaseHistoryCopy.sort((a,b) => {
                    const orderA = a.orderId.toUpperCase();
                    const orderB = b.orderId.toUpperCase();
                    if(orderA < orderB){ return 1; } 
                    else if (orderA > orderB){ return -1; }
                    else { return 0}
                });
            }
            setFilteredPurchaseHistory(totalPurchaseHistoryCopy);
        } else {
            const filteredPurchaseHistoryCopy = [... filteredPurchaseHistory]
            if(orderFilter === "" || orderFilter === "desc" ){
                setOrderFilter("asc");
                filteredPurchaseHistoryCopy.sort((a,b) => {
                    const orderA = a.orderId.toUpperCase();
                    const orderB = b.orderId.toUpperCase();
                    if(orderA < orderB){ return -1; } 
                    else if (orderA > orderB){ return 1; }
                    else { return 0}
                });
            } else {
                setOrderFilter("desc");
                filteredPurchaseHistoryCopy.sort((a,b) => {
                    const orderA = a.orderId.toUpperCase();
                    const orderB = b.orderId.toUpperCase();
                    if(orderA < orderB){ return 1; } 
                    else if (orderA > orderB){ return -1; }
                    else { return 0}
                });
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
                        <th scope="col" className="px-2 w-1/4 border-r" onClick={(e) => sortOrder(e)}>Order ID</th>
                        <th scope="col" className="px-2 w-1/12 border-r">QTY</th>
                        <th scope="col" className="px-2 w-1/12 border-r" onClick={(e) => sortPrice(e)} >Price</th>
                        <th scope="col" className="px-2 w-1/12 border-r">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPurchaseHistory.map(
                        (details) => {
                            return( <DisplayTableRow key = {details.itemId} details = {details} /> )
                        }
                    )}
                </tbody>
            </table>

        </div>
        </>
    );
}