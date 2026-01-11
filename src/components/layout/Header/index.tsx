'use client';
import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'next-i18next';
import { Container } from '@/components/ui';
import Navbar from './Navbar';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const { locale } = useRouter();
    const lang = useMemo(() => locale, [locale]);
    return (
        <header className="shadow-md sticky top-0 z-50 bg-primary-500 text-background relative">
            <Container>
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex md:gap-8 gap-4">
                        <Navbar />
                        <LanguageSwitcher
                            label={lang}
                            onSelect={(value) => console.log(value)}
                        />
                        <div className='md:hidden flex transition-transform duration-200' onClick={() => setOpen(!open)}>
                            <Image src={'/icon/burger.svg'} alt="menu" width={20} height={20} />
                        </div>
                    </div>
                </div>
            </Container>
            {open && <MobileMenu setOpen={setOpen} />}
        </header>
    );
};

export default Header;