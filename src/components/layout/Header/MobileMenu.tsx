import Link from "next/link";
import { routes } from "./constants";
import { useEffect, useRef } from "react";

const MobileMenu = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
    const ref = useRef<HTMLDivElement>(null);
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
        <div ref={ref} className="absolute right-0 mt-2 w-30 rounded-md bg-white shadow-lg flex flex-col text-foreground z-50">
            <ul className="flex flex-col gap-2">
                {routes.map((route) => (
                    <li key={route.name} className='hover:opacity-70 transition-opacity duration-200 px-2 py-1'>
                        <Link href={route.href}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileMenu;