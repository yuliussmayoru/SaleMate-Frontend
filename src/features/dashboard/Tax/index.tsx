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

  const ITEMS_PER_PAGE = 10;

  const [taxes, setTaxes] = useState<Tax[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchTaxes = async () => {
      try {
        const response = await axios.get('/api/taxes'); //Masih sementara, menunggu route yang di sediakan oleh BE
        const taxData = response.data;
        setTotalPages(Math.ceil(taxData.length / ITEMS_PER_PAGE));
        setTaxes(taxData.slice(0, ITEMS_PER_PAGE)); // Ensure only 10 entries are used
      } catch (error) {
        console.error('Error fetching taxes', error);
      }
    };

    fetchTaxes();
  }, []);

  useEffect(() => {
    const fetchPageTaxes = async () => {
      try {
        const response = await axios.get('/api/taxes'); //Masih sementara, menunggu route yang di sediakan oleh BE
        const taxData = response.data;
        const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIdx = startIdx + ITEMS_PER_PAGE;
        setTaxes(taxData.slice(startIdx, endIdx)); // Ensure the correct slice is fetched
      } catch (error) {
        console.error('Error fetching taxes', error);
      }
    };

    fetchPageTaxes();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Generate page numbers for pagination
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        <div className="flex justify-between items-center pt-20 mb-4 gap-6">
          <div className="mr-10">
            <h1 className="text-xl font-bold">Tax</h1>
            <p className="text-sm">Check your store taxes, you can add, edit and delete</p>
          </div>
          <Button className="bg-orange-500 h-full w-48 text-white rounded">+ Add Tax</Button>
        </div>
        <div className="p-4 bg-white rounded shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-gray-2 font-semibold">Tax Data</h2>
            <div className="flex items-center gap-2">
              <svg 
                onClick={() => handlePageChange(currentPage - 1)}
                className={`cursor-pointer stroke-gray-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.75 19.5L8.25 12L15.75 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={`w-8 h-8 flex items-center justify-center rounded ${number === currentPage ? 'bg-gray-5 text-white' : 'bg-gray-200'}`}
                >
                  {number}
                </button>
              ))}
              <svg 
                onClick={() => handlePageChange(currentPage + 1)}
                className={`cursor-pointer stroke-gray-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div>
            <table className="min-w-full table-fixed text-center">
              <thead className="text-gray-4">
                <tr>
                  <th className="">Store Id</th>
                  <th className="">Title</th>
                  <th className="">Value (%)</th>
                  <th className="">Status</th>
                  <th className="">Include in Price</th>
                  <th className="">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-1">
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
}
