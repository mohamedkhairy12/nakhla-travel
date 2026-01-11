import Image from "next/image";

const Flag = ({ locale }: { locale?: string }) => {
    return (
        <Image
            src={`/flags/${locale || 'en'}.png`}
            alt={locale || 'en'}
            width={20}
            height={20}
            className="mr-2"
        />
    );
};

export default Flag;