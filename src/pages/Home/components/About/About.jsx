import React from 'react'
import pngwing from '/images/pngwing.png';
import pattern from '/images/pattern.png';


/**
 * About component displays information about the company.
 * It includes a title, a subtitle, and a description.
 * It also includes two images.
 * @returns {JSX.Element} The About component.
 */
export default function About() {
    return (
        // Container for the section
        <section className='my-5 sm:my-20 container grid grid-cols-12 gap-3 lg:gap-10'>

            {/* Left column */}
            <div className='col-span-12 lg:col-span-7'>

                {/* Title */}
                <h2 className='min-title'>About Us</h2>

                {/* Subtitle */}
                <h3 className='text-md-text sm:text-[35px] lg:text-[48px] text-[#0D1A36] font-bold mb-6'>Pioneering Logistics and Transportation <span className='text-[#378FEB]'>Solutions</span></h3>

                {/* Description */}
                <p className='text-[#0D1A36] sm:text-md-text'>
                    ACS is a dynamic freight forwarding company, The company established in 1988.
                    Over the years we have managed to be of the fast-growing freight forwarding
                    company in Egypt. We give our customers the decisive competitive advantage. We offer reliable export and import transports with all modes of transport, anywhere in the world</p>

            </div>

            {/* Right column */}
            <div className='relative col-span-12 lg:col-span-5 mt-5'>

                {/* First image */}
                <img src={pngwing} className='w-fit m-auto' alt="" />

                {/* Pattern image */}
                <img src={pattern} className='w-fit absolute right-0 top-0 hidden lg:block' alt="" />

            </div>

        </section>
    )
}
