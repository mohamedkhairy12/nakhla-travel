import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import BaseSwiper from "./BaseSwiper";

export type ResponsiveSlide = {
    desktop: string;
    mobile: string;
};

interface ResponsiveBackgroundSliderProps {
    slides: ResponsiveSlide[];
}

export default function ResponsiveBackgroundSlider({ slides }: ResponsiveBackgroundSliderProps) {
    return (
        <div className="w-full h-full relative z-0">
            <BaseSwiper delay={1500} effect="fade" allowTouchMove={true} autoplay={true} loop={true} className="w-full h-full" >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full relative">
                            {/* Desktop Image */}
                            <div
                                className="hidden md:block w-full h-full bg-no-repeat bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('${slide.desktop}')`,
                                }}
                            />
                            {/* Mobile Image */}
                            <div
                                className="block md:hidden w-full h-full bg-center bg-no-repeat bg-cover"
                                style={{ backgroundImage: `url('${slide.mobile}')` }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </BaseSwiper>
        </div>
    );
}
