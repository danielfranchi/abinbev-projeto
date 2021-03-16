import React, { useEffect, useState } from "react";
import { StoreToken } from "../../store/ducks/userLogin/types";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.css";

const Header = () => {
  const role = useSelector((state: StoreToken) => state.dateToken.role);

  const [token, setToken] = useState(false);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (role === "admin") {
      setAdmin(true);
    }
  }, [role]);

  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem("token");

    if (tokenLocalStorage !== null) {
      setToken(true);
    } else {
      setToken(false);
    }
  }, []);

  const removeToken = () => {
    localStorage.clear();
  };

  return (
    <header className="menu-bg">
      <div className="menu">
        <div className="menu-logo">
          <h1>Beer Emporium Administrator</h1>
        </div>

        {token && (
          <nav className="menu-nav">
            <ul>
              <li>
                <NavLink to="/product" exact>
                  Produtos
                </NavLink>
              </li>
              {admin && (
                <li>
                  <NavLink to="/user" exact>
                    Usuarios
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink to="/home" exact>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/" exact onClick={removeToken}>
                  Sair
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
