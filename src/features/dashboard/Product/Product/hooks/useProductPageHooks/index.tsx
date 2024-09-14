import { useEffect, useState } from 'react';
import { axiosInstance } from '@/src/api/axiosClient';
import { Product } from '@/src/assets';

export const useProductPageHooks = () => {
    const [product, setProduct] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(1);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        product_id: 0,
        product_name: '',
    });
    const [errors, setErrors] = useState({
        product_name: '',
    });
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchProduct = async (page = 1) => {
        try {
            const response = await axiosInstance.get(`/products/pages`, {
                params: { page, limit: 6 },
            });

            const { data: product, meta } = response.data;
            
            setProduct(product);
            setTotalPages(parseInt(meta['Total Pages']));
            setCurrentPage(parseInt(meta['Current Page']));
            setTotalItems(parseInt(meta['Total Items']));
        } catch (error) {
            console.error('Error fetching taxes', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProduct(currentPage);
    }, [currentPage]);

    const handleModalOpen = (type: any, product?: Product) => {
        if(type === 'add') {
            setFormData({ product_id: 0, product_name: '', });
            setIsAddModalOpen(true);
        } else if (type === 'edit' && product) {
            setSelectedProduct(product);
            setFormData({
                product_id: product.product_id,
                product_name: product.product_name,
            });
        setIsEditModalOpen(true);
        } else if (type === 'delete' && product) {
            setSelectedProduct(product);
            setIsDeleteModalOpen(true);
        }
    };

    const handleModalClose = () => {
        setIsAddModalOpen(false);
        setIsSecondModalOpen(false);
        setIsEditModalOpen(false);
        setIsDeleteModalOpen(false);
        setSelectedProduct(null);
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
            product_name: ''
        };

        if (!formData.product_name) {
            newErrors.product_name = 'Product name is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid; 
    };

    return {
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
    };
};