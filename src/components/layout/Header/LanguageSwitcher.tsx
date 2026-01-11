import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import Flag from './flag';

type DropdownProps = {
    label?: string;
    onSelect?: (value: string) => void;
};

const LanguageSwitcher = ({ label = 'EN', onSelect }: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const router = useRouter();
    const { locales, locale, pathname, query, asPath } = router;

    // Close on outside click
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
        <div ref={ref} className="relative inline-block text-left cursor-pointer">
            {/* Toggel Menu */}
            <div
                onClick={() => setOpen(prev => !prev)}
                className="flex items-center space-x-1"
            >
                <Flag locale={locale} />
                <span>{label.toUpperCase()}</span>
                <Image src="/icon/arrowDown.svg" alt="arrowDown" width={10} height={10} className={`transition ${open ? 'rotate-180' : ''}`} />
            </div>

            {/* Menu */}
            {open && (
                <div className="absolute right-0 mt-2 w-30 rounded-md bg-white shadow-lg flex flex-col text-foreground space-y-2 p-x-2 z-50">
                    {locales?.map(locale => (
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
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
