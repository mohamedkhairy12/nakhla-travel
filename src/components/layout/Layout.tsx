import Footer from "./Footer";
import Header from "./Header";
import WhatsApp from "./WhatsApp";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 relative">
            {children}
            <WhatsApp />

        </main>
        <Footer />
    </div>
}
