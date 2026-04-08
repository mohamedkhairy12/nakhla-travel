import { useEffect, useState } from "react";
import { Button } from "@/components/ui";
import SelectedCheckBox from "./components/selectedCheckBox";
import { motion } from "framer-motion";
import BackGroundImage from "@/components/ui/BackGroundImage";

export default function ContactUs() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [label, setLabel] = useState<string>("Enquire Now");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus("loading");
        setLabel("Sending...");
        const formData = new FormData(form);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            travelDates: formData.get("travelDates"),
            travelers: formData.get("travelers"),
            stayLength: formData.get("stayLength"),
            experiences: formData.getAll("experiences"),
            travelStyle: formData.getAll("travelStyle"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (res.statusText === "OK") {
                setStatus("success");
                setLabel("Message Sent!");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };
    useEffect(() => {
        if (label === "Message Sent!") {
            const timer = setTimeout(() => {
                setLabel("Enquire Now");
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [label])
    const experiences = [
        "Cultural & Historical Exploration",
        "Nile Cruise / Dahabiya",
        "Desert Experiences",
        "Honeymoon",
        "Family Holidays",
        "Spiritual Journeys",
        "Red Sea & Coastal Retreats"
    ];
    const travelStyle = [
        "Comfort",
        "Luxury",
        "Boutique",
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <BackGroundImage image="/images/category_weekend-main_banner-ar-dt_2.jpg" opacity={0.8}>
            <section className="flex flex-col items-center backdrop-blur-lg w-[70%] py-4 rounded-2xl overflow-hidden" id="contact">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-sm md:text-3xl md:my-4 text-white/80 w-[100%] md:w-[90%] font-kaisei"
                >
                    Ready to begin planning your next adventure? Contact our explorations team to arrange a discovery conversation
                </motion.h3>

                <motion.form
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    onSubmit={handleSubmit}
                    className="w-[90%] md:w-[60%] lg:w-[45%] flex flex-col gap-4 mt-4 md:mt-12"
                >
                    <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="flex-1 px-4 py-2 md:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                        />
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
                        <input
                            name="phone"
                            type="number"
                            placeholder="Your Phone Number"
                            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                        />
                        <input
                            type="number"
                            name="travelers"
                            placeholder="Number of Travelers"
                            min="1"
                            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 flex flex-col gap-1">
                            <span className="text-white/40 text-xs ml-1">Preferred Travel Date</span>
                            <input
                                type="date"
                                name="travelDates"
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <span className="text-white/40 text-xs ml-1">Length of Stay (days)</span>
                            <input
                                type="number"
                                name="stayLength"
                                placeholder="Length of Stay"
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                            />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col gap-3">
                        <p className="text-white/80 text-sm font-medium">Please select the experiences that inspire you:</p>
                        <div className="flex flex-wrap gap-3">
                            {experiences.map((exp) => (
                                <SelectedCheckBox key={exp} label={exp} name="experiences" />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col gap-3">
                        <p className="text-white/80 text-sm font-medium">Please select Your Travel Style:</p>
                        <div className="flex flex-wrap gap-3">
                            {travelStyle.map((style) => (
                                <SelectedCheckBox key={style} label={style} name="travelStyle" />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 mt-4">
                        <Button
                            type="submit"
                            disabled={status === "loading"}
                            className="px-12 py-4 rounded-full text-primary-500 font-bold tracking-wider uppercase text-sm transition-all hover:scale-105 cursor-pointer"
                        >
                            {label}
                        </Button>

                        {status === "error" && (
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-300 text-sm"
                            >
                                Failed to send message. Please try again or email us directly.
                            </motion.span>
                        )}
                    </motion.div>
                </motion.form>
            </section>
        </BackGroundImage>
    );
}
