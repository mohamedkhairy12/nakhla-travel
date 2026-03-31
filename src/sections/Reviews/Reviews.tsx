import BaseSwiper from "@/components/ui/BaseSwiper";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

export default function Reviews() {
    const reviews = [
        { src: "/reviews/review1.png" },
        { src: "/reviews/review2.png" },
        { src: "/reviews/review3.png" },
        { src: "/reviews/review4.png" },
        { src: "/reviews/review5.png" }
    ];

    const breakpoints = {
        320: { slidesPerView: 1 },
        1024: { slidesPerView: 3 }
    }
    return (
        <section className="my-20 px-5 md:px-0" id="reviews">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <h2 className="text-3xl md:text-4xl font-bold font-kaisei text-primary-500">
                    What Our Travelers Say
                </h2>
                <div className="w-20 h-1 bg-[rgba(183,127,79,0.6)] mx-auto mt-4 rounded-full" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <BaseSwiper allowTouchMove={true} autoplay={true} loop={true} delay={5000} breakpoints={breakpoints} effect="slide" slidesPerView={1} >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="flex items-center justify-center p-2"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src={review.src}
                                    alt={`review${index + 1}`}
                                    width={300}
                                    height={300}
                                    className="rounded-lg md:w-[600px] md:h-[600px] w-[300px] h-[300px] shadow-sm hover:shadow-md transition-shadow duration-300"
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </BaseSwiper>
            </motion.div>
        </section>
    )
}
