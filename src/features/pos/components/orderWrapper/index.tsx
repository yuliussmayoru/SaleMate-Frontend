import React from 'react';
import { Cart, OrderHome, OrderMenu, PosHeader } from '@/src/features/pos';

export function OrderWrapper() {
  return (
    <div className="bg-gray-100 h-screen overflow-hidden"> {/* Prevents scroll */}
      <div className="flex h-full"> {/* Full height for flex container */}
        {/* Left Panel */}
        <div className="w-2/3 flex flex-col space-y-4" id="order-home"> {/* Flex column for stacking */}
          <PosHeader 
            cashierName="Nata de Coco"
            date="17:00 29/07/24"
            cashierStatus="Open"
          />
          <div className="block">
            <OrderHome />
          </div>
          <div className="hidden">
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
