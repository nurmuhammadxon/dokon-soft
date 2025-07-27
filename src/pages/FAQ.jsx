import React from 'react'
import { IoChevronUpOutline } from "react-icons/io5";
// i18next
import { useTranslation } from 'react-i18next';
// faq data
import { useFAQData } from '../constants/index'

const FAQCard = ({ question, answer }) => {
    return (
        <details
            className='group w-full break-inside-avoid rounded-2xl p-7 bg-primaryDarkBlue10 text-myBlack shadow-md'
            onToggle={(e) => e.currentTarget.setAttribute('aria-expanded', e.currentTarget.open)}
        >
            <summary className='cursor-pointer list-none flex items-center justify-between gap-1.5 outline-none'>
                <span className='text-xl font-semibold group-open:text-primaryDarkBlue90'>
                    {question}
                </span>
                <IoChevronUpOutline
                    className='w-5 h-5 transform transition-transform duration-300 group-open:rotate-180 group-hover:scale-110'
                />
            </summary>
            <p className='mt-4 text-base leading-relaxed text-myBlack transition-opacity duration-300 group-open:opacity-100 opacity-0'>
                {answer}
            </p>
        </details>
    )
}

function FAQ() {
    const { faqList } = useFAQData()
    const { t } = useTranslation()

    return (
        <section
            className='responsive-padding'
            id='faq'
        >
            <h2 className='sectionTitle mt-8'>
                {t('titleFaq')} (FAQ)
            </h2>

            <div className='columns-1 md:columns-2 gap-6 my-4 md:my-8 [&>*]:mb-4 md:[&>*]:mb-6'>
                {faqList.map(({ id, question, answer }) => (
                    <FAQCard
                        key={id}
                        question={question}
                        answer={answer}
                    />
                ))}
            </div>
        </section >
    )
}

export default FAQ
