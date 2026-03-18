import { useTranslation } from "next-i18next";
import { Container } from "@/components/ui";
import Logo from "../Header/Logo";
import SocialMedia from "./SocialMedia";
import Contact from "./Contact";

const Footer = () => {
    const { t } = useTranslation("common");
    return (
        <footer className="relative bg-primary-500 w-full text-background shadow-md">
            <Container>
                <div className="container grid gap-8 py-8 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <Logo />
                        <p className="mt-2 text-sm text-white/80 ">
                            {t("footer.tagline")}
                        </p>
                    </div>

                    {/* Contact */}
                    <Contact />


                    {/* Links */}
                    <SocialMedia />


                </div>

                <div className="border-t border-white/20 py-4 text-center text-sm">
                    {t("footer.rights")}
                </div>
            </Container>
        </footer>
    );
};

export default Footer;