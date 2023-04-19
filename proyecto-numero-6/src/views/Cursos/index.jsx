import React, {useEffect, useState} from 'react';
import './curso.css'
 
import CursosList from '../../components/Cursos/CursosList';

export default function Cursos() {
  const [cursos,setCursos] = useState([])

  useEffect( () => {
      const getCursos = ()=>{
        fetch ('http://localhost:4000/cursos')
        .then(res=>res.json())
        .then(res=>setCursos(res))
      }
      getCursos()
  },[])
  return (
    <section className="main">
    <div className="main_container">
      <div className="main__text-container">
        <h2 className="main__text">
          en esta seccion van los cursos.
        </h2>
        <div>
          <CursosList cursos = {cursos}></CursosList>
        </div>
      </div>
    </div>
  </section>
  );
}
