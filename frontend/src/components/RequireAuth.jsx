import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("token"); // or your auth logic
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;