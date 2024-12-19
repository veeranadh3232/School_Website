// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import './header.css';
// import './footer.css';
// import { Link } from 'react-router-dom';

// function Navbar (){
//   const [dateTime, setDateTime] = useState('');

//   useEffect(() => {
//     const updateDateTime = () => {
//       const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//       const now = new Date();
//       const day = days[now.getDay()];
//       const time = now.toLocaleTimeString(); // e.g., 12:34:56 PM
//       const date = now.toLocaleDateString(); // e.g., 12/13/2024
//       setDateTime(`${day}, ${time}, ${date}`);
//     };

//     updateDateTime();
//     const interval = setInterval(updateDateTime, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
      // <div style={{ width: '100%', height: '35px', backgroundColor: '#204932' }}>
      //   <div className="container-fluid">
      //     <div className="row">
      //       <div className="col-md-6 text-center">
      //         <div style={{ color: 'white', height:'15px', marginTop: '5px' }} id="datetime">
      //           {dateTime}
      //         </div>
      //       </div>
      //       <div className="col-md-6 text-center">
      //         <div className="social-icons">
      //           <Link to="https://www.facebook.com/people/Idps-Cherukupalli/61554664603652/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
      //             <i className="fab fa-facebook-f" style={{ fontSize: 'smaller' }}></i>
      //           </Link>
      //           <Link to="https://twitter.com/CherukupalliDps/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
      //             <i className="fab fa-twitter" style={{ fontSize: 'smaller' }}></i>
      //           </Link>
      //           <Link to="https://www.instagram.com/cherukupalliidps/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
      //             <i className="fab fa-instagram" style={{ fontSize: 'smaller' }}></i>
      //           </Link>
      //           <Link to="https://linktr.ee/idpscherukupalli?utm_source=linktree_profile_share&ltsid=51967bf3-7b11-4b5b-8205-dd009f4ff445" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
      //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" height="20px" style={{ display: 'block', width: 'auto', marginTop: '1px' }}>
      //               <path d="M13.5108 5.85343L17.5158 1.73642L19.8404 4.11701L15.6393 8.12199H21.5488V11.4268H15.6113L19.8404 15.5345L17.5158 17.8684L11.7744 12.099L6.03299 17.8684L3.70842 15.5438L7.93745 11.4361H2V8.12199H7.90944L3.70842 4.11701L6.03299 1.73642L10.038 5.85343V0H13.5108V5.85343ZM10.038 16.16H13.5108V24.0019H10.038V16.16Z" fill="#ffff"></path>
      //             </svg>
      //           </Link>
      //           <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
      //             <i className="fab fa-youtube" style={{ fontSize: 'smaller' }}></i>
      //           </Link>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
//       {/* <div className="container d-flex align-items-center" style={{ padding: '10px' }}>
//         <Link style={{ justifyContent: 'center', width: '100%' }}>
//           <div className="logo" style={{ display: 'flex', gap: '10px', justifyContent: 'center', width: '100%' }}>
//             <img style={{ width: '100px', height: '100px' }} src="https://idpscherukupalli.com/assets/img/idpsfooter.png" alt="Logo" />
//             <div className="logo-cont">
//               <span>International</span>
//               <h3>DELHI PUBLIC SCHOOL</h3>
//               <p>CBSE Affiliation No - 130739</p>
//             </div>
//           </div>
//         </Link>
//       </div> */}
//       <div className="announcement-container">
//         <div className="announcement">
//           <Link to="https://idps.accevate.com/f/registration/appliaction-form" target="_blank" rel="noopener noreferrer" style={{ color: 'red', textDecoration: 'none' }}>
//             ADMISSION OPEN FOR SESSION 2025-26 (FROM CLASS: KINDERGARTEN - GRADE IX & XI)
//           </Link>
//         </div>
//       </div>








//       <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "lightgold", textAlign: 'center' }}>
//         <div className="container-fluid" style={{ textAlign: 'center' }}>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li>
//               <img style={{ width: '100px', height: '100px' }} src="https://idpscherukupalli.com/assets/img/idpsfooter.png" alt="Logo" />

