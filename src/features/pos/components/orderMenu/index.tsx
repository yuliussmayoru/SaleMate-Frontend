import React from "react";
import { Input } from "../../../base";
import { CategoryProductButton } from "../categoryProductButton";
import { ProductCard } from "../productCard";

export function OrderMenu() {
    return (
        <div className="m-4">

            <div className="flex">
                <div className="w-1/2 text-center p-4 font-bold border border-black mr-2 rounded-lg">Order</div>
                <div className="w-1/2 text-center p-4 font-bold border border-black ml-2 rounded-lg">Takeaway</div>
            </div>

            <div className="mt-4">
                <Input 
                    placeholder="Enter product name"
                />
            </div>
            
            <div>
                <CategoryProductButton 
                    productCategoryName="Category 1" 
                />
            </div>
            <div className="mt-4">
                <ProductCard
                    productImage='/img/default-product-image.webp'
                    productName="Indomie rebus seuhah"
                    price={12600.00}
                    onClick={() => console.log("click")}
                />
                
            </div>
        </div>
    )
}