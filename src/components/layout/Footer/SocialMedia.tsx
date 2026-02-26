import { useTranslation } from "next-i18next";
import Image from "next/image";

const SocialMedia = () => {
    const { t } = useTranslation("common");
    const socialMedia = [
        { name: "Facebook", icon: "/social-media/facebook.png", link: "https://www.facebook.com/nakhla.travel" },
        { name: "Instagram", icon: "/social-media/instagram.png", link: "https://www.instagram.com/nakhla.travel" },
        { name: "Twitter", icon: "/social-media/twitter.png", link: "https://twitter.com/nakhla_travel" },
        { name: "LinkedIn", icon: "/social-media/linkedin.png", link: "https://www.linkedin.com/company/nakhla-travel/" },
    ];
    return (
        <div>
            <h4 className="font-semibold mb-3">{t("footer.follow_us")}</h4>
            <ul className="space-y-2 text-sm">
                {socialMedia.map((social) => (
                    <li key={social.name} className="flex items-center space-x-2 mb-4 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                        <Image src={social.icon} alt={social.name} width={20} height={20} />
                        <a href={social.link} target="_blank" rel="noopener noreferrer">{social.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialMedia;