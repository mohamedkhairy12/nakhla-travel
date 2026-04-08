import { motion } from "framer-motion";
import { ResponsiveBackgroundSlider } from "@/components/ui";

const slides = [
    { desktop: "/hero/desktop/heroDeskTop1.png", mobile: "/hero/mobile/heroMobile1.png" },
    { desktop: "/hero/desktop/heroDeskTop2.png", mobile: "/hero/mobile/heroMobile2.png" },
    { desktop: "/hero/desktop/heroDeskTop3.png", mobile: "/hero/mobile/heroMobile3.png" },
    { desktop: "/hero/desktop/heroDeskTop4.png", mobile: "/hero/mobile/heroMobile4.png" }
];

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    return (
        <section className="relative h-[100dvh]" style={{ clipPath: 'inset(0 0 0 0)' }} id="home">
            <div className="fixed top-0 left-0 w-full h-full z-0">
                <ResponsiveBackgroundSlider slides={slides} />
            </div>

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white/40 p-8 md:p-14 rounded-3xl max-w-[90%] md:max-w-3xl pointer-events-auto border border-white/20 shadow-2xl"
                >
                    <motion.h3
                        variants={itemVariants}
                        className="text-primary-500 text-base md:text-xl font-medium tracking-[0.3em] uppercase mb-6 opacity-90 font-sans"
                    >
                        Nakhla Travel
                    </motion.h3>

                    <motion.h1
                        variants={itemVariants}
                        className="text-primary-500 text-4xl md:text-5xl font-bold leading-tight font-kaisei"
                    >
                        Where Luxury meets nature
                    </motion.h1>

                    <motion.div
                        variants={itemVariants}
                        className="w-16 h-1 bg-[rgba(183,127,79,0.8)] mx-auto mt-8 rounded-full"
                    />
                </motion.div>
            </div>
        </section>
    );
}

