import { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function Header({}) {
  const [isActive, setIsActive] = useState(false);

  const handleToggleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  let isAuth = false;
  return (
    <>
      <header className="header">
        <div className="header__container">
          <NavLink to="/">
            <img
              className="header__logo"
              src="src\assets\logo-navbar.png"
              alt="logo"
            />
          </NavLink>

          <label
            htmlFor="burger"
            className={`burger label ${isActive ? "burger--active" : ""}`}
            onClick={handleToggleClick}
          >
            <span className="active"></span>
            <span className="active"></span>
            <span className="active"></span>
          </label>

          <nav className={`nav ${isActive ? "nav--active" : ""}`}>
            <NavLink
              style={({ isActive }) => ({
                textDecorationLine: isActive ? "underline" : "none",
              })}
              to="/cursos"
              className="nav__item"
              onClick={handleToggleClick}
            >
              Cursos
            </NavLink>

            {!isAuth ? (
              <NavLink
                style={({ isActive }) => ({
                  textDecorationLine: isActive ? "underline" : "none",
                })}
                to="/registro"
                className="nav__item"
                onClick={handleToggleClick}
              >
                Login
              </NavLink>
            ) : (
              ""
            )}

            {isAuth ? (
              <NavLink
                style={({ isActive }) => ({
                  textDecorationLine: isActive ? "underline" : "none",
                })}
                to="/perfil"
                className="nav__item"
              >
                Perfil
              </NavLink>
            ) : (
              ""
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
