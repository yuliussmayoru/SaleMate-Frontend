import { OpenClose, openCloses } from "@/src/assets";
import { Card, FilterBar } from "@/src/features";
import { useEffect, useState } from "react";

export default function OpenClosePage() {
    const [filteredOpenCloses, setFilteredOpenCloses] = useState<OpenClose[]>([]);
    
    useEffect(() => {
        setFilteredOpenCloses(openCloses);
    }, []);

    const filtersConfig = [
        { name: 'storeId', label: 'Store', type: 'select' as const, options: ['Store 1', 'Store 2'] },
        { name: 'openBy', label: 'Open By', type: 'select' as const, options: ['Mutia', 'Vivi', 'Tuti'] },
        { name: 'closeBy', label: 'Close By', type: 'select' as const, options: ['Mutia', 'Vivi', 'Tuti'] },
        { name: 'from', label: 'From', type: 'date' as const },
        { name: 'to', label: 'To', type: 'date' as const },
    ];
    
    const handleFilter = (filters: { [key: string]: string }) => {
        const filtered = openCloses.filter((OpenClose) => {
            const transactionDate = new Date(OpenClose.date);
            const fromDate = filters.from ? new Date(filters.from) : null;
            const toDate = filters.to ? new Date(filters.to) : null;
            
            return (
                (filters.storeId ? OpenClose.storeId.includes(filters.storeId) : true) &&
                (filters.openBy ? OpenClose.openBy.includes(filters.openBy) : true) &&
                (filters.closeBy ? OpenClose.closeBy.includes(filters.closeBy) : true) &&
                (fromDate ? transactionDate >= fromDate : true) &&
                (toDate ? transactionDate <= toDate : true)
            );
        });
    
        setFilteredOpenCloses(filtered);
    };

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
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl text-gray-2 font-semibold">Open/Close Summary</h2>
                        <div className="flex flex-row gap-2 text-gray-3 text-sm">
                            <span>period :</span>
                            {/* CHANGE DATE LATER */}
                            <p>09.00, 24 Jul 2024 - 22.00, 26 Jul 2024 </p>
                        </div>
                    </div>

                    <div className="flex flex-row text-gray-2 mb-6">

                        <div className="w-1/2 flex flex-col text-center">
                            <p>
                                Total Bills ( Rp )
                            </p>
                            <h1 className="text-3xl font-bold">
                                511.000
                            </h1>
                        </div>

                        <div className="w-1/2 flex flex-col text-center">
                            <p>
                                Total Incomes ( Rp )
                            </p>
                            <h1 className="text-3xl font-bold">
                                6.080.500
                            </h1>
                        </div>
                    </div>

                    {/* Filtered Transactions Table */}
                    <div className="overflow-auto max-h-[23rem] scrollbar-thin border-t border-gray-5">
                        <table className="w-full text-center text-gray-2">
                            <thead className="text-gray-4 sticky top-0 bg-white">
                                <tr>
                                    <th className="p-2">Store Id</th>
                                    <th>Date</th>
                                    <th>Open By</th>
                                    <th>Close By</th>
                                    <th>Bill of Quantity</th>
                                    <th>Grand Total ( Rp )</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOpenCloses.map((OpenClose) => (
                                    <tr key={OpenClose.id} className="even:bg-gray-6">
                                        <td className="p-2">{OpenClose.storeId}</td>
                                        <td>{OpenClose.date}</td>
                                        <td>{OpenClose.openBy}</td>
                                        <td>{OpenClose.closeBy}</td>
                                        <td>{OpenClose.billOfQuantity}</td>
                                        <td>{formatCurrency(OpenClose.grandTotal)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    );
}