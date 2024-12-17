import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { checkIsAuth, loginUser } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status) toast(status);
    if (isAuth) navigate("/");
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ username, password }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-1/4 h-60 mx-auto mt-40"
    >
      <h1 className="text-lg text-white text-center">Авторизация</h1>
      <label className="text-lg text-gray-400">
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="mt-1 text-black w-full rounded-lg bg-gray-300 border py-1 px-2 text-xs"
        />
      </label>

      <label className="text-lg text-gray-400">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mt-1 text-black w-full rounded-lg bg-gray-300 border py-1 px-2 text-xs"
        />
      </label>

      <button
        type="submit"
        onClick={handleSubmit}
        className="text-lg bg-gray-600 text-white rounded-sm mt-10 py-1.5 px-2.5 ml-12"
      >
        Войти
      </button>

      <Link className="text-white ml-20 underline" to={"/register"}>
        Нет аккаунта?
      </Link>
    </form>
  );
};
