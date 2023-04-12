import PropTypes from "prop-types";
import "./CardTopic.css";

export default function CardTopic({ img, alt, title, description }) {
  return (
    <div className="card-topic">
      <div className="card-topic__img-container">
        <img className="card-topic__img" src={img} alt={alt} />
      </div>
      <h2 className="card-topic__title">{title}</h2>
      <h3 className="card-topic__description">{description}</h3>
    </div>
  );
}

CardTopic.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
