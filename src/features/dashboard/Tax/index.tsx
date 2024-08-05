import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, CancelButton, DeleteButton } from "@/features/base";
import { Tax, dummyTax } from "@/assets/dummyTax";
import { Modal } from "@/features/base/Modal";
import ToggleSwitch from "@/features/base/toggleSwitch";

const ITEMS_PER_PAGE = 10;

export default function TaxPage() {
    const [taxes, setTaxes] = useState<Tax[]>(dummyTax);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        type: '',
        title: '',
        value: 0,
        status: true,
        includeInPrice: true,
    });
    const [selectedTax, setSelectedTax] = useState<Tax | null>(null);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

    useEffect(() => {
        const fetchTaxes = async () => {
            try {
                const response = await axios.get('/api/taxes'); // Replace with your actual endpoint
                const taxData = response.data;
                setTotalPages(Math.ceil(taxData.length / ITEMS_PER_PAGE));
                setTaxes(taxData.slice(0, ITEMS_PER_PAGE)); // Ensure only 10 entries are used
            } catch (error) {
                console.error('Error fetching taxes', error);
                setTotalPages(Math.ceil(dummyTax.length / ITEMS_PER_PAGE));
                setTaxes(dummyTax.slice(0, ITEMS_PER_PAGE));
            }
        };

        fetchTaxes();
    }, []);

    useEffect(() => {
        const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIdx = startIdx + ITEMS_PER_PAGE;
        setTaxes(dummyTax.slice(startIdx, endIdx)); // Update to fetch the correct slice from your actual data source
    }, [currentPage]);

    // Handle Pop Up Tax
    const handleModalOpen = (type: string, tax?: Tax) => {
        if(type === 'add') {
            setIsAddModalOpen(true);
        } else if (type === 'edit' && tax) {
            setSelectedTax(tax); 
                setFormData({
                    id: tax.tax_id,
                    title: tax.tax_name,
                    type: tax.tax_type,
                    value: tax.tax_value,
                    status: tax.tax_status,
                    includeInPrice: tax.tax_includeInPrice,
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
            [name]: value
        }));
    };

    const handleConfirmAdd = () => {
        setIsAddModalOpen(false);
        setIsSecondModalOpen(true);
    };

    const handleConfirmEdit = () => {
        // Edit staff logic here
        handleModalClose();
    };

    const handleConfirmDelete = () => {
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
                        <h2 className="text-xl font-bold">Tax</h2>
                        <p className="text-sm">Check your store taxes, you can add, edit and update</p>
                    </div>
                    <Button className="bg-orange-2 h-full w-48 text-white rounded" onClick={() => handleModalOpen('add')}>+ Add Tax</Button>
                </div>
                <div className="p-4 bg-white border border-gray-6 rounded-[10px] shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl text-gray-2 font-semibold">Tax Data</h2>
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
                        <div>
                            <table className="min-w-full table-fixed text-center">
                                <thead className=" text-gray-4">
                                    <tr>
                                        <th className="">Store Id</th>
                                        <th className="">Title</th>
                                        <th className="">Type</th>
                                        <th className="">Value ( % )</th>
                                        <th className="">Status</th>
                                        <th className="">Include in Price</th>
                                        <th className="w-10">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-1">
                                    {taxes.map((tax) => (
                                        <tr key={tax.tax_id} className="even:bg-gray-6">
                                            <td className="">{tax.tax_id}</td>
                                            <td className="">{tax.tax_name}</td>
                                            <td className="">{tax.tax_type}</td>
                                            <td className="">{tax.tax_value}%</td>
                                            <td className="">
                                                {/* <svg width="68" height="23" viewBox="0 0 68 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect y="0.919983" width="68" height="21.16" rx="5" fill="#97CB85"/>
                                                    <path d="M34.4538 11.1818C34.4538 12.4091 34.2322 13.4697 33.7891 14.3636C33.3459 15.2576 32.7379 15.947 31.9652 16.4318C31.1925 16.9167 30.3099 17.1591 29.3175 17.1591C28.325 17.1591 27.4425 16.9167 26.6697 16.4318C25.897 15.947 25.2891 15.2576 24.8459 14.3636C24.4027 13.4697 24.1811 12.4091 24.1811 11.1818C24.1811 9.95455 24.4027 8.89394 24.8459 8C25.2891 7.10606 25.897 6.41667 26.6697 5.93182C27.4425 5.44697 28.325 5.20455 29.3175 5.20455C30.3099 5.20455 31.1925 5.44697 31.9652 5.93182C32.7379 6.41667 33.3459 7.10606 33.7891 8C34.2322 8.89394 34.4538 9.95455 34.4538 11.1818ZM33.0902 11.1818C33.0902 10.1742 32.9216 9.32386 32.5845 8.63068C32.2512 7.9375 31.7985 7.41288 31.2266 7.05682C30.6584 6.70076 30.022 6.52273 29.3175 6.52273C28.6129 6.52273 27.9747 6.70076 27.4027 7.05682C26.8345 7.41288 26.3819 7.9375 26.0447 8.63068C25.7114 9.32386 25.5447 10.1742 25.5447 11.1818C25.5447 12.1894 25.7114 13.0398 26.0447 13.733C26.3819 14.4261 26.8345 14.9508 27.4027 15.3068C27.9747 15.6629 28.6129 15.8409 29.3175 15.8409C30.022 15.8409 30.6584 15.6629 31.2266 15.3068C31.7985 14.9508 32.2512 14.4261 32.5845 13.733C32.9216 13.0398 33.0902 12.1894 33.0902 11.1818ZM37.9822 11.75V17H36.6413V8.27273H37.9368V9.63636H38.0504C38.255 9.19318 38.5656 8.83712 38.9822 8.56818C39.3989 8.29545 39.9368 8.15909 40.5959 8.15909C41.1868 8.15909 41.7038 8.2803 42.147 8.52273C42.5902 8.76136 42.9349 9.125 43.1811 9.61364C43.4273 10.0985 43.5504 10.7121 43.5504 11.4545V17H42.2095V11.5455C42.2095 10.8598 42.0315 10.3258 41.6754 9.94318C41.3194 9.55682 40.8307 9.36364 40.2095 9.36364C39.7815 9.36364 39.3989 9.45644 39.0618 9.64205C38.7285 9.82765 38.4652 10.0985 38.272 10.4545C38.0788 10.8106 37.9822 11.2424 37.9822 11.75Z" fill="#3A8C1D"/>
                                                </svg> */}

                                                <span className={`px-8 py-1 rounded-lg text-white ${tax.tax_status ? 'bg-green-400' : 'bg-red-400'}`}>
                                                    {tax.tax_status ? 'On' : 'Off'}
                                                </span>
                                            </td>
                                            <td className="py-2">
                                                {/* <svg width="68" height="23" viewBox="0 0 68 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect y="0.919983" width="68" height="21.16" rx="5" fill="#97CB85"/>
                                                    <path d="M20.87 5.36364H22.4837L25.7109 10.7955H25.8473L29.0746 5.36364H30.6882L26.4837 12.2045V17H25.0746V12.2045L20.87 5.36364ZM34.7536 17.1818C33.9126 17.1818 33.1873 16.9962 32.5774 16.625C31.9714 16.25 31.5036 15.7273 31.174 15.0568C30.8482 14.3826 30.6854 13.5985 30.6854 12.7045C30.6854 11.8106 30.8482 11.0227 31.174 10.3409C31.5036 9.6553 31.9619 9.12121 32.549 8.73864C33.1399 8.35227 33.8293 8.15909 34.6172 8.15909C35.0717 8.15909 35.5206 8.23485 35.9638 8.38636C36.407 8.53788 36.8104 8.78409 37.174 9.125C37.5376 9.46212 37.8274 9.90909 38.0433 10.4659C38.2592 11.0227 38.3672 11.7083 38.3672 12.5227V13.0909H31.6399V11.9318H37.0036C37.0036 11.4394 36.9051 11 36.7081 10.6136C36.5149 10.2273 36.2384 9.92235 35.8786 9.69886C35.5225 9.47538 35.102 9.36364 34.6172 9.36364C34.0831 9.36364 33.621 9.49621 33.2308 9.76136C32.8445 10.0227 32.5471 10.3636 32.3388 10.7841C32.1304 11.2045 32.0263 11.6553 32.0263 12.1364V12.9091C32.0263 13.5682 32.1399 14.1269 32.3672 14.5852C32.5982 15.0398 32.9183 15.3864 33.3274 15.625C33.7365 15.8598 34.2119 15.9773 34.7536 15.9773C35.1058 15.9773 35.424 15.928 35.7081 15.8295C35.996 15.7273 36.2441 15.5758 36.4524 15.375C36.6607 15.1705 36.8217 14.9167 36.9354 14.6136L38.2308 14.9773C38.0945 15.4167 37.8653 15.803 37.5433 16.1364C37.2214 16.4659 36.8236 16.7235 36.3501 16.9091C35.8767 17.0909 35.3445 17.1818 34.7536 17.1818ZM46.5888 10.2273L45.3842 10.5682C45.3085 10.3674 45.1967 10.1723 45.049 9.98295C44.9051 9.78977 44.7081 9.63068 44.4581 9.50568C44.2081 9.38068 43.888 9.31818 43.4979 9.31818C42.9638 9.31818 42.5187 9.44129 42.1626 9.6875C41.8104 9.92992 41.6342 10.2386 41.6342 10.6136C41.6342 10.947 41.7554 11.2102 41.9979 11.4034C42.2403 11.5966 42.6191 11.7576 43.1342 11.8864L44.4297 12.2045C45.21 12.3939 45.7914 12.6837 46.174 13.0739C46.5566 13.4602 46.7479 13.9583 46.7479 14.5682C46.7479 15.0682 46.6039 15.5152 46.3161 15.9091C46.032 16.303 45.6342 16.6136 45.1229 16.8409C44.6115 17.0682 44.0168 17.1818 43.3388 17.1818C42.4486 17.1818 41.7119 16.9886 41.1286 16.6023C40.5452 16.2159 40.1759 15.6515 40.0206 14.9091L41.2933 14.5909C41.4145 15.0606 41.6437 15.4129 41.9808 15.6477C42.3217 15.8826 42.7668 16 43.3161 16C43.9411 16 44.4373 15.8674 44.8047 15.6023C45.1759 15.3333 45.3615 15.0114 45.3615 14.6364C45.3615 14.3333 45.2554 14.0795 45.0433 13.875C44.8312 13.6667 44.5054 13.5114 44.0661 13.4091L42.6115 13.0682C41.8123 12.8788 41.2251 12.5852 40.8501 12.1875C40.4789 11.786 40.2933 11.2841 40.2933 10.6818C40.2933 10.1894 40.4316 9.75379 40.7081 9.375C40.9884 8.99621 41.3691 8.69886 41.8501 8.48295C42.335 8.26705 42.8842 8.15909 43.4979 8.15909C44.3615 8.15909 45.0395 8.34848 45.532 8.72727C46.0282 9.10606 46.3804 9.60606 46.5888 10.2273Z" fill="#3A8C1D"/>
                                                </svg> */}

                                                <span className={`px-8 py-1 rounded-lg text-white ${tax.tax_includeInPrice ? 'bg-green-400' : 'bg-red-400'}`}>
                                                    {tax.tax_includeInPrice ? 'Yes' : 'No'}
                                                </span>
                                            </td>
                                            <td className="py-2 flex space-x-2">
                                                <button className="w-10 bg-gray-200 p-1 rounded hover:bg-gray-300 flex justify-center" title="edit" onClick={() => handleModalOpen('edit',tax)}>
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.3491 3.55222L14.6846 2.21589C14.963 1.93748 15.3406 1.78107 15.7344 1.78107C16.1281 1.78107 16.5057 1.93748 16.7841 2.21589C17.0625 2.4943 17.2189 2.87191 17.2189 3.26564C17.2189 3.65937 17.0625 4.03698 16.7841 4.31539L8.37742 12.7221C7.95888 13.1404 7.44275 13.4478 6.87563 13.6167L4.75 14.25L5.38333 12.1244C5.55218 11.5573 5.85963 11.0411 6.27792 10.6226L13.3491 3.55222ZM13.3491 3.55222L15.4375 5.64064M14.25 11.0833V14.8438C14.25 15.3162 14.0623 15.7692 13.7283 16.1033C13.3942 16.4373 12.9412 16.625 12.4688 16.625H4.15625C3.68383 16.625 3.23077 16.4373 2.89672 16.1033C2.56267 15.7692 2.375 15.3162 2.375 14.8438V6.53126C2.375 6.05885 2.56267 5.60578 2.89672 5.27173C3.23077 4.93768 3.68383 4.75001 4.15625 4.75001H7.91667" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </button>
                                                <button className="w-10 bg-red-200 p-1 rounded hover:bg-red-300 flex justify-center" title="delete" onClick={() => handleModalOpen('delete', tax)}>
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.6692 7.12499L11.3953 14.25M7.60475 14.25L7.33083 7.12499M15.2222 4.58374C15.4929 4.6249 15.7621 4.66844 16.0313 4.71515M15.2222 4.58374L14.3767 15.5744C14.3422 16.0219 14.14 16.4399 13.8106 16.7447C13.4813 17.0496 13.049 17.2189 12.6002 17.2187H6.39983C5.95103 17.2189 5.51873 17.0496 5.18936 16.7447C4.85999 16.4399 4.65784 16.0219 4.62333 15.5744L3.77783 4.58374M15.2222 4.58374C14.3085 4.4456 13.3901 4.34077 12.4688 4.26944M3.77783 4.58374C3.50708 4.62411 3.23792 4.66765 2.96875 4.71436M3.77783 4.58374C4.69152 4.4456 5.60994 4.34077 6.53125 4.26944M12.4688 4.26944V3.54428C12.4688 2.61011 11.7483 1.83111 10.8142 1.80182C9.93828 1.77382 9.06172 1.77382 8.18583 1.80182C7.25167 1.83111 6.53125 2.6109 6.53125 3.54428V4.26944M12.4688 4.26944C10.4925 4.11671 8.50747 4.11671 6.53125 4.26944" stroke="#F04B4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                    </div>
                </div>

                {/* FILL TAX DATA POP UP */}
                <Modal isOpen={isAddModalOpen} onClose={handleModalClose} onConfirm={handleConfirmAdd}>
                    <div className="w-full flex flex-col items-center pb-10">
                        <h2 className="text-2xl font-bold text-orange-2">Add Tax</h2>
                        <span className="text-sm text-gray-3">Input all necesary data</span>
                    </div>
                    <form className="w-full text-center mb-6">
                        <label>Title</label>
                        <input
                            type="text"
                            name="tax_name"
                            placeholder="Enter title name"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 mb-4 drop-shadow-md w-full rounded-[10px]"
                        />
                        <label>Type</label>
                        <input
                            type="text"
                            name="tax_type"
                            placeholder="Enter tax type"
                            value={formData.type}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 mb-4 drop-shadow-md w-full rounded-[10px]"
                        />
                        <label>Tax Value (%)</label>
                        <input
                            type="number"
                            name="tax_value"
                            placeholder="Enter tax value"
                            value={formData.value}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 mb-4 drop-shadow-md w-full rounded-[10px]"
                        />
                        <div className="flex space-x-16">
                            <ToggleSwitch
                                checked={formData.status}
                                onChange={() => setFormData({ ...formData, status: !formData.status })}
                                label="Status"

                            />
                            <ToggleSwitch
                                checked={formData.includeInPrice}
                                onChange={() => setFormData({ ...formData, includeInPrice: !formData.includeInPrice })}
                                label="Include in Price"
                            />
                        </div>
                    </form>
                    <div className="flex justify-between w-full mt-4 gap-2">
                        <CancelButton
                            onClick={handleModalClose}
                        >
                            Cancel
                        </CancelButton>
                        <Button
                            onClick={handleConfirmAdd}
                        >
                            Ok
                        </Button>
                    </div>
                </Modal>
                <Modal isOpen={isSecondModalOpen} onClose={handleModalClose} onConfirm={handleModalClose}>
                        <div className="w-full flex flex-col items-center pb-10">
                            <div className="text-green-2 flex row gap-2 justify-center items-center">
                                <svg width="24" height="24" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path 
                                        d="M10.3333 15.5417L13.4583 18.6667L18.6667 11.375M27 14.5C27 16.1415 26.6767 17.767 26.0485 19.2835C25.4203 20.8001 24.4996 22.1781 23.3388 23.3388C22.1781 24.4996 20.8001 25.4203 19.2835 26.0485C17.767 26.6767 16.1415 27 14.5 27C12.8585 27 11.233 26.6767 9.71646 26.0485C8.19989 25.4203 6.8219 24.4996 5.66116 23.3388C4.50043 22.1781 3.57969 20.8001 2.95151 19.2835C2.32332 17.767 2 16.1415 2 14.5C2 11.1848 3.31696 8.00537 5.66116 5.66117C8.00537 3.31696 11.1848 2 14.5 2C17.8152 2 20.9946 3.31696 23.3388 5.66117C25.683 8.00537 27 11.1848 27 14.5Z" 
                                        stroke="currentColor" 
                                        strokeWidth="4" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"/>
                                </svg>
                                <h2 className="text-2xl font-bold">Tax Added</h2>
                            </div>
                            <span className="text-sm text-gray-3">You can update or delete this data later</span>
                        </div>
                        <div className="text-gray-1 w-full flex flex-col mb-6 gap-6">
                            <div className="flex flex-row gap-4 justify-start">
                                <h2 className="w-1/4 font-bold text-gray-3">Tax Id</h2>
                                <span>:</span>
                                {/* CHANGE INTO TAX ID LATER */}
                                <p>{formData.id}</p> 
                            </div>

                            <div className="flex flex-row gap-4 justify-start">
                                <h2 className="w-1/4 font-bold text-gray-3">Title</h2>
                                <span>:</span>
                                <p>{formData.title}</p> 
                            </div>
                            <div className="flex flex-row gap-4 justify-start">
                                <h2 className="w-1/4 font-bold text-gray-3">Type</h2>
                                <span>:</span>
                                <p>{formData.type}</p> 
                            </div>
                            <div className="flex flex-row gap-4 justify-start">
                                <h2 className="w-1/4 font-bold text-gray-3">Value</h2>
                                <span>:</span>
                                <p>{formData.value}</p> 
                            </div>
                            <div className="flex flex-row gap-4 justify-start">
                                <h2 className="w-1/4 font-bold text-gray-3">Status</h2>
                                <span>:</span>
                                <p>{formData.status}</p> 
                            </div>
                            <div className="flex flex-row gap-4 justify-start">
                                <h2 className="w-1/4 font-bold text-gray-3">Include in Price</h2>
                                <span>:</span>
                                <p>{formData.includeInPrice}</p> 
                            </div>
                        </div>
                        <Button
                            onClick={handleModalClose}
                        >
                            Ok
                        </Button>
                </Modal>

                {/* EDIT */}
                <Modal isOpen={isEditModalOpen} onClose={handleModalClose} onConfirm={handleModalClose}>
                        <div className="w-full flex flex-col items-center pb-10">
                            <h2 className="text-2xl font-bold text-orange-2">Edit Tax</h2>
                            <span className="text-sm text-gray-3">Edit necesary data</span>
                        </div>
                        <form className="w-full text-center mb-6">
                        <label>Title</label>
                        <input
                            type="text"
                            name="tax_name"
                            placeholder="Enter title name"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 mb-4 drop-shadow-md w-full rounded-[10px]"
                        />
                        <label>Type</label>
                        <input
                            type="text"
                            name="tax_type"
                            placeholder="Enter tax type"
                            value={formData.type}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 mb-4 drop-shadow-md w-full rounded-[10px]"
                        />
                        <label>Tax Value (%)</label>
                        <input
                            type="number"
                            name="tax_value"
                            placeholder="Enter tax value"
                            value={formData.value}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 mb-4 drop-shadow-md w-full rounded-[10px]"
                        />
                        <div className="flex space-x-16">
                            <ToggleSwitch
                                checked={formData.status}
                                onChange={() => setFormData({ ...formData, status: !formData.status })}
                                label="Status"

                            />
                            <ToggleSwitch
                                checked={formData.includeInPrice}
                                onChange={() => setFormData({ ...formData, includeInPrice: !formData.includeInPrice })}
                                label="Include in Price"
                            />
                        </div>
                    </form>
                    <div className="flex justify-between w-full mt-4 gap-2">
                        <Button
                            onClick={handleConfirmEdit}
                        >
                            Ok
                        </Button>
                    </div>
                </Modal>

                {/* DELETE */}
                <Modal isOpen={isDeleteModalOpen} onClose={handleModalClose} onConfirm={handleModalClose}>
                        <div className="w-full flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-orange-2">Confirm Delete</h2>
                            <span className="text-gray-2">Are you sure you want to delete</span>
                        </div>
                        <h2 className="p-6 text-2xl text-bold text-gray-1">{selectedTax?.tax_name}</h2>
                        <div className="flex justify-between w-full mt-4 gap-2">
                            <CancelButton 
                                onClick={handleModalClose}
                            >
                                Cancel
                            </CancelButton>
                            <DeleteButton
                                onClick={handleConfirmDelete}
                            >
                                Delete
                            </DeleteButton>
                        </div>
                </Modal>
            </div>
        </div>
    );
}
