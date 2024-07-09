import { SwiperSlide } from 'swiper/react';
import bg from '/images/strengths.png';
import chess from '/images/chess.png';
import man from '/images/man.png';
import networking from '/images/networking.png';
import world from '/images/world.png';
import ship from "/images/container'sShip.png";
import abstract from '/images/abstract.png';
import { SwiperWrapper } from '../../../../components';

const navBtnsStyles = {
    next: "[&_.swiper-button-next]:inline-block [&_.swiper-button-next]:!bg-[#B3DFFF] [&_.swiper-button-next] [&_.swiper-button-next]:right-[10px][&_.swiper-button-next]:mt-6 [&_.swiper-button-next]:lg:mb-2 [&_.swiper-button-next]:mr-6 [&_.swiper-button-next]:lg:ml-6 [&_.swiper-button-next]:text-[#0D1A36] [&_.swiper-button-next]:bg-[#F6EEFC] [&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:w-8 [&_.swiper-button-next]:h-8 [&_.swiper-button-next]:lg:w-11 [&_.swiper-button-next]:lg:h-11 [&_.swiper-button-next:after]:absolute [&_.swiper-button-next:after]:top-1/2 [&_.swiper-button-next:after]:left-1/2 [&_.swiper-button-next:after]:-translate-y-1/2 [&_.swiper-button-next:after]:-translate-x-1/2 [&_.swiper-button-next:after]:scale-[0.30] [&_.swiper-button-next:after]:lg:scale-[0.25] [&_.swiper-button-next:after]:lg:scale-[0.45]",
    prev: "[&_.swiper-button-prev]:inline-block [&_.swiper-button-prev]:!bg-[#B3DFFF] [&_.swiper-button-prev] [&_.swiper-button-prev]:left-[10px][&_.swiper-button-prev]:mt-6 [&_.swiper-button-prev]:lg:mb-2 [&_.swiper-button-prev]:ml-6 [&_.swiper-button-prev]:lg:mr-6 [&_.swiper-button-prev]:text-[#0D1A36] [&_.swiper-button-prev]:bg-[#F6EEFC] [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:w-8 [&_.swiper-button-prev]:h-8 [&_.swiper-button-prev]:lg:w-11 [&_.swiper-button-prev]:lg:h-11 [&_.swiper-button-prev:after]:absolute [&_.swiper-button-prev:after]:top-1/2 [&_.swiper-button-prev:after]:left-1/2 [&_.swiper-button-prev:after]:-translate-y-1/2 [&_.swiper-button-prev:after]:-translate-x-1/2 [&_.swiper-button-prev:after]:scale-[0.30] [&_.swiper-button-prev:after]:lg:scale-[0.25] [&_.swiper-button-prev:after]:lg:scale-[0.45]",
};

/**
 * Renders the Strengths component which displays the company's strengths
 * in a SwiperWrapper component.
 *
 * @returns {JSX.Element} The rendered Strengths component
 */
export default function Strengths() {

    // Array of strength objects
    const strengths = [
        {
            title: 'Ability to handle high value & complex Shipments',
            image: chess,
        },
        {
            title: 'Skilled & Dedicated Management Team',
            image: man,
        },
        {
            title: 'Competitive Price Points',
            image: networking,
        },
        {
            title: 'Customs Clearance',
            image: world,
        },
        {
            title: 'Global Network Interface',
            image: ship,
        },
        {
            title: 'Global Network Interface',
            image: abstract,
        },
    ];

    // Map over the strengths array to create SwiperSlides
    const items = strengths.map((item, index) => {
        return (
            <SwiperSlide key={index} className='relative'>

                {/* Display the strength's image */}
                <img src={item.image} className='w-full h-[268px] rounded-[10px] object-cover' alt="" />

                {/* Display the strength's title */}
                <p className='absolute bottom-5 bg-white border-t-[5px] border-t-[#378FEB] px-3 py-2 w-fit max-w-[70%] text-sm-text'>{item.title}</p>

            </SwiperSlide>
        )
    })

    {/* Render the Strengths component */ }
    return (
        <section className={`my-20 relative py-12 ${navBtnsStyles.next} ${navBtnsStyles.prev}`}>

            {/* Display the background image */}
            <img src={bg} className='w-full h-full abs-left object-cover z-[-1]' alt="" />

            {/* Display the component title */}
            <h2 className='text-[28px] font-bold text-white text-center mb-10'>Our Strengths</h2>

            {/* Render the SwiperWrapper component */}
            <SwiperWrapper
                slidesperviewcount={[2.3, 2.8, 3.8, 5.3]}
                classnames={'relative z-10'}
                includenavigation
                items={items}
            />

        </section>
    )
}
