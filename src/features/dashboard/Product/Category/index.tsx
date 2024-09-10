import React, { useState, useEffect } from "react";
import { Button } from "@/src/features";
import Loader from "../../../base/Loader";
import { AddModal, EditModal, DeleteModal, ProductCategoryTable } from "./components";
import { useProductCategoryPageHooks } from "./hooks"

const ITEMS_PER_PAGE = 6    ;

export default function CategoryPage() {
    const {
        productCategory,
        currentPage,
        totalPages,
        isAddModalOpen,
        isSecondModalOpen,
        isEditModalOpen,
        isDeleteModalOpen,
        formData,
        errors,
        selectedProductCategory,
        loading,
        setFormData,
        setCurrentPage,
        fetchProductCategory,
        handleModalOpen,
        handleModalClose,
        setIsSecondModalOpen,
        setIsAddModalOpen,
        handleInputChange,
        validateForm,
        } = useProductCategoryPageHooks();
    
    const handleConfirmAdd = () => {
        setIsAddModalOpen(false);
        setIsSecondModalOpen(true);
    };

    const handleConfirmEdit = () => {
        // Edit staff logic here
        handleModalClose();
    };

    const handleConfirmDelete = () => {
        // Delete staff logic here
        handleModalClose();
    };
    
    // HANDLE PAGE AND GENERATE PAGE
    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full">
                <div className="flex justify-between items-center pt-20 mb-4 gap-6">
                    <div className="text-gray-2">
                        <h2 className="text-xl font-bold">Product /Product Category</h2>
                        <p className="text-sm">Check your store product category details. you can add, edit and update</p>
                            
                        </div>
                        <Button className="bg-orange-2 h-full w-48 text-white rounded" onClick={() => handleModalOpen('add')}>+ Add Category</Button>
                    </div>

                    {/* Navigation Box */}
                    <div className="p-6 border bg-white border-gray-6 rounded-[10px] shadow-md mb-6">
                        <h3 className="text-xl font-bold text-gray-2 mb-2">Navigation</h3>
                        <div className="grid grid-cols-3 gap-2 mb-6">
                            <div className="text-center">
                                <p className="text-sm font-bold text-gray-2">Total Store(s)</p>
                                <p className="text-3xl font-bold text-gray-2">1</p>
                                <p className="text-sm font-light text-gray-2">No latest update</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-bold text-gray-2">Total Store Id(s)</p>
                                <p className="text-3xl font-bold text-gray-2">1</p>
                                <p className="text-sm font-light text-gray-2">No latest update</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-bold text-gray-2">Total Category(s)</p>
                                <p className="text-3xl font-bold text-gray-2">30</p>
                                <p className="text-sm font-light text-gray-2">Latest Update: 16 Jul 24 by Adm - Christopher</p>
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-gray-2 mb-2">What are you looking for?</p>
                                    <input 
                                        type="text" 
                                        placeholder="Search for Store, Store Id, Category, etc" 
                                        className="border rounded p-2 w-full text-sm" 
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-2 mb-2">Store</p>
                                    <select className="border rounded p-2 w-full text-gray-2 text-sm" title="store">
                                        <option value=" all">All</option>
                                    </select>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-2 mb-2">Store Id</p>
                                    <select className="border rounded p-2 w-full text-gray-2 text-sm" title="store id">
                                        <option value="all">All</option>
                                    </select>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-2 mb-2">Category</p>
                                    <select className="border rounded p-2 w-full text-gray-2 text-sm" title="category">
                                        <option value="all">All</option>
                                    </select>
                                </div>
                                <button className="bg-[#a4be6a] text-white font-bold py-2 px-4 rounded text-sm mt-5">Search</button>
                            </div>
                        </div>
                    </div>

                    {/* Category Data Box */}
                    <div className="p-4 bg-white border border-gray-6 rounded-[10px] shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl text-gray-2 font-semibold">Category Data</h2>
                        
                        {/* PAGE */}
                        <div className="flex items-center gap-2">
                            <svg 
                                onClick={() => handlePageChange(currentPage - 1)}
                                className={`cursor-pointer stroke-gray-3 ${currentPage === 1 ? 'opacity-10 cursor-not-allowed' : ''}`}
                                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M15.75 19.5L8.25 12L15.75 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {pageNumbers.map((number) => (
                                <button
                                    key={number}
                                    onClick={() => handlePageChange(number)}
                                    className={`w-6 h-6 flex items-center justify-center rounded ${number === currentPage ? 'bg-orange-2 text-white' : 'bg-gray-6 hover:bg-gray-5'}`}
                                >
                                    {number}
                                </button>
                            ))}
                            <svg 
                                onClick={() => handlePageChange(currentPage + 1)}
                                className={`cursor-pointer stroke-gray-3 ${currentPage === totalPages ? 'opacity-10 cursor-not-allowed' : ''}`}
                                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>   
                    </div>

                    {loading ? (
                        <Loader />
                    ) : (

                    <div>
                        <ProductCategoryTable 
                            productCategories={productCategory}
                            handleModalOpen={handleModalOpen}
                        />
                    </div>

                    )}
                
                </div>
            </div>

            {/* FILL STAFF DATA POP UP */}
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
                    formData={formData}
                    setFormData={setFormData}
                    handleInputChange={handleInputChange}
                />
            
            {/* DELETE */}
            <DeleteModal
                    isDeleteModalOpen={isDeleteModalOpen}
                    handleModalClose={handleModalClose}
                    selectedProductCategory={selectedProductCategory}
                    handleConfirmDelete={handleConfirmDelete}
                />
        </div>        
    );
}
