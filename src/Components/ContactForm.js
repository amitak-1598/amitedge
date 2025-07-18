import React, { useState } from 'react';
import '../ContactForm.css';
import axios from "axios";
import Swal from 'sweetalert2'



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Optional: Add API call here

    console.log(formData)
    var myObject={
      "email":formData.email,
      "name":formData.name,
      "message":formData.message,
      "subject":formData.subject,
      "createdBy":"ADMIN"
    }
console.log(myObject)

axios.post("https://dashboard.amitak.xyz/contactus",myObject).then((response)=>{
console.log(response)

Swal.fire({
  title: "Query Submitted",
  text: "We will contact you soon!",
  icon: "success"
});




}).catch((err)=>{
  console.log(err)
  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
})





    // Clear form
    // setFormData({
    //   name: '',
    //   email: '',
    //   subject: '',
    //   message: '',
    // });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Have a question or want to enroll? We'd love to hear from you.</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            value={formData.subject}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="5" 
            value={formData.message}
            onChange={handleChange}
            required 
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
