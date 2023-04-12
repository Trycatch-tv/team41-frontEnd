import React, { useState } from "react";

function Input({
  labelString,
  inputType,
  inputName,
  inputId,
  inputPlaceHolder,
  errors,
  estado,
  setState,
  Width,
  Height,
}) {
  const onChange = (e) => {
    setState({ ...estado, field: e.target.value });
  };
  return (
    <>
      <label htmlFor={inputId}>{labelString}</label>
      <input
        className={`${estado?.error ? null : "input__Error"}`}
        style={{ width: Width, height: Height, border: "none" }}
        type={inputType}
        name={inputName}
        id={inputId}
        placeholder={inputPlaceHolder}
        onChange={onChange}
      />
      {estado?.error ? <p>{errors}</p> : null}
    </>
  );
}

export { Input };
