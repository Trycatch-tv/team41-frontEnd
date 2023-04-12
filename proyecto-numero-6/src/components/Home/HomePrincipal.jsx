import Button from "../Button";
import "./HomePrincipal.css";

export default function HomePrincipal() {
  return (
    <section className="main">
      <div className="main_container">
        <div className="main__text-container">
          <h2 className="main__text">
            ¡Bienvenido a CAMPUS360, la plataforma educativa que te llevará más
            allá de tus límites! Únete a nuestra comunidad y descubre el poder
            del conocimiento.
          </h2>
        </div>
        <Button label="INGRESA AHORA MISMO" size={"lg"} />
      </div>
    </section>
  );
}
