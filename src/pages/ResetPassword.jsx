import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Loader2, AlertCircle, CheckCircle, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function ResetPasswordPage() {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [status, setStatus] = useState({ message: "", type: "" }); // { message, type: 'success' | 'error' }
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ message: "", type: "" });
        setIsLoading(true);

        try {
            const res = await fetch(
                "https://gate-master-backend.onrender.com/api/reset-password",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, newPassword }),
                }
            );

            const data = await res.json();

            if (res.ok) {
                setStatus({ message: data.message || "Password updated successfully!", type: "success" });
                setEmail(""); // Clear form on success
                setNewPassword("");
            } else {
                setStatus({ message: data.message || "Failed to update password.", type: "error" });
            }
        } catch (err) {
            console.error("Reset password error:", err);
            setStatus({ message: "A network error occurred. Please try again.", type: "error" });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden relative px-4">
            {/* Animated background blobs (maintaining theme consistency) */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md p-8 space-y-8 rounded-2xl shadow-2xl backdrop-blur-lg bg-black/30 border border-white/10 z-10"
            >
                <div className="text-center">
                    <div className="inline-block p-3 bg-green-500/20 rounded-full mb-4">
                        <RefreshCw className="text-green-400 w-10 h-10" />
                    </div>
                    <h1 className="text-4xl font-bold text-white tracking-tight">
                        Reset Password
                    </h1>
                    <p className="mt-2 text-slate-400">
                        Enter your email and a new secure password.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address" required
                            className="w-full pl-12 pr-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type={showPassword ? "text" : "password"} value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="New Password" required
                            className="w-full pl-12 pr-12 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-green-400 transition-colors">
                            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                        </button>
                    </div>

                    {status.message && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex items-center gap-3 p-3 rounded-lg border ${
                                status.type === 'success'
                                ? 'bg-green-500/20 text-green-400 border-green-500/30'
                                : 'bg-red-500/20 text-red-400 border-red-500/30'
                            }`}
                        >
                            {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                            <p className="text-sm font-medium">{status.message}</p>
                        </motion.div>
                    )}

                    <button
                        type="submit" disabled={isLoading}
                        className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-teal-600 to-green-500 text-white py-3 rounded-lg font-semibold shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="animate-spin" />
                                <span>Updating...</span>
                            </>
                        ) : (
                            "Update Password"
                        )}
                    </button>

                    <div className="text-center">
                        <button
                            type="button" onClick={() => navigate("/login")}
                            className="text-sm font-medium text-green-400 hover:text-green-300 transition"
                        >
                           Back to Sign In
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}