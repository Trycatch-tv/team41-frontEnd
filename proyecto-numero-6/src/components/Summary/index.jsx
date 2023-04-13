import React from "react";

function Summary({ data }) {
  return (
    <details className="container-summary">
      <summary>{data?.Title}</summary>
      <div>
        {data?.cursos.map((curso) => (
          <div>
            <div key={curso.id}>
              <h2>{curso.Nombre}</h2>
              <p>{curso.Fecha}</p>
            </div>
            <button>Retirar</button>
          </div>
        ))}
      </div>
    </details>
  );
}

export { Summary };
