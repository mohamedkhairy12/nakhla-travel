'use client';
import React, { useState } from 'react';
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
    const [open, setOpen] = useState(false);
    const { locale } = useRouter();
    const lang = useMemo(() => locale, [locale]);
    return (
        <header className="absolute top-0 z-50 h-[80px] w-[100%] flex items-center shadow-md text-white/80">
            <Container>
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex md:gap-8 gap-4">
                        <Navbar />
                        <LanguageSwitcher
                            label={lang}
                        />
                        <div className='md:hidden flex transition-transform duration-200 '>
                            <Image src={'/icon/burger.svg'} alt="menu" width={20} height={20} onClick={() => setOpen(prev => !prev)} />
                        </div>
                    </div>
                </div>
            </Container>
            <MobileMenu open={open} setOpen={setOpen} />
        </header>
    );
};

export default Header;