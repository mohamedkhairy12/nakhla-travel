"use client";
import { useTranslation } from 'next-i18next';

const Hero = () => {
    const { t } = useTranslation("common");

    return (
        <section>
            <h1>{t("welcome")}</h1>
        </section>
    );
};

export default Hero;
