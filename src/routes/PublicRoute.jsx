import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
    const isAuthenticated = !!sessionStorage.getItem("access_token");

    return !isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PublicRoute;
