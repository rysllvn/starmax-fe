import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { stringify } from 'querystring';
import { useEffect, useState } from "react";
import { cartItemType } from "../utilities/types";

//Any additional columns added to this will mean additional changes will need to be made to both this page and types.ts
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
        name: 'ship3',
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
]

export default function PurchaseHistoryPage(){
    const [purchaseHistory, showPurchaseHistory] = useState<cartItemType[]>([]);
    const DisplayData=purchaseHistory.map(
        (details) => {
            return(
                <tr className="border-b border-l bg-slate-100 text-sm">
                    <td className="border-r translate-x-1">{details.item_id}</td>
                    <td className="border-r translate-x-1">{details.name}</td>
                    <td className="border-r translate-x-1">{details.order_id}</td>
                    <td className="border-r translate-x-1">{details.qty}</td>
                    <td className="border-r translate-x-1">{details.price}</td>
                    <td className="border-r translate-x-1"> {details.price * details.qty} </td>
                </tr>
            )
        }
    )

    useEffect(() => {
        showPurchaseHistory(fakeList); //Will eventually replace this with a list loaded from the database
    }, []);

    return(
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">Past Orders</h1>
            </div>
            <div className="ml-3 mr-3 flex flex-row">
                <form className="flex flex-row">
                    <label>
                        <MagnifyingGlassIcon className='w-5 h-5 mr-1'/>
                    </label>
                    <input className="bg-slate-100 outline-none placeholder:text-sm  text-sm" 
                        placeholder="Filter By Item Name" type="text" id="item_name">
                    </input>
                </form>
                <select className="rounded-sm bg-slate-100 text-sm">
                    <option>Order ID</option>
                    <option>Item ID</option>
                    <option>Item Price</option>
                    <option>Total Price</option>
                </select>
            </div>
            <div className="flex flex-col items-center ml-3 mr-3 mt-2">
            <table className="min-w-full  " id="purchaseHistory">
                <thead className="text-left border">
                    <tr className="text-md cursor-pointer">
                        <th scope="col" className="w-1/4 border-r">Item ID</th>
                        <th scope="col" className="w-1/4 border-r">Item Name</th>
                        <th scope="col" className="w-1/4 border-r">Order ID</th>
                        <th scope="col" className="w-1/12 border-r">QTY</th>
                        <th scope="col" className="w-1/12 border-r">Price</th>
                        <th scope="col" className="w-1/12 border-r">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>

        </div>
        </>
    );
}