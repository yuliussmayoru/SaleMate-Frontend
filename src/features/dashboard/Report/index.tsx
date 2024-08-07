import { Card } from "@/features/base";
import Link from "next/link";

export default function ReportPage() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full">
                <div className="flex justify-between items-center pt-20 mb-4 gap-6">
                    <div className="text-gray-2">
                        <h2 className="text-xl font-bold">Report</h2>
                        <p className="text-sm">Check your store report details, you can add, edit and delete</p>
                    </div>
                </div>

                {/* TRANSACTION CARD */}
                <Card>
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl text-gray-2 font-semibold">Transaction Summary</h2>
                        <div className="flex flex-row gap-2 text-gray-3 text-sm">
                            <span>period :</span>
                            {/* CHANGE DATE LATER */}
                            <p>09.00, 24 Jul 2024 - 22.00, 26 Jul 2024 </p>
                        </div>
                    </div>

                    <div className="flex flex-row text-gray-2 mb-6">
                        <div className="w-1/3 flex flex-col text-center">
                            <p>
                                Total Sales ( items )
                            </p>
                            <h1 className="text-3xl font-bold">
                                21
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
                                Total Completions
                            </p>
                            <h1 className="text-3xl font-bold">
                                7
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-row text-gray-2 mb-4">
                        <div className="w-1/3 flex flex-col text-center">
                            <p>
                                Total Services ( Rp )
                            </p>
                            <h1 className="text-3xl font-bold">
                                70.000
                            </h1>
                        </div>

                        <div className="w-1/3 flex flex-col text-center">
                            <p>
                                Total Discounts ( Rp )
                            </p>
                            <h1 className="text-3xl font-bold">
                                580.000
                            </h1>
                        </div>

                        <div className="w-1/3 flex flex-col text-center">
                            <p>
                                Total Incomes ( Rp )
                            </p>
                            <h1 className="text-3xl font-bold">
                                6.080.500
                            </h1>
                        </div>
                    </div>

                    <Link href={'/dashboard/report/transaction'} className="flex justify-end">
                        <button className="bg-green-4 p-1 justify-end px-8 rounded-[10px] text-white font-bold hover:bg-green-5">
                            See Details
                        </button>
                    </Link>
                </Card>

                {/* PAYMENT CARD */}
                <Card>
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl text-gray-2 font-semibold">Payment Summary</h2>
                        <div className="flex flex-row gap-2 text-gray-3 text-sm">
                            <span>period :</span>
                            {/* CHANGE DATE LATER */}
                            <p>09.00, 24 Jul 2024 - 22.00, 26 Jul 2024 </p>
                        </div>
                    </div>

                    <div className="flex flex-row text-gray-2 mb-6">

                        <div className="w-1/2 flex flex-col text-center">
                            <p>
                                Total Cash ( Rp )
                            </p>
                            <h1 className="text-3xl font-bold">
                                477.000
                            </h1>
                        </div>

                        <div className="w-1/2 flex flex-col text-center">
                            <p>
                                Total Transfer Bank ( Rp )
                            </p>
                            <h1 className="text-3xl font-bold">
                                5.092.500
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-row text-gray-2 mb-4">
                        <div className="w-1/2 flex flex-col text-center">
                            <p>
                                Total E-Payment ( Rp )
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

                    <Link href={'/dashboard/report/payment'} className="flex justify-end">
                        <button className="bg-green-4 p-1 justify-end px-8 rounded-[10px] text-white font-bold hover:bg-green-5">
                            See Details
                        </button>
                    </Link>
                </Card>

                {/* PROMO CARD */}
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

                    <Link href={'/dashboard/report/promo'} className="flex justify-end">
                        <button className="bg-green-4 p-1 justify-end px-8 rounded-[10px] text-white font-bold hover:bg-green-5">
                            See Details
                        </button>
                    </Link>
                </Card>

                {/* TAX CARD */}
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

                    <Link href={'/dashboard/report/tax'} className="flex justify-end">
                        <button className="bg-green-4 p-1 justify-end px-8 rounded-[10px] text-white font-bold hover:bg-green-5">
                            See Details
                        </button>
                    </Link>
                </Card>

            </div>
        </div>
    );
}