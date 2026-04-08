import { useTranslation } from "next-i18next";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    const { t } = useTranslation('common');


    return (
        <section className="py-12 md:py-20 overflow-hidden" id="about">
            <div className="w-full  mx-auto flex flex-col md:flex-row md:justify-center gap-10 md:gap-16 items-center px-5 md:px-6">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full md:max-w-[850px]"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-2xl md:text-4xl font-bold mb-6 text-left font-kaisei"
                    >
                        {t('about.title')}
                    </motion.h2>

                    <div className="text-primary-500 text-left text-sm md:text-base leading-relaxed md:leading-7 space-y-5">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {t('about.p1')}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="text-lg md:text-xl text-[rgba(183,127,79,1)] font-belluga italic border-l-4 border-[rgba(183,127,79,0.4)] pl-4"
                        >
                            {t('about.quote')}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            {t('about.p2')}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.65 }}
                        >
                            {t('about.p3')}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            {t('about.p4')}
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
