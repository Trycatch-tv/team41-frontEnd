import React, { useState } from "react";
import imgCard from "../../assets/cursosIMG.png";
import { Card } from "../Card";

const dataCursosFake = [
  {
    title: "Programacion básica",
    description:
      "Aprende a crear sitios web impresionantes y domina las últimas tecnologías y herramientas de diseño.",
    by: "{Nombre del profesor}",
  },
  {
    title: "Programacion básica",
    description:
      "Aprende a crear sitios web impresionantes y domina las últimas tecnologías y herramientas de diseño.",
    by: "{Nombre del profesor}",
  },
  {
    title: "Programacion básica",
    description:
      "Aprende a crear sitios web impresionantes y domina las últimas tecnologías y herramientas de diseño.",
    by: "{Nombre del profesor}",
  },
  {
    title: "Programacion básica",
    description:
      "Aprende a crear sitios web impresionantes y domina las últimas tecnologías y herramientas de diseño.",
    by: "{Nombre del profesor}",
  },
  {
    title: "Programacion básica",
    description:
      "Aprende a crear sitios web impresionantes y domina las últimas tecnologías y herramientas de diseño.",
    by: "{Nombre del profesor}",
  },
  {
    title: "Programacion básica",
    description:
      "Aprende a crear sitios web impresionantes y domina las últimas tecnologías y herramientas de diseño.",
    by: "{Nombre del profesor}",
  },
  {
    title: "Programacion básica",
    description:
      "Aprende a crear sitios web impresionantes y domina las últimas tecnologías y herramientas de diseño.",
    by: "{Nombre del profesor}",
  },
  {
    title: "Programacion básica",
    description:
      "Aprende a crear sitios web impresionantes y domina las últimas tecnologías y herramientas de diseño.",
    by: "{Nombre del profesor}",
  },
  {
    title: "Programacion básica",
    description:
      "Aprende a crear sitios web impresionantes y domina las últimas tecnologías y herramientas de diseño.",
    by: "{Nombre del profesor}",
  },
  {
    title: "Programacion básica",
    description:
      "Aprende a crear sitios web impresionantes y domina las últimas tecnologías y herramientas de diseño.",
    by: "{Nombre del profesor}",
  },
  {
    title: "Programacion básica",
    description:
      "Aprende a crear sitios web impresionantes y domina las últimas tecnologías y herramientas de diseño.",
    by: "{Nombre del profesor}",
  },
  {
    title: "Programacion básica",
    description:
      "Aprende a crear sitios web impresionantes y domina las últimas tecnologías y herramientas de diseño.",
    by: "{Nombre del profesor}",
  },
];

const cursosList = ({ toggleModal }) => {
  const [cursos, setCursos] = useState(dataCursosFake);

  /*  useEffect(() => {
    const getCursos = () => {
      fetch("http://localhost:4000/cursos")
        .then((res) => res.json())
        .catch((error) => console.log(error))
        .then((res) => setCursos(res));
    };
    getCursos();
  }, []); */
  return (
    <>
      <div className="group">
        <svg
          className="icon"
          width="34"
          height="38"
          viewBox="0 0 34 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.77775 33.6106C2.01386 33.6106 1.35993 33.3386 0.815958 32.7947C0.271986 32.2507 0 31.5968 0 30.8329V6.88843C0 6.12454 0.25232 5.47061 0.756959 4.92664C1.26157 4.38266 1.7685 4.11068 2.27775 4.11068H10.2083C10.4398 3.13845 10.9583 2.33984 11.7639 1.71484C12.5694 1.08984 13.4815 0.777344 14.5 0.777344C15.537 0.777344 16.456 1.08984 17.2569 1.71484C18.0578 2.33984 18.574 3.13845 18.8055 4.11068H26.7222C27.4861 4.11068 28.14 4.38266 28.684 4.92664C29.228 5.47061 29.5 6.12454 29.5 6.88843V16.4996H26.7222V6.88843H22.6667V12.1662H6.83333V6.88843H2.77775V30.8329H12.5V33.6106H2.77775ZM31.3889 37.3329L26.5555 32.4996C25.963 32.9347 25.3194 33.2472 24.625 33.4371C23.9306 33.6269 23.2222 33.7218 22.5 33.7218C20.4938 33.7218 18.7886 33.0193 17.3843 31.6143C15.9799 30.2094 15.2778 28.5034 15.2778 26.4963C15.2778 24.4892 15.9803 22.7843 17.3852 21.3815C18.7902 19.9787 20.4962 19.2773 22.5033 19.2773C24.5103 19.2773 26.2153 19.9795 27.618 21.3838C29.0208 22.7881 29.7222 24.4934 29.7222 26.4996C29.7222 27.2218 29.6273 27.9347 29.4375 28.6384C29.2477 29.3421 28.9352 29.981 28.5 30.5551L33.3333 35.3885L31.3889 37.3329ZM22.4961 30.944C23.7394 30.944 24.7917 30.5148 25.6528 29.6563C26.5139 28.7978 26.9445 27.7468 26.9445 26.5035C26.9445 25.2601 26.5152 24.2079 25.6567 23.3468C24.7982 22.4857 23.7473 22.0551 22.5039 22.0551C21.2606 22.0551 20.2083 22.4843 19.3472 23.3428C18.4861 24.2013 18.0555 25.2523 18.0555 26.4956C18.0555 27.739 18.4848 28.7912 19.3433 29.6523C20.2018 30.5135 21.2527 30.944 22.4961 30.944ZM15 6.7773C15.4722 6.7773 15.8681 6.61758 16.1875 6.29813C16.5069 5.97869 16.6667 5.58286 16.6667 5.11064C16.6667 4.63841 16.5069 4.24258 16.1875 3.92314C15.8681 3.60369 15.4722 3.44397 15 3.44397C14.5278 3.44397 14.1319 3.60369 13.8125 3.92314C13.4931 4.24258 13.3333 4.63841 13.3333 5.11064C13.3333 5.58286 13.4931 5.97869 13.8125 6.29813C14.1319 6.61758 14.5278 6.7773 15 6.7773Z"
            fill="#1C1B1F"
          />
        </svg>

        <input placeholder="Buscar Curso" type="search" className="input" />
      </div>
      <div className="cursos__Container">
        {cursos?.map((cursos, index) => (
          <Card
            key={index}
            imgSrc={imgCard}
            altImg="Imagen de curso"
            title={cursos.title}
            description={cursos.description}
            by={cursos.by}
            toggleModal={toggleModal}
          />
        ))}
      </div>
    </>
  );
};

export default cursosList;
