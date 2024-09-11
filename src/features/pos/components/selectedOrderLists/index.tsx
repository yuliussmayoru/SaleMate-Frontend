import React from "react";
import { selectedListProps } from "./type";

export function SelectedOrderLists({quantity, productName, price, onRemove, ...rest}: selectedListProps) {
    return (
        <div {...rest} className="flex w-full p-2 border border-slate-400 rounded-md mb-2">
            <button className="flex space-x-2 w-full justify-between">
                <p id="quantity">{quantity}</p>
                <p id="product-name">{productName}</p>
                <p id="price">Rp. {price}</p>
            </button>
            <button className="pl-20 pr-2 text-red-500" onClick={onRemove}>
                <p>X</p>
            </button>
        </div>
    )
}