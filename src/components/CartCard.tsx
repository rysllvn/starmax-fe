import { ItemType } from "../utilities/types";

//SHOW PRICE PER ITEM AND PRICE * AMOUNT
//Currently will resize if text is too long. Find out some way to prevent this
export default function CartCard(props : {item: ItemType, amount: number, onDelete : Function, onAmountChange : Function}){
    const item = props.item;
    const amount = props.amount;
    const onDelete = props.onDelete;
    const onAmountChange = props.onAmountChange;

    //Used to update the amount. If amount is 0, removes the item from the cart. THIS WILL NEED TO UTILIZE THE CART REDUCER THING TO UPDATE THE CART AMOUNT ON NAVBAR
    function updateAmount(e : React.ChangeEvent<HTMLSelectElement>){
        const newAmount = Number(e.target.value);
        if(newAmount == 0){
            onDelete(item);
        } else{
            onAmountChange(item, newAmount);
        }
    }

    //Used to add a custom amount. This cannot be used to remove items from the checkout
    //Probably need to move more of this logic into the page itself
    function handleAmountChange(e : React.ChangeEvent<HTMLInputElement>, num? : Number){
        let newAmount : Number;
        e.preventDefault();
        if(num === null){
            newAmount = num;
        } else {
            newAmount = Number(e.target.value);
        }
        if(newAmount > 0){
            onAmountChange(item, newAmount);
        }
    }

    return (
        <div className="flex flex-row mt-10 mb-10 ml-28 mr-28 shadow-xl shadow-emerald-300 outline outline-slate-500 rounded-md">
            <div className="flex flex-none h-48 w-48 bg-slate-900 border-r-2 border-r-slate-500">
                <img src={item.img_url} alt="Veryusefultext"></img>
            </div>
            <div className="w-full bg-slate-600 grid grid-cols-4 grid-rows-6">
                <div className="col-span-4 row-span-2 flex items-center border-b-2">
                    <h1 className="text-lg font-bold break-all px-2 cursor-default">{item.name}</h1>
                </div>
                <div className="col-span-2 flex items-center">
                    <h1 className="font-bold truncate px-2 cursor-default">ID: {item.id}</h1>
                </div>
                <div className="row-start-6 col-start-1 flex flex-row space-x-5">
                    <h1 className="flex items-center font-bold px-2 cursor-default">QTY: {amount}</h1>
                    <select id="dropDownAmount" className="cursor-pointer bg-inherit border-t-2 border-l-2 border-r-2 rounded-t-lg bg-slate-600" value={amount} onChange={(e) => updateAmount(e)}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value={amount}>{amount}</option>
                    </select>
                </div>

                <div className="row-start-6 col-start-2 flex items-center">
                    <input className="px-1  w-1/3 bg-slate-300 rounded-md placeholder:text-slate-700" placeholder="Amount" pattern="^[0-9]*$" title="Invalid Amount" onChange={(e) => handleAmountChange(e)}></input>
                </div>
                
                <div className="row-start-3 col-start-3 row-span-3 col-span-2 px-2 py-2 flex-wrap border-b-2 border-l-2 rounded-bl-lg">
                    <h1 className="break-all overflow-hidden"> {item.description}</h1>
                </div>

                <div className="row-start-6 col-start-4 flex items-center flex-row-reverse px-2">
                    <button onClick={() => onDelete(item)} className="rounded-md px-2 bg-slate-500 hover:bg-red-500 text-white">Remove Item</button>
                </div>
            </div> 
        </div>
    );
}