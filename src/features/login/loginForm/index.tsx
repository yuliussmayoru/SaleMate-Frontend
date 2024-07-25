import { EyeCloseIcon, EyeOpenIcon } from "@/assets";
import { Button, Card, Input } from "@/features/base";
import Image from "next/image";
import { useState } from "react";

export function LoginForm() {
    const[showPassword, setShowPassword] = useState(false);

    const showPasswordHandler = () => {
        setShowPassword((prev) => !prev);
    }

    return (
        <div>
            <div>
                <Image 
                    src=""
                    width={100}
                    height={100}
                    alt="salemate logo"
                    className="object-center"
                />
            </div>
            <Card>
                <h1>Log In</h1>
                <p>"Everyday, we get closer to our goal if we never give up on our goal!!" - Sah Ruh Nya</p>
            </Card>

            <Card>
                <Input label="E-Mail or Userame" name="email-username" data-cy="email-username"/>
                <Input
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    rightNode={showPassword ? <EyeCloseIcon/> : <EyeOpenIcon/>} 
                    rightNodeClick={showPasswordHandler}
                    data-cy="password"
                />

                <Button
                    type="submit"
                    data-cy="login-button"
                    className="w-full"
                >

                </Button>
            </Card>
            

    
        </div>
        
    )
}