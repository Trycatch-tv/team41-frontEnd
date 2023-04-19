
import React from 'react'
import CardTopic from '../CardTopic';
import './cursos.css'
import datascience from '../../assets/cloud.png';

   const cursosList = ({cursos}) => {
    
      return (
        
        <>
              
          {cursos?.map ((cursos,index)=>(
              <div key = {index}>
                  <CardTopic key={index} img={datascience} alt='ni idea' title={cursos.nombreCurso} description={cursos.descripcion}  /> 
              </div>
          ))
          }
         </>
      );
   }

   export default cursosList;
  
