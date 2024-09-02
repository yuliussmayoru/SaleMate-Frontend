import { createContext, PropsWithChildren, useState } from "react";
import { TransactionContextProps } from "./type";

export const TransactionContext = createContext<TransactionContextProps | undefined>(undefined);

export function TransactionContextProvider({children}: PropsWithChildren<{}>) {

    const [state, setState] = useState("initial Value")

    const [orderType, setOrderType] = useState<string>("")

    const [customerName, setCustomerName] = useState<string>("")

    const [isCustomerSaved, setCustomerSaved] = useState<boolean>(false);

    const value = {
        state, setState,
        orderType, setOrderType,
        customerName, setCustomerName,
        isCustomerSaved, setCustomerSaved
    };

    return (
        <TransactionContext.Provider value={{ 
            state, setState,
            orderType, setOrderType,
            customerName, setCustomerName,
            isCustomerSaved, setCustomerSaved
             }}>
            {children}
        </TransactionContext.Provider>
    )
}