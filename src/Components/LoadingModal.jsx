import React from 'react';
import { ImSpinner8 } from 'react-icons/im';

function LoadingModal({ isLoading }) {
    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 bg-[#0000004D] flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center gap-4">
                <ImSpinner8 className="animate-spin text-blue-600 text-4xl" />
                <p className="text-sm text-gray-700 font-medium">Iltimos, kuting...</p>
            </div>
        </div>
    );
}

export default LoadingModal;
