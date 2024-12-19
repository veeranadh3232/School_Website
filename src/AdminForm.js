import React, { useState } from "react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    admissionClass: '',
    firstName: '',
    lastName: '',
    studentAadhar: '',
    language: '',
    gender: '',
    nationality: '',
    dob: '',
    placeOfBirth: '',
    tongue: '',
    address: '',
    correspondence: '',
    email: '',
    conveyance: '',
    religion: '',
    fatName: '',
    fatEmail: '',
    fatMobile: '',
    fatDob: '',
    fatQual: '',
    fatOcc: '',
    fatOrgName: '',
    fatOrgAddress: '',
    motName: '',
    motEmail: '',
    motMobile: '',
    motDob: '',
    motQual: '',
    motOcc: '',
    motOrgName: '',
    motOrgAddress: '',
    timeSpentWithChild: '',
    localGuardian: '',
    wedAddress: '',
    lastClass: '',
    lastSchool: '',
    qualPromotion: '',
    tcSheet: '',
    tcDate: '',
    medStudy: '',
    casteCategory: '',
    casteSubCategory: '',
    identificationMarks: '',
    healthProblem: '',
    bloodGroup: '',
    familyDoctor: '',
    phyChallenged: '',
    learnDisability: '',
    sibling: '',
    pic: null,
    fatPhoto: null,
    motPhoto: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send formData to an API.
    console.log(formData);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <img src="https://idps.accevate.com/f/img/Logo.png" alt="Logo" className="form-logo" />
        <h1 style={{ color: "#177348" }}>INTERNATIONAL DELHI PUBLIC SCHOOL</h1>
        <p style={{ color: "#177348" }}>
          AREPALLI ROAD, PONNAPALLI(V), CHERUKUPALLI(M), BAPATLA(DT), AP - 522259
        </p>
        <h2 style={{ color: "#177348" }}>Application Form</h2>
      </div>
      <hr />
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h3 className="heading1">
          <i className="fas fa-user-graduate"></i> Student Details
        </h3>

        <div className="form-row single-line">
          <div className="form-group">
            <label>Admission Class *</label>
            <select
              name="admissionClass"
              value={formData.admissionClass}
              onChange={handleChange}
              required
            >
              <option value="">-Select-</option>
              <option value="1">PP1 (LKG)</option>
              <option value="2">Nursery</option>
              {/* Add other options */}
            </select>
          </div>
          <div className="form-group">
            <label>Student Name *</label>
            <input
              type="text"
              name="firstName"
              placeholder="Student Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Student Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row single-line">
          <div className="form-group">
            <label>Student Aadhar No. *</label>
            <input
              type="text"
              name="studentAadhar"
              placeholder="Enter Student Aadhar"
              value={formData.studentAadhar}
              onChange={handleChange}
              required
              maxLength="12"
              pattern="[0-9]{12}"
              title="Aadhar number must be 12 digits long"
            />
          </div>
          <div className="form-group">
            <label>Language</label>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
            >
              <option value="">---Select Language---</option>
              <option value="hindi">Hindi</option>
              <option value="telugu">Telugu</option>
              <option value="french">French</option>
            </select>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">--Select gender--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className="form-row single-line">
          <div className="form-group">
            <label>Nationality</label>
            <input
              type="text"
              name="nationality"
              placeholder="Enter Nationality"
              value={formData.nationality}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Place Of Birth</label>
            <input
              type="text"
              name="placeOfBirth"
              placeholder="Enter Place of Birth"
              value={formData.placeOfBirth}
              onChange={handleChange}
            />
          </div>
        </div>

        <h3 className="heading1">
          <i className="fas fa-user-circle"></i> Father Details
        </h3>

        <div className="form-row single-line">
          <div className="form-group">
            <label>Father's Full Name</label>
            <input
              type="text"
              name="fatName"
              placeholder="Enter Father Name"
              value={formData.fatName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Father's Email</label>
            <input
              type="email"
              name="fatEmail"
              placeholder="Father's Email"
              value={formData.fatEmail}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Father's Mobile No. *</label>
            <input
              type="tel"
              name="fatMobile"
              placeholder="Enter Mobile No"
              value={formData.fatMobile}
              onChange={handleChange}
              maxLength="10"
              required
            />
          </div>
        </div>

        {/* Similarly, handle other form fields for father, mother, wedding, last study, etc. */}

        <h3 className="heading1">
          <i className="fas fa-camera"></i> UPLOAD PHOTOS
        </h3>

        <div className="form-row single-line">
          <div className="form-group">
            <label>Student's Photo</label>
            <input
              type="file"
              name="pic"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="form-group">
            <label>Father's Photo</label>
            <input
              type="file"
              name="fatPhoto"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="form-group">
            <label>Mother's Photo</label>
            <input
              type="file"
              name="motPhoto"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <center>
          <button type="submit" className="submit-btn">
            <i className="fas fa-paper-plane"></i> Submit
          </button>
        </center>
      </form>
    </div>
  );
};

export default ApplicationForm;
