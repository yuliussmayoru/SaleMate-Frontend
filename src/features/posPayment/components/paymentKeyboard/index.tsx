import { SaleMateLogoPurple } from "@/src/assets"
import { Button, Input, NumButton } from "@/src/features/base"


export default function PaymentKeyboard() {
    return (
        <div >
            <div className="w-full p-8">
                <div className="flex justify-center pb-8">
                    <SaleMateLogoPurple />
                </div>
                <div className="pb-4">
                    <Input 
                        placeholder="Enter payment amount"
                        inputClassName="cursor-none text-center bg-white text-black text-right p-4 rounded-t text-2xl font-bold"
                        disabled
                    />
                </div>
                <div className="grid grid-cols-2 gap-1">
                    <Button className="text-3xl h-[10svh] bg-[#A5BE6A] py-2 text-white font-bold rounded-bl hover:bg-white hover:text-[#A5BE6A]">Cash</Button>
                    <Button className="text-3xl h-[10svh] bg-[#A5BE6A] py-2 text-white font-bold rounded-bl hover:bg-white hover:text-[#A5BE6A]">Bank</Button>
                </div>
                <div className="grid grid-cols-4 gap-1 p-2 bg-gray-100 rounded-b">
                    <NumButton>1</NumButton>
                    <NumButton>2</NumButton>
                    <NumButton>3</NumButton>
                    <Button className=" text-3xl bg-[#9A97DA] text-white py-4 row-span-4 font-semibold rounded hover:bg-white hover:text-[#9A97DA]">Enter</Button>
                    <NumButton>4</NumButton>
                    <NumButton>5</NumButton>
                    <NumButton>6</NumButton>
                    <NumButton>7</NumButton>
                    <NumButton>8</NumButton>
                    <NumButton>9</NumButton>
                    <NumButton>Del</NumButton>
                    <NumButton>0</NumButton>
                    <NumButton>Clr</NumButton>
                    </div>
                <div>
                    <Button className="text-3xl h-[10svh] bg-[#9A97DA] py-2 text-white font-bold hover:bg-white hover:text-[#9A97DA]">Pay</Button>
                </div>
            </div>
        </div>
    )
}