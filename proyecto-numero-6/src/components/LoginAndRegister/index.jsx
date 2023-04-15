import React, { useState } from "react";
import { Login } from "./Login.jsx";
import { FormPersonalData } from "../PersonalData/index.jsx";
import Logo from "../../assets/Logo.svg";
import "./LoginAndRegister.css";
import { useNavigate } from "react-router-dom";

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
              <h2>Datos Personales</h2>
              <div
                className={`Form__form-container ${
                  !singUp ? null : "SinUp__container"
                }`}
              >
                <FormPersonalData
                  singUp={singUp}
                  handleSubmit={handleSubmit}
                  textButton="INGRESAR"
                  Width="440px"
                  Height="30px"
                  WidthButton="440px"
                  HeightButton="60px"
                />
              </div>
            </>
          ) : (
            <Login handleSubmit={handleSubmit} />
          )}
          <button onClick={() => setSingUp(!singUp)}>
            {singUp ? "Datos personales" : "Ingresar"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default LoginAndRegister;
