import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as loginService } from "../../api/authService";
import { login } from "../../store/authSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (userName === "" && password === "") {
      alert("username and password cannot be empty");
    }
    try {
      const data = await loginService(userName, password);
      if (data) {
        dispatch(login(data.access));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-7 md:gap-10 w-full px-4 text-black"
    >
      <input
        className="md:py-4 md:px-4 py-2 px-2"
        type="text"
        value={userName}
        required
        onChange={(ev) => setUserName(ev.target.value)}
        placeholder="Enter your username"
      />
      <input
        className="md:py-4 md:px-4 py-2 px-2"
        type="password"
        value={password}
        required
        onChange={(ev) => setPassword(ev.target.value)}
        placeholder="Enter your password"
      />
      <Link to="/register" className="text-gray-400">
        Do not have an account ?
      </Link>
      <button type="submit" className="bg-blue-500 md:py-4 md:px-4 py-2 px-2">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
