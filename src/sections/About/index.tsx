import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    const { t } = useTranslation("common");

    return (
        <section className="py-6">
            <div className="w-[1000px] mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

                <div className="absolute left-[621px] top-[200px] w-[468px] h-[669px]
                                scale-[0.849167] translate-x-[151.869px] translate-y-[38.1006px]
                                origin-center box-border block pointer-events-auto bg-white p-3">
                    <div className="bg-white border-0 border-transparent box-border w-full h-full relative">
                        <Image
                            src="/images/departure-luxury-travel-planning-18.jpg"
                            alt="About"
                            fill
                            className="object-cover absolute inset-0 w-full h-full top-0 left-0 bg-no-repeat bg-cover bg-center rounded-inherit"
                        />
                    </div>
                </div>

                <div className="relative">
                    <h2 className="text-3xl font-bold mb-6 w-[457px] text-left">
                        {/* {t("about.title")} */}
                        Take Off on Your Own Custom-Crafted Journey
                    </h2>
                    <br />
                    <p className="text-[rgba(23,38,68,1)] text-left w-[457px]">
                        There is a better way to plan your next vacation—and it starts with The Departure. Work with your own personal travel advisor to craft a customized journey that surprises and delights you at every turn.
                        <br />
                        <br />
                        Our vetted travel partners deliver exceptional experiences in the world’s most spectacular places, and our list of curated properties—where you get extra special perks!—will make even the most discerning hotel aficionado drool. From safari adventures to sultry island escapes, we’ve got you covered.
                    </p>
                    <br />
                    <h3 className="text-3xl mb-8 text-left text-[rgba(183,127,79,1)]" style={{ fontFamily: 'Belluga' }}>
                        Discover The Departure difference:
                    </h3>

                    <Link
                        href="/services"
                        className="inline-block bg-black text-white px-6 py-3 rounded-full"
                    >
                        {t("about.button")}
                    </Link>
                </div>

            </div>
        </section>
    );
}
