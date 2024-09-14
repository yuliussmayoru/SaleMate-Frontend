import Image from "next/image";
import { productCardProps } from "./type";

export function ProductCard({productImage, productName, price, ...rest}: productCardProps) {
    return (
     <div className="bg-white p-4 rounded-lg shadow-md w-[200px] h-[225px]">
        <button className="flex flex-col space-y-2 items-center w-full h-full rounded-md" {...rest}>
            <div>
                <Image
                    src={productImage || '/img/default-product-image.webp'}
                    alt={productName || 'Product Image'}
                    width={1000}
                    height={20}
                    className="rounded-md object-cover h-[130px] w-[200px]"
                />
            </div>
            <p className="font-semibold text-m">{productName}</p>
            <p>Rp. {price?.toFixed(2)}</p> {/* Display price formatted to two decimal places */}
        </button>
     </div>
    )   
}