import { cartItemType, ItemType } from "../utilities/types";

//THIS IS NO LONGER USED, SO CONSIDER REMOVING THIS COMPONENT AT SOME POINT
export default function DisplayCartRow(props : {details: ItemType}){
    const details = props.details;
    return(
        <tr className="border-b border-l bg-slate-400 text-sm">
            <td className="border-r px-2 overflow-hidden whitespace-nowrap max-w-md">
                <img src={details.imgUrl} className="object-contain h-12 w-12 mx-auto" />
            </td>
            <td className="border-r px-2 overflow-hidden whitespace-nowrap max-w-md">{details.name}</td>
            <td className="border-r px-2 overflow-hidden whitespace-nowrap max-w-md">amount</td>
            <td className="border-r px-2 overflow-hidden whitespace-nowrap max-w-md">{details.current_price}</td>
            <td className="border-r px-2 overflow-hidden whitespace-nowrap max-w-md">{details.current_price}</td>
        </tr>
    );
}