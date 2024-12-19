import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const EnrollmentGuide = () => {
  const onlineSteps = [
    "Complete the Online Application - Parents can initiate the enrollment process by filling out the online application form available on our website. This form collects essential information about the student, including their educational background and personal details.",
    "Submission of Necessary Documents - As part of the online application process, parents must upload necessary documents, such as the student's Aadhaar card, birth certificate, and any previous academic records. This documentation is crucial for confirming the student's identity and educational history.",
    "Enrollment Confirmation - Once the online application is submitted and documents verified, parents will receive an enrollment letter from IDPS Cherukupalli. This letter provides important details regarding the next steps in the enrollment process.",
    "Registration Process - Upon confirmation of the student’s placement, parents will receive a confirmation email from the registrar. This email will contain a registration link to complete the online registration process.",
    "Assistance with Online Registration - We offer support for parents who may need assistance navigating the online registration. Our registrar is available to answer questions and guide families through the process to ensure a smooth experience.",
  ];

  const offlineSteps = [
    "Obtain a Physical Application Form - For families who prefer an offline approach, they can request a physical application form from the school office. This form collects the same essential information as the online version.",
    "Submission of Necessary Documents - Along with the completed application form, parents must submit necessary documents, including the student's Aadhaar card, birth certificate, and any previous academic records, either in person at the school office or via postal mail. The school staff will acknowledge receipt of the application and documents.",
    "Enrollment Confirmation - Once the application and documents are reviewed, parents will receive an enrollment letter via email or postal mail. This letter will outline the next steps in the enrollment process.",
    "Registration Process - After the student’s placement is confirmed, parents will be contacted by the registrar with information regarding registration. They will receive a registration form to complete and submit in person or via mail.",
    "Assistance with Offline Registration - Our registrar is also available to assist families with the offline registration process. Parents can reach out to the school office for any questions or support needed during this process.",
  ];

  return (
    <>
    <Navbar/>
    <div>
      <h3 style={{ textAlign: "center" }}>Online Enrollment Process</h3>
      <ul>
        {onlineSteps.map((step, index) => (
          <li key={index} style={{ textAlign: "justify", marginBottom: "10px" }}>
            {step}
          </li>
        ))}
      </ul>

      <h3 style={{ textAlign: "center" }}>Offline Enrollment Process</h3>
      <ul>
        {offlineSteps.map((step, index) => (
          <li key={index} style={{ textAlign: "justify", marginBottom: "10px" }}>
            {step}
          </li>
        ))}
      </ul>

      <p style={{ textAlign: "justify", marginTop: "20px" }}>
        At IDPS Cherukupalli, we are committed to providing a flexible and
        supportive enrollment experience, accommodating both online and offline
        preferences. Our goal is to ensure that every student and family feels
        welcomed as they join our vibrant school community.
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default EnrollmentGuide;
