'use client';
import React, { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { Container } from '@/components/ui';
import Navbar from './Navbar';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const { locale } = useRouter();
    const lang = useMemo(() => locale, [locale]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-0 z-50 w-full flex items-center text-white/90 transition-shadow duration-300"
        >
            <Container>
                <div className="flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Logo />
                    </motion.div>

                    <div className="flex md:gap-8 gap-4 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="hidden md:flex"
                        >
                            <Navbar />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <LanguageSwitcher label={lang} />
                        </motion.div>

                        <div className='md:hidden flex transition-transform duration-200 '>
                            <Image
                                src={'/icon/burger.svg'}
                                alt="menu"
                                width={24}
                                height={24}
                                className="cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                                onClick={() => setOpen(prev => !prev)}
                            />
                        </div>
                    </div>
                </div>
            </Container>
            <MobileMenu open={open} setOpen={setOpen} />
        </motion.header>
    );
};

export default Header;
