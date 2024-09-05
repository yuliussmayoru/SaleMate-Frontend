import React, { useContext, useState } from 'react';
import { Button, Card, Input } from '../../../base';
import { useTransactionContext } from '@/src/context';
import { InputCustomerModalProps } from './type';

export function InputCustomerModal({ onClose }: InputCustomerModalProps) { // Include onSave prop

  const { setCustomerName, setCustomerSaved } = useTransactionContext();

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomerName(inputValue);
    setCustomerSaved(true);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Card className="p-6 bg-white rounded-lg shadow-lg w-[800px] h-[300px]">
        <p className="text-xl font-semibold mb-4 text-center">Customer Data</p>
        <form onSubmit={handleSave}>
          <Input
            label="Customer Name"
            placeholder="Enter customer name"
            name="customerName"
            value={inputValue}
            onChange={handleInputChange}
            inputClassName="w-full bg-white text-black text-center p-4 rounded-t text-2xl font-bold h-[50px]"
          />
          <div className="flex justify-around mt-4">
            <Button
              className="bg-red-500 text-white mr-4 hover:bg-red-600 active:bg-red-700 h-[80px]"
              onClick={onClose}
              type="button"
            >
              Cancel
            </Button>
            <Button
              className="bg-green-500 text-white hover:bg-green-600 active:bg-green-700"
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
