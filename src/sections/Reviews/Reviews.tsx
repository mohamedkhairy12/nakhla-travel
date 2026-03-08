import BaseSwiper from "@/components/ui/BaseSwiper";
import { SwiperSlide } from "swiper/react";

export default function Reviews() {
    const data = [
        { title: "Slide 1", description: "Description 1" },
        { title: "Slide 2", description: "Description 2" },
        { title: "Slide 3", description: "Description 3" },
    ];
    return <div>
        <BaseSwiper>
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="flex justify-center w-100 h-100">
                        <div className="bg-[#ceebd2] p-4 w-100">
                            helloasdasdasdassssssssssssssssssssssssssssssssssssssssssssssssss
                        </div>

                        <div className="bg-[rgba(232,227,218,1)] w-100">
                            <img src={'/'} />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </BaseSwiper>
    </div>
}