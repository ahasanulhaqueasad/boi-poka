import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-base-100 py-16 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold mb-12 text-base-content">
        Get In Touch
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 1. Contact Form (Using daisyUI components) */}
        <div className="card bg-base-200 shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input input-bordered w-full"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <textarea
                name="message"
                placeholder="Your Message"
                className="textarea textarea-bordered h-32"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full mt-2 uppercase"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* 2. Contact Details & 3. Social Media */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4 text-lg">
              <p className="flex items-center gap-3">
                <span className="text-primary font-bold">📍</span>
                123 Tech Street, Silicon Valley, CA, USA
              </p>
              <p className="flex items-center gap-3">
                <span className="text-primary font-bold">📞</span>
                +1 (555) 000-1234
              </p>
              <p className="flex items-center gap-3">
                <span className="text-primary font-bold">✉️</span>
                contact@yourdomain.com
              </p>
              <p className="flex items-center gap-3">
                <span className="text-primary font-bold">⏰</span>
                Mon - Fri: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* Social Media Links using daisyUI buttons */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://facebook.com"
                className="btn btn-outline btn-info btn-sm"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com"
                className="btn btn-outline btn-primary btn-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                className="btn btn-outline btn-info btn-sm"
              >
                Twitter
              </a>
              <a
                href="https://github.com/ahasanulhaqueasad"
                className="btn btn-outline btn-neutral btn-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Google Maps Integration */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
        <div className="overflow-hidden rounded-xl shadow-lg border border-base-300">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sbd!4v1712345678901!5m2!1sen!2sbd"
            width="100%"
            height="400"
            className="border-0 grayscale hover:grayscale-0 transition duration-500"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
