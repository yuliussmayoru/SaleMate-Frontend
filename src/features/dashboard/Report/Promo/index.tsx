export default function PromoPage() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full">
                <div className="flex justify-between items-center pt-20 mb-4 gap-6">
                    <div className="text-gray-2">
                        <h2 className="text-xl font-bold">Report</h2>
                        <p className="text-sm">Check your current store report</p>
                    </div>
                </div>

                <div className="p-4 bg-white border border-gray-6 rounded-[10px] shadow-md mb-4">
                    <h1 className="text-2xl ">Filter Data Report</h1>
                    <p className="text-sm text-gray-2">Filter your summary for detail data report</p>
                </div>
                <div className="p-4 bg-white border border-gray-6 rounded-[10px] shadow-md">
                    <h1 className="text-2xl ">Promo Summary</h1>
                </div>
            </div>
        </div>
    );
}