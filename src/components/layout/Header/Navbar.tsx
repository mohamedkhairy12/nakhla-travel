import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { routes } from './constants';

const Navbar: React.FC = () => {
    const { t } = useTranslation('common');

    return (
        <nav className='hidden md:block'>
            <ul className="flex gap-8">
                {routes.map((route) => (
                    <li key={route.name} className='hover:opacity-70 transition-opacity duration-200'>
                        <Link href={route.href}>{t(`nav.${route.name.toLowerCase()}`)}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;