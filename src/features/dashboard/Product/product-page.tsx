export default function ProductPage() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full">
                <div className="flex justify-between items-center pt-20 mb-4 gap-6">
                    <div className="text-gray-2">
                        <h2 className="text-xl font-bold">Product</h2>
                        <p className="text-sm mb-4">Check your store product details. You can add, edit, and update.</p>

                        <div className="grid grid-cols-1 gap-6">
                            {/* Product Category Navigation */}
                            <div className="border rounded-lg p-6">
                                <h3 className="text-xl font-bold mb-4">Product Category Navigation</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <p className="text-sm font-bold">Total Store(s)</p>
                                        <p className="text-3xl font-bold">1</p>
                                        <p className="text-sm font-light">No latest update</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-bold">Total Store Id(s)</p>
                                        <p className="text-3xl font-bold">1</p>
                                        <p className="text-sm font-light">No latest update</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-bold">Total Category(s)</p>
                                        <p className="text-3xl font-bold">30</p>
                                        <p className="text-sm font-light">Latest Update: 16 Jul 24 by Adm - Christopher</p>
                                    </div>
                                </div>
                                <div className="flex justify-end mt-4">
                                    <button className="text-white font-bold py-2 px-4 rounded" style={{ backgroundColor: '#a4be6a' }}>See Details</button>
                                </div>
                            </div>

                            {/* Product Navigation */}
                            <div className="border rounded-lg p-6">
                                <h3 className="text-xl font-bold mb-4">Product Navigation</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <p className="text-sm font-bold">Total Product(s)</p>
                                        <p className="text-3xl font-bold">100</p>
                                        <p className="text-sm font-light">Latest Update: 16 Jul 24 by Adm - Christopher</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-bold">Total Prices(s)</p>
                                        <p className="text-3xl font-bold">35</p>
                                        <p className="text-sm font-light">Latest Update: 16 Jul 24 by Adm - Christopher</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-bold">Total Note(s)</p>
                                        <p className="text-3xl font-bold">6</p>
                                        <p className="text-sm font-light">Latest Update: 16 Jul 24 by Adm - Christopher</p>
                                    </div>
                                </div>
                                <div className="flex justify-end mt-4">
                                    <button className="text-white font-bold py-2 px-4 rounded" style={{ backgroundColor: '#a4be6a' }}>See Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
