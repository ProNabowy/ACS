import React from 'react'
import icons from '/images/icons-group.png';
import arrow from '/images/arrow.png';

/**
 * Mission component displays the mission statement of the company.
 * It includes a title and a description.
 * @returns {JSX.Element} The Mission component.
 */
export default function Mission() {
    return (
        // Wrap the mission section in a container
        <section className='my-5 sm:my-20 container grid grid-cols-12 lg:gap-10'>

            {/* Left column */}
            <div className='col-span-12 lg:col-span-7 relative mb-5'>

                {/* Title */}
                <h2 className='min-title'>Our Mission</h2>

                {/* Description */}
                <p className='text-[#0D1A36] sm:text-md-text'>
                    // We are committed to service excellence through quality and innovation.
                    // We provide end-to-end logistics management solutions that are not only efficient but also reliable and cost-effective
                </p>

                {/* Arrow image */}
                <img src={arrow} className='w-fit absolute top-[60%] translate-y-[-45%] -right-[180px] hidden lg:block' alt="" />

            </div>

            {/* Right column */}
            <div className='col-span-12 lg:col-span-5'>

                {/* Icons image */}
                <img src={icons} className='w-fit m-auto' alt="" />

            </div>

        </section>
    )
}
