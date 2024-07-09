import React from 'react'
import bg from '/images/home-hero.jpeg';
import facebook from '/images/facebook.svg';
import instegram from '/images/instegram.svg';
import twitter from '/images/twitter.svg';
import { Link } from 'react-router-dom';

/**
 * Hero component for the Home page
 * Renders the hero section of the Home page
 * @returns {JSX.Element} - The Hero component
 */
export default function Hero() {
    return (
        /* Hero section for the Home page */
        <section className='relative min-h-[100vh] overflow-hidden flex-center'>

            {/* Background image */}
            <img src={bg} className='absolute w-full h-full object-cover' alt="" />

            {/* Dark overlay */}
            <div className='bg-[#09122659] w-full h-full abs-left z-10'
                style={{ backdropFilter: 'blur(3.5px)' }}></div>

            <div className="container flex items-center flex-col-reverse lg:flex-row gap-5 lg:gap-16 relative z-20 flex-wrap">

                {/* Social media icons */}
                <div className='flex lg:flex-col gap-3 sm:gap-8'>
                    <img src={facebook} className='w-fit' alt="" />
                    <img src={instegram} className='w-fit' alt="" />
                    <img src={twitter} className='w-fit' alt="" />
                </div>

                <div>

                    {/* Heading */}
                    <h1 className='text-md-text md:text-[40px] font-medium text-white mb-5 sm:mb-8'>
                        {/* Logo */}
                        <span className='text-[30px] md:lg-text font-bold text-[#B3DFFF] me-1 lg:me-0'>AL ANWAR</span>
                        <br className='hidden lg:inline' />
                        {/* Tagline */}
                        Logistics As Easy As Possible&nbsp;For&nbsp;You
                    </h1>

                    {/* Contact button */}
                    <Link to={'/contact'} className='rounded-lg mb-5 sm:mb-10 lg:mb-[125px] bg-[#1E3D81] text-white w-[130px] sm:w-[184px] h-[35px] sm:h-[56px] grid place-content-center text-[15px] sm:text-xl font-semibold'>Contact Us</Link>

                    {/* Paragraph */}
                    <p className='lg:max-w-[850px] text-white font-medium text-sm-text sm:text-[16px] md:text-[24px]'>
                        Streamline your shipping procedures and enhance efficiency with our
                        cargo solutions. We take care of every aspect from beginning to end,
                        guaranteeing the safe arrival of your cargo
                    </p>

                </div>

            </div>

        </section>
    )
}
