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
            className="absolute bottom-100 right-4 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition"
        >
            <img src="/icon/burger.svg" className="w-5 h-5" />
        </a>

    );
};

export default WhatsApp;