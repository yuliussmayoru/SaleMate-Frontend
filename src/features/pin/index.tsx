import { Button, Card, Input } from "@/features/base";
import { useState } from "react";

export function PinForm() {
    const [showPassword, setShowPassword] = useState(false);
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

    const [formData, setFormData] = useState ({
        email: '',
        password: '',
    });
    

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-green-2">

            <div className="flex flex-col rounded-lg w-[500px] justify-center items-center">
                <Card className="mb-6">
                    <div className="w-full flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold text-orange-2 mb-3">Log In</h2>
                        <span className="text-center">“Every day, we get closer to our goal if we never give up on our goal!” - Sah Ruh Nya</span>
                    </div>
                </Card>

                <Card>
                    <form className="w-full text-start mb-6 mx-1">
                        <label className="text-2xl pb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="name@mail.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 mb-4 mt-2 drop-shadow-md w-full rounded-[10px]"
                        />
                        <label className="text-2xl pb-2">Password</label>
                        <div className="relative w-full">
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                name="password" 
                                placeholder="Password" 
                                value={formData.password} 
                                onChange={handleInputChange} 
                                className="border border-gray-300 p-2 mb-4 drop-shadow-md w-full rounded-[10px]"
                            />
                            <button type="button" onClick={togglePasswordVisibility} className="text-gray-4 absolute right-0 p-2">
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </form>
                    <div className="flex justify-between w-full mt-4 gap-2">
                        <Button
                            className="text-xl"
                            // onClick={handleConfirmAdd}
                        >
                            Log In
                        </Button>
                    </div>
                </Card>
            </div>

        </div>
    )
}