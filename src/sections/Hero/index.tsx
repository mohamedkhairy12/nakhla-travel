import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-[100dvh]" style={{ clipPath: 'inset(0 0 0 0)' }}>
            <div
                className="fixed top-0 left-0 w-full h-full md:bg-[url('/images/HERO-DT.png')] bg-[url('/images/HERO-PH.png')] bg-left bg-no-repeat bg-cover"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
                <div className="bg-[#ffffff50] p-6 md:p-10 rounded-2xl max-w-[90%] md:max-w-2xl">
                    <h3 className="text-[rgba(23,38,68,1)] text-base md:text-xl font-medium tracking-[0.2em] uppercase mb-4 opacity-80 font-sans">
                        Nakhla Travel
                    </h3>

                    <h1 className="text-[rgba(23,38,68,1)] text-4xl md:text-5xl font-bold leading-tight font-kaisei">
                        Where Luxury meets nature
                    </h1>
                </div>
            </motion.div>
        </section>
    );
}
