import React, { useState } from "react";
import { Input } from "../Input";
import {Button} from "../Button2";

function Login({handleSubmit}) {
  const [usuario, setUsuario] = useState({ field: "", error: false });
  const [correo, setCorreo] = useState({ field: "", error: false });
  const [error, setError] = useState(false);
  return (
    <>
      <h2>Ingresa</h2>
      <div className="Form__form-container">
        <form action="/">
          <Input
            labelString="Usuario"
            inputType="text"
            inputName="usuario"
            inputId="usuario"
            inputPlaceHolder="Usuario"
            Width="440px"
            Height="40px"
            estado={usuario}
            setState={setUsuario}
            errors="Mensaje de error"
          />
          <Input
            labelString="Correo"
            inputType="email"
            inputName="Correo"
            inputId="email"
            inputPlaceHolder="Correo"
            Width="440px"
            Height="40px"
            estado={correo}
            setState={setCorreo}
            errors="Mensaje de error"
          />
        </form>
        <Button
          handleSubmit={handleSubmit}
          textButton="INGRESAR"
          background_Color="#20AFFF"
          Width="440px"
          Height="60px"
        />
        {error ? (
          <p style={{ color: "red", marginTop: "20px", fontWeight: "bold" }}>
            Hubo un error
          </p>
        ) : null}
      </div>
    </>
  );
}

export { Login };
