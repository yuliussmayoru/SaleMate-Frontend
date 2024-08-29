import { SaleMateLogo } from "@/src/assets";
import { Button } from "@/src/features";
import { HeaderProps } from "./type";

export function PosHeader({ cashierName, date, cashierStatus, ...rest}: HeaderProps) {
    return (
        <div>
            {/* Header */}
            <header className="bg-[#9A97DA] flex items-center justify-between p-2 text-white" {...rest}>
                <div className="flex">
                    <SaleMateLogo width={80} className="ml-5"/>
                    <div className="text-center m-2"><p>{cashierName}</p></div>
                </div>
                <div className="w-full text-center text-2xl"><p>{date}</p></div>
                <Button className="bg-[#C7ECBA] rounded-3xl mr-8 text-[#56A53A] text-xl w-24">{cashierStatus}</Button>
            </header>
        </div>
    )
}