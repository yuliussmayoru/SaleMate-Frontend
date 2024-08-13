export default function ProductPage() {
    return (
        <div className="relative">
            <div className="absolute top-20 left-0 right-0"> {/* Increase top property to move the line further down */}
                <hr className="border-t-2 border-gray-300 w-full" /> {/* Full-width line */}
            </div>
            <div className="pt-28"> {/* Increase padding-top to ensure content is not hidden behind the line */}
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Product</h2>
                    <p className="mb-6">Check your store product details, you can add, edit and update</p>

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
    );
}
