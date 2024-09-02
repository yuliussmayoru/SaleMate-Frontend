import { createContext, PropsWithChildren, useState } from "react";
import { TransactionContextProps } from "./type";

const TransactionContext = createContext<TransactionContextProps | undefined>(undefined);

export function TransactionContextProvider({children}: PropsWithChildren<{}>) {
    const [state, setState] = useState("initial Value")
    return (
        <TransactionContext.Provider value={{ state, setState }}>
            {children}
        </TransactionContext.Provider>
    )
}