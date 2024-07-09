import React from 'react'

const steps = [
    { title: "Recieved Product", desc: "Lorem ipsum dolor sit amet consectetur. Lorem et pulvinar ultrices diam augue amet nunc pretium. " },
    { title: "Warehousing", desc: "Lorem ipsum dolor sit amet consectetur. Lorem et pulvinar ultrices diam augue amet nunc pretium. " },
    { title: "Hand Over Product", desc: "Lorem ipsum dolor sit amet consectetur. Lorem et pulvinar ultrices diam augue amet nunc pretium. " },
    { title: "Delivery Product", desc: "Lorem ipsum dolor sit amet consectetur. Lorem et pulvinar ultrices diam augue amet nunc pretium. " },
];

/**
 * Component that renders the How It Works section of the Services page.
 * This section displays 4 easy steps to receive your cargo.
 * 
 * @returns {JSX.Element} - The rendered section.
 */
export default function HowItWorks() {

    // Array of steps to be displayed
    const steps = [
        { title: "Recieved Product", desc: "Lorem ipsum dolor sit amet consectetur. Lorem et pulvinar ultrices diam augue amet nunc pretium. " },
        { title: "Warehousing", desc: "Lorem ipsum dolor sit amet consectetur. Lorem et pulvinar ultrices diam augue amet nunc pretium. " },
        { title: "Hand Over Product", desc: "Lorem ipsum dolor sit amet consectetur. Lorem et pulvinar ultrices diam augue amet nunc pretium. " },
        { title: "Delivery Product", desc: "Lorem ipsum dolor sit amet consectetur. Lorem et pulvinar ultrices diam augue amet nunc pretium. " },
    ];

    return (
        <section className='my-20 container'>

            {/* Section title */}
            <h2 className='min-title m-auto'>How it works</h2>

            {/* Section subtitle */}
            <h3 className='text-center text-[#0D1A36] font-semibold text-[25px] sm:text-[40px] my-2'>4 Easy Steps to <br /> Receive Your Cargo</h3>

            {/* Section description */}
            <p className='text-[#0D1A36] sm:text-md-text lg:max-w-[55%] m-auto text-center'>We operate globally, connecting major cities and remote locations. No matter where your cargo needs to go, we have the infrastructure to deliver it efficiently.</p>

            {/* Container for the steps */}
            <div className='mt-10 flex items-center gap-3 sm:gap-6 lg:gap-10 justify-center flex-wrap lg:flex-nowrap'>

                {/* Mapping over the steps array */}
                {steps.map((item, index) => {

                    return (
                        <div key={index} className={`w-[48%] lg:w-[calc(95%/5)] h-[349px] flex ${index % 2 ? 'items-end' : ''}`}>

                            {/* Step container */}
                            <div className='bg-[#F1F3F7] p-3 rounded-[8px] flex flex-col justify-center h-[80%]'>

                                {/* Step number */}
                                <h3 className='text-[#8F9EC0] text-md-text sm:text-[28px] font-semibold mb-3'>0{index + 1}</h3>

                                {/* Step title */}
                                <h4 className='text-[#0D1A36] font-medium text-[18px] sm:text-[24px]'>{item?.title}</h4>

                                {/* Step description */}
                                <p className='text-[#0D1A36] text-sm-text sm:text-[16px]'>{item.desc}</p>

                            </div>

                        </div>
                    )

                })}

            </div>

        </section>
    )
}

