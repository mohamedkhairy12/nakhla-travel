import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen" style={{ clipPath: 'inset(0 0 0 0)' }}>
            {/* Fixed Background Image */}
            <div
                className="fixed top-0 left-0 w-full h-full bg-[url('/images/hero.jpg')] bg-center bg-no-repeat bg-[length:100%_auto]"
            />

            {/* Scrolling Content (Text) */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                <div className="bg-[#ffffff85] p-4 rounded-lg">
                    <h3 className="text-[rgba(23,38,68,1)] text-lg md:text-2xl font-medium tracking-wide mb-4">
                        Designed To Inspire!
                    </h3>

                    <h1 className="text-[rgba(23,38,68,1)] text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
                        Concierge Travel Designed Around You
                    </h1>
                </div>
            </div>
        </section>
    );
}
