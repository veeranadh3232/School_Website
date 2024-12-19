import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const FeeStructure = () => {
  return (
    <>
    <Navbar/>
    <div>
      <h3 style={{ textAlign: 'center' }}>
        Documents Required for Admission at IDPS Cherukupalli
      </h3>
      <p style={{textAlign:"justify"}}>
        To ensure a smooth admission process at IDPS Cherukupalli, parents are
        required to submit the following documents:
      </p>

      <h5 style={{ textAlign: 'center' }}>Documents to be Submitted with the Application Form:</h5>
      <ul style={{textAlign:"justify"}}>
        <li>
          <strong>Completed Application Form:</strong> The application form should
          include a recent passport-size colour photograph of the candidate pasted
          on the form.
        </li>
        <li>
          <strong>Photocopy of the Birth Certificate:</strong> A copy of the birth
          certificate issued by the Municipal Corporation or a competent authority.
          Certificates from doctors, nursing homes, or similar sources will not be
          accepted.
        </li>
        <li>
          <strong>Aadhaar Card of Parents and Student:</strong> A photocopy of the
          Aadhaar Card of both parents and the student is required as proof of identity.
        </li>
      </ul>

      <h5 style={{ textAlign: 'center' }}>Documents to be Submitted at the Time of Admission:</h5>
      <ul style={{textAlign:"justify"}}>
        <li>
          <strong>School Leaving/Transfer Certificate:</strong> This document is
          mandatory for students enrolling in Class II and above. Admission cannot be
          granted without this document.
        </li>
        <li>
          <strong>Previous Year’s Report Card:</strong> Required for students transferring
          from another school to provide academic continuity.
        </li>
        <li>
          <strong>Medical Certificate:</strong> A current medical certificate as part of
          the admission process.
        </li>
        <li>
          <strong>Character Certificate:</strong> A character certificate from the previous
          school is required for all transferring students.
        </li>
        <li>
          <strong>Recent Passport-Size Colour Photographs:</strong> Recent passport-size
          colour photographs of the candidate and both parents.
        </li>
      </ul>
    </div>
    <Footer/>
    </>
  );
};

export default FeeStructure;
