import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, Loader2, AlertCircle, UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setIsLoading(true);
        try {
            const res = await fetch(
                "https://gate-master-backend.onrender.com/register",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, password }),
                }
            );

            const contentType = res.headers.get("content-type");
            let data;
            if (contentType && contentType.includes("application/json")) {
                data = await res.json();
            } else {
                const text = await res.text();
                throw new Error(text || res.statusText);
            }

            if (res.ok) {
                // On success, redirect to login page.
                // A toast notification could be added here for better UX.
                navigate("/login");
            } else {
                setError(data.message || "An unknown error occurred.");
            }
        } catch (err) {
            console.error("Signup error:", err);
            setError(err.message || "Network error. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden relative px-4">
            {/* Animated background blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md p-8 space-y-8 rounded-2xl shadow-2xl backdrop-blur-lg bg-black/30 border border-white/10 z-10"
            >
                <div className="text-center">
                    <div className="inline-block p-3 bg-purple-500/20 rounded-full mb-4">
                        <UserPlus className="text-purple-400 w-10 h-10" />
                    </div>
                    <h1 className="text-4xl font-bold text-white tracking-tight">
                        Create an Account
                    </h1>
                    <p className="mt-2 text-slate-400">
                        Join us and start your journey.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text" value={name} onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name" required
                            className="w-full pl-12 pr-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                        />
                    </div>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address" required
                            className="w-full pl-12 pr-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password" required
                            className="w-full pl-12 pr-12 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-purple-400 transition-colors">
                            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                        </button>
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password" required
                            className="w-full pl-12 pr-12 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                        />
                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-purple-400 transition-colors">
                            {showConfirmPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                        </button>
                    </div>

                     {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 p-3 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30"
                        >
                            <AlertCircle size={20} />
                            <p className="text-sm">{error}</p>
                        </motion.div>
                    )}

                    <button
                        type="submit" disabled={isLoading}
                        className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="animate-spin" />
                                <span>Creating Account...</span>
                            </>
                        ) : (
                            "Sign Up"
                        )}
                    </button>

                    <div className="text-sm text-center text-slate-400">
                        <span className="mr-2">Already have an account?</span>
                        <button
                            type="button" onClick={() => navigate("/login")}
                            className="font-medium text-purple-400 hover:text-purple-300 underline underline-offset-2"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}