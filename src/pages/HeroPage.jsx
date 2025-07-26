import React from 'react';
// components
import Button from '../components/Button';

function HeroPage() {
    return (
        <section className='relative overflow-hidden pt-8 sm:pt-10 md:pt-14 sm:mt-10 md:mt-14 min-h-[400px] sm:min-h-[600px] flex items-center'>
            {/* Yellow background wave - Left side */}
            <div className="absolute top-10 left-[-150px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primaryYellow20 rounded-full blur-[100px] z-0" />

            {/* Yellow background wave - Right side */}
            <div className="absolute top-0 right-[-150px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primaryYellow20 rounded-full blur-[100px] z-0" />

            {/* Content */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-10">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-myBlack leading-tight">
                    Biznesingiz <span className="text-primaryYellow100">bitta</span> <br className='hidden sm:block' />
                    platformada
                </h1>

                <p className="text-center text-primaryDarkBlue50 mt-4 max-w-xl mx-auto text-base sm:text-lg">
                    Savdo, Moliya, Ombor, HR – barchasi yagona DSOFT ERP/CRM tizimida. Ish jarayonlarini avtomatlashtiring, savdoni oshiring.
                </p>

                <div className="flex items-center justify-center mt-6 sm:mt-8 gap-4">
                    <Button title="Biz haqimizda" colorType="primaryDark" />
                    <Button title="Bog'lanish uchun" colorType="primaryYellow" />
                </div>
            </div>
        </section>
    );
}

export default HeroPage;