//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//               </li>
            //   <li className="nav-item dropdown">
            //     <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            //       About Us
            //     </Link>
            //     <ul className="dropdown-menu">
            //       <li><Link className="dropdown-item" to="/school">About School</Link></li>
            //       <li><Link className="dropdown-item" to="/aboutfounder">Message from Founder</Link></li>
            //       <li><Link className="dropdown-item" to="/academic">Message from Academic Director</Link></li>
            //       <li><Link className="dropdown-item" to="/principal">Message from Principal</Link></li>
            //     </ul>
            //   </li>



            //   <li className="nav-item dropdown">
            //     <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            //       Academics
            //     </Link>
            //     <ul className="dropdown-menu">
            //       <li><Link className="dropdown-item" to="/preprimary">Pre Primary</Link></li>
            //       <li><Link className="dropdown-item" to="/primary">Primary School</Link></li>
            //       <li><Link className="dropdown-item" to="/middileschool">Middle School</Link></li>
            //       <li><Link className="dropdown-item" to="/beyondacademics">Beyond Academics</Link></li>
            //       <li><Link className="dropdown-item" to="/assesmentpolicy">Assessment & Promotion Rules</Link></li>
            //     </ul>
            //   </li>



            //   <li className="nav-item dropdown">
            //     <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            //       Student Life
            //     </Link>
            //     <ul className="dropdown-menu">
            //     <li><Link className="dropdown-item" to="/educationframework">Education Framework</Link></li>
            //     <li><Link className="dropdown-item" to="/extracurricular">Extra Curricular Activities</Link></li>
            //     <li><Link className="dropdown-item" to="/curricular">Co Curricular Activities</Link></li>
            //     <li><Link className="dropdown-item" to="/facilities">Facilities</Link></li>
            //     <li><Link className="dropdown-item" to="/safetysecurity">Safety and Security</Link></li>
            //   </ul>
            // </li>

            // <li className="nav-item dropdown">
            //   <Link
            //     className="nav-link dropdown-toggle"
            //     to="#"
            //     role="button"
            //     data-bs-toggle="dropdown"
            //     aria-expanded="false"
            //   >
            //     Admissions
            //   </Link>
            //   <ul className="dropdown-menu">
            //     <li><Link className="dropdown-item" to="./Admissions/OnlineRegistration.html">Online Registration</Link></li>
            //     <li><Link className="dropdown-item" to="/offlineregister">Offline Registration</Link></li>
            //   </ul>
            // </li>

            // <li className="nav-item dropdown">
            //   <Link
            //     className="nav-link dropdown-toggle"
            //     to="#"
            //     role="button"
            //     data-bs-toggle="dropdown"
            //     aria-expanded="false"
            //   >
            //     Enrollment
            //   </Link>
            //   <ul className="dropdown-menu">
            //     <li><Link className="dropdown-item" to="/enrollmentguide">Enrollment Guide</Link></li>
            //     <li><Link className="dropdown-item" to="/feestructure">Fee Structure</Link></li>
            //     <li><Link className="dropdown-item" to="/agecriteria">Age Criteria</Link></li>
            //     <li><Link className="dropdown-item" to="/documentrequired">Documents Required</Link></li>
            //   </ul>
            // </li>

            // <li className="nav-item">
            //   <Link className="nav-link active" to="/transport">Transport</Link>
            // </li>

            // <li className="nav-item">
            //   <Link className="nav-link active" to="/carrers">Careers</Link>
            // </li>

            // <li className="nav-item">
            //   <Link className="nav-link active" to="/gallery">Gallery</Link>
            // </li>

            // <li className="nav-item">
            //   <Link className="nav-link active" to="/contactus">Contact Us</Link>
            // </li>

            // <li className="nav-item">
            //   <Link className="nav-link active" to="/mandatorydisclosure">Mandatory Disclosure</Link>
            // </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//     </>
//   );
// };

// export default Navbar;


