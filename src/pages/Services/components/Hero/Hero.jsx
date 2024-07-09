import React from 'react'
import bg from '/images/services.png';

/**
 * Hero component for the Services page
 * Renders the hero section of the Services page
 * @returns {JSX.Element} - The Hero component
 */
export default function Hero() {
    return (
        // Hero section for the Services page
        <section className='relative min-h-[75vh] overflow-hidden flex-center'>

            {/* Background image */}
            <img src={bg} className='absolute w-full h-full object-cover' alt="" />

            {/* Dark overlay */}
            <div className='w-full h-full abs-left z-10'
                style={{ background: 'linear-gradient(91deg, rgba(0, 0, 0, 0.80) -20.17%, rgba(23, 50, 109, 0.80) 136.03%)' }}></div>

            <div className="container flex-center flex-col relative z-20">

                {/* Heading */}
                <h1 className='text-[30px] sm:text-[56px] text-white font-bold mb-6'>Our Services</h1>

                {/* Paragraph */}
                <p className='text-[#C7CFDF] text-center font-medium text-md-text sm:text-[40px]'>
                    {/* Provide a customized solution for all our client base */}
                    We provide a customized solution
                    <br />
                    for all our client base.
                </p>

            </div>

        </section>
    )
}
