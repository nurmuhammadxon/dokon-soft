import React from 'react';

function AboutUs() {
    return (
        <section
            className='px-4 sm:px-6 md:px-10 md:pt-20'
            id='aboutUs'
        >
            <h2 className='text-myBlack font-bold text-3xl sm:text-4xl text-left'>
                Biz haqimizda
            </h2>
            <div className='pt-4'>
                {/* Img */}
                <div className='w-full h-auto overflow-hidden rounded-xl'>
                    <img
                        src="/Frame36.png"
                        alt="image about us"
                        className='w-full h-full object-cover max-h-[400px]'
                    />
                </div>

                {/* content */}
                <div className='flex flex-col sm:flex-row items-start justify-between w-full gap-2.5 md:gap-6 mt-6'>
                    <div className='w-full sm:w-[48%]'>
                        <p className='font-normal text-base sm:text-lg text-primaryDarkBlue50 text-left sm:text-left'>
                            Biz — zamonaviy va qulay ERP tizimini yaratishga bel bog‘lagan yosh va g‘ayratli jamoamiz. Garchi hali katta tajribaga ega bo‘lmasak-da, har bir mijozimiz uchun chin dildan xizmat qilishga tayyormiz.
                        </p>
                    </div>
                    <div className='w-full sm:w-[48%]'>
                        <p className='font-normal text-base sm:text-lg text-primaryDarkBlue50 text-left sm:text-right'>
                            Maqsadimiz — kichik va o‘rta bizneslarga o‘z faoliyatini raqamlashtirish, samaradorligini oshirish va vaqtni tejashda yordam beradigan ERP yechimlarni taqdim etish.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
