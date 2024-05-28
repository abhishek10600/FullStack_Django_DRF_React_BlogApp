import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateNewBlogPage from "./pages/CreateNewBlogPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login, logout } from "./store/authSlice";
import { getCurrentUser } from "./api/authService";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AdminRoutes from "./components/AdminRoutes";
import { Toaster } from "react-hot-toast";
import BlogPage from "./pages/BlogPage";
import EditBlogPage from "./pages/EditBlogPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      dispatch(logout());
    } else {
      getCurrentUser(authToken).then((userData) => {
        dispatch(login(userData));
      });
    }
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/blog-edit/:id" element={<EditBlogPage />} />

        {/* Protected Routes that allows only logged in user to access */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/new-blog" element={<CreateNewBlogPage />} />
        </Route>
      </Routes>

      <Toaster />
    </>
  );
};

export default App;
