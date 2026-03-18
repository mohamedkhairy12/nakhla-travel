import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
    const { t } = useTranslation("common");

    return (
        <section className="relative h-screen overflow-hidden" style={{ clipPath: 'inset(0 0 0 0)' }}>
            {/* Fixed Background Image */}
            <div
                className="fixed top-0 left-0 w-full h-full bg-[url('/images/category_weekend-main_banner-ar-dt_2.jpg')] bg-center bg-no-repeat bg-[length:100%_auto]"
            />

            {/* Scrolling Content (Text) */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                <div className="bg-[#ffffff85] p-8 rounded-xl backdrop-blur-sm mx-4">
                    <h2 className="text-[rgba(23,38,68,1)] text-4xl md:text-5xl font-bold mb-8 max-w-3xl">
                        {t("cta.title")}
                    </h2>

                    <Link
                        href="/contact"
                        className="inline-block bg-[rgba(23,38,68,1)] text-white/80 px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all"
                    >
                        {t("cta.button")}
                    </Link>
                </div>
            </div>
        </section>
    );
}
