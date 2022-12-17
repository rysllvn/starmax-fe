import { cartItemType } from "../utilities/types";

export default function CartCards(props : {details: cartItemType}){
    const details = props.details;
    return(
        
        <div className="flex flex-row mt-4 mb-4 ml-28 mr-28  drop-shadow-xl">
            <div className="flex flex-none h-48 w-48 bg-slate-900">
                <img src={details.imgUrl}></img>
            </div>
            <div className="w-full bg-slate-300 grid grid-cols-4 grid-rows-6">
                <div className="col-span-4 row-span-2 flex items-center bg-blue-100">
                    <h1 className="text-lg font-bold break-words px-2 cursor-default">{details.name}</h1>
                </div>
                <div className="col-span-2 flex items-center bg-blue-200">
                    <h1 className="font-bold truncate px-2 cursor-default">ID: {details.itemId}</h1>
                </div>
                <div className="row-start-6 col-start-1 flex items-center bg-slate-500">
                    <h1 className="font-bold px-2 cursor-default">QTY: {details.amount}</h1>
                </div>

                <div className="row-start-3 col-start-3 row-span-3 col-span-2 bg-purple-500">
                    <h1>Maybe description here? Might be too much to look at</h1>
                </div>

                <div className="row-start-6 col-start-2 bg-red-400">
                    <h1>INSERT ADD/REMOVE QTY HERE</h1>
                </div>

                <div className="row-start-6 col-start-4 bg-green-300">
                    <h1>INSERT DELETE BUTTON HERE</h1>
                </div>
                
            </div> 
        </div>
    );
}