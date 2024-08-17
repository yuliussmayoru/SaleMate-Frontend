import React from 'react';
import { HomeNotes, OrderCard, PosHeader, SelectedOrderLists } from '@/src/features/pos'
import { Button } from '@/src/features';

export function OrderWrapper() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">

      <div className="flex flex-1">
        {/* Left Panel */}
        <div className="w-2/3 flex-1 space-y-4">
          <PosHeader 
            cashierName="Nata de Coco"
            date="17:00 29/07/24"
            cashierStatus="Open"
          />
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

         {/* Right Panel */}

        <div className='w-1/3'>
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
              <SelectedOrderLists 
                quantity={2}
                productName={'Indomie rebus seuhah'}
                price={10000}
              />
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
          </div>
        
        </div>
    </div>
  );
};
