import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const AdminRoutes = () => {
  const userData = useSelector((state) => state.auth.userData);
  return userData.is_staff ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoutes;
