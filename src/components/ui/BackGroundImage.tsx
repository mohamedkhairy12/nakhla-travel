export default function BackGroundImage({ children, className, image, opacity = 1 }: { children: React.ReactNode, className?: string, image?: string, opacity?: number }) {
    return (
        <section className={`relative md:min-h-[85dvh] min-h-[100dvh] bg-black overflow-hidden ${className}`} style={{ clipPath: 'inset(0 0 0 0)' }}>
            <div
                className="fixed top-0 left-0 w-full h-full bg-bottom bg-cover bg-no-repeat bg-[length:100%_auto]"
                style={{
                    backgroundImage: image ? `url('${image}')` : undefined,
                    opacity: opacity
                }}
            />
            <div className="relative z-10 w-full md:min-h-[85dvh] min-h-[100dvh] flex flex-col items-center justify-center ">
                {children}
            </div>
        </section>
    );
}