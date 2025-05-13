import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

function ModalMessage({
    isOpen,
    onClose,
    type = 'info',
    message,
}) {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const typeStyles = {
        success: 'bg-green-100 text-green-800 border-green-400',
        error: 'bg-red-100 text-red-800 border-red-400',
        warning: 'bg-yellow-100 text-yellow-800 border-yellow-400',
        info: 'bg-blue-100 text-blue-800 border-blue-400',
    };

    return (
        <div className='overflow-x-hidden'>
            {/* overfly */}
            <div
                className='absolute top-0 left-0 cursor-pointer  w-full h-dvw z-40 bg-[#0000004D]'
                onClick={onClose} />
            {/* modal */}
            <div className="flex items-start justify-center pt-5"
            >
                <div
                    className={`max-w-sm w-full p-4 rounded-lg shadow-md border relative z-50 ${typeStyles[type]} ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
                >
                    <button
                        className="absolute top-2 right-2 text-xl text-gray-600 hover:text-black cursor-pointer"
                        onClick={onClose}
                    >
                        <IoClose />
                    </button>
                    <p className="text-sm font-medium">{message}</p>
                </div>
            </div>
        </div>
    );
}

export default ModalMessage;
