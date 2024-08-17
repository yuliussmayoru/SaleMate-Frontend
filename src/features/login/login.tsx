import { Button, Card } from "@/src/features";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const response = await fetch('https://salemate-be-production.up.railway.app/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            console.log('Response: ', response)

            if (response.ok) {
                const result = await response.json();
                const token = result.data?.access_token;
                if (token) {
                    localStorage.setItem('authToken', token); // Save the token in localStorage
                    console.log('Token saved:', token);
                    router.push('/superadmin'); // Redirect after successful login
                } else {
                    console.error('Token not found in response');
                }
            } else {
                const errorData = await response.json(); // Read the error response body once
                console.error('Login failed:', errorData.message);
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-purple-2">

            <div className="flex flex-col rounded-lg w-[500px] justify-center items-center">
                <Card className="mb-6">
                    <div className="w-full flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold text-orange-2 mb-3">Log In</h2>
                        <span className="text-center">“Every day, we get closer to our goal if we never give up on our goal!” - Sah Ruh Nya</span>
                    </div>
                </Card>

                <Card>
                    <form 
                        className="w-full text-start mb-6 mx-1" 
                        onSubmit={handleSubmit}
                    >
                        <label className="text-2xl pb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="name@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 p-2 mb-4 mt-2 drop-shadow-md w-full rounded-[10px]"
                            required
                        />
                        <label className="text-2xl pb-2">Password</label>
                        <div className="relative w-full">
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                name="password" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                className="border border-gray-300 p-2 mb-4 drop-shadow-md w-full rounded-[10px]"
                                required
                            />
                            <button type="button" onClick={togglePasswordVisibility} className="text-gray-4 absolute right-0 p-2">
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                        <div className="flex justify-between w-full gap-2">
                            <Button
                                type="submit"
                                className="text-xl"
                            >
                                Log In
                            </Button>
                        </div>
                        {/* <p>Forget password</p> */}
                    </form>
                    <div className="flex flex-col justify-center items-center mb-2">
                        <span className="mb-2">have POS pin?</span>
                        <Link href="/pin" className="text-lg w-full">
                            <Button className="bg-green-2 hover:bg-green-1">
                                Log In POS
                            </Button>
                        </Link>
                    </div>

                    <div className="absolute flex flex-row top-0 left-0 -z-50 w-full h-full justify-between p-10">
                        <div>
                            <Image
                                height="903"
                                width="500"                            
                                src="/login-img.png"
                                alt="Salemate Logo"
                            />
                        </div>
                        <div>
                            <Image
                                height="100"
                                width="100"                            
                                src="/favicon.png"
                                alt="Salemate Logo"
                            />
                        </div>
                        <div className="text-[3rem] text-white font-bold w-[500px]">
                            <div className="h-full flex flex-col justify-center text-left">
                                <h1 className="-mt-3">
                                    working is like
                                </h1>
                                <h1 className="-mt-3">
                                    doing a hobby,
                                </h1>
                                <br />
                                <h1 className="-mt-3">
                                    that's how it
                                </h1>
                                <h1 className="-mt-3">
                                    feels when using
                                </h1>
                                <h1 className="-mt-3">
                                    Salemate
                                </h1>
                            </div>
                            <div className="absolute text-[20rem] -mt-[51rem] -ml-[3rem] opacity-30">
                                <h1>“</h1>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

        </div>
    )
}