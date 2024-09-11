import { useTransactionContext } from "@/src/context";
import { Button, SelectedOrderLists } from "@/src/features";
import Product from "@/src/pages/dashboard/product";

export function Cart() {

  const { setCustomerName, setCustomerSaved, customerName, selectedProducts, removeProduct } = useTransactionContext();
  const handlerBack = () => {
    setCustomerName("")
    setCustomerSaved(false)
  };


  const subtotal = selectedProducts.reduce((total, product) => total + (product.product_price * product.product_quantity), 0)
    return (
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md flex flex-col justify-between h-[100svh] mb-0">
            <div>
                <div className="flex text-xl font-semibold">
                    <Button 
                        onClick={handlerBack} className="bg-[#FFA3A3]">
                        Back
                    </Button>
                    <div className="w-full text-center">
                        <p>Order Id</p>
                        <p>000000</p>
                    </div> 
                    <Button className="bg-[#FFD875]">
                        Save
                    </Button>
                </div>
                <div>
                    <Button className="bg-[#d7d5fd] text-gray-500 w-full rounded-lg mt-4">
                        <p className="text-[#8766EF]">Customer Name: {customerName}</p>
                    </Button>
                </div>
                <div className="flex">
                  <div className="w-1/2">
                    <p>Order Type: Retail</p>
                    <p>Time : 13:00</p>
                  </div>
                  <div>
                    <p>Served By : Nata</p>
                    <p>Date: 29/07/24</p>
                  </div>
                </div>
            </div>

          <div className="text-center text-black-400 flex flex-col justify-start h-full">
            {selectedProducts.map((product) => (
              <SelectedOrderLists 
                quantity={product.product_quantity}
                productName={product.product_name}
                price={product.product_price * product.product_quantity}
                onRemove={() => removeProduct(product.product_id)}
              />
            ))}
            
          </div>
          <div>
            <div className="text-left text-gray-500 space-y-1">
              <div>Subtotal (0 Items) -</div>
              <div>Tax -</div>
              <div className="font-bold">Grand Total -</div>
              <div className="text-gray-400">Add Order Discount</div>
            </div>
            <button className="bg-[#9A97DA] text-white w-full py-3 mt-4 rounded-lg">
              <div className="flex justify-around">
                <p className="text-xl font-bold">Payment</p>
                <p className="text-xl font-bold">Rp. 0.00</p></div>
            </button>
          </div>
        </div>
    )
}