import React from "react";
import { StartRate } from "../StratRate";
import { Button } from "../Button2";
import imgInfo from "../../assets/cursosIMG.png";
import "./CourseInfo.css";

function Curseinformation({ toggleModal }) {
  return (
    <div className="courseInfo__container">
      <img src={imgInfo} alt="img course" />
      <div className="courseInfo__text">
        <div className="courseInfo__head">
          <div>
            <h2>Programacion básica</h2>
            <h3>Profesor: Juan Pelaez</h3>
          </div>
          <button className="courseInfo__close" onClick={toggleModal}>
            X
          </button>
        </div>
        <p>
          Introducción a los conceptos fundamentales de programación y lenguajes
          de programación, con énfasis en la escritura y depuración de programas
          simples utilizando Python o Java. Se cubrirán temas como estructuras
          básicas de programación, tipos de datos, variables, operadores,
          estructuras de control de flujo, funciones, arreglos y listas.
          Adecuado para principiantes y aquellos que deseen repasar los
          conceptos básicos.
        </p>
        <span>¡Valorado por 123 usuarios!</span>
        <div className="courseInfo__Stars">
          <p>Promedio:</p>
          <StartRate totalStars={5} />
        </div>
        <div className="courseInfo__buttons">
          <Button
            background_Color="#20AFFF"
            textButton="REGISTRARSE"
            Width="211px"
            Height="51px"
          />
          <a>Comentarios</a>
        </div>
      </div>
    </div>
  );
}

export { Curseinformation };
