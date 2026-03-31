import { useTranslation } from "next-i18next";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    const { t } = useTranslation("common");

    return (
        <section className="py-12 md:py-20 overflow-hidden" id="about">
            <div className="w-full max-w-[1100px] mx-auto flex flex-col md:flex-row md:justify-center gap-10 md:gap-16 items-center px-5 md:px-6">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full md:max-w-[480px]"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-2xl md:text-4xl font-bold mb-6 text-left font-kaisei"
                    >
                        Our Philosophy
                    </motion.h2>

                    <div className="text-primary-500 text-left text-sm md:text-base leading-relaxed md:leading-7 space-y-5">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Nature, for us, has never been just a destination. It is a place where everything slows down — where we reconnect with ourselves and rediscover a sense of balance. In the silence of the desert, along the timeless flow of the Nile, and beneath an endless open sky, there comes a moment when the journey becomes something deeper: a return to oneself.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="text-lg md:text-xl text-[rgba(183,127,79,1)] font-belluga italic border-l-4 border-[rgba(183,127,79,0.4)] pl-4"
                        >
                            We believe that travel can be deeply restorative—a quiet, therapeutic experience that allows people to pause, breathe, and reconnect with what truly matters.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            This philosophy has always been at the heart of who we are. Long before becoming a travel company, we were travelers ourselves—curious explorers drawn to the landscapes and hidden corners of Egypt. With more than ten years of experience in the travel industry, we learned that memorable journeys are never just itineraries, but carefully crafted experiences designed around each traveler.
                        </motion.p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="relative w-full md:w-[440px] h-[400px] md:h-[560px] bg-primary-500 p-2 md:p-3"
                >
                    <div className="relative w-full h-full ">
                        <Image
                            src="/images/departure-luxury-travel-planning-18.png"
                            alt="About Nakhla Travel"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
