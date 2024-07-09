import React from 'react'
import bg from '/images/help.png';
import stroke from '/images/plane-stroke.png';
import { Link } from 'react-router-dom';

/**
 * Help component that displays a section with a background image,
 * a heading, a paragraph, and a contact button.
 *
 * @returns {JSX.Element} The Help component
 */
export default function Help() {
    return (
        // Outer section with a minimum height and centered content
        <section className='relative min-h-[60vh] overflow-hidden flex items-center justify-center'>

            {/* Background image */}
            <img src={bg} className='absolute w-full h-full object-cover' alt="" />

            {/* Dark overlay */}
            <div className='w-full h-full abs-left z-10' 
                style={{ background: 'linear-gradient(85deg, rgba(0, 0, 0, 0.85) -20.9%, rgba(23, 50, 109, 0.85) 161.76%)' }}></div>

            <div className="container flex items-center justify-center flex-col relative z-20">

                {/* Heading */}
                <h1 className='text-[30px] sm:text-lg-text text-white font-bold mb-6'>You Need Any Help?</h1>

                {/* Paragraph */}
                <p className='text-[#C7CFDF] text-center font-medium text-md-text sm:text-[32px] mb-10'>If you have any questions
                    <br />
                    do not hesitate to contact us</p>

                {/* Contact button */}
                <Link to="/contact" className='rounded-lg bg-[#1E3D81] text-white w-[184px] h-[56px] grid place-content-center text-xl font-semibold'>Contact Us</Link>

                {/* Stroke image */}
                <img src={stroke} className='hidden sm:block absolute right-[13%] translate-x-[-13%] top-[50%] translate-y-[-50%] w-fit' alt="" />

            </div>

        </section>
    )
}
