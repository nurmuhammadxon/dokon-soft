import React from 'react';

function Button({ title, colorType, onClickBtn }) {
    let colorClasses = '';

    switch (colorType) {
        case 'primaryDark':
            colorClasses = 'btnBlue';
            break;
        case 'primaryYellow':
            colorClasses = 'btnYellow';
            break;
        default:
            colorClasses = 'text-black bg-gray-200 hover:bg-gray-300';
    }

    return (
        <button
            className={`font-medium text-base md:text-lg sm:leading-7 rounded-xl cursor-pointer transition-all duration-300 ${colorClasses} p-3.5`}
            type="button"
            onClick={onClickBtn}
        >
            {title}
        </button>
    );
}

export default Button;
