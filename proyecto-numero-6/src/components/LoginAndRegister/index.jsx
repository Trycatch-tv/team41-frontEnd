import React, { useState } from "react";
import { Login } from "./Login.jsx";
import { FormPersonalData } from "../PersonalData/index.jsx";
import Logo from "../../assets/Logo.svg";
import "./LoginAndRegister.css";

function LoginAndRegister() {
  const [singUp, setSingUp] = useState(false);
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
                <FormPersonalData singUp={singUp} />
              </div>
            </>
          ) : (
            <Login />
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
