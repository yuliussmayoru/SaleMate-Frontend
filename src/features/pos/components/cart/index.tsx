import { Button } from "@/src/features";

export function Cart() {
    return (
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md flex flex-col justify-between h-screen">
            <div>
                <div className="flex text-xl font-semibold">
                    <Button className="bg-gray-200 text-gray-500 w-full py-3 mt-4 rounded-lg">
                        Delete
                    </Button>
                    <div className="w-full text-center">
                        <p>Order Id</p>
                        <p>000000</p>
                    </div> 
                    <Button className="bg-gray-200 text-gray-500 w-full py-3 mt-4 rounded-lg">
                        Save
                    </Button>
                </div>
                <div>
                    <Button className="bg-gray-200 text-gray-500 w-full rounded-lg mt-4">
                        <p>Customer Name</p>
                    </Button>
                </div>
            </div>

          <div className="text-center text-gray-400">
            Add new order or Continue from saved order
          </div>
          <div>
            <div className="text-left text-gray-500 space-y-1">
              <div>Subtotal (0 Items) -</div>
              <div>Tax -</div>
              <div className="font-bold">Grand Total -</div>
              <div className="text-gray-400">Add Order Discount</div>
            </div>
            <button className="bg-gray-200 text-gray-500 w-full py-3 mt-4 rounded-lg">
              Charge
            </button>
          </div>
        </div>
    )
}