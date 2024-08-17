import React from 'react';
import { Cart, HomeNotes, PosHeader, SavedOrder } from '../';
import { Button } from '@/src/features';

export function OrderWrapper() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">

      <div className="flex flex-1">
        {/* Left Panel */}
        <div className="w-2/3 flex-1 space-y-4">
          <PosHeader />
          {/* Saved Order */}
          
          <SavedOrder />

          {/* New Order */}
          <div className="flex-1 space-x-4 p-4">
            <div className='text-center bg-white p-2 rounded-lg shadow-md mb-4'>
              <p className='text-xl'>New Order</p>
            </div>
            <div className='flex space-x-4'>
              <Button className="bg-[#F38C55] flex-1 p-4 rounded-lg shadow-md text-white text-lg">
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
           <Cart />
        </div>
       
      </div>
    </div>
  );
};
