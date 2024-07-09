import React from 'react'
import container from "/images/container.png";

const values = [
    { title: "Professionalism", desc: "We never leave our work to chance" },
    { title: "Reliability", desc: "We ensure that our process are managed transparently and can be traced " },
    { title: "Customer Satisfaction ", desc: "We aim to provide satisfaction with speed, trust and professionalism" },
];

/**
 * Component that renders the OurCoreValues section of the About page
 * This component displays the core values of the company
 *
 * @returns {JSX.Element} - The rendered component
 */
export default function OurCoreValues() {

    /**
     * Array of objects containing the core values of the company
     * Each object has a title and a description
     */
    const values = [
        { title: "Professionalism", desc: "We never leave our work to chance" },
        { title: "Reliability", desc: "We ensure that our process are managed transparently and can be traced " },
        { title: "Customer Satisfaction ", desc: "We aim to provide satisfaction with speed, trust and professionalism" },
    ];

    /**
     * Function that maps the values array to a list of divs containing the core values
     */
    const renderValues = values?.map((item, index) => {

        return (
            <div key={index} className='mb-6'>

                <h5 className='text-[#378FEB] text-[18px] sm:text-[22px] font-bold'>{item?.title}</h5>

                <p className='sm:text-[22px] text-[#0D1A36] font-normal'>{item?.desc}</p>

            </div>
        )

    });

    return (
        <section className='my-20 container grid grid-cols-12 gap-3 sm:gap-4'>

            <div className='col-span-12 md:col-span-8 p-3'>

                {/* Title of the section */}
                <h2 className='min-title'>Our Core Values</h2>

                {renderValues}

            </div>

            <div className='col-span-4 hidden md:flex-center mt-[-210px]'>

                {/* Image of the container */}
                <img src={container} className='w-fit rounded-[12px] max-w-full object-contain' alt="" />

            </div>

        </section>
    )
}
