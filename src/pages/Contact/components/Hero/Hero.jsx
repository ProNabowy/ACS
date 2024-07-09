import React from 'react'
import bg from '/images/help.png';

/**
 * Hero component for the Contact Us page
 * Renders the hero section of the Contact Us page
 * @returns {JSX.Element} - The Hero component
 */
export default function Hero() {
    return (
        // Hero section for the Contact Us page
        <section className='relative min-h-[75vh] overflow-hidden flex-center'>

            {/* Background image */}
            <img src={bg} className='absolute w-full h-full object-cover' alt="" />

            {/* Dark overlay */}
            <div className='w-full h-full abs-left z-10'
                style={{ background: 'linear-gradient(91deg, rgba(0, 0, 0, 0.80) -20.17%, rgba(23, 50, 109, 0.80) 136.03%)' }}></div>

            <div className="container flex-center flex-col relative z-20">

                {/* Heading */}
                <h1 className='text-[30px] sm:text-[56px] text-white font-bold mb-6'>Contact Us</h1>

                {/* Paragraph */}
                <p className='text-[#C7CFDF] text-center font-medium text-md-text sm:text-[40px]'>Send an Email if you want to <br /> ask about any thing</p>

            </div>

        </section>
    )
}
