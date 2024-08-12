import { SuperAdminPage } from "@/features/login/superAdmin";

export default function SuperAdmin() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50 z-50">
            <div className="bg-white py-6 px-12 rounded-lg shadow-lg w-[500px] flex flex-col justify-center items-center">
                <SuperAdminPage />
            </div>
        </div>
    );
};