import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const StudentForm = () => {
  const handleSubmit = (event) => {
    const form = event.target;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  };

  return (
    <>
    <Navbar/>
    <div>
    
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div
          className="container p-4 bg-white shadow rounded"
          style={{ maxWidth: "600px" }}
        >
          <h2 className="text-center mb-4">Student Information Form</h2>
          <form
            className="needs-validation"
            noValidate
            onSubmit={handleSubmit}
          >
            {/* First Name and Last Name */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter your first name"
                  required
                />
                <div className="invalid-feedback">First name is required.</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter your last name"
                  required
                />
                <div className="invalid-feedback">Last name is required.</div>
              </div>
            </div>

            {/* Email and Phone Number */}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid email address.
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  pattern="[0-9]{10}"
                  required
                />
                <div className="invalid-feedback">
                  Phone number must be 10 digits.
                </div>
              </div>
            </div>

            {/* Grade Dropdown */}
            <div className="mb-3">
              <label htmlFor="grade" className="form-label">
                Grade
              </label>
              <select className="form-select" id="grade" required>
                <option value="" disabled>
                  Select your grade
                </option>
                {/* Grades from 1 to 12 */}
                {Array.from({ length: 12 }, (_, i) => i + 1).map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
              <div className="invalid-feedback">Please select a grade.</div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Enquiry Now
            </button>
          </form>
        </div>
      </div>

    </div>
    <Footer/>
</>
);
};

export default StudentForm;
