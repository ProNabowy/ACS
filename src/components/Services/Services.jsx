import React from 'react'
import pattern from '/images/squre-pattern.png';
import shipping from '/images/noun-shipping.svg';
import air from '/images/noun-air.svg';
import logistic from '/images/noun-logistic.svg';
import delivery from '/images/noun-delivery.svg';
import inventory from '/images/noun-inventory.svg';
import e_commerce from '/images/e-commerce.svg';
import dotspattern from '/images/pattern.png';

/**
 * Services component that displays a list of freight forwarder services.
 * @returns {JSX.Element} The Services component.
 */
export default function Services() {

    // Define the list of services offered by the freight forwarder
    const services = [
        { name: "Sea Freight Services", icon: shipping, descr: "Being an efficient freight forwarder, we provide comprehensive services to almost all seaport locations." },
        { name: "Air Freight Services", icon: air, descr: "We are a competitive airfreight provider, offering a comprehensive range of premium services and specialist products tailored to you. Choose the best service for your needs from our worldwide network" },
        { name: "Overland Services", icon: logistic, descr: "We offer range of intermodal transportation services for international overland shipping also we are expertise on all required documentation" },
        { name: "Cargo Insurance Services", icon: delivery, descr: "Ensure your cargo's safety with our comprehensive insurance. Protect your shipments from unforeseen events for peace of mind and financial security. Trust us to safeguard your valuable goods." },
        { name: "E-commerce", icon: e_commerce, descr: "With the increasing demand of E-commerce, we have positioned ourselves to better handle and manage the incoming and outgoing parcels systematically." },
        { name: "Customs Brokerage Services", icon: inventory, descr: "Our customs brokerage service offers enhanced control and comprehensive clearance for sea and air shipments, whether or not arranged through us, ensuring error-free processing." },
    ]

    return (
        // Render the Services component
        <section className='my-5 sm:my-20 relative'>

            {/* Render the background pattern image */}
            <img src={pattern} className='w-fit absolute right-0 top-0' alt="" />

            <div className='container'>

                <div className='mb-5 sm:mb-12'>

                    <h2 className='min-title'>Our Services</h2>

                    <p className='text-[#0D1A36] sm:text-md-text lg:max-w-[850px]'>
                        We offer a comprehensive portfolio of worldwide transport. As a freight forwarder, we combine some or all our services in an exceptional way. We provide our clients with in-depth consultation and personalized solutions to make their business more efficient and successful
                    </p>

                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 flex-wrap'>

                    {/* Render each service as a card */}
                    {services.map((item, index) => {

                        return (
                            <div key={index} className='min-h-[200px] sm:min-h-[285px] text-center p-3 rounded-[16px] bg-white' style={{ boxShadow: '0px 3px 16px 0px rgba(0, 0, 0, 0.06)' }}>

                                {/* Render the service icon */}
                                <img src={item.icon} className='w-fit m-auto mb-3' alt="" />

                                {/* Render the service name */}
                                <h4 className='text-[#0D1A36] font-semibold text-md-text sm:text-[24px] mb-4'>{item.name}</h4>

                                {/* Render the service description */}
                                <p className='text-[#566EA0] text-sm-text sm:text-[18px]'>{item.descr}</p>

                            </div>
                        )

                    })}

                </div>

            </div>

            {/* Render the dots pattern image */}
            <img src={dotspattern} className='w-fit hidden lg:block absolute left-0 bottom-[200px] z-[-1]' alt="" />

        </section>
    )
}
