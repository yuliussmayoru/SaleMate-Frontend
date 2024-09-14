import { categoryProductButtonProps } from "./type";

export function CategoryProductButton({productCategoryName}: categoryProductButtonProps) {
    return (
        <div className="bg-gray-200 text-gray-500 py-3 mt-4 rounded-lg text-center w-[200px] border border-gray-500">
            <button>
             {productCategoryName}   
            </button>
        </div>
    )
}