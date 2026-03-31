import { useTranslation } from "next-i18next";
import Link from "next/link";
import { routes } from "./constants";
import { useEffect, useRef } from "react";
import Locales from "./locales";
import { useRouter } from "next/router";

const MobileMenu = ({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
}) => {
    const { t } = useTranslation("common");
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [setOpen]);

    const { locales } = useRouter();

    return (
        <>
            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            <div
                ref={ref}
                className={`
          fixed
          top-0
          right-0
          z-50
          h-screen
          w-[70%]
          bg-white
          shadow-lg
          text-foreground
          p-4
          transform
          transition-transform
          duration-300
          ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
            >
                <ul className="flex flex-col gap-2 relative after:content-[''] after:absolute after:w-[90%] after:h-[1px] after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:-mb-3 after:bg-gray-300">
                    {routes.map((route) => (
                        <li
                            key={route.name}
                            className="px-2 py-1 transition-opacity duration-200 hover:opacity-70"
                        >
                            <Link className="text-lg" href={route.href} onClick={() => setOpen(false)}>{t(`nav.${route.name.toLowerCase()}`)}</Link>
                        </li>
                    ))}
                </ul>

                <div className="px-3 py-8">
                    {locales?.map((locale) => (
                        <Locales
                            key={locale}
                            locale={locale}
                            onSelect={() => setOpen(false)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
export default MobileMenu;
