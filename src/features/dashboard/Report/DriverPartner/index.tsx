import { DriverPartnerReport, driverPartners} from "@/assets";
import { Card, FilterBar } from "@/features/base";
import { useEffect, useState } from "react";

export default function DriverPartnerPage() {
    const [filteredDriverPartners, setFilteredDriverPartners] = useState<DriverPartnerReport[]>([]);
    
    useEffect(() => {
        setFilteredDriverPartners(driverPartners);
    }, []);

    const filtersConfig = [
        { name: 'storeId', label: 'Store', type: 'select' as const, options: ['Store 1', 'Store 2'] },
        { name: 'receipt', label: 'Receipt', type: 'select' as const, options: ['001', '002'] },
        { name: 'driverPartner', label: 'Driver Partner', type: 'select' as const, options: ['gojek', 'grab', 'shopee'] },
        { name: 'from', label: 'From', type: 'date' as const },
        { name: 'to', label: 'To', type: 'date' as const },
    ];
    
    const handleFilter = (filters: { [key: string]: string }) => {
        const filtered = driverPartners.filter((DriverPartner) => {
            const transactionDate = new Date(DriverPartner.date);
            const fromDate = filters.from ? new Date(filters.from) : null;
            const toDate = filters.to ? new Date(filters.to) : null;
            
            return (
                (filters.storeId ? DriverPartner.storeId.includes(filters.storeId) : true) &&
                (filters.receipt ? DriverPartner.receipt.includes(filters.receipt) : true) &&
                (filters.driverPartner ? DriverPartner.driverPartner.includes(filters.driverPartner) : true) &&
                (fromDate ? transactionDate >= fromDate : true) &&
                (toDate ? transactionDate <= toDate : true)
            );
        });
    
        setFilteredDriverPartners(filtered);
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
                        <h2 className="text-xl text-gray-2 font-semibold">Driver Partner Summary</h2>
                        <div className="flex flex-row gap-2 text-gray-3 text-sm">
                            <span>period :</span>
                            {/* CHANGE DATE LATER */}
                            <p>09.00, 24 Jul 2024 - 22.00, 26 Jul 2024 </p>
                        </div>
                    </div>

                    <div className="flex flex-row text-gray-2 mb-6">

                        <div className="w-1/2 flex flex-col text-center">
                            <p>
                                Total Benefits ( Rp )
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
                                    <th>Receipt No</th>
                                    <th>Driver Partner</th>
                                    <th>Benefit ( Rp) </th>
                                    <th>Grand Total ( Rp )</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredDriverPartners.map((DriverPartner) => (
                                    <tr key={DriverPartner.id} className="even:bg-gray-6">
                                        <td className="p-2">{DriverPartner.storeId}</td>
                                        <td>{DriverPartner.date}</td>
                                        <td>{DriverPartner.receipt}</td>
                                        <td>{DriverPartner.driverPartner}</td>
                                        <td>{formatCurrency(DriverPartner.benefit)}</td>
                                        <td>{formatCurrency(DriverPartner.grandTotal)}</td>
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