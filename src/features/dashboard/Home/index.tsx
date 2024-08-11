import { Transaction, transactions } from "@/assets";
import axios from "axios";
import { Card } from "features/base";
import { useEffect, useState } from "react";

export default function DashboardHome() {
    const [transaction, setTransactions] = useState<Transaction[]>(transactions);

    // HANDLE GET DATA FROM API (IF NOT GETTING ANY DATA, GET FROM DUMMY DATA)
    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('/api/transaction'); // Replace with your actual endpoint
                const transactionData = response.data;
                setTransactions(transactionData); 
            } catch (error) {
                console.error('Error fetching driver partners', error);
                setTransactions(transactions);
            }
        };
        
        fetchTransactions();
    }, []);
        
    // IDR CURRENCY FORMAT
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value);
    };
    
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full">
                
                <div className="flex justify-between items-center pt-20 mb-4 gap-6">
                    <div className="text-gray-2">
                        <h2 className="text-xl font-bold">Dashboard</h2>
                        <p className="text-sm">Check your current store status</p>
                    </div>
                </div>

                <div className="flex flex-row gap-2 mb-4">
                    <Card className="bg-green-2 w-1/3 flex flex-col gap-4">
                        <div className="flex justify-between text-white items-center">
                            <h2 className="text-xl font-bold">Store Status</h2>
                            <div className="flex flex-col gap-0.5 cursor-pointer">
                                <div className="border-2 rounded-full"></div>
                                <div className="border-2 rounded-full"></div>
                                <div className="border-2 rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 w-full justify-between">
                            <div className="bg-green-3 w-full rounded-[10px] p-2 text-xl flex items-center justify-center font-bold text-green-1">
                                <h1>OPEN</h1>
                            </div>
                            <div className="w-3/6 text-white">
                                <div className="flex justify-between">
                                    <p>From</p>
                                    <p className="font-bold">09.00</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>To</p>
                                    <p className="font-bold">20.00</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="bg-pink-2 w-1/3">
                        <div className="flex justify-between text-white items-center">
                            <h2 className="text-xl font-bold">Incoming Order</h2>
                            <div className="flex flex-col gap-0.5 cursor-pointer">
                                <div className="border-2 rounded-full"></div>
                                <div className="border-2 rounded-full"></div>
                                <div className="border-2 rounded-full"></div>
                            </div>
                        </div>
                    </Card>
                    <Card className="bg-orange-2 w-1/3">
                        <div className="flex justify-between text-white items-center gap-2">
                            <h2 className="text-xl font-bold">Latest Income</h2>
                            <div className="flex flex-row gap-2 items-center">
                                <div className="rounded-md p-1.5 bg-orange-1">
                                    <p>15 - 20 Jul 24</p>
                                </div>
                                <div className="flex flex-col gap-0.5 cursor-pointer">
                                    <div className="border-2 rounded-full"></div>
                                    <div className="border-2 rounded-full"></div>
                                    <div className="border-2 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <Card className="mb-4">
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl text-gray-2 font-semibold">Latest Order Status</h2>
                    </div>

                    <div className="overflow-auto max-h-[23rem] scrollbar-thin border-t border-gray-5">
                        <table className="w-full text-center text-gray-2">
                            <thead className="text-gray-4 sticky top-0 bg-white">
                                <tr>
                                    <th className="p-2">Store Id</th>
                                    <th>Date</th>
                                    <th>Receipt No</th>
                                    <th>Subtotal ( Rp )</th>
                                    <th>Service</th>
                                    <th>Tax ( Rp )</th>
                                    <th>Completion</th>
                                    <th>Discount ( Rp )</th>
                                    <th>Grand Total ( Rp )</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction) => (
                                <tr key={transaction.id} className="even:bg-gray-6">                                        
                                    <td className="p-2">{transaction.storeId}</td>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.receipt}</td>
                                    <td>{formatCurrency(transaction.subtotal)}</td>
                                    <td>{formatCurrency(transaction.service)}</td>
                                    <td>{formatCurrency(transaction.tax)}</td>
                                    <td>{transaction.completion}</td>
                                    <td>{formatCurrency(transaction.discount)}</td>
                                    <td>{formatCurrency(transaction.grandTotal)}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>

                <Card>
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl text-gray-2 font-semibold">Product Stock Shortage</h2>
                    </div>
                </Card>

            </div>
        </div>
    );
}
