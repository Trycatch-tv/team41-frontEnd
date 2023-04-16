import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "./Login.jsx";
import { FormPersonalData } from "../PersonalData/index.jsx";
import { Register } from "./Register.jsx";
import Logo from "../../assets/Logo.svg";
import "./LoginAndRegister.css";

function LoginAndRegister() {
  const [singUp, setSingUp] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <section>
      <div className="Logins__container">
        <img src={Logo} alt="Logo campus360" />
        <div
          className={`Form__container ${
            singUp ? "" : "Form__sinUp-container"
          } `}
        >
          {singUp ? (
            <>
              <h2>Registrarse</h2>
              <div
                className={`Form__form-container ${
                  !singUp ? null : "SinUp__container"
                }`}
              >
                <Register />
              </div>
            </>
          ) : (
            <Login handleSubmit={handleSubmit} />
          )}
          <button onClick={() => setSingUp(!singUp)}>
            {singUp ? "Ingresar" : "Registrarse"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default LoginAndRegister;
