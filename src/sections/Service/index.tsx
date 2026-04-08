import { services } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function ServiceSection() {
    const { t } = useTranslation("common");

    return (
        <div id="service" className="overflow-hidden bg-white">
            {services.map((service, index) => {
                const { image, reverse } = service;
                // Get translated fields
                const title = t(`servicesList.${index}.title`);
                const subtitle = t(`servicesList.${index}.subtitle`);
                const description = t(`servicesList.${index}.description`);

                const isReverse = reverse !== undefined ? reverse : index % 2 !== 0;
                // Use the english title equivalent or index to check for dark mode
                const isDark = index === 0 || index === 4;
                const bgClass = isDark ? "bg-primary-500 text-white" : "bg-white text-primary-500";
                const borderClass = isDark ? "border-white/10" : "border-primary-500/10";

                return (
                    <section
                        key={index}
                        className={`py-20 md:py-32 px-6 md:px-12 relative ${bgClass}`}
                    >
                        <div className="max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">

                                {/* Content Column */}
                                <motion.div
                                    initial={{ opacity: 0, x: isReverse ? 40 : -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className={`space-y-6 md:space-y-8 ${isReverse ? 'md:order-2' : 'md:order-1'}`}
                                >
                                    <div className="space-y-2 md:space-y-4 text-inherit">
                                        <motion.span
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                            className="text-[#b77f4f] font-belluga italic text-lg md:text-xl block"
                                        >
                                            {subtitle}
                                        </motion.span>
                                        <h3 className="text-3xl md:text-5xl font-bold font-kaisei leading-tight">
                                            {title}
                                        </h3>
                                    </div>

                                    <div className={`w-20 h-1 bg-[#b77f4f]/60 rounded-full`} />

                                    <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-white/80' : 'text-[rgba(23,38,68,0.8)]'}`}>
                                        {description}
                                    </p>

                                </motion.div>

                                {/* Image Column */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className={`relative ${isReverse ? 'md:order-1' : 'md:order-2'}`}
                                >
                                    {/* Main Image */}
                                    <div className={`aspect-[5/4] rounded-[2rem] overflow-hidden border ${borderClass} shadow-2xl relative z-10`}>
                                        <Image
                                            src={image[0]}
                                            alt={title}
                                            fill
                                            className="object-cover transition-transform duration-1000 hover:scale-110"
                                        />
                                    </div>

                                    {/* Secondary Image (Decor, if exists) */}
                                    {image[1] && (
                                        <motion.div
                                            initial={{ opacity: 0, x: isReverse ? -20 : 20, y: 20 }}
                                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4, duration: 0.8 }}
                                            className={`absolute -bottom-25 ${isReverse ? '-right-6 md:-right-12' : '-left-2 md:-left-12'} w-[300px] aspect-square rounded-2xl overflow-hidden border-4 ${isDark ? 'border-primary-500' : 'border-white'} shadow-2xl z-20 hidden md:block`}
                                        >
                                            <Image
                                                src={image[1]}
                                                alt={`${title} detail`}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    )}

                                    {/* Abstract background shape */}
                                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full blur-[100px] opacity-20 pointer-events-none -z-0 ${isDark ? 'bg-[#b77f4f]' : 'bg-primary-500'}`} />
                                </motion.div>

                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
}