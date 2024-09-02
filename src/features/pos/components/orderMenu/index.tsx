import React, { useEffect, useState } from "react";
import { Input } from "../../../base";
import { CategoryProductButton } from "../categoryProductButton";
import { ProductCard } from "../productCard";
import { axiosInstance } from "@/src/api/axiosClient";
import { useTransactionContext } from "@/src/context";

const dummyProducts = [
    {
        productName : "Product 1",
        price : 100,
        img: "/@/assets/dummyData/product-image.png"
    },
    {
        productName : "Product 2",
        price : 100,
        img: "/@/assets/dummyData/product-image.png"
    },
    {
        productName : "Product 3",
        price : 100,
        img: "/@/assets/dummyData/product-image.png"
    },
    {
        productName : "Product 4",
        price : 100,
        img: "/@/assets/dummyData/product-image.png"
    },
]


export function OrderMenu() {

    const { setDetailProduct } = useTransactionContext();
    
    const [products, setProducts] = useState([]);
    const [category, setCategories] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axiosInstance.get("/products", {
                params: {
                    page: 1,
                    limit: 10
                }
            });
            setProducts(response.data);
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
            <div className="mt-4">
                {dummyProducts.map((product, index) => (
                    <ProductCard
                        key={index}
                        productImage={product.img}
                        productName={product.productName}
                        price={product.price}
                        onClick={() => handleAddProduct(product)}
                    />
                ))}
                
            </div>
        </div>
    )
}