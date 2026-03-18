import { Button } from "@/components/ui";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
    return (
        <section className="flex flex-col items-center gap-6 bg-primary-500 py-20 flex justify-center items-center mb-6">
            <h3 className="text-center text-3xl text-white/80 w-[62%] ">
                Ready to begin planning your next adventure? Contact our explorations team to arrange a discovery conversation
            </h3>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=Sasotarek106@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button className=" inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-white/30 backdrop-blur-sm text-white/80 cursor-pointer focus:border-none focus:outline-none">
                    <Mail />
                    Contact Us
                </Button>
            </Link>
        </section>
    );
}