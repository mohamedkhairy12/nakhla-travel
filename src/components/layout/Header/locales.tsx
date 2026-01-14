import Link from "next/link";
import { useRouter } from "next/router";
import Flag from "./flag";

type LocalesProps = {
    onSelect?: (locale: string) => void
    locale: string
}

const Locales = ({ onSelect, locale }: LocalesProps) => {
    const router = useRouter();
    const { pathname, query, asPath } = router;

    return (
        <Link
            onClick={() => onSelect?.(locale)}
            key={locale}
            href={{ pathname, query }}
            locale={locale}
            as={asPath}
            legacyBehavior={false}
            className='flex items-center space-x-1 hover:bg-primary-600 hover:text-background hover:rounded-md px-2 py-1  '
        >
            <Flag locale={locale} />
            {locale?.toUpperCase()}
        </Link>
    );
};

export default Locales;