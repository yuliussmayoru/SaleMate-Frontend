import React, { useEffect, useState } from "react";
import { Input } from "../../../base";
import { CategoryProductButton } from "../categoryProductButton";
import { ProductCard } from "../productCard";
import { axiosInstance } from "@/src/api/axiosClient";
import { useTransactionContext } from "@/src/context";
import { ProductProps } from "./type";

export function OrderMenu() {

    const { setDetailProduct } = useTransactionContext();
    
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [category, setCategories] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axiosInstance.get("/products", {
                params: {
                    page: 1,
                    limit: 10
                }
            });

            setProducts(response.data.data);
        } catch (err) {
            console.error("failed to fetch products", err);
        }
    }

    useEffect (() => {
        getProducts();
    },[]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleAddProduct = (product: any) => {
        setIsModalOpen(true);
        setDetailProduct(product);
    }

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
            <div className="mt-4 grid grid-cols-6 gap-4">
                
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        productImage={'/img/default-product-image.webp'}
                        productName={product.product_name}
                        price={product.product_price}
                        onClick={() => handleAddProduct(product)}
                    />
                ))}
                
            </div>
        </div>
    )
}