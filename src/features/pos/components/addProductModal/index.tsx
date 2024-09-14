import { Button, Card } from "@/src/features/base";
import { AddProductModalProps } from "./type";
import { SelectedProductProps, useTransactionContext } from "@/src/context";
import { useState } from "react";
import Image from "next/image";

export function AddProductModal({ onClose, handleSave, handleInputChange }: AddProductModalProps) {

    const { detailProduct, selectedProducts, setSelectedProducts } = useTransactionContext();

    const [inputSelectedProduct, setInputSelectedProduct] = useState<SelectedProductProps>({
        product_id: detailProduct.product_id,
        product_name: detailProduct.product_name,
        product_price: detailProduct.product_price,
        product_quantity: 1
    });

    const [quantity, setQuantity] = useState<number>(1);

    const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setSelectedProducts((prevSelectedProducts) => {
            const productIndex = prevSelectedProducts.findIndex(
                (product) => product.product_id === inputSelectedProduct.product_id
            );
            if (productIndex !== -1) {

                const updateProducts = [...prevSelectedProducts];
                updateProducts[productIndex] = {
                    ...updateProducts[productIndex],
                    product_quantity: quantity,
                };
                return updateProducts;
            } else {
                return [
                    ...prevSelectedProducts,
                    {
                        ...inputSelectedProduct,
                        product_quantity: quantity,
                    },
                ]
            }
        });
        onClose();
    }

    const handleIncrement = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + 1;
            setInputSelectedProduct({
                ...inputSelectedProduct,
                product_quantity: newQuantity
            });
            return newQuantity;
        });
    };

    const handleDecrement = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity - 1;
            setInputSelectedProduct({
                ...inputSelectedProduct,
                product_quantity: newQuantity
            })
            return newQuantity;
        })
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setQuantity(isNaN(value) ? 1 : value);
        setInputSelectedProduct({
            ...inputSelectedProduct,
            product_quantity: isNaN(value) ? 1 : value
        })
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Card className="p-6 bg-white rounded-lg shadow-lg w-[800px] h-[400px]">
                <p className="text-xl font-semibold mb-4 text-center">Product Details</p>
                <form onSubmit={handleSave}>
                    <div className="flex">
                        <Image
                            src={detailProduct.product_image} 
                            alt={detailProduct.product_name} 
                            width={100}
                            height={20}
                            className="rounded-md object-cover h-[200px] w-[200px]"
                            />
                        <div className="flex flex-col items-center w-full h-full text-center">
                            <p className="font-semibold text-2xl">{detailProduct.product_name}</p>
                            <p className="font-semibold text-2xl">Rp. {detailProduct.product_price}</p>
                            <div className="flex border border-black w-[500px] rounded-xl">
                                <button
                                    className="border-r border-black p-4 w-[55px] rounded-xl bg-green-400 font-bold"
                                    type="button"
                                    onClick={handleDecrement}
                                    >
                                    -
                                    </button>
                                <input
                                    type="text"
                                    className="grow text-center"
                                    onChange={handleInputChange}
                                    value={quantity}
                                    />
                                <button
                                    className="border-l border-black p-4 w-[55px] bg-green-400 rounded-xl font-bold"
                                    type="button"
                                    onClick={handleIncrement}
                                    >
                                    +
                                    </button>
                            </div>
                        </div>
                            
                    </div>

                    <div className="flex justify-around mt-4">
                        <Button
                            className="bg-red-500 text-white mr-4 hover:bg-red-600 active:bg-red-700 h-[80px]"
                            onClick={onClose}
                            type="button"
                        >
                            Cancel
                        </Button>
                        <Button
                            className="bg-green-500 text-white hover:bg-green-600 active:bg-green-700"
                            type="submit"
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}