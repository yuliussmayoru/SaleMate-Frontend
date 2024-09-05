import { PaymentCart } from "../paymentCart";
import PaymentKeyboard from "../paymentKeyboard";

export default function PaymentWrapper() {
    return (
        <div className="bg-gray-100 flex min-h-screen overflow-hidden">
            <div className="w-1/3 bg-white">
                <PaymentCart />
            </div>
            <div className="w-2/3">
                <PaymentKeyboard />

            </div>
        </div>
    )
}