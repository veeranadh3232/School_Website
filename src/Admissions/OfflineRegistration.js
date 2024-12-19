import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const OfflineRegistration = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log('Form submitted!');
  };

  return (
    <>
    <Navbar/>
    <div className="contact-section container">
      <div className="row mt-4">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Message"
                required
              />
            </div>
            <button type="submit" className="btn w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default OfflineRegistration;