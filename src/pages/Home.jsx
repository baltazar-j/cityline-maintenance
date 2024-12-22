import { useNavigate } from "react-router-dom";
import "./Home.css"; 

function Home() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form submission to redirect to the contact page
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    navigate("/contact"); // Redirect to the contact page
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <img
          src="/CityLine-Maintenance-Main.svg" // Replace with your hero image path
          alt="Hero"
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-slogan">Reliable Care for Your Property.</h1>
        </div>
      </div>

      {/* Get Your Free Quote Section */}
      <section className="free-quote">
        <h2><strong>Get Your Free Quote</strong></h2>
        <h4 className="highlight"><strong>Residential & Commercial</strong></h4>
        <form className="quote-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="form-input"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="form-input"
          />
          <button type="submit" className="form-button">
            Next
          </button>
        </form>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2><strong>About Us</strong></h2>
        <p>
          CityLine offers a comprehensive range of property maintenance services,
          including snow removal, salting, lawn care, and janitorial services. We
          specialize in ensuring properties are safe, clean, and well-maintained year-round.
          Whether it&apos;s clearing snow and ice during the winter, salting walkways for safety,
          providing professional lawn care in the warmer months, or delivering thorough cleaning
          services for both residential and commercial spaces, we ensure that our clients&apos; properties
          stay in top condition.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2><strong>Frequently Asked Questions</strong></h2>
        <div className="faq-item">
          <h3>What services do you offer?</h3>
          <p>
            We offer a range of services including snow removal, salting, janitorial
            services, lawn maintenance, dryer vent cleaning, and more. Check our
            Services page for a full list.
          </p>
        </div>
        <div className="faq-item">
          <h3>How can I request a service?</h3>
          <p>
            You can request a service by visiting our Contact page and filling out the
            inquiry form. We&apos;ll get back to you promptly.
          </p>
        </div>
        <div className="faq-item">
          <h3>Do you provide services year-round?</h3>
          <p>
            Yes, we provide comprehensive maintenance services throughout the year to
            meet your seasonal needs.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
