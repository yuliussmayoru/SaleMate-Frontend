import { Card, FilterBar } from "@/features/base";
import { useEffect, useState } from "react";

type Tax = {
    id: string,
    storeId: string,
    date: string,
    subtotal: number,
    service: number,
    tax: number,
};

export default function TaxPage() {
    const [filteredTaxes, setFilteredTaxes] = useState<Tax[]>([]);

    const taxes: Tax[] = [
        {id: '1', storeId: 'BDG01', date: '26/07/2024', subtotal: 350000, service: 10000, tax: 35000},
        {id: '2', storeId: 'BDG02', date: '21/07/2024', subtotal: 310000, service: 10000, tax: 31000},
        {id: '3', storeId: 'BDG03', date: '23/07/2024', subtotal: 120000, service: 10000, tax: 12000},
        {id: '4', storeId: 'BDG04', date: '25/07/2024', subtotal: 1975000, service: 10000, tax: 197500},
    ];

    useEffect(() => {
        setFilteredTaxes(taxes);
    }, []);

    const filtersConfig = [
        { name: 'storeId', label: 'Store', type: 'select' as const, options: ['BDG01', 'BDG02', 'BDG03', 'BDG04'] },
        { name: 'from', label: 'From', type: 'date' as const },
        { name: 'to', label: 'To', type: 'date' as const },
    ];

    const handleFilter = (filters: {[key: string]: string}) => {
        const filtered = taxes.filter((tax) => {
            const taxDate = new Date(tax.date);
            const fromDate = filters.from ? new Date(filters.from) : null;
            const toDate = filters.to ? new Date(filters.to) : null;
            
            return (
                (filters.storeId ? tax.storeId.includes(filters.storeId) : true) &&
                (fromDate ? taxDate >= fromDate : true) &&
                (toDate ? taxDate <= toDate : true)
            );
        });
        
        setFilteredTaxes(filtered);
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
            <div className="pt-20 border-bottom" />
            <div className="w-full">
                <div className="flex justify-between items-center mb-4 gap-6">
                    <div className="text-gray-2">
                        <h2 className="text-xl font-bold">Report</h2>
                        <p className="text-sm">Check your current store report</p>
                    </div>
                </div>

                {/* Filter Card */}
                <Card className="mb-4">
                    <div className="flex flex-col w-full justify-between items-start gap-4">
                        <div className="flex flex-col">
                            <h2 className="text-xl text-gray-2 font-semibold">Filter Data Report</h2>
                            <p className="text-sm text-gray-3">Filter your summary for detail data report</p>
                        </div>

                        <FilterBar 
                            filtersConfig={filtersConfig}
                            onFilter={handleFilter}
                        />
                    </div>
                </Card>

                <Card>
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl text-gray-2 font-semibold">Tax Summary</h2>
                        <div className="flex flex-row gap-2 text-gray-3 text-sm">
                            <span>period :</span>
                            {/* CHANGE DATE LATER */}
                            <p>09.00, 24 Jul 2024 - 22.00, 26 Jul 2024 </p>
                        </div>
                    </div>

                    <div className="flex text-gray-2 mb-6">
                        <div className="w-1/3 flex flex-col text-center">
                            <p>
                                Sub-total ( Rp )
                            </p>
                            <h1 className="text-3xl font-bold">
                                6.055.000
                            </h1>
                        </div>
                        <div className="w-1/3 flex flex-col text-center">
                            <p>
                                Total Taxes ( Rp )
                            </p>
                            <h1 className="text-3xl font-bold">
                                605.500
                            </h1>
                        </div>
                        <div className="w-1/3 flex flex-col text-center">
                            <p>
                                Total Service ( Rp )
                            </p>
                            <h1 className="text-3xl font-bold">
                                70.000
                            </h1>
                        </div>
                    </div>

                    <div className="overflow-auto max-h-[38em] scrollbar-thin">
                        <table className="w-full text-center text-gray-2">
                            <thead className="text-gray-4 sticky top-0 bg-white">
                                <tr>
                                    <th>Store Id</th>
                                    <th>Date</th>
                                    <th>Subtotal (Rp)</th>
                                    <th>Service (Rp)</th>
                                    <th>Tax (Rp) </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTaxes.map((tax) => (
                                <tr key={tax.id} className="even:bg-gray-6">
                                    <td className="p-4">{tax.storeId}</td>
                                    <td>{tax.date}</td>
                                    <td>{formatCurrency (tax.subtotal)}</td>
                                    <td>{formatCurrency (tax.service)}</td>
                                    <td>{formatCurrency (tax.tax)}</td>
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