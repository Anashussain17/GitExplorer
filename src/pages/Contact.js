import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting GitExplorer!");
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" }); // reset
  };

  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        <h2 className="mb-3 text-primary">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="form-control mb-3"
            placeholder="Your Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="form-control mb-3"
            placeholder="Your Message"
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
