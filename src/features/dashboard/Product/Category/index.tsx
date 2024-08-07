export default function CategoryPage() {
    return (
        <div className="relative">
            <div className="absolute top-20 left-0 right-0">
                <hr className="border-t-2 border-gray-300 w-full" />
            </div>
            <div className="pt-28">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-2xl font-bold">Product /Product Category</h2>
                            <p className="mb-6">Check your store product category details. you can add, edit and update</p>
                        </div>
                        <button className="bg-[#eb9c63] text-white font-bold py-2 px-4 rounded">+ Add Category</button>
                    </div>

                    {/* Navigation Box */}
                    <div className="p-6 border rounded-lg mb-6">
                        <h3 className="text-xl font-bold mb-2">Navigation</h3>
                        <div className="grid grid-cols-3 gap-2 mb-6">
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
                        <div className="mb-6">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1">
                                    <p className="text-sm font-bold mb-2">What are you looking for?</p>
                                    <input 
                                        type="text" 
                                        placeholder="Search for Store, Store Id, Category, etc" 
                                        className="border rounded p-2 w-full text-sm" 
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-bold mb-2">Store</p>
                                    <select className="border rounded p-2 w-full text-sm" title="store">
                                        <option value="all">All</option>
                                    </select>
                                </div>
                                <div>
                                    <p className="text-sm font-bold mb-2">Store Id</p>
                                    <select className="border rounded p-2 w-full text-sm" title="store id">
                                        <option value="all">All</option>
                                    </select>
                                </div>
                                <div>
                                    <p className="text-sm font-bold mb-2">Category</p>
                                    <select className="border rounded p-2 w-full text-sm" title="category">
                                        <option value="all">All</option>
                                    </select>
                                </div>
                                <button className="bg-[#a4be6a] text-white font-bold py-2 px-4 rounded text-sm mt-5">Search</button>
                            </div>
                        </div>
                    </div>

                    {/* Category Data Box */}
                    <div className="p-6 border rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">Category Data</h3>
                            <div className="flex">
                                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded">&lt;</button>
                                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded ml-2">1</button>
                                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded ml-2">2</button>
                                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded ml-2">3</button>
                                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded ml-2">&gt;</button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border px-4 py-2 text-left">Store</th>
                                        <th className="border px-4 py-2 text-left">Store Id</th>
                                        <th className="border px-4 py-2 text-left">Category</th>
                                        <th className="border px-4 py-2 text-left">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from({ length: 9 }, (_, index) => (
                                        <tr key={index} className="odd:bg-white even:bg-gray-50">
                                            <td className="border px-4 py-2">Dago, Bandung</td>
                                            <td className="border px-4 py-2">BDG01</td>
                                            <td className="border px-4 py-2">Category {index + 1}</td>
                                            <td className="border px-4 py-2">
                                                <button className="text-blue-500 mr-2">✏️</button>
                                                <button className="text-red-500">🗑️</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
