import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";


const ContactUs = () => {
  return (
    <>
    <div>
      
      <div className="contact-section container">
        <h2 className="text-center">Contact Us</h2>
        <div className="row mt-4">
          {/* Contact Information */}
          <div className="col-md-6">
            <h5>Location:</h5>
            <p>CHERUKUPALLI</p>
            <h5>Email:</h5>
            <p>idpscherukupalli@gmail.com</p>
            <h5>Call:</h5>
            <p>Parents Help Line Desk</p>
            <p>Landline No: 864293020</p>
            <p>Admission Helpline No: 7799 7979 31</p>
            <p>Reception Helpline No: 7799 7979 32</p>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn w-100" style={{ backgroundColor: "#28a745", color: "white" }}>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-container mt-4" style={{ height: "300px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.8340733908!2d80.54684250465792!3d16.307958866994094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f52b2f0b42cf%3A0x259cb4f1d4aa48b2!2sCherukupalli%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1672544862587!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>

    
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
