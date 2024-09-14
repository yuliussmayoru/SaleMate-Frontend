import React, { useState } from "react";
import { HomeNotes, OrderCard} from "../";
import { Button } from "../../../base";
import { useTransactionContext } from "@/src/context";
import { InputCustomerModal } from "../inputCustomerModal";

export function OrderHome() {
  
  const { setOrderType } = useTransactionContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOrderType = (orderType: string) => {
    setOrderType(orderType);
    setIsModalOpen(true);
  }

    return(
        <div className="flex flex-col">
            {/* Saved Order */}
          
            <div className="bg-white p-4 rounded-lg shadow-md space-y-4 m-4">
              <div className="text-lg font-semibold mb-2 text-center">Saved Order</div>
              <OrderCard 
                orderId="ST00562"
                date="13:00 29/07/24"
                customerName="Alan Walker"
                itemCount={3}
                className="custom-class"
                id="order-card-1"
                style={{ margin: '10px' }}
              />
            </div>

            {/* New Order */}
            <div className="flex-1 space-x-4 p-4">
              <div className='text-center bg-white p-2 rounded-lg shadow-md mb-4'>
                <p className='text-xl'>New Order</p>
              </div>
              <div className='flex space-x-4'>
                <Button
                    className="bg-[#F38C55] flex-1 p-12 rounded-lg shadow-md text-white text-lg hover:bg-[#F38C26] hover:text-white hover:scale-105 hover:translate-y-[-2px]"
                    onClick={() => handleOrderType('Order')}    
                >
                  Order
                </Button>
                <Button
                  className="bg-[#88C34A] flex-1 p-12 rounded-lg shadow-md text-white text-lg hover:bg-[#88C31A] hover:text-white hover:scale-105 hover:translate-y-[-2px]"
                  onClick={() => handleOrderType('Takeaway')}  
                >
                  Take Away
                </Button>
              </div>

              {/* Notes */}
              <div className="h-[150px] bg-white p-4 rounded-lg shadow-md mt-4 flex justify-center align-middle">
                <HomeNotes />
              </div>
            </div>
           
            

             {/* Customer Modal */}
             {isModalOpen && <InputCustomerModal onClose={() => setIsModalOpen(false)} />}
        </div>
    )
}