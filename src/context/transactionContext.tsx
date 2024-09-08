import { createContext, PropsWithChildren, useContext, useState } from "react";
import { DetailProductProps, TransactionContextProps } from "./type";

export const TransactionContext = createContext<TransactionContextProps | undefined>(undefined);

export function TransactionContextProvider({children}: PropsWithChildren<{}>) {

    const [state, setState] = useState("initial Value")

    const [orderType, setOrderType] = useState<string>("")

    const [customerName, setCustomerName] = useState<string>("")

    const [isCustomerSaved, setCustomerSaved] = useState<boolean>(false);
    
    const [product, setProduct] = useState<Array<any>>([]);

    const [ detailProduct, setDetailProduct] = useState<DetailProductProps>({
        product_category_id: 0,
        product_name: "",
        product_price: 0,
        product_image: "",
        product_id: 0
    });



    const value = {
        state, setState,
        orderType, setOrderType,
        customerName, setCustomerName,
        isCustomerSaved, setCustomerSaved,
        product, setProduct,
        detailProduct, setDetailProduct
    };

    return (
        <TransactionContext.Provider value={value}>
            {children}
        </TransactionContext.Provider>
    )
}


export function useTransactionContext() {
    const context = useContext(TransactionContext);
    if (!context) {
      throw new Error ('TransactionContext must be used within a TransactionProvider');
    }
    return context;
}