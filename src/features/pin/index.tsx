import { Button, Card } from "@/features/base";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export function PinForm() {
    const [pin, setPin] = useState('');
    const router = useRouter();

    const handleButtonClick = (value: string) => {
        if (pin.length < 6) {
            setPin(pin + value);
        }
    };

    const handleClear = () => {
        setPin('');
    };

    const handleDelete = () => {
        setPin(pin.slice(0, -1));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const response = await fetch('https://salemate-be-production.up.railway.app/auth/login/pin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pin }),
            });

            console.log('Response: ', response)

            if (response.ok) {
              // On successful login, redirect to the /superadmin page
                console.log('Login successful, redirecting...');  
                router.push('/superadmin');
            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData.message);
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
        }
    };
    

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-green-2 p-6">
            <div className="flex flex-col items-center justify-center rounded-lg p-6 w-full max-w-md">

                <Card className="mb-8 flex items-center justify-center space-x-4">
                    {[...Array(6)].map((_, index) => (
                        <div 
                            key={index} 
                            className="w-12 h-16 bg-white text-4xl font-bold text-center rounded-lg flex items-center justify-center"
                        >
                            {pin[index] || ''}
                        </div>
                    ))}
                </Card>

                <Card className="text-center">
                    <form onSubmit={handleSubmit} className="w-full font-bold">
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                <button 
                                    key={num} 
                                    type="button" 
                                    onClick={() => handleButtonClick(num.toString())} 
                                    className="p-4 bg-white text-2xl rounded-[10px] hover:bg-gray-5 border border-gray-4"
                                >
                                    {num}
                                </button>
                            ))}
                            <button 
                                type="button" 
                                onClick={handleClear} 
                                className="p-4 bg-white text-2xl rounded-[10px] hover:bg-gray-5 border border-gray-4"
                            >
                                CLEAR
                            </button>
                            <button 
                                type="button" 
                                onClick={() => handleButtonClick('0')} 
                                className="p-4 bg-white text-2xl rounded-[10px] hover:bg-gray-5 border border-gray-4"
                            >
                                0
                            </button>
                            <button 
                                type="button" 
                                onClick={handleDelete} 
                                className="p-4 bg-white text-2xl rounded-[10px] hover:bg-gray-5 border border-gray-4"
                            >
                                DELETE
                            </button>
                        </div>

                        <div className="flex justify-center text-2xl font-bold">
                            <Button 
                                type="submit" 
                                className="mt-6"
                            >
                                Enter PIN
                            </Button>
                        </div>
                    </form>
                    <Link href="/login" className="text-gray-3 text-sm hover:underline">back to Login Page</Link>
                </Card>

            </div>
        </div>
    );
}