import React, { useState, useEffect } from "react";
import { axiosInstance } from "@/src/api/axiosClient";
import { Button } from "@/src/features";
import { Tax } from "@/src/assets";
import Loader from "../../base/Loader";
import { AddModal, EditModal, Pagination, TaxTable } from "./components";
import DeleteModal from "./components/modal/deleteModal";

const ITEMS_PER_PAGE = 10;

export default function TaxPage() {
    const [taxes, setTaxes] = useState<Tax[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        tax_id: 0,
        tax_type: '',
        tax_name: '',
        tax_value: 0,
        tax_status: true,
    });
    const [errors, setErrors] = useState({
        tax_type: '',
        tax_name: '',
        tax_value: '',
    });
    const [selectedTax, setSelectedTax] = useState<Tax | null>(null);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
    const [loading, setLoading] = useState(true); 

    const fetchTaxes = async () => {
        try {
            const response = await axiosInstance.get(`/tax`, {
                params: {
                    page: currentPage,
                    limit: ITEMS_PER_PAGE,
                },
            });
            const taxData = response.data.data.data;
            setTotalPages(response.data.totalPages);            
            setTaxes(taxData);  
        } catch (error) {
            console.error('Error fetching taxes', error);
        } finally {
            setLoading(false);
            console.log("Loading finished");
        }
    };

    useEffect(() => {
        fetchTaxes();
    }, [currentPage]);


    // Handle Pop Up Tax
    const handleModalOpen = (type: any, tax: Tax) => {
        if(type === 'add') {
            setFormData({ tax_id: 0, tax_name: '', tax_type: '', tax_value: 0, tax_status: true });
            setIsAddModalOpen(true);
        } else if (type === 'edit' && tax) {
            setSelectedTax(tax); 
            setFormData({
                tax_id: tax.tax_id,
                tax_type: tax.tax_type,
                tax_name: tax.tax_name,
                tax_value: tax.tax_value,
                tax_status: tax.tax_status,
            });
            setIsEditModalOpen(true);
        } else if (type === 'delete' && tax) {
            setSelectedTax(tax);
            setIsDeleteModalOpen(true);
        }
    };

    const handleModalClose = () => {
        setIsAddModalOpen(false);
        setIsSecondModalOpen(false);
        setIsEditModalOpen(false);
        setIsDeleteModalOpen(false);
        setSelectedTax(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'tax_value' ? Number(value) : value,
        }));
    };

    const refreshTaxes = async () => {
        try {
            const response = await axiosInstance.get('/tax', {
                params: {
                    page: currentPage,
                    limit: ITEMS_PER_PAGE,
                },
            });
            const taxData = response.data.data.data;
            setTaxes(taxData);
            setTotalPages(response.data.data.meta['Total Pages']);
        } catch (error) {
            console.error('Error refreshing taxes', error);
        }
    };

    const handleConfirmAdd = async () => {
        if (!validateForm()) return;

        try {
            const { tax_id, ...dataToSend } = formData;
            console.log('Sending data:', dataToSend);
            await axiosInstance.post(`/tax`, dataToSend);
            await refreshTaxes();
            handleModalClose();
            setIsAddModalOpen(false);
            setIsSecondModalOpen(true);
        } catch (error) {
            console.error('Error adding tax', error);
        }
    };

    // PATCH /tax/{tax_id} - Memperbarui data pajak
    const handleConfirmEdit = async () => {
        if (!validateForm()) return;

        try {
            const { tax_id, ...dataToSend } = formData;
            if (selectedTax) {
                await axiosInstance.patch(`/tax/${selectedTax.tax_id}`, dataToSend);
                await refreshTaxes();
                handleModalClose();
                // fetchTaxes();
            };
        } catch (error) {
            console.error('Error updating tax', error);
        }
    };

    // DELETE /tax/{tax_id} - Menghapus data pajak
    const handleConfirmDelete = async () => {
        try {
            if (selectedTax) {
                await axiosInstance.delete(`/tax/${selectedTax.tax_id}`);
                await refreshTaxes();
                handleModalClose();
                // fetchTaxes(); 
            }
        } catch (error) {
            console.error('Error deleting tax', error);
        }
    };

    // HANDLE PAGE AND GENERATE PAGE
    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            tax_type: '',
            tax_name: '',
            tax_value: '',
            // tax_status: '',
        };
    
        if (!formData.tax_type) {
            newErrors.tax_type = 'Type is required';
            isValid = false;
        }
        if (!formData.tax_name) {
            newErrors.tax_name = 'Name is required';
            isValid = false;
        }
        if (!formData.tax_value) {
            newErrors.tax_value = 'Value is required';
            isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
    };

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full">
                <div className="flex justify-between items-center pt-20 mb-4 gap-6">
                    <div className="text-gray-2">
                        <h2 className="text-xl font-bold">Tax and Service</h2>
                        <p className="text-sm">Check your store taxes, you can add, edit and update</p>
                    </div>
                    <Button className="bg-orange-2 h-full w-48 text-white rounded" onClick={() => handleModalOpen('add', taxes[0])}>+ Add Tax</Button>
                </div>
                <div className="p-4 bg-white border border-gray-6 rounded-[10px] shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl text-gray-2 font-semibold">Tax and Service Data</h2>
                        {/* PAGE */}
                        <Pagination 
                            currentPage={currentPage} 
                            totalPages={totalPages} 
                            handlePageChange={handlePageChange}
                        />
                    </div>

                    {loading ? (
                        <Loader />
                    ) : (

                    <div>
                        <TaxTable 
                            taxes={taxes}
                            handleModalOpen={handleModalOpen}
                        />
                    </div>

                    )}
                </div>

                {/* FILL TAX DATA POP UP */}
                <AddModal
                    isAddModalOpen={isAddModalOpen}
                    handleModalClose={handleModalClose}
                    handleConfirmAdd={handleConfirmAdd}
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    handleInputChange={handleInputChange}
                    isSecondModalOpen={isSecondModalOpen} 
                />

                {/* EDIT */}
                <EditModal
                    isEditModalOpen={isEditModalOpen}
                    handleModalClose={handleModalClose}
                    handleConfirmEdit={handleConfirmEdit}
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    handleInputChange={handleInputChange}
                />

                {/* DELETE */}
                <DeleteModal
                    isDeleteModalOpen={isDeleteModalOpen}
                    handleModalClose={handleModalClose}
                    selectedTax={selectedTax}
                    handleConfirmDelete={handleConfirmDelete}
                />
            </div>
        </div>
    );
};