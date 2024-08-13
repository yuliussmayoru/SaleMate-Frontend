import { Button, Card } from "../base";
import Link from "next/link";
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
                        <div className="flex justify-between w-full mt-4 gap-2">
                            <Button
                                type="submit"
                                className="text-xl"
                            >
                                Log In
                            </Button>
                        </div>
                        <p>Forget password</p>
                    </form>
                    <div className="flex flex-col justify-center items-center">
                        <span>have POS pin?</span>
                        <Link href="/pin" className="text-lg w-full">
                            <Button className="bg-green-2 hover:bg-green-1">
                                Log In POS
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>

        </div>
    )
}