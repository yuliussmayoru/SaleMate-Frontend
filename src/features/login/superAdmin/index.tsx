import { useState } from "react";
import ToggleSwitch from "@/features/base/toggleSwitch";

type superAdmin = {
    name: string,
    email: string,
    password: string,
};

export function SuperAdminPage () {

const [formData, setFormData] = useState ({
    name: '',
    email: '',
    password: '',
});

return (
        <div>
            <div className="w-full flex flex-col items-center pb-10">
                <h2 className="text-2xl font-bold text-orange-2">Add Tax</h2>
                <span className="text-sm text-gray-3">Input all necesary data</span>
            </div>
            <form className="w-full text-center mb-6">
                <label>Name</label>
                <input
                    type="text"
                    name="tax_name"
                    placeholder="Enter title name"
                    value={formData.name}
                    // onChange={handleInputChange}
                    className="border border-gray-300 p-2 mb-4 drop-shadow-md w-full rounded-[10px]"
                />
                <label>Email</label>
                <input
                    type="text"
                    name="tax_type"
                    placeholder="Enter tax type"
                    value={formData.email}
                    // onChange={handleInputChange}
                    className="border border-gray-300 p-2 mb-4 drop-shadow-md w-full rounded-[10px]"
                />
                <label>Password</label>
                <input
                    type="text"
                    name="tax_value"
                    placeholder="Enter tax value"
                    value={formData.password}
                    // onChange={handleInputChange}
                    className="border border-gray-300 p-2 mb-4 drop-shadow-md w-full rounded-[10px]"
                />
                {/* <div className="flex space-x-16">
                    <ToggleSwitch
                        checked={formData.status}
                        onChange={() => setFormData({ ...formData, status: !formData.status })}
                        label="Status"

                    />
                </div> */}
            </form>
            {/* <div className="flex justify-between w-full mt-4 gap-2">
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
            </div> */}
        </div>
    );
};