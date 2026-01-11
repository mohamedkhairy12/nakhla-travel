'use client';
import Link from 'next/link';
import { routes } from './constants';

const Navbar: React.FC = () => {

    return (
        <nav className='hidden md:block'>
            <ul className="flex gap-8">
                {routes.map((route) => (
                    <li key={route.name} className='hover:opacity-70 transition-opacity duration-200'>
                        <Link href={route.href}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;