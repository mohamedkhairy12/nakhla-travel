import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


interface BaseSwiperProps {
    children: React.ReactNode;
}
const BaseSwiper = ({ children }: BaseSwiperProps) => {
    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation, Pagination]}
                // navigation
                a11y={{ enabled: true }}
                pagination={{ clickable: true }}
                className="rounded-2xl"
                spaceBetween={50}
                slidesPerView={1}
                slidesPerGroup={1}
                loop={true}
                speed={500}
                effect="fade"
                keyboard={true}
                mousewheel={true}
                scrollbar={true}
                resistance={true}
                resistanceRatio={0.5}
                watchSlidesProgress={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}

            >
                {children}
            </Swiper>
        </div>
    );
};

export default BaseSwiper;
