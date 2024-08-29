import Image from "next/image";
import { productCardProps } from "./type";

export function ProductCard({productImage, productName, price, ...rest}: productCardProps) {
    return (
     <div className="bg-white p-4 rounded-lg shadow-md w-[200px]">
        <button className="flex flex-col space-y-2 items-center" {...rest}>
            <Image
                src={productImage || './@/assets/dummyData/product-image.png'}
                alt={productName || 'Product Image'}
                width={1000}
                height={10}
                className="rounded-md"
            />
            <p className="font-semibold text-m">{productName}</p>
            <p>Rp. {price?.toFixed(2)}</p> {/* Display price formatted to two decimal places */}
        </button>
     </div>
    )   
}