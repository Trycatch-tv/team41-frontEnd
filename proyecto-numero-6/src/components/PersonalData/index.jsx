import React, { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button2";

function FormPersonalData({
  handleSubmit,
  textButton,
  Width,
  Height,
  WidthButton,
  HeightButton,
}) {
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
          Width={Width}
          Height={Height}
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
          Width={Width}
          Height={Height}
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
          Width={Width}
          Height={Height}
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
          Width={Width}
          Height={Height}
          estado={studies}
          setState={setStudies}
          errors="Mensaje de error"
        />
      <Button
        handleSubmit={handleSubmit}
        textButton={textButton}
        background_Color="#20AFFF"
        Width={WidthButton}
        Height={HeightButton}
      />
      </form>
    </>
  );
}

export { FormPersonalData };
