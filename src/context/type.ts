export type TransactionContextProps = {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    orderType: string;
    setOrderType: React.Dispatch<React.SetStateAction<string>>;
    customerName: string;
    setCustomerName: React.Dispatch<React.SetStateAction<string>>
    isCustomerSaved: boolean;
    setCustomerSaved: React.Dispatch<React.SetStateAction<boolean>>;
}
