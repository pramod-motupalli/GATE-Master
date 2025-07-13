import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(
                "https://gate-master-backend.onrender.com/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                }
            );

            const contentType = res.headers.get("content-type");
            let data;
            if (contentType && contentType.includes("application/json")) {
                data = await res.json();
            } else {
                const text = await res.text();
                data = { message: text || res.statusText };
            }

            if (res.ok) {
                // ✅ Save the token (assuming backend sends { token: 'xyz' })
                if (data.token) {
                    console.log(data.token);
                    localStorage.setItem("gateauthtoken", data.token);
                }

                alert(data.message || "Login successful!");
                navigate("/home"); // or your protected route
            } else {
                alert(`Login failed: ${data.message}`);
            }
        } catch (err) {
            console.error("Network or parsing error:", err);
            alert("Network error, please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl"
            >
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Sign in to your account
                </p>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
                    >
                        Sign In
                    </button>
                </div>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Don't have an account?{" "}
                    <button
                        onClick={() => navigate("/signup")}
                        className="text-blue-600 underline cursor-pointer"
                    >
                        Sign up
                    </button>
                </p>
                <div className="text-center">
                    <button
                        onClick={() => navigate("/resetpassword")}
                        className="text-blue-500 underline cursor-pointer"
                    >
                        reset password
                    </button>
                </div>
            </form>
        </div>
    );
}
