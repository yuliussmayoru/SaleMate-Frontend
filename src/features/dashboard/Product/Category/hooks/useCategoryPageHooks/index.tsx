import { useEffect, useState } from 'react';
import { axiosInstance } from '@/src/api/axiosClient';
import { ProductCategory } from '@/src/assets';

export const useProductCategoryPageHooks = () => {
    const [productCategory, setProductCategory] = useState<ProductCategory[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        product_category_id: 0,
        category_name: '',
    });
    const [errors, setErrors] = useState({
        category_name: '',
    });
    const [selectedProductCategory, setSelectedProductCategory] = useState<ProductCategory | null>(null);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchProductCategory = async (page = 1) => {
        try {
            const response = await axiosInstance.get(`/products/product-category`, {
                params: { page, limit: 6 },
            });

            const { data: productCategory, meta } = response.data;
            
            setProductCategory(productCategory);
            setTotalPages(parseInt(meta['Total Pages']));
            setCurrentPage(parseInt(meta['Current Page']))
        } catch (error) {
            console.error('Error fetching taxes', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductCategory(currentPage);
    }, [currentPage]);

    const handleModalOpen = (type: any, productCategory?: ProductCategory) => {
        if(type === 'add') {
            setFormData({ product_category_id: 0, category_name: '', });
            setIsAddModalOpen(true);
        } else if (type === 'edit' && productCategory) {
            setSelectedProductCategory(productCategory);
            setFormData({
                product_category_id: productCategory.product_category_id,
                category_name: productCategory.category_name,
            });
        setIsEditModalOpen(true);
        } else if (type === 'delete' && productCategory) {
            setSelectedProductCategory(productCategory);
            setIsDeleteModalOpen(true);
        }
    };

    const handleModalClose = () => {
        setIsAddModalOpen(false);
        setIsSecondModalOpen(false);
        setIsEditModalOpen(false);
        setIsDeleteModalOpen(false);
        setSelectedProductCategory(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            category_name: ''
        };

        if (!formData.category_name) {
            newErrors.category_name = 'Category name is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid; 
    };

    return {
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
    };
};