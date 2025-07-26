import React from 'react';

function Button({ title, colorType, }) {
    let colorClasses = '';

    switch (colorType) {
        case 'primaryDark':
            colorClasses = 'text-myWhite bg-primaryDarkBlue100 hover:bg-primaryDarkBlue80';
            break;
        case 'primaryYellow':
            colorClasses = 'text-myBlack bg-primaryYellow100 hover:bg-primaryYellow80';
            break;
        default:
            colorClasses = 'text-black bg-gray-200 hover:bg-gray-300';
    }

    return (
        <button
            className={`font-medium text-base md:text-lg sm:leading-7 rounded-xl cursor-pointer transition-all duration-300 ${colorClasses} p-3.5`}
            type="button"
        >
            {title}
        </button>
    );
}

export default Button;
