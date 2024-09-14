import { Product } from "@/src/assets";

export interface ProductTableProps {
    product: Product[];
    handleModalOpen: (type: string, product: Product) => void;
}