import React from 'react'
import bg from '/images/about-frame.png';

/**
 * Component that renders the Why Choose Us section of the About page.
 * 
 * @returns {JSX.Element} - The rendered section.
 */
export default function WhyChooseUs() {

    // Array of features to be displayed.
    const features = [
        'Acs is a dynamic freight forwarding company Established in 1988',
        'One of the fastest-growing freight forwarding companies in Egypt',
        'Understands clients have specific shipment requirements.',
        'Spends time consulting clients individually.',
        'Provides customized solutions for clients.',
    ];

    // Render the features array as a list of divs.
    const renderFeatures = features.map((item, index) => {

        return (
            <div key={index} className='flex items-center gap-3 sm:gap-6 mb-3 sm:mb-10'>

                {/* Indicator circle */}
                <div className='w-[24px] h-[24px] bg-[#B3DFFF] rounded-full'></div>

                {/* Feature text */}
                <p className='text-[#0D1A36] font-medium text-sm-text sm:text-md-text'>{item}</p>

            </div>
        )

    })

    return (
        <section className='my-20 container grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10'>

            <div>

                {/* Section title */}
                <h3 className='text-[30px] sm:text-[48px] mb-10 font-bold text-[#0D1A36]'>Why <span className='text-[#378FEB]'>Choose</span> Us</h3>

                {/* List of features */}
                {renderFeatures}

            </div>

            <div className='flex-center'>

                {/* Background image */}
                <img src={bg} className='w-fit object-fill' alt="" />

            </div>

        </section >
    )
}
