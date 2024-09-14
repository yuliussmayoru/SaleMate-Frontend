import { ProductCategory } from "@/src/assets";

export interface ProductCategoryTableProps {
    productCategories: ProductCategory[];
    handleModalOpen: (type: string, productCategory: ProductCategory) => void;
}