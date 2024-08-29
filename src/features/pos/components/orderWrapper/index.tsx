import React from 'react';
import { Cart, OrderHome, OrderMenu, PosHeader } from '@/src/features/pos'
import { Button } from '@/src/features';

export function OrderWrapper() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">

      <div className="flex flex-1">
        {/* Left Panel */}
        <div className="w-2/3 flex-1 space-y-4" id="order-home">
          <div>
            <PosHeader 
              cashierName="Nata de Coco"
              date="17:00 29/07/24"
              cashierStatus="Open"
            />
          </div>
          <div>
            <OrderMenu />
          </div>
        </div>

         {/* Right Panel */}

        <div className='w-1/3'>
          <Cart />
        </div>
        
        </div>
    </div>
  );
};
