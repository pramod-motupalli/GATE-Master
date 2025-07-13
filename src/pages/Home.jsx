import Navbar from "../components/Navbar";
import { ClipboardCheck, BarChart3, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        // MODIFICATION 1: Use h-screen and overflow-hidden to contain everything
        // This prevents the entire page from scrolling.
        <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-gray-900 text-white">
            {/* Sidebar Navigation */}
            <div>
                <Navbar />
            </div>

            {/* Main Content */}
            {/* MODIFICATION 2: Removed overflow-y-auto */}
            <main className="flex-1">
                {/* Hero Section */}
                {/* MODIFICATION 3: Reduced vertical padding to help content fit */}
                <section className="relative bg-gray-900 py-12 sm:py-16 px-6 text-center isolate">
                    {/* Glowing background effect */}
                    <div
                        className="absolute -top-40 -left-40 -z-10 transform-gpu blur-3xl"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#0ea5e9] to-[#22d3ee] opacity-20"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                        Master GATE with
                        <br />
                        <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                            Targeted Mock Tests
                        </span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Practice with exam-style papers, get instant performance
                        analytics, and conquer your weak areas.
                    </p>
                    <div className="mt-8">
                        <Link
  to="/home"
  className="inline-block rounded-md bg-gradient-to-br from-sky-500 via-cyan-500 to-cyan-100 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 cursor-default"
>
  Start Practicing Now
</Link>

                    </div>
                </section>

                {/* Features Section */}
                {/* MODIFICATION 4: Reduced padding to help content fit */}
                <section className="bg-black h-1/2 py-12 px-6 border-t border-gray-800">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-2 py-4">
                        
                        {/* Feature Cards remain the same, but the reduced padding on the section helps them fit */}
                        <div className="group relative p-10 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-sky-500/50 transition-all duration-300 transform hover:-translate-y-1">
                            {/* ... Card 1 content ... */}
                            <div className="relative">
                                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-700">
                                    <ClipboardCheck className="h-7 w-7 text-sky-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                                    Real GATE-style Papers
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Access mock tests that mirror the real exam pattern and
                                    difficulty.
                                </p>
                            </div>
                        </div>

                        <div className="group relative p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-sky-500/50 transition-all duration-300 transform hover:-translate-y-1">
                            {/* ... Card 2 content ... */}
                            <div className="relative">
                                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-700">
                                    <BarChart3 className="h-7 w-7 text-sky-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                                    Instant Performance Analytics
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Get detailed insights into your strengths and weaknesses after every test.
                                </p>
                            </div>
                        </div>
                        
                        <div className="group relative p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-sky-500/50 transition-all duration-300 transform hover:-translate-y-1">
                           {/* ... Card 3 content ... */}
                           <div className="relative">
                                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-700">
                                    <GraduationCap className="h-7 w-7 text-sky-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                                    Subject-wise Mastery
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Choose tests for each subject to build a strong foundation and master them.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
}