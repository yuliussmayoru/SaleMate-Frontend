import React from "react";
import { Button, Pagination } from "@/src/features";
import Loader from "../../../base/Loader";
import { AddModal, EditModal, DeleteModal, ProductTable } from "./components";
import { useProductPageHooks } from "./hooks"
import { axiosInstance } from "@/src/api/axiosClient";
import NavigationBar from "./components/navigation";

export default function ProductPage() {
    const {
        product,
        currentPage,
        totalPages,
        totalItems,
        isAddModalOpen,
        isSecondModalOpen,
        isEditModalOpen,
        isDeleteModalOpen,
        formData,
        errors,
        selectedProduct,
        loading,
        setFormData,
        setCurrentPage,
        fetchProduct,
        handleModalOpen,
        handleModalClose,
        setIsSecondModalOpen,
        setIsAddModalOpen,
        handleInputChange,
        validateForm,
        } = useProductPageHooks();
    
    const fetchUserStoreId = async () => {
        try {
            const response = await axiosInstance.get('/user?page=1&limit=10');
            const userData = response.data.data[0];
            const storeId = userData?.store?.[0]?.store_id;
            return storeId;
        } catch (error) {
            console.error("Error fetching user data", error);
            return null;
        }
    };

    const handleConfirmAdd = async () => {
        if (!validateForm()) return;

        try {
            const storeId = await fetchUserStoreId(); // Fetch the store ID
            if (!storeId) {
                console.error("Store ID not found");
                return;
            }

            const { product_id, ...dataToSend } = formData;
            console.log("Sending data:", dataToSend);

            const response = await axiosInstance.post(`/products/product-category?storeId=${storeId}`, dataToSend);
            
            const newProductId = response.data.data.product_id;
            setFormData({
                ...formData,
                product_id: newProductId // Update formData with the new category ID
            });
            await fetchProduct();

            handleModalClose(); 
            setIsAddModalOpen(false); 
            setIsSecondModalOpen(true); 
        } catch (error) {
            console.error("Error adding product category", error);
        }
    };

    const handleConfirmEdit = async () => {
        try {
            const { product_id, ...dataToSend } = formData;
            if (selectedProduct) {
                await axiosInstance.patch(`/products/product-category?category_id=${selectedProduct.product_id}`, dataToSend);
                await fetchProduct(); 
                handleModalClose();
            }
        } catch (error) {
            console.error("Error editing product", error);
        }
    };

    const handleConfirmDelete = async () => {
        try {
            if (selectedProduct) {
                await axiosInstance.delete(`/products/product-category/${selectedProduct.product_id}`); 
                await fetchProduct();
                handleModalClose();
            }
        } catch (error) {
            console.error("Error deleting product category", error);
        }
    };
    
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        fetchProduct(page);
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
                        <Button className="bg-orange-2 h-full w-48 text-white rounded" onClick={() => handleModalOpen('add')}>+ Add Product</Button>
                    </div>

                    {/* Navigation Box */}
                    <NavigationBar
                        loading={loading}
                        totalItems={totalItems}
                    />

                    {/* Product Data Box */}
                    <div className="p-4 bg-white border border-gray-6 rounded-[10px] shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl text-gray-2 font-semibold">Product Data</h2>
                        
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
                        <ProductTable 
                            product={product}
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
                    selectedProduct={selectedProduct}
                    handleConfirmDelete={handleConfirmDelete}
                />
        </div>        
    );
}
