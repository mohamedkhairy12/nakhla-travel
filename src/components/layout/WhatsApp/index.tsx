import { useRouter } from "next/router";
import { motion } from "framer-motion";

const WhatsApp = () => {
    const { locale } = useRouter();
    const messages = {
        en: "Hello, I would like to know more about your services",
        es: "Hola, quiero saber más sobre sus servicios",
        pt: "Olá, gostaria de saber mais sobre seus serviços",
    } as any;
    const whatsappURL = `https://wa.me/201289666170?text=${encodeURIComponent(
        messages[locale as string] || messages.en
    )}`;
    return (
        <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17, delay: 1 }}
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-2xl transition-colors hover:bg-[#20ba5a]"
        >
            <img src="/icon/WhatsApp.svg" className="w-7 h-7" alt="WhatsApp" />
        </motion.a>
    );
};

export default WhatsApp;
