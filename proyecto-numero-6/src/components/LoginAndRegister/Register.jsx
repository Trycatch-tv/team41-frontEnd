import React, { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button2";
import { FormPersonalData } from "../PersonalData";

function Register() {
  const [changeReister, setChangeRegister] = useState(false);
  const [correo, setCorreo] = useState({ field: "", error: false });
  const [contraseña, setContraseña] = useState({ field: "", error: false });
  const [repetContraseña, setRepetContraseña] = useState({
    field: "",
    error: false,
  });

 
  const handleSubmit = (e) => {
    e.preventDefault();
    setChangeRegister(!changeReister);
  };
  return (
    <div className="Form__form-container">
      {changeReister ? (
        <FormPersonalData
          handleSubmit={handleSubmit}
          textButton="Registrarse"
          Width="440px"
          Height="30px"
          WidthButton="440px"
          HeightButton="60px"
        />
      ) : (
        <form action="">
          <Input
            labelString="Correo"
            inputType="email"
            inputName="correo"
            inputId="correo"
            inputPlaceHolder="Correo"
            Width="440px"
            Height="40px"
            estado={correo}
            setState={setCorreo}
          />
          <Input
            labelString="Contraseña"
            inputType="password"
            inputName="password"
            inputId="password"
            inputPlaceHolder="Contraseña"
            Width="440px"
            Height="40px"
            estado={contraseña}
            setState={setContraseña}
            Autocomplete=""
          />
          <Input
            labelString="Contraseña"
            inputType="password"
            inputName="password2"
            inputId="password2"
            inputPlaceHolder="Contraseña"
            Width="440px"
            Height="40px"
            estado={repetContraseña}
            setState={setRepetContraseña}
          />
          <Button
            handleSubmit={handleSubmit}
            textButton="Continuar"
            background_Color="#20AFFF"
            Width="440px"
            Height="60px"
          />
        </form>
      )}
    </div>
  );
}

export { Register };
