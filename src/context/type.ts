export type TransactionContextProps = {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    orderType: string;
    setOrderType: React.Dispatch<React.SetStateAction<string>>;
    orderTime: string;
    setOrderTime: React.Dispatch<React.SetStateAction<string>>;
    orderDate: string;
    setOrderDate: React.Dispatch<React.SetStateAction<string>>;
    customerName: string;
    setCustomerName: React.Dispatch<React.SetStateAction<string>>
    isCustomerSaved: boolean;
    setCustomerSaved: React.Dispatch<React.SetStateAction<boolean>>;
    product: Array<any>;
    setProduct: React.Dispatch<React.SetStateAction<Array<any>>>;
    detailProduct: DetailProductProps;
    setDetailProduct: React.Dispatch<React.SetStateAction<DetailProductProps>>;
    selectedProducts: SelectedProductProps[];
    setSelectedProducts: React.Dispatch<React.SetStateAction<SelectedProductProps[]>>;
    removeProduct: (product_id: number) => void;
    resetContext: () => void;
    clearOrder: () => void;
}

export type SelectedProductProps = {
    product_id: number;
    product_name: string;
    product_price: number;
    product_quantity: number;
}

export type DetailProductProps = {
    product_category_id: number;
    product_name: string;
    product_price: number;
    product_image: string;
    product_id: number;
}