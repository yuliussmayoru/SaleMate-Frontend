import { Card, FilterBar } from "@/features/base";
import { useState, useEffect } from "react";

type Promo = {
    id: string,
    storeId: string,
    date: string,
    method: string,
    promoCost: number,
};

export default function PromoPage() {
    const [filteredPromos, setFilteredPromos] = useState<Promo[]>([]);

    const promos: Promo[] = [
        // Example promo
        {id: '1', storeId: 'BDG01', date: '26/07/2024', method: 'CS - Mutia', promoCost: 36600},
        {id: '2', storeId: 'BDG02', date: '21/07/2024', method: 'CS - Intan', promoCost: 16600},
        {id: '3', storeId: 'BDG03', date: '23/07/2024', method: 'CS - Mutia', promoCost: 26600},
        {id: '4', storeId: 'BDG04', date: '25/07/2024', method: 'CS - Intan', promoCost: 56600},
    ];

    useEffect(() => {
        setFilteredPromos(promos);
    }, []);

    const filtersConfig = [
        { name: 'storeId', label: 'Store', type: 'select' as const, options: ['BDG01', 'BDG02', 'BDG03', 'BDG04'] },
        { name: 'method', label: 'Method', type: 'select' as const, options: ['CS - Mutia', 'CS - Intan'] },
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
                (filters.method ? promo.method.includes(filters.method) : true) &&
                (fromDate ? promoDate >= fromDate : true) &&
                (toDate ? promoDate <= toDate : true)
            );
        });

        setFilteredPromos(filtered);
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
                    <thead className="flex flex-col">
                        <h2 className="text-xl text-gray-2 font-semibold mb-4">Promo Summary</h2>
                    </thead>

                    <table className="w-full text-center">
                        <thead>
                            <tr>
                            <th>Store</th>
                            <th>Date</th>
                            <th>Method</th>
                            <th>Promo Cost (Rp) </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPromos.map((promo) => (
                            <tr key={promo.id}>
                                <td>{promo.storeId}</td>
                                <td>{promo.method}</td>
                                <td>{promo.date}</td>
                                <td>{promo.promoCost}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    );
}