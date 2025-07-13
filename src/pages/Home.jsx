import Navbar from "../components/Navbar";
import { ClipboardCheck, BarChart3, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

export default function Home() {
    const featureCardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
            },
        }),
    };

    const features = [
        {
            icon: ClipboardCheck,
            title: "Real GATE-style Papers",
            description: "Access mock tests that mirror the real exam pattern and difficulty.",
        },
        {
            icon: BarChart3,
            title: "Instant Performance Analytics",
            description: "Get detailed insights into your strengths and weaknesses after every test.",
        },
        {
            icon: GraduationCap,
            title: "Subject-wise Mastery",
            description: "Choose tests for each subject to build a strong foundation and master them.",
        },
    ];

    return (
        // Root container: Uses flex, fills the screen, and prevents page-level scrolling.
        <div className="flex flex-col md:flex-row h-screen bg-slate-900 text-white overflow-hidden">
            <Navbar />

            {/* Main Content: Takes remaining space and allows its own content to scroll vertically. */}
            <main className="flex-1 overflow-y-auto">
                {/* Hero Section */}
                <section className="relative text-center px-6 py-16 sm:py-24 isolate overflow-hidden">
                    {/* 
                        FIX: The 'overflow-hidden' class on this section is the key. 
                        It clips the decorative background element below, preventing it 
                        from extending beyond the section's bounds and causing a horizontal scrollbar.
                    */}
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu blur-3xl"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0ea5e9] to-[#67e8f9] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent">
                            Master GATE with
                            <br />
                            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                                Targeted Mock Tests
                            </span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                            Practice with exam-style papers, get instant performance
                            analytics, and conquer your weak areas.
                        </p>
                        <div className="mt-10">
                            <Link
                                to="/tests" // A more logical link destination
                                className="inline-block rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                            >
                                Start Practicing Now
                            </Link>
                        </div>
                    </motion.div>
                </section>

                {/* Features Section */}
                <section className="bg-slate-900/50 py-16 sm:py-24 px-6 border-t border-slate-800">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={featureCardVariants}
                                className="group relative p-8 rounded-2xl border border-slate-800 bg-slate-900/80 transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-1"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                                <div className="relative">
                                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                                        <feature.icon className="h-6 w-6 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-400">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}