import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register as registerService } from "../../api/authService";
import { login } from "../../store/authSlice";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (password === confirmPassword && password !== "") {
      try {
        const data = await registerService(userName, email, password);
        console.log(data.token.access_token);
        if (data) {
          dispatch(login(data.token.access_token));
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Password and confirm password do not match.");
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
        placeholder="Create a username"
        value={userName}
        onChange={(ev) => setUserName(ev.target.value)}
      />
      <input
        className="md:py-4 md:px-4 py-2 px-2"
        type="email"
        placeholder="Enter a valid email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      />
      <input
        className="md:py-4 md:px-4 py-2 px-2"
        type="password"
        placeholder="Create a password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <input
        className="md:py-4 md:px-4 py-2 px-2"
        type="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(ev) => setConfirmPassword(ev.target.value)}
      />
      <Link to="/login" className="text-gray-400">
        Already have an account ?
      </Link>
      <button type="submit" className="bg-blue-500 md:py-4 md:px-4 py-2 px-2">
        Create account
      </button>
    </form>
  );
};

export default RegisterForm;
