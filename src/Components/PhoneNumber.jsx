import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input/input';

const PhoneNumber = ({ value, handleInput }) => {
    const handlePhoneChange = (inputVal) => {
        handleInput({ target: { name: 'phone', value: inputVal } });
    };

    return (
        <PhoneInput
            id='phone'
            name="phone"
            country="UZ"
            className="w-full px-1 py-2 bg-transparent text-xs text-[#1C1B1F] outline-none"
            placeholder="(__) ___ __ __"
            value={value.phone}
            onChange={handlePhoneChange}
            required
        />
    );
};

export default PhoneNumber;
