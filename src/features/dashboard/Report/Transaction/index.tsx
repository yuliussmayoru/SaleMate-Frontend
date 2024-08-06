import { Card, FilterBar } from "@/features/base";
import { useEffect, useState } from "react";

type Transaction = {
    id: string;
    storeId: string;
    receipt: string;
    date: string;
    amount: number;
};

export default function TransactionPage() {
    const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
    
    const transactions: Transaction[] = [
        // Example transactions
        { id: '1', storeId: 'Store 1', receipt: '001', date: '2024-07-01', amount: 100 },
        { id: '2', storeId: 'Store 2', receipt: '002', date: '2023-07-02', amount: 200 },
        // Add more transactions as needed
    ];

    useEffect(() => {
        setFilteredTransactions(transactions); // Initialize with all transactions
    }, []);

    const filtersConfig = [
        { name: 'storeId', label: 'Store', type: 'select' as const, options: ['Store 1', 'Store 2'] },
        { name: 'receipt', label: 'Receipt', type: 'select' as const, options: ['001', '002'] },
        { name: 'from', label: 'From', type: 'date' as const },
        { name: 'to', label: 'To', type: 'date' as const },
    ];
    
    const handleFilter = (filters: { [key: string]: string }) => {
        const filtered = transactions.filter((transaction) => {
            const transactionDate = new Date(transaction.date);
            const fromDate = filters.from ? new Date(filters.from) : null;
            const toDate = filters.to ? new Date(filters.to) : null;
            
            return (
                (filters.storeId ? transaction.storeId.includes(filters.storeId) : true) &&
                (filters.receipt ? transaction.receipt.includes(filters.receipt) : true) &&
                (fromDate ? transactionDate >= fromDate : true) &&
                (toDate ? transactionDate <= toDate : true)
            );
        });
    
        setFilteredTransactions(filtered);
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full">
                <div className="flex justify-between items-center pt-20 mb-4 gap-6">
                    <div className="text-gray-2">
                        <h2 className="text-xl font-bold">Report</h2>
                        <p className="text-sm">Check your current store report</p>
                    </div>
                </div>

                {/* FILTER CARD */}
                <Card className="mb-4">
                    <div className="flex flex-col w-full justify-between items-start gap-4">
                        <div className="flex flex-col">
                            <h2 className="text-xl text-gray-2 font-semibold">Filter Data Report</h2>
                            <p className="text-sm text-gray-3">Filter your summary for data report</p>
                        </div>

                        <FilterBar 
                            filtersConfig={filtersConfig}
                            onFilter={handleFilter}
                        />
                    </div>
                </Card>

                <Card>
                    {/* Filtered Transactions Table */}
                    <table className="w-full text-center">
                        <thead>
                            <tr>
                            <th>Store</th>
                            <th>Receipt</th>
                            <th>Date</th>
                            <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTransactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.storeId}</td>
                                <td>{transaction.receipt}</td>
                                <td>{transaction.date}</td>
                                <td>{transaction.amount}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    );
}