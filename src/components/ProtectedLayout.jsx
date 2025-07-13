import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedLayout() {
    const token = localStorage.getItem("gateauthToken");
    const expiry = localStorage.getItem("gateauthTokenExpiry");

    if (!token || !expiry) {
        localStorage.removeItem("gateauthToken");
        localStorage.removeItem("gateauthTokenExpiry");
        return <Navigate to="/login" replace />;
    }

    if (Date.now() > parseInt(expiry)) {
        // Token expired
        localStorage.removeItem("gateauthToken");
        localStorage.removeItem("gateauthTokenExpiry");
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
