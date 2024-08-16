import { Card, FilterBar } from "@/src/features";
import { useState, useEffect } from "react";
// import { Promo } from "@/assets/dummyTax";

type Promo = {
    id: string,
    storeId: string,
    date: string,
    receipt: string,
    name: string,
    promoCost: number,
    promoProduct: string,
};

export default function PromoPage() {
    const [filteredPromos, setFilteredPromos] = useState<Promo[]>([]);

    const promos: Promo[] = [
        // Example promo
        {id: '1', storeId: 'BDG01', date: '26/07/2024', receipt: 'ST01', name: 'Gojek Discount 30%', promoCost: 36600, promoProduct: 'Denim Jacket v.2'},
        {id: '2', storeId: 'BDG02', date: '21/07/2024', receipt: 'ST02', name: 'Maxim Discount 10%', promoCost: 16600, promoProduct: 'Denim Pants v.2'},
        {id: '3', storeId: 'BDG03', date: '23/07/2024', receipt: 'ST03', name: 'Grab Discount 20%', promoCost: 26600, promoProduct: 'Denim T-Shirt v.2'},
        {id: '4', storeId: 'BDG04', date: '25/07/2024', receipt: 'ST04', name: 'Gojek Discount 10%', promoCost: 56600, promoProduct: 'Denim Shoes v.2'},
    ];

    useEffect(() => {
        setFilteredPromos(promos);
    }, []);

    const filtersConfig = [
        { name: 'storeId', label: 'Store', type: 'select' as const, options: ['BDG01', 'BDG02', 'BDG03', 'BDG04'] },
        { name: 'receipt', label: 'Receipt', type: 'select' as const, options: ['ST01', 'ST02','ST03', 'ST04'] },
        { name: 'name', label: 'Name', type: 'select' as const, options: ['Gojek Discount 30%', 'Maxim Discount 10%','Grab Discount 20%', 'Gojek Discount 10%'] },
        { name: 'from', label: 'From', type: 'date' as const },
        { name: 'to', label: 'To', type: 'date' as const },
    ];

    const handleFilter = (filters: {[key: string]: string}) => {
        const filtered = promos.filter((promo) => {
            const promoDate = new Date(promo.date);
            const fromDate = filters.from ? new Date(filters.from) : null;
            const toDate = filters.to ? new Date(filters.to) : null;
            
            return (
                (filters.storeId ? promo.storeId.includes(filters.storeId) : true) &&
                (filters.receipt ? promo.receipt.includes(filters.receipt) : true) &&
                (filters.name ? promo.name.includes(filters.name) : true ) &&
                (fromDate ? promoDate >= fromDate : true) &&
                (toDate ? promoDate <= toDate : true)
            );
        });

        setFilteredPromos(filtered);
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
                        <h2 className="text-xl text-gray-2 font-semibold">Promo Summary</h2>
                        <div className="flex flex-row gap-2 text-gray-3 text-sm">
                            <span>period :</span>
                            {/* CHANGE DATE LATER */}
                            <p>09.00, 24 Jul 2024 - 22.00, 26 Jul 2024 </p>
                        </div>
                    </div>

                    <div className="text-center text-gray-2 mb-6">
                        <div className="flex flex-col">
                            <p>
                                Total Promo Cost ( Rp )
                            </p>
                            <h1 className="text-3xl font-bold">
                                36.600
                            </h1>
                        </div>
                    </div>

                    <div className="overflow-auto max-h-[38em] scrollbar-thin">
                        <table className="w-full text-center text-gray-2">
                            <thead className="text-gray-4 sticky top-0 bg-white">
                                <tr>
                                    <th>Store Id</th>
                                    <th>Date</th>
                                    <th>Receipt No</th>
                                    <th>Promo Name</th>
                                    <th>Promo Cost (Rp) </th>
                                    <th>Promo Product</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPromos.map((promo) => (
                                <tr key={promo.id} className="even:bg-gray-6">
                                    <td className="p-4">{promo.storeId}</td>
                                    <td>{promo.date}</td>
                                    <td>{promo.receipt}</td>
                                    <td>{promo.name}</td>
                                    <td>{formatCurrency (promo.promoCost)}</td>
                                    <td>{promo.promoProduct}</td>
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