import { useTranslation } from "next-i18next";

export default function Intro() {
    const { t } = useTranslation("common");

    return (
        <section className="h-[50vh] bg-[#ceebd2]">
            <div className="flex flex-col items-center justify-center h-full">

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {t("intro.title")}
                </h2>

                <p className="text-gray-600 leading-relaxed w-[836px] text-center">
                    Those are just a few ways to describe a vacation designed by The Departure. But that’s just the beginning—because how we’ll describe your vacation depends entirely on what you’re looking for.
                    <br />
                    <br />
                    Our widely traveled and well-connected team of experts will personalize your experience from beginning to end.
                    <br />
                    <br />
                    <br />

                </p>
                <div className="absolute left-[-25px] top-[397px] w-[1264px] h-[198px] z-0"
                    style={{ transform: 'scale(0.849167, 0.849167) translate(-107.818px, -88.1021px) rotate(4deg)' }}>
                    <div className="bg-[rgba(255,255,255,1)] border-none h-full w-full box-border">
                    </div>
                </div>

            </div>
        </section>
    );
}
