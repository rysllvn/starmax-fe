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
            <div className="flex flex-col items-center mt-2">
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
            <div className="flex flex-col items-center">
            <table className="table-fixed ml-3 mr-3" id="purchaseHistory">
                <thead className="border-b text-left">
                    <tr className="text-md">
                        <th scope="col" className="w-1/4 translate-x-1">Item ID</th>
                        <th scope="col" className="w-1/4 translate-x-1">Item Name</th>
                        <th scope="col" className="w-1/4 translate-x-1">Order ID</th>
                        <th scope="col" className="w-1/12 translate-x-1">QTY</th>
                        <th scope="col" className="w-1/6 translate-x-1">Price</th>
                        <th scope="col" className="w-1/6 translate-x-1">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>

        </div>
        </>
    );
    
    /*
    //CURRENTLY DOES NOT WORK
    function filterTable(){
        var input, filter, table, tr, td, i, txtValue;
        input: String;
        input = document.getElementById("UserInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("purchaseHistory");
        tr = table.getElementsByTagName("tr");

        for(i = 0; i < tr.length; i++){
            td = tr[i].getElementsByTagName("td")[2];
            if(td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1){
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    } */

    /*
    //CURENTLY DOES NOT WORK
    function sortTableByString(n: number){
        var table, tr, filtering, shouldSwap, dir, i, x, y, filterCount;
        dir: String;
        filterCount: Number;
        filterCount = 0;
        table = document.getElementById("purchaseHistory");
        filtering = true;
        dir = "asc";
        while (filtering) {
            filtering = false;
            rows = table.rows;

            for (i = 1; i < (rows.length -1);i++){
                shouldSwap = false;
                x = rows[i].getElementsByTagName("td")[n];
                y = rows[i+1].getElementsByTagName("td")[n];

                if(dir == "asc"){
                    if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwap = true;
                        break;
                    }
                } else if (dir = "desc") {
                    if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
                        shouldSwap = true;
                        break;
                    }
                }

            }
            if(shouldSwap) {
                rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
                filtering = true;
                filterCount++;
            } else {
                if (filterCount ==  0 && dir == "asc"){
                    dir = "desc";
                    filtering = true;
                }
            }
        }
    }*/
}