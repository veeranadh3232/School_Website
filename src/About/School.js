import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function School() {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <h4>About Us</h4>
        <p>
          <span>Home</span> &gt; About us
        </p>
      </div>

      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-4">
            <img
              src="https://idpscherukupalli.com/assets/img/idpscherukupalli.jpg"
              alt="Placeholder"
              style={{ height: "300px", width: "350px" }}
              className="img-fluid rounded"
            />
          </div>
          {/* Content Section */}
          <div className="col-md-8">
            <h2>ABOUT</h2>
            <h4>International Delhi Public School</h4>
            <p style={{ textAlign: "justify" }}>
              Welcome to International Delhi Public School (IDPS), we are
              dedicated to fostering an environment that nurtures academic
              excellence and holistic development...
            </p>
          </div>
        </div>

        <p style={{ textAlign: "justify" }}>
          At the heart of our ethos lies a commitment to diversity and
          inclusivity...
        </p>

        <div className="row mt-4">
          {/* Vision Section */}
          <div className="col-md-6">
            <h2>Vision</h2>
            <p style={{ textAlign: "justify" }}>
              To empower every student to become a life-long learner who is
              responsible, productive, and an engaged citizen...
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://idpscherukupalli.com/assets/img/newpic/LIBRARY-large.jpg"
              alt="Library"
              style={{ height: "300px", width: "600px" }}
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="row mt-4">
          <div className="col-md-6">
            <h2>Mission</h2>
            <p style={{ textAlign: "justify" }}>
              Our guiding mission is to cultivate an educational milieu rich in
              inclusivity, civic responsibility...
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://idpscherukupalli.com/assets/img/newpic/librarygirl.JPG"
              alt="Library Girl"
              style={{ height: "300px", width: "500px" }}
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="row mt-4">
          <div className="col-md-6">
            <h2>Philosophy</h2>
            <p style={{ textAlign: "justify" }}>
              What is meant by giving education? Is it just the transfer of
              knowledge from teachers to students? No...
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://idpscherukupalli.com/assets/img/3.jpg"
              alt="Placeholder"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Faculty Section */}
        <div className="row mt-4">
          <div className="col-md-6">
            <h2>Faculty</h2>
            <p style={{ textAlign: "justify" }}>
              Each of our faculty members has a proven track record of educating
              students with a focus on building strong fundamental knowledge...
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://idpscherukupalli.com/assets/img/newpic/facuilty.jpg"
              alt="Faculty"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className="row mt-4">
          <div className="col-md-6">
            <h2>Infrastructure</h2>
            <p style={{ textAlign: "justify" }}>
              The school is where your child will spend a huge amount of time in
              his/her academic life. Hence, it is of utmost importance...
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://idpscherukupalli.com/assets/img/newpic/infra.JPG"
              alt="Infrastructure"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default School;
