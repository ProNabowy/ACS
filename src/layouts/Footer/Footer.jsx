import logo from '/images/logo.png';
import email from '/images/email.svg';
import phone from '/images/phone.svg';
import mail from '/images/mail-box.svg';
import facebook from '/images/facebook.svg';
import instegram from '/images/instegram.svg';
import location from '/images/location.svg';

/**
 * Footer component
 * Renders the footer section of the application
 * @returns {JSX.Element} - The footer component
 */
export default function Footer() {
  return (
    // Start of the footer component
    <footer className='bg-[#1E3D81] text-white sm:p-3 py-6'>

      {/* Container for the footer content */}
      <div className="container">

        {/* Top section of the footer */}
        <div className='flex-between gap-3 flex-wrap xl:flex-nowrap sm:p-3 mb-3 border-b border-b-[#8EA6BC]'>

          {/* Logo and copyright information */}
          <div className='flex-center flex-wrap sm:flex-nowrap w-full lg:w-fit gap-3'>

            {/* Logo image */}
            <img src={logo} className='w-fit' alt="" />

            {/* Copyright information */}
            <p className='font-medium text-sm-text sm:text-sm-text w-full sm:w-fit text-center sm:text-start'>ACS @ 2024. All rights reserved.</p>

          </div>

          {/* Contact information */}
          <div className="flex-center lg:justify-normal flex-wrap w-full lg:w-fit lg:flex-nowrap gap-3">

            {/* Email information */}
            <div className="flex-center sm:justify-normal gap-2 w-full sm:w-fit">

              {/* Email icon */}
              <img src={email} className='w-fit hidden sm:block' alt="" />

              {/* Email addresses */}
              <p className='font-medium text-sm-text sm:text-sm-text text-center'>info@alanwarcargo.net <br className='inline sm:hidden' /> <span className='hidden sm:inline'>-</span> <br className='inline sm:hidden' /> gmanager@alanwarcargo.net </p>

            </div>

            {/* Phone number information */}
            <div className="flex items-center gap-2">

              {/* Phone number icon */}
              <img src={phone} className='w-fit hidden sm:block' alt="" />

              {/* Phone numbers */}
              <p className='font-medium text-sm-text sm:text-sm-text'>(+2)02 2268 7404 - (+2) 0128 770 5786</p>

            </div>

            {/* Postal code information */}
            <div className="flex items-center gap-2">

              {/* Postal code icon */}
              <img src={mail} className='w-fit hidden sm:block' alt="" />

              {/* Postal code */}
              <p className='font-medium lg:text-sm-text'>41361</p>

            </div>

          </div>

          {/* Social media links */}
          <div className='flex-center lg:justify-normal w-full lg:w-fit gap-3 mb-3 sm:mb-0'>

            {/* Facebook link */}
            <a href=""><img src={facebook} className='w-fit' alt="" /></a>

            {/* Instagram link */}
            <a href=""><img src={instegram} className='w-fit' alt="" /></a>

          </div>

        </div>

        {/* Bottom section of the footer */}
        <div className="flex-center flex-wrap md:flex-nowrap gap-2">

          {/* Office location information */}
          <div className='flex items-center gap-2'>

            {/* Location icon */}
            <img src={location} className='w-fit hidden sm:block' alt="" />

            {/* Office location */}
            <p className='font-medium text-sm-text md:text-[16px] text-center md:text-start'>Airport Office: Aamar International Center, Cargo Village</p>

          </div>

          {/* Headquarter location information */}
          <div className='flex items-center gap-1 sm:gap-3 order-[-1] md:order-[initial]'>

            {/* Location icon */}
            <img src={location} className='w-fit hidden sm:block' alt="" />

            {/* Headquarter location */}
            <p className='font-medium text-sm-text md:text-[16px] text-center md:text-start'>Headquarter: 74 Saqr Qurish, Sheraton Buildings, Cairo Egypt</p>

          </div>

        </div>

      </div>

    </footer>
  )
}
