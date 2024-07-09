
// import required modules
import PropTypes from 'prop-types';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/**
 * SwiperWrapper component renders a container for Swiper slide elements.
 * @param {object} props - Component props.
 * @returns {JSX.Element} SwiperWrapper component.
 */

// That's will Render The Container Of The Swiper Slide Elements
export default function SwiperWrapper(props) {

    const { items = [], slidesperviewcount = [], isRenderByFullWidth = false, setActiveIndex = null, isAutoplay = false, autoplaydelay = 3000, islooped = false, includepagination = false, includenavigation = false, classnames = "" } = props;

    // ### slidesperviewcount Will be an array of numbers that's display the count of cards in screen

    return (
        <Swiper
            spaceBetween={10}

            loop={islooped == false ? false : true}

            navigation={includenavigation ? true : false}

            autoplay={isAutoplay === false ? false : {

                delay: autoplaydelay,

                disableOnInteraction: false,

            }}

            pagination={(includepagination ? true : false, (includepagination ? { clickable: true } : false))}

            modules={[Autoplay, Pagination, Navigation]}

            onSlideChange={e => setActiveIndex && setActiveIndex(e.activeIndex)}

            breakpoints={{


                300: {
                    slidesPerView: isRenderByFullWidth ? 1 : 1.1,
                    spaceBetween: 10
                },
                // when window width is >= 640px
                550: {
                    slidesPerView: slidesperviewcount[0],
                    spaceBetween: 20
                },

                // when window width is >= 768px
                768: {
                    slidesPerView: slidesperviewcount[1],
                    spaceBetween: 30
                },

                // when window width is >= 1024px
                1024: {
                    slidesPerView: slidesperviewcount[2],
                    spaceBetween: 40
                },

                // when window width is >= 1024px
                1366: {
                    slidesPerView: slidesperviewcount[3],
                    spaceBetween: 24
                }

            }}


            className={`mySwiper `
            } >

            {/* That's Will Render Items To UI */}
            {items}

        </Swiper >
    )
}

SwiperWrapper.propTypes = {
    items: PropTypes.array,
    slidesperviewcount: PropTypes.array,
    autoplaydelay: PropTypes.number,
    islooped: PropTypes.bool,
    includepagination: PropTypes.bool,
    includenavigation: PropTypes.bool,
    isAutoplay: PropTypes.bool,
    setResetHeight: PropTypes.func,
    setActiveIndex: PropTypes.func,
    isRenderByFullWidth: PropTypes.bool,
    classnames: PropTypes.string,
}