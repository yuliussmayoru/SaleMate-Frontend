export type TransactionContextProps = {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    orderType: string;
    setOrderType: React.Dispatch<React.SetStateAction<string>>;
    customerName: string;
    setCustomerName: React.Dispatch<React.SetStateAction<string>>
    isCustomerSaved: boolean;
    setCustomerSaved: React.Dispatch<React.SetStateAction<boolean>>;
    product: Array<any>;
    setProduct: React.Dispatch<React.SetStateAction<Array<any>>>;
    detailProduct: DetailProductProps;
    setDetailProduct: React.Dispatch<React.SetStateAction<DetailProductProps>>;
}

export type DetailProductProps = {
    product_category_id: number;
    product_name: string;
    product_price: number;
    product_image: string;
    product_id: number;
}