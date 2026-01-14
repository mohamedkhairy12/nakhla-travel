import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t, i18n } = useTranslation("common");

    return (
        <div>
            <h1>{t("welcome")}</h1>
        </div>
    );
};

export default Hero;
