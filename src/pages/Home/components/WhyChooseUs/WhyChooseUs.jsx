import bg from '/images/why-us.png';
import pattern from '/images/pattern.png';
import squre_pattern from '/images/squre-pattern.svg';
import delivery from '/images/delivery.png';
import users from '/images/users.png';
import ship from '/images/ship.png';
import plane from '/images/air-plane.png';
import circle from '/images/plane-circle.png';

/**
 * Component that renders a container for a feature.
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.item - The feature to be rendered.
 * @param {string} props.item.name - The name of the feature.
 * @param {string} props.item.icon - The icon representing the feature.
 * 
 * @returns {JSX.Element} - The rendered feature container.
 */
const FeaturesContainer = ({ item }) => {

    /**
     * The container for the feature.
     * @type {JSX.Element}
     */
    const featureContainer = (
        <div className='flex items-center gap-3 sm:gap-4 mb-4'>

            {/* The feature icon. */}
            <div className='size-[40px] sm:size-[64px] rounded-full flex-center'
                style={{ background: "linear-gradient(94deg, #1E3D81 -1.21%, #378FEB 95.8%, #B3DFFF 116.84%)" }}>

                {/* The feature icon image. */}
                <img src={item.icon} className='w-[20px] sm:w-fit max-w-full' alt="" />

            </div>

            {/* The feature name. */}
            <p className='text-[#0D1A36] font-medium sm:text-[24px]'>{item.name}</p>

        </div>
    )

    return featureContainer;
}

/**
 * Component that renders the Why Choose Us section of the Home page.
 * 
 * @returns {JSX.Element} - The rendered section.
 */
export default function WhyChooseUs() {

    // Array of features to be displayed.
    const features = [
        { name: "Delivery on Time", icon: delivery },
        { name: "Expert Team", icon: users },
        { name: "Ship Everywhere", icon: ship },
    ]

    return (
        // The container for the section.
        <section className='my-20 relative'>

            {/* Background image */}
            <img src={bg} className='w-full h-[610px] object-cover' alt="" />

            {/* Content container */}
            <div className="container lg:w-[1046px] mt-[-250px] m-auto relative z-10 bg-white rounded-[16px] overflow-hidden" style={{ boxShadow: '0px 3px 16px 0px rgba(0, 0, 0, 0.06)' }}>

                {/* Grid layout for content */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-9 p-2 py-10 sm:p-10'>

                    {/* Left column */}
                    <div>

                        {/* Section title */}
                        <h2 className='min-title mb-6'>Why Us</h2>

                        {/* Section subtitle */}
                        <h3 className='text-[#0D1A36] font-bold text-md-text sm:text-[28px] mb-4'>We offer comprehensive global logistics solutions.</h3>

                        {/* Section description */}
                        <p className='text-[#566EA0] sm:text-md-text mb-6'>
                            Our Vision and mission are to constantly exceed customer expectations by
                            providing superior freight forwarding and global transportation solutions
                            including Air, Ocean and customs brokerage and logistic services.
                        </p>

                        {/* List of features */}
                        {features.map((item, index) => <FeaturesContainer key={index} item={item} />)}

                    </div>

                    {/* Right column */}
                    <div className='relative'>

                        {/* Airplane image */}
                        <img src={plane} className='w-full sm:w-[340px] max-w-full rounded-[12px] sm:ms-[120px]' alt="" />

                        {/* Experience container */}
                        <div className='relative mt-[-141px]'>

                            {/* Experience badge */}
                            <p className='bg-[#B3DFFF] absolute top-[-60px] left-[50%] sm:left-[80px] translate-x-[-50%] sm:translate-x-[initial] rounded-[4px] text-center font-medium text-sm-text flex-center flex-col w-[88px] h-[88px]' style={{ boxShadow: '0px 4px 16px 0px rgba(9, 18, 38, 0.10)' }}>

                                <span>30</span>

                                <span>Years of</span>

                                <span>Experience</span>

                            </p>

                            {/* Experience image */}
                            <img src={circle} className='w-[250px] h-[283px] m-auto sm:m-0 object-cover rounded-[12px]' alt="" />

                        </div>

                    </div>

                </div>

                {/* Statistics container */}
                <div className='grid grid-cols-1 lg:grid-cols-2 border-t border-t-[#C7CFDF] h-[141px]'>

                    {/* Delivered packages statistic */}
                    <div className='p-2 flex items-center sm:justify-center gap-3 sm:gap-4 sm:border-r sm:border-r-[#C7CFDF] border-b border-b-[#C7CFDF] sm:border-b-transparent'>

                        <h5 className='text-[#1C1F35] font-semibold text-md-text sm:text-[32px]'>6000+</h5>

                        <div className='w-[17px] h-[17px]' style={{ background: 'linear-gradient(94deg, #1E3D81 -1.21%, #378FEB 95.8%, #B3DFFF 116.84%)' }}></div>

                        <p className='text-[#1C1F35] font-medium sm:text-md-text'>Delivered Packages</p>

                    </div>

                    {/* Satisfied clients statistic */}
                    <div className='p-2 flex items-center sm:justify-center gap-3 sm:gap-4'>

                        <h5 className='text-[#1C1F35] font-semibold text-md-text sm:text-[32px]'>4000+</h5>

                        <div className='w-[17px] h-[17px]' style={{ background: 'linear-gradient(94deg, #1E3D81 -1.21%, #378FEB 95.8%, #B3DFFF 116.84%)' }}></div>

                        <p className='text-[#1C1F35] font-medium sm:text-md-text'>Satisfied Clients</p>

                    </div>

                </div>

            </div>

            {/* Pattern images */}
            <img src={pattern} className='w-fit absolute top-[70%] translate-y-[-50%]' alt="" />

            <img src={squre_pattern} className="w-fit absolute right-0 top-[80%] translate-y-[-50%]" alt=""></img>

        </section>
    )
}
