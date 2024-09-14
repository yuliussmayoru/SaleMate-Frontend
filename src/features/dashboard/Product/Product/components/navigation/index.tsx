import Loader from "@/src/features/base/Loader";
import { NavigationBarProps } from "./types";

export default function NavigationBar({ loading, totalItems }:NavigationBarProps ) {
    return (
        <div className="p-6 border bg-white border-gray-6 rounded-[10px] shadow-md mb-6">
            <h3 className="text-xl font-bold text-gray-2 mb-2">Navigation</h3>
            {loading ? (
                <Loader />
            ) : (
            <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="text-center">
                    <p className="text-sm font-bold text-gray-2">Total Category Id(s)</p>
                    <p className="text-3xl font-bold text-gray-2">{totalItems}</p>
                    <p className="text-sm font-light text-gray-2">No latest update</p>
                </div>
                <div className="text-center">
                    <p className="text-sm font-bold text-gray-2">Total Category(s)</p>
                    <p className="text-3xl font-bold text-gray-2">{totalItems}</p>
                    <p className="text-sm font-light text-gray-2">Latest Update: 16 Jul 24 by Adm - Christopher</p>
                </div>
            </div>
            )}
            <div className="mb-6">
                <div className="flex items-center space-x-4">
                    <div className="flex-1">
                        <p className="text-sm font-bold text-gray-2 mb-2">What are you looking for?</p>
                        <input 
                            type="text" 
                            placeholder="Search for Store, Store Id, Category, etc" 
                            className="border rounded p-2 w-full text-sm" 
                        />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-bold text-gray-2 mb-2">Category</p>
                        <select className="border rounded p-2 w-full text-gray-2 text-sm" title="category">
                            <option value="all">All</option>
                        </select>
                    </div>
                    <button className="bg-[#a4be6a] text-white font-bold py-2 px-4 rounded text-sm mt-5">Search</button>
                </div>
            </div>
        </div>
    )
};
