import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login, logout } from "./store/authSlice";
import { getCurrentUser } from "./api/authService";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      dispatch(logout());
    } else {
      getCurrentUser(authToken).then((userData) => dispatch(login(userData)));
    }
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
