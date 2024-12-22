// eslint-disable-next-line react/prop-types
const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <h3><strong>{title}</strong></h3>
      <p>{description}</p>
      <p><strong>Press to Contact!</strong></p>
    </div>
  );
};

export default ServiceCard;
