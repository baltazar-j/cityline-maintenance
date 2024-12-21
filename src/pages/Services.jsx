import { useNavigate } from "react-router-dom";  // Import the useNavigate hook
import ServiceCard from "../components/ServiceCard";
import "../components/ServiceCard.css";
import Footer from "../components/Footer";

function Services() {
  const navigate = useNavigate();  // Initialize navigate function
  
  const services = [
    { title: "Snow Removing / Salting", description: "Ensure safety and accessibility during the winter months with our efficient snow removal and salting services. We help prevent icy hazards and keep your property clear, safe, and functional, no matter how harsh the weather." },
    { title: "Janitorial Services", description: "Keep your commercial or residential spaces spotless with our comprehensive janitorial services. From daily cleaning to specialized tasks, we deliver a clean and inviting environment tailored to your needs." },
    { title: "Lawn Maintenance", description: "Maintain a lush, healthy, and well-manicured lawn with our professional lawn care services. From mowing and edging to fertilization and seasonal cleanup, we help your outdoor spaces thrive year-round." },
    { title: "Dryer Vent Cleaning", description: "Enhance safety and efficiency with our dryer vent cleaning services. We remove lint buildup and blockages, reducing the risk of fires and ensuring optimal appliance performance." },
    { title: "Property Maintenance", description: "Protect your investment with our reliable property maintenance services. Whether it's routine upkeep or addressing specific concerns, we ensure your property stays in top condition." },
    { title: "Other Services", description: "Looking for something not listed? We offer a variety of additional services tailored to meet your unique needs. Contact us today to discuss your requirements, and we'll be happy to assist!" }
  ];

  const handleCardClick = () => {
    navigate("/contact");  // Navigate to the contact page when a card is clicked
  };

  return (
    <div>
      <h1 className="services-heading">Our Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} onClick={handleCardClick}>
            <ServiceCard 
              title={service.title} 
              description={service.description} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
