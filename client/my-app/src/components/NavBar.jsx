import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { checkIsAuth, logout } from "../redux/features/auth/authSlice.js";

export const NavBar = () => {
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();

  const activeStyles = {
    color: "white",
  };

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
  };

  return (
    <div className="flex py-4 justify-between items-center">
      <span className="flex justify-center items-center w-6 h-6 bg-gray-600 text-sx text-white rounded-sm">
        E
      </span>

      {isAuth && (
        <ul className="flex gap-8">
          <li>
            <NavLink
              to={"/"}
              href="/"
              className="text-lg text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/posts"}
              href="/"
              className="text-lg text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Мои посты
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/new"}
              href="/"
              className="text-lg text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Создать пост
            </NavLink>
          </li>
        </ul>
      )}

      <div className="flex justify-center items-center bg-gray-600 text-lg text-white rounded-sm px-4 py-2">
        {isAuth ? (
          <button onClick={logoutHandler}>Выйти</button>
        ) : (
          <Link to={"/login"}>Войти</Link>
        )}
      </div>
    </div>
  );
};
