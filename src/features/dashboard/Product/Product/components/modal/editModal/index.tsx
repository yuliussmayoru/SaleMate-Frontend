import { Button, CancelButton, Modal, } from "@/src/features";
import { editModalProps } from "./types";

export default function EditModal({isEditModalOpen, handleModalClose, formData, handleInputChange, handleConfirmEdit}: editModalProps) {
    return (
        <div>
            <Modal isOpen={isEditModalOpen} onClose={handleModalClose} onConfirm={handleModalClose}>
                <div className="w-full flex flex-col items-center pb-10">
                    <h2 className="text-2xl font-bold text-orange-2">Edit Category</h2>
                    <span className="text-sm text-gray-3">Edit necesary data</span>
                </div>
                <form className="w-full text-center mb-6">
                    <label>Category Name</label>
                    <input
                        type="text"
                        name="category_name"
                        placeholder="Enter category name"
                        value={formData.category_name}
                        onChange={handleInputChange}
                        className="border border-gray-300 p-2 mb-4 drop-shadow-md w-full rounded-[10px]"
                    />
                </form>
                <div className="flex justify-between w-full mt-4 gap-2">
                    <CancelButton
                        onClick={handleModalClose}
                    >
                        Cancel
                    </CancelButton>
                    <Button
                        onClick={handleConfirmEdit}
                    >
                        Ok
                    </Button>
                </div>
            </Modal>
        </div>
    );
};
