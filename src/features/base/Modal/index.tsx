import React from 'react';
import { ModalProps } from './type';

export function Modal(props: ModalProps) {
    const { isOpen, children } = props;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center">
                {children}
            </div>
        </div>
    );
}
