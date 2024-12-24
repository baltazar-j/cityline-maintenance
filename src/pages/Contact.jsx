import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_9npghii', // Replace with your EmailJS service ID
        'template_nm83bl8', // Replace with your EmailJS template ID
        formData,
        'UNEHQhxS8cR9frOvB' // Replace with your EmailJS user ID 
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            description: '',
            address: '',
          });
        },
        (err) => {
          console.error('FAILED...', err);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={sendEmail}>
  <div className="form-grid">
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleChange}
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name="phone"
      placeholder="Phone Number"
      value={formData.phone}
      onChange={handleChange}
      required
    />
    <select
      name="service"
      className="service-mobile"
      value={formData.service}
      onChange={handleChange}
      required
    >
      <option value="" disabled>
        Select a Service
      </option>
      <option value="Cleaning">Janitorial Services</option>
      <option value="Repair">Snow Removal / Salting</option>
      <option value="Maintenance">Lawn Maintenance</option>
      <option value="Consultation">Dryer Vent Cleaning</option>
      <option value="Maintenance">Property Maintenance</option>
      <option value="Maintenance">Other (Specify in Description)</option>
    </select>
  </div>
  <textarea
    name="description"
    placeholder="Job Description"
    value={formData.description}
    onChange={handleChange}
    required
  />
  <input
    type="text"
    name="address"
    placeholder="City/Address"
    value={formData.address}
    onChange={handleChange}
    required
  />
  <button type="submit">Send</button>
</form>

    </div>
  );
};

export default Contact;
