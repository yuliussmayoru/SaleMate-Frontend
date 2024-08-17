import React from "react";
import { selectedListProps } from "./type";

export function SelectedOrderLists({quantity, productName, price, ...rest}: selectedListProps) {
    return (
        <button {...rest} className="flex w-full p-2">
            <div className="flex space-x-2 w-full justify-between">
                <p id="quantity">{quantity}</p>
                <p id="product-name">{productName}</p>
                <p id="price">Rp. {price}</p>
            </div>
            <button className="pl-20 pr-2 text-red-500">
                <p>X</p>
            </button>
        </button>
    )
}