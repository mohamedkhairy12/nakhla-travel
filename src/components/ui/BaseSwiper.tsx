import { Swiper } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { SwiperOptions } from "swiper/types";

interface BaseSwiperProps {
    children: React.ReactNode;
    delay?: number;
    slidesPerView?: number;
    className?: string;
    allowTouchMove?: boolean;
    loop?: boolean;
    autoplay?: boolean;
    effect?: "fade" | "slide";
    breakpoints?: any;
}
const BaseSwiper = ({ children, delay = 5000, slidesPerView = 1, className, allowTouchMove = false, loop = false, autoplay = false, effect = "slide", breakpoints }: BaseSwiperProps) => {
    return (
        <Swiper
            modules={[Autoplay, EffectFade]}
            effect={effect}
            autoplay={autoplay ? { delay, disableOnInteraction: false } : false}
            loop={loop}
            allowTouchMove={allowTouchMove}
            className={className}
            slidesPerView={slidesPerView}
            breakpoints={breakpoints}

        >
            {children}
        </Swiper>
    );
};

export default BaseSwiper;
