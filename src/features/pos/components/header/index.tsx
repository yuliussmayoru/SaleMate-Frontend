import { SaleMateLogo } from "@/src/assets";
import { Button } from "@/src/features";
import { HeaderProps } from "./type";
import Cookies from "js-cookie";
import { token } from "@/src/config";
import { useRouter } from "next/navigation";
import { getDateTome } from "@/src/utils/getRealTime";
import { useEffect, useState } from "react";
import { useTransactionContext } from "@/src/context";

export function PosHeader({ cashierName, date, cashierStatus, ...rest}: HeaderProps) {
    const [currentDateTime, setCurrentDateTime] = useState(getDateTome(new Date()));
    const { username } = useTransactionContext();

    useEffect(() => {
        const updateTime = () => {
            setCurrentDateTime(getDateTome(new Date()));
        }

        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    })

    const router = useRouter();

    const handleLogout = () => {
        Cookies.remove(token)
        router.push('/pin')
    }
    return (
        <div>
            {/* Header */}
            <header className="bg-[#9A97DA] flex items-center justify-between text-white h-[85px]" {...rest}>
                <div className="flex">
                    <SaleMateLogo width={80} className="ml-5"/>
                    <div className="flex flex-col justify-center ml-5"><p>{username}</p></div>
                </div>
                <div className="w-full text-center text-xl"><p>{currentDateTime}</p></div>
                <Button className="bg-[#C7ECBA] rounded-3xl mr-8 text-[#56A53A] w-40 hover:bg-white hover:text-[#9A97DA] hover:scale-105 hover:translate-y-[-2px]">{cashierStatus}</Button>
                <Button className="bg-[#C7ECBA] rounded-3xl mr-8 text-[#56A53A] w-40 hover:bg-white hover:text-[#9A97DA] hover:scale-105 hover:translate-y-[-2px]" onClick={handleLogout}>Logout</Button>
            </header>
        </div>
    )
}