import React, { useState,useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import './header.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const now = new Date();
      const day = days[now.getDay()];
      const time = now.toLocaleTimeString(); // e.g., 12:34:56 PM
      const date = now.toLocaleDateString(); // e.g., 12/13/2024
      setDateTime(`${day}, ${time}, ${date}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <div style={{ width: '100%', height: '35px', backgroundColor: '#204932' }}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 text-center">
          <div style={{ color: 'white', height:'15px', marginTop: '5px' }} id="datetime">
            {dateTime}
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className="social-icons">
            <a to="https://www.facebook.com/people/Idps-Cherukupalli/61554664603652/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f" style={{ fontSize: 'smaller' }}></i>
            </a>
            <a to="https://twitter.com/CherukupalliDps/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
              <i className="fab fa-twitter-t" style={{ fontSize: 'smaller' }}></i>
            </a>
            <a to="https://www.instagram.com/cherukupalliidps/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <i className="fab fa-instagram" style={{ fontSize: 'smaller' }}></i>
            </a>
            <a to="https://linktr.ee/idpscherukupalli?utm_source=linktree_profile_share&ltsid=51967bf3-7b11-4b5b-8205-dd009f4ff445" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" height="20px" style={{ display: 'block', width: 'auto', marginTop: '1px' }}>
                <path d="M13.5108 5.85343L17.5158 1.73642L19.8404 4.11701L15.6393 8.12199H21.5488V11.4268H15.6113L19.8404 15.5345L17.5158 17.8684L11.7744 12.099L6.03299 17.8684L3.70842 15.5438L7.93745 11.4361H2V8.12199H7.90944L3.70842 4.11701L6.03299 1.73642L10.038 5.85343V0H13.5108V5.85343ZM10.038 16.16H13.5108V24.0019H10.038V16.16Z" fill="#ffff"></path>
              </svg>
            </a>
            <a to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
              <i className="fab fa-youtube" style={{ fontSize: 'smaller' }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
style={{ width: '80px', height: '60px' }} src="https://idpscherukupalli.com/assets/img/idpsfooter.png"
alt="Oakridge Logo"
            className="navbar-logo"
          />
            <div className="logo-text">International Delhi Public School</div>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" exact>
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/school">About School</Link></li>
                  <li><Link className="dropdown-item" to="/aboutfounder">Message from Founder</Link></li>
                  <li><Link className="dropdown-item" to="/academic">Message from Academic Director</Link></li>
                  <li><Link className="dropdown-item" to="/principal">Message from Principal</Link></li>
                </ul>
              </li>



              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Academics
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/preprimary">Pre Primary</Link></li>
                  <li><Link className="dropdown-item" to="/primary">Primary School</Link></li>
                  <li><Link className="dropdown-item" to="/middileschool">Middle School</Link></li>
                  <li><Link className="dropdown-item" to="/beyondacademics">Beyond Academics</Link></li>
                  <li><Link className="dropdown-item" to="/assesmentpolicy">Assessment & Promotion Rules</Link></li>
                </ul>
              </li>



              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Student Life
                </Link>
                <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/educationframework">Education Framework</Link></li>
                <li><Link className="dropdown-item" to="/extracurricular">Extra Curricular Activities</Link></li>
                <li><Link className="dropdown-item" to="/curricular">Co Curricular Activities</Link></li>
                <li><Link className="dropdown-item" to="/facilities">Facilities</Link></li>
                <li><Link className="dropdown-item" to="/safetysecurity">Safety and Security</Link></li>
              </ul>
            </li> */}

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admissions
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="./Admissions/OnlineRegistration.html">Online Registration</Link></li>
                <li><Link className="dropdown-item" to="/offlineregister">Offline Registration</Link></li>
              </ul>
            </li>

            {/* <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Enrollment
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/enrollmentguide">Enrollment Guide</Link></li>
                <li><Link className="dropdown-item" to="/feestructure">Fee Structure</Link></li>
                <li><Link className="dropdown-item" to="/agecriteria">Age Criteria</Link></li>
                <li><Link className="dropdown-item" to="/documentrequired">Documents Required</Link></li>
              </ul>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link active" to="/transport">Transport</Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link active" to="/carrers">Careers</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/gallery">Gallery</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/contactus">Contact Us</Link>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link active" to="/mandatorydisclosure">Mandatory Disclosure</Link>
            </li>
 
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
