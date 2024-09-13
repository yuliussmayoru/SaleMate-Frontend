import { useTransactionContext } from "@/src/context";
import { Button, SelectedOrderLists } from "@/src/features";
import { fetchTaxConfig } from "@/src/service/taxService";
import { useEffect, useState } from "react";

export function Cart() {

  const { 
    setCustomerName, 
    setCustomerSaved, 
    customerName, 
    selectedProducts, 
    removeProduct, 
    orderType,
    orderTime,
    orderDate,
    username
   } = useTransactionContext();

  const [vat, setVat] = useState(0);
  const [service, setService] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTaxConfig = async () => {
      try {
        const taxConfig = await fetchTaxConfig();
        setVat(taxConfig.vat);
        setService(taxConfig.service);
      } catch (error) {
        console.error('Error fetching tax config:', error);
      } finally {
        setLoading(false);
      }
    };

    getTaxConfig();
  }, []);

  const handlerBack = () => {
    setCustomerName("")
    setCustomerSaved(false)
  };


  const subtotal = selectedProducts.reduce((total, product) => total + (product.product_price * product.product_quantity), 0)

  const vatAmount = (subtotal * vat) / 100;
  const serviceAmount = (subtotal * service) / 100;
  const grandTotal = subtotal + vatAmount + serviceAmount;

  if (loading) return <div>Loading...</div>;

    return (
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md flex flex-col justify-between h-[100svh] mb-0">
            <div>
                <div className="flex text-xl font-semibold">
                    <Button 
                        onClick={handlerBack} className="bg-[#FFA3A3]  hover:bg-[#FFA3A3] hover:scale-105 hover:translate-y-[-2px]">
                        Back
                    </Button>
                    <div className="w-full text-center">
                        <p>Order Id</p>
                        <p>000000</p>
                    </div> 
                    <Button className="bg-[#FFD875] hover:bg-[#FFD875] hover:scale-105 hover:translate-y-[-2px]">
                        Save
                    </Button>
                </div>
                <div>
                    <Button className="bg-[#d7d5fd] text-gray-500 w-full rounded-lg mt-4 hover:bg-[#d7d5fd] hover:scale-105 hover:translate-y-[-2px]">
                        <p className="text-[#8766EF]">Customer Name: {customerName}</p>
                    </Button>
                </div>
                <div className="flex">
                  <div className="w-1/2">
                    <p>Order Type: {orderType}</p>
                    <p>Time : {orderTime}</p>
                  </div>
                  <div>
                    <p>Served By : {username}</p>
                    <p>Date: {orderDate}</p>
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

              <div className="flex justify-between">
                <p>Subtotal {selectedProducts.length} Item(s)</p><p>Rp. {subtotal.toFixed(2)}</p>
              </div>

              <div className="flex justify-between">
                <p>VAT</p>
                <p>Rp. {vatAmount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Service</p>
                <p>Rp. {serviceAmount.toFixed(2)}</p>
              </div>
              <div className="font-bold flex justify-between">
                <p>Grand Total</p>
                <p>Rp. {grandTotal.toFixed(2)}</p>
              </div>
            </div>
            <button className="bg-[#9A97DA] text-white w-full py-3 mt-4 rounded-lg hover:bg-[#9A97DA] hover:scale-105 hover:translate-y-[-2px]">
              <div className="flex justify-around">
                <p className="text-xl font-bold">Payment</p>
                <p className="text-xl font-bold">Rp. {grandTotal.toFixed(2)}</p></div>
            </button>
          </div>
        </div>
    )
}
