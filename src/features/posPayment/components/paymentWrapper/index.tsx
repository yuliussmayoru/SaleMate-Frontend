import { PaymentCart } from "../paymentCart";

export default function PaymentWrapper() {
    return (
        <div className="bg-gray-100 flext flex-col h-full overflow-hidden">
            <div className="w-1/3 bg-white">
                <PaymentCart />
            </div>
            <div className="w-2/3">

            </div>
        </div>
    )
}