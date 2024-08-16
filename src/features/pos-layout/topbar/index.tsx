import { useState, useEffect } from "react";
import { SaleMateLogo } from "@/src/assets";
import { Button } from "@/src/features";
import { axiosInstance } from "@/src/api/axiosClient";
// import { PinModal } from "@/src/components/PinModal"; // Adjust the import path accordingly
import { useRouter } from 'next/router'; // For logging out

export function Topbar() {
    const [userId, setUserId] = useState({ role: '', name: '' });
    const [time, setTime] = useState('');
    const [cashierStatus, setCashierStatus] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            try {
                const userResponse = await axiosInstance.get('/user');
                const userData = userResponse.data;
                setUserId({ role: userData.role, name: userData.name });

                const cashierResponse = await axiosInstance.get('/cashier-status');
                const cashierData = cashierResponse.data;
                setCashierStatus(cashierData.isOpen);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();

        const updateTime = () => {
            const currentTime = new Date().toLocaleTimeString();
            setTime(currentTime);
        };
        updateTime(); 
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleButtonClick = () => {
        if (cashierStatus) {
            setIsModalOpen(true);
        }
    };

    const handleModalSubmit = async (pin: string) => {
        try {
            await axiosInstance.post('/verify-pin', { pin });
            await axiosInstance.post('/cashier-status', { isOpen: false });
            // Perform logout
            await axiosInstance.post('/logout');
            router.push('/login'); // Redirect to login page
        } catch (error) {
            console.error("Error closing cashier:", error);
        } finally {
            setIsModalOpen(false);
        }
    };

    return (
        <div className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
            <div>
                <SaleMateLogo />
            </div>
            <div className="flex text-2xl" id="user-id">
                <p className="mr-4 role">{userId.role}</p>
                <p className="name">{userId.name}</p>
            </div>
            <div id="time">
                <p className="time">{time}</p>
            </div>
            <div id="open-cashier-status">
                <Button onClick={handleButtonClick}>
                    {cashierStatus ? 'Close' : 'Open'}
                </Button>
            </div>
             {/* /* {isModalOpen && < PinModal onSubmit={handleModalSubmit} onClose={() => setIsModalOpen(false)} />} */}
        </div>
    );
}
