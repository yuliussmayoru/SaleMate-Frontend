import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/features/base";

export default function TaxPage() {
    interface Tax {
        tax_id: string;
        tax_type: 'service' | 'fee';
        tax_name: string;
        tax_value: number;
        tax_status: boolean;
        created_at: string;
        updated_at: string;
        isDelete: boolean;
    }

        const [taxes, setTaxes] = useState<Tax[]>([]);
        
        useEffect(() => {
          const fetchTaxes = async () => {
            try {
              const response = await axios.get('/api/taxes'); //Masih sementara, menunggu route yang di sediakan oleh BE
              setTaxes(response.data);
            } catch (error) {
              console.error('Error fetching taxes', error);
            }
          };
      
          fetchTaxes();
        }, []);


    return (
        <div className="w-full min-h-screen p-4 bg-gray-100 flex flex-col items-center">
            <div className="w-full max-w-screen-2xl">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-xl font-bold">Tax</h2>
                        <p>Check your store taxes, you can add, edit and delete</p>
                    </div>
                    <Button className="bg-orange-500 text-white py-1 px-2 rounded">+ Add Tax</Button>
                </div>
                <div className="p-4 bg-white rounded shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Tax Data</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded">
                            <thead>
                                <tr>
                                <th className="py-2 px-4 border">Store Id</th>
                                <th className="py-2 px-4 border">Title</th>
                                <th className="py-2 px-4 border">Value (%)</th>
                                <th className="py-2 px-4 border">Status</th>
                                <th className="py-2 px-4 border">Include in Price</th>
                                <th className="py-2 px-4 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {taxes.map((tax) => (
                                <tr key={tax.tax_id} className={tax.tax_status ? '' : 'bg-gray-100'}>
                                    <td className="py-2 px-4 border">{tax.tax_id}</td>
                                    <td className="py-2 px-4 border">{tax.tax_name}</td>
                                    <td className="py-2 px-4 border">{tax.tax_value}%</td>
                                    <td className="py-2 px-4 border">
                                    <span className={`py-1 px-2 rounded ${tax.tax_status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {tax.tax_status ? 'On' : 'Off'}
                                    </span>
                                    </td>
                                    <td className="py-2 px-4 border">
                                    <span className={`py-1 px-2 rounded ${tax.isDelete ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                        {tax.isDelete ? 'No' : 'Yes'}
                                    </span>
                                    </td>
                                    <td className="py-2 px-4 border flex space-x-2">
                                    <Button className="bg-gray-200 p-2 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M17.414 2.586a2 2 0 00-2.828 0l-1.836 1.836a1 1 0 01-1.414-1.414L13.172.586a4 4 0 115.656 5.656l-1.536 1.536a1 1 0 01-1.414-1.414l1.536-1.536z" />
                                        <path d="M11.707 6.293a1 1 0 00-1.414 0L4 12.586V16h3.414l6.293-6.293a1 1 0 000-1.414l-2.586-2.586z" />
                                        </svg>
                                    </Button>
                                    <Button className="bg-red-200 p-2 rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8 4a2 2 0 00-2 2v9a2 2 0 002 2h4a2 2 0 002-2V6a2 2 0 00-2-2H8zm-4 6a6 6 0 1112 0v4a2 2 0 01-2 2h-8a2 2 0 01-2-2v-4zm10 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4a4 4 0 018 0z" clipRule="evenodd" />
                                        </svg>
                                    </Button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
