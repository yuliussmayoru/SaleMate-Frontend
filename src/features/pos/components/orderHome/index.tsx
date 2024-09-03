import React from "react";
import { HomeNotes, OrderCard} from "../";
import { Button } from "../../../base";

export function OrderHome() {
    return(
        <div>
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
                <Button className="bg-[#F38C55] flex-1 p-12 rounded-lg shadow-md text-white text-lg">
                  Retail
                </Button>
                <Button className="bg-[#88C34A] flex-1 p-12 rounded-lg shadow-md text-white text-lg">
                  Take Away
                </Button>
              </div>
            </div>
            {/* Notes */}
            <HomeNotes />
        </div>
    )
}