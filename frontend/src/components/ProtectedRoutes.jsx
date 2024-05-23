import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const authStatus = useSelector((state) => state.auth.status);
  return authStatus ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
