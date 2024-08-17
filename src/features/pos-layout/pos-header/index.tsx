import { SaleMateLogo } from "@/src/assets";

export function PosHeader() {
    return (
        <div>
            {/* Header */}
            <header className="bg-[#d5cdf5] flex items-center justify-between p-2 text-white">
                <SaleMateLogo width={60} className="ml-5"/>
                <div className="font-semibold">CS - Mutia</div>
                <div>13.00 - Monday, 29/07/24</div>
                <button className="bg-green-400 px-4 py-2 rounded-lg">Open</button>
            </header>
        </div>
    )
}