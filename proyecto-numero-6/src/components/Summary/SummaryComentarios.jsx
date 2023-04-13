import React from "react";

function SummaryComentarios({ data }) {
  return (
    <details className="container-summary">
      <summary>{data?.Title}</summary>
      <div>
        {data?.Comentarios?.map((comment) => (
          <div>
            <div key={comment.id}>
              <h2>{comment.comentarioTitle}</h2>
              <p>{comment.comentario}</p>
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}

export { SummaryComentarios };
