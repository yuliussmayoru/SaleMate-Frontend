
export function PaymentCart() {
    return (
        <div className="flex flex-col justify-between">
            <div className="flex">
                <button className="text-center bg-[#9A97DA] p-4 m-4 rounded-lg">
                    <p>Back</p>
                </button>
                <div className="grow text-center p-4 mr-20 font-bold text-lg">
                    <p>Order Id</p>
                    <p>000000</p>
                </div>
            </div>

            <div>
                <div className="p-4 m-4 text-left border border-black rounded-lg">
                    <p>Customer Name</p>
                </div>
            </div>

            <div className="flex p-4">
                <div className="w-1/2">
                    <p>Order Type: Retail</p>
                    <p>Time : 13:00</p>
                </div>
                <div>
                    <p>Served By : Nata</p>
                    <p>Date: 29/07/24</p>
                </div>
            </div>

            <div className="flex">
                <p>orders</p>
            </div>

            <div className="flex flex-col justify-around">
                <div>
                    <p>Subtotal (0 Items) -</p><p>Rp. 0.00</p>
                </div>
                <div>
                    <p>Tax -</p><p>Rp. 0.00</p>
                </div>
                <div>
                    <p>Discount -</p><p>Rp. 0.00</p>
                </div>
                <div>
                    <p>Grand Total -</p>
                    <p>Rp. 0.00</p>
                </div>
            </div>
            
        </div>
    )
}