import { InputHTMLAttributes, ReactNode } from "react";

export type ModalProps = InputHTMLAttributes<HTMLInputElement> & {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    children: React.ReactNode;  
};
