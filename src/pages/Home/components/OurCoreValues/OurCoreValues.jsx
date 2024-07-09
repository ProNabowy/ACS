import container from '/images/container.png';
import dots from '/images/dots.png';
/**
 * Component that renders the OurCoreValues section of the home page
 * @returns {JSX.Element} The rendered section
 */
export default function OurCoreValues() {
    return (
        // Container for the section
        <section className='my-20 relative'>

            <img src={dots} className='w-fit absolute -left-20 top-[50%] translate-y-[-50%] hidden sm:block' alt="" />

            <div className='container grid grid-cols-12 gap-3 sm:gap-4'>

                <div className='col-span-12 md:col-span-8 p-3'>

                    {/* Title of the section */}
                    <h2 className='min-title'>Our Core Values</h2>

                    {/* Description of the section */}
                    <p className='text-[#0D1A36] sm:text-md-text my-6 leading-7 font-normal'>
                        ACS has always been value driven. These values continue to direct our
                        growth and business. The core values where we base our business are <span className='text-[#0D1A36] text-md-text font-bold'>as below:</span>
                    </p>

                    {/* First core value */}
                    <h3 className='text-[#378FEB] text-[18px] sm:text-[22px] font-bold'>1.Professionalism</h3>
                    <p className='sm:text-[22px] text-[#0D1A36] font-normal'>We never leave our work to chance</p>

                    {/* Second core value */}
                    <h3 className='text-[#378FEB] text-[18px] sm:text-[22px] font-bold mt-6'>2.Reliability</h3>
                    <p className='sm:text-[22px] text-[#0D1A36] font-normal '>We ensure that our process are managed transparently and can be traced </p>

                    {/* Third core value */}
                    <h3 className='text-[#378FEB] text-[18px] sm:text-[22px] font-bold mt-6'>3.Customer Satisfaction </h3>
                    <p className='sm:text-[22px] text-[#0D1A36] font-normal '>We aim to provide satisfaction with speed, trust and professionalism</p>

                </div>

                <div className='col-span-4 hidden md:flex-center mt-[-210px]'>

                    {/* Image of the container */}
                    <img src={container} className='w-fit rounded-[12px] max-w-full object-contain' alt="" />

                </div>

            </div>

        </section>
    )
} 
