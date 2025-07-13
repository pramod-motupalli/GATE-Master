import { useState } from "react"
import { Mail, Lock } from "lucide-react" // Optional icons

export default function ResetPasswordSimple() {
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [msg, setMsg] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch("http://localhost:5000/api/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, newPassword })
    })

    const data = await res.json()
    setMsg(data.message)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 px-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div className="flex items-center border rounded-md overflow-hidden">
              <span className="px-3 text-gray-500"><Mail size={18} /></span>
              <input
                type="email"
                className="w-full p-2 outline-none"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <div className="flex items-center border rounded-md overflow-hidden">
              <span className="px-3 text-gray-500"><Lock size={18} /></span>
              <input
                type="password"
                className="w-full p-2 outline-none"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Update Password
          </button>

          {msg && (
            <p className={`text-center font-medium ${msg.includes("success") ? "text-green-600" : "text-red-600"}`}>
              {msg}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
