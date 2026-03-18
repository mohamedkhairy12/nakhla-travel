import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import Flag from './flag';
import Locales from './locales';

type DropdownProps = {
    label?: string;
    onSelect?: (value: string) => void;
};

const LanguageSwitcher = ({ label = 'EN', onSelect }: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const router = useRouter();
    const { locales, locale } = router;

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    return (
        <div ref={ref} className="md:relative hidden md:flex md:text-left md:cursor-pointer">
            <div
                onClick={() => setOpen(prev => !prev)}
                className="flex items-center space-x-1"
            >
                <Flag locale={locale} />
                <span className='font-bold font-oxygen text-lg'>{label.toUpperCase()}</span>
                <Image src="/icon/arrowDown.svg" alt="arrowDown" width={15} height={15} className={`transition ${open ? 'rotate-180' : ''}`} />
            </div>

            {open && (
                <div className="absolute right-0 top-full mt-2 w-30 rounded-md bg-white shadow-lg flex flex-col text-foreground space-y-2 p-x-2 z-50">
                    {locales?.map(locale => (
                        <Locales onSelect={() => setOpen(false)} locale={locale} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
