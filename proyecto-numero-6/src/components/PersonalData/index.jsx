import React, { useState } from "react";
import { Input } from "../Input";
import  {Button}  from "../Button2";

function FormPersonalData() {
  const [name, setName] = useState({ field: "", error: false });
  const [lastname, setlastname] = useState({ field: "", error: false });
  const [age, setAge] = useState({ field: "", error: false });
  const [studies, setStudies] = useState({ field: "", error: false });
  return (
    <>
      <form action="/">
        <Input
          labelString="Nombre"
          inputType="text"
          inputName="Nombre"
          inputId="nombre"
          inputPlaceHolder="Nombre"
          Width="440px"
          Height="30px"
          estado={name}
          setState={setName}
          errors="Mensaje de error"
        />
        <Input
          labelString="Apellido"
          inputType="text"
          inputName="Apellido"
          inputId="apellido"
          inputPlaceHolder="Apellido"
          Width="440px"
          Height="30px"
          estado={lastname}
          setState={setlastname}
          errors="Mensaje de error"
        />
        <Input
          labelString="Edad"
          inputType="number"
          inputName="Edad"
          inputId="edad"
          inputPlaceHolder="Edad"
          Width="440px"
          Height="30px"
          estado={age}
          setState={setAge}
          errors="Mensaje de error"
        />
        <Input
          labelString="Carrera"
          inputType="text"
          inputName="Carrera"
          inputId="carrera"
          inputPlaceHolder="Carrera"
          Width="440px"
          Height="30px"
          estado={studies}
          setState={setStudies}
          errors="Mensaje de error"
        />
      </form>
      <Button
        textButton="INGRESAR"
        background_Color="#20AFFF"
        Width="440px"
        Height="60px"
      />
    </>
  );
}

export { FormPersonalData };
