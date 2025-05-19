import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
    const isAuthenticated = !!sessionStorage.getItem("access_token");

    return isAuthenticated ? <Navigate to="/app" replace /> : children;
};

export default PublicRoute;
