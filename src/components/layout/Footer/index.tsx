import { Container } from "@/components/ui";
import Image from "next/image";
import Logo from "../Header/Logo";
import SocialMedia from "./SocialMedia";
import Contact from "./Contact";

const Footer = () => {
    return (
        <footer className="bg-primary-500 w-full text-background shadow-md">
            <Container>
                <div className="container grid gap-8 py-8 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <Logo />
                        <p className="mt-2 text-sm">
                            Your trusted travel partner
                        </p>
                    </div>

                    {/* Contact */}
                    <Contact />


                    {/* Links */}
                    <SocialMedia />


                </div>

                <div className="border-t border-white/20 py-4 text-center text-sm">
                    © 2026 Nakhla Travel. All rights reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;