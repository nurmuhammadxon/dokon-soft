import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const SelectLanguageList = ({ changeLang }) => {
    const languageOptions = [
        { id: 'uz', language: 'UZ' },
        { id: 'ru', language: 'RU' },
    ];

    const [selected, setSelected] = useState(languageOptions[0]); // default: UZ
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => setOpen(!open);

    const handleSelect = (item) => {
        setSelected(item);
        setOpen(false);
        changeLang(item.id); 
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 px-3 py-1 text-myBlack font-medium hover:text-primaryYellow100 cursor-pointer"
            >
                {selected.language}
                <ChevronDown size={18} />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-gray-200 z-50">
                    <div className="py-1 text-sm text-myBlack">
                        {languageOptions.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleSelect(item)}
                                className={`flex justify-between items-center w-full px-4 py-2 hover:bg-gray-100 cursor-pointer ${selected.id === item.id
                                        ? 'text-primaryYellow100 font-semibold'
                                        : ''
                                    }`}
                            >
                                {item.language}
                                <ChevronRight size={14} />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectLanguageList;
