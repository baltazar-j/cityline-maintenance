// eslint-disable-next-line no-unused-vars
import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <h3><strong>{title}</strong></h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
