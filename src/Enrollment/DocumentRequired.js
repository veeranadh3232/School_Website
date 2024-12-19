import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const DocumentRequired = () => {
  const keyFeatures = [
    {
      title: "Documents to be submitted with the Application Form",
      items: [
        "Completed Application Form - the application form should include a recent passport-size colour photograph of the candidate pasted on the form.",
        "Photocopy of the Birth Certificate - A copy of the birth certificate issued by the Municipal Corporation or a competent authority. Certificates from doctors, nursing homes, or similar sources will not be accepted.",
        "Aadhaar Card of Parents and Student - A photocopy of the Aadhaar Card of both parents and the student is required as proof of identity.",
      ],
    },
    {
      title: "Documents to be submitted at the Time of Admission",
      items: [
        "School Leaving/Transfer Certificate - This document is mandatory for students enrolling in Class II and above. Admission cannot be granted without this document.",
        "Previous Year’s Report Card - Required for students transferring from another school to provide academic continuity.",
        "Medical Certificate - A current medical certificate as part of the admission process.",
        "Character Certificate - A character certificate from the previous school is required for all transferring students.",
        "Recent Passport-Size Colour Photographs of the candidate and both parents.",
      ],
    },
  ];

  return (
    <>
    <Navbar/>
    <div>
      <h3 style={{ textAlign: "center" }}>
        Required Documents for Admission at IDPS Cherukupalli
      </h3>
      <p style={{ textAlign: "center" }}>
        To ensure a smooth admission process at IDPS Cherukupalli, parents are
        required to submit the following documents:
      </p>

      <div className="content-section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Key Features</h2>
          <div className="row justify-content-center">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="col-md-4 mx-2 mb-4 d-flex">
                <div className="card text-center shadow-sm flex-grow-1 d-flex flex-column">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{feature.title}</h5>
                    <ul>
                      {feature.items.map((item, i) => (
                        <li key={i} style={{ textAlign: "justify" }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default DocumentRequired;
