import { cartItemType } from "../utilities/types";

//Presentational Component (typically takes in props and returns html)
export function DisplayTableRow(props : {details: cartItemType}){
    //Every time details change it rerenders
    const details = props.details;
    return(
        <tr className="border-b border-l bg-slate-100 text-sm">
            <td className="border-r px-2 overflow-hidden whitespace-nowrap max-w-md">{details.itemId}</td>
            <td className="border-r px-2 overflow-hidden whitespace-nowrap max-w-md" title={details.name}>{details.name}</td>
            <td className="border-r px-2 overflow-hidden whitespace-nowrap max-w-md">{details.orderId}</td>
            <td className="border-r px-2 overflow-hidden whitespace-nowrap max-w-md">{details.amount}</td>
            <td className="border-r px-2 overflow-hidden whitespace-nowrap max-w-md">{details.purchasePrice}</td>
            <td className="border-r px-2 overflow-hidden whitespace-nowrap max-w-md">{details.purchasePrice * details.amount}</td>
        </tr>
    );
}