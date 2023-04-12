import CardTopic from "../CardTopic";
import "./Topics.css";

export default function Topics() {
  return (
    <section className="topics">
      <h2 className="topics__title">
        Descubre nuestras temáticas de cursos y especializate en el área que más
        te interese.
      </h2>
      <div className="topics__content">
        <CardTopic
          img={"src/assets/web.png"}
          alt={"ilustracion de pagina web"}
          title={"Desarrollo Web"}
          description={
            "Aprende a crear sitios web impresionantes y domina las últimas tecnologías y herramientas de diseño."
          }
        />

        <CardTopic
          img={"src/assets/cloud.png"}
          alt={"ilustracion de Cloud Computing"}
          title={"Cloud Computing"}
          description={
            "Aprende a utilizar servicios en la nube para optimizar tus operaciones de TI y mejorar la disponibilidad y escalabilidad de tus aplicaciones y servicios."
          }
        />

        <CardTopic
          img={"src/assets/data-science.png"}
          alt={"ilustracion de Ciencia de Datos"}
          title={"Ciencia de Datos"}
          description={
            "Aprende a recolectar, procesar y analizar grandes cantidades de datos para obtener información valiosa y tomar decisiones informadas."
          }
        />
      </div>
    </section>
  );
}
