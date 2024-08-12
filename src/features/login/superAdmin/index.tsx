import { useState } from "react";
import ToggleSwitch from "@/features/base/toggleSwitch";
import { Button, Card } from "@/features/base";

type superAdmin = {
    companyName: string,
    fullName: string,
    email: string,
    password: string,
    role: string,
    assignTo: string,
};

export function SuperAdminPage () {

const [formData, setFormData] = useState ({
    companyName: '',
    fullName: '',
    email: '',
    password: '',
    role: '',
    assignTo: '',
});

return (
    <div className="flex flex-col rounded-lg w-[500px] justify-center items-center">
        <Card className="mb-6 w-full h-28">
            <div className="w-full flex flex-col items-center">
                <h2 className="text-2xl font-bold text-orange-2 mb-3">Hello, Super Admin</h2>
                <span>Insert who the new owner or assign the staff</span>
            </div>
        </Card>

        <Card>
            <div className="w-full flex flex-col items-center">
                <h2 className="text-2xl font-bold text-orange-2">Add new owner or</h2>
                <h2 className="text-2xl font-bold text-orange-2">assign new staff</h2>
            </div>
            <form className="w-full text-start mb-6 mx-1">
                <label className="text-2xl pb-2">Company Name</label>
                <input
                    type="text"
                    name="company_name"
                    placeholder="Enter The Company Name"
                    value={formData.companyName}
                    // onChange={handleInputChange}
                    className="border border-gray-300 p-2 mb-4 mt-2 drop-shadow-md w-full rounded-[10px]"
                />
                <label className="text-2xl pb-2">Full Name</label>
                <input
                    type="text"
                    name="full_name"
                    placeholder="Enter Your Full Name"
                    value={formData.fullName}
                    // onChange={handleInputChange}
                    className="border border-gray-300 p-2 mb-4 mt-2 drop-shadow-md w-full rounded-[10px]"
                />
                <label className="text-2xl pb-2">Email</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    // onChange={handleInputChange}
                    className="border border-gray-300 p-2 mb-4 mt-2 drop-shadow-md w-full rounded-[10px]"
                />
                <label className="text-2xl pb-2">Password</label>
                <input
                    type="text"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    // onChange={handleInputChange}
                    className="border border-gray-300 p-2 mb-4 mt-2 drop-shadow-md w-full rounded-[10px]"
                />
                <label className="text-2xl">Role</label>
                <input
                    type="text"
                    name="role"
                    placeholder="Enter your role"
                    value={formData.role}
                    // onChange={handleInputChange}
                    className="border border-gray-300 p-2 mb-4 mt-2 drop-shadow-md w-full rounded-[10px]"
                />
                <label className="text-2xl">Assign to</label>
                <input
                    type="text"
                    name="asiign to"
                    placeholder="Enter the name"
                    value={formData.assignTo}
                    // onChange={handleInputChange}
                    className="border border-gray-300 p-2 mb-4 mt-2 drop-shadow-md w-full rounded-[10px]"
                />
                {/* <div className="flex space-x-16">
                    <ToggleSwitch
                        checked={formData.status}
                        onChange={() => setFormData({ ...formData, status: !formData.status })}
                        label="Status"

                    />
                </div> */}
            </form>
            <div className="flex justify-between w-full mt-4 gap-2">
                <Button
                    className="text-xl"
                    // onClick={handleConfirmAdd}
                >
                    Add
                </Button>
            </div>
        </Card>
    </div>
);
};