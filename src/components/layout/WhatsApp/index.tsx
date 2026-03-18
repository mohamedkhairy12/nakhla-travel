import { useRouter } from "next/router";

const WhatsApp = () => {
    const { locale } = useRouter();
    const messages = {
        en: "Hello, I would like to know more about your services",
        es: "Hola, quiero saber más sobre sus servicios",
        pt: "Olá, gostaria de saber mais sobre seus serviços",
    };
    const whatsappURL = `https://wa.me/201289666170?text=${encodeURIComponent(
        messages[locale as keyof typeof messages]
    )}`;
    return (
        <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-10 w-14 h-14 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white/80 rounded-full shadow-lg transition-all duration-200"
        >
            <img src="/icon/WhatsApp.svg" className="w-7 h-7" />
        </a>

    );
};

export default WhatsApp;