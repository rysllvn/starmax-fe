import { useState } from "react";
import { cartItemType } from "../utilities/types";


//Currently will resize if text is too long. Find out some way to prevent this
export default function CartCards(props : {details: cartItemType}){
    const details = props.details;
    const [amount, setAmount] = useState<number>();
    return(
        
        <div className="flex flex-row mt-10 mb-10 ml-28 mr-28 drop-shadow-xl outline outline-slate-500 rounded-md resize-none">
            <div className="flex flex-none h-48 w-48 bg-slate-900 border-r-2 border-r-slate-500">
                <img src={details.imgUrl}></img>
            </div>
            <div className="w-full bg-slate-100 grid grid-cols-4 grid-rows-6">
                <div className="col-span-4 row-span-2 flex items-center border-b-2">
                    <h1 className="text-lg font-bold break-all px-2 cursor-default">{details.name}</h1>
                </div>
                <div className="col-span-2 flex items-center">
                    <h1 className="font-bold truncate px-2 cursor-default">ID: {details.itemId}</h1>
                </div>
                <div className="row-start-6 col-start-1 flex flex-row space-x-5">
                    <h1 className="flex items-center font-bold px-2 cursor-default">QTY: {amount}</h1>
                    <select className="cursor-pointer bg-inherit border-2 rounded-t-lg">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                </div>
                
                <div className="row-start-3 col-start-3 row-span-3 col-span-2 px-2 py-2 flex-wrap border-b-2 border-l-2 rounded-bl-lg">
                    <h1 className="break-all overflow-hidden">Description goes here</h1>
                </div>

                <div className="row-start-6 col-start-4 flex items-center flex-row-reverse px-2">
                    <button className="rounded-md px-2 bg-slate-500 hover:bg-red-500 text-white">Remove Item</button>
                </div>
                
            </div> 
        </div>
    );
}