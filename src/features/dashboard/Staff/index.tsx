import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/features/base";
import { Staff, dummyStaffs } from '@/assets'
import { Modal } from "@/features/base/Modal";

const ITEMS_PER_PAGE = 10;

export default function StaffPage() {
    const [staffs, setStaffs] = useState<Staff[]>(dummyStaffs);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

    // HANDLE GET DATA FROM API (IF NOT GETTING ANY DATA, GET FROM DUMMY DATA)
    useEffect(() => {
        const fetchStaffs = async () => {
            try {
                const response = await axios.get('/api/staffs'); // Replace with your actual endpoint
                const staffData = response.data;
                setTotalPages(Math.ceil(staffData.length / ITEMS_PER_PAGE));
                setStaffs(staffData.slice(0, ITEMS_PER_PAGE)); // Ensure only 10 entries are used
            } catch (error) {
                console.error('Error fetching staffs', error);
                setTotalPages(Math.ceil(dummyStaffs.length / ITEMS_PER_PAGE));
                setStaffs(dummyStaffs.slice(0, ITEMS_PER_PAGE));
            }
        };

        fetchStaffs();
    }, []);

    useEffect(() => {
        const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIdx = startIdx + ITEMS_PER_PAGE;
        setStaffs(dummyStaffs.slice(startIdx, endIdx)); // Update to fetch the correct slice from your actual data source
    }, [currentPage]);

    
    // HANDLE POP UP ADD DATA
    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    
    const handleModalClose = () => {
        setIsModalOpen(false);
        setIsSecondModalOpen(false);
    };
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    const handleConfirm = () => {
        setIsModalOpen(false);
        setIsSecondModalOpen(true);
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
                        <h2 className="text-xl font-bold">Staff</h2>
                        <p className="text-sm">Check your store staff details, you can add, edit and delete</p>
                    </div>
                    <Button className="bg-orange-2 h-full w-48 text-white rounded" onClick={handleModalOpen}>+ Add Staff</Button>
                </div>
                <div className="p-4 bg-white border border-gray-6 rounded-[10px] shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl text-gray-2 font-semibold">Staff Data</h2>
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
                                    <th className="">Staff Id</th>
                                    <th className="w-2/6">Full Name</th>
                                    <th className="w-1/6">Username</th>
                                    <th className="">Role</th>
                                    <th className="w-10">Action</th>
                                </tr>
                            </thead>
                            <tbody className=" text-gray-1">
                                {staffs.map((staff) => (
                                    <tr key={staff.staff_id} className="even:bg-gray-6">
                                        <td className="">{staff.staff_id}</td>
                                        <td className="">{staff.staff_name}</td>
                                        <td className="">{staff.staff_email}</td>
                                        <td className="">{staff.role}</td>
                                        <td className="py-4 px-4 flex justify-center items-center gap-1">
                                            <Button className="w-10 bg-gray-200 p-1 rounded hover:bg-gray-300 flex justify-center">
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.3491 3.55222L14.6846 2.21589C14.963 1.93748 15.3406 1.78107 15.7344 1.78107C16.1281 1.78107 16.5057 1.93748 16.7841 2.21589C17.0625 2.4943 17.2189 2.87191 17.2189 3.26564C17.2189 3.65937 17.0625 4.03698 16.7841 4.31539L8.37742 12.7221C7.95888 13.1404 7.44275 13.4478 6.87563 13.6167L4.75 14.25L5.38333 12.1244C5.55218 11.5573 5.85963 11.0411 6.27792 10.6226L13.3491 3.55222ZM13.3491 3.55222L15.4375 5.64064M14.25 11.0833V14.8438C14.25 15.3162 14.0623 15.7692 13.7283 16.1033C13.3942 16.4373 12.9412 16.625 12.4688 16.625H4.15625C3.68383 16.625 3.23077 16.4373 2.89672 16.1033C2.56267 15.7692 2.375 15.3162 2.375 14.8438V6.53126C2.375 6.05885 2.56267 5.60578 2.89672 5.27173C3.23077 4.93768 3.68383 4.75001 4.15625 4.75001H7.91667" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </Button>
                                            <Button className="w-10 bg-red-200 p-1 rounded hover:bg-red-300 flex justify-center">
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.6692 7.12499L11.3953 14.25M7.60475 14.25L7.33083 7.12499M15.2222 4.58374C15.4929 4.6249 15.7621 4.66844 16.0313 4.71515M15.2222 4.58374L14.3767 15.5744C14.3422 16.0219 14.14 16.4399 13.8106 16.7447C13.4813 17.0496 13.049 17.2189 12.6002 17.2187H6.39983C5.95103 17.2189 5.51873 17.0496 5.18936 16.7447C4.85999 16.4399 4.65784 16.0219 4.62333 15.5744L3.77783 4.58374M15.2222 4.58374C14.3085 4.4456 13.3901 4.34077 12.4688 4.26944M3.77783 4.58374C3.50708 4.62411 3.23792 4.66765 2.96875 4.71436M3.77783 4.58374C4.69152 4.4456 5.60994 4.34077 6.53125 4.26944M12.4688 4.26944V3.54428C12.4688 2.61011 11.7483 1.83111 10.8142 1.80182C9.93828 1.77382 9.06172 1.77382 8.18583 1.80182C7.25167 1.83111 6.53125 2.6109 6.53125 3.54428V4.26944M12.4688 4.26944C10.4925 4.11671 8.50747 4.11671 6.53125 4.26944" stroke="#F04B4B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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

            {/* FILL STAFF DATA POP UP */}
            <Modal isOpen={isModalOpen} onClose={handleModalClose} onConfirm={handleConfirm}>
                <div className="w-full flex flex-col items-center pb-10">
                    <h2 className="text-2xl font-bold text-orange-2">Add Staff</h2>
                    <span className="text-sm text-gray-3">Input all necesary data</span>
                </div>
                <form className="w-full text-center mb-6">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        className="border border-gray-300 p-2 mb-4 drop-shadow-md w-full rounded-[10px]"
                        placeholder="Enter staff name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="border border-gray-300 p-2 mb-4 drop-shadow-md w-full rounded-[10px]"
                        placeholder="Enter staff email address"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <label>Password</label>
                    <div className="-mb-6">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="border border-gray-300 p-2 mb-4 drop-shadow-md w-full rounded-[10px]"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="relative bottom-12 left-36 text-gray-4"
                        >
                            {showPassword ? (
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 5C7.455 5 3.435 7.69 1.525 12C3.435 16.31 7.455 19 12 19C16.545 19 20.565 16.31 22.475 12C20.565 7.69 16.545 5 12 5Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 15C10.343 15 9 13.657 9 12C9 10.343 10.343 9 12 9C13.657 9 15 10.343 15 12C15 13.657 13.657 15 12 15Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 5C7.455 5 3.435 7.69 1.525 12C3.435 16.31 7.455 19 12 19C16.545 19 20.565 16.31 22.475 12C20.565 7.69 16.545 5 12 5Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 9C13.657 9 15 10.343 15 12C15 13.657 13.657 15 12 15C10.343 15 9 13.657 9 12C9 10.343 10.343 9 12 9ZM1 1L23 23"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <label>Role</label>
                    <input
                        type="text"
                        name="role"
                        className="border border-gray-300 p-2 mb-4 drop-shadow-md w-full rounded-[10px]"
                        placeholder="Enter staff role"
                        value={formData.role}
                        onChange={handleInputChange}
                    />
                </form>
                <div className="flex justify-between w-full mt-4 gap-2">
                    <button
                        className="bg-white border-2 font-semibold w-full border-orange-2 text-orange-2 px-4 py-2 rounded-[10px]"
                        onClick={handleModalClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-orange-2 w-full font-semibold text-white px-4 py-2 rounded-[10px]"
                        onClick={handleConfirm}
                    >
                        Ok
                    </button>
                </div>
            </Modal>
            <Modal isOpen={isSecondModalOpen} onClose={handleModalClose} onConfirm={handleModalClose}>
                <div className="w-full flex flex-col items-center pb-10">
                    <div className="text-green-2 flex row gap-2 justify-center items-center">
                        <svg width="24" height="24" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path 
                                d="M10.3333 15.5417L13.4583 18.6667L18.6667 11.375M27 14.5C27 16.1415 26.6767 17.767 26.0485 19.2835C25.4203 20.8001 24.4996 22.1781 23.3388 23.3388C22.1781 24.4996 20.8001 25.4203 19.2835 26.0485C17.767 26.6767 16.1415 27 14.5 27C12.8585 27 11.233 26.6767 9.71646 26.0485C8.19989 25.4203 6.8219 24.4996 5.66116 23.3388C4.50043 22.1781 3.57969 20.8001 2.95151 19.2835C2.32332 17.767 2 16.1415 2 14.5C2 11.1848 3.31696 8.00537 5.66116 5.66117C8.00537 3.31696 11.1848 2 14.5 2C17.8152 2 20.9946 3.31696 23.3388 5.66117C25.683 8.00537 27 11.1848 27 14.5Z" 
                                stroke="currentColor" 
                                stroke-width="4" 
                                stroke-linecap="round" 
                                stroke-linejoin="round"/>
                        </svg>
                        <h2 className="text-2xl font-bold">Staff Added</h2>
                    </div>
                    <span className="text-sm text-gray-3">You can update or delete this data later</span>
                </div>
                <div className="text-gray-1 w-full flex flex-col mb-6 gap-6">
                    <div className="flex flex-row gap-4 justify-start">
                        <h2 className="w-1/4 font-bold text-gray-3">Staff Id</h2>
                        <span>:</span>
                        {/* CHANGE INTO STAFF ID LATER */}
                        <p>cs004</p> 
                    </div>

                    <div className="flex flex-row gap-4 justify-start">
                        <h2 className="w-1/4 font-bold text-gray-3">Full Name</h2>
                        <span>:</span>
                        <p>{formData.name}</p> 
                    </div>

                    <div className="flex flex-row gap-4 justify-start">
                        <h2 className="w-1/4 font-bold text-gray-3">Email</h2>
                        <span>:</span>
                        <p>{formData.email}</p> 
                    </div>

                    <div className="flex flex-row gap-4 justify-start">
                        <h2 className="w-1/4 font-bold text-gray-3">Password</h2>
                        <span>:</span>
                        <p>{formData.password}</p> 
                    </div>

                    <div className="flex flex-row gap-4 justify-start">
                        <h2 className="w-1/4 font-bold text-gray-3">Role</h2>
                        <span>:</span>
                        <p>{formData.role}</p> 
                    </div>

                    <div className="flex flex-row gap-4 justify-start">
                        <h2 className="w-1/4 font-bold text-gray-3">Pin</h2>
                        <span>:</span>
                        {/* CHANGE INTO STAFF PIN LATER */}
                        <p>325618</p> 
                    </div>

                    <div className="flex flex-row gap-4 justify-start">
                        <h2 className="w-1/4 font-bold text-gray-3">Created at</h2>
                        <span>:</span>
                        {/* CHANGE INTO STAFF CREATED DATE LATER */}
                        <p>7 July 2024</p> 
                    </div>
                </div>
                <button
                        className="bg-orange-2 w-full font-semibold text-white px-4 py-2 rounded-[10px]"
                        onClick={handleModalClose}
                    >
                        Ok
                    </button>
            </Modal>
        </div>
    );
}
