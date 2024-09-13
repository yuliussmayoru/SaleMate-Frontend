import { OrderCardProps } from "./type";

export function OrderCard({orderId, date, customerName, itemCount, ...rest}: OrderCardProps) {
    return (
        <button {...rest} className="hover:scale-105 hover:translate-y-[-2px]">
            <div className="bg-orange-400 p-4 rounded-lg text-white max-w-[150px]">
                <div className="text-center">
                    <div className="text-sm">{orderId}</div>
                    <div className="text-xs">{date}</div>
                </div>

                <div className="text-center bg-[#BF7E4E] rounded-lg p-[5px] m-[5px]">
                    <div className="font-semibold mt-2">{customerName}</div>
                    <div className="text-[40px] font-bold">{itemCount}</div>
                    <div className="text-sm">Item(s)</div>
                </div>
            </div>  
        </button>
    )
}
