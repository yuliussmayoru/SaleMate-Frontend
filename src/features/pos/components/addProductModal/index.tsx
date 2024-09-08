import { Button, Card, Input, InputValue } from "@/src/features/base";
import { AddProductModalProps } from "./type";
import { useTransactionContext } from "@/src/context";
import { useState } from "react";
import Image from "next/image";

export function AddProductModal({ onClose }: AddProductModalProps) {

    const { detailProduct } = useTransactionContext();

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Card className="p-6 bg-white rounded-lg shadow-lg w-[800px] h-[400px]">
                <p className="text-xl font-semibold mb-4 text-center">Product Details</p>
                <form>
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
                            <InputValue />
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