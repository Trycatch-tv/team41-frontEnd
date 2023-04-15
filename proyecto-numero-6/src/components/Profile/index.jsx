import React from "react";
import { FormPersonalData } from "../PersonalData";
import { Summary } from "../Summary";
import { SummaryComentarios } from "../Summary/SummaryComentarios";
import { useNavigate } from "react-router-dom";

const cursosInscritos = {
  Title: "Cursos inscritos",
  cursos: [
    {
      Nombre: "Nombre del curso",
      Fecha: "Fecha",
      id: "2",
    },
    {
      Nombre: "Nombre del curso",
      Fecha: "Fecha",
      id: "2",
    },
  ],
};
const comentarios = {
  Title: "Comentarios",
  Comentarios: [
    {
      comentarioTitle: "Comentario",
      comentario: "Nombre del curso - Fecha",
      id: "3",
    },
    {
      comentarioTitle: "Comentario",
      comentario: "Nombre del curso - Fecha",
      id: "4",
    },
  ],
};

function Profile() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/")
  };
  return (
    <>
      <div>
        <h2>Datos Personales</h2>
        <FormPersonalData
          textButton="Guardar"
          WidthButton="168px"
          HeightButton="51px"
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="summary__Container">
        <Summary data={cursosInscritos} />
        <SummaryComentarios data={comentarios} />
      </div>
    </>
  );
}

export { Profile };